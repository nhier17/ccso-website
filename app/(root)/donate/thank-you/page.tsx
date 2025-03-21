"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ThankYouPage() {
  useEffect(() => {
    // Send conversion event to analytics
    // This would be replaced with your actual analytics code
    console.log("Donation conversion tracked");
  }, []);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      "https://ccso.org/donate"
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      "I just supported CCSO's mission to build a resilient South Sudan. Join me in making a difference!"
    )}&url=${encodeURIComponent("https://ccso.org/donate")}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      "https://ccso.org/donate"
    )}`,
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="fixed inset-0 pointer-events-none bg-[url('/images/pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
            <Image
              src="https://i.pinimg.com/736x/99/2b/ee/992beee6f85227231bc4b97728f437c8.jpg"
              alt="Thank you illustration"
              width={400}
              height={400}
              className="relative mx-auto rounded-2xl shadow-xl"
            />
          </div>

          <div className="text-start md:text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Thank You for Your Generosity!
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your donation will help create lasting change in South Sudan.
              We&apos;ve sent a confirmation email with your donation details.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-8 text-gray-900">Your Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group hover:scale-105 transition-transform">
                  <div className="bg-primary/5 rounded-xl p-6">
                    <div className="text-4xl font-bold text-primary mb-2">1</div>
                    <div className="text-gray-700">Family Supported</div>
                  </div>
                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="bg-primary/5 rounded-xl p-6">
                    <div className="text-4xl font-bold text-primary mb-2">30</div>
                    <div className="text-gray-700">Days of Clean Water</div>
                  </div>
                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="bg-primary/5 rounded-xl p-6">
                    <div className="text-4xl font-bold text-primary mb-2">∞</div>
                    <div className="text-gray-700">Lives Changed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 py-8">
              <h3 className="text-xl font-semibold flex items-center justify-center gap-3">
                <Share2 className="w-6 h-6 text-primary" />
                Share Your Impact
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                >
                  <Facebook className="w-6 h-6 text-[#1877F2]" />
                  <span className="sr-only">Share on Facebook</span>
                </a>
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                >
                  <Twitter className="w-6 h-6 text-[#1DA1F2]" />
                  <span className="sr-only">Share on Twitter</span>
                </a>
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                  <span className="sr-only">Share on LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Stay Connected</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  asChild 
                  variant="outline"
                  className="bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all"
                >
                  <Link href="/newsletter">Subscribe to Newsletter</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all"
                >
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all"
                >
                  <Link href="/programs">See Your Impact</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
