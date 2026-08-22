import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ComboMark } from '@/components/icons/ComboMark';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-background pt-32 pb-8 relative overflow-hidden">
      {/* Background glow for footer CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* BIG CTA BOX */}
        <div className="glassmorphism rounded-[2.5rem] p-10 md:p-16 mb-24 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
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

        {/* FOOTER LINKS */}
        <div className="grid md:grid-cols-12 gap-12 mb-16 relative">
          <div className="md:col-span-4 flex flex-col items-start">
            <ComboMark className="h-12 w-auto mb-6 text-foreground" />
            <p className="text-muted-foreground font-sans max-w-sm mb-6">
              Creating digital experiences that are fun, exciting, and accessible to bring joy to your everyday life.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-4">
              <h4 className="font-outfit font-bold text-lg text-foreground uppercase tracking-widest">Ecosystem</h4>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">Creedigo</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">Glocult</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">Rokupi</Link>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="font-outfit font-bold text-lg text-foreground uppercase tracking-widest">Connect</h4>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">Contact Us</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">Discord</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">GitHub</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">Twitter (X)</Link>
            </div>
            
            <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
              <h4 className="font-outfit font-bold text-lg text-foreground uppercase tracking-widest">Legal</h4>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">Terms of Use</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">Privacy Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-sans">
            © 2024 Rumiku. All rights reserved.
          </p>
          <div className="text-muted-foreground/50 font-outfit font-bold uppercase tracking-widest text-sm">
            Based in Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
