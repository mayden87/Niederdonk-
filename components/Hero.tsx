import React, { useEffect, useState } from 'react';
import { SectionTag } from './ui/Shared';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="relative h-screen flex flex-col justify-center overflow-hidden group perspective-1000">
      
      {/* Cinematic Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-ken-burns will-change-transform"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.2) 0%, rgba(15,15,15,0.5) 50%, rgba(15,15,15,1) 100%), url('https://whhy.de/wp-content/uploads/2026/01/1.png')`
            }}
          />
      </div>

      {/* Content Layer */}
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col h-full justify-center pt-24">
        
        <div className="flex-grow-[1] hidden md:block"></div>

        <div className="max-w-5xl">
          <div className={`transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <SectionTag className="mb-6 md:mb-8 border border-white/10 px-4 py-1 rounded-full bg-black/40 backdrop-blur-md inline-flex">
               Confidential Memorandum
            </SectionTag>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-serif font-bold mb-8 text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
            <span className={`block transition-all duration-1000 ease-out delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Quartier
            </span>
            <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#D4AF37] transition-all duration-1000 ease-out delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Niederdonk Living
            </span>
          </h1>

          <div className={`flex flex-col md:flex-row gap-8 items-start transition-all duration-1000 ease-out delay-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base md:text-lg text-white/80 max-w-lg leading-relaxed font-light tracking-wide pl-4 border-l-2 border-[#D4AF37]">
              Ein Rückzugsort. Ein Statement. <br/>
              <span className="text-[#D4AF37]">32 Einheiten</span> in perfekter Symbiose aus <br />
              Architektur und Natur.
            </p>
            
            {/* Quick Stats Pill - Glossy Glass Style */}
            <div className="hidden md:flex gap-6 bg-black/30 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
               <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Volumen</p>
                  <p className="text-white font-serif text-xl tracking-tight">22,3 Mio. €</p>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Rendite</p>
                  <p className="text-[#D4AF37] font-serif text-xl tracking-tight">~34,9%</p>
               </div>
            </div>
          </div>
        </div>

        <div className="flex-grow-[1]"></div>

        {/* Floating Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-1000 delay-[1200ms] ${isMounted ? 'opacity-70' : 'opacity-0'}`}>
           <span className="text-[10px] uppercase tracking-[0.2em] text-white">Discover</span>
           <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce"></div>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;