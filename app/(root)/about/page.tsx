"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  HeartHandshake, 
  Clock, 
  Shield,
  Target,
  Users,
  Globe,
  HandHeart,
  BookOpen,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Handshake,
  Scale,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; 
import { leaders, history, valuesData } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const sectionRef = useRef<HTMLElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);

  sectionRef.current = [];

  const addToRefs = (el:HTMLElement) => {
    if(el && !sectionRef.current.includes(el)) {
      sectionRef.current.push(el);
    }
  }

  const addToStatsRefs = (el:HTMLDivElement) => {
    if(el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  }

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

    // Hero animations
    gsap.from(".hero-content", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(imgRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
      },
    });

    gsap.from(textRef.current, {
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    // Stats counter animation
    statsRef.current.forEach((stat, index) => {
      gsap.from(stat, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: stat,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Floating elements
    gsap.to(".floating", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
        <div className="absolute top-1/4 left-1/4 floating">
          <div className="w-8 h-8 rounded-full bg-primary/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 floating" style={{animationDelay: '0.5s'}}>
          <div className="w-6 h-6 rounded-full bg-blue-500/20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 floating" style={{animationDelay: '1s'}}>
          <div className="w-10 h-10 rounded-full bg-green-500/20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-blue-600">
              About CCSO
            </h1>
            <p className="mb-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
             Learn how CCSO is restoring dignity, rebuilding communities, and responding to urgent humanitarian needs across South Sudan.
            </p>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="section-padding px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div ref={imgRef} className="relative group">
              <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <Image 
                  src="/images/leader2.jpg"
                  alt="CCSO founder" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-2xl -z-10 rotate-12" />
              <Badge className="absolute -top-4 left-8 px-4 py-2 bg-white shadow-lg border-0">
                <HeartHandshake className="h-4 w-4 mr-2" />
                Since 2018
              </Badge>
            </div>
            
            <div ref={textRef}>
              <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
                Our Story
              </h2>
              
              <div className="space-y-8">
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary before:to-blue-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-gray-900">Who We Are</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    CCSO was founded in response to the pressing humanitarian and development needs of communities in Lakes State, South Sudan. Despite the establishment of the Republic of South Sudan, many regions continue to face limited access to basic services due to fragile institutions and prolonged hardship.
                  </p>
                </div>

                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-green-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Why We Began</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Recognizing these challenges, CCSO was initiated by Bishop Joseph Maker Atot, Bishop of Pacong Diocese and a respected community leader in Rumbek East County. His vision was to establish a locally rooted organization capable of driving sustainable development and empowering underserved communities in partnership with local authorities.
                  </p>
                </div>

                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-green-500 before:to-purple-500">
                  <div className="flex items-center gap-3 mb-2">
                    <HandHeart className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Our Commitment Today</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Following extensive consultations, CCSO was formally established as a non-governmental organization. Today, we implement programs in agriculture, education, health, and peacebuilding—guided by Christian values of compassion, service, and dignity for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section ref={addToRefs} className="section-padding px-4 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 px-4 py-2 bg-green-100 text-green-800 border-0">
              <Scale className="h-4 w-4 mr-2" />
              Legal Standing
            </Badge>
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
              Officially Registered Organization
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-green-200 bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">Registration Details</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-medium min-w-40">Registration Number:</span>
                    <span className="text-gray-700">2207</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-40">Registered With:</span>
                    <span className="text-gray-700">Relief & Rehabilitation Commission (RRC), South Sudan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-40">Date Registered:</span>
                    <span className="text-gray-700">2019-04-04</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-40">Legal Status:</span>
                    <span className="text-gray-700">Non-Governmental Organization (NGO)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
            <Shield className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Compliance & Governance</h3>
            <p className="text-gray-600 mb-4">
              CCSO maintains full compliance with all regulatory requirements in South Sudan and adheres to international NGO standards.
            </p>
            <Button variant="outline" className="border-green-600 text-green-600">
              <Link href="/documents">
                View Registration Certificate
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="section-padding px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              Our Foundation
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              What Guides Our Work
            </h2>
              <div className="h-1 w-20 bg-primary rounded mx-auto mb-4" />
          </div>

          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission" className="rounded-3xl border-0 bg-gradient-to-br from-primary/5 via-white to-primary/5 p-8 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20">
                  <Target className="h-20 w-20 text-primary" />
                </div>
                <h3 className="mb-6 text-3xl font-bold text-gray-900">Our Mission</h3>
                <p className="max-w-2xl text-xl text-gray-600 leading-relaxed mb-8">
                  To empower vulnerable communities in South Sudan through sustainable, faith-driven initiatives that promote dignity, self-reliance, and hope for a better future.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="vision" className="rounded-3xl border-0 bg-gradient-to-br from-blue-500/5 via-white to-green-500/5 p-8 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-green-500/20">
                  <Globe className="h-20 w-20 text-blue-600" />
                </div>
                <h3 className="mb-6 text-3xl font-bold text-gray-900">Our Vision</h3>
                <p className="max-w-2xl text-xl text-gray-600 leading-relaxed">
                  To realize democratic, peaceful and progressive South Sudan wherein all people have equal and just opportunities to realize all-round human development without any form of discrimination.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="values" className="rounded-3xl border-0 bg-gradient-to-br from-green-500/5 via-white to-purple-500/5 p-8 shadow-2xl">
              <div className="grid gap-8 md:grid-cols-2">
                {valuesData.map((value, index) => (
                  <div key={index} className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`mb-4 p-4 rounded-xl bg-gradient-to-r ${value.color} w-fit`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
      </section>

      <section ref={addToRefs} className="section-pading px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              Leadership Team
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Our Team
            </h2>
            <div className="h-1 w-20 bg-primary rounded mx-auto mb-4" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-4">
            {leaders.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-72 w-full overflow-hidden">
                  <Image 
                    src={member.image}
                    alt={member.name} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-8 relative">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{member.name}</h3>
                  <Badge className="mb-4 px-3 py-1 bg-primary/10 text-primary border-0">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
      </section>

      <section ref={addToRefs} className="section-padding px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              Our Journey
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Milestones & Achievements
            </h2>
            <div className="h-1 w-20 bg-primary rounded mx-auto mb-4" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary via-blue-500 to-green-500 -translate-x-1/2 hidden md:block" />
            {history.map((event, index) => (
              <div key={index} className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
      
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 transform hidden md:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600 text-white shadow-xl">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="group p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-primary">
                    <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 px-4 py-2 text-sm font-semibold text-primary">
                      {event.year}
                    </span>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <TrendingUp className="h-5 w-5 text-primary inline mr-2" />
                      <span className="text-sm text-gray-500">Significant Milestone</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
      </section>

      <section ref={addToRefs} className="py-20 px-4">
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-white to-blue-500/10 p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                  <Badge className="px-4 py-2 bg-white/80 backdrop-blur-sm text-primary border-0">
                    Transparency & Impact
                  </Badge>
                </div>
                <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
                  Accountability at Every Step
                </h2>
                <p className="mb-8 text-gray-600 leading-relaxed">
                  We are committed to accountability, integrity, and responsible stewardship. Our financial records are independently reviewed, and we share regular impact updates so donors and communities clearly understand how resources are used.
                </p>

                <div className="mb-8">
                  <h4 className="mb-4 text-lg font-semibold text-gray-900">Resource Allocation</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Programs & Community Impact", percentage: 85, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
                      { label: "Operations & Administration", percentage: 10, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
                      { label: "Fundraising & Outreach", percentage: 5, color: "bg-gradient-to-r from-orange-500 to-amber-500" },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{item.label}</span>
                          <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Join Our Mission</h3>
                <div className="space-y-4">
                  <Button asChild className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all group">
                    <Link href="/donate" className="flex items-center justify-center gap-2">
                      <HeartHandshake className="h-5 w-5" />
                      Support Our Work
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full py-6 rounded-xl border-2 border-primary text-primary hover:bg-primary/5 transition-all group">
                    <Link href="/get-involved" className="flex items-center justify-center gap-2">
                      <Users className="h-5 w-5" />
                      Partner With Us
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full py-6 rounded-xl hover:bg-primary/5 transition-all group">
                    <Link href="/contact" className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary">
                      <BookOpen className="h-5 w-5" />
                      Learn More About Our Programs
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default About;