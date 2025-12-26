"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 font-bebas-neue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.webp" alt="Logo" width={30} height={30} className="rounded-lg object-cover" />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">CCSO</span>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navbarLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild className="bg-primary text-white hover:bg-primary/90 transition-all hidden sm:inline-flex">
              <Link href="/donate">Donate Now</Link>
            </Button>
            
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 bg-background/95 border-t">
            <ul className="flex flex-col space-y-4">
            {navbarLinks.map((link, i) => (
              <li key={i} onClick={toggleMenu}>
                <Link href={link.path}>
                  <p className="text-base font-medium">{link.name}</p>
                </Link>
              </li>
            ))}
            <div className="px-3 py-2">
              <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 transition-all">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}