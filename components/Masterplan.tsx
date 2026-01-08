import React, { useState, useMemo } from 'react';
import { SectionTag } from './ui/Shared';
import { PieChart, Zap, Maximize2 } from 'lucide-react';

// --- CONFIGURATION ---
const buildingData: Record<string, { id: string; label: string; count: number; area: number; price: number; rent: number }> = {
  mfh1: { id: 'MFH-01', label: 'Mehrfamilienhaus 1 (Vorne)', count: 8, area: 680, price: 4420000, rent: 163200 },
  mfh2: { id: 'MFH-02', label: 'Mehrfamilienhaus 2 (Hinten)', count: 8, area: 680, price: 4420000, rent: 163200 },
  dhh: { id: 'DHH', label: 'Doppelhäuser (9 Einheiten)', count: 9, area: 1260, price: 8190000, rent: 302400 },
  rh: { id: 'RH', label: 'Reihenhäuser (7 Einheiten)', count: 7, area: 840, price: 5460000, rent: 201600 },
};

const formatMoney = (val: number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

// --- SVG HELPERS ---
const BuildingShape: React.FC<{ d: string; active: boolean; onClick: () => void; label: string }> = ({ d, active, onClick, label }) => (
    <g onClick={onClick} className="cursor-pointer group">
        {/* Shadow/Grounding */}
        <path d={d} fill="black" fillOpacity="0.3" transform="translate(4,4)" filter="blur(4px)" />
        
        {/* The Building Mass */}
        <path 
            d={d} 
            fill={active ? '#D4AF37' : 'rgba(255,255,255,0.05)'} 
            fillOpacity={active ? 0.4 : 0.1}
            stroke={active ? '#D4AF37' : 'rgba(255,255,255,0.3)'} 
            strokeWidth={active ? 2 : 1}
            className="transition-all duration-500 ease-out group-hover:fill-[#D4AF37]/20 group-hover:stroke-[#D4AF37]"
            style={{ backdropFilter: 'blur(4px)' }}
        />
    </g>
);

const Masterplan: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(Object.keys(buildingData));
  const [equity, setEquity] = useState(30);
  const [interest, setInterest] = useState(3.5);

  const toggle = (id: string) => setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  
  const metrics = useMemo(() => {
    let p = 0, a = 0, r = 0, u = 0;
    selected.forEach(k => { const b = buildingData[k]; p += b.price; a += b.area; r += b.rent; u += b.count; });
    const loan = p * (1 - equity / 100);
    const cost = loan * (interest / 100);
    return { price: p, area: a, rent: r, units: u, loan, cost, flow: r - cost };
  }, [selected, equity, interest]);

  return (
    <section id="masterplan" className="relative w-full py-20">
       
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* HEADER (Top Left aligned with grid) */}
          <div className="lg:col-span-12 mb-8 flex flex-col md:flex-row justify-between items-end">
             <div>
                <SectionTag>Lageplan</SectionTag>
                <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mt-4">
                  Living <span className="text-white/50">Matrix</span>
                </h2>
             </div>
             
             {/* Controls */}
             <div className="flex gap-4">
                <button 
                  onClick={() => setSelected(Object.keys(buildingData))} 
                  className="group px-6 py-3 rounded-full border border-white/10 hover:border-[#D4AF37] bg-white/5 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <Maximize2 className="w-4 h-4 text-white group-hover:text-[#D4AF37]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">Gesamtansicht</span>
                </button>
             </div>
          </div>

          {/* LEFT: THE MAP */}
          <div className="lg:col-span-8 relative aspect-[4/3] lg:h-[700px] lg:aspect-auto rounded-3xl overflow-hidden group border border-white/10 bg-[#101010]">
             
             {/* 1. REAL SATELLITE IMAGE BASE */}
             <img 
               src="https://whhy.de/wp-content/uploads/2026/01/1.png" 
               alt="Satellitenbild" 
               className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-125 brightness-75 transition-transform duration-[60s] ease-linear group-hover:scale-105"
             />
             
             {/* 2. OVERLAY GRADIENT */}
             <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80 pointer-events-none" />

             {/* 3. INTERACTIVE SVG LAYER */}
             <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full drop-shadow-2xl">
                 
                 {/* The Red Property Line (Subtle Pulse) */}
                 <path 
                    d="M 50 100 L 750 100 L 750 500 L 50 500 Z" 
                    fill="none" 
                    stroke="#D4AF37" 
                    strokeWidth="1.5" 
                    strokeDasharray="10 5"
                    className="opacity-60"
                 >
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="20s" repeatCount="indefinite" />
                 </path>

                 {/* ACCESS ROAD */}
                 <path d="M 400 300 L 400 600" stroke="white" strokeWidth="40" strokeOpacity="0.05" strokeLinecap="round" />

                 {/* MFH 1 */}
                 <BuildingShape 
                    d="M 100 320 L 300 320 L 300 420 L 100 420 Z" 
                    active={selected.includes('mfh1')} 
                    onClick={() => toggle('mfh1')}
                    label="MFH I"
                 />
                 
                 {/* MFH 2 */}
                 <BuildingShape 
                    d="M 500 320 L 700 320 L 700 420 L 500 420 Z" 
                    active={selected.includes('mfh2')} 
                    onClick={() => toggle('mfh2')}
                    label="MFH II"
                 />

                 <g>
                    <BuildingShape 
                        d="M 120 150 L 320 150 L 320 230 L 120 230 Z" 
                        active={selected.includes('dhh')} 
                        onClick={() => toggle('dhh')}
                        label="DHH Cluster"
                    />
                    <BuildingShape 
                        d="M 480 150 L 680 150 L 680 230 L 480 230 Z" 
                        active={selected.includes('rh')} 
                        onClick={() => toggle('rh')}
                        label="RH Cluster"
                    />
                 </g>

                 {/* Floating Labels */}
                 <text x="200" y="370" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" opacity="0.8" pointerEvents="none">MFH I</text>
                 <text x="600" y="370" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" opacity="0.8" pointerEvents="none">MFH II</text>
                 <text x="220" y="190" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" opacity="0.8" pointerEvents="none">9 DHH</text>
                 <text x="580" y="190" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" opacity="0.8" pointerEvents="none">7 RH</text>

             </svg>
             
             {/* Legend Overlay */}
             <div className="absolute bottom-6 left-6 flex items-center gap-6 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                 <div className="flex items-center gap-2 text-[10px] text-white font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    Ausgewählt
                 </div>
                 <div className="flex items-center gap-2 text-[10px] text-white/50 font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full border border-white/30" />
                    Verfügbar
                 </div>
             </div>
          </div>

          {/* RIGHT: DASHBOARD */}
          <div className="lg:col-span-4 flex flex-col h-full lg:h-[700px] gap-6">
             
             {/* 1. METRICS */}
             <div className="flex-1 relative rounded-3xl p-10 border border-white/10 bg-[#121212] flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                    <PieChart className="w-12 h-12 text-[#D4AF37]" />
                </div>
                
                <h3 className="text-white font-serif text-2xl mb-8">Auswahl</h3>
                
                <div className="space-y-8">
                    <div className="group">
                        <p className="text-[10px] uppercase tracking-widest text-text-muted mb-2 group-hover:text-[#D4AF37] transition-colors font-bold">Verkaufsvolumen</p>
                        <p className="text-4xl font-light text-white tracking-tight">{formatMoney(metrics.price)}</p>
                    </div>
                    <div className="w-full h-px bg-white/5" />
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1 font-bold">Wohnfläche</p>
                            <p className="text-xl font-medium text-white">{metrics.area} <span className="text-sm opacity-50">m²</span></p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1 font-bold">Einheiten</p>
                            <p className="text-xl font-medium text-white">{metrics.units}</p>
                        </div>
                    </div>
                </div>
             </div>

             {/* 2. CALCULATOR */}
             <div className="relative rounded-3xl p-10 border border-white/10 bg-[#121212]">
                <div className="space-y-6">
                    <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-bold text-text-muted uppercase tracking-wider">
                            <span>Eigenkapital</span>
                            <span className="text-white">{equity}%</span>
                        </div>
                        <input 
                            type="range" min="0" max="100" step="5" value={equity} onChange={e => setEquity(+e.target.value)} 
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37] hover:accent-white transition-all" 
                        />
                    </div>
                     <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-bold text-text-muted uppercase tracking-wider">
                            <span>Zins (p.a.)</span>
                            <span className="text-white">{interest}%</span>
                        </div>
                        <input 
                            type="range" min="1" max="8" step="0.1" value={interest} onChange={e => setInterest(+e.target.value)} 
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37] hover:accent-white transition-all" 
                        />
                    </div>
                </div>
             </div>

             {/* 3. RESULT */}
             <div className="relative rounded-3xl p-10 bg-[#D4AF37] text-black shadow-[0_0_50px_-10px_rgba(212,175,55,0.3)] hover:scale-[1.02] transition-transform duration-500 border border-white/10">
                <div className="flex items-center gap-2 mb-2 opacity-70">
                    <Zap className="w-4 h-4 fill-current" />
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em]">Cashflow Prognose</p>
                </div>
                <div className="flex items-baseline gap-2">
                    <h2 className="text-5xl font-serif font-bold tracking-tighter">{formatMoney(metrics.flow)}</h2>
                    <span className="text-sm font-bold opacity-60">/ p.a.</span>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default Masterplan;