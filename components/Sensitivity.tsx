import React from 'react';
import { SectionTag } from './ui/Shared';
import { TrendingDown, TrendingUp, ShieldCheck, AlertTriangle, Zap } from 'lucide-react';

const ScenarioCard: React.FC<{
  title: string;
  subtitle: string;
  ebt: string;
  roi: string;
  delta?: string; // e.g. "-6.7%"
  isBasis?: boolean;
  type?: 'risk' | 'cost' | 'neutral';
}> = ({ title, subtitle, ebt, roi, delta, isBasis = false, type = 'neutral' }) => {
  // Determine colors based on type
  const accentColor = isBasis ? 'text-[#D4AF37]' : type === 'risk' ? 'text-orange-300' : 'text-blue-300';
  const barColor = isBasis ? 'bg-[#D4AF37]' : type === 'risk' ? 'bg-orange-400' : 'bg-blue-400';
  const glowColor = isBasis ? 'shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)]' : '';
  const borderColor = isBasis ? 'border-[#D4AF37]/40' : 'border-white/5';
  const bgClass = isBasis ? 'bg-[#121212]' : 'bg-[#121212]';

  // Parse ROI for bar width (max assumed 40%)
  const roiNum = parseFloat(roi.replace(',', '.').replace('%', ''));
  const barWidth = Math.min(100, (roiNum / 40) * 100);

  // EBT Bar calculation (max 7M)
  const ebtValue = parseFloat(ebt.replace(/\./g, '').replace(' €', ''));
  const ebtWidth = Math.min(100, (ebtValue / 7000000) * 100);

  return (
    <div className={`relative group p-6 md:p-8 rounded-2xl border ${borderColor} ${bgClass} transition-all duration-500 hover:border-white/20 ${glowColor} flex flex-col justify-between h-full`}>
      {/* Background Gradient for Basis */}
      {isBasis && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent opacity-100 rounded-2xl pointer-events-none" />
      )}

      {/* Header */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${isBasis ? 'bg-[#D4AF37] animate-pulse' : 'bg-white/20'}`}></span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isBasis ? 'text-[#D4AF37]' : 'text-text-muted'}`}>
                {title}
            </span>
          </div>
          <h4 className="text-white font-medium text-lg tracking-wide">{subtitle}</h4>
        </div>
        {delta && (
            <div className={`px-2 py-1 rounded text-[10px] font-bold bg-white/5 border border-white/5 ${type === 'risk' ? 'text-red-300' : 'text-white/60'}`}>
                {delta}
            </div>
        )}
      </div>

      {/* Metrics */}
      <div className="space-y-6 relative z-10 mt-auto">
        {/* EBT Metric */}
        <div>
           <div className="flex justify-between items-end mb-2">
             <span className="text-[10px] text-text-muted/60 font-bold uppercase tracking-wider">Ergebnis (EBT)</span>
             <span className="text-white/90 text-sm font-medium tabular-nums">{ebt}</span>
           </div>
           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div style={{ width: `${ebtWidth}%` }} className={`h-full rounded-full opacity-60 ${barColor} transition-all duration-1000`}></div>
           </div>
        </div>

        {/* ROI Metric - Main Highlight */}
        <div>
           <div className="flex justify-between items-end mb-2">
             <span className="text-[10px] text-text-muted/60 font-bold uppercase tracking-wider">Rendite (EBT/GKI)</span>
             <span className={`text-3xl font-serif font-bold ${accentColor} leading-none`}>{roi}</span>
           </div>
            {/* ROI Bar */}
           <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
              <div 
                style={{ width: `${barWidth}%` }} 
                className={`h-full ${barColor} transition-all duration-1000 ease-out relative`}
              >
                {/* Subtle highlight inside bar */}
                <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/50 shadow-[0_0_10px_white]"></div>
              </div>
              {/* Target Marker at 34.9% for non-basis cards */}
              {!isBasis && (
                 <div className="absolute top-0 bottom-0 w-0.5 bg-white/10 z-20" style={{ left: `${(34.9/40)*100}%` }} title="Basis-Referenz"></div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

const Sensitivity: React.FC = () => {
  return (
    <section id="sensitivity" className="py-12 md:py-24 relative">
        {/* Background Atmosphere - Removed overflow-hidden from section to prevent clipping shadows */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mb-16 max-w-4xl relative z-10">
        <SectionTag>06. Sensitivität</SectionTag>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Robustheits<span className="text-white/20">analyse</span>
        </h2>
        <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed max-w-2xl">
            Ein Stresstest des Geschäftsmodells belegt: Selbst bei signifikanten Marktschwankungen 
            (Kostensteigerung oder Erlösminderung) bleibt die Projektrendite im attraktiven zweistelligen Bereich.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 items-stretch">
        
        {/* COLUMN 1: BASIS & CONCLUSION */}
        <div className="flex flex-col gap-6 h-full">
            {/* Header Alignment Spacer */}
            <div className="flex items-center gap-2 mb-1 px-2 opacity-60 h-5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Basis-Referenz</span>
            </div>

            <div className="flex-1">
                <ScenarioCard 
                    title="Case 01: Ziel-Szenario" 
                    subtitle="Planungs-Basis" 
                    ebt="5.781.000 €" 
                    roi="34,9%" 
                    isBasis={true}
                />
            </div>
            
            {/* Key Takeaway Box */}
            <div className="flex-1 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm flex flex-col justify-center relative overflow-hidden group min-h-[220px]">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                 <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors" />

                <h5 className="text-white font-serif text-xl mb-4 relative z-10">Fazit & Bewertung</h5>
                <p className="text-sm text-text-muted leading-relaxed mb-6 relative z-10">
                    Das Projekt verfügt über einen außerordentlich hohen Sicherheitspuffer. 
                    Der Break-Even-Point liegt weit unterhalb aktueller Marktniveaus.
                </p>
                <div className="flex items-center gap-3 relative z-10 mt-auto">
                    <div className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Hohe Resilienz</span>
                </div>
            </div>
        </div>

        {/* COLUMN 2: REVENUE RISKS */}
        <div className="flex flex-col gap-6 h-full">
             <div className="flex items-center justify-between px-2 mb-1 opacity-60 h-5">
                <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-orange-300" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Marktrisiko: Erlöse</span>
                </div>
             </div>
            
            <div className="flex-1">
                <ScenarioCard 
                    title="Szenario: Markt-Korrektur I" 
                    subtitle="Verkaufspreise -5%" 
                    ebt="4.664.750 €" 
                    roi="28,2%" 
                    delta="- 6,7 %p"
                    type="risk"
                />
            </div>
            <div className="flex-1">
                <ScenarioCard 
                    title="Szenario: Markt-Korrektur II" 
                    subtitle="Verkaufspreise -10%" 
                    ebt="3.548.500 €" 
                    roi="21,4%" 
                    delta="- 13,5 %p"
                    type="risk"
                />
            </div>
        </div>

        {/* COLUMN 3: COST RISKS */}
         <div className="flex flex-col gap-6 h-full">
            <div className="flex items-center justify-between px-2 mb-1 opacity-60 h-5">
                <div className="flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4 text-blue-300" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Risiko: Baukosten</span>
                </div>
             </div>
            
            <div className="flex-1">
                <ScenarioCard 
                    title="Szenario: Kostensteigerung I" 
                    subtitle="GKI +5%" 
                    ebt="4.953.800 €" 
                    roi="28,5%" 
                    delta="- 6,4 %p"
                    type="cost"
                />
            </div>
            <div className="flex-1">
                <ScenarioCard 
                    title="Szenario: Kostensteigerung II" 
                    subtitle="GKI +10%" 
                    ebt="4.126.600 €" 
                    roi="22,7%" 
                    delta="- 12,2 %p"
                    type="cost"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Sensitivity;