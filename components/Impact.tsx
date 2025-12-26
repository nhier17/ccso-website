"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Options } from "@splidejs/react-splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Button } from "@/components/ui/button";
import { completedProjects, impactStories } from "@/constants";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Users, Heart, HeartHandshake } from "lucide-react";
import Link from "next/link";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const splideOptions: Options = {
  type: "loop",
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  resetProgress: false,
  arrows: false,
  pagination: true,
  perPage: 1,
  gap: "1rem",
  focus: "center",
  height: "500px",
};

interface ImpactStat {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
}

const impactStats: ImpactStat[] = [
  {
    icon: Users,
    value: 1000,
    label: "Individuals Reached",
    suffix: "+",
  },
  {
    icon: MapPin,
    value: 6,
    label: "Communities Served",
    suffix: "+",
  },
  {
    icon: HeartHandshake,
    value: 120,
    label: "Households Benefited",
    suffix: "+",
  },
  { 
    icon: Heart,
    value: 10,
    label: "Community Volunteers",
    suffix: "+",
  },
];

export const Impact = () => {
  const [animatedStats, setAnimatedStats] = useState<number[]>(impactStats.map(() => 0));
  const textRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{ [key: number]: number }>({});

  useGSAP(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }

    if (sliderRef.current) {
      gsap.from(sliderRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }

    if (statsRef.current) {
      impactStats.forEach((stat, index) => {
        gsap.to(animationRef.current, {
          [index]: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            setAnimatedStats(prev => {
              const newStats = [...prev];
              newStats[index] = Math.round(animationRef.current[index]);
              return newStats;
            });
          },
        });
      });
    }
  }, []);

  return (
    <section className="bg-linear-to-b from-gray-50 to-white text-dark-100 section-padding">
      <div className="px-4">
        <div ref={textRef}>
        <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Impact So Far</h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
        <p className="mb-12 text-lg text-muted-foreground">
        Every initiative we lead is rooted in community partnership and focused on restoring
        lives, dignity, and resilience in conflict-affected communities across South Sudan.
        </p>
      </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {animatedStats[index].toLocaleString()}{stat.suffix}
              </h3>

              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Stories From the Communities We Serve
        </h3>
        <div ref={sliderRef} className="shadow-2xl rounded-2xl overflow-hidden bg-white">
          <Splide options={splideOptions}>
            {completedProjects.map((story, index) => (
              <SplideSlide key={index}>
                <div className="relative h-[420px] flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center w-full h-full"
                    style={{ backgroundImage: `url(${story.imageSrc[0]})` }}
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/40"></div>
                  </div>

                  <div className="relative z-10 max-w-2xl p-8 text-left">
                    <h3 className="text-3xl font-bold mb-4 text-white">{story.title}</h3>
                    <p className="text-lg mb-6 text-white/90">{story.description}</p>
                    <Link 
                     href={`/programs/details/${story.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-amber-400 hover:underline"
                    >
                      Read Full Story
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-primary text-white hover:bg-primary/90 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            asChild
            size="lg"
          >
            <Link href="/donate">Support Community Impact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
