"use client";

import DonateForm from "@/components/forms/DonateForm";
import TrustBadges from "@/components/donate/TrustBadges";
import RecurringInfo from "@/components/donate/RecurringInfo";
import ImpactTiers from "@/components/donate/ImpactTiers";
import { donationFaqs } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="px-2 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Your donation helps build a resilient and self-reliant South Sudan,
            one community at a time.
          </p>
        </div>
      </section>

      <section className="py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DonateForm />
          </div>

          <div className="space-y-8">
            <TrustBadges />
            <RecurringInfo />
          </div>
        </div>

        <div className="mt-16">
          <ImpactTiers />
        </div>
      </section>
      
      <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Donation FAQs</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Common questions about donations and how they&apos;re used.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6">
            {donationFaqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </section>
    </main>
  );
}