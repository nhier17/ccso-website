"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);
  const statsRef = useRef(null);
  const missionRef = useRef(null);

  useGSAP(() => {
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
    gsap.from(btnRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(imgRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(statsRef.current?.children || [], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(missionRef.current?.children || [], {
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <section className="py-20 mt-8 container mx-auto">
        <div className="px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get to know <span className="text-primary">CCSO</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div ref={imgRef} className="relative w-full md:w-1/2">
              <Image
                src="/images/impact4.jpg"
                alt="Impact"
                width={500}
                height={350}
                className="rounded-lg shadow-xl object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 rounded-lg"></div>
            </div>

            <div ref={textRef} className="text-center md:text-left md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                We are an indigenous South Sudanese NGO committed to alleviating poverty, promoting peace, and empowering vulnerable communities to achieve sustainable livelihoods.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Inspired by the compassion of Jesus Christ, we work to restore dignity, self-respect, and self-reliance in Lakes State and beyond.
              </p>

              <div ref={btnRef} className="flex justify-center md:justify-start gap-6">
                <Button className="bg-primary text-white hover:bg-white hover:text-dark-100 transition-all px-6 py-3" size="lg" asChild>
                  <Link href="/donate">
                    Donate Now
                  </Link>
                </Button>
                <Button className="border-primary border-[2px] text-primary hover:bg-primary hover:text-white transition-all px-6 py-3" size="lg" variant="outline" asChild>
                  <Link href="/programs">Sponsor a Program</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold mb-2">5+</h3>
              <p className="text-lg">Years of Service</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p className="text-lg">Lives Impacted</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p className="text-lg">Active Programs</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold mb-2">3</h3>
              <p className="text-lg">Regions Served</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="px-6">
          <div ref={missionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-700">
                To empower South Sudanese communities through sustainable development initiatives, fostering peace, and providing opportunities for economic growth and social advancement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-700">
              To realize democratic, peaceful and progressive South Sudan wherein all people have equal and 
              just opportunities to realize all-round human development without any form of discrimination. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
