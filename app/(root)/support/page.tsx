import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { otherSupportOptions, supportOptions } from "@/constants";
import Faqs from "@/components/Faqs";

const Support = () => {
  return (
    <main className="w-full font-bebas-neue">
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center px-5 md:px-10">
        <Image
          src="/images/support.png"
          alt="Support CCSO"
          className="absolute inset-0 object-cover opacity-30"
          fill
        />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-100">Join Us in Making a Difference</h1>
          <p className="text-lg md:text-xl mt-4">Support CCSO through sponsorship, volunteering, or partnerships.</p>
          <div className="mt-6 flex gap-4 justify-center">
            <Button className="bg-primary hover:bg-secondary" size="lg" asChild>
              <Link href="#get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="mx-auto w-full max-w-7xl px-5 xs:px-10 md:px-16">
      <section id="get-involved" className="max-w-7xl mx-auto px-5 md:px-16 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Ways to Support Us</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {supportOptions.map((option) => (
          <div
            key={option.id}
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
              <Link href={`/support/${option.id}`}>Read More</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-16 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Supporters Say</h2>
          <p className="italic max-w-3xl mx-auto">“CCSO’s work has changed countless lives. We’re honored to be part of their mission.”</p>
          <span className="block mt-4 font-semibold">- Jane Doe, Long-term Sponsor</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-16 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Other Ways to Support</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {otherSupportOptions.map((option) => (
          <div
            key={option.id}
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

      {/* FAQ Section */}
        <Faqs />
        </div>
    </main>
  );
};

export default Support;
