import React from 'react';
import { SectionTag } from './ui/Shared';

const Market: React.FC = () => {
  return (
    <section id="market" className="relative py-12 md:py-24">
      {/* Subtle Background Elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none opacity-50" />
      
      {/* Header */}
      <div className="mb-16 relative z-10">
        <SectionTag>07. Markt & Vertrieb</SectionTag>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Markt<span className="text-[#D4AF37]">strategie</span>
        </h2>
        <p className="text-lg text-text-muted max-w-2xl font-light leading-relaxed">
          Zielgerichtete Ansprache solventer Käuferschichten und eine Preisstrategie, 
          die die hohe Standortqualität in Meerbusch-Büderich widerspiegelt.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* LEFT CARD: Target Group & Product Mix (Span 7) */}
        <div className="lg:col-span-7 bg-[#121212] border border-white/10 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group transition-all duration-500 hover:border-[#D4AF37]/30">
           {/* Ambient Light */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" />
           
           <h3 className="text-2xl font-serif font-semibold text-white mb-8 relative z-10">Zielgruppe & Produkt</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Persona 1 */}
              <div className="space-y-3">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                 </div>
                 <h4 className="text-white font-medium text-lg">Eigennutzer</h4>
                 <p className="text-text-muted text-sm leading-relaxed">
                    Familien und Paare, die langlebige Neubauqualität in etablierter Lage suchen. Fokus auf <span className="text-white/80">DHH & RH</span>.
                 </p>
                 <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-text-muted">Bonitätsstark</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-text-muted">Qualitätsbewusst</span>
                 </div>
              </div>

              {/* Persona 2 */}
              <div className="space-y-3">
                 <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 text-[#D4AF37] mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                 </div>
                 <h4 className="text-white font-medium text-lg">Kapitalanleger</h4>
                 <p className="text-text-muted text-sm leading-relaxed">
                    Investoren mit Fokus auf Wertsicherung und Vermietbarkeit. Fokus auf effiziente <span className="text-white/80">Eigentumswohnungen</span>.
                 </p>
                 <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-text-muted">Inflationsschutz</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-wider text-text-muted">Rendite</span>
                 </div>
              </div>
           </div>

           <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-text-muted">Produkt-Mix</span>
              <span className="text-white font-serif italic text-lg">"Hybrid aus Haus & Wohnung"</span>
           </div>
        </div>

        {/* RIGHT COLUMN (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* PRICING CARD */}
             <div className="bg-gradient-to-br from-[#161616] to-black border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)]" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-[0.2em] mb-4">Pricing Ansatz</p>
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">6.500</span>
                        <span className="text-2xl text-text-muted font-light">€/m²</span>
                    </div>
                    <p className="text-sm text-text-muted/60 mb-6 font-light">Durchschnittlicher Wohnflächenerlös</p>
                    
                    <div className="w-full h-px bg-white/10 mb-4" />
                    
                    <div className="flex justify-between w-full text-sm px-4">
                        <span className="text-text-muted">Tiefgarage</span>
                        <span className="text-white font-medium">30.000 € / Stpl.</span>
                    </div>
                </div>
             </div>

            {/* SALES PROCESS CARD */}
             <div className="bg-[#121212] border border-white/10 p-8 rounded-[2rem] flex-1 relative overflow-hidden flex flex-col justify-center">
                <h3 className="text-lg font-serif font-semibold text-white mb-6">Vertriebsphasen</h3>
                
                <div className="space-y-0 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-2 bottom-4 w-[1px] bg-white/10 z-0" />

                    {[
                        { title: "Vorvertrieb / Pre-Sale", desc: "Testen der Markt-Resonanz" },
                        { title: "Bauphase", desc: "Abverkauf nach Baufortschritt" },
                        { title: "Fertigstellung", desc: "Verkauf der Restanten (Upside)" }
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 flex items-start gap-4 pb-6 last:pb-0 group">
                            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                                <span className="text-xs font-bold">{i + 1}</span>
                            </div>
                            <div className="pt-1">
                                <p className="text-white text-sm font-medium group-hover:text-[#D4AF37] transition-colors">{step.title}</p>
                                <p className="text-xs text-text-muted mt-0.5">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Market;