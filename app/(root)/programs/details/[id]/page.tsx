"use client";

import { useParams } from "next/navigation";
import { completedProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Target, 
  Users, 
  Award,
  TrendingUp,
  HeartHandshake,
  Share2,
  Download,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  Globe,
  DollarSign,
  ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const splideOptions = {
  type: "slide",
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  resetProgress: false,
  arrows: true,
  pagination: true,
  perPage: 1,
  gap: "0rem",
  focus: "center",
  height: "600px",
  cover: true,
  breakpoints: {
    768: {
      height: "400px",
    },
  },
};

const ProjectDetails = () => {
  const { id } = useParams(); 
  const project = completedProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 w-fit mx-auto">
            <Target className="h-12 w-12 text-primary mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white">
            <Link href="/projects" className="flex items-center gap-2">
              <ChevronLeft className="h-5 w-5" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Button 
          asChild 
          variant="ghost" 
          className="mb-8 group"
        >
          <Link href="/programs" className="flex items-center gap-2 text-gray-600 hover:text-primary">
            <ChevronLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Hero Slider */}
      <div className="relative">
        <Splide options={splideOptions} className="project-slider">
          {(Array.isArray(project.imageSrc) ? project.imageSrc : [project.imageSrc]).map((image, index) => (
            <SplideSlide key={index}>
              <div className="relative h-[600px]">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="container mx-auto">
                    <Badge className="mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
                      <Award className="h-4 w-4 mr-2" />
                      Completed Project
                    </Badge>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                      {project.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        <span className="font-medium">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Main Content */}
      <section className="section-padding px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Project Overview */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-blue-500">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {project.overview}
                  </p>
                </div>
              </div>

              {/* Impact Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Measurable Impact</h2>
                </div>
                
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg mb-8">
                        {project.impact}
                      </p>
                      
                      <div className="mt-8">
                        <h4 className="font-bold text-gray-900 mb-4">Key Achievements</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white">
                              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Future Goals & Sustainability</h2>
                </div>
                
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {project.futureGoals}
                      </p>
                      
                      <div className="mt-8">
                        <h4 className="font-bold text-gray-900 mb-4">Sustainability Plan</h4>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {project.sustainability}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-2xl sticky top-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-blue-500">
                      <HeartHandshake className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Support This Project</h3>
                      <p className="text-primary font-medium">Help us replicate this success</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <Button 
                      asChild 
                      className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg hover:shadow-xl transition-all group"
                    >
                      <Link href="/donate" className="flex items-center justify-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Fund Similar Projects
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    
                    <Button 
                      asChild 
                      variant="outline"
                      className="w-full py-6 rounded-xl border-primary text-primary hover:bg-primary/5 transition-all group"
                    >
                      <Link href="/volunteer" className="flex items-center justify-center gap-2">
                        <Users className="h-5 w-5" />
                        Volunteer Support
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-6">Project Documentation</h4>
                    <div className="space-y-3">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-gray-700 hover:text-primary"
                      >
                        <Download className="h-4 w-4 mr-3" />
                        Download Full Report (PDF)
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-gray-700 hover:text-primary"
                      >
                        <Share2 className="h-4 w-4 mr-3" />
                        Share This Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h4 className="font-bold text-gray-900 mb-6">Project Details</h4>
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-gray-50">
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="font-medium text-gray-900">{project.location}</span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-green-50">
                      <div className="text-sm text-gray-500 mb-1">Status</div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-700">Successfully Completed</span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-blue-50">
                      <div className="text-sm text-gray-500 mb-1">Category</div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-gray-900">{project.category}</span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-amber-50">
                      <div className="text-sm text-gray-500 mb-1">Investment</div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-amber-600" />
                        <span className="font-medium text-gray-900">{project.budget}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h4 className="font-bold text-gray-900 mb-6">Related Projects</h4>
                  <div className="space-y-4">
                    {completedProjects
                      .filter(p => p.id !== project.id && p.category === project.category)
                      .slice(0, 2)
                      .map(related => (
                        <Link 
                          key={related.id}
                          href={`/projects/${related.id}`}
                          className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={Array.isArray(related.imageSrc) ? related.imageSrc[0] : related.imageSrc}
                              alt={related.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 group-hover:text-primary transition-colors truncate">
                              {related.title}
                            </div>
                            <div className="text-sm text-gray-500">{related.location}</div>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
      </section>
    </div>
  );
};

export default ProjectDetails;