
import React from 'react';
import { SectionTag, Stage, Reveal, SectionBackground, MetricRow } from './ui/Shared';
import { Truck, Car, Leaf, ArrowRight, ArrowUpRight, Navigation, MapPin, ChevronRight } from 'lucide-react';

const Mobility: React.FC = () => {
  const mobilityFeatures = [
    {
      title: "Erschließung",
      desc: "Zentrale Zufahrt über privaten Wohnweg (6m Breite). Optimale Durchmischung von privaten und halböffentlichen Räumen.",
      icon: Navigation
    },
    {
      title: "Rettungswege",
      desc: "Sicheres Drehleiter-Konzept von der Niederdonker Straße. Interner Weg dient als Aufstellfläche für Notdienste.",
      icon: Truck
    },
    {
      title: "Nachhaltigkeit",
      desc: "E-Mobility-Vorbereitung an jedem Stellplatz. Regenwasser-Management durch intelligente Versickerung und Dachbegrünung.",
      icon: Leaf
    }
  ];

  return (
    <section id="mobility" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND */}
      <SectionBackground 
        src="https://whhy.de/wp-content/uploads/2026/01/1.png" 
        opacity={0.15} 
        color="from-[#050505] via-transparent to-[#050505]" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <Reveal>
          <div className="mb-16 md:mb-28">
            <SectionTag>02. Städtebau & Mobilität</SectionTag>
            <div className="flex flex-col lg:flex-row gap-12 mt-8 lg:items-end justify-between">
                <h2 className="text-5xl md:text-8xl font-serif text-white leading-[0.9] max-w-4xl tracking-tighter text-left">
                  Konzept mit <br />
                  <span className="text-[#C5A028] italic">Nachweis-Charakter</span>
                </h2>
                <div className="max-w-md lg:pl-12 lg:border-l border-white/10 text-left">
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light mb-6">
                    Mobilität neu gedacht: Wir nutzen die exzellente Lagegunst, um den ökologischen Fußabdruck 
                    zu minimieren und den Wohnwert durch Entsiegelung zu maximieren.
                  </p>
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/20">
                    <MapPin className="w-3 h-3 text-[#C5A028]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A028] font-bold">ÖPNV-Lage &lt; 350m</span>
                  </div>
                </div>
            </div>
          </div>
        </Reveal>

        {/* MOBILITY STAGE */}
        <Stage className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Left: The Proof (Der Nachweis) */}
            <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-between bg-white/[0.01]">
              <div className="text-left">
                 <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                       <Car className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Stellplatznachweis</span>
                 </div>

                 <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">
                    Effizienz durch <br />
                    <span className="text-[#C5A028] italic">Lagegunst.</span>
                 </h3>

                 <div className="space-y-6 mb-12">
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                        <div className="flex justify-between items-baseline mb-4">
                           <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Soll-Bedarf (Standard)</span>
                           <span className="text-white font-mono text-lg">56</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                           <span className="text-[#C5A028] text-[10px] uppercase tracking-widest font-bold">Nachweis (Reduziert)</span>
                           <span className="text-[#C5A028] font-serif text-3xl">42</span>
                        </div>
                        <div className="mt-6 h-[2px] w-full bg-white/5 relative overflow-hidden">
                           <div className="absolute left-0 top-0 h-full bg-[#C5A028] w-[75%]" />
                        </div>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed italic">
                       *Die Reduktion wurde durch die Nähe zur Haltestelle Meerbusch-Büderich (U-Bahn) 
                       und das integrierte Mobilitätskonzept mit der Stadtverwaltung abgestimmt.
                    </p>
                 </div>
              </div>

              <div className="mt-auto">
                 <div className="flex items-center justify-between p-5 rounded-xl bg-[#C5A028]/5 border border-[#C5A028]/10">
                    <div>
                       <p className="text-[10px] uppercase tracking-widest text-[#C5A028] font-bold mb-1">Status Nachweis</p>
                       <p className="text-white font-serif text-lg">Abgestimmt & Bestätigt</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C5A028]" />
                 </div>
              </div>
            </div>

            {/* Right: The Features */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
               {mobilityFeatures.map((feature, i) => (
                 <div key={i} className="p-10 md:p-14 group hover:bg-white/[0.03] transition-all duration-700 text-left">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028] group-hover:bg-[#C5A028] group-hover:text-black transition-all duration-500 shadow-xl shrink-0">
                           <feature.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                           <h4 className="text-2xl md:text-3xl font-serif text-white mb-4 transition-transform group-hover:translate-x-1 duration-500">
                             {feature.title}
                           </h4>
                           <p className="text-lg text-white/45 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                              {feature.desc}
                           </p>
                           <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-bold">Detaillierte Planung</span>
                              <ChevronRight className="w-4 h-4 text-[#C5A028]" />
                           </div>
                        </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </Stage>

      </div>
    </section>
  );
};

export default Mobility;
