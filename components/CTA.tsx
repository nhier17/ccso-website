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
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);

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
  }, []);

  return (
    <section className="bg-linear-to-b from-gray-50 to-white section-padding">
      <div className="px-6 flex flex-col lg:flex-row items-center gap-12">

        <div ref={textRef} className="lg:w-1/2 text-start md:text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Your Gift Can Restore{" "}
            <span className="text-primary">Lives and Hope in South Sudan</span>
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Your support helps families recover from crisis, keeps children in
            school, and empowers communities to rebuild with dignity and peace.
          </p>

          <p className="mt-3 text-sm text-gray-600 italic">
            💛 Just <strong>$25</strong> can help provide clean water or school
            supplies to a family in need.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 max-w-sm mx-auto lg:mx-0">
            <div>
              <div className="text-lg font-bold text-primary">85%</div>
              <div className="text-sm text-gray-600">
                Direct Program Funding
              </div>
            </div>
            <div>
              <div className="text-lg font-bold text-amber-500">15%</div>
              <div className="text-sm text-gray-600">
                Operations & Accountability
              </div>
            </div>
          </div>

          <div
            ref={btnRef}
            className="mt-8 flex justify-center lg:justify-start gap-4"
          >
            <Button
              className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all"
              asChild
            >
              <Link href="/donate">Help a Family Today</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <Link href="/partner">Become a Partner</Link>
            </Button>
          </div>
        </div>

        <div ref={imgRef} className="relative w-full h-[40vh]">
          <Image
            alt="Community Impact"
            src="/images/impact.jpg"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
