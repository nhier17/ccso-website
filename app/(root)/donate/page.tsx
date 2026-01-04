"use client";

import { useState } from "react";
import DonateForm from "@/components/forms/DonateForm";
import TrustBadges from "@/components/donate/TrustBadges";
import RecurringInfo from "@/components/donate/RecurringInfo";
import ImpactTiers from "@/components/donate/ImpactTiers";
import { donationFaqs } from "@/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {  Zap, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  // Campaign progress data
  const campaignProgress = {
    goal: 50000,
    raised: 28500,
    donors: 120,
    daysLeft: 15
  };

  return (
    <main className="min-h-screen">
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-blue-600">
        <div className="px-2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Your Gift Today Can Save and Restore Lives
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
          Every donation directly funds clean water, healthcare, education, and
          peacebuilding for families affected by conflict in South Sudan.
        </p>
        </div>
      </section>

      <section className="section-padding px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Zap className="h-4 w-4 mr-2" />
              Your Impact
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Your Impact at Every Level
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary" />
          </div>

          <ImpactTiers />
      </section>

      <section className="section-padding px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl">
                <div className="p-8 md:p-12">
                  
                  {selectedTier && (
                    <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-gray-900">{selectedTier} Selected</div>
                          <div className="text-sm text-gray-600">Thank you for choosing this impact level</div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => setSelectedTier(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          Change
                        </Button>
                      </div>
                    </div>
                  )}

                  <DonateForm presetTier={selectedTier} />
                </div>
              </Card>
            </div>

            <div className="space-y-2">
              <TrustBadges />
              <RecurringInfo />
            </div>
          </div>
      </section>
      
      <section className="section-padding px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Star className="h-4 w-4 mr-2" />
              Common Questions
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Donation FAQs
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {donationFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-2xl border-0 bg-white shadow-lg hover:shadow-xl transition-all overflow-hidden"
                >
                  <AccordionTrigger className="group flex w-full items-center justify-between p-6 text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                    <div className="pl-14">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
      </section>
    </main>
  );
}