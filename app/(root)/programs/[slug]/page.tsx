"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { programStats } from "@/constants";
import { getColorClasses } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin, ArrowRight } from "lucide-react";


export default function ProgramDetails() {
  const params = useParams();
  const slug = params.slug as string;

  const program = programStats.find(
    (p) => p.slug === slug
  );

  if (!program) return notFound();

  const colors = getColorClasses(program.color);

  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh] flex items-center">
        <Image
          src={program.image}
          alt={program.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl px-6">
          <span className={`inline-block mb-4 px-3 py-1 rounded-full text-sm ${colors.badge}`}>
            {program.status}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {program.title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            {program.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-white">
              <Link href="/donate">
                Donate to This Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black"
            >
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Impact So Far
              </h2>
              <div className="h-1 w-20 bg-primary rounded" />
            </div>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between text-sm font-medium">
                  <span>{program.impact.currentLabel}</span>
                  <span className={colors.text}>
                    {program.impact.currentValue.toLocaleString()} /{" "}
                    {program.impact.goalValue.toLocaleString()}
                  </span>
                </div>

                <Progress
                  value={program.impact.progress}
                  className="h-2"
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                  {program.highlights.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-xl font-bold ${colors.text}`}>
                        {item.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">
                  Program Location
                </h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {program.location}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-muted/30">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">
                  Why Your Donation Matters
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your contribution directly supports on-the-ground action,
                  empowering communities with sustainable solutions and
                  long-term resilience.
                </p>

                <Button asChild className="w-full bg-primary text-white">
                  <Link href="/donate">
                    Support This Program
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of the Change
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Together, we can restore dignity, rebuild communities, and
            create lasting hope.
          </p>

          <Button
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
