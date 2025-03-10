"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-primary z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.webp" alt="logo" width={36} height={36} className="rounded-md object-cover" />
            <span className="font-semibold text-xl text-white hidden md:block">CCSO</span>
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            {navbarLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.path}  className="text-white hover:text-light-200 font-medium">
                {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-6 text-white" /> : <Menu className="size-6 text-white" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <ul className="flex flex-col space-y-4">
            {navbarLinks.map((link, i) => (
              <li key={i} onClick={toggleMenu}>
                <Link href={link.path}>
                  <p className="text-white text-lg font-semibold">{link.name}</p>
                </Link>
              </li>
            ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}