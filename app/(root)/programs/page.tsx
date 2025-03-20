"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programs, impactMetrics, successStories } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const programsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef(null);
  const [activeProgram, setActiveProgram] = useState("healthcare");

  useGSAP(() => {
    const ctx = gsap.context(() => {
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
        <div className="relative h-[70vh] flex items-center justify-center bg-gray-900 text-white">
          <Image
            src="https://i.pinimg.com/736x/99/2b/ee/992beee6f85227231bc4b97728f437c8.jpg"
            alt="Programs"
            fill
            priority
            className="absolute inset-0 opacity-40 object-cover"
          />
          <div className="relative z-10 text-center max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Communities</h1>
            <p className="text-xl md:text-2xl mb-8">Through sustainable programs and lasting partnerships</p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
              <Link href="#our-programs">Explore Our Programs</Link>
            </Button>
          </div>
        </div>

            <section className="py-16 bg-gray-50">
              <div className="px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {impactMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <metric.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <span className="text-4xl font-bold block">{metric.number}</span>
                      <span className="text-gray-600">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          <section id="our-programs" className="py-20">
          <div ref={textRef} className="text-start md:text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Programs</h2>
            <p className="text-xl text-gray-700">
              Transforming lives through sustainable and impactful initiatives
            </p>
          </div>

          <Tabs defaultValue="healthcare" onValueChange={setActiveProgram}>
            <TabsList
              className="flex gap-6 md:gap-8 overflow-x-auto lg:grid lg:grid-cols-4 bg-transparent h-auto w-full">
              {programs.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className={`flex-shrink-0  ${
                    activeProgram === program.id ? "bg-primary text-white" : "bg-transparent"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <program.icon className="w-8 h-8 mb-2" />
                    <span>{program.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id}>
                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                    <p className="text-gray-700 mb-6">{program.longDesc}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(program.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                          <span className="block text-2xl font-bold text-primary">{value}</span>
                          <span className="text-sm text-gray-600 capitalize">{key}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-8" asChild>
                      <Link href={`/programs/${program.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>


        <section className="py-20 bg-gray-50">
          <div className="px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-start md:text-center mb-8">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) programsRef.current[index] = el;
                  }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{story.location}</p>
                    <p className="text-gray-700">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-white">
          <div className="text-start md:text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-xl mb-8">
              Join us in our mission to create lasting change in communities around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-dark-100 hover:bg-white/10" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </section>
  );
};

export default Programs;
