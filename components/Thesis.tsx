
import React from 'react';
import { SectionTag, UnifiedCard, Reveal, MobileSwiper } from './ui/Shared';
import { MapPin, ShieldCheck, TrendingUp, Layers } from 'lucide-react';

const ThesisPoint: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  delay: number;
}> = ({ icon, title, desc, delay }) => (
  <Reveal delay={delay} className="h-full">
    <div className="group relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C5A028]/50 hover:bg-white/[0.05] transition-all duration-500 flex flex-col items-start text-left hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-[#C5A028]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
      
      <div className="relative z-10 w-full">
        <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#C5A028] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-[#C5A028]/20">
          {icon}
        </div>
        
        <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-[#C5A028] transition-colors">{title}</h3>
        <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  </Reveal>
);

const Thesis: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 border-b border-white/5 bg-[#050505]">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A028]/30 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="mb-12 md:mb-24 text-center max-w-4xl mx-auto">
            <Reveal>
                <SectionTag className="justify-center">Executive Summary</SectionTag>
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-6 mb-8 leading-tight">
                Warum <span className="text-[#C5A028] italic">dieses</span> Investment?
                </h2>
                <p className="text-text-muted text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Die Investment-Highlights auf einen Blick. Eine Kombination aus Standortqualität, 
                Planungssicherheit und wirtschaftlicher Robustheit.
                </p>
            </Reveal>
        </div>

        {/* SWIPER FOR MOBILE */}
        <MobileSwiper className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ThesisPoint 
              delay={0}
              icon={<MapPin className="w-6 h-6" />}
              title="Prime Location"
              desc="Meerbusch-Büderich zählt zu den begehrtesten Wohnlagen Deutschlands. Hohes Preisniveau, stabile Wertentwicklung und extrem begrenztes Angebot."
            />

            <ThesisPoint 
              delay={100}
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Planungssicherheit"
              desc="Rechtsgültiger Bauvorbescheid (verlängert bis 12/2026) und positives AK34-Votum. Kein B-Plan Risiko, Realisierung direkt nach §34 BauGB."
            />

            <ThesisPoint 
              delay={200}
              icon={<Layers className="w-6 h-6" />}
              title="Hybrider Produktmix"
              desc="Diversifizierung durch 9 DHH, 7 RH und 16 ETW. Spricht sowohl solvente Eigennutzer (Häuser) als auch Kapitalanleger (Wohnungen) an."
            />

            <ThesisPoint 
              delay={300}
              icon={<TrendingUp className="w-6 h-6" />}
              title="Performance"
              desc="Konservativ kalkuliert mit ~34,9% Projekt-Rendite und einem Risikopuffer in den Baukosten. Global-Exit oder Einzelvertrieb möglich."
            />
        </MobileSwiper>
      </div>
    </section>
  );
};

export default Thesis;
