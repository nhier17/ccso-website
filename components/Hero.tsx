import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative py-6 md:py-16 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 relative">
        <div className="text-center lg:text-left max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Restoring Hope and Dignity in{" "}
            <span className="text-primary">South Sudan</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
CCSO is a community-driven humanitarian organization providing rehabilitation, emergency relief, and long-term recovery for vulnerable communities affected by conflict, displacement, and poverty across South Sudan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              className="bg-primary text-white hover:bg-primary/90 transition-all"
              size="lg"
              asChild
            >
              <Link href="/donate">Support our work</Link>
            </Button>
            <Button
              className="border-primary border-2 text-primary hover:bg-primary hover:text-white transition-all"
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/about">Partner with us</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>Indigenous Led</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                <span>Community Driven</span>
              </div>
            </div>
        </div>

        <div className="relative w-full aspect-3/4 africa-mask">
          <Image src="/images/edu.png" alt="education" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};
