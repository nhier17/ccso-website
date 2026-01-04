"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { allStories } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, MapPin, Users, Target } from "lucide-react";

const StoryDetailsPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const story = allStories.find((p) => p.slug === slug);
  if (!story) notFound();

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative">
        {story.coverImage && (
          <div className="relative h-[40vh] w-full">
            <Image
              src={story.coverImage}
              alt={story.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        )}

        <div className="relative -mt-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge 
                className="px-3 py-1.5 text-sm font-semibold bg-primary/10 text-primary border-primary/20"
                variant="outline"
              >
                {story.category}
              </Badge>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {story.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(story.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {story.readTime}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="mb-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {story.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-primary pl-4 py-2">
                {story.excerpt}
              </p>
            </div>
            {story.impact && (
              <Card className="mb-12 border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-gray-900">Impact Summary</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {story.impact.beneficiaries && (
                        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                          <Users className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-gray-500">Beneficiaries</p>
                            <p className="text-2xl font-bold text-gray-900">
                              {story.impact.beneficiaries.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      )}

                      {story.impact.duration && (
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Duration</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {story.impact.duration}
                          </p>
                        </div>
                      )}
                    </div>

                    {Array.isArray(story.impact.outputs) && (
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <p className="text-sm text-gray-500 mb-3 font-medium">Key Outputs</p>
                        <ul className="space-y-3">
                          {story.impact.outputs.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="prose prose-lg md:prose-xl max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
            <Mdx code={story.body.code} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default StoryDetailsPage;