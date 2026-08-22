"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ComboMark } from '@/components/icons/ComboMark';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-sm" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Mobile Logo */}
        <div className="md:hidden flex-shrink-0">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image src="/images/logogram.svg" alt="Rumiku" width={40} height={40} />
          </Link>
        </div>

        {/* Desktop Split Navbar */}
        <div className="hidden md:flex w-full items-center justify-between font-outfit font-bold text-foreground">
          {/* Left Nav */}
          <nav className="flex items-center gap-8 lg:gap-12 flex-1 justify-start">
            <Link href="#overview" className="hover:text-primary transition-colors">Overview</Link>
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          </nav>

          {/* Center Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <Image src="/images/logogram.svg" alt="Rumiku" width={45} height={45} className="drop-shadow-md" />
          </Link>

          {/* Right Nav */}
          <nav className="flex items-center gap-8 lg:gap-12 flex-1 justify-end">
            <Link href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</Link>
            <Button className="font-outfit font-bold rounded-full shadow-sm hover:scale-105 transition-all" onClick={() => window.location.href='#contact'}>
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
