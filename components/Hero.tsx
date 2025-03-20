import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image src="https://i.pinimg.com/736x/57/b5/60/57b56096c50b99e5cdcdfc51a21b23c6.jpg" alt="People" className="object-cover opacity-25" fill />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div> {/* Gradient Overlay */}
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Building a Resilient and Self-Reliant <span className="text-primary">South Sudan</span>.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
          Empowering communities through faith, compassion, and sustainable development.
        </p>

        <div  className="flex gap-4 justify-center">
          <Button className="bg-primary text-white hover:bg-primary/90 transition-all" size="lg" asChild>
            <Link href="/about">Our Mission</Link>
          </Button>
          <Button
            className="border-primary border-[2px] text-primary hover:bg-primary hover:text-white transition-all"
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};