import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="overview" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 mesh-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full animate-fade-in-up">
        
        {/* Hero Text with Inline Icons */}
        <h1 className="font-outfit font-black text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-[1.1] text-foreground tracking-tight max-w-5xl">
          We create
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400"> digital</span>
          
          <span className="inline-icon bounce mx-2 md:mx-4 w-[1em] h-[1em] inline-flex align-middle">
            <Image src="/images/icons/holographic-star.png" alt="Digital Spark" fill className="object-contain" />
          </span>
          
          experiences<br className="hidden md:block"/>
          that are
          
          <span className="inline-icon rotate mx-2 md:mx-4 w-[1em] h-[1em] inline-flex align-middle">
            <Image src="/images/icons/smiley-hologram.png" alt="Fun" fill className="object-contain" />
          </span>
          
          fun, exciting,
          
          <span className="inline-icon bounce mx-2 md:mx-4 w-[1.5em] h-[1.5em] inline-flex align-middle">
            <Image src="/images/icons/holographic-pyramid.png" alt="Joy" fill className="object-contain" />
          </span>
          
          and accessible<br className="hidden md:block"/>
          to bring
          
          <span className="inline-icon rotate mx-2 md:mx-4 w-[1em] h-[1em] inline-flex align-middle">
            <Image src="/images/icons/holographic-diamond.png" alt="Life" fill className="object-contain" />
          </span>
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-300">joy to your everyday life.</span>
        </h1>

        {/* Bottom row: CTA + Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-16 md:mt-24 gap-8">
          <div className="flex gap-4">
            <Button size="lg" className="font-outfit font-bold text-lg h-14 px-8 rounded-full shadow-glow hover:scale-105 hover:shadow-glow-secondary transition-transform bg-primary text-primary-foreground">
              <a href="#ecosystem" className="flex items-center">
                DISCOVER RUMIKU <ArrowDown className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground font-sans text-base md:text-lg max-w-md leading-relaxed">
            Connecting gaming culture, fandom media, and lifestyle merchandise under one massive digital ecosystem.
          </p>
        </div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-full max-w-2xl aspect-square bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 -translate-y-1/2 w-full max-w-xl aspect-square bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
