"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Progress } from "@/components/ui/progress";
import { 
  Handshake, 
  DollarSign, 
  HeartHandshake,
  Users,
  Target,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Calendar,
  Globe,
  Award,
  CheckCircle,
  Shield,
  Zap,
  BadgeCheck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { partnerWithUs, donate, volunteer, campaigns } from "@/constants";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const GetInvolved = () => {
  const sectionRef = useRef<HTMLElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const statRefs = useRef<HTMLDivElement[]>([]);

  sectionRef.current = [];
  cardRefs.current = [];
  statRefs.current = [];

  const addToRefs = (el: HTMLElement) => {
    if (el && !sectionRef.current.includes(el)) {
      sectionRef.current.push(el);
    }
  };

  const addToCardRefs = (el: HTMLDivElement) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const addToStatRefs = (el: HTMLDivElement) => {
    if (el && !statRefs.current.includes(el)) {
      statRefs.current.push(el);
    }
  };

  useGSAP(() => { 
    // Section animations
    sectionRef.current.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Card animations
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Stats animations
    statRefs.current.forEach((stat, index) => {
      gsap.from(stat, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: stat,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Floating animation for hero badges
    gsap.to(".floating-badge", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full translate-y-48 -translate-x-48 blur-3xl" />
    
        <div className="absolute top-1/4 left-1/4 floating-badge">
          <div className="w-8 h-8 rounded-full bg-primary/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 floating-badge" style={{animationDelay: '0.5s'}}>
          <div className="w-6 h-6 rounded-full bg-blue-500/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
            <Sparkles className="h-4 w-4 mr-2" />
            Join Our Mission
          </Badge>

          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-blue-600">
            Be Part of the Change
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600 leading-relaxed">
            Choose how you want to help — whether through monthly giving, one-time support,
            volunteering, or partnering with us to create lasting impact in South Sudan.
          </p>
        </div>
      </section>

      <section id="support-tabs" ref={addToRefs} className="section-padding px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Target className="h-4 w-4 mr-2" />
              Ways to Support
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Choose Your Impact Path
            </h2>
            <div className="h-1 w-20 bg-primary rounded mx-auto mb-4" />
          </div>

          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 gap-2">
              <TabsTrigger value="donate" className="font-semibold">
                Donate <span className="ml-1 text-xs text-primary">(Most Impact)</span>
              </TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="partner">Partner With Us</TabsTrigger>
            </TabsList>
            
            <TabsContent value="donate" className="space-y-6">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-primary/5 via-white to-blue-500/5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-blue-500">
                        <DollarSign className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Make a Donation</h3>
                        <p className="text-primary font-medium">Most Direct Way to Create Impact</p>
                      </div>
                    </div>
                    
                    <p className="mb-8 text-gray-600 leading-relaxed text-lg">
                      Your financial support enables us to continue and expand our work with vulnerable communities in South Sudan. Every contribution makes a tangible difference.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      {donate.type.map((type, index) => (
                        <div key={index} className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <h4 className="font-bold text-gray-900">{type.title}</h4>
                          </div>
                          <p className="text-gray-600 pl-8">{type.desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        asChild 
                        className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg hover:shadow-xl transition-all group"
                      >
                        <Link href="/donate" className="flex items-center justify-center gap-2">
                          <Zap className="h-5 w-5" />
                          Start Monthly Support
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <p className="text-center text-sm text-gray-500">
                        One-time and custom amounts available on the next page
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 relative min-h-[400px]">
                    <Image 
                      src="/images/edu.png"
                      alt="Donation impact" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <h4 className="font-bold text-gray-900 mb-4">Your Donation Impact</h4>
                      <div className="space-y-3">
                        {donate.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="volunteer" className="space-y-8">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-green-500/5 via-white to-emerald-500/5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                        <HeartHandshake className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Volunteer With Us</h3>
                        <p className="text-green-600 font-medium">Share Your Time & Talent</p>
                      </div>
                    </div>
                    
                    <p className="mb-8 text-gray-600 leading-relaxed text-lg">
                      Share your skills and talents to support our mission. Whether in South Sudan or remotely, volunteers play a crucial role in expanding our impact.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      {volunteer.type.map((type, index) => (
                        <div key={index} className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                          <div className="flex items-center gap-3 mb-2">
                            <Users className="h-5 w-5 text-green-500" />
                            <h4 className="font-bold text-gray-900">{type.title}</h4>
                          </div>
                          <p className="text-gray-600 pl-8">{type.desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        asChild 
                        className="w-full py-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl transition-all group"
                      >
                        <Link href="/volunteer" className="flex items-center justify-center gap-2">
                          <Users className="h-5 w-5" />
                          Apply to Volunteer
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 relative min-h-[400px]">
                    <Image 
                      src="/images/volunteer.png"
                      alt="Volunteers" 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <h4 className="font-bold text-gray-900 mb-4">Current Volunteer Needs</h4>
                      <div className="space-y-3">
                        {volunteer.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="partner" className="space-y-8">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-purple-500/5 via-white to-pink-500/5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                        <Handshake className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">Partner With Us</h3>
                        <p className="text-purple-600 font-medium">Collaborate for Greater Impact</p>
                      </div>
                    </div>
                    
                    <p className="mb-8 text-gray-600 leading-relaxed text-lg">
                      We believe in the power of collaboration. Partner with us to leverage our combined strengths for greater, sustainable impact in South Sudan.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      {partnerWithUs.type.map((item, index) => (
                        <div key={index} className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                          <div className="flex items-center gap-3 mb-2">
                            <Globe className="h-5 w-5 text-purple-500" />
                            <h4 className="font-bold text-gray-900">{item.title} Partnerships</h4>
                          </div>
                          <p className="text-gray-600 pl-8">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        asChild 
                        className="w-full py-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all group"
                      >
                        <Link href="/partner" className="flex items-center justify-center gap-2">
                          <Handshake className="h-5 w-5" />
                          Explore Partnership
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 relative min-h-[400px]">
                    <Image 
                      src="/images/culture.png"
                      alt="Partnership" 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <h4 className="font-bold text-gray-900 mb-4">Partnership Benefits</h4>
                      <div className="space-y-3">
                        {partnerWithUs.benefits.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
      </section>

      <section ref={addToRefs} className="section-padding bg-muted/40">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <TrendingUp className="h-4 w-4 mr-2" />
              Urgent Needs
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Current Campaigns
            </h2>
            <div className="h-1 w-20 bg-primary rounded mx-auto mb-4" />
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

      <section ref={addToRefs} className="section-padding px-4">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-blue-600 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 md:p-16">
                <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
                  <Zap className="h-4 w-4 mr-2" />
                  Ready to Make Impact?
                </Badge>
                <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white leading-tight">
                  Turn Compassion Into Action Today
                </h2>
                
                <div className="space-y-4 mb-10">
                  {[
                    "Transparent program reporting",
                    "Community-led impact assessment",
                    "Secure, encrypted donations",
                    "Regular impact updates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 text-green-300" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <Button 
                    asChild 
                    size="lg"
                    className="w-full py-6 rounded-xl bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <Link href="/donate" className="flex items-center justify-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Donate Now
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[400px]">
                <Image
                  src="/images/support.png"
                  alt="Community Impact"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">95%</div>
                      <div className="text-xs text-gray-600">Program Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">10k+</div>
                      <div className="text-xs text-gray-600">Lives Impacted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default GetInvolved;