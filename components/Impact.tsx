"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Options } from "@splidejs/react-splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Button } from "@/components/ui/button";
import { completedProjects } from "@/constants";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Users, Heart, HeartHandshake, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

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
  
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Stories From the Communities We Serve</h3>
              <p className="text-gray-600">Real lives transformed through sustainable development</p>
            </div>
          </div>

          <div ref={sliderRef} className="rounded-3xl overflow-hidden shadow-2xl border-0">
            <Splide 
              options={splideOptions} 
            >
              {completedProjects.map((story, index) => (
                <SplideSlide key={index}>
                  <div className="relative h-[500px]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${story.imageSrc[0]})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    </div>

                    <div className="relative z-10 h-full flex items-center">
                      <div className="max-w-3xl p-8 md:p-12">
                        <Badge className="mb-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white border-0">
                          <Star className="h-3 w-3 mr-1" />
                          Success Story
                        </Badge>
                        
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                          {story.title}
                        </h3>
                        
                        <p className="text-lg mb-8 text-white/90 max-w-2xl leading-relaxed">
                          {story.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                          <Button
                            asChild
                            className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all group"
                          >
                            <Link 
                           href={`/programs/details/${story.id}`}
                              className="flex items-center gap-2"
                            >
                              Read Full Story
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-8 right-8">
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <span>Story {index + 1} of {completedProjects.length}</span>
                        <span>Read time: 3 min</span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
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
