
import React from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { Users, Euro, Target, Compass, ArrowRight, ArrowUpRight } from 'lucide-react';

const Market: React.FC = () => {
  return (
    <section id="market" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND - Added per request */}
      <SectionBackground 
        src="https://whhy.de/wp-content/uploads/2026/01/1.png" 
        opacity={0.1} 
        color="from-[#050505] via-transparent to-[#050505]" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Editorial Style */}
        <Reveal>
          <div className="mb-16 md:mb-28 text-left">
            <SectionTag>06. Markt & Vertrieb</SectionTag>
            <div className="flex flex-col md:flex-row gap-12 mt-8 md:items-end">
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] max-w-3xl">
                Strategie & <br />
                <span className="text-[#C5A028] italic">Nachfrage</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed max-w-xl md:pl-10 md:border-l border-white/10">
                Zielgerichtete Ansprache solventer Käuferschichten und eine Preisstrategie, 
                die die hohe Standortqualität widerspiegelt.
              </p>
            </div>
          </div>
        </Reveal>

        {/* MARKET STAGE */}
        <Stage className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Column 1: Zielgruppen */}
            <div className="p-8 md:p-16 flex flex-col justify-between bg-white/[0.01] text-left">
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Zielgruppen-Fokus</span>
                </div>
                
                <div className="space-y-12">
                  <div className="group">
                    <h4 className="text-xl font-serif text-white mb-4 flex items-center gap-3">
                      <span className="text-[#C5A028] text-sm font-mono">/01</span> 
                      Eigennutzer (Premium)
                    </h4>
                    <p className="text-sm md:text-base text-white/50 leading-relaxed mb-6">
                      Familien und Paare aus dem Einzugsgebiet Düsseldorf/Meerbusch mit hohem 
                      Anspruch an Privatsphäre.
                    </p>
                    <div className="flex gap-2">
                       <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">Bonitätsstark</span>
                       <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">Lokal</span>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-xl font-serif text-white mb-4 flex items-center gap-3">
                      <span className="text-[#C5A028] text-sm font-mono">/02</span> 
                      Kapitalanleger (Strategisch)
                    </h4>
                    <p className="text-sm md:text-base text-white/50 leading-relaxed mb-6">
                      Investoren mit Fokus auf Wertsicherung und Inflationsschutz. Hohe Fungibilität.
                    </p>
                    <div className="flex gap-2">
                       <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">Portfolio</span>
                       <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">Sicher</span>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-xl font-serif text-white mb-4 flex items-center gap-3">
                      <span className="text-[#C5A028] text-sm font-mono">/03</span> 
                      Family Offices (Global)
                    </h4>
                    <p className="text-sm md:text-base text-white/50 leading-relaxed mb-6">
                      Institutionelle Investoren mit Interesse an Block-Transaktionen (Global-Exit) zur Portfolio-Beimischung.
                    </p>
                    <div className="flex gap-2">
                       <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">Asset-Deal</span>
                       <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">Volumen</span>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-xl font-serif text-white mb-4 flex items-center gap-3">
                      <span className="text-[#C5A028] text-sm font-mono">/04</span> 
                      Expatriates (International)
                    </h4>
                    <p className="text-sm md:text-base text-white/50 leading-relaxed mb-6">
                      Internationale Führungskräfte am Standort Düsseldorf, die wartungsarmen Neubau in Top-Lage suchen.
                    </p>
                    <div className="flex gap-2">
                       <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">Relocation</span>
                       <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">Turnkey</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-[#C5A028]" />
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Vermarktung Off-Market über exklusive Kanäle</span>
                </div>
              </div>
            </div>

            {/* Column 2: Pricing & Vertrieb */}
            <div className="flex flex-col divide-y divide-white/10 text-left">
              
              <div className="p-8 md:p-16 bg-white/[0.03] group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                      <Euro className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Pricing Strategie</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-bold mb-2">Ansatz Ø Erlös</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-6xl md:text-7xl font-serif text-white tracking-tighter">6.500</span>
                        <span className="text-2xl text-white/30 font-serif">€/m²</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                          <p className="text-[9px] uppercase text-white/30 mb-1">Stellplatz TG</p>
                          <p className="text-white font-serif">30.000 €</p>
                       </div>
                       <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                          <p className="text-[9px] uppercase text-white/30 mb-1">Stellplatz Ext.</p>
                          <p className="text-white font-serif">15.000 €</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-16 bg-[#C5A028]/[0.02] flex-1">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Vertriebsphasen</span>
                </div>

                <div className="space-y-6 relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
                  
                  {[
                    { step: "Phase 1", label: "Globaler Vorvertrieb", desc: "Ansprache selektierter Family Offices und Institutioneller." },
                    { step: "Phase 2", label: "Einzelvertrieb (DHH/RH)", desc: "Privilegierter Verkaufsstart für Eigennutzer-Einheiten." },
                    { step: "Phase 3", label: "Öffentliche Vermarktung", desc: "Digitales Rollout Q3 2026." }
                  ].map((item, i) => (
                    <div key={i} className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-[#C5A028] transition-colors" />
                      <p className="text-[9px] uppercase tracking-widest text-[#C5A028] font-bold mb-1">{item.step}</p>
                      <h5 className="text-white font-medium mb-1">{item.label}</h5>
                      <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </Stage>

        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
              Grundlage: Markteinwertung & Wettbewerbsanalyse / Bodenrichtwertkarte Meerbusch
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Market;
