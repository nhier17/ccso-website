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
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/ccso.png" alt="logo" width={32} height={32} className="rounded-md object-cover" />
            <span className="font-semibold text-xl text-dark-100 hidden md:block">CCSO</span>
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            {navbarLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.path}  className="text-dark-100 hover:text-light-200 font-medium">
                {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-4">
              <Link href="/support" className="bg-primary text-dark-100 hover:bg-dark-100 hover:text-light-100 inline-flex w-full items-center justify-center rounded-md px-6 py-3 font-bold text-base">
                Get Involved
              </Link>
            </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6 text-dark-100" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <ul className="flex flex-col space-y-4">
            {navbarLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.path}>
                  <p>{link.name}</p>
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