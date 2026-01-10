
import React, { useState, useMemo } from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { TrendingUp, Sliders, RotateCcw, AlertCircle, Target, ShieldCheck } from 'lucide-react';

const ControlSlider: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (val: number) => void;
  defaultValue: number;
}> = ({ label, value, min, max, step, unit, onChange, defaultValue }) => {
    const percentage = ((value - min) / (max - min)) * 100;
    const isChanged = value !== defaultValue;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-end">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{label}</label>
                <div className={`font-mono text-sm ${isChanged ? 'text-[#C5A028]' : 'text-white'}`}>
                    {value.toLocaleString('de-DE')} <span className="text-[10px] opacity-40">{unit}</span>
                </div>
            </div>
            <div className="relative h-1.5 bg-white/5 rounded-full group cursor-pointer">
                <div 
                    className="absolute top-0 bottom-0 left-0 bg-[#C5A028] rounded-full opacity-40 group-hover:opacity-80 transition-opacity" 
                    style={{ width: `${percentage}%` }}
                />
                <input 
                    type="range" 
                    min={min} max={max} step={step} 
                    value={value} 
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div 
                     className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-xl transition-transform group-hover:scale-125 border-2 border-[#050505]"
                     style={{ left: `calc(${percentage}% - 8px)` }}
                />
            </div>
        </div>
    );
};

const Sensitivity: React.FC = () => {
    // Assumptions
    const AREA = 3250; 
    const TG_REVENUE = 1200000;
    const LAND_COST = 4250000;
    const SOFT_COSTS = 1719000;
    const SPECIAL_TIEFBAU = 450000;
    const NEBENKOSTEN = 425000;

    const [salesPrice, setSalesPrice] = useState(6500); 
    const [buildCost, setBuildCost] = useState(2800); 
    const [interest, setInterest] = useState(3.5); 
    const [equity, setEquity] = useState(30);

    const financials = useMemo(() => {
        const revenue = (AREA * salesPrice) + TG_REVENUE;
        const totalBuild = AREA * buildCost;
        const hardCosts = LAND_COST + NEBENKOSTEN + totalBuild + SPECIAL_TIEFBAU + SOFT_COSTS;
        
        const loan = hardCosts * (1 - equity / 100);
        const finCost = (loan * (interest / 100) * 1.5); 
        
        const totalInvest = hardCosts + finCost;
        const ebt = revenue - totalInvest;
        const margin = (ebt / totalInvest) * 100;
        const breakEven = (totalInvest - TG_REVENUE) / AREA;

        return { revenue, totalInvest, ebt, margin, breakEven };
    }, [salesPrice, buildCost, interest, equity]);

    const reset = () => {
        setSalesPrice(6500);
        setBuildCost(2800);
        setInterest(3.5);
        setEquity(30);
    };

    return (
        <section id="sensitivity" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
            {/* ATMOSPHERIC BACKGROUND REMOVED PER REQUEST */}

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                
                {/* Header - Left Aligned on Mobile */}
                <Reveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-left">
                        <div className="w-full md:w-auto">
                            <SectionTag>05. Sensitivität</SectionTag>
                            <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] mt-8">
                                Investment <br />
                                <span className="text-[#C5A028] italic">Controls</span>
                            </h2>
                        </div>
                        <div className="max-w-xl md:pl-10 md:border-l border-white/10 w-full md:w-auto flex flex-col items-start">
                            <p className="text-white/55 text-lg leading-relaxed mb-8">
                                Simulieren Sie verschiedene Marktszenarien in Echtzeit. Überprüfen Sie die Robustheit des Modells gegenüber Kostensteigerungen oder Zinsänderungen.
                            </p>
                            <button 
                                onClick={reset}
                                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group"
                            >
                                <RotateCcw className="w-3.5 h-3.5 text-[#C5A028] group-hover:rotate-180 transition-transform duration-500" />
                                <span className="text-[10px] uppercase tracking-widest text-white font-bold">Standardwerte</span>
                            </button>
                        </div>
                    </div>
                </Reveal>

                {/* SENSITIVITY STAGE */}
                <Stage>
                    <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                        
                        {/* Column 1: Controls (Span 5) */}
                        <div className="lg:col-span-5 p-8 md:p-12 space-y-12 bg-white/[0.01]">
                            <div className="flex items-center gap-4">
                                <Sliders className="w-5 h-5 text-[#C5A028]" />
                                <h3 className="text-xl font-serif text-white">Parameter-Anpassung</h3>
                            </div>

                            <div className="space-y-10">
                                <ControlSlider 
                                    label="Ø Verkaufspreis (Wohnen)" 
                                    value={salesPrice} min={4500} max={8500} step={50} unit="€/m²" 
                                    onChange={setSalesPrice} defaultValue={6500}
                                />
                                <ControlSlider 
                                    label="Ø Baukosten (KG 300+400)" 
                                    value={buildCost} min={2200} max={3800} step={25} unit="€/m²" 
                                    onChange={setBuildCost} defaultValue={2800}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <ControlSlider 
                                        label="Eigenkapital" 
                                        value={equity} min={10} max={60} step={5} unit="%" 
                                        onChange={setEquity} defaultValue={30}
                                    />
                                    <ControlSlider 
                                        label="Zinssatz (p.a.)" 
                                        value={interest} min={1.5} max={7.5} step={0.1} unit="%" 
                                        onChange={setInterest} defaultValue={3.5}
                                    />
                                </div>
                            </div>

                            <div className="pt-8 flex items-start gap-4 border-t border-white/5">
                                <AlertCircle className="w-4 h-4 text-white/20 mt-1" />
                                <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-wider">
                                    Die Simulation basiert auf einem vereinfachten Finanzierungsmodell und dient der ersten Rendite-Indikation.
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Dashboard (Span 7) */}
                        <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
                            
                            {/* Dashboard Top: KPIs */}
                            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/[0.03]">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-bold mb-4">Projekt-EBT</p>
                                    <div className={`text-5xl font-serif tracking-tighter transition-colors ${financials.ebt > 0 ? 'text-white' : 'text-red-500'}`}>
                                        {(financials.ebt / 1000000).toFixed(2)} <span className="text-2xl">Mio. €</span>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-green-500/50" />
                                        <span className="text-xs text-white/40">GKI: {(financials.totalInvest / 1000000).toFixed(2)} Mio. €</span>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col justify-end items-start md:items-end">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-bold mb-4">Marge (EBT/GKI)</p>
                                    <div className="text-7xl font-serif text-white leading-none tracking-tighter">
                                        {financials.margin.toFixed(1)}<span className="text-3xl ml-1">%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Bottom: Visual Break-Even */}
                            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center bg-[#C5A028]/5 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
                                
                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-10">
                                        <div className="flex items-center gap-4">
                                            <Target className="w-5 h-5 text-[#C5A028]" />
                                            <h4 className="text-xl font-serif text-white">Break-Even Point</h4>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Puffer</span>
                                            <span className="text-lg font-mono text-[#C5A028]">+ {(salesPrice - financials.breakEven).toLocaleString('de-DE', {maximumFractionDigits:0})} €/m²</span>
                                        </div>
                                    </div>

                                    {/* VISUAL METER */}
                                    <div className="relative h-20 w-full bg-black/40 border border-white/5 rounded-2xl flex items-center px-6 overflow-hidden">
                                        {/* Ruler lines */}
                                        {[4000, 5000, 6000, 7000, 8000].map(val => (
                                            <div key={val} className="absolute bottom-0 h-2 w-px bg-white/10" style={{ left: `${((val-4000)/4500)*100}%` }}>
                                                <span className="absolute bottom-4 -translate-x-1/2 text-[8px] font-mono text-white/20">{val/1000}k</span>
                                            </div>
                                        ))}

                                        {/* BEP Line */}
                                        <div 
                                            className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-20 shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-700"
                                            style={{ left: `${((financials.breakEven-4000)/4500)*100}%` }}
                                        >
                                            <div className="absolute bottom-full mb-3 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-[8px] font-bold uppercase rounded">BEP</div>
                                        </div>

                                        {/* Current Price Line */}
                                        <div 
                                            className="absolute top-0 bottom-0 w-1 bg-[#C5A028] z-30 shadow-[0_0_20px_rgba(197,160,40,0.8)] transition-all duration-700"
                                            style={{ left: `${((salesPrice-4000)/4500)*100}%` }}
                                        >
                                            <div className="absolute top-full mt-3 -translate-x-1/2 text-[#C5A028] text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">Marktpreis</div>
                                        </div>

                                        {/* Safety Zone */}
                                        <div 
                                            className="absolute top-0 bottom-0 bg-[#C5A028]/10 transition-all duration-700"
                                            style={{ 
                                                left: `${((financials.breakEven-4000)/4500)*100}%`,
                                                width: `${((salesPrice - financials.breakEven)/4500)*100}%`
                                            }}
                                        />
                                    </div>

                                    <div className="mt-12 flex items-center gap-4 text-xs">
                                        <ShieldCheck className="w-5 h-5 text-[#C5A028]" />
                                        <p className="text-white/60">
                                            Sicherheitspuffer: Das Projekt bleibt bis zu einem Preisrückgang auf <span className="text-white font-mono">{financials.breakEven.toLocaleString('de-DE', {maximumFractionDigits:0})} €/m²</span> profitabel.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Stage>

                {/* NEW: Image Grid - Small Left / Big Right */}
                <Reveal delay={200} className="mt-12 md:mt-24">
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-4 md:pb-0 md:grid md:grid-cols-12 md:gap-6 md:mx-0 md:px-0 no-scrollbar">
                        {/* Image Left - Smaller (Span 4) */}
                        <div className="min-w-[85vw] md:min-w-0 snap-center md:col-span-4 relative group overflow-hidden rounded-[32px] border border-white/10 shadow-2xl h-[200px] md:h-[300px]">
                            <img 
                                src="https://whhy.de/wp-content/uploads/2026/01/7.png" 
                                alt="Detail Ansicht" 
                                className="w-full h-full object-cover transition-transform duration-[20s] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                        </div>

                        {/* Image Right - Bigger (Span 8) */}
                        <div className="min-w-[85vw] md:min-w-0 snap-center md:col-span-8 relative group overflow-hidden rounded-[32px] border border-white/10 shadow-2xl h-[200px] md:h-[300px]">
                            <img 
                                src="https://whhy.de/wp-content/uploads/2026/01/2.png" 
                                alt="Gesamtansicht" 
                                className="w-full h-full object-cover transition-transform duration-[20s] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default Sensitivity;
