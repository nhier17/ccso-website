"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programStats, completedProjects } from "@/constants";
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
        <section className="relative py-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/99/2b/ee/992beee6f85227231bc4b97728f437c8.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Our Programs</h1>
            <p className="text-lg text-gray-700 md:text-xl">
              Discover how we're empowering communities across South Sudan through our comprehensive development initiatives.
            </p>
          </div>
      </section>

        <section ref={addToRefs} className="py-16">
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
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className={`border-0 bg-gradient-to-br ${colors.gradient} shadow-lg`}>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}>
                          <project.icon className={`h-6 w-6 ${colors.text}`} />
                        </div>
                        <Badge variant="secondary" className={colors.badge}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-700 dark:text-gray-200">
                        {project.longDescription}
                      </p>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            Progress to Goal
                          </span>
                          <span className={`text-sm font-bold ${colors.text}`}>
                            {project.impact.progress}%
                          </span>
                        </div>
                        <Progress value={project.impact.progress} className="h-2" />
                        <div className="flex items-center justify-between mt-1 text-xs text-gray-600 dark:text-gray-300">
                          <span>{project.impact.current}</span>
                          <span>{project.impact.goal}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className={`text-lg font-bold ${colors.text}`}>
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-300">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Key Program Goals
                        </h4>
                        <ul className="space-y-1">
                          {project.outcomes.map((outcome, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <Button asChild className="bg-primary text-white hover:bg-primary/90">
                          <Link href="/donate" className="flex items-center">
                            Support This Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href={`/blog?category=${project.id}`}>Read Success Stories</Link>
                        </Button>
              </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
        </section>

        <section ref={addToRefs} className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">How We Are Changing Lives</h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
          <p className="text-lg text-gray-700 mt-2">
            Explore the projects that are transforming communities and restoring hope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {completedProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden bg-white shadow-lg rounded-xl hover:scale-105 transition-transform"
            >
              <div className="relative h-48">
              <Image
                src={Array.isArray(project.imageSrc) ? project.imageSrc[0] : project.imageSrc}
                alt={project.title}
                fill
                className="object-cover"
              />
              </div>
              <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <Button className="mt-6 bg-primary text-white hover:bg-primary/90 transition-all" asChild>
                <Link href={`/programs/${project.id}`}>Read More</Link>
              </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

        <section ref={addToRefs} className="py-16 bg-primary text-white">
          <div className="text-start md:text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-xl mb-8">
              Join us in our mission to create lasting change in communities around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-dark-100 hover:bg-white/10" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Programs;
