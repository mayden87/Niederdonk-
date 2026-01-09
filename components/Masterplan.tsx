
import React, { useState, useMemo } from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { PieChart, Zap, TreeDeciduous, Car, Maximize2, Info, ArrowUpRight, ChevronRight, Layers } from 'lucide-react';

const buildingData: Record<string, { id: string; label: string; count: number; area: number; price: number }> = {
  mfh1: { id: 'MFH-01', label: 'Mehrfamilienhaus 1', count: 8, area: 575, price: 4337500 },
  mfh2: { id: 'MFH-02', label: 'Mehrfamilienhaus 2', count: 8, area: 575, price: 4337500 },
  dhh: { id: 'DHH', label: 'Doppelhäuser', count: 9, area: 1260, price: 8190000 },
  rh: { id: 'RH', label: 'Reihenhäuser', count: 7, area: 840, price: 5460000 },
};

const BuildingShape: React.FC<{ d: string; active: boolean; onClick: () => void; label: string }> = ({ d, active, onClick, label }) => (
    <g onClick={onClick} className="cursor-pointer group outline-none">
        {/* Soft Shadow */}
        <path d={d} fill="black" fillOpacity="0.4" transform="translate(4,4)" filter="blur(8px)" />
        {/* Main Body */}
        <path 
            d={d} 
            fill={active ? 'rgba(197,160,40,0.25)' : 'rgba(255,255,255,0.03)'} 
            stroke={active ? '#C5A028' : 'rgba(255,255,255,0.15)'} 
            strokeWidth={active ? 2 : 1}
            className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:fill-[#C5A028]/15 group-hover:stroke-[#C5A028]"
        />
        {/* ID Label inside shape */}
        <text 
          x="50%" y="50%" 
          className={`pointer-events-none transition-opacity duration-500 font-mono text-[8px] uppercase tracking-tighter ${active ? 'fill-[#C5A028] opacity-100' : 'fill-white opacity-20'}`}
          dominantBaseline="middle" textAnchor="middle"
        >
          {label}
        </text>
    </g>
);

const Masterplan: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(Object.keys(buildingData));
  const [showLayers, setShowLayers] = useState({ green: true, traffic: false, infrastructure: false });

  const toggle = (id: string) => setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const metrics = useMemo(() => {
    let p = 0, a = 0, u = 0;
    selected.forEach(k => { const b = buildingData[k]; p += b.price; a += b.area; u += b.count; });
    return { price: p, area: a, units: u };
  }, [selected]);

  return (
    <section id="masterplan" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* BACKGROUND DEPTH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-[#C5A028]/5 blur-[160px] opacity-30" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Editorial Alignment */}
        <Reveal>
          <div className="mb-16 md:mb-28">
            <SectionTag>05. Masterplan</SectionTag>
            <div className="flex flex-col lg:flex-row gap-12 mt-8 lg:items-end justify-between">
                <h2 className="text-5xl md:text-8xl font-serif text-white leading-[0.9] max-w-4xl tracking-tighter text-left">
                  Living <br />
                  <span className="text-[#C5A028] italic">Matrix</span>
                </h2>
                <div className="max-w-md lg:pl-12 lg:border-l border-white/10 text-left">
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light mb-6">
                    Die städtebauliche Figur maximiert Belichtung und Privatsphäre. 
                    Ein hybrider Produktmix für nachhaltige Wertstabilität.
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {['Green', 'Traffic', 'Infr.'].map(layer => (
                        <button 
                          key={layer}
                          onClick={() => setShowLayers(prev => ({ ...prev, [layer.toLowerCase().replace('.','')]: !prev[layer.toLowerCase().replace('.','') as keyof typeof showLayers] }))}
                          className={`px-4 py-1.5 rounded-full border text-[9px] uppercase tracking-widest font-bold transition-all ${
                            showLayers[layer.toLowerCase().replace('.','') as keyof typeof showLayers] 
                              ? 'bg-[#C5A028] border-[#C5A028] text-black' 
                              : 'bg-white/5 border-white/10 text-white/40 hover:text-white'
                          }`}
                        >
                          {layer}
                        </button>
                     ))}
                  </div>
                </div>
            </div>
          </div>
        </Reveal>

        {/* MASTERPLAN STAGE */}
        <Stage className="mb-24 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Visual Column (Span 7) */}
            <div className="lg:col-span-7 relative bg-black/40 overflow-hidden group min-h-[500px]">
               <div className="absolute inset-0 opacity-20 grayscale transition-transform duration-[20s] ease-out scale-110 group-hover:scale-100">
                  <img src="https://whhy.de/wp-content/uploads/2026/01/1.png" alt="Satellite" className="w-full h-full object-cover" />
               </div>
               
               {/* Grid Overlay */}
               <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/blueprint-grid.png')] pointer-events-none" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

               <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full p-12 drop-shadow-2xl overflow-visible z-10">
                  {/* Traffic Layer */}
                  <path 
                    d="M 400 300 L 400 600" 
                    stroke="#C5A028" strokeWidth="40" strokeLinecap="round" 
                    className={`transition-all duration-1000 ${showLayers.traffic ? 'opacity-10' : 'opacity-0'}`} 
                  />

                  {/* Building Units */}
                  <g transform="translate(0,0)">
                     <BuildingShape d="M 120 320 L 320 320 L 320 440 L 120 440 Z" active={selected.includes('mfh1')} onClick={() => toggle('mfh1')} label="MFH-01" />
                     <BuildingShape d="M 480 320 L 680 320 L 680 440 L 480 440 Z" active={selected.includes('mfh2')} onClick={() => toggle('mfh2')} label="MFH-02" />
                     <BuildingShape d="M 100 140 L 350 140 L 350 240 L 100 240 Z" active={selected.includes('dhh')} onClick={() => toggle('dhh')} label="9x DHH" />
                     <BuildingShape d="M 450 140 L 700 140 L 700 240 L 450 240 Z" active={selected.includes('rh')} onClick={() => toggle('rh')} label="7x RH" />
                  </g>
               </svg>

               <div className="absolute bottom-8 left-8 flex items-center gap-6 z-20">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-[#C5A028]" />
                     <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">In Selektion</span>
                  </div>
               </div>
            </div>

            {/* Analysis Column (Span 5) */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-white/10 text-left">
               <div className="p-10 md:p-14 bg-white/[0.01] flex-1">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                       <PieChart className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-bold">Matrix Analyse</span>
                  </div>

                  <div className="space-y-10">
                     <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-bold mb-4">Projekt-Erlös (Ind.)</p>
                        <div className="text-5xl md:text-7xl font-serif text-white tracking-tighter">
                           {(metrics.price / 1000000).toFixed(2)} <span className="text-2xl text-white/30">Mio. €</span>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                        <div className="text-left">
                           <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-2">Gesamtfläche</p>
                           <p className="text-2xl font-serif text-white">{metrics.area.toLocaleString('de-DE')} <span className="text-xs text-white/30">m²</span></p>
                        </div>
                        <div className="text-left">
                           <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-2">Einheiten</p>
                           <p className="text-2xl font-serif text-white">{metrics.units}</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="p-10 md:p-14 bg-[#C5A028]/5 relative overflow-hidden">
                  <div className="relative z-10">
                     <div className="flex items-center gap-4 mb-8">
                        <Layers className="w-5 h-5 text-[#C5A028]" />
                        <h3 className="text-xl font-serif text-white">Segment-Steuerung</h3>
                     </div>
                     
                     <div className="space-y-3">
                        {Object.entries(buildingData).map(([key, data]) => {
                           const isActive = selected.includes(key);
                           return (
                              <button 
                                 key={key}
                                 onClick={() => toggle(key)}
                                 className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-500 ${
                                    isActive ? 'bg-[#C5A028]/10 border-[#C5A028]/30 text-white' : 'bg-white/5 border-white/5 text-white/40 opacity-40 hover:opacity-100'
                                 }`}
                              >
                                 <div className="flex flex-col text-left">
                                   <span className="text-[11px] uppercase tracking-widest font-bold">{data.label}</span>
                                   <span className="text-[9px] font-mono opacity-60">{data.count} Einheiten</span>
                                 </div>
                                 <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                                    isActive ? 'bg-[#C5A028] border-[#C5A028]' : 'border-white/20'
                                 }`}>
                                    {isActive && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                                 </div>
                              </button>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Stage>

        {/* Cinematic Bottom Block */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="relative group overflow-hidden rounded-[32px] border border-white/10 shadow-2xl aspect-video lg:aspect-[16/9]">
                <img
                    src="https://whhy.de/wp-content/uploads/2026/01/4.png"
                    alt="Städtebauliches Gefüge"
                    className="w-full h-full object-cover transition-transform duration-[15s] ease-linear group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <p className="text-white font-serif italic text-2xl drop-shadow-lg text-left">"Intelligente Dichte <br/> schafft Exklusivität."</p>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

            <div className="text-left space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-[#C5A028]"></div>
                    <p className="text-[11px] text-[#C5A028] uppercase tracking-[0.4em] font-bold">Struktur</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  Das Quartier als <br />
                  <span className="text-[#C5A028] italic">Ökosystem.</span>
                </h3>
                <p className="text-lg text-white/50 leading-relaxed font-light">
                  Die Anordnung der Baukörper folgt einer klaren Hierarchie: Öffentliche Erschließungswege 
                  münden in private Wohnhöfe. Die MFH-Köpfe bilden den markanten Auftakt des Quartiers, 
                  während die DHH und RH maximale Ruhe im Kern genießen.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all group/btn font-bold text-[10px] uppercase tracking-widest shadow-2xl">
                    Strukturplan laden <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Masterplan;
