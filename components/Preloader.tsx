'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initially hide the header
    if (headerRef.current) {
      gsap.set(headerRef.current, { 
        opacity: 0,
        y: -100 // Start position above the viewport
      });
    }

    // Set timeout for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Animate preloader out
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          // Start playing hero video
          const heroVideo = heroRef.current?.querySelector('video');
          if (heroVideo) {
            heroVideo.play();
          }
        }
      });

      // Start header animation 2 seconds earlier
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0, // Animate to original position
        duration: 1,
        delay: -1.5, // Start 1.5 seconds before preloader fade completes
        ease: 'power2.out'
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader Video */}
      <div 
        ref={preloaderRef}
        className="fixed inset-0 z-50 bg-black"
      >
        <video
          className="h-full w-full object-cover"
          src="/videos/safetee-preloader.mp4"
          autoPlay
          muted
          playsInline
        />
      </div>

      {/* Header */}
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-40"
      >
        <div className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="SAFETEE Logo"
            width={268}
            height={32}
            className="h-8"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#cc000f] text-white px-4 py-2 rounded flex items-center">
            <Image 
              src="/images/icons/ui/menu-burger.svg"
              alt="Menu"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            <span className="font-medium">Navigation</span>
          </button>
          <button className="text-white flex items-center group relative">
            <Image 
              src="/images/icons/ui/lang-de.svg"
              alt="Deutsch"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="mr-1">De</span>
            <div className="absolute top-full right-0 mt-2 bg-white rounded shadow-lg hidden group-hover:block min-w-[120px]">
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-[#001b4e] hover:bg-gray-100 flex items-center">
                  <Image 
                    src="/images/icons/ui/lang-de.svg"
                    alt="Deutsch"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span>Deutsch</span>
                </button>
                <button className="w-full text-left px-4 py-2 text-[#001b4e] hover:bg-gray-100 flex items-center">
                  <span className="mr-2">🇬🇧</span>
                  <span>English</span>
                </button>
              </div>
            </div>
          </button>
        </div>
      </header>

      {/* Hero Video */}
      <div 
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/home-hero.mov"
          muted
          playsInline
        />
      </div>
    </>
  );
}; 