"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { completedProjects } from "@/constants";

const Projects = () => {
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(textRef.current, { opacity: 0, y: 30, duration: 1, ease: "power3.out" });
    gsap.from(cardsRef.current, { opacity: 0, y: 20, duration: 1, delay: 0.5, stagger: 0.2, ease: "power3.out" });
  }, []);

  return (
    <section className="py-16">
      <div className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        <Image
          src="/images/food8.jpg"
          alt="Projects"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-40"
        />
        <h1 className="relative text-5xl font-bold">Our Impactful Projects</h1>
      </div>

      <div className="mt-16">
        <div className="text-start md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold">How We Are Changing Lives</h2>
          <p className="text-lg text-gray-700 mt-2">
            Explore the projects that are transforming communities and restoring hope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {completedProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden bg-white shadow-lg rounded-xl hover:scale-105 transition-transform"
            >
              <div className="relative h-48">
              <Image
                src={Array.isArray(project.imageSrc) ? project.imageSrc[0] : project.imageSrc}
                alt={project.title}
                fill
                className="object-cover"
              />
              </div>
              <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <Button className="mt-6 bg-primary text-white hover:bg-primary/90 transition-all" asChild>
                <Link href={`/projects/${project.id}`}>Read More</Link>
              </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-start md:text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold">Join Us in Making a Difference</h2>
          <p className="text-lg text-gray-700 mt-2">
            Your support enables us to continue these impactful initiatives.
          </p>
          <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-all" size="lg" asChild>
              <Link href="/get-involved">Get Involved</Link>
            </Button>
            <Button className="border-primary border-[2px] bg-white text-primary hover:bg-primary hover:text-white transition-all" size="lg" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
