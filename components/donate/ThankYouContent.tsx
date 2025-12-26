"use client";

import { CheckCircle, Mail, ArrowRight, Download, Heart, Users, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function ThankYouContent() {
    const searchParams = useSearchParams();
    const amount = searchParams.get('amount');
    const paymentIntent = searchParams.get('payment_intent');
    const frequency = searchParams.get('frequency');
    const readableFrequency = (frequency: string | null) => {
        if (!frequency) return '';
        return frequency === 'once'
          ? 'One-time'
          : frequency.charAt(0).toUpperCase() + frequency.slice(1);
      };

    return (
        <div className="py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mb-6">
                <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
                Thank You for Your <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Generosity</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Your donation has been successfully processed and will directly impact communities in South Sudan.
              </p>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Payment Confirmed
              </Badge>
            </div>
            <Card className="border-0 shadow-lg mb-12">
              <CardHeader className="bg-linear-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                <CardTitle className="flex items-center">
                  <Heart className="h-6 w-6 text-red-500 mr-2" />
                  Donation Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Amount</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">${amount}.00</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Type</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{readableFrequency(frequency)}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Transaction ID</div>
                    <div className="text-sm font-mono text-gray-700 dark:text-gray-200 uppercase">{paymentIntent}</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Your Impact</h4>
                  <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                    <p className="text-blue-900 dark:text-blue-100">
                      <strong>Your ${amount} donation provides:</strong> hope, healing, and sustainable change to
                      vulnerable communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 mt-1">
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Immediate Processing</div>
                      <div className="text-sm text-gray-600">Your donation is immediately allocated to support our ongoing programs</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 mt-1">
                      <span className="text-xs font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Community Implementation</div>
                      <div className="text-sm text-gray-600">Local leaders coordinate training sessions and resource distribution</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 mt-1">
                      <span className="text-xs font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Impact Updates</div>
                      <div className="text-sm text-gray-600">You'll receive quarterly reports showing the direct impact of your support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
  
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Receipt & Documentation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    A detailed receipt has been sent to your email address. You can also download your tax-deductible receipt below.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Download Receipt (PDF)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Receipt
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    CCSO is a registered 501(c)(3) organization. Your donation is tax-deductible to the full extent allowed by law.
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="border-0 bg-linear-to-r from-orange-50 to-blue-50 dark:from-orange-950 dark:to-blue-950 shadow-lg mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Share Your Impact
                </h3>
                <p className="text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
                  Help us reach more people by sharing your support for CCSO's mission. Every share can inspire others to join our cause.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="bg-white dark:bg-gray-800">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share on Social Media
                  </Button>
                  <Button variant="outline" className="bg-white dark:bg-gray-800">
                    <Users className="mr-2 h-4 w-4" />
                    Invite Friends to Donate
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Monthly Giving
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Create lasting impact with recurring monthly donations
                  </p>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/donate?recurring=true">
                      Set Up Monthly Giving
                    </Link>
                  </Button>
                </CardContent>
              </Card>
  
              <Card className="border-0 bg-linear-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Volunteer
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Join our mission with your time and skills
                  </p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/volunteer">
                      Explore Opportunities
                    </Link>
                  </Button>
                </CardContent>
              </Card>
  
              <Card className="border-0 bg-linear-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Stay Connected
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Get updates on your impact and our programs
                  </p>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link href="/stories">
                      Read Impact Stories
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  Return to Home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
      </div>
    );
}