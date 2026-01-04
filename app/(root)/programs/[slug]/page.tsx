"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { programStats } from "@/constants";
import { getColorClasses } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  ArrowRight, 
  Users, 
  Calendar, 
  Target, 
  HeartHandshake, 
  Shield,
  Globe,
  Sparkles,
  CheckCircle,
  DollarSign,
  BookOpen
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProgramDetails() {
  const params = useParams();
  const slug = params.slug as string;

  const program = programStats.find((p) => p.slug === slug);

  if (!program) return notFound();

  const colors = getColorClasses(program.color);


  return (
    <main className="min-h-screen">
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <Image
          src={program.image}
          alt={program.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        <div className="absolute top-8 left-8 z-10">
          <Badge className={`px-4 py-2 ${colors.badge} backdrop-blur-sm border-0`}>
            <Sparkles className="h-4 w-4 mr-2" />
            {program.status}
          </Badge>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl ${colors.bg}`}>
                <program.icon className={`h-8 w-8 ${colors.text}`} />
              </div>
              <span className="text-white/90 text-sm font-medium">Active Program</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {program.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 leading-relaxed">
              {program.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">{program.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Since 2019</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5" />
                <span className="font-medium">{program.impact.currentValue.toLocaleString()} Beneficiaries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-primary/5 via-white to-blue-500/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {program.highlights.map((item, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-white shadow-lg">
                <div className={`text-3xl font-bold mb-2 ${colors.text}`}>
                  {item.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
      </section>

      <section className="psection-padding bg-gradient-to-b from-white to-gray-50">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
                    Program Impact & Progress
                  </h2>
                </div>

                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {program.impact.currentLabel}
                        </h3>
                        <p className="text-gray-600">
                          Your support helps us reach our goal of {program.impact.goalValue.toLocaleString()} beneficiaries
                        </p>
                      </div>
                      <Badge className={`px-4 py-2 ${colors.badge} text-base`}>
                        {program.impact.progress}% Complete
                      </Badge>
                    </div>

                    <Progress
                      value={program.impact.progress}
                      className="h-4 mb-6 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-blue-500"
                    />

                    <div className="flex justify-between text-sm font-medium text-gray-600">
                      <span>Current Impact</span>
                      <span className={colors.text}>
                        {program.impact.currentValue.toLocaleString()} of {program.impact.goalValue.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Program Overview
                </h3>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {program.shortDescription}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {program.objectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  Our Approach
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {program.approach.map((item, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-6">
                        <div className={`mb-4 p-3 rounded-xl ${colors.bg} w-fit`}>
                          <item.icon className={`h-6 w-6 ${colors.text}`} />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <Card className="border-0 shadow-2xl sticky top-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">Quick Facts</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-medium">{program.location}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-medium">{program.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                      <DollarSign className="h-5 w-5 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Annual Budget</div>
                        <div className="font-medium">{program.annualBudget}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4">Funding Needs</h4>
                    <div className="space-y-4">
                      {program.fundingNeeds.map((need, index) => (
                        <div key={index} className="text-sm">
                          <div className="font-medium">{need.amount}</div>
                          <div className="text-gray-600">{need.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

            </aside>
          </div>
      </section>

      <section className="section-padding px-4">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-blue-600 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 md:p-16">
                <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Join Our Mission
                </Badge>
                <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white leading-tight">
                  Be Part of Lasting Change
                </h2>
                <p className="mb-8 text-lg text-white/90 leading-relaxed">
                  Your support empowers communities, restores dignity, and creates 
                  sustainable solutions that last for generations.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    asChild
                    className="w-full py-6 rounded-xl bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <Link href="/donate" className="flex items-center justify-center gap-2">
                      <HeartHandshake className="h-5 w-5" />
                      Donate to {program.title}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild
                    className="w-full py-6 rounded-xl border-white text-black hover:bg-white/10 transition-all group"
                  >
                    <Link href="/volunteer" className="flex items-center justify-center gap-2">
                      <Users className="h-5 w-5" />
                      Volunteer with Us
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[300px] md:min-h-[400px]">
                <Image
                  src="/images/partner1.png"
                  alt="Community Impact"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Program Impact Score</div>
                      <div className="text-2xl font-bold text-primary">9.2/10</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                      <div className="text-2xl font-bold text-green-600">96%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}