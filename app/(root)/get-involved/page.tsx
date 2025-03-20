"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { otherSupportOptions, supportOptions } from "@/constants";
import Faqs from "@/components/Faqs";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { testimonials, impactStats, campaigns } from "@/constants";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const GetInvolved = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState("");

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full font-bebas-neue">
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/images/support.png"
          alt="Support CCSO"
          className="absolute inset-0 object-cover opacity-30"
          fill
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-100 mb-6">
            Be Part of Something Bigger
          </h1>
          <p className="text-xl md:text-2xl mt-4 mb-8">
            Join our global community of changemakers. Your support can transform lives and communities.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="#get-involved">Explore Ways to Help</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
             <span className={cn("text-3xl md:text-4xl font-bold block", stat.color)}>
              {stat.number}
              </span>
                <span className="text-gray-600 mt-2 block">{stat.label}</span>
              </div>
            ))}
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
              className={`overflow-hidden rounded-lg shadow-lg text-center ${option.bgClass} text-dark-100`}
            >
              <div className="relative h-48">
              <Image
                src={option.imageSrc}
                alt={option.title}
                fill
                className="object-cover"
              />
              </div>
              <div className="p-6">
              <h3 className="text-2xl font-semibold">{option.title}</h3>
              <p className="mt-4">{option.description}</p>
              <Button className="mt-6 bg-white text-orange-500 hover:text-light-100" asChild>
                <Link href={`/get-involved/${option.id}`}>Read More</Link>
              </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Current Campaigns
          </h2>
          <div className="space-y-8">
            {campaigns.map((campaign, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold">{campaign.name}</h3>
                  <span className="text-primary">${campaign.raised} / ${campaign.goal}</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
                <p className="text-sm text-gray-600 mt-2">{campaign.progress}% of goal reached</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center gap-12 py-20">
        <div className="relative w-full lg:w-1/2">
          <Image
            ref={imgRef}
            src="/images/impact.jpg"
            alt="Why Get Involved"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        <div ref={textRef} className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Your Support Matters
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Your involvement directly helps provide education, clean water, and
            community empowerment programs for those in need. Every contribution,
            whether through time, resources, or advocacy, creates lasting positive change.
          </p>
          <Button className="mt-6 bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all">
            Learn More
          </Button>
        </div>
      </div>

      <section className="bg-gray-100 py-20">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Supporters Say
          </h2>
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === activeTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                  />
                  <p className="italic max-w-3xl text-center text-lg">{testimonial.quote}</p>
                  <span className="block mt-4 font-semibold">{testimonial.author}</span>
                  <span className="text-gray-600">{testimonial.role}</span>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === activeTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Other Ways to Support
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {otherSupportOptions.map((option, index) => (
            <div
              key={option.id}
              ref={(el) => {
                if (el) cardsRef.current[index + supportOptions.length] = el;
              }}
              className={`overflow-hidden rounded-lg shadow-lg text-center ${option.bgClass} text-dark-100`}
            >
              <div className="relative h-48">
              <Image
                src={option.imageSrc}
                alt={option.title}
               fill
                className="object-cover"
              />
              </div>
              <div className="p-6">
              <h3 className="text-2xl font-semibold">{option.title}</h3>
              <p className="mt-4">{option.description}</p>
              <Button className="mt-6 bg-white text-orange-500 hover:text-light-100" asChild>
                <Link href={option.link}>Learn More</Link>
              </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/10 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8">
            Join our newsletter to receive updates about our projects and ways to get involved.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      <div className="text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Take Action Today</h2>
        <p className="text-lg text-gray-700 mt-2 mb-8">
          Every contribution makes a difference. Join us in creating positive change.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
            <Link href="/donate">Donate Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
            <Link href="/volunteer">Volunteer</Link>
          </Button>
        </div>
      </div>

      <Faqs />
    </main>
  );
};

export default GetInvolved;
