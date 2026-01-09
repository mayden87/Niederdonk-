
import React, { useEffect, useState } from 'react';
import { Maximize, FileCheck, Home, TrendingUp } from 'lucide-react';
import { Stage } from './ui/Shared';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="relative min-h-[100svh] w-full flex flex-col items-center overflow-visible z-20 bg-[#050505]">
      
      {/* Cinematic Background - NOW CLIPPED to prevent zoom bleed */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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

          {/* Bottom Fade - Ensures pitch black behind the stage */}
          <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[#050505] via-[#050505] to-transparent" />
      </div>

      {/* SEAM FIX: Tiny strip to cover sub-pixel gaps */}
      <div className="absolute -bottom-[2px] left-0 right-0 h-[4px] bg-[#050505] z-10 pointer-events-none" />

      {/* Content Layer - Title (Centered) */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full pt-32 pb-0 md:pt-32 md:pb-48">
          
          {/* Tagline */}
          <div className={`transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-8 md:mb-12">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A028] animate-pulse"></span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/90 font-bold">Projektexpose</span>
             </div>
          </div>

          {/* Main Title - 3 Rows - Increased Margin Bottom for Spacing */}
          <h1 className="font-serif font-medium text-white leading-[1.0] tracking-tighter mb-4 md:mb-32 text-left">
            <div className="overflow-hidden block">
              <span className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl transition-transform duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) delay-200 ${isMounted ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Quartier
              </span>
            </div>
            <div className="overflow-hidden block">
              <span className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl transition-transform duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) delay-[300ms] ${isMounted ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Niederdonk
              </span>
            </div>
            <div className="overflow-hidden block mt-1">
              <span className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C5A028] transition-transform duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) delay-[400ms] ${isMounted ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Living
              </span>
            </div>
          </h1>
      </div>

      {/* NEW: Data Stage (4 Columns) - Relative on Mobile (1cm gap), Absolute Overlap on Desktop */}
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
                <div className="p-8 group hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-3 mb-6 text-[#C5A028]">
                        <Maximize className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">Flächen</span>
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

                {/* COL 2: Baurecht */}
                <div className="p-8 group hover:bg-white/[0.02] transition-colors flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-6 text-[#C5A028]">
                            <FileCheck className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Baurecht</span>
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-2">
                            §34 BauGB
                        </h3>
                        <p className="text-sm text-white/50 mb-4">Genehmigungsfähig</p>
                        <p className="text-xs text-white/60 leading-relaxed mb-6">
                            Rechtsgültiger Bauvorbescheid liegt vor (bis 12/2026). Positives Votum des Arbeitskreises AK34 bestätigt Planungssicherheit.
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/5 border border-green-500/10 mt-auto">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">Status</span>
                        </div>
                        <span className="text-white text-xs font-medium">Bestätigt</span>
                    </div>
                </div>

                {/* COL 3: Wohnungsmix */}
                <div className="p-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden flex flex-col justify-between">
                     <div>
                        <div className="flex items-center gap-3 mb-6 text-[#C5A028]">
                            <Home className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Wohnungsmix</span>
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
                <div className="p-8 bg-[#C5A028]/10 relative overflow-hidden group flex flex-col justify-between">
                     <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                     
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
                                <p className="text-5xl md:text-6xl font-serif text-[#C5A028] tracking-tighter leading-none">
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
