"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Progress } from "@/components/ui/progress";
import { testimonials, campaigns } from "@/constants";
import { Handshake, DollarSign, HeartHandshake, CalendarIcon, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { partnerWithUs, donate, volunteer, upcomingEvents, successTestimonials } from "@/constants";


gsap.registerPlugin(ScrollTrigger);

const GetInvolved = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState("");
    const sectionRef = useRef<HTMLElement[]>([]);
    const textRef = useRef(null);
    const imgRef = useRef(null);
  
    sectionRef.current = [];
  
    const addToRefs = (el:HTMLElement) => {
      if(el && !sectionRef.current.includes(el)) {
        sectionRef.current.push(el);
      }
    }

  useGSAP(() => { 
    sectionRef.current.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
    gsap.from(imgRef.current, {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 85%",
      },
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
      },
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-bebas-neue">
    <section className="relative section-padding">
      <div className="absolute inset-0 z-0 bg-linear-to-r from-primary/15 to-primary/5">
        <div className="absolute inset-0 bg-[url('/images/support.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Make a Lasting Impact
        </span>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Your Support Changes Lives in South Sudan
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Choose how you want to help — whether through monthly giving, one-time support,
          or partnering with us to strengthen communities.
        </p>

          <div className="mt-8 flex items-center mx-auto max-w-2xl space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Secure donations</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>Transparent use of funds</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <span>Real community impact</span>
            </div>
            </div>
      </div>
    </section>

      <section ref={addToRefs} className="section-padding">
          <div ref={textRef} className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Ways to Support Our Mission</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Discover how you can contribute to our work in South Sudan.
            </p>
          </div>

          <Tabs defaultValue="donate" className="mx-auto max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-3 gap-2">
              <TabsTrigger value="donate" className="font-semibold">
                Donate <span className="ml-1 text-xs text-primary">(Most Impact)</span>
              </TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="partner">Partner With Us</TabsTrigger>
            </TabsList>
            
            <TabsContent value="donate" className="rounded-xl border bg-card p-6 shadow-xs">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 flex items-center text-2xl font-semibold">
                    <DollarSign className="mr-2 h-6 w-6 text-primary" />
                    Make a Donation
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Your financial support enables us to continue and expand our work with vulnerable communities in South Sudan. Every contribution makes a difference.
                  </p>
                  
                  <div className="mb-6 space-y-4">
                    {donate.type.map((type, index) => (
                      <div key={index}>
                        <h4 className="mb-1 font-medium">{type.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {type.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  
               <Button asChild className="bg-primary text-white hover:bg-primary/90">
                  <Link href="/donate">
                    Start Monthly Support
                  </Link>
                </Button>

                <p className="mt-2 text-xs text-muted-foreground">
                  You can choose one-time or custom amounts on the next page
                </p>
                </div>
                
                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image 
                      src="/images/edu.png"
                      alt="Donation impact" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 rounded bg-white/90 px-3 py-1 text-xs font-medium text-primary">
                      Real impact. Real communities.
                    </div>

                  </div>
                  
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="mb-2 text-sm font-medium">Your Impact</h4>
                    <ul className="space-y-2 text-sm">
                      {donate.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-primary">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="volunteer" className="rounded-xl border bg-card p-6 shadow-xs">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 flex items-center text-2xl font-semibold">
                    <HeartHandshake className="mr-2 h-6 w-6 text-primary" />
                    Volunteer With Us
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Share your skills and talents to support our mission. Whether in South Sudan or remotely, volunteers play a crucial role in our work.
                  </p>
                  
                  <div className="mb-6 space-y-4">
                    {volunteer.type.map((type, index) => (
                      <div key={index}>
                        <h4 className="mb-1 font-medium">{type.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {type.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    <Link href="/volunteer">
                      Volunteer Now
                    </Link>
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image 
                      src="/images/volunteer.png"
                      alt="Volunteers" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="mb-2 text-sm font-medium">Current Volunteer Needs</h4>
                    <ul className="space-y-2 text-sm">
                      {volunteer.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-primary">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="partner" className="rounded-xl border bg-card p-6 shadow-xs">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 flex items-center text-2xl font-semibold">
                    <Handshake className="mr-2 h-6 w-6 text-primary" />
                    Partner With Us
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    We believe in the power of collaboration. Partner with us to leverage our combined strengths for greater impact.
                  </p>
                  
                  <div className="mb-6 space-y-4">
                    {partnerWithUs.type.map((item, index) => (
                    <div key={index}>
                      <h4 className="mb-1 font-medium">{item.title} Partnerships</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    ))}
                  </div>
                  
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    <Link href="/partner">Become a Partner</Link>
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image 
                      src="/images/culture.png"
                      alt="Partnership" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="mb-2 text-sm font-medium">Partnership Benefits</h4>
                    <ul className="space-y-2 text-sm">
                      {partnerWithUs.benefits.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
      </section>

      <section ref={addToRefs} className="section-padding bg-muted/40">
      <div ref={textRef} className="mx-auto max-w-3xl text-center mb-12">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Current Campaigns
        </h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
        <p className="text-lg text-muted-foreground">
          Your support moves these life-changing projects closer to completion.
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-8">
        {campaigns.map((campaign) => {
          const progress = Math.round(
            (campaign.raised / campaign.goal) * 100
          );
          const remaining = campaign.goal - campaign.raised;

          return (
            <Card
              key={campaign.id}
              className={`p-6 transition-all ${
                campaign.featured
                  ? "border-primary ring-2 ring-primary bg-white"
                  : "bg-white"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-2">
                  {campaign.featured && (
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Most Urgent
                    </span>
                  )}
                  <h3 className="text-xl font-semibold">
                    {campaign.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {campaign.impact}
                  </p>
                  <p className="text-sm text-orange-600 font-medium">
                    {campaign.urgency}
                  </p>
                </div>
                <div className="w-full md:max-w-xs space-y-3">
                  <div className="flex justify-between text-sm font-medium">
                    <span>${campaign.raised.toLocaleString()} raised</span>
                    <span className="text-primary">
                      ${remaining.toLocaleString()} needed
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <Button
                    asChild
                    className="w-full bg-primary text-white hover:bg-primary/90"
                  >
                    <Link href={`/donate?campaign=${campaign.id}`}>
                      Support This Campaign
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      </section>

    <section ref={addToRefs} className="section-padding">
      <div
        ref={textRef}
        className="mx-auto max-w-4xl rounded-2xl bg-primary p-8 text-center text-white shadow-xl md:p-12"
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Turn Compassion Into Action Today
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg opacity-90">
          Your support helps deliver clean water, healthcare, education, and peace
          to communities rebuilding their lives in South Sudan.
        </p>
        <p className="mb-8 text-sm opacity-80">
          ✔ Transparent programs · ✔ Community-led impact · ✔ Secure donations
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link href="/donate">
              Donate Now
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-black hover:bg-white/10"
          >
            <Link href="/partner">
              Partner With Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default GetInvolved;
