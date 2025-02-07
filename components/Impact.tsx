"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { impactStories } from "@/constants";

const splideOptions = {
  type: 'loop',
  autoplay: true,
  interval: 5000, 
  pauseOnHover: true,
  resetProgress: false,
  arrows: false,
  pagination: false,
  perPage: 1, 
  gap: '1rem', 
  focus: 'center',
  height: "500px"
};

export const Impact = () => {
  return (
    <section className="bg-gray-900 p-4 text-light-100 mb-12 mt-8">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Our Impact 
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto">
          Through our programs, we have empowered thousands of families, provided clean water to communities, and promoted peace in conflict-affected areas. Join us in creating more success stories.
        </p>
        <Splide options={splideOptions} className="shadow-xl rounded-lg overflow-hidden">
          {impactStories.map((story, index) => (        
            <SplideSlide key={index}>
              <div className="relative h-[500px] flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-60">
                <div
                  className="absolute inset-0 bg-cover bg-center w-full h-full rounded-lg"
                  style={{ backgroundImage: `url(${story.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                </div>
                <div className="relative z-10 max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4">{story.title}</h3>
                  <p className="text-lg mb-6">{story.description}</p>
                  <button className="bg-primary px-4 py-2 rounded-md text-dark-100 hover:bg-dark-100 hover:text-light-100">
                    Read Full Story
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};
