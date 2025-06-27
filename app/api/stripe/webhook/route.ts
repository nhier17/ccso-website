import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { config } from "@/lib/config";
import { supabase } from "@/lib/supabase";
import { stripe } from "@/lib/stripe-server";
import { sendEmail } from "@/lib/resend";

const webhookSecret = config.env.stripe.webhookSecret;

async function getCustomerDetailsFromStripe(customerId: string) {
    try {
      const customer = await stripe.customers.retrieve(customerId);
      if (typeof customer === 'object' && 'email' in customer) {
        return {
          email: customer.email,
          name: customer.metadata?.donorName || '',
        };
      }
    } catch (err) {
      console.error('Error fetching customer details:', err);
    }
    return { email: '', name: '' };
  }

export async function POST(req: NextRequest) {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature')!;
  
    let event: Stripe.Event;
  
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }
  
    try {
      switch (event.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = event.data.object as Stripe.PaymentIntent;

          const { id, amount_received, currency, status, metadata } = paymentIntent;
          const donorName = metadata.donorName;
          const donorEmail = metadata.donorEmail;
          const frequency = metadata.frequency;

          const { data: donor, error: donorError } = await supabase
            .from('donations')
            .insert([
              {
                stripe_payment_id: id,
                amount: amount_received,
                currency,
                status,
                donor_name: donorName,
                donor_email: donorEmail,
                frequency,
              },
            ]);


            if (donorError) {
              console.error('Error inserting donation:', donorError);
            } else {
              console.log('Donation inserted successfully:', donor);
            }
            //send email
            try {
            sendEmail({
              firstName: donorName,
              amount: amount_received,
              frequency,
              email: donorEmail,
            });
            } catch (error) {
              console.error('Error sending email:', error);
            }
          
          break;
  
        case 'invoice.payment_succeeded':
          const invoice = event.data.object as Stripe.Invoice;
          console.log('Subscription payment succeeded:', invoice.id);
          
          // Handle successful subscription payment
          // 1. Update subscription status in database
          // 2. Send receipt to customer
          
          break;
  
        case 'customer.subscription.created':
          const subscription = event.data.object as Stripe.Subscription;
          const { id: subId, customer, status:subStatus, current_period_end, metadata:subMetadata } = subscription;

          const { email, name } = await getCustomerDetailsFromStripe(customer.toString());
          const { data: subscriptionData, error: subscriptionError } = await supabase
            .from('subscriptions')
            .insert([
              {
                stripe_subscription_id: subId,
                stripe_customer_id: customer.toString(),
                donor_name: subMetadata?.donorName || name,
                donor_email: subMetadata?.donorEmail || email,
                frequency: subMetadata?.frequency || '',
                status: subStatus,
                current_period_end: new Date(current_period_end * 1000), 
              },
            ]);

            if (subscriptionError) {
              console.error('Error inserting subscription:', subscriptionError);
            } else {
              console.log('Subscription inserted successfully:', subscriptionData);
            }
          
          break;
  
        case 'customer.subscription.updated':
          const updatedSubscription = event.data.object as Stripe.Subscription;
          console.log('Subscription updated:', updatedSubscription.id);
          
          // Handle subscription updates
          
          break;
  
        case 'customer.subscription.deleted':
          const deletedSubscription = event.data.object as Stripe.Subscription;
          console.log('Subscription cancelled:', deletedSubscription.id);
          
          // Handle subscription cancellation
          
          break;
  
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }
  
      return NextResponse.json({ received: true });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return NextResponse.json(
        { error: 'Webhook processing failed' },
        { status: 500 }
      );
    }
  }

