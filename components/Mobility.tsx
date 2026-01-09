
import React from 'react';
import { SectionTag, UnifiedCard, MetricRow, SectionBackground, MobileSwiper } from './ui/Shared';

const Mobility: React.FC = () => {
  return (
    <section id="mobility" className="py-20 md:py-32 relative">
      
      {/* ATMOSPHERIC BACKGROUND - Motion / Traffic */}
      <SectionBackground 
         src="https://images.unsplash.com/photo-1495576775051-8af0bd64529c?q=80&w=2000&auto=format&fit=crop"
         opacity={0.3} 
         color="from-[#050505] via-[#0a0f14]/50 to-[#050505]" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-10 md:mb-16">
            <SectionTag>03. Städtebau & Mobilität</SectionTag>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-4">Konzept mit Nachweis-Charakter</h2>
        </div>

        <MobileSwiper className="grid-cols-1 lg:grid-cols-3">
            <UnifiedCard>
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 6h11"/><path d="M10 12h11"/><path d="M10 18h11"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Erschließung & Rettung</h3>
            <p className="text-text-muted leading-7 text-sm font-light">
                Interner Wohnweg (ca. 6 m) für Anlieferung/Entsorgung/Notdienste. Feuerwehrrettung über ein
                Drehleiter-Konzept von außen; interne Bewegungsflächen sind entsprechend ausgelegt.
            </p>
            </UnifiedCard>

            <UnifiedCard>
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
            </div>
            <h3 className="text-2xl font-serif text-white mb-6">Stellplatznachweis</h3>
            <p className="text-text-muted text-xs mb-4">
                Durch Lagegunst (ÖPNV &lt; 350 m) wurde der Bedarf von <span className="text-white font-bold">56 auf 42</span> Stellplätze reduziert.
            </p>
            <div className="space-y-1">
                <MetricRow label="Pflichtstellplätze" value="42" />
                <MetricRow label="Realisiert in TG" value="40" />
                <MetricRow label="Ablöse (statt Bau)" value="2" />
                <MetricRow label="Besucherplätze (Zusätzlich)" value="+ 6" border={false} />
            </div>
            </UnifiedCard>

            <UnifiedCard>
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Ökologie & Wasser</h3>
            <p className="text-text-muted leading-7 text-sm font-light">
                Extensive Dachbegrünung der Staffelgeschosse zur Verbesserung des Mikroklimas und zur
                Regenwasserrückhaltung. E-Mobilitätsvorbereitung für alle Stellplätze.
            </p>
            </UnifiedCard>
        </MobileSwiper>
      </div>
    </section>
  );
};

export default Mobility;
