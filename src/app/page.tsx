import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { Footer } from '@/components/sections/Footer';
import { AsciiBackground } from '@/components/AsciiBackground';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <AsciiBackground />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <EcosystemSection />
      </main>
      <Footer />
    </div>
  );
}
