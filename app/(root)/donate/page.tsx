"use client";

import DonateForm from "@/components/forms/DonateForm";
import { ShieldCheck, PieChart, Receipt } from "lucide-react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import { donationFaqs } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

        <Card>
         <CardContent className="p-6 ">
        <Tabs defaultValue="donate" className="mb-8">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="donate">Donate</TabsTrigger>
            <TabsTrigger value="sponsorship">Sponsorship</TabsTrigger>
          </TabsList>
          <TabsContent value="donate">
            <div className="max-w-5xl mx-auto">
          <Elements stripe={stripePromise}>
            <DonateForm />
          </Elements>
          </div>
          </TabsContent>
          <TabsContent value="sponsorship">
          <div className="space-y-6">
             <div className="rounded-md bg-muted p-4">
                 <h3 className="mb-2 text-lg font-medium">Sponsorship Programs</h3>
                 <p className="text-sm text-muted-foreground">
                   Our sponsorship programs allow you to directly support specific initiatives or individuals on an ongoing basis.
                 </p>
               </div>
               
               <div className="space-y-4">
                 <div className="rounded-lg border p-4">
                   <h4 className="mb-1 font-medium">Child Education Sponsorship</h4>
                   <p className="mb-2 text-sm text-muted-foreground">
                     $35/month sponsors a child&apos;s education, including tuition, supplies, and meals.
                   </p>
                   <Button variant="outline" className="w-full">Learn More</Button>
                 </div>
                 
                 <div className="rounded-lg border p-4">
                   <h4 className="mb-1 font-medium">Community Program Sponsorship</h4>
                   <p className="mb-2 text-sm text-muted-foreground">
                     $100/month sponsors a community development program in a specific village.
                   </p>
                   <Button variant="outline" className="w-full">Learn More</Button>
                 </div>
                 
                 <div className="rounded-lg border p-4">
                   <h4 className="mb-1 font-medium">School Sponsorship</h4>
                   <p className="mb-2 text-sm text-muted-foreground">
                     $500/month sponsors an entire school, providing resources for teachers and students.
                   </p>
                   <Button variant="outline" className="w-full">Learn More</Button>
                 </div>
               </div>
               
               <Button className="w-full bg-primary text-white hover:bg-primary/90">
                <Link href="/contact">Contact Us About Sponsorship</Link>
               </Button>
             </div>
          </TabsContent>
        </Tabs>
        </CardContent>
        </Card>
        </section>

      <section className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Other Ways to Give</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Explore additional options for supporting our mission.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Mail a Check</h3>
                <p className="mb-4 text-muted-foreground">
                  Checks can be made payable to CCSO and mailed to our office.
                </p>
                <div className="rounded-md bg-muted p-4">
                  <p className="font-medium">Mailing Address:</p>
                  <p className="text-sm">CCSO International</p>
                  <p className="text-sm">bishop.pacong@gmail.com</p>
                  <p className="text-sm">Rumbek, Lakes State, South Sudan</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Wire Transfer</h3>
                <p className="mb-4 text-muted-foreground">
                  For larger donations, you may prefer to use a wire transfer directly to our account.
                </p>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Request Wire Instructions
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">In-Kind Donations</h3>
                <p className="mb-4 text-muted-foreground">
                  We accept donations of goods and services that support our programs in South Sudan.
                </p>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
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