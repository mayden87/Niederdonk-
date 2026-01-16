
import React, { useEffect, useState } from 'react';
import { Maximize, Wallet, Home, TrendingUp, Mail } from 'lucide-react';
import { Stage } from './ui/Shared';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header id="home" className="relative min-h-[100svh] w-full flex flex-col items-center overflow-visible z-20 bg-[#050505]">
      
      {/* Cinematic Background - KEN BURNS EFFECT */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-[breathe_20s_ease-in-out_infinite]"
            style={{
              backgroundImage: `url('https://whhy.de/wp-content/uploads/2026/01/1.png')`,
              transformOrigin: 'center center',
            }}
          />
          {/* Heavy Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#050505]" />
          <div className="absolute inset-0 bg-[#050505]/20 backdrop-blur-[1px]" />
          
          {/* Warm light hit from top right - ENHANCED */}
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-b from-[#C5A028]/20 to-transparent blur-[150px] rounded-full opacity-70 mix-blend-screen" />

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[#050505] via-[#050505] to-transparent" />
      </div>

      {/* SEAM FIX */}
      <div className="absolute -bottom-[2px] left-0 right-0 h-[4px] bg-[#050505] z-10 pointer-events-none" />

      {/* Content Layer */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full pt-32 pb-0 md:pt-32 md:pb-48">
          
          {/* Tagline */}
          <div className={`transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-8 md:mb-12 hover:bg-white/5 transition-colors cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A028] animate-pulse"></span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/90 font-bold">Projektexpose</span>
             </div>
          </div>

          {/* Main Title */}
          <h1 className="font-serif font-medium text-white leading-[1.0] tracking-tighter mb-4 md:mb-32 text-left">
            <div className="overflow-hidden block">
              <span className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 transition-transform duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) delay-200 ${isMounted ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Quartier
              </span>
            </div>
            <div className="overflow-hidden block">
              <span className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 transition-transform duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) delay-[300ms] ${isMounted ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Niederdonk
              </span>
            </div>
            <div className="overflow-hidden block mt-1">
              <span className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 transition-transform duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) delay-[400ms] ${isMounted ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Living
              </span>
            </div>
          </h1>
          
          {/* Scroll Indicator */}
          <div className={`absolute bottom-32 md:bottom-auto md:top-2/3 right-6 md:right-12 transition-opacity duration-1000 delay-[1000ms] ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center gap-2 animate-float-slow">
                 <span className="text-[9px] uppercase tracking-widest text-white/40 writing-vertical-rl">Scroll</span>
                 <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#C5A028] to-transparent"></div>
              </div>
          </div>
      </div>

      {/* NEW: Data Stage (4 Columns) */}
      <div 
        className={`
            relative md:absolute md:bottom-0 left-0 right-0 z-30 
            mt-10 md:mt-0 
            max-w-[1400px] w-full mx-auto px-6 md:px-12 
            transition-all duration-1000 delay-[600ms] 
            transform 
            ${isMounted ? 'opacity-100 translate-y-0 md:translate-y-1/2' : 'opacity-0 translate-y-12 md:translate-y-[60%]'}
        `}
      >
         <Stage>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-white/10">
                
                {/* COL 1: Flächen */}
                <div className="p-8 group hover:bg-white/[0.05] transition-colors duration-500">
                    <div className="flex items-center gap-3 mb-6 text-[#C5A028]">
                        <Maximize className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Flächen</span>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-white/60 text-sm">Grundstück</span>
                                <span className="text-white font-serif text-lg">7.398 m²</span>
                            </div>
                            <div className="w-full h-px bg-white/10" />
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-white/60 text-sm">Nettobauland</span>
                                <span className="text-white font-serif text-lg">6.317 m²</span>
                            </div>
                            <div className="w-full h-px bg-white/10" />
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-[#C5A028] text-sm font-medium">Wohnfläche</span>
                                <span className="text-[#C5A028] font-serif text-xl">3.250 m²</span>
                            </div>
                            <div className="w-full h-px bg-[#C5A028]/20" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-2">
                             <div className="text-center">
                                <span className="block text-[8px] uppercase tracking-widest text-white/40">GRZ I</span>
                                <span className="block text-white font-serif">0,27</span>
                             </div>
                             <div className="text-center">
                                <span className="block text-[8px] uppercase tracking-widest text-white/40">GRZ II</span>
                                <span className="block text-white font-serif">0,38</span>
                             </div>
                             <div className="text-center">
                                <span className="block text-[8px] uppercase tracking-widest text-[#C5A028]/60">GFZ</span>
                                <span className="block text-[#C5A028] font-serif">0,48</span>
                             </div>
                        </div>
                    </div>
                </div>

                {/* COL 2: Kaufpreis (Formerly Baurecht) */}
                <div className="p-8 group hover:bg-white/[0.05] transition-colors duration-500 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-6 text-[#C5A028]">
                            <Wallet className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Investment</span>
                        </div>
                        
                        <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Grundstückskaufpreis</p>
                        <h3 className="text-4xl md:text-5xl font-serif text-white mb-2 tracking-tight">
                            4.250.000 €
                        </h3>
                        <p className="text-xs text-white/40 leading-relaxed mb-6">
                            Das Grundstück wird lastenfrei übertragen.
                        </p>

                        <div className="w-full h-px bg-white/10 mb-6" />

                        <a 
                            href="mailto:qnl@baugrundstueck-meerbusch.de"
                            className="w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-[#C5A028] hover:text-black hover:border-[#C5A028] transition-all flex items-center justify-center gap-3 group"
                        >
                            <Mail className="w-4 h-4 text-[#C5A028] group-hover:text-black transition-colors" />
                            <span className="text-[10px] uppercase tracking-widest font-bold">E-Mail senden</span>
                        </a>
                    </div>
                </div>

                {/* COL 3: Wohnungsmix */}
                <div className="p-8 group hover:bg-white/[0.05] transition-colors duration-500 relative overflow-hidden flex flex-col justify-between">
                     <div>
                        <div className="flex items-center gap-3 mb-6 text-[#C5A028]">
                            <Home className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Wohnungsmix</span>
                        </div>
                        
                        <ul className="space-y-5">
                            <li className="flex items-center gap-4">
                                <span className="text-2xl font-serif text-white w-8">9</span>
                                <div className="flex flex-col">
                                    <span className="text-xs text-white font-medium">Doppelhaushälften</span>
                                    <span className="text-[9px] text-white/40 uppercase tracking-wider">~ 140 m² Wfl.</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="text-2xl font-serif text-white w-8">7</span>
                                <div className="flex flex-col">
                                    <span className="text-xs text-white font-medium">Reihenhäuser</span>
                                    <span className="text-[9px] text-white/40 uppercase tracking-wider">~ 120 m² Wfl.</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="text-2xl font-serif text-white w-8">16</span>
                                <div className="flex flex-col">
                                    <span className="text-xs text-white font-medium">Eigentumswohnungen</span>
                                    <span className="text-[9px] text-white/40 uppercase tracking-wider">85 - 110 m² Wfl.</span>
                                </div>
                            </li>
                        </ul>
                     </div>
                     <div className="mt-6 pt-4 border-t border-white/5">
                        <p className="text-[10px] uppercase tracking-widest text-white/30 text-center">Gesamt 32 Einheiten</p>
                     </div>
                </div>

                {/* COL 4: Economics */}
                <div className="p-8 bg-[#C5A028]/10 relative overflow-hidden group hover:bg-[#C5A028]/20 transition-colors duration-500 flex flex-col justify-between">
                     <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group-hover:opacity-[0.08] transition-opacity" />
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#C5A028]/20 blur-[60px] rounded-full animate-pulse-slow" />
                     
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8 text-[#C5A028]">
                            <TrendingUp className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A028]">Economics</span>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#C5A028]/60 font-bold mb-1">Volumen (Exit)</p>
                                <p className="text-3xl md:text-4xl font-serif text-white tracking-tight">22,3 Mio. €</p>
                            </div>
                            
                            <div>
                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#C5A028]/60 font-bold mb-1">Projekt-Rendite</p>
                                <p className="text-5xl md:text-6xl font-serif text-[#C5A028] tracking-tighter leading-none group-hover:scale-105 transition-transform origin-left">
                                    ~34,9<span className="text-2xl align-top ml-1">%</span>
                                </p>
                            </div>
                        </div>
                     </div>
                     
                     <div className="relative z-10 mt-6 pt-4 border-t border-[#C5A028]/20">
                        <p className="text-[9px] text-white/40 italic">Indikative Berechnung</p>
                     </div>
                </div>

            </div>
         </Stage>
      </div>
    </header>
  );
};

export default Hero;
