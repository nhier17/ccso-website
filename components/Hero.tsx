import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
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
            <Button className="bg-gray-50 hover:bg-orange-400 text-dark-100" size="lg" asChild>
              <Link href="#mission">Our Mission</Link>
            </Button>
            <Button className="border border-primary" size="lg" variant="outline" asChild>
              <Link href="#donate">Donate now</Link>
            </Button>
          </div>
        </div>
      </section>
  )
}

