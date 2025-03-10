"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartPulse, Droplet, BookOpen, HandHelping } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const programsRef = useRef([]);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate Header Text
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate Image
      gsap.from(imgRef.current, {
        opacity: 0,
        x: -30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate Programs Cards
      programsRef.current.forEach((el, index) => {
        if (el) {
          gsap.from(el, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16">
      <div className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        <Image
          src="https://cmmb.org/wp-content/uploads/2017/01/Mothers-with-children-wait-for-care_South-Sudan.jpg"
          alt="Programs"
          fill
          className="absolute inset-0 opacity-40 object-cover"
        />
        <h1 className="relative text-4xl md:text-5xl font-bold">Our Programs</h1>
      </div>

      <div className="px-6 mt-16">
        <div ref={textRef} className="text-start md:text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Key Programs</h2>
          <p className="text-lg text-gray-700 mt-2">
            Transforming lives through education, healthcare, and social support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {[
            { icon: HeartPulse, title: "Healthcare Support", desc: "Providing medical assistance & awareness." },
            { icon: Droplet, title: "Clean Water Access", desc: "Ensuring clean and safe drinking water." },
            { icon: BookOpen, title: "Education Programs", desc: "Supporting children’s education & literacy." },
            { icon: HandHelping, title: "Community Empowerment", desc: "Skill training & self-reliance projects." },
          ].map((program, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <program.icon className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
              <p className="text-gray-600 mt-2">{program.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
          <div ref={imgRef} className="relative w-full lg:w-1/2">
            <Image
              src="https://i0.wp.com/humanitarian.worldconcern.org/wp-content/uploads/2011/08/humanitarian-sudan-schoolkids.jpg?ssl=1"
              alt="Impact"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div ref={textRef} className="lg:w-1/2 text-start md:text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">How We Make a Difference</h2>
            <p className="mt-4 text-lg text-gray-700">
              We work closely with local communities to provide essential services and create sustainable programs that empower individuals and families.
            </p>
            <Button className="mt-6 bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all">
              Learn More
            </Button>
          </div>
        </div>

        <div className="text-start md:text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold">Be Part of the Change</h2>
          <p className="text-lg text-gray-700 mt-2">
            Support our programs by donating or volunteering today.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all">
              Donate Now
            </Button>
            <Button className="border-primary border-[2px] bg-white text-primary hover:bg-primary hover:text-white transition-all">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
