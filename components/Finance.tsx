
import React from 'react';
import { SectionTag, Stage, Reveal, MetricRow, SectionBackground } from './ui/Shared';
import { TrendingUp, BarChart3, Wallet, ArrowUpRight, ChevronRight } from 'lucide-react';

const Finance: React.FC = () => {
  return (
    <section id="finance" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND - Added per request */}
      <SectionBackground 
        src="https://whhy.de/wp-content/uploads/2026/01/1.png" 
        opacity={0.1} 
        color="from-[#050505] via-transparent to-[#050505]" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Editorial Style */}
        <Reveal>
          <div className="mb-16 md:mb-24">
            <SectionTag>04. Kalkulation</SectionTag>
            <div className="flex flex-col md:flex-row gap-12 mt-8 md:items-end">
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] max-w-3xl text-left">
                Investment <br />
                <span className="text-[#C5A028] italic">Case</span>
              </h2>
              <div className="max-w-xl md:pl-10 md:border-l border-white/10 text-left">
                <p className="text-white/55 text-lg leading-relaxed">
                  Transparente Aufschlüsselung der Investitionskosten und Ertragserwartungen. 
                  Eine solide Basis für nachhaltigen Wertzuwachs. Jede Position marktgerecht bewertet.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* FINANCE STAGE */}
        <Stage className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Column 1: Investitionskosten (GKI) */}
            <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between bg-white/[0.01]">
              <div className="text-left">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Investitionskosten (GKI)</span>
                </div>
                
                <div className="space-y-2">
                  <MetricRow label="Grundstückskaufpreis" value="4.250.000 €" />
                  <MetricRow label="Erwerbsnebenkosten (ca. 10%)" value="425.000 €" />
                  <MetricRow label="Baukosten (KG 300+400)" value="9.100.000 €" />
                  <MetricRow label="Spezialtiefbau (Wasser/Unterfangung)" value="450.000 €" />
                  <MetricRow label="Baunebenkosten & Außenanlagen" value="1.719.000 €" />
                  <MetricRow label="Finanzierungskosten (Zinsen/Gebühren)" value="600.000 €" border={false} />
                </div>
              </div>
              
              <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Gesamtinvestition</span>
                <span className="text-4xl font-serif text-white">16.544.000 €</span>
              </div>
            </div>

            {/* Column 2: Ertrag & Rendite */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-white/10">
              
              {/* Top half: Exit Strategy */}
              <div className="p-8 md:p-16 bg-white/[0.03] group hover:bg-white/[0.05] transition-colors duration-500 text-left">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Ertragserwartung (Exit)</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-white/50 text-sm">Wohnflächen (3.250 m²)</span>
                    <span className="text-white font-serif text-xl">21.125.000 €</span>
                  </div>
                  <div className="flex justify-between items-end pb-8 border-b border-white/5">
                    <span className="text-white/50 text-sm">Stellplätze (TG)</span>
                    <span className="text-white font-serif text-xl">1.200.000 €</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-[#C5A028] text-xs uppercase tracking-widest font-bold">Gesamterlös</span>
                    <span className="text-3xl font-serif text-white">22.325.000 €</span>
                  </div>
                </div>
              </div>

              {/* Bottom half: The Profit Highlight */}
              <div className="p-8 md:p-16 bg-[#C5A028]/10 relative overflow-hidden group text-left">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-full border border-[#C5A028]/30 bg-[#C5A028]/20 flex items-center justify-center text-[#C5A028]">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A028] font-bold">Performance</span>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028]/60 font-bold mb-2">Projektgewinn (EBT)</p>
                      <p className="text-5xl md:text-6xl font-serif text-white tracking-tighter">5.781.000 €</p>
                    </div>

                    <div className="flex items-end justify-between border-t border-[#C5A028]/20 pt-8">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028]/60 font-bold">Rendite</p>
                        <p className="text-xs text-white/40 font-mono">(EBT / GKI)</p>
                      </div>
                      <div className="text-right">
                        <span className="text-7xl md:text-8xl font-serif text-[#C5A028] leading-none tracking-tighter">
                          34,9<span className="text-3xl align-top ml-1">%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Stage>

        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
              Kalkulationsbasis: Ø 2.800 € Baukosten / Ø 6.500 € Verkaufserlös
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Finance;
