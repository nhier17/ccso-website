"use client";

import { useEffect, useState } from "react";
import { 
  CheckCircle, 
  Mail, 
  ArrowRight, 
  Download, 
  Heart, 
  Users, 
  Share2,
  Sparkles,
  Target,
  Trophy,
  Gift,
  Calendar,
  TrendingUp,
  Zap,
  Star,
  Award,
  Globe
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { items, platforms, whatNext } from "@/constants";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount');
  const paymentIntent = searchParams.get('payment_intent');
  const frequency = searchParams.get('frequency');
  const tierTitle = searchParams.get('tier');
  
  const [impactMetrics, setImpactMetrics] = useState({
    waterAccess: 0,
    childrenFed: 0,
    medicalCare: 0,
    communitiesReached: 0
  });

  const readableFrequency = (frequency: string | null) => {
    if (!frequency) return '';
    return frequency === 'once'
      ? 'One-time'
      : frequency.charAt(0).toUpperCase() + frequency.slice(1);
  };

  // Calculate impact based on donation amount
  useEffect(() => {
    if (amount) {
      const donationAmount = parseInt(amount);
      setImpactMetrics({
        waterAccess: Math.floor(donationAmount / 25),
        childrenFed: Math.floor(donationAmount / 50),
        medicalCare: Math.floor(donationAmount / 100),
        communitiesReached: Math.floor(donationAmount / 250)
      });
    }

  }, [amount]);

  // Mock impact data based on donation
  const impactData = {
    waterAccess: {
      icon: Zap,
      title: "Water Access Provided",
      value: `${impactMetrics.waterAccess} families`,
      description: "Clean water for 1 month",
      color: "from-blue-500 to-cyan-500"
    },
    childrenFed: {
      icon: Gift,
      title: "Children Fed",
      value: `${impactMetrics.childrenFed} children`,
      description: "Nutritious meals for 1 week",
      color: "from-green-500 to-emerald-500"
    },
    medicalCare: {
      icon: Heart,
      title: "Medical Care Sessions",
      value: `${impactMetrics.medicalCare} consultations`,
      description: "Healthcare for remote communities",
      color: "from-red-500 to-pink-500"
    },
    communitiesReached: {
      icon: Users,
      title: "Communities Reached",
      value: `${impactMetrics.communitiesReached} villages`,
      description: "Sustainable development programs",
      color: "from-purple-500 to-indigo-500"
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-2xl" />
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-500 shadow-2xl">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <Badge className="mb-6 px-4 py-2 bg-green-100 text-green-800 border-0">
            <Sparkles className="h-4 w-4 mr-2" />
            Donation Successful
          </Badge>
          
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-blue-600">
            Thank You!
          </h1>
          
          <p className="mb-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your generous support is now actively transforming lives in South Sudan.
            Together, we're building hope and sustainable futures.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
              <Target className="h-4 w-4 mr-2" />
              Payment Confirmed
            </Badge>
            <Badge className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
              <Calendar className="h-4 w-4 mr-2" />
              {readableFrequency(frequency)} Support
            </Badge>
          </div>
        </div>

        <Card className="border-0 shadow-2xl mb-16 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="h-10 w-10" />
              <div>
                <h2 className="text-3xl font-bold">Donation Summary</h2>
                <p className="text-white/90">Your contribution is already making a difference</p>
              </div>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20">
                <div className="text-sm text-gray-600 mb-2">Amount Donated</div>
                <div className="text-4xl font-bold text-primary">${amount}.00</div>
                {frequency !== 'once' && (
                  <div className="text-sm text-gray-500 mt-2">
                    {frequency === 'monthly' ? 'Monthly' : frequency} gift
                  </div>
                )}
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-200">
                <div className="text-sm text-gray-600 mb-2">Support Type</div>
                <div className="text-2xl font-bold text-green-600">{readableFrequency(frequency)}</div>
                {tierTitle && (
                  <div className="text-sm font-medium text-gray-900 mt-2">{tierTitle}</div>
                )}
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-200">
                <div className="text-sm text-gray-600 mb-2">Transaction ID</div>
                <div className="text-sm font-mono text-gray-700 break-all">{paymentIntent || 'N/A'}</div>
                <div className="text-xs text-gray-500 mt-2">Keep this for your records</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Your Immediate Impact
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(impactData).map(([key, data]) => (
                  <div key={key} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`mb-4 p-4 rounded-2xl bg-gradient-to-r ${data.color} w-fit mx-auto`}>
                      <data.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{data.value}</div>
                    <div className="text-sm font-medium text-gray-900 mb-1">{data.title}</div>
                    <div className="text-xs text-gray-500">{data.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-500/5">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                What Happens Next?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {whatNext.map((step) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color}`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                          {step.step}
                        </div>
                        <h4 className="font-bold text-gray-900">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <p className="text-sm text-gray-600">
                    You'll receive your first impact update in 30-45 days
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-green-500/5 to-emerald-500/5">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Award className="h-6 w-6 text-green-600" />
                Receipt & Documentation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-gray-600">
                  A detailed receipt has been sent to your email address. This receipt is valid for tax deduction purposes in supported countries.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full py-6 rounded-xl border-primary/30 text-primary hover:bg-primary/5 transition-all group"
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download Receipt (PDF)
                    <ArrowRight className="ml-auto h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full py-6 rounded-xl border-blue-500/30 text-blue-600 hover:bg-blue-500/5 transition-all group"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Email Receipt Again
                  </Button>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h4 className="font-bold text-green-900">Tax Deductible Donation</h4>
                  </div>
                  <p className="text-sm text-green-700">
                    CCSO is a registered 501(c)(3) organization. Your donation is tax-deductible to the full extent allowed by law. EIN: XX-XXXXXXX
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-2xl mb-16 overflow-hidden">
          <div className="bg-gradient-to-r from-primary via-primary/90 to-blue-600 text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <Share2 className="h-10 w-10" />
              <div>
                <h2 className="text-3xl font-bold">Amplify Your Impact</h2>
                <p className="text-white/90">Inspire others to join our mission</p>
              </div>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share on Social Media</h3>
                <p className="text-gray-600 mb-6">
                  Your post could inspire someone else to support communities in need.
                </p>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <Button key={platform.name} className={`${platform.color} text-white`}>
                      Share on {platform.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Invitation</h3>
                <p className="text-gray-600 mb-6">
                  Invite friends and family to join you in supporting CCSO's work.
                </p>
                <Button variant="outline" className="w-full py-6 rounded-xl border-primary text-primary hover:bg-primary/5">
                  <Users className="mr-3 h-5 w-5" />
                  Invite Friends to Donate
                  <ArrowRight className="ml-auto h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Sparkles className="h-4 w-4 mr-2" />
              Continue Your Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay Connected With Your Impact
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((step, index) => (
              <Card key={index} className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${step.color} w-fit mx-auto`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <Button 
                    asChild 
                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${step.color} text-white shadow-lg hover:shadow-xl transition-all group/btn`}
                  >
                    <Link href={step.href} className="flex items-center justify-center gap-2">
                      {step.buttonText}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </div>
  );
}