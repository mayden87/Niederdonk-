
import React from 'react';
import { SectionTag, Reveal, SectionBackground } from './ui/Shared';
import { ArrowUpRight } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="relative py-24 md:py-40 bg-[#050505]">
      {/* Background */}
      <SectionBackground 
        src="https://whhy.de/wp-content/uploads/2026/01/2.png" 
        opacity={0.2} 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Aligned with Thesis style */}
        <Reveal>
            <div className="mb-16 md:mb-24">
                <SectionTag>01. Projekt-Details</SectionTag>
                <div className="flex flex-col md:flex-row gap-12 mt-8 md:items-end">
                    <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] max-w-3xl">
                        Das Projekt <br />
                        <span className="text-[#C5A028] italic">im Detail</span>
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed max-w-xl md:pl-10 md:border-l border-white/10">
                        Eine kuratierte Zusammenstellung der wichtigsten Projektparameter. 
                        Entworfen für höchste Ansprüche an Wohnqualität und Wirtschaftlichkeit. 
                        Jedes Detail geprüft.
                    </p>
                </div>
            </div>
        </Reveal>

        {/* IMAGE */}
        <Reveal delay={200}>
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-[32px] group border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-90" />
                
                <img
                    src="https://whhy.de/wp-content/uploads/2026/01/2.png"
                    alt="Moderne Architektur – Quartier Niederdonk Living"
                    className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-105"
                    loading="lazy"
                />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 max-w-3xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-[#C5A028]"></div>
                        <p className="text-[11px] text-[#C5A028] uppercase tracking-[0.3em] font-bold">Die Vision</p>
                    </div>
                    <p className="text-white text-3xl md:text-5xl font-serif italic leading-[1.1] drop-shadow-md mb-10">
                        "Architektur, die nicht nur Raum schafft, sondern Atmosphäre atmet."
                    </p>
                    
                    <button className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group/btn">
                        <span className="text-xs text-white uppercase tracking-widest font-bold">Galerie öffnen</span>
                        <ArrowUpRight className="w-4 h-4 text-[#C5A028] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Overview;
