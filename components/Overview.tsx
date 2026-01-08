import React from 'react';
import { SectionTag, SpotlightCard, MetricRow, Reveal } from './ui/Shared';
import { MapPin, Home, Layers, ArrowUpRight } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="relative">
      {/* Atmosphere Glow for this section */}
      <div className="absolute left-[-20%] top-0 w-[50%] h-[50%] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <Reveal>
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
                <SectionTag>01. Eckdaten</SectionTag>
                <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mt-6 leading-[1.1]">
                  Das Projekt <br />
                  <span className="text-[#D4AF37] italic">im Detail</span>
                </h2>
            </div>
            <p className="text-text-muted max-w-sm text-sm leading-relaxed mb-2">
                Eine kuratierte Zusammenstellung der wichtigsten Projektparameter. 
                Entworfen für höchste Ansprüche an Wohnqualität und Wirtschaftlichkeit.
            </p>
        </div>
      </Reveal>

      {/* NEW INTERACTIVE GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 md:mb-32">
        
        {/* CARD 1: Grundstück (Large Span) */}
        <Reveal delay={200} className="md:col-span-7 h-full">
            <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-between group">
                <div className="flex justify-between items-start mb-8">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37]">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted/50 group-hover:text-[#D4AF37] transition-colors">Location Data</span>
                </div>
                
                <div>
                    <h3 className="text-3xl font-serif font-medium text-white mb-2">Grundstück & Baurecht</h3>
                    <p className="text-text-muted font-light mb-8 max-w-md">
                        6.317 m² Nettobauland in etablierter Premium-Lage.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                        <div>
                            <p className="text-xs text-text-muted uppercase tracking-wider mb-1">GFZ</p>
                            <p className="text-2xl text-white font-serif">0,48</p>
                        </div>
                        <div>
                            <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Baurecht</p>
                            <p className="text-2xl text-white font-serif">§ 34 BauGB</p>
                        </div>
                    </div>
                </div>
            </SpotlightCard>
        </Reveal>

        {/* CARD 2: Volumen (Tall Span) */}
        <Reveal delay={400} className="md:col-span-5 h-full">
            <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8">
                     <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                        <Layers className="w-6 h-6" />
                    </div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted/50 group-hover:text-white transition-colors">Volumen</span>
                </div>

                <div className="space-y-6">
                    <div>
                        <p className="text-sm text-text-muted mb-1">Bruttogeschossfläche</p>
                        <p className="text-4xl font-serif text-white">4.069 <span className="text-lg text-text-muted/50 font-sans">m²</span></p>
                    </div>
                    <div className="w-full h-px bg-white/5" />
                    <div>
                        <p className="text-sm text-text-muted mb-1">Netto-Wohnfläche</p>
                        <p className="text-4xl font-serif text-[#D4AF37]">3.250 <span className="text-lg text-text-muted/50 font-sans">m²</span></p>
                    </div>
                </div>
                
                <div className="mt-8 flex gap-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-text-muted uppercase tracking-wide">40 TG-Plätze</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-text-muted uppercase tracking-wide">Begrünung</span>
                </div>
            </SpotlightCard>
        </Reveal>

        {/* CARD 3: Wohnformen (Wide Span) */}
        <Reveal delay={600} className="md:col-span-12">
            <SpotlightCard className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37]">
                            <Home className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-serif font-medium text-white">Der Wohnungsmix</h3>
                     </div>
                     <p className="text-text-muted font-light leading-relaxed mb-6 max-w-xl">
                        Ein ausbalanciertes Portfolio aus Einfamilienhäusern und Etagenwohnungen, 
                        maßgeschneidert für die lokale Nachfragestruktur in Meerbusch.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
                            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">9 DHH</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-white text-xs font-bold uppercase tracking-widest">7 RH</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-white text-xs font-bold uppercase tracking-widest">16 ETW</span>
                        </div>
                     </div>
                </div>

                {/* Visual Representation (Abstract Bars) */}
                <div className="w-full md:w-1/3 space-y-3">
                    <div className="flex items-center gap-4 text-xs">
                        <span className="w-12 text-right text-text-muted">DHH</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-[#D4AF37] w-[45%] rounded-full shadow-[0_0_10px_#D4AF37]" />
                        </div>
                        <span className="w-8 text-white font-bold">45%</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <span className="w-12 text-right text-text-muted">RH</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-white/40 w-[25%] rounded-full" />
                        </div>
                        <span className="w-8 text-white font-bold">25%</span>
                    </div>
                     <div className="flex items-center gap-4 text-xs">
                        <span className="w-12 text-right text-text-muted">ETW</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-white/20 w-[30%] rounded-full" />
                        </div>
                        <span className="w-8 text-white font-bold">30%</span>
                    </div>
                </div>
            </SpotlightCard>
        </Reveal>
      </div>

      {/* THE VISION IMAGE */}
      <Reveal delay={200}>
        <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-[2.5rem] group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-700 group-hover:opacity-80" />
            
            <img
                src="https://whhy.de/wp-content/uploads/2026/01/2.png"
                alt="Moderne Architektur – Quartier Niederdonk Living"
                className="w-full h-full object-cover transition-transform duration-[15s] ease-linear group-hover:scale-110 will-change-transform"
                loading="lazy"
            />
            
            <div className="absolute bottom-10 left-8 md:bottom-20 md:left-20 z-20 max-w-2xl transform transition-transform duration-700 group-hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                    <p className="text-xs text-[#D4AF37] uppercase tracking-[0.3em] font-bold">Die Vision</p>
                </div>
                <p className="text-white text-3xl md:text-5xl font-serif italic leading-tight drop-shadow-lg mb-8">
                    "Architektur, die nicht nur Raum schafft, sondern Atmosphäre atmet. Ein Zuhause im Einklang."
                </p>
                
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all group/btn">
                    <span className="text-xs text-white uppercase tracking-widest font-bold">Zur Galerie</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Overview;