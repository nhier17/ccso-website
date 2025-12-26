"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { programStats } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getColorClasses } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";



gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const sectionRef = useRef<HTMLElement[]> ([]);

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
  }, []);

  return (
        <div>
        <section className="relative section-padding">
        <div className="absolute inset-0 z-0 bg-linear-to-r from-primary/10 to-primary/5">
          <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/99/2b/ee/992beee6f85227231bc4b97728f437c8.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Our Programs</h1>
            <p className="text-lg text-gray-700 md:text-xl">
              Discover how we're empowering communities across South Sudan through our comprehensive development initiatives.
            </p>
          </div>
      </section>

        <section ref={addToRefs} className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Approach</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              We take a holistic approach to community development, addressing interconnected challenges through integrated programs.
            </p>
          </div>
        <div className="space-y-16">
          {programStats.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Card className={`border-0 bg-linear-to-br ${colors.gradient} shadow-lg`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}>
                        <project.icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <Badge className={colors.badge}>{project.status}</Badge>
                    </div>

                    <CardTitle className="text-2xl">{project.title}</CardTitle>

                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-gray-700 dark:text-gray-200 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span>{project.impact.currentLabel}</span>
                        <span className={colors.text}>
                          {project.impact.currentValue.toLocaleString()} /{" "}
                          {project.impact.goalValue.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={project.impact.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {project.highlights.map((item, i) => (
                        <div key={i} className="text-center">
                          <div className={`text-lg font-bold ${colors.text}`}>
                            {item.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
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
                  </CardContent>
                </Card>

                </div>
              </div>
            );
          })}
        </div>
        </section>
        
        <section ref={addToRefs} className="section-padding bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 text-start md:text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Help Fund Programs That Are Changing Lives Today
            </h2>

            <p className="text-lg md:text-xl mb-4 text-white/90">
              Your support directly strengthens access to clean water, food security,
              healthcare, education, and peacebuilding across South Sudan.
            </p>

            <p className="text-sm md:text-base mb-10 text-white/80 italic">
              💛 Even a small gift can help provide clean water, medical care, or
              education to families in crisis.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8"
                asChild
              >
                <Link href="/donate">Support a Program</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10 px-8"
                asChild
              >
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Programs;
