import CTA from "@/components/CTA";
import Features from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import Projects from "@/components/AlertBanner";
import Testtimonials from "@/components/Testtimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Projects />
      <Impact />
      <Testtimonials />
      <CTA />
      </>
  );
}
