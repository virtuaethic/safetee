'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const TextReveal = ({ children, className = '' }: TextRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const chars = text.textContent?.split('') || [];
    text.textContent = '';
    
    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      text.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.05,
        delay: i * 0.05,
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}; 