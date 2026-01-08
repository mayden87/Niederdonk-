import React from 'react';
import { SectionTag, UnifiedCard } from './ui/Shared';

const Market: React.FC = () => {
  return (
    <section id="market" className="relative py-20 md:py-32">
      
      {/* Header */}
      <div className="mb-10 md:mb-16 relative z-10">
        <SectionTag>08. Markt & Vertrieb</SectionTag>
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-4 md:mt-6 mb-4 md:mb-6">
          Markt<span className="text-[#D4AF37]">strategie</span>
        </h2>
        <p className="text-base text-text-muted max-w-2xl font-light leading-7">
          Zielgerichtete Ansprache solventer Käuferschichten und eine Preisstrategie, 
          die die hohe Standortqualität in Meerbusch-Büderich widerspiegelt.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* LEFT CARD: Target Group & Product Mix (Span 7) */}
        <div className="lg:col-span-7">
           <UnifiedCard>
               <h3 className="text-2xl font-serif text-white mb-10">Zielgruppe & Produkt</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Persona 1 */}
                  <div className="space-y-4">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                     </div>
                     <h4 className="text-white font-medium text-lg">Eigennutzer</h4>
                     <p className="text-text-muted text-sm leading-relaxed font-light">
                        Familien und Paare, die langlebige Neubauqualität in etablierter Lage suchen. Fokus auf <span className="text-white/80 font-medium">DHH & RH</span>.
                     </p>
                     <div className="flex gap-2 flex-wrap pt-2">
                        <span className="px-3 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-text-muted border border-white/5">Bonitätsstark</span>
                        <span className="px-3 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-text-muted border border-white/5">Qualitätsbewusst</span>
                     </div>
                  </div>

                  {/* Persona 2 */}
                  <div className="space-y-4">
                     <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 text-[#D4AF37] mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                     </div>
                     <h4 className="text-white font-medium text-lg">Kapitalanleger</h4>
                     <p className="text-text-muted text-sm leading-relaxed font-light">
                        Investoren mit Fokus auf Wertsicherung und Vermietbarkeit. Fokus auf effiziente <span className="text-white/80 font-medium">Eigentumswohnungen</span>.
                     </p>
                     <div className="flex gap-2 flex-wrap pt-2">
                        <span className="px-3 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-text-muted border border-white/5">Inflationsschutz</span>
                        <span className="px-3 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-text-muted border border-white/5">Rendite</span>
                     </div>
                  </div>
               </div>

               <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-text-muted">Produkt-Mix</span>
                  <span className="text-white font-serif italic text-lg">"Hybrid aus Haus & Wohnung"</span>
               </div>
           </UnifiedCard>
        </div>

        {/* RIGHT COLUMN (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* PRICING CARD - Updated to Brighter Glossy Glass */}
             <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] p-10 rounded-3xl relative overflow-hidden group hover:border-white/30 hover:bg-white/[0.05] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_50%)]" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] mb-6">Pricing Ansatz</p>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-6xl font-serif font-bold text-white tracking-tight">6.500</span>
                        <span className="text-xl text-text-muted font-light">€/m²</span>
                    </div>
                    <p className="text-sm text-text-muted/60 mb-8 font-light">Durchschnittlicher Wohnflächenerlös</p>
                    
                    <div className="w-full h-px bg-white/5 mb-6" />
                    
                    <div className="flex justify-between w-full text-sm px-2">
                        <span className="text-text-muted font-light">Tiefgarage</span>
                        <span className="text-white font-medium">30.000 € / Stpl.</span>
                    </div>
                </div>
             </div>

            {/* SALES PROCESS CARD */}
             <UnifiedCard className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-serif font-medium text-white mb-8">Vertriebsphasen</h3>
                
                <div className="space-y-0 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-2 bottom-4 w-[1px] bg-white/10 z-0" />

                    {[
                        { title: "Vorvertrieb / Pre-Sale", desc: "Testen der Markt-Resonanz" },
                        { title: "Bauphase", desc: "Abverkauf nach Baufortschritt" },
                        { title: "Fertigstellung", desc: "Verkauf der Restanten (Upside)" }
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 flex items-start gap-4 pb-6 last:pb-0 group">
                            <div className="w-10 h-10 rounded-full bg-[#161616] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                                <span className="text-xs font-bold font-mono">{i + 1}</span>
                            </div>
                            <div className="pt-2">
                                <p className="text-white text-sm font-medium group-hover:text-[#D4AF37] transition-colors">{step.title}</p>
                                <p className="text-xs text-text-muted mt-0.5">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </UnifiedCard>
        </div>
      </div>
    </section>
  );
};

export default Market;