import React from 'react';
import Image from 'next/image';

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
                <Image src="/images/logogram.svg" alt="Rumiku" width={32} height={32} className="h-8 w-auto drop-shadow-md" />
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
                <Image src="/images/logogram.svg" alt="Rumiku" width={32} height={32} className="h-8 w-auto drop-shadow-md" />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
