import React from 'react';
import { SectionTag, UnifiedCard, Reveal } from './ui/Shared';
import { MapPin, Home, Layers, ArrowUpRight } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="relative">
      
      <Reveal>
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
                <SectionTag>01. Eckdaten</SectionTag>
                <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mt-6 leading-tight">
                  Das Projekt <br />
                  <span className="text-[#D4AF37] italic">im Detail</span>
                </h2>
            </div>
            <p className="text-text-muted max-w-sm text-sm leading-7 mb-2 font-light">
                Eine kuratierte Zusammenstellung der wichtigsten Projektparameter. 
                Entworfen für höchste Ansprüche an Wohnqualität und Wirtschaftlichkeit.
            </p>
        </div>
      </Reveal>

      {/* NEW INTERACTIVE GRID LAYOUT - Perfectly aligned with gap-6 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
        
        {/* CARD 1: Grundstück */}
        <Reveal delay={100} className="md:col-span-7 h-full">
            <UnifiedCard className="flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-[#D4AF37]">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Location</span>
                </div>
                
                <div>
                    <h3 className="text-2xl font-serif text-white mb-3">Grundstück & Baurecht</h3>
                    <p className="text-text-muted font-light leading-relaxed mb-8 max-w-md">
                        6.317 m² Nettobauland in etablierter Premium-Lage. Sofortige Bebauung möglich.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                        <div>
                            <p className="text-[10px] text-text-muted uppercase tracking-widest mb-2">GFZ</p>
                            <p className="text-3xl text-white font-serif">0,48</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-text-muted uppercase tracking-widest mb-2">Baurecht</p>
                            <p className="text-3xl text-white font-serif">§ 34</p>
                        </div>
                    </div>
                </div>
            </UnifiedCard>
        </Reveal>

        {/* CARD 2: Volumen */}
        <Reveal delay={200} className="md:col-span-5 h-full">
            <UnifiedCard className="flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8">
                     <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-white">
                        <Layers className="w-5 h-5" />
                    </div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Metric</span>
                </div>

                <div className="space-y-8">
                    <div>
                        <p className="text-xs text-text-muted mb-2">Bruttogeschossfläche</p>
                        <p className="text-4xl font-serif text-white">4.069 <span className="text-base text-text-muted/40 font-sans">m²</span></p>
                    </div>
                    <div className="w-full h-px bg-white/5" />
                    <div>
                        <p className="text-xs text-text-muted mb-2">Netto-Wohnfläche</p>
                        <p className="text-4xl font-serif text-[#D4AF37]">3.250 <span className="text-base text-text-muted/40 font-sans">m²</span></p>
                    </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white/5 rounded-full text-[10px] text-text-muted uppercase tracking-wider border border-white/5">40 TG-Plätze</span>
                    <span className="px-3 py-1.5 bg-white/5 rounded-full text-[10px] text-text-muted uppercase tracking-wider border border-white/5">Begrünung</span>
                </div>
            </UnifiedCard>
        </Reveal>

        {/* CARD 3: Wohnformen */}
        <Reveal delay={300} className="md:col-span-12">
            <UnifiedCard className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-[#D4AF37]">
                            <Home className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-serif text-white">Der Wohnungsmix</h3>
                     </div>
                     <p className="text-text-muted font-light leading-7 mb-8 max-w-xl">
                        Ein ausbalanciertes Portfolio aus Einfamilienhäusern und Etagenwohnungen, 
                        maßgeschneidert für die lokale Nachfragestruktur in Meerbusch.
                     </p>
                     <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                            <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse"></span>
                            <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">9 DHH</span>
                        </div>
                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-white text-[10px] font-bold uppercase tracking-widest">7 RH</span>
                        </div>
                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-white text-[10px] font-bold uppercase tracking-widest">16 ETW</span>
                        </div>
                     </div>
                </div>

                {/* Visual Representation */}
                <div className="w-full md:w-1/3 space-y-4">
                    <div className="flex items-center gap-4 text-xs">
                        <span className="w-12 text-right text-text-muted font-mono">DHH</span>
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-[#D4AF37] w-[45%]" />
                        </div>
                        <span className="w-8 text-white font-bold text-right">45%</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <span className="w-12 text-right text-text-muted font-mono">RH</span>
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-white/30 w-[25%]" />
                        </div>
                        <span className="w-8 text-white font-bold text-right">25%</span>
                    </div>
                     <div className="flex items-center gap-4 text-xs">
                        <span className="w-12 text-right text-text-muted font-mono">ETW</span>
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-white/10 w-[30%]" />
                        </div>
                        <span className="w-8 text-white font-bold text-right">30%</span>
                    </div>
                </div>
            </UnifiedCard>
        </Reveal>
      </div>

      {/* THE VISION IMAGE */}
      <Reveal delay={200}>
        <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-[2rem] group shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent z-10" />
            
            <img
                src="https://whhy.de/wp-content/uploads/2026/01/2.png"
                alt="Moderne Architektur – Quartier Niederdonk Living"
                className="w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-105 will-change-transform"
                loading="lazy"
            />
            
            <div className="absolute bottom-10 left-8 md:bottom-20 md:left-20 z-20 max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.3em] font-bold">Die Vision</p>
                </div>
                <p className="text-white text-3xl md:text-5xl font-serif italic leading-tight drop-shadow-lg mb-8">
                    "Architektur, die nicht nur Raum schafft, sondern Atmosphäre atmet. Ein Zuhause im Einklang."
                </p>
                
                <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group/btn">
                    <span className="text-[10px] text-white uppercase tracking-widest font-bold">Zur Galerie</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Overview;