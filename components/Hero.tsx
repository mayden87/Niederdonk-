import React, { useEffect, useState } from 'react';
import { SectionTag } from './ui/Shared';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="relative h-[100dvh] w-full flex flex-col justify-center overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out scale-105"
            style={{
              backgroundImage: `url('https://whhy.de/wp-content/uploads/2026/01/1.png')`,
              transform: isMounted ? 'scale(1.1)' : 'scale(1.0)'
            }}
          />
          {/* Heavy Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#050505]" />
          <div className="absolute inset-0 bg-[#050505]/20 backdrop-blur-[1px]" />
      </div>

      {/* Content Layer */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full justify-center pt-20">
        
        {/* Alignment Container */}
        <div className="max-w-4xl mr-auto">
          
          {/* Tagline */}
          <div className={`transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-black/20 backdrop-blur-md mb-6 md:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A028] animate-pulse"></span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/80 font-medium">Confidential Memorandum</span>
             </div>
          </div>

          {/* Main Title - Masked Reveal Animation */}
          <h1 className="font-serif font-medium text-white leading-[1.1] tracking-tight mb-6 md:mb-10">
            <div className="mask-container overflow-hidden">
              <span className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl transition-transform duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) delay-200 ${isMounted ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Quartier
              </span>
            </div>
            <div className="mask-container overflow-hidden">
              <span className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C5A028] transition-transform duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) delay-[400ms] ${isMounted ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Niederdonk Living
              </span>
            </div>
          </h1>

          {/* Subtext */}
          <div className={`flex flex-col md:flex-row gap-8 items-start transition-all duration-1000 ease-out delay-[800ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base md:text-lg text-white/70 max-w-md leading-relaxed font-light font-sans tracking-wide text-left">
              Ein Rückzugsort. Ein Statement. <br/>
              <span className="text-white font-normal">32 Einheiten</span> in perfekter Symbiose aus Architektur und Natur.
            </p>
            
            {/* Stats - Left aligned on mobile now */}
            <div className="flex gap-8 border-t border-white/10 pt-4 md:pt-0 md:border-t-0 md:border-l md:pl-8 md:ml-4">
               <div>
                  <p className="text-[9px] text-text-muted uppercase tracking-widest mb-1">Volumen</p>
                  <p className="text-white font-serif text-xl">22,3 Mio. €</p>
               </div>
               <div>
                  <p className="text-[9px] text-text-muted uppercase tracking-widest mb-1">Rendite</p>
                  <p className="text-[#C5A028] font-serif text-xl">~34,9%</p>
               </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 md:bottom-12 left-6 md:left-12 flex items-center gap-4 transition-opacity duration-1000 delay-[1500ms] ${isMounted ? 'opacity-50' : 'opacity-0'}`}>
           <div className="h-[1px] w-12 bg-white"></div>
           <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll to discover</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;