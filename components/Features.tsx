"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { FOCUS_AREAS } from "@/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

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
    <section ref={sectionRef} className="relative mt-8 py-16 bg-gray-50 px-4">
         <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Focus Areas</h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
        <p className="mb-12 text-lg text-muted-foreground">
          CCSO's focus areas are designed to address the most pressing needs of communities in Lakes State, South Sudan. These initiatives are tailored to support vulnerable populations and promote sustainable development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FOCUS_AREAS.map((area, index) => (
          <div
            key={area.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="bg-white overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 text-center group"
          >
            <div className="relative h-48">
              <Image
                src={area.img}
                alt={area.title}
               fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
            <p className="text-dark-200 leading-relaxed">{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
