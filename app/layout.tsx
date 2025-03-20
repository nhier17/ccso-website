import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "CCSO - Christ Compassion Service Organization",
  description: "Empowering communities in South Sudan through faith, compassion, and sustainable development",
  icons: {
    icon: "/images/logo.webp"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="antialiased"
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
