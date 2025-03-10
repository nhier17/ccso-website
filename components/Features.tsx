"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
        Our <span className="text-primary">Focus Areas</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {FOCUS_AREAS.map((area, index) => (
          <div
            key={area.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105 text-center group"
          >
            <div className="relative w-full mb-6 overflow-hidden rounded-xl">
              <Image
                src={area.icon}
                alt={area.title}
                width={400}
                height={300}
                className="object-cover rounded-xl w-full h-52 group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
            <p className="text-dark-200 leading-relaxed">{area.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/donate">
          <Button className="bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-primary/90 transition-all duration-300">
            Donate Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Features;
