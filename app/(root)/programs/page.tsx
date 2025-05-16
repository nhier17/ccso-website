"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FOCUS_AREAS, programStats, completedProjects } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="py-16">
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

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS_AREAS.map((area) => (
              <Card key={area.id} className="border-none shadow-md transition-all hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="relative h-48 w-full">
                    <Image src={area.img} alt={area.title} fill className="object-cover rounded-lg" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      {/* Detailed Programs */}
      <section ref={addToRefs} className="bg-muted/30 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Program Details</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Learn more about our key initiatives and how they're making a difference.
            </p>
          </div>

          <Tabs defaultValue="agriculture" className="max-w-5xl">
            <TabsList
              className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-4"
            >
              {programStats.items.map((item) => (
                <TabsTrigger key={item.id} value={item.id}>
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {programStats.items.map((item) => ( 
              <TabsContent key={item.id} value={item.id} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mb-4 text-muted-foreground">{item.description}</p>
              
              <div className="mb-6 space-y-4">
                {item.features.map((feature, index) => (
                  <div key={index}>
                    <h4 className="mb-1 font-medium">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button asChild className="bg-primary text-white hover:bg-primary/90">
                  <Link href="/contact">Get Involved</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={`/blog?category=${item.id}`}>Read Success Stories</Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image 
                  src={item.image}
                  alt={`${item.label} initiatives`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="rounded-lg bg-muted/50 p-4">
                <h4 className="mb-2 text-sm font-medium">Program Goal</h4>
                <ul className="space-y-2 text-sm">
                  {item.impact.map((item, index) => (
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
          ))}
          </Tabs>
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
