import About from "@/components/About";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import Projects from "@/components/AlertBanner";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Projects />
      <Impact />
      <CTA />
      </>
  );
}
