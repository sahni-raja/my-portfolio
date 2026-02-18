import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ setActiveSection }) => { // 1. Added prop to handle navigation
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      
      {/* CREATIVE BACKGROUND GLOWS */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* FLOATING DECORATIVE TECH ICONS */}
      <div className="hidden md:block absolute top-1/3 left-32 animate-[bounce_4s_infinite] text-5xl opacity-30 blur-[1px]">⚛️</div>
      <div className="hidden md:block absolute bottom-1/3 right-32 animate-[bounce_5s_infinite] text-5xl opacity-30 blur-[1px]">🍃</div>
      <div className="hidden md:block absolute top-1/2 right-48 animate-[bounce_6s_infinite] text-4xl opacity-30 blur-[1px]">☕</div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        
        {/* Modern Intro Badge */}
        <div className="mb-6 px-5 py-2 rounded-full border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/20 backdrop-blur-md text-blue-600 dark:text-cyan-400 text-sm md:text-base font-semibold tracking-wide flex items-center gap-2 shadow-sm">
          <span className="text-xl">👋</span> Hello World, I am
        </div>
        
        {/* Animated Name with deep gradient and shadow */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight h-[1.2em] flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Raja Kumar', 
              4000,
              '', 
              1000,
            ]}
            wrapper="span"
            cursor={false} 
            repeat={Infinity}
            deletionSpeed={30}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 drop-shadow-sm inline-block"
          />
          <span className="text-cyan-400 font-light animate-blink ml-1">|</span>
        </h1>
        
        {/* Professional Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6">
          Software Developer <span className="text-blue-500 px-2">&</span> MERN Stack Specialist
        </h2>
        
        {/* Core Value Proposition */}
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          I focus on building scalable, secure, and production-ready web applications. I enjoy transforming complex ideas into functional digital products that deliver real-world value.
        </p>

        {/* Call To Action Buttons - Swapped <a> for <button> */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          {/* Primary Button */}
          <button 
            onClick={() => setActiveSection('projects')} 
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -ml-4"></div>
            <span className="relative z-10">View My Work</span>
          </button>
          
          {/* Secondary Glassmorphism Button */}
          <button 
            onClick={() => setActiveSection('contact')} 
            className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-xl font-bold text-lg shadow-sm hover:bg-white/80 dark:hover:bg-gray-700/80 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Animated Navigation Indicator - Swapped <a> for <div>/onClick */}
      <div 
        onClick={() => setActiveSection('about')} 
        className="absolute bottom-8 md:bottom-12 flex flex-col items-center animate-bounce cursor-pointer z-30 transition-opacity hover:opacity-80"
      >
        {/* <span className="text-xs uppercase tracking-widest mb-2 text-gray-700 dark:text-gray-300 font-bold bg-white/50 dark:bg-gray-900/50 px-3 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/20 dark:border-gray-700/50">
          Learn More
        </span> */}
        {/* <div className="p-2 rounded-full bg-white dark:bg-gray-800 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg">
          <svg className="w-6 h-6 text-blue-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div> */}
      </div>
      
    </section>
  );
};

export default Hero;