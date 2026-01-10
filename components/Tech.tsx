
import React from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { HardHat, Home, Drill, ArrowUpRight } from 'lucide-react';

const Tech: React.FC = () => {
  return (
    <section id="tech" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-[#C5A028]/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Editorial Style */}
        <Reveal>
          <div className="mb-16 md:mb-28">
            <SectionTag>03. Bebauung & Technik</SectionTag>
            <div className="flex flex-col md:flex-row gap-12 mt-8 md:items-end">
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] max-w-3xl text-left">
                Präzision in <br />
                <span className="text-[#C5A028] italic">Fundament & Form</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed max-w-xl md:pl-10 md:border-l border-white/10 text-left">
                Die technische Umsetzung folgt höchsten Standards. Von der Baugrunduntersuchung 
                bis zur spezialisierten Gründung – jede Maßnahme ist präzise kalkuliert.
              </p>
            </div>
          </div>
        </Reveal>

        {/* TECH STAGE */}
        <Stage className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Block 1: Einfamilienhäuser (KEIN HINTERGRUND -> BILDER EINFÜGEN) */}
            <div className="p-8 md:p-16 group hover:bg-white/[0.02] transition-colors duration-500 flex flex-col text-left justify-between">
              <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028] group-hover:scale-110 transition-transform">
                      <Home className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Wohnformen</span>
                  </div>
                  
                  <h3 className="text-3xl font-serif text-white mb-8">Einfamilienhäuser & <br/>Wohnungen</h3>
                  
                  <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-serif text-[#C5A028] opacity-50">09</div>
                      <div>
                        <p className="text-white font-medium mb-1">Doppelhaushälften</p>
                        <p className="text-sm text-white/50 leading-relaxed">ca. 140 m² Wohnfläche, Grundmaß ca. 5,5 m × 11,5 m.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-serif text-[#C5A028] opacity-50">07</div>
                      <div>
                        <p className="text-white font-medium mb-1">Reihenhäuser</p>
                        <p className="text-sm text-white/50 leading-relaxed">ca. 120 m² Wohnfläche, Grundmaß ca. 5,5 m × 10 m.</p>
                      </div>
                    </div>
                  </div>
              </div>

              {/* NEW IMAGES SECTION - Under 300px height, one larger, one smaller, NO GRAYSCALE */}
              <div className="mt-auto pt-6 border-t border-white/5">
                 <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-6">Impressionen</p>
                 <div className="grid grid-cols-12 gap-4 h-64 w-full">
                    {/* Larger Image (Span 7) - Image 5 - Zoomed to hide logo */}
                    <div className="col-span-7 h-full relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A028]/30 transition-all duration-700">
                        <img 
                          src="https://whhy.de/wp-content/uploads/2026/01/5.png" 
                          alt="Außenansicht Detail" 
                          className="w-full h-full object-cover transition-transform duration-1000 scale-[1.3] hover:scale-[1.4]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
                        <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest text-white/90 font-bold">Perspektive A</span>
                    </div>
                    
                    {/* Smaller Image (Span 5) - Image 7 */}
                    <div className="col-span-5 h-full relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A028]/30 transition-all duration-700">
                        <img 
                          src="https://whhy.de/wp-content/uploads/2026/01/7.png" 
                          alt="Innenansicht Detail" 
                          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
                        <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest text-white/90 font-bold">Perspektive B</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Block 2: Baugrund & Tiefbau (HAS BACKGROUND) */}
            <div className="p-8 md:p-16 bg-[#C5A028]/[0.02] group hover:bg-[#C5A028]/[0.04] transition-colors duration-500 text-left">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028] group-hover:scale-110 transition-transform">
                  <Drill className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Ingenieurwesen</span>
              </div>

              <h3 className="text-3xl font-serif text-white mb-8">Baugrund & <br/>Tiefbau</h3>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-[#C5A028] uppercase tracking-widest">Untersuchung</span>
                    <span className="text-xs font-mono text-white/40">Status: Abgeschlossen</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    <span className="text-white font-bold text-lg mr-2 italic">12</span> 
                    Sondierungspunkte zur präzisen Bewertung von Tragfähigkeit und Grundwasserverhältnissen.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A028]" />
                    <p className="text-sm text-white/60">Vollständige Wasserhaltung einkalkuliert.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A028]" />
                    <p className="text-sm text-white/60">Erforderliche Unterfangungen der Nachbarbebauung berücksichtigt.</p>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl border border-[#C5A028]/20 bg-[#C5A028]/5">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A028] font-bold mb-2">Kostensicherheit</p>
                  <p className="text-white font-serif italic text-lg leading-snug">
                    Alle Spezialtiefbau-Maßnahmen sind integraler Bestandteil der GKI-Kalkulation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Stage>

        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
              Grundlage: Baugrundgutachten Dr. Spang / Statische Vorbemessung
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Tech;
