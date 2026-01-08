import React from 'react';
import { SectionTag, UnifiedCard, Reveal } from './ui/Shared';
import { MapPin, Home, Layers, ArrowUpRight } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="relative py-20 md:py-32">
      
      <Reveal>
        <div className="mb-12 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
                <SectionTag>01. Eckdaten</SectionTag>
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-6 leading-[1.1]">
                  Das Projekt <br />
                  <span className="text-[#C5A028] italic">im Detail</span>
                </h2>
            </div>
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-light md:pl-12">
                Eine kuratierte Zusammenstellung der wichtigsten Projektparameter. 
                Entworfen für höchste Ansprüche an Wohnqualität und Wirtschaftlichkeit. 
                Jedes Detail geprüft.
            </p>
        </div>
      </Reveal>

      {/* NEW INTERACTIVE GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-24">
        
        {/* CARD 1: Grundstück */}
        <Reveal delay={100} className="md:col-span-7 h-full">
            <UnifiedCard className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-8">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#C5A028]">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Location</span>
                </div>
                
                <div>
                    <h3 className="text-2xl font-serif text-white mb-4">Grundstück & Baurecht</h3>
                    <p className="text-text-muted text-sm font-light leading-relaxed mb-8 max-w-md">
                        7.398 m² Gesamtareal (6.317 m² Nettobauland) in etablierter Premium-Lage. <br/>
                        <span className="text-white/60">Baurecht nach §34 | Vorbescheid bis 12/2026 | AK34 positiv</span>
                    </p>
                    
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                        <div>
                            <p className="text-[9px] text-text-muted uppercase tracking-widest mb-1">GRZ I</p>
                            <p className="text-xl md:text-2xl text-white font-serif">0,27</p>
                        </div>
                        <div>
                            <p className="text-[9px] text-text-muted uppercase tracking-widest mb-1">GRZ II</p>
                            <p className="text-xl md:text-2xl text-white font-serif">0,38</p>
                        </div>
                        <div>
                            <p className="text-[9px] text-text-muted uppercase tracking-widest mb-1">GFZ</p>
                            <p className="text-xl md:text-2xl text-[#C5A028] font-serif">0,48</p>
                        </div>
                    </div>
                </div>
            </UnifiedCard>
        </Reveal>

        {/* CARD 2: Volumen */}
        <Reveal delay={200} className="md:col-span-5 h-full">
            <UnifiedCard className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-8">
                     <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                        <Layers className="w-5 h-5" />
                    </div>
                     <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Metric</span>
                </div>

                <div className="space-y-6">
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Bruttogeschossfläche</p>
                        <p className="text-3xl md:text-4xl font-serif text-white">4.069 <span className="text-sm md:text-base text-text-muted/40 font-sans">m²</span></p>
                    </div>
                    <div className="w-full h-px bg-white/5" />
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Netto-Wohnfläche</p>
                        <p className="text-3xl md:text-4xl font-serif text-[#C5A028]">3.250 <span className="text-sm md:text-base text-text-muted/40 font-sans">m²</span></p>
                    </div>
                </div>
            </UnifiedCard>
        </Reveal>

        {/* CARD 3: Wohnformen */}
        <Reveal delay={300} className="md:col-span-12">
            <UnifiedCard className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="flex-1 w-full">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#C5A028]">
                            <Home className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-serif text-white">Der Wohnungsmix</h3>
                     </div>
                     <p className="text-text-muted text-sm font-light leading-relaxed mb-8 max-w-xl">
                        Ein ausbalanciertes Portfolio aus Einfamilienhäusern und Etagenwohnungen, 
                        maßgeschneidert für die lokale Nachfragestruktur.
                     </p>
                     <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C5A028]/10 border border-[#C5A028]/20">
                            <span className="w-1.5 h-1.5 bg-[#C5A028] rounded-full animate-pulse"></span>
                            <span className="text-[#C5A028] text-[9px] font-bold uppercase tracking-widest">9 DHH</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-white text-[9px] font-bold uppercase tracking-widest">7 RH</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-white text-[9px] font-bold uppercase tracking-widest">16 ETW</span>
                        </div>
                     </div>
                </div>

                {/* Visual Representation */}
                <div className="w-full md:w-1/3 space-y-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/5 md:pl-12">
                    <p className="text-[9px] uppercase tracking-widest text-text-muted mb-2 text-right">Anteil nach Einheiten</p>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs text-text-muted uppercase tracking-wider mb-1">
                            <span>DHH</span>
                            <span className="text-white font-bold">28%</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-[#C5A028] w-[28%]" />
                        </div>
                    </div>
                     <div className="space-y-1">
                        <div className="flex justify-between text-xs text-text-muted uppercase tracking-wider mb-1">
                            <span>RH</span>
                            <span className="text-white font-bold">22%</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-white/40 w-[22%]" />
                        </div>
                    </div>
                     <div className="space-y-1">
                        <div className="flex justify-between text-xs text-text-muted uppercase tracking-wider mb-1">
                            <span>ETW</span>
                            <span className="text-white font-bold">50%</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-white/20 w-[50%]" />
                        </div>
                    </div>
                </div>
            </UnifiedCard>
        </Reveal>
      </div>

      {/* THE VISION IMAGE */}
      <Reveal delay={200}>
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-2xl group border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-90" />
            
            <img
                src="https://whhy.de/wp-content/uploads/2026/01/2.png"
                alt="Moderne Architektur – Quartier Niederdonk Living"
                className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-105"
                loading="lazy"
            />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-8 bg-[#C5A028]"></div>
                    <p className="text-[10px] text-[#C5A028] uppercase tracking-[0.3em] font-bold">Die Vision</p>
                </div>
                <p className="text-white text-2xl md:text-4xl font-serif italic leading-tight drop-shadow-md mb-8">
                    "Architektur, die nicht nur Raum schafft, sondern Atmosphäre atmet."
                </p>
                
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group/btn">
                    <span className="text-[10px] text-white uppercase tracking-widest font-bold">Galerie öffnen</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A028] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Overview;