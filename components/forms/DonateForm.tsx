"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { donationTiers } from "@/constants";
import { formatAmountForStripe } from "@/lib/stripe";
import { donateSchema } from "@/lib/utils";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CustomInput, { FormFieldType } from "../CustomInput";
import { Loader2 } from "lucide-react";

type FormData = z.infer<typeof donateSchema>;

export default function DonateForm() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const form = useForm<FormData>({
    resolver: zodResolver(donateSchema),
    mode: "onChange", 
    defaultValues: {
      amount: 0,
      firstName: "",
      lastName: "",
      email: "",
      isMonthly: false,
    },
  });

  const onSubmit = async (values: FormData) => {  
    setIsLoading(true);
    try {
      if (!stripe || !elements) throw new Error("Stripe is not initialized.");

      // Create a payment intent
      const response = await axios.post("/api/create-payment-intent", {
        amount: formatAmountForStripe(values.amount, "USD"),
        email: values.email,
        name: `${values.firstName} ${values.lastName}`,
        isMonthly: values.isMonthly,
      });

      if (!response.data.clientSecret) {
        throw new Error("Network response was not ok");
      }

      const { clientSecret } = response.data;
      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              <CustomInput 
                control={form.control}
                name="amount"
                fieldType={FormFieldType.INPUT}
                label="Custom Amount"
                placeholder="Enter custom amount"
                type="number"
                disabled={selectedTier !== null}
                onChange={(e) => {
                  setSelectedTier(null);
                  const value = parseFloat(e.target.value) || 0;
                  form.setValue("amount", value, { shouldValidate: true });
                }}
              />
              </div>

              <div className="flex items-center space-x-2">
                <CustomInput 
                  control={form.control}
                  name="isMonthly"
                  fieldType={FormFieldType.SWITCH}
                  label="Make this a monthly donation"
                />
              </div>
            </div>

            <div className="space-y-4">
              <CustomInput 
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="firstName" 
              label="First Name" 
              placeholder="Enter your first name" 
              />

              <CustomInput 
              control={form.control} 
              name="lastName" 
              label="Last Name" 
              placeholder="Enter your last name" 
              fieldType={FormFieldType.INPUT} 
               />
              <CustomInput 
                 control={form.control} 
                 name="email" 
                 label="Email" 
                 placeholder="Enter your email" 
                 fieldType={FormFieldType.INPUT} 
               />

              <div className="mt-4">
              <Label>Card Details</Label>
              <CardElement className="p-4 border rounded-md bg-gray-50" />
              </div>
            </div>

            <Button
          type="submit"
          className="field-btn"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="animate-spin ml-2" /> : "Donate Now"}
        </Button>
      </form>
    </Form>
  );
}