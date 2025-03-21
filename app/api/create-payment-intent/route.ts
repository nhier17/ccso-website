import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { config } from "@/lib/config";

const stripe = new Stripe(config.env.stripe.secretKey, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const { amount, email, name, isMonthly } = await req.json();

    if (!amount || !email || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

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
      receipt_email: email,
      metadata: { donorName: name, isMonthly: isMonthly ? "true" : "false" },
      setup_future_usage: isMonthly ? "off_session" : undefined,
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json({ error: "Error creating payment intent" }, { status: 500 });
  }
}
