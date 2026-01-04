"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { programStats } from "@/constants";
import { getColorClasses } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  ArrowRight, 
  Target, 
  Users, 
  Calendar,
  TrendingUp,
  Sparkles,
  HeartHandshake,
  BookOpen,
  Globe
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
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
        y: 50,
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

    // Hero animation
    gsap.from(".hero-content", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });

  }, []);

  // Quick stats for programs
  const programSummary = [
    { value: programStats.length, label: "Active Programs", icon: Target, color: "text-primary" },
    { 
      value: programStats.reduce((sum, p) => sum + p.impact.currentValue, 0).toLocaleString(), 
      label: "Lives Impacted", 
      icon: Users, 
      color: "text-blue-600" 
    },
    { 
      value: Math.round(programStats.reduce((sum, p) => sum + p.impact.progress, 0) / programStats.length), 
      label: "Average Progress", 
      icon: TrendingUp, 
      color: "text-green-600" 
    },
    { 
      value: new Set(programStats.map(p => p.location)).size, 
      label: "Regions Covered", 
      icon: Globe, 
      color: "text-purple-600" 
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full translate-y-48 -translate-x-48 blur-3xl" />
        
        <div className="relative hero-content mx-auto max-w-5xl px-4 text-center">
          <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
            <Sparkles className="h-4 w-4 mr-2" />
            Transforming Communities
          </Badge>
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-blue-600">
            Our Programs
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover how we're empowering communities across South Sudan through our comprehensive, 
            sustainable development initiatives.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-primary/5 via-white to-blue-500/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {programSummary.map((stat, index) => (
              <div 
                key={index}
                ref={addToStatRefs}
                className="text-center p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`p-3 rounded-2xl ${stat.color.replace('text-', 'bg-')}/10 w-fit mx-auto mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {typeof stat.value === 'number' && stat.value > 1000 ? `${stat.value}+` : stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
      </section>

      <section id="programs-slug" ref={addToRefs} className="section-padding px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <BookOpen className="h-4 w-4 mr-2" />
              Our Programs
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Creating Lasting Change
            </h2>
            <div className="h-1 w-20 bg-primary rounded mx-auto" />
          </div>

          <div className="space-y-24">
            {programStats.map((project, index) => {
              const colors = getColorClasses(project.color);
              return (
                <div 
                  key={project.id} 
                  id={project.slug}
                  ref={addToCardRefs}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute inset-0 ${colors.bg.replace('bg-', 'bg-gradient-to-r from-')} via-transparent to-transparent`} />
                  </div>

                  <div className="relative grid lg:grid-cols-2 gap-0">
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative w-full h-full min-h-[400px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute top-6 left-6">
                          <Badge className={`px-4 py-2 ${colors.badge} backdrop-blur-sm border-0`}>
                            {project.status}
                          </Badge>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center text-white">
                            <MapPin className="h-5 w-5 mr-2" />
                            <span className="text-lg font-medium">{project.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-3 rounded-xl ${colors.bg}`}>
                          <project.icon className={`h-8 w-8 ${colors.text}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>Active Program</span>
                          </div>
                        </div>
                      </div>

                      <p className="mb-8 text-gray-600 leading-relaxed text-lg maw-w-2xl">
                        {project.shortDescription}
                      </p>

                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700">{project.impact.currentLabel}</span>
                          <span className={`font-bold ${colors.text}`}>
                            {project.impact.currentValue.toLocaleString()} / {project.impact.goalValue.toLocaleString()}
                          </span>
                        </div>
                        <Progress 
                          value={project.impact.progress} 
                          className="h-3 rounded-full bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-blue-500"
                        />
                        <div className="mt-2 text-right text-sm text-gray-500">
                          {project.impact.progress}% Complete
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {project.highlights.map((item, i) => (
                          <div key={i} className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                            <div className={`text-2xl font-bold mb-1 ${colors.text}`}>
                              {item.value}
                            </div>
                            <div className="text-xs font-medium text-gray-600">
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>

                 <Button asChild className="w-full bg-primary text-white">
                      <Link href={`/programs/${project.slug}`}>
                        View Program
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </section>

      <section ref={addToRefs} className="section-padding px-4">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-blue-600 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 md:p-16">
                <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Make an Impact
                </Badge>
                <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white leading-tight">
                  Help Fund Programs That Are Changing Lives Today
                </h2>
                <p className="mb-10 text-base text-white/80 italic flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5" />
                  Even a small gift can help provide clean water, medical care, or
                  education to families in crisis.
                </p>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    asChild
                    className="w-full py-6 rounded-xl bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <Link href="/donate" className="flex items-center justify-center gap-2">
                      <HeartHandshake className="h-5 w-5" />
                      Support a Program
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[400px] hidden md:block">
                <Image
                  src="/images/food.jpg"
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
                      <div className="text-xs text-gray-600">Annual Impact</div>
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

export default Programs;