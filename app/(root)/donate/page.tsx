"use client";

import DonateForm from "@/components/forms/DonateForm";
import TrustBadges from "@/components/donate/TrustBadges";
import RecurringInfo from "@/components/donate/RecurringInfo";
import ImpactTiers from "@/components/donate/ImpactTiers";
import { donationFaqs } from "@/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="px-2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Gift Today Can Save and Restore Lives
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Every donation directly funds clean water, healthcare, education, and
          peacebuilding for families affected by conflict in South Sudan.
        </p>
        </div>
      </section>

      <section className="py-16">
      <div className="mt-16">
          <ImpactTiers />
        </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 py-16">
          <div className="lg:col-span-2">
            <DonateForm />
          </div>

          <div className="space-y-8">
            <TrustBadges />
            <RecurringInfo />
          </div>
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

      <div className="mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {donationFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-xl border bg-card px-4 shadow-xs"
            >
              <AccordionTrigger className="group flex w-full items-center justify-between py-4 text-left text-lg font-semibold hover:no-underline">
                <span>{faq.question}</span>
              </AccordionTrigger>

              <AccordionContent className="pb-4 text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      </section>
    </main>
  );
}