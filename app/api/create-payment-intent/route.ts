import { NextRequest, NextResponse } from "next/server";
import { formatAmountForStripe } from "@/lib/utils";
import { stripe } from "@/lib/stripe-server";
import Stripe from "stripe";


export async function POST(req: NextRequest) {
  try {
    const { amount, donorInfo, frequency, currency = "USD" } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Create customer
    const customer = await stripe.customers.create({
      email: donorInfo.email,
      metadata: {
        donorName: `${donorInfo.firstName} ${donorInfo.lastName}`,
        organization: 'CCSO',
      },
    });

    if (frequency === 'once') {
      // Create payment intent for one-time donations
      const paymentIntent = await stripe.paymentIntents.create({
        amount: formatAmountForStripe(amount, currency),
        currency: currency,
        customer: customer.id,
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          donorName: `${donorInfo.firstName} ${donorInfo.lastName}`,
          donorEmail: donorInfo.email,
          frequency: frequency,
          organization: 'CCSO',
        },
      });

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        customerId: customer.id,
      });
    } else {
      // Create price for recurring donations
      const price = await stripe.prices.create({
        unit_amount: formatAmountForStripe(amount, currency),
        currency: currency,
        recurring: {
          interval: frequency === 'monthly' ? 'month' : 
                   frequency === 'quarterly' ? 'month' : 'year',
          interval_count: frequency === 'quarterly' ? 3 : 1,
        },
        product_data: {
          name: 'CCSO Donation',
        },
      });

      // Create subscription
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: price.id }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
        metadata: {
          donorName: `${donorInfo.firstName} ${donorInfo.lastName}`,
          frequency: frequency,
          organization: 'CCSO',
        },
      });

      const invoice = subscription.latest_invoice as Stripe.Invoice;
      const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        subscriptionId: subscription.id,
        customerId: customer.id,
      });
    }
  } catch (error: any) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: error.message || "Error creating payment intent" },
      { status: 500 }
    );
  }
}
