import React from 'react';
import { KitsuneMask } from '@/components/icons/KitsuneMask';

export function MarqueeBanner() {
  const words = ["Innovation", "Community", "Design", "Ecosystem", "Future"];
  
  return (
    <div className="bg-primary border-y border-border py-4 overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee flex items-center gap-8 shrink-0 pr-8">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {words.map((word, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="font-outfit font-black text-3xl uppercase text-primary-foreground">
                  {word}
                </span>
                <KitsuneMask className="h-8 w-auto text-primary-foreground" />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="animate-marquee flex items-center gap-8 shrink-0 pr-8">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {words.map((word, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="font-outfit font-black text-3xl uppercase text-primary-foreground">
                  {word}
                </span>
                <KitsuneMask className="h-8 w-auto text-primary-foreground" />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
