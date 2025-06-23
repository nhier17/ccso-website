import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonialsData } from "@/constants";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mb-2">
            Stories from Our Communities
          </h2>
          <div className="mx-auto mb-6 h-1 w-32 rounded bg-primary" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Hear directly from the people whose lives have been transformed through our community-driven programs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>

                <blockquote className="text-gray-700 dark:text-gray-200 mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-4xl">
          <blockquote className="rounded-2xl bg-blue-50 dark:bg-blue-950 p-8 text-center">
            <p className="text-xl italic text-blue-900 dark:text-blue-100">
              "CCSO doesn't just provide aid—they empower us to build our own solutions. Their respect for our culture and community leadership makes all the difference."
            </p>
            <footer className="mt-4 text-sm font-medium text-blue-700 dark:text-blue-300">
              — Chief Daniel Mayom, Traditional Leader
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}