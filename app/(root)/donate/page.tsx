"use client";

import DonateForm from "@/components/forms/DonateForm";
import { ShieldCheck, PieChart, Receipt } from "lucide-react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import { impactMetrics } from "@/constants";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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

      <div className="py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Secure Payment</span>
          </div>
          <div className="flex items-center gap-3">
            <PieChart className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">90% goes to programs</span>
          </div>
          <div className="flex items-center gap-3">
            <Receipt className="w-8 h-8 text-primary" />
            <span className="text-sm font-medium">Tax Deductible</span>
          </div>
        </div>

        {/* Main Form */}
        <div className="max-w-2xl mx-auto">
          <Elements stripe={stripePromise}>
            <DonateForm />
          </Elements>
        </div>

        {/* Impact Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-start md:text-center">Your Impact</h2>
          <div className="px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {impactMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <metric.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <span className="text-4xl font-bold block">{metric.number}</span>
                      <span className="text-gray-600">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
        </div>
      </div>
    </main>
  );
}