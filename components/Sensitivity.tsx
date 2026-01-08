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
  const accentColor = isBasis ? 'text-[#D4AF37]' : type === 'risk' ? 'text-orange-200' : 'text-blue-200';
  const barColor = isBasis ? 'bg-[#D4AF37]' : type === 'risk' ? 'bg-orange-400' : 'bg-blue-400';
  const glowColor = isBasis ? 'shadow-[0_0_40px_-10px_rgba(212,175,55,0.15)]' : 'shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]';
  const borderColor = isBasis ? 'border-[#D4AF37]/30' : 'border-white/[0.15]';
  const bgClass = isBasis ? 'bg-[#D4AF37]/5' : 'bg-white/[0.03]';
  
  // GLASS STYLE UPDATE: Brighter, more blur
  const cardClasses = `relative group p-8 rounded-3xl border backdrop-blur-2xl transition-all duration-500 hover:border-white/30 ${bgClass} ${borderColor} ${glowColor} flex flex-col justify-between h-full`;

  // Parse ROI for bar width (max assumed 40%)
  const roiNum = parseFloat(roi.replace(',', '.').replace('%', ''));
  const barWidth = Math.min(100, (roiNum / 40) * 100);

  // EBT Bar calculation (max 7M)
  const ebtValue = parseFloat(ebt.replace(/\./g, '').replace(' €', ''));
  const ebtWidth = Math.min(100, (ebtValue / 7000000) * 100);

  return (
    <div className={cardClasses}>
      {/* Glossy Sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-3xl" />
      
      {/* Background Gradient for Basis */}
      {isBasis && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-100 rounded-3xl pointer-events-none" />
      )}

      {/* Header */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${isBasis ? 'bg-[#D4AF37] animate-pulse' : 'bg-white/20'}`}></span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isBasis ? 'text-[#D4AF37]' : 'text-text-muted'}`}>
                {title}
            </span>
          </div>
          <h4 className="text-white font-serif text-xl tracking-wide">{subtitle}</h4>
        </div>
        {delta && (
            <div className={`px-2 py-1 rounded text-[10px] font-bold bg-white/5 border border-white/5 ${type === 'risk' ? 'text-red-300' : 'text-white/60'}`}>
                {delta}
            </div>
        )}
      </div>

      {/* Metrics */}
      <div className="space-y-8 relative z-10 mt-auto">
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
    <section id="sensitivity" className="py-10 md:py-20 relative">
        
      <div className="mb-10 md:mb-20 max-w-4xl relative z-10">
        <SectionTag>06. Sensitivität</SectionTag>
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-4 md:mt-6 mb-4 md:mb-6">
          Robustheits<span className="text-white/20">analyse</span>
        </h2>
        <p className="text-base md:text-lg text-text-muted font-light leading-relaxed max-w-2xl">
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
            
            {/* Key Takeaway Box - Updated Glossy Style */}
            <div className="flex-1 p-8 rounded-3xl border border-white/[0.15] bg-white/[0.03] backdrop-blur-2xl flex flex-col justify-center relative overflow-hidden group min-h-[220px] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/[0.05] transition-colors">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <h5 className="text-white font-serif text-2xl mb-4 relative z-10">Fazit & Bewertung</h5>
                <p className="text-sm text-text-muted leading-relaxed font-light mb-6 relative z-10">
                    Das Projekt verfügt über einen außerordentlich hohen Sicherheitspuffer. 
                    Der Break-Even-Point liegt weit unterhalb aktueller Marktniveaus.
                </p>
                <div className="flex items-center gap-3 relative z-10 mt-auto">
                    <div className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">Hohe Resilienz</span>
                </div>
            </div>
        </div>

        {/* COLUMN 2: REVENUE RISKS */}
        <div className="flex flex-col gap-6 h-full">
             <div className="flex items-center justify-between px-2 mb-1 opacity-60 h-5">
                <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-orange-200" />
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
                     <AlertTriangle className="w-4 h-4 text-blue-200" />
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