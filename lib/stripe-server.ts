import Stripe from "stripe";
import { config } from "./config";

if (!config.env.stripe.secretKey) {
    throw new Error("Missing Stripe secret key");
}

export const stripe = new Stripe(config.env.stripe.secretKey, {
    apiVersion: "2025-02-24.acacia",
  });