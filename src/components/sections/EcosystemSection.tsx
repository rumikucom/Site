import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ecosystemProjects = [
  {
    title: "Creedigo",
    logo: "/images/project/Creedigo.webp",
    description: "Digital commerce platform. Fast processing, competitive pricing, and a focus on the gaming market.",
    linkText: "Visit Creedigo",
    url: "https://creedigo.com/"
  },
  {
    title: "Glocult",
    logo: "/images/project/Glocult.webp",
    description: "Pop-culture media and editorial platform covering anime, gaming, and fandom trends.",
    linkText: "Visit Glocult",
    url: "https://glocult.com/"
  },
  {
    title: "Rokupi",
    logo: "/images/project/Rokupi.webp",
    description: "Hobby & pop-culture retail for collectibles, character goods, TCG/CCG, model kits, board games, plush, and hobby goods.",
    linkText: "Visit Rokupi",
    url: "https://rokupi.com/"
  }
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-32 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <span className="text-secondary font-sans font-bold text-sm uppercase tracking-widest">Our Ecosystem</span>
          <h2 className="font-outfit font-black text-3xl md:text-5xl lg:text-7xl text-foreground uppercase tracking-tight">
            Three brands, one universe
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg md:text-xl font-light">
            Each brand under RUMIKU serves a specific role in the pop-culture value chain—from digital commerce to media to physical retail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {ecosystemProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative flex flex-col h-full glassmorphism rounded-3xl p-8 lg:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent pointer-events-none" />
              
              <div className="relative flex items-center justify-center h-24 mb-10 w-full">
                <Image 
                  src={project.logo} 
                  alt={project.title} 
                  fill 
                  className="object-contain filter transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex flex-col flex-grow text-center">
                <h3 className="font-outfit font-bold text-3xl mb-4 text-foreground">
                  {project.title}
                </h3>
                
                <p className="mb-10 flex-grow text-muted-foreground font-light leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="mt-auto flex justify-center">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    Enter Platform <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
