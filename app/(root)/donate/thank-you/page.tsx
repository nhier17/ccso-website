import { Suspense } from "react";
import ThankYouContent from "@/components/donate/ThankYouContent";

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="py-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-pulse">
              <div className="mx-auto h-20 w-20 bg-gray-200 dark:bg-gray-700 rounded-full mb-6"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            </div>
          </div>
        </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}    