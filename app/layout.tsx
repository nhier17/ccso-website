import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "CCSO - Christ Compassion Service Organization",
  description: "Empowering communities in South Sudan through faith, compassion, and sustainable development",
  icons: {
    icon: "/images/ccso.png"
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
      </body>
    </html>
  );
}
