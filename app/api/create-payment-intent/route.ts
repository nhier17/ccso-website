import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  //apiVersion: "2023-10-16",
});

export async function POST(request: Request) {
  try {
    const { amount, email, name, isMonthly } = await request.json();

    // Create a customer
    const customer = await stripe.customers.create({
      email,
      name,
      metadata: {
        isMonthly: isMonthly.toString(),
      },
    });

    // Create the payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        isMonthly: isMonthly.toString(),
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Error creating payment intent" },
      { status: 500 }
    );
  }
}
