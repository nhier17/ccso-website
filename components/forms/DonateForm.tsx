"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { donationTiers, presetTierMapping } from "@/constants";
import { donateSchema } from "@/lib/utils";
import CustomInput, { FormFieldType } from "../CustomInput";
import { Loader2, CheckCircle2, Target, Sparkles } from "lucide-react";
import StripeCheckout from "./StripeCheckout";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type FormData = z.infer<typeof donateSchema>;

interface DonateFormProps {
  presetAmount?: number | null;
  presetTier?: string | null;
}

export default function DonateForm({ presetAmount, presetTier }: DonateFormProps) {
  const [selectedTierAmount, setSelectedTierAmount] = useState<number | null>(presetAmount || null);
  const [selectedTierTitle, setSelectedTierTitle] = useState<string | null>(presetTier || null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(donateSchema),
    mode: "onChange",
    defaultValues: {
      amount: presetAmount || 0,
      firstName: "",
      lastName: "",
      email: "",
      frequency: "monthly",
    },
  });

  // Find the tier amount based on tier title
  const getTierAmountFromTitle = (title: string): number | null => {
    const tier = donationTiers.find(t => t.title === title);
    return tier ? tier.amount : null;
  };

  // Handle preset tier selection on component mount
  useEffect(() => {
    if (presetTier && !presetAmount) {
      const tierAmount = getTierAmountFromTitle(presetTier);
      if (tierAmount) {
        setSelectedTierAmount(tierAmount);
        setSelectedTierTitle(presetTier);
        form.setValue("amount", tierAmount, { shouldValidate: true });
      }
    } else if (presetAmount) {
      setSelectedTierAmount(presetAmount);
      form.setValue("amount", presetAmount, { shouldValidate: true });
      
      // Find the tier title for this amount
      const tier = donationTiers.find(t => t.amount === presetAmount);
      if (tier) {
        setSelectedTierTitle(tier.title);
      }
    }
  }, [presetTier, presetAmount, form]);

  const onSubmit = async (values: FormData) => {
    if (values.amount <= 0) {
      toast.error("Please select or enter a donation amount");
      return;
    }
    
    setIsLoading(true);
    try {
      setShowPayment(true);
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

  const selectedAmount = form.watch("amount");
  const frequency = form.watch("frequency");
  const formData = form.getValues();

  // Get the selected tier details
  const selectedTierDetails = donationTiers.find(t => 
    selectedTierTitle ? t.title === selectedTierTitle : t.amount === selectedTierAmount
  );

  // Handle tier selection
  const handleTierSelect = (tier: typeof donationTiers[0]) => {
    setSelectedTierAmount(tier.amount);
    setSelectedTierTitle(tier.title);
    form.setValue("amount", tier.amount, { shouldValidate: true });
  };

  // Clear tier selection when custom amount is used
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTierAmount(null);
    setSelectedTierTitle(null);
    const value = parseFloat(e.target.value) || 0;
    form.setValue("amount", value, { shouldValidate: true });
  };

  if (showPayment) {
    return (
      <div className="space-y-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-blue-500">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Complete Your Impactful Donation
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {selectedTierTitle || "Custom Donation"}
                    </div>
                    <div className="text-gray-600">
                      {frequency === "monthly" ? "Monthly gift" : "One-time donation"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      ${selectedAmount.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {frequency === "monthly" ? "per month" : "one-time"}
                    </div>
                  </div>
                </div>
                
                {selectedTierDetails && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Your Impact:
                    </div>
                    <p className="text-sm text-gray-600">
                      {frequency === "monthly" 
                        ? selectedTierDetails.impactMonthly 
                        : selectedTierDetails.impactOnce}
                    </p>
                  </div>
                )}
              </div>
              
              <p className="text-sm text-gray-600">
                Your {frequency === "monthly" ? "monthly" : "one-time"} donation will directly
                support families affected by conflict in South Sudan.
              </p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => setShowPayment(false)}
            className="flex items-center gap-2"
          >
            <Loader2 className="h-4 w-4" />
            Edit Donation
          </Button>
        </div>
        
        <StripeCheckout
          amount={selectedAmount}
          frequency={frequency}
          donorInfo={{
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
          }}
        />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-blue-500">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Make an Impact Today</h2>
            </div>
          </div>
          
          {presetTier && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-bold text-gray-900">Preselected Tier: {presetTier}</div>
                    <div className="text-sm text-gray-600">
                      We've preselected this tier based on your choice. You can change it below.
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSelectedTierTitle(null);
                    setSelectedTierAmount(null);
                    form.setValue("amount", 0);
                  }}
                >
                  Change
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Choose Your Impact Level</h3>
              <Badge className="bg-gradient-to-r from-primary to-blue-500 text-white border-0">
                {donationTiers.length} Options
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {donationTiers.map((tier) => {
                const isSelected = selectedTierTitle === tier.title || selectedTierAmount === tier.amount;
                
                return (
                  <Card
                    key={tier.amount}
                    className={`group p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                      isSelected
                        ? "border-primary ring-2 ring-primary bg-gradient-to-br from-primary/5 to-blue-500/5"
                        : "hover:border-primary hover:shadow-lg"
                    } ${tier.recommended ? "border-primary/30" : ""}`}
                    onClick={() => handleTierSelect(tier)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{tier.title}</h3>
                        {tier.anchor && (
                          <p className="text-sm text-gray-500 mt-1">{tier.anchor}</p>
                        )}
                      </div>
                      
                      <div className="flex flex-col items-end">
                        {tier.recommended && (
                          <Badge className="mb-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                            Recommended
                          </Badge>
                        )}
                        <div className="text-2xl font-bold text-primary">${tier.amount}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className={`h-4 w-4 ${isSelected ? "text-primary" : "text-gray-300"}`} />
                        <span className="text-gray-600">
                          {frequency === "monthly" ? tier.impactMonthly : tier.impactOnce}
                        </span>
                      </div>
                      
                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <Target className="h-4 w-4" />
                            <span>Selected</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900">Or Enter Custom Amount</h4>
              <span className="text-sm text-gray-500">Minimum: $5</span>
            </div>
            
            <CustomInput 
              control={form.control}
              name="amount"
              fieldType={FormFieldType.INPUT}
              label="Custom Amount"
              placeholder="Enter any amount"
              type="number"
              disabled={selectedTierAmount !== null}
              onChange={handleCustomAmountChange}
            />
            
            {selectedTierAmount === null && selectedAmount >= 5 && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900">Custom Donation: ${selectedAmount.toFixed(2)}</div>
                    <div className="text-sm text-gray-600">
                      Your generous gift will support multiple programs
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

            <div>
            <CustomInput 
              control={form.control}
              name="frequency"
              fieldType={FormFieldType.RADIO}
              options={[
                { label: "One-time", value: "once" },
                { label: "Monthly (Most Impactful)", value: "monthly" },
                { label: "Quarterly", value: "quarterly" },
                { label: "Annually", value: "yearly" },
              ]}
              label="Donation Frequency"
              disabled={false}
            />
            
            {frequency === "monthly" && (
              <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-bold text-green-900">Monthly Giving = Maximum Impact</div>
                    <div className="text-sm text-green-700">
                      Regular support helps us plan sustainable, long-term programs
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
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
            </div>
            
            <div className="mt-4">
              <CustomInput 
                control={form.control} 
                name="email" 
                label="Email Address" 
                placeholder="Enter your email" 
                fieldType={FormFieldType.INPUT} 
                type="email"
              />
              <p className="text-xs text-gray-500 mt-2">
                We'll send your donation receipt and impact updates to this email
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            type="submit"
            className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white shadow-xl hover:shadow-2xl transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || selectedAmount < 5}
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                Processing...
              </>
            ) : (
              <>
                {frequency === "monthly" ? "Start Monthly Impact" : "Complete Donation"}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>

          {selectedAmount < 5 && selectedAmount > 0 && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm text-red-700 text-center">
                Minimum donation amount is $5
              </p>
            </div>
          )}

          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span>Tax-deductible</span>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}