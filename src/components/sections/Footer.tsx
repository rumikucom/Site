"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer id="contact" className="bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* BIG CTA BOX */}
        <div className="glassmorphism rounded-[2.5rem] p-10 md:p-16 mb-24 flex flex-col md:flex-row items-center justify-between gap-8 border border-foreground/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          <div className="flex flex-col items-start max-w-2xl relative z-10">
            <h2 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 uppercase tracking-tight">
              We are always looking for partners and collaborators.
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-8 max-w-md">
              Reach out.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Button size="lg" className="font-outfit font-bold text-xl h-16 px-10 rounded-full shadow-glow hover:scale-105 hover:shadow-glow-secondary transition-transform bg-primary text-primary-foreground group">
              Let's Talk <ArrowUpRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 flex flex-col items-start">
            <Image src="/images/footer-logo.svg" alt="Rumiku" width={200} height={128} className="h-24 md:h-32 w-auto mb-6" />
            <p className="text-muted-foreground font-sans max-w-sm">
              Empowering the next generation of decentralized communities with beautiful, tactile, and uncompromising tools.
            </p>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <h4 className="font-outfit font-bold text-xl text-foreground uppercase">Ecosystem</h4>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Creedigo</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Glocult</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Rokupi</Link>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="font-outfit font-bold text-xl text-foreground uppercase">Connect</h4>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Facebook</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discord</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</Link>
            </div>
            
            <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
              <h4 className="font-outfit font-bold text-xl text-foreground uppercase">Legal</h4>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Brand Assets</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8 flex flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-sans text-sm">
            © {new Date().getFullYear()} Rumiku. All rights reserved.
          </p>
          {mounted ? (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
          ) : (
            <div className="w-10 h-10" />
          )}
        </div>
      </div>
    </footer>
  );
}
