'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function useOnScreen(ref: React.RefObject<Element | null>) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    }, { rootMargin: '-100px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isIntersecting;
}

export function AboutSection() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);
  const isVisible2 = useOnScreen(ref2);

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Column */}
          <div 
            ref={ref1}
            className={`transition-all duration-1000 transform ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <span className="text-muted-foreground font-sans font-semibold text-sm uppercase tracking-widest mb-4 block">About Us</span>
            <h2 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
              Transforming the digital space into a playful playground
            </h2>
            <p className="text-foreground font-outfit text-3xl md:text-4xl font-medium leading-[1.4] mb-8">
              At RUMIKU, we believe that the internet should be a canvas for expression, community, and pure digital creativity.
            </p>
            <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed max-w-lg">
              Expect intuitive design, playful aesthetics, and an unforgettable digital experience tailored directly for modern users. No corporate jargon—just pure, seamless interaction.
            </p>
          </div>

          {/* Stats Column */}
          <div 
            ref={ref2}
            className={`relative transition-all duration-1000 delay-200 transform ${isVisible2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            {/* Cinematic backglow */}
            <div className="absolute w-full h-full bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative glassmorphism rounded-[2rem] p-6 md:p-10 shadow-soft">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 hover:bg-foreground/10 transition-colors">
                  <span className="block font-outfit text-5xl font-black text-secondary mb-2">3</span>
                  <span className="text-muted-foreground text-sm font-medium font-sans uppercase tracking-wider">Active Platforms</span>
                </div>
                <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 hover:bg-foreground/10 transition-colors">
                  <span className="block font-outfit text-5xl font-black text-primary mb-2">50k+</span>
                  <span className="text-muted-foreground text-sm font-medium font-sans uppercase tracking-wider">Global Users</span>
                </div>
                <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 col-span-2 hover:bg-foreground/10 transition-colors">
                  <span className="block font-outfit text-3xl font-black text-foreground mb-2">1 Ecosystem</span>
                  <span className="text-muted-foreground text-sm font-medium font-sans">Connecting gaming, media, and lifestyle in a single unified experience.</span>
                </div>
              </div>
            </div>
            
            {/* Decorative floating element removed */}
          </div>
        </div>
      </div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
    </section>
  );
}
