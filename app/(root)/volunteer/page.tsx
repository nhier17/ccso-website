"use client";

import VolunteerForm from "@/components/forms/VolunteerForm";
import { 
  HeartHandshake, 
  Users, 
  Globe, 
  Award,
  Sparkles,
  ArrowRight,
  Target,
  Clock,
  MapPin,
  GraduationCap,
  Briefcase,
  Laptop,
  MessageSquare,
  Shield,
  Star,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { volunteerRoles, volunteerBenefits, skills, steps, whatToExpect } from "@/constants";

const VolunteerPage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-green-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full translate-y-48 -translate-x-48 blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
              <Sparkles className="h-4 w-4 mr-2" />
              Join Our Team
            </Badge>
            
            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-green-600">
              Volunteer With CCSO
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Join us in making a tangible difference in South Sudan. Your skills, passion, and time can help transform lives and build sustainable communities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Target className="h-4 w-4 mr-2" />
              Why Volunteer With Us
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Make Your Mark
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerBenefits.map((benefit, index) => (
              <Card key={index} className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${benefit.color} w-fit mx-auto`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </section>

      <section id="roles" className="section-padding px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Users className="h-4 w-4 mr-2" />
              Volunteer Opportunities
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Find Your Role
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${role.color}`} />
                <CardContent className="p-8">
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${role.color} w-fit`}>
                    <role.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{role.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">{role.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">{role.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{role.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    asChild 
                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${role.color} text-white shadow-lg hover:shadow-xl transition-all group`}
                  >
                    <Link href="#volunteer-form" className="flex items-center justify-center gap-2">
                      Apply for This Role
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Urgently Needed Skills</h3>
              <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((item, index) => (
                <Card key={index} className="group border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900">{item.skill}</h4>
                      <Badge className={`px-2 py-1 ${item.color} border-0`}>
                        {item.urgency} Need
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      Looking for professionals with experience in {item.skill.toLowerCase()} to support our community programs.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </section>

      <section className="section-padding px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Shield className="h-4 w-4 mr-2" />
              Our Process
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              How It Works
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${step.color} w-fit mx-auto`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-3/4 w-full h-1 bg-gradient-to-r from-gray-200 to-gray-300" />
                )}
              </div>
            ))}
          </div>
      </section>

      <section id="volunteer-form" className="section-padding px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Zap className="h-4 w-4 mr-2" />
              Ready to Apply?
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Start Your Journey
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary" />
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <VolunteerForm />
              </div>
              
              <div className="md:w-1/3 bg-gradient-to-b from-primary to-green-600 p-8 md:p-12 text-white">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                  <div className="space-y-6">
                    {whatToExpect.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <p className="text-white/80 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/20">
                  <h4 className="font-bold mb-4">Have Questions?</h4>
                  <p className="text-white/80 mb-4">
                    Contact our volunteer coordinator:
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-white text-black hover:bg-white/10"
                  >
                    <Link href="mailto:bishop.pacong@gmail.com">
                      bishop.pacong@gmail.com
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
      </section>
    </div>
  );
};

export default VolunteerPage;