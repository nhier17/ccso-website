import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-[90vh]  flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="People"
            className="object-cover opacity-20"
            fill
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark-100">
          Building a Resilient and Self-Reliant South Sudan.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering communities in South Sudan through faith, compassion, and sustainable development
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-gray-50 text-dark-100 hover:bg-dark-100 hover:text-light-100" size="lg" asChild>
              <Link href="#mission">Our Mission</Link>
            </Button>
            <Button className="border-primary border-[2px] hover:bg-dark-100 hover:text-light-100" size="lg" variant="outline" asChild>
              <Link href="#donate">Donate now</Link>
            </Button>
          </div>
        </div>
      </section>
  )
}

