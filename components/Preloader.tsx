'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initially hide the header
    if (headerRef.current) {
      gsap.set(headerRef.current, { 
        opacity: 0,
        y: -100
      });
    }

    // Set initial 3D perspective and cube position
    if (cubeRef.current) {
      gsap.set(cubeRef.current, {
        perspective: 1000,
        transformStyle: 'preserve-3d'
      });
    }

    // Set timeout for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Create the cube rotation animation
      const tl = gsap.timeline({
        onComplete: () => {
          // Start playing hero video
          const heroVideo = heroRef.current?.querySelector('video');
          if (heroVideo) {
            heroVideo.play();
          }
        }
      });

      // Animate the cube rotation
      tl.to(cubeRef.current, {
        rotationY: 90,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: () => {
          // Update video opacity based on rotation
          const rotation = gsap.getProperty(cubeRef.current, 'rotationY') as number;
          const preloaderOpacity = Math.cos(rotation * Math.PI / 180);
          const heroOpacity = Math.sin(rotation * Math.PI / 180);
          
          if (preloaderRef.current) {
            gsap.set(preloaderRef.current, { opacity: preloaderOpacity });
          }
          if (heroRef.current) {
            gsap.set(heroRef.current, { opacity: heroOpacity });
          }
        }
      });

      // Start header animation
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: -1.5,
        ease: 'power2.out'
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 3D Cube Container */}
      <div 
        ref={cubeRef}
        className="fixed inset-0"
      >
        {/* Preloader Video (Front face) */}
        <div 
          ref={preloaderRef}
          className="absolute inset-0 z-50 bg-black"
          style={{ transform: 'translateZ(0)' }}
        >
          <video
            className="h-full w-full object-cover"
            src="/videos/safetee-preloader.mp4"
            autoPlay
            muted
            playsInline
          />
        </div>

        {/* Hero Video (Right face) */}
        <div 
          ref={heroRef}
          className="absolute inset-0"
          style={{ transform: 'rotateY(90deg) translateZ(0)' }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/home-hero.mov"
            muted
            playsInline
          />
        </div>
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
    </>
  );
}; 