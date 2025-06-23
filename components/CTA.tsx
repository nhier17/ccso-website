"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(imgRef.current, {
      opacity: 0,
      x: 30,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    const btnAnimation = gsap.from(btnRef.current, {
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

    // Ensure buttons are clickable after animation
    btnAnimation.eventCallback("onComplete", () => {
      gsap.set(btnRef.current, { pointerEvents: "auto" });
    });

  }, []);

  return (
    <section className="bg-gray-50 py-16 mt-8">
      <div className="px-6 flex flex-col lg:flex-row items-center gap-12">
        <div ref={textRef} className="lg:w-1/2 text-start md:text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join Us in <span className="text-primary">Building a Better Future</span>.
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Your support can transform lives. Whether through donations, volunteering, or partnerships, you can help us create a resilient and self-reliant South Sudan.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Direct Program Funding</div>
            </div>
            <div>
              <div className="text-lg font-bold text-orange-600 dark:text-orange-400">15%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Administrative Costs</div>
            </div>
          </div>
          <div ref={btnRef} className="mt-6 flex justify-center lg:justify-start gap-4">
            <Button className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild className="border-primary border-[2px] text-primary bg-white hover:bg-primary hover:text-white transition-all">
              <Link href="/partner">Partner with Us</Link>
            </Button>
          </div>
        </div>

        <div ref={imgRef} className="relative w-full lg:w-1/2">
          <Image
            alt="Community Impact"
            src="/images/impact.jpg"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
