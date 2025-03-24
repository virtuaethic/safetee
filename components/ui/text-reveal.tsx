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
    
    // Split text into words and spaces
    const words = originalText.split(/(\s+)/);
    
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(30px)';
      text.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
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