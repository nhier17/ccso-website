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
import { Input } from "@/components/ui/input";
import { testimonials, campaigns } from "@/constants";
import { Handshake, DollarSign, HeartHandshake, CalendarIcon, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { partnerWithUs, donate, volunteer, upcomingEvents, successTestimonials } from "@/constants";


gsap.registerPlugin(ScrollTrigger);

const GetInvolved = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState("");

  useGSAP(() => {
    gsap.from(".about-heading", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-heading",
        start: "top 80%",
      },
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

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
        },
      });
    });
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-bebas-neue">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="absolute inset-0 bg-[url('/images/support.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Get Involved</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Join us in making a difference in the lives of vulnerable communities across South Sudan. There are many ways to get involved!
            </p>
          </div>
      </section>

      <section className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Ways to Support Our Mission</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Discover how you can contribute to our work in South Sudan.
            </p>
          </div>

          <Tabs defaultValue="donate" className="mx-auto max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-3">
              <TabsTrigger value="donate">Donate</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="partner">Partner With Us</TabsTrigger>
            </TabsList>
            
            <TabsContent value="donate" className="rounded-xl border bg-card p-6 shadow-sm">
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
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image 
                      src="/images/edu.png"
                      alt="Donation impact" 
                      fill
                      className="object-cover"
                    />
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

            <TabsContent value="volunteer" className="rounded-xl border bg-card p-6 shadow-sm">
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

            <TabsContent value="partner" className="rounded-xl border bg-card p-6 shadow-sm">
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

          {/* Upcoming Events */}
      <section className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Upcoming Events</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Join us at upcoming events to learn more about our work and meet our team.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image 
                    src={event.image}
                    alt={event.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {event.date}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                  <p className="mb-1 text-sm font-medium">{event.location}</p>
                  <p className="mb-4 text-sm text-muted-foreground">{event.description}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Current Campaigns
          </h2>
          <div className="space-y-8">
            {campaigns.map((campaign, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold">{campaign.name}</h3>
                  <span className="text-primary">${campaign.raised} / ${campaign.goal}</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
                <p className="text-sm text-gray-600 mt-2">{campaign.progress}% of goal reached</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center gap-12 py-20">
        <div className="relative w-full lg:w-1/2">
          <Image
            ref={imgRef}
            src="/images/impact.jpg"
            alt="Why Get Involved"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        <div ref={textRef} className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Your Support Matters
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Your involvement directly helps provide education, clean water, and
            community empowerment programs for those in need. Every contribution,
            whether through time, resources, or advocacy, creates lasting positive change.
          </p>
          <Button className="mt-6 bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all">
            Learn More
          </Button>
        </div>
      </div>

  {/* Testimonials */}
  <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Volunteer Stories</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Hear from those who have volunteered with us about their experiences and impact.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {successTestimonials.map((testimonial, index) => (
              <Card className="overflow-hidden" key={index}>
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center space-x-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image 
                      src={testimonial.img}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <MessageSquare className="h-8 w-8 text-primary/40" />
                  <p className="text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl rounded-xl bg-primary p-8 text-center text-white md:p-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Make a Difference?</h2>
            <p className="mb-8 text-lg opacity-90">
              Your skills, time, and resources can help transform lives in South Sudan. Join us today!
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent hover:bg-primary-foreground/10"
              >
                <Link href="/contact">
                Contact Us
                </Link>
              </Button>
            </div>
          </div>
      </section>
    </div>
  );
};

export default GetInvolved;
