import Link from "next/link";
import { FOCUS_AREAS } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
<section className="relative mt-8 p-4">
      <div className="z-10">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
          Our Focus Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="relative w-full mb-6">
                <Image 
                  src={area.icon} 
                  alt={area.title} 
                  width={400} 
                  height={300} 
                  className="object-cover rounded-xl w-full h-52"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/programs" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300">
              Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
