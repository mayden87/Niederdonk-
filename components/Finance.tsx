import React from 'react';
import { SectionTag, PremiumCard } from './ui/Shared';

// Helper to parse currency strings for calculation
const parseCurrency = (str: string) => {
  return parseFloat(str.replace(/\./g, '').replace(' €', '').replace(',', '.'));
};

const FinanceRow: React.FC<{ 
  label: string; 
  value: string; 
  subLabel?: string;
  highlight?: boolean;
  totalForBar?: number;
}> = ({ label, value, subLabel, highlight = false, totalForBar }) => {
  const numericValue = parseCurrency(value);
  const percentage = totalForBar ? Math.min(100, (numericValue / totalForBar) * 100) : 0;

  return (
    <div className={`group relative py-4 ${highlight ? '' : 'border-b border-white/5'}`}>
      <div className="flex justify-between items-end relative z-10">
        <div>
          <p className={`${highlight ? 'text-white font-bold uppercase tracking-widest text-sm' : 'text-text-muted text-sm group-hover:text-white/80 transition-colors'}`}>
            {label}
          </p>
          {subLabel && <p className="text-[10px] text-text-muted/50 uppercase tracking-wider mt-1">{subLabel}</p>}
        </div>
        <div className="text-right">
          <p className={`${highlight ? 'text-2xl font-serif text-accent font-bold' : 'text-white font-medium tabular-nums'}`}>
            {value}
          </p>
        </div>
      </div>
      
      {/* Visual Data Bar */}
      {totalForBar && !highlight && (
        <div className="mt-3 h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent/40 group-hover:bg-accent/80 transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(212,175,55,0.3)]"
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
};

const Finance: React.FC = () => {
  const GKI_TOTAL = 16544000;

  return (
    <section id="finance" className="relative py-12">
      <div className="mb-16">
        <SectionTag>05. Kalkulation</SectionTag>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Wirtschaftlichkeits<span className="text-accent">rechnung</span>
        </h2>
        <p className="text-lg text-text-muted max-w-2xl font-light leading-relaxed">
          Transparente Aufschlüsselung der Investitionskosten und Ertragserwartungen. 
          Eine solide Basis für nachhaltigen Wertzuwachs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* LEFT COLUMN: Investitionskosten (Detailed Breakdown) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#121212] border border-white/10 p-8 md:p-10 hover:border-accent/30 transition-colors duration-500 shadow-2xl">
             {/* Subtle Glow Effect */}
             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
             
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-serif font-semibold text-white">Investitionskosten</h3>
                <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs text-text-muted uppercase tracking-wider font-medium">
                  Basis: 2.800 €/m²
                </div>
             </div>

             <div className="space-y-2">
                <FinanceRow label="Grundstückskaufpreis" subLabel="ca. 1.044 €/m² BGF" value="4.250.000 €" totalForBar={GKI_TOTAL} />
                <FinanceRow label="Erwerbsnebenkosten" subLabel="Notar, Grunderwerbsteuer (ca. 10%)" value="425.000 €" totalForBar={GKI_TOTAL} />
                <FinanceRow label="Baukosten" subLabel="KG 300 + 400" value="9.100.000 €" totalForBar={GKI_TOTAL} />
                <FinanceRow label="Spezialtiefbau" subLabel="Wasserhaltung / Unterfangung" value="450.000 €" totalForBar={GKI_TOTAL} />
                <FinanceRow label="Baunebenkosten & Außenanlagen" subLabel="Planung, Gutachten (ca. 18%)" value="1.719.000 €" totalForBar={GKI_TOTAL} />
                <FinanceRow label="Finanzierungskosten" subLabel="Zinsen, Gebühren" value="600.000 €" totalForBar={GKI_TOTAL} />
                
                <div className="pt-8 mt-4 border-t border-white/10">
                   <div className="flex flex-col md:flex-row justify-between items-center p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 group hover:border-accent/20 transition-all">
                      <span className="uppercase text-xs font-bold tracking-[0.2em] text-white mb-2 md:mb-0">Gesamtinvestition (GKI)</span>
                      <span className="text-3xl font-bold text-white tabular-nums group-hover:text-accent transition-colors">16.544.000 €</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Revenue & Profit (High Impact) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Revenue Card */}
          <PremiumCard className="p-8 rounded-3xl flex-1 flex flex-col justify-center relative overflow-hidden bg-[#161616]">
             <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 blur-[60px] rounded-full" />
             
             <h3 className="text-xl font-serif font-semibold text-white mb-8 flex justify-between items-center relative z-10">
                <span>Ertragserwartung</span>
                <span className="px-2 py-1 rounded bg-white/10 text-[10px] font-sans font-medium text-white/70 uppercase tracking-wider">VK: 6.500 €/m²</span>
             </h3>

             <div className="space-y-4 mb-10 relative z-10">
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4 group">
                   <span className="text-text-muted group-hover:text-white transition-colors">Wohnflächen (3.250 m²)</span>
                   <span className="text-white font-medium">21.125.000 €</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4 group">
                   <span className="text-text-muted group-hover:text-white transition-colors">Stellplätze (TG)</span>
                   <span className="text-white font-medium">1.200.000 €</span>
                </div>
             </div>

             <div className="mt-auto relative z-10">
                <p className="text-xs uppercase tracking-widest text-accent mb-2">Gesamterlös (Exit)</p>
                <p className="text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-lg">22.325.000 €</p>
             </div>
          </PremiumCard>

          {/* PROFIT GOLD CARD */}
          <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#D4AF37] via-[#b8952b] to-[#8a6e15] relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(212,175,55,0.3)] group transform transition-all duration-500 hover:-translate-y-1">
             {/* Abstract Texture */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white_0%,transparent_60%)]" />
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
             
             <div className="relative z-10 text-black">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                   <div>
                      <p className="uppercase text-xs font-bold tracking-[0.2em] mb-2 opacity-70">Projektgewinn (EBT)</p>
                      <p className="text-4xl md:text-5xl font-serif font-bold tracking-tight">5.781.000 €</p>
                   </div>
                   <div className="text-left sm:text-right bg-black/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                      <p className="uppercase text-[10px] font-bold tracking-wider opacity-60">Marge</p>
                      <p className="text-xl font-bold">25,9%</p>
                   </div>
                </div>

                <div className="w-full h-px bg-black/10 my-6" />

                <div className="flex items-end justify-between">
                   <div className="flex flex-col">
                      <span className="uppercase text-xs font-bold tracking-[0.2em] opacity-70 mb-1">Rendite</span>
                      <span className="text-[10px] opacity-50 uppercase tracking-widest">(EBT / GKI)</span>
                   </div>
                   <span className="text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-none tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-right drop-shadow-md">
                      34,9<span className="text-3xl md:text-4xl align-top opacity-60 ml-1">%</span>
                   </span>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Visional Image Strip */}
      <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
         <img
          src="https://whhy.de/wp-content/uploads/2026/01/4.png"
          alt="Exklusives Wohnen"
          className="w-full h-full object-cover transition-transform duration-[3s] ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/20 to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
           <div className="w-12 h-1 bg-accent mb-6" />
           <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Vision & Wert</p>
           <p className="text-2xl md:text-4xl font-serif text-white italic leading-tight drop-shadow-xl">
              "Exklusives Wohngefühl in jeder Facette. Eine Investition, die Bestand hat."
           </p>
        </div>
      </div>
    </section>
  );
};

export default Finance;
