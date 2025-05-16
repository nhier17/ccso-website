"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Options } from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Button } from "@/components/ui/button";
import { impactStories } from "@/constants";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Users, Droplet, Heart } from "lucide-react";
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
    value: 50000,
    label: "Lives Impacted",
    suffix: "+",
  },
  {
    icon: Droplet,
    value: 100,
    label: "Water Wells Built",
    suffix: "+",
  },
  {
    icon: MapPin,
    value: 25,
    label: "Communities Served",
    suffix: "",
  },
  {
    icon: Heart,
    value: 200,
    label: "Active Volunteers",
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
    <section className="bg-gradient-to-b from-gray-50 to-white text-dark-100 py-20 mt-8">
      <div className="px-4">
        <div ref={textRef}>
        <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Making Real Impact</h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
        <p className="mb-12 text-lg text-muted-foreground">
          Through our programs, we have empowered thousands of families, provided clean water to communities, and promoted peace in conflict-affected areas. Every donation helps us create more success stories.
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
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {animatedStats[index].toLocaleString()}{stat.suffix}
              </h3>

              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div ref={sliderRef} className="shadow-2xl rounded-2xl overflow-hidden bg-white">
          <Splide options={splideOptions}>
            {impactStories.map((story, index) => (
              <SplideSlide key={index}>
                <div className="relative h-[500px] flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center w-full h-full"
                    style={{ backgroundImage: `url(${story.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                  </div>

                  <div className="relative z-10 max-w-2xl p-8 text-left">
                    <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                      Success Story
                    </span>
                    <h3 className="text-3xl font-bold mb-4 text-white">{story.title}</h3>
                    <p className="text-lg mb-6 text-white/90">{story.description}</p>
                    <Button 
                    variant="link"
                      className="text-white h-auto p-0"
                    >
                      Read Full Story
                    </Button>
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
            <Link href="/donate">Support Our Mission</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
