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
    <main className="min-h-screen bg-gray-50">
      <div className="fixed inset-0 pointer-events-none">
      </div>
      <div className="py-16">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <Image
              src="/images/thank-you-illustration.svg"
              alt="Thank you illustration"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Thank You for Your Generosity!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your donation will help create lasting change in South Sudan.
            We&apos;ve sent a confirmation email with your donation details.
          </p>

          {/* Impact Visualization */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-6">Your Impact</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-gray-600">Family Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30</div>
                <div className="text-gray-600">Days of Clean Water</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-gray-600">Lives Changed</div>
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              Share Your Impact
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Facebook className="w-6 h-6 text-[#1877F2]" />
                <span className="sr-only">Share on Facebook</span>
              </a>
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Twitter className="w-6 h-6 text-[#1DA1F2]" />
                <span className="sr-only">Share on Twitter</span>
              </a>
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                <span className="sr-only">Share on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold">Stay Connected</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/newsletter">Subscribe to Newsletter</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/impact">See Your Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
