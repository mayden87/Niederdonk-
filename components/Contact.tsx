import React from 'react';
import { SectionTag } from './ui/Shared';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay scale-110"
          style={{
            backgroundImage: `url('https://whhy.de/wp-content/uploads/2026/01/4.png')`
          }}
        />
        {/* Vignette & Gradients for seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F0F0F_100%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <SectionTag className="mb-6 mx-auto">Angebotskonditionen</SectionTag>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic bg-gradient-to-b from-white via-[#D4AF37] to-[#8a6e15] bg-clip-text text-transparent pb-2 drop-shadow-2xl">
            Exklusiv Mandat
          </h2>
          
          <p className="text-text-muted max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide opacity-80">
            Sichern Sie sich dieses Premium-Asset in Bestlage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Main Price Card - Glassy & Glossy */}
          <div className="md:col-span-2 relative group rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(212,175,55,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
            
            {/* Glossy Top Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 backdrop-blur-md mb-2 mx-auto md:mx-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em]">Asset Deal</span>
                </div>
                <p className="text-text-muted text-sm uppercase tracking-widest font-medium">Kaufpreis Grundstück</p>
                <h3 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter drop-shadow-xl">
                  4.250.000 <span className="text-4xl md:text-6xl text-[#D4AF37] align-top">€</span>
                </h3>
              </div>

              {/* Decorative Divider */}
              <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              <div className="flex flex-col items-center md:items-end gap-3">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8a6e15] flex items-center justify-center shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M5 13l4 4L19 7"/></svg>
                 </div>
                 <span className="text-white font-medium tracking-wide uppercase text-sm">Verfügbar</span>
              </div>
            </div>
          </div>

          {/* Courtage Card */}
          <div className="relative group rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2">
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl" />
             <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
             
             <div className="relative p-10 h-full flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-text-muted group-hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <span className="text-text-muted uppercase tracking-widest text-xs font-bold mb-4">Maklercourtage</span>
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  3,0 <span className="text-2xl text-[#D4AF37]">%</span>
                </div>
                <p className="text-xs text-text-muted/60 font-light uppercase tracking-wide">zzgl. gesetzl. MwSt.</p>
             </div>
          </div>

          {/* Info Card - Different style/texture for variety */}
          <div className="relative group rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2">
             <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent backdrop-blur-xl" />
             <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

             <div className="relative p-10 h-full flex flex-col justify-center">
                <span className="text-text-muted uppercase tracking-widest text-xs font-bold mb-6 text-center md:text-left flex items-center gap-2 justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    Hinweise
                </span>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-sm text-text-muted/80 group-hover:text-white transition-colors">
                    <span className="w-8 h-[1px] bg-[#D4AF37]" />
                    <span>Vertrauliches Exposé</span>
                  </li>
                   <li className="flex items-center gap-4 text-sm text-text-muted/80 group-hover:text-white transition-colors">
                    <span className="w-8 h-[1px] bg-[#D4AF37]" />
                    <span>Kein öffentliches Angebot</span>
                  </li>
                   <li className="flex items-center gap-4 text-sm text-text-muted/80 group-hover:text-white transition-colors">
                    <span className="w-8 h-[1px] bg-[#D4AF37]" />
                    <span>Irrtümer vorbehalten</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>

        <p className="text-xs text-text-muted/30 text-center max-w-xl mx-auto leading-relaxed font-light">
          Die Kalkulation orientiert sich an offiziellen Auswertungen der Gutachterausschüsse für Grundstückswerte
          sowie Analysen unabhängiger Forschungsinstitute für Meerbusch-Büderich.
        </p>
      </div>
    </section>
  );
};

export default Contact;