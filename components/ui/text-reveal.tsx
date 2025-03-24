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

    // Store original text
    const originalText = text.textContent || '';
    text.textContent = '';
    
    // Create spans for each character
    originalText.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(20px)';
      text.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.05,
        ease: 'power2.out',
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