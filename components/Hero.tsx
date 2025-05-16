import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative py-6 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 relative">
        <div className="text-center lg:text-left max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building a Resilient and Self-Relient{" "}
            <span className="text-primary">South Sudan</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Empowering communities through faith, compassion, and sustainable development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              className="bg-primary text-white hover:bg-primary/90 transition-all"
              size="lg"
              asChild
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              className="border-primary border-[2px] text-primary hover:bg-primary hover:text-white transition-all"
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>

        <div className="relative w-full aspect-[3/4] africa-mask">
          <Image src="/images/edu.png" alt="education" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};
