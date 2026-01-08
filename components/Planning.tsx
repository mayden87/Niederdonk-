import React, { useEffect, useRef } from 'react';
import { SectionTag, Reveal, UnifiedCard } from './ui/Shared';
import { ShieldCheck, Check, FileCheck, Calendar, Stamp } from 'lucide-react';

const Planning: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const event = new CustomEvent('theme-change', { 
          detail: entry.isIntersecting ? 'forest' : 'default' 
        });
        window.dispatchEvent(event);
      },
      { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        window.dispatchEvent(new CustomEvent('theme-change', { detail: 'default' }));
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const safetyPoints = [
    {
      title: "Bauantrag",
      desc: "Sofort möglich. Keine erneute Voranfrage notwendig.",
      icon: FileCheck,
      status: "Startklar"
    },
    {
      title: "Mobilität",
      desc: "Reduktion auf 42 Stellplätze genehmigt (ÖPNV Bonus).",
      icon: Check,
      status: "Optimiert"
    },
    {
      title: "Sicherheit",
      desc: "Vollkostenkalkulation inkl. Spezialtiefbau & Wasser.",
      icon: ShieldCheck,
      status: "Fixiert"
    }
  ];

  return (
    <section 
      id="planning" 
      ref={sectionRef}
      className="relative w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
        {/* LEFT COLUMN: VISUAL (The "Certificate") */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
           <Reveal className="w-full max-w-md aspect-[3/4] relative perspective-1000">
              
              {/* Back Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[100%] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

              {/* The Card - Using Unified Style for frame */}
              <UnifiedCard className="bg-[#0c120c]/90 backdrop-blur-2xl hover:rotate-1 transition-transform duration-700">
                  
                  {/* Document Header */}
                  <div className="flex justify-between items-start mb-12">
                      <div className="flex flex-col gap-2">
                          <div className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center bg-white/5">
                             <div className="w-4 h-4 bg-[#D4AF37] rounded-sm" />
                          </div>
                          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">Aktenzeichen 34-B</span>
                      </div>
                      <Stamp className="w-16 h-16 text-[#D4AF37] opacity-20 rotate-12" />
                  </div>

                  {/* Document Body */}
                  <div className="flex-1 flex flex-col justify-center text-center">
                      <p className="text-sm font-serif italic text-text-muted mb-4">Rechtsgrundlage nach</p>
                      <h3 className="text-8xl font-serif font-bold text-white tracking-tighter leading-none mb-4">
                          §34
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold">Baugesetzbuch</p>
                      
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
                      
                      <div className="inline-flex mx-auto items-center gap-3 px-6 py-2 rounded-full bg-[#1a2e1a] border border-[#2d4a2d]">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] font-bold text-green-100 uppercase tracking-widest">Bauvorbescheid Positiv</span>
                      </div>
                  </div>

                  {/* Document Footer */}
                  <div className="mt-12 flex justify-between items-end border-t border-white/5 pt-6">
                      <div>
                          <p className="text-[9px] text-text-muted uppercase tracking-widest mb-1">Gültig bis</p>
                          <p className="text-white font-mono text-sm">Dezember 2025</p>
                      </div>
                      <Calendar className="w-5 h-5 text-white/20" />
                  </div>
              </UnifiedCard>
           </Reveal>
        </div>

        {/* RIGHT COLUMN: TEXT (Narrative) */}
        <div className="order-1 lg:order-2 flex flex-col justify-center">
            <Reveal delay={200}>
                <div className="mb-12 pl-6 border-l border-[#D4AF37]">
                   <SectionTag>02. Sicherheit</SectionTag>
                   <h2 className="text-5xl md:text-7xl font-serif font-medium text-white mt-6 mb-8 leading-none">
                      Recht & <br />
                      <span className="text-[#D4AF37] italic">Ordnung</span>
                   </h2>
                   <p className="text-base text-text-muted leading-7 max-w-md font-light">
                      Ein Investment braucht festen Boden. Wir liefern Fakten: Verlängerter Bauvorbescheid und positives Votum des Arbeitskreises.
                   </p>
                </div>

                <div className="space-y-4">
                   {safetyPoints.map((point, i) => (
                       <div key={i} className="group flex items-center gap-6 p-6 rounded-3xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5 cursor-default">
                           <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                               <point.icon className="w-5 h-5" />
                           </div>
                           <div className="flex-1">
                               <div className="flex justify-between items-center mb-1">
                                   <h4 className="text-lg font-serif text-white group-hover:translate-x-1 transition-transform">{point.title}</h4>
                                   <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]">{point.status}</span>
                               </div>
                               <p className="text-sm text-text-muted/60 group-hover:text-text-muted transition-colors leading-relaxed">
                                   {point.desc}
                               </p>
                           </div>
                       </div>
                   ))}
                </div>
            </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Planning;