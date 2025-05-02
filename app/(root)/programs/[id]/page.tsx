"use client";

import { useParams } from "next/navigation";
import { completedProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const splideOptions = {
  type: "loop",
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  resetProgress: false,
  arrows: false,
  pagination: true,
  perPage: 1,
  gap: "1rem",
  focus: "center",
  height: "600px",
};

const ProjectDetails = () => {
  const { id } = useParams(); 
  const project = completedProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Project not found</h2>
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mb-16">
          <Splide options={splideOptions}>
            {(Array.isArray(project.imageSrc) ? project.imageSrc : [project.imageSrc]).map((image, index) => (
              <SplideSlide key={index}>
                <div className="relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg leading-relaxed text-gray-700">{project.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact</h2>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <p className="text-lg leading-relaxed text-gray-700">{project.impact}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Goals</h2>
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <p className="text-lg leading-relaxed text-gray-700">{project.futureGoals}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-4">
              <h3 className="text-xl font-semibold mb-6">Support This Project</h3>
              <div className="space-y-4">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-all" size="lg" asChild>
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button className="w-full border-primary border-2 bg-white text-primary hover:bg-primary hover:text-white transition-all" size="lg" asChild>
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-medium mb-4">Project Details</h4>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Location:</dt>
                    <dd className="font-medium">{project.location}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Status:</dt>
                    <dd className="font-medium text-green-600">Completed</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Category:</dt>
                    <dd className="font-medium">{project.category}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProjectDetails;
