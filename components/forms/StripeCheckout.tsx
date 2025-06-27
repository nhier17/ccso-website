"use client";

import { useState, useEffect } from "react";
import { PaymentElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CreditCard, Shield, Lock } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

interface CheckoutFormProps {
    amount: number;
    frequency: string;
    donorInfo: {
      firstName: string;
      lastName: string;
      email: string;
    };
  }


function CheckoutForm({
    amount,
    frequency,
    donorInfo
}: CheckoutFormProps) {
    const stripe = useStripe();
    const elements = useElements();

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!stripe || !elements) {
          toast.error("Stripe is not initialized");
          return;
        }
        try {
          setIsLoading(true);
          setMessage(null);
          const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              return_url: `${window.location.origin}/donate/thank-you?amount=${amount}&frequency=${frequency}`,
              receipt_email: donorInfo.email,
            },
          });
      
          if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
              setMessage(error.message || 'An error occurred');
              toast.error(error.message || 'Payment failed');
            } else {
              setMessage("An unexpected error occurred.");
              toast.error('An unexpected error occurred');
            }
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
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Donation Summary
            </h4>
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-800 dark:text-blue-200">
                {frequency === 'once' ? 'One-time' : `${frequency.charAt(0).toUpperCase() + frequency.slice(1)}`} donation:
              </span>
              <span className="font-medium text-blue-900 dark:text-blue-100">
                ${amount}
              </span>
            </div>
            <div className="mt-2 text-xs text-blue-700 dark:text-blue-300">
              To: Christ Compassion Service Organization
            </div>
          </div>
  
          <PaymentElement 
            options={{
              layout: 'tabs',
            }}
          />
        </div>
  
        {message && (
          <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 p-3 rounded-lg">
            {message}
          </div>
        )}
  
        <Button
          type="submit"
          size="lg"
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isLoading || !stripe || !elements}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" />
              Complete Donation
            </>
          )}
        </Button>
  
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-600 dark:text-gray-300">
          <div className="flex items-center space-x-1">
            <Shield className="h-3 w-3" />
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-1">
            <Lock className="h-3 w-3" />
            <span>Encrypted</span>
          </div>
          <span>Powered by Stripe</span>
        </div>
      </form>
    );
}

interface StripeCheckoutProps extends CheckoutFormProps {}


export default function StripeCheckout({
    amount,
    frequency,
    donorInfo
}: StripeCheckoutProps) {
    const [clientSecret, setClientSecret] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                const response = await axios.post('/api/create-payment-intent', {
                    amount,
                    frequency,
                    donorInfo
                });
                const data = response.data;
                
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error('Error creating payment intent:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchClientSecret();
    }, [amount, donorInfo, frequency]);
    const options = {
        clientSecret
      };
    
      if (loading) {
        return (
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-6 w-6 text-blue-500 mr-2" />
                Secure Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-500" />
                <p className="text-gray-600 dark:text-gray-300">Initializing secure payment...</p>
              </div>
            </CardContent>
          </Card>
        );
      }
    
      if (!clientSecret) {
        return (
          <Card className="border-0 shadow-lg">
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <p className="text-red-600 dark:text-red-400">Failed to initialize payment. Please try again.</p>
              </div>
            </CardContent>
          </Card>
        );
      }
      
        return (
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-6 w-6 text-blue-500 mr-2" />
                Secure Payment
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your payment information is encrypted and secure
              </p>
            </CardHeader>
            <CardContent>
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm amount={amount} frequency={frequency} donorInfo={donorInfo} />
              </Elements>
            </CardContent>
          </Card>
    );
}
