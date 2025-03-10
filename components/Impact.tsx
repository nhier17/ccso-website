"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Button } from "@/components/ui/button";
import { impactStories } from "@/constants";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
  height: "500px",
};

export const Impact = () => {
  const textRef = useRef(null);
  const sliderRef = useRef(null);

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

    gsap.from(sliderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="bg-gray-50 text-dark-100 py-20 mt-8">
      <div className="px-6">
        <div ref={textRef} className="text-start md:text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Impact</span>
          </h2>
          <p className="text-lg md:text-xl mt-4 text-dark-100">
            Through our programs, we have empowered thousands of families, provided clean water to communities, and promoted peace in conflict-affected areas. Join us in creating more success stories.
          </p>
        </div>

        <div ref={sliderRef} className="shadow-xl rounded-lg overflow-hidden">
          <Splide options={splideOptions}>
            {impactStories.map((story, index) => (
              <SplideSlide key={index}>
                <div className="relative h-[500px] flex flex-col items-center justify-center text-center p-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center w-full h-full rounded-lg"
                    style={{ backgroundImage: `url(${story.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                  </div>

                  <div className="relative z-10 max-w-2xl px-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">{story.title}</h3>
                    <p className="text-lg mb-6 text-white">{story.description}</p>
                    <Button className="bg-primary text-white hover:bg-primary/90 transition-all">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};
