import About from "@/components/About";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";


export default function Home() {
  return (
    <div>
      <Hero />

      <div className="mx-auto w-full max-w-7xl px-5 xs:px-10 md:px-16">
      <About />
      <Features />
      <Impact />
      <CTA />
      </div>
    </div>
  );
}
