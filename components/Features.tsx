"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { FOCUS_AREAS } from "@/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    cardRefs.current.forEach((card) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 px-4 mt-8">
         <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Focus Areas</h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOCUS_AREAS.map((area, index) => {
            const colorClasses = [
              "from-blue-500 to-cyan-500",
              "from-green-500 to-emerald-500",
              "from-purple-500 to-pink-500",
              "from-red-500 to-orange-500",
              "from-indigo-500 to-blue-500",
              "from-amber-500 to-orange-500"
            ][index % 6];

            return (
              <div
                key={area.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="group relative overflow-hidden rounded-3xl border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={area.img}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                <div className="relative p-8 ">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between group/btn text-primary hover:text-primary/80 hover:bg-primary/5 cursor-pointer"
                  >
                    <Link href={`/programs#${area.slug}`}>
                      <span>Explore Programs</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left pointer-events-none`} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Features;
