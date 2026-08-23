'use client';

import React, { useEffect, useRef } from 'react';

export function AsciiBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastMouseX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    let lastMouseY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
    
    // A sequence of characters from sparse/light to dense/heavy
    const chars = [' ', '·', '+', 'x', '◇', '◈', '⬡', '⬢'];
    
    const renderGrid = () => {
      if (!containerRef.current || !preRef.current) return;
      
      const { innerWidth, innerHeight } = window;
      const mouseX = lastMouseX;
      const mouseY = lastMouseY;
      
      // CSS parallax
      const px = (mouseX / innerWidth - 0.5) * 2;
      const py = (mouseY / innerHeight - 0.5) * 2;
      containerRef.current.style.setProperty('--parallax-x', `${px * 30}px`);
      containerRef.current.style.setProperty('--parallax-y', `${py * 30}px`);
      containerRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${mouseY}px`);

      // Calculate grid size based on viewport
      // We want roughly 30 rows, and columns scaled to aspect ratio
      const rows = 35;
      const cols = Math.floor(rows * (innerWidth / innerHeight) * 1.5);
      const cellWidth = innerWidth / cols;
      const cellHeight = innerHeight / rows;
      
      let newGrid = '';
      
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cellCenterX = c * cellWidth;
          const cellCenterY = r * cellHeight;
          
          const dx = cellCenterX - mouseX;
          const dy = cellCenterY - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Max distance of effect is roughly 500px
          const maxDist = 500;
          let intensity = Math.max(0, 1 - (distance / maxDist));
          
          // Non-linear falloff for a more focused 'bloom'
          intensity = Math.pow(intensity, 1.5);
          
          let charIndex = Math.floor(intensity * (chars.length - 1));
          
          let char = chars[charIndex];
          // Base grid pattern for far away cells
          if (charIndex === 0) {
             if (r % 2 === 0 && c % 2 === 0) char = '·';
             else char = ' ';
          }
          
          // Add extra spacing to make the grid wider
          newGrid += char + '  ';
        }
        newGrid += '\n';
      }
      
      preRef.current.textContent = newGrid;
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(renderGrid);
    };

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(renderGrid);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Initial render
    animationFrameId = requestAnimationFrame(renderGrid);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="ascii-bg"
      aria-hidden="true"
    >
      <div className="ascii-parallax-wrapper flex items-center justify-center w-full h-full">
        <pre ref={preRef} className="ascii-bg-text text-center">
        </pre>
      </div>
    </div>
  );
}
