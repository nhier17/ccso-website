"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { donationTiers } from "@/constants";
import { stripePromise, formatAmountForStripe } from "@/lib/stripe";
import { donateSchema } from "@/lib/utils";


type FormData = z.infer<typeof donateSchema>;

export default function DonateForm() {
  const [selectedTier, setSelectedTier] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(donateSchema),
    defaultValues: {
      amount: 50,
      firstName: "",
      lastName: "",
      email: "",
      isMonthly: false,
    },
  });

  const onSubmit = async (values: FormData) => {
    if (step === 1) {
      setStep(2);
      return;
    }

    try {
      setIsLoading(true);

      // Create a payment intent
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: formatAmountForStripe(values.amount, "USD"),
          email: values.email,
          name: `${values.firstName} ${values.lastName}`,
          isMonthly: values.isMonthly,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { clientSecret } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }

      // Confirm the payment with Stripe.js
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            // We'll add the card element in the next step
          },
          billing_details: {
            name: `${values.firstName} ${values.lastName}`,
            email: values.email,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (paymentIntent.status === "succeeded") {
        router.push("/donate/thank-you");
      }
    } catch (error) {
      toast.error(
        "Error processing payment",
        {
          description: error instanceof Error ? error.message : "Please try again later"
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {step === 1 ? (
          <>
            {/* Step 1: Amount Selection */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {donationTiers.map((tier) => (
                  <Card
                    key={tier.amount}
                    className={`p-6 cursor-pointer transition-all ${
                      selectedTier === tier.amount
                        ? "border-primary ring-2 ring-primary"
                        : "hover:border-primary"
                    } ${tier.recommended ? "border-primary" : ""}`}
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      form.setValue("amount", tier.amount);
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{tier.title}</h3>
                      {tier.recommended && (
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="text-2xl font-bold mb-2">${tier.amount}</div>
                    <p className="text-sm text-gray-600 mb-2">{tier.description}</p>
                    <p className="text-xs text-primary">{tier.impact}</p>
                  </Card>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-amount">Custom Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    className="pl-8"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedTier(null);
                      form.setValue("amount", Number(e.target.value));
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <FormField
                  control={form.control}
                  name="isMonthly"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="!mt-0">
                        Make this a monthly donation
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Step 2: Personal Information */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Stripe Card Element will go here */}
              <div className="mt-4">
                <Label>Card Details</Label>
                <div className="h-12 bg-gray-100 rounded-md mt-2" id="card-element" />
              </div>
            </div>
          </>
        )}

        {/* Progress and Buttons */}
        <div className="space-y-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${(step / 2) * 100}%` }}
            ></div>
          </div>

          <div className="flex justify-between">
            {step === 2 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                disabled={isLoading}
              >
                Back
              </Button>
            )}
            <Button
              type="submit"
              className="ml-auto bg-primary text-white hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </div>
              ) : step === 1 ? (
                "Continue"
              ) : (
                "Complete Donation"
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}