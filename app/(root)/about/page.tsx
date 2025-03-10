"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartHandshake, ShieldCheck, Users, Globe } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    // Animating the heading
    gsap.from(".about-heading", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-heading",
        start: "top 80%",
      },
    });

    // Animating the image
    gsap.from(imgRef.current, {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 85%",
      },
    });

    // Animating the text section
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
      },
    });

  }, []);

  return (
    <section className="py-16">
      <div className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        <Image
          src="/images/impact4.jpg"
          alt="About Us"
          fill
          className="absolute inset-0 opacity-40 object-cover"
        />
        <h1 className="relative text-5xl font-bold about-heading">About Us</h1>
      </div>

      <div className="px-6 mt-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">
          <div ref={imgRef} className="relative w-full lg:w-1/2">
            <Image
              src="https://www.unicef.org/southsudan/sites/unicef.org.southsudan/files/styles/large/public/girl%20child%20smile_1.jpg.webp?itok=k5l9vyAD"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div ref={textRef} className="lg:w-1/2 text-start md:text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="mt-4 text-lg text-gray-700">
              CCSO was founded with a vision to empower the people of South Sudan through faith, compassion, and sustainable development. We are dedicated to improving lives through community-driven initiatives.
            </p>
            <Button className="mt-6 bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all">
              Learn More
            </Button>
          </div>
        </div>

        <div className="mt-20 text-start md:text-center core-values">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <p className="text-lg text-gray-700 mt-2">
            These principles guide everything we do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {[
              { icon: HeartHandshake, title: "Compassion", desc: "We serve with love, kindness, and a heart for others." },
              { icon: ShieldCheck, title: "Integrity", desc: "We operate with honesty, transparency, and accountability." },
              { icon: Users, title: "Community", desc: "We believe in unity and empowering communities for change." },
              { icon: Globe, title: "Sustainability", desc: "We focus on long-term, sustainable impact." },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <value.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-600 mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-start md:text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Mission</h2>
          <p className="text-lg text-gray-700 mt-2">
            Be a part of our journey to create lasting change.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all">
              Get Involved
            </Button>
            <Button className="border-primary border-[2px] bg-white text-primary hover:bg-primary hover:text-white transition-all">
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
