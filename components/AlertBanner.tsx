"use client";

import { useRef } from "react";
import { currentIssues } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AlertBanner = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  const badgeColorMap = {
    Urgent: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    Critical: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
    Important: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  };

  const progressColorMap = {
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
  };

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Urgent Humanitarian Needs</h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {currentIssues.map((issue) => (
          <Card
            key={issue.id}
            className="w-full max-w-sm relative overflow-hidden"
          >
            <div className="absolute right-3 top-3 z-10">
              <span className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold",
                badgeColorMap[issue.status as keyof typeof badgeColorMap]
              )}>
                {issue.status}
              </span>
            </div>

            <CardContent className="p-4 bg-white dark:bg-muted">

            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src={issue.img} 
                alt={issue.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

              <h3 className="mt-3 mb-1 text-lg font-semibold">{issue.title}</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                {issue.description}
              </p>

              <div className="mb-4 space-y-1.5">
                <div className="flex justify-between text-sm font-medium">
                  <span>Response Coverage</span>
                  <span>{issue.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      progressColorMap[issue.iconColor as keyof typeof progressColorMap]
                    )}
                    style={{ width: `${issue.progress}%` }}
                  />
                </div>
              </div>

              <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                <Link href="/donate">{issue.buttonText}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AlertBanner;
