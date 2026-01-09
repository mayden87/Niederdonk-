
import React from 'react';
import { SectionTag, SectionBackground } from './ui/Shared';
import { FileText, Lock, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* ATMOSPHERIC BACKGROUND - The Final "Grand" Image */}
      <SectionBackground 
         src="https://whhy.de/wp-content/uploads/2026/01/4.png" // Interior/Night shot
         opacity={0.4} 
         color="from-[#050505] via-[#050505]/80 to-[#050505]" // Heavy vignette to keep it readable
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Changed text-center to text-left md:text-center for mobile alignment */}
        <div className="text-left md:text-center mb-10 md:mb-20">
          <SectionTag className="mb-6 md:mx-auto">09. Angebotskonditionen</SectionTag>
          
          <h2 className="text-5xl md:text-7xl font-serif font-medium mb-4 md:mb-6 text-white pb-2 drop-shadow-2xl">
            Exklusiv Mandat
          </h2>
          
          <p className="text-text-muted max-w-2xl md:mx-auto text-lg font-light tracking-wide opacity-80 drop-shadow-md">
            Sichern Sie sich dieses Premium-Asset in Bestlage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-16">
          {/* Main Price Card - Brighter Glossy Style with more transparency */}
          <div className="md:col-span-2 relative group rounded-3xl overflow-hidden border border-white/[0.15] bg-black/[0.4] backdrop-blur-xl transition-all duration-500 hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:bg-black/[0.3]">
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
             
            <div className="relative p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 text-left z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 backdrop-blur-md mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_0_10px_rgba(212,175,55,0.5)]">Asset Deal</span>
                </div>
                <p className="text-white/80 text-[10px] uppercase tracking-widest font-bold shadow-black drop-shadow-md">Kaufpreis Grundstück</p>
                <h3 className="text-5xl md:text-8xl font-serif font-medium text-white tracking-tighter drop-shadow-2xl">
                  4.250.000 <span className="text-3xl md:text-6xl text-[#D4AF37] align-top">€</span>
                </h3>
              </div>

              {/* Decorative Divider */}
              <div className="hidden md:block w-px h-32 bg-white/20" />

              <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M5 13l4 4L19 7"/></svg>
                 </div>
                 <span className="text-white font-bold tracking-wide uppercase text-xs drop-shadow-md">Verfügbar</span>
              </div>
            </div>
          </div>

          {/* Courtage Card */}
          <div className="relative group rounded-3xl overflow-hidden border border-white/[0.15] bg-black/[0.4] backdrop-blur-xl transition-all duration-300 hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-black/[0.3]">
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
             {/* Left aligned on mobile, centered on desktop */}
             <div className="relative p-10 md:p-12 h-full flex flex-col justify-center items-start md:items-center text-left md:text-center z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-text-muted group-hover:text-accent transition-colors border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <span className="text-white/80 uppercase tracking-widest text-[10px] font-bold mb-4 drop-shadow-md">Maklercourtage</span>
                <div className="text-4xl md:text-5xl font-serif font-medium text-white mb-2 drop-shadow-xl">
                  3,0 <span className="text-2xl text-[#D4AF37]">%</span>
                </div>
                <p className="text-[10px] text-white/50 uppercase tracking-wide">zzgl. gesetzl. MwSt.</p>
             </div>
          </div>

          {/* Info Card */}
          <div className="relative group rounded-3xl overflow-hidden border border-white/[0.15] bg-black/[0.4] backdrop-blur-xl transition-all duration-300 hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-black/[0.3]">
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
             <div className="relative p-10 md:p-12 h-full flex flex-col justify-center z-10">
                <span className="text-white/80 uppercase tracking-widest text-[10px] font-bold mb-8 text-left flex items-center gap-2 justify-start drop-shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    Hinweise
                </span>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-sm text-white/70 font-light group-hover:text-white transition-colors">
                    <span className="w-8 h-[1px] bg-[#D4AF37]" />
                    <span className="drop-shadow-sm">Vertrauliches Exposé</span>
                  </li>
                   <li className="flex items-center gap-4 text-sm text-white/70 font-light group-hover:text-white transition-colors">
                    <span className="w-8 h-[1px] bg-[#D4AF37]" />
                    <span className="drop-shadow-sm">Kein öffentliches Angebot</span>
                  </li>
                   <li className="flex items-center gap-4 text-sm text-white/70 font-light group-hover:text-white transition-colors">
                    <span className="w-8 h-[1px] bg-[#D4AF37]" />
                    <span className="drop-shadow-sm">Irrtümer vorbehalten</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>

        {/* DATA ROOM SECTION */}
        <div className="mb-16 bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Lock className="w-32 h-32 text-white" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                    <h3 className="text-2xl font-serif text-white mb-2 drop-shadow-md">Digitaler Datenraum</h3>
                    <p className="text-sm text-white/70 max-w-md leading-relaxed">
                        Detaillierte Unterlagen (Bauvorbescheid, Protokolle, DWG-Pläne) stehen für qualifizierte Interessenten bereit.
                    </p>
                </div>
                
                <div className="w-full md:w-auto flex flex-col gap-3">
                     {[
                         { name: 'Bauvorbescheid_2026.pdf', size: '2.4 MB' },
                         { name: 'AK34_Protokoll_Positiv.pdf', size: '1.1 MB' },
                         { name: 'Architektur_Entwurf_V2.pdf', size: '14 MB' }
                     ].map((doc, i) => (
                         <div key={i} className="flex items-center gap-4 px-4 py-3 bg-white/5 rounded-lg border border-white/5 hover:border-[#D4AF37]/30 transition-colors group cursor-pointer hover:bg-white/10">
                             <FileText className="w-4 h-4 text-[#D4AF37]" />
                             <div className="flex flex-col">
                                 <span className="text-xs text-white font-medium group-hover:text-[#D4AF37] transition-colors">{doc.name}</span>
                                 <span className="text-[9px] text-white/50 uppercase tracking-wider">{doc.size}</span>
                             </div>
                             <Lock className="w-3 h-3 text-white/20 ml-auto" />
                         </div>
                     ))}
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button className="flex items-center gap-3 px-6 py-3 bg-[#D4AF37] text-black rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-white/20">
                    Zugang Anfordern <ArrowRight className="w-3 h-3" />
                </button>
            </div>
        </div>

        <p className="text-[10px] text-white/40 text-left md:text-center max-w-xl mx-auto leading-relaxed font-mono drop-shadow-md">
          Die Kalkulation orientiert sich an offiziellen Auswertungen der Gutachterausschüsse für Grundstückswerte
          sowie Analysen unabhängiger Forschungsinstitute für Meerbusch-Büderich.
        </p>
      </div>
    </section>
  );
};

export default Contact;
