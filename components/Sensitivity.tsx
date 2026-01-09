
import React, { useState, useMemo } from 'react';
import { SectionTag, UnifiedCard } from './ui/Shared';
import { TrendingDown, TrendingUp, ShieldCheck, AlertTriangle, Zap, RotateCcw, Sliders } from 'lucide-react';

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
    const isDefault = value === defaultValue;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-end">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{label}</label>
                <div className={`font-mono text-sm ${isDefault ? 'text-white' : 'text-[#D4AF37]'} transition-colors`}>
                    {value.toLocaleString()} <span className="text-[10px] opacity-60">{unit}</span>
                </div>
            </div>
            <div className="relative h-2 bg-white/10 rounded-full group cursor-pointer">
                {/* Track */}
                <div 
                    className="absolute top-0 bottom-0 left-0 bg-[#D4AF37] rounded-full opacity-30 group-hover:opacity-100 transition-opacity" 
                    style={{ width: `${percentage}%` }}
                />
                {/* Thumb */}
                <div 
                     className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg transition-transform hover:scale-125 z-10"
                     style={{ left: `calc(${percentage}% - 8px)` }}
                />
                <input 
                    type="range" 
                    min={min} max={max} step={step} 
                    value={value} 
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer z-20"
                />
            </div>
        </div>
    );
};

const Sensitivity: React.FC = () => {
    // --- STATE ---
    // Base assumptions
    const AREA = 3250; // m²
    const TG_PRICE_TOTAL = 1200000;
    const LAND_COST = 4250000;
    const PURCHASE_COSTS = 425000;
    const SPECIAL_CIVIL = 450000;
    const SOFT_COSTS = 1719000;

    // Controls - Aligned defaults to the main memo (6500 price, 30% equity)
    const [salesPrice, setSalesPrice] = useState(6500); // €/m²
    const [buildCost, setBuildCost] = useState(2800); // €/m²
    const [interestRate, setInterestRate] = useState(3.5); // %
    const [equityShare, setEquityShare] = useState(30); // %

    // --- CALCULATIONS ---
    const financials = useMemo(() => {
        // Revenue
        const revenueLiving = AREA * salesPrice;
        const revenueTotal = revenueLiving + TG_PRICE_TOTAL;

        // Costs
        const buildCostTotal = AREA * buildCost; // Simplified KG300+400 approx
        const hardCosts = LAND_COST + PURCHASE_COSTS + SPECIAL_CIVIL + buildCostTotal + SOFT_COSTS;
        
        // Financing
        const loanAmount = hardCosts * (1 - equityShare / 100);
        // Approx interest for project duration (simplified 1.5 years avg draw)
        const interestCost = loanAmount * (interestRate / 100) * 1.5; 

        const totalInvest = hardCosts + interestCost;
        const ebt = revenueTotal - totalInvest;
        const margin = (ebt / totalInvest) * 100;

        // Break Even (What sales price makes EBT 0?)
        // 0 = (BreakEvenPrice * AREA + TG) - (NonBuildCosts + (BreakEvenPrice logic complexity ignored, simplified to fixed costs))
        // Simplification: TotalCost / Area (minus TG revenue offset)
        const breakEvenPrice = (totalInvest - TG_PRICE_TOTAL) / AREA;

        return {
            revenueTotal,
            buildCostTotal,
            interestCost,
            totalInvest,
            ebt,
            margin,
            breakEvenPrice
        };
    }, [salesPrice, buildCost, interestRate, equityShare]);

    const resetDefaults = () => {
        setSalesPrice(6500);
        setBuildCost(2800);
        setInterestRate(3.5);
        setEquityShare(30);
    };

  return (
    <section id="sensitivity" className="relative py-20 md:py-32">
        
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-10 md:mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-3xl">
                <SectionTag>07. Sensitivität</SectionTag>
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-4 md:mt-6 mb-4">
                Investment <span className="text-[#D4AF37]">Controls</span>
                </h2>
                <p className="text-base md:text-lg text-text-muted font-light leading-relaxed max-w-xl">
                    Simulieren Sie verschiedene Marktszenarien in Echtzeit.
                    Überprüfen Sie die Robustheit des Modells gegenüber Kostensteigerungen oder Zinsänderungen.
                </p>
            </div>
            
            <button 
                onClick={resetDefaults}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 text-[10px] uppercase tracking-widest text-text-muted hover:text-white transition-all"
            >
                <RotateCcw className="w-3 h-3" />
                Reset Defaults
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT: CONTROLS */}
            <div className="lg:col-span-5 h-full">
                <UnifiedCard className="h-full bg-gradient-to-br from-[#0A0A0A] to-[#111]">
                    <div className="flex items-center gap-3 mb-8">
                        <Sliders className="w-5 h-5 text-[#D4AF37]" />
                        <h3 className="text-xl font-serif text-white">Parameter</h3>
                    </div>

                    <div className="space-y-10">
                        <ControlSlider 
                            label="Ø Verkaufspreis (Wohnen)" 
                            value={salesPrice} min={5000} max={8500} step={50} unit="€/m²" 
                            onChange={setSalesPrice} defaultValue={6500}
                        />
                        <ControlSlider 
                            label="Ø Baukosten (KG 300+400)" 
                            value={buildCost} min={2200} max={4000} step={50} unit="€/m²" 
                            onChange={setBuildCost} defaultValue={2800}
                        />
                        <ControlSlider 
                            label="Zinssatz (p.a.)" 
                            value={interestRate} min={1.0} max={7.0} step={0.1} unit="%" 
                            onChange={setInterestRate} defaultValue={3.5}
                        />
                        <ControlSlider 
                            label="Eigenkapitalquote" 
                            value={equityShare} min={0} max={100} step={5} unit="%" 
                            onChange={setEquityShare} defaultValue={30}
                        />
                    </div>

                    <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
                        <AlertTriangle className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
                        <p className="text-xs text-text-muted leading-relaxed font-light">
                            Diese Simulation dient rein informativen Zwecken. Baukosten und Erlöse sind gewichtete Durchschnitte.
                            Finanzierungskosten sind grobe Schätzungen basierend auf der Projektlaufzeit.
                        </p>
                    </div>
                </UnifiedCard>
            </div>

            {/* RIGHT: LIVE DASHBOARD */}
            <div className="lg:col-span-7 h-full flex flex-col gap-6">
                
                {/* KPI CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* ROI CARD */}
                    <div className="relative group rounded-3xl p-8 bg-[#D4AF37] text-black overflow-hidden shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] transition-transform hover:-translate-y-1">
                        <div className="absolute top-0 right-0 p-6 opacity-20">
                            <TrendingUp className="w-12 h-12" />
                        </div>
                        <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2 opacity-70">Projektrendite (EBT/GKI)</p>
                        <div className="text-5xl md:text-6xl font-serif font-bold tracking-tighter mb-4">
                            {financials.margin.toFixed(1)} <span className="text-3xl opacity-60">%</span>
                        </div>
                        <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-black/80 transition-all duration-500"
                                style={{ width: `${Math.min(100, Math.max(0, financials.margin * 2))}%` }}
                            />
                        </div>
                    </div>

                    {/* EBT CARD */}
                    <UnifiedCard className="relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <ShieldCheck className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted mb-2">Gesamtgewinn (EBT)</p>
                        <div className={`text-3xl md:text-4xl font-serif font-bold tracking-tight mb-2 ${financials.ebt > 0 ? 'text-white' : 'text-red-400'}`}>
                            {(financials.ebt / 1000000).toFixed(2)} Mio. €
                        </div>
                        <p className="text-xs text-text-muted mb-6">Invest: {(financials.totalInvest / 1000000).toFixed(2)} Mio. €</p>

                        <div className="mt-auto pt-6 border-t border-white/5">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] uppercase tracking-widest text-text-muted">Break-Even (Verkauf)</span>
                                <span className="font-mono text-sm text-[#D4AF37]">{(financials.breakEvenPrice).toLocaleString(undefined, {maximumFractionDigits: 0})} €/m²</span>
                            </div>
                        </div>
                    </UnifiedCard>
                </div>

                {/* TORNADO / VISUALIZATION */}
                <UnifiedCard className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-lg font-serif text-white">Break-Even Analyse</h4>
                        <span className="text-xs text-text-muted font-mono">Puffer zum Ziel: {Math.max(0, salesPrice - financials.breakEvenPrice).toLocaleString(undefined, {maximumFractionDigits: 0})} €/m²</span>
                    </div>
                    
                    {/* Visual Bar */}
                    <div className="relative h-16 w-full bg-white/5 rounded-xl flex items-center px-4 overflow-hidden border border-white/5">
                        {/* Break Even Line */}
                        <div 
                            className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-20 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                            style={{ left: `${(financials.breakEvenPrice / 10000) * 100}%` }}
                        >
                            <div className="absolute bottom-full mb-2 -translate-x-1/2 bg-red-500 text-white text-[9px] font-bold px-2 py-1 rounded">BEP</div>
                        </div>

                        {/* Current Price Marker */}
                        <div 
                            className="absolute top-3 bottom-3 w-1 bg-[#D4AF37] z-20 shadow-[0_0_15px_rgba(197,160,40,0.8)] rounded-full transition-all duration-500"
                            style={{ left: `${(salesPrice / 10000) * 100}%` }}
                        >
                            <div className="absolute top-full mt-2 -translate-x-1/2 text-[#D4AF37] text-[9px] font-bold uppercase tracking-wider whitespace-nowrap">
                                Aktueller Preis
                            </div>
                        </div>

                        {/* Safety Zone */}
                        <div 
                            className="absolute top-0 bottom-0 bg-gradient-to-r from-transparent to-green-500/10 z-10 transition-all duration-500"
                            style={{ 
                                left: `${(financials.breakEvenPrice / 10000) * 100}%`, 
                                right: `${100 - (salesPrice / 10000) * 100}%` 
                            }}
                        />
                        
                        {/* Ruler Lines */}
                        {[2000, 4000, 6000, 8000, 10000].map(val => (
                            <div key={val} className="absolute h-2 w-px bg-white/20 bottom-0" style={{ left: `${(val/10000)*100}%` }}>
                                <span className="absolute bottom-3 -translate-x-1/2 text-[8px] text-white/30 font-mono">{val/1000}k</span>
                            </div>
                        ))}
                    </div>
                </UnifiedCard>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Sensitivity;
