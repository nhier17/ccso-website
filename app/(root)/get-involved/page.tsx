"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { otherSupportOptions, supportOptions } from "@/constants";
import Faqs from "@/components/Faqs";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const GetInvolved = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);


  useGSAP(() => {
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

    // Animate Cards
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
        },
      });
    });
  }, []);

  return (
    <main className="w-full font-bebas-neue">
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/images/support.png"
          alt="Support CCSO"
          className="absolute inset-0 object-cover opacity-30"
          fill
        />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-100">
            Join Us in Making a Difference
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Support CCSO through sponsorship, volunteering, or partnerships.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Button className="bg-primary hover:bg-secondary" size="lg" asChild>
              <Link href="#get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="get-involved" className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-start md:text-center mb-10 about-heading">
          Ways to Support Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {supportOptions.map((option, index) => (
            <div
              key={option.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`p-6 border rounded-lg shadow-lg text-center ${option.bgClass} text-dark-100`}
            >
              <Image
                src={option.imageSrc}
                alt={option.title}
                width={300}
                height={200}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold">{option.title}</h3>
              <p className="mt-4">{option.description}</p>
              <Button className="mt-6 bg-white text-orange-500 hover:text-light-100" asChild>
                <Link href={`/get-involved/${option.id}`}>Read More</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center gap-12 py-20">
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/images/impact.jpg"
            alt="Why Get Involved"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Your Support Matters
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Your involvement directly helps provide education, clean water, and
            community empowerment programs for those in need.
          </p>
          <Button className="mt-6 bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all">
            Learn More
          </Button>
        </div>
      </div>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-start md:text-center mb-8">
            What Our Supporters Say
          </h2>
          <p className="italic max-w-3xl mx-auto">
            “CCSO’s work has changed countless lives. We’re honored to be part
            of their mission.”
          </p>
          <span className="block mt-4 font-semibold">- Jane Doe, Long-term Sponsor</span>
        </div>
      </section>

      <section className="max-w-7xl py-20 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-start md:text-center mb-10">
          Other Ways to Support
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {otherSupportOptions.map((option, index) => (
            <div
              key={option.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`p-6 border rounded-lg shadow-lg text-center ${option.bgClass} text-dark-100`}
            >
              <Image
                src={option.imageSrc}
                alt={option.title}
                width={300}
                height={200}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold">{option.title}</h3>
              <p className="mt-4">{option.description}</p>
              <Button className="mt-6 bg-white text-orange-500 hover:text-light-100" asChild>
                <Link href={option.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <div className="text-start md:text-center mt-20">
        <h2 className="text-3xl md:text-4xl font-bold">Take Action Today</h2>
        <p className="text-lg text-gray-700 mt-2">
          Every contribution makes a difference.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all">
            Donate Now
          </Button>
          <Button className="border-primary border-[2px] bg-white text-primary hover:bg-primary hover:text-white transition-all">
            Volunteer
          </Button>
        </div>
      </div>

      <Faqs />
    </main>
  );
};

export default GetInvolved;
