"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition * 0.001, 0); // Reduced fade speed
      const translateY = scrollPosition * 0.2; // Reduced parallax effect
      
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector('.hero-content') as HTMLElement;
        if (heroContent) {
          heroContent.style.opacity = opacity.toString();
          heroContent.style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950"
    >
      {/* Background dots pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Gradient orb effects */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full filter blur-[128px] opacity-20 dark:opacity-10"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-indigo-400 dark:bg-indigo-600 rounded-full filter blur-[128px] opacity-20 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center pt-24 pb-12 md:py-0 hero-content transition-all duration-700 ease-out relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 animate-fade-in">
            Your Campus Community Awaits!
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in animation-delay-100">
          Bitoverflow<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Unite. Share. Discover.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in animation-delay-200">
          Join the Buzz:
          Events, Clubs, and Conversations at Your Fingertips!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-300">
          <button
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            onClick={() => window.location.href = "/questions/ask"}
          >
            Ask a Question
            <ArrowRight size={18} className="ml-2" />
          </button>
          <button
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg shadow hover:shadow-lg transition-all duration-300"
            onClick={() => window.location.href = "/leaderboard"}
          >
            Watch Leaderboard
          </button>
        </div>
        
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto relative animate-fade-in animation-delay-400">
          <div className="relative rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <Image
              src="/ForumLogo.png"
              alt="Dashboard Preview"
              width={1260}
              height={750}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 dark:opacity-30"></div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-16 bg-gray-200 dark:bg-gray-800 filter blur-xl opacity-30 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Link 
          href="#features" 
          className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-blue-600 dark:text-blue-400"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;