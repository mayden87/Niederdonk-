
import React from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { ShieldCheck, Check, FileCheck, Calendar, Stamp, ArrowUpRight, Leaf, ChevronRight } from 'lucide-react';

const Planning: React.FC = () => {
  const safetyPoints = [
    {
      title: "Bauvorbescheid",
      desc: "Rechtsgültiger Vorbescheid liegt vor. Erstmalige Erteilung 2023, verlängert bis Dezember 2026.",
      icon: FileCheck,
      status: "Gültig"
    },
    {
      title: "Arbeitskreis 34",
      desc: "Positives Votum am 21.07.2025. Das städtebauliche Konzept ist als genehmigungsfähig bestätigt.",
      icon: Check,
      status: "Bestätigt"
    },
    {
      title: "Kalkulation",
      desc: "Vollkostenkalkulation inkl. Spezialtiefbau, Wasserhaltung & Unterfangung der Nachbarn.",
      icon: ShieldCheck,
      status: "Fixiert"
    }
  ];

  return (
    <section id="planning" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-950/10 blur-[120px] rounded-full opacity-30" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-green-900/5 blur-[100px] rounded-full opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Aligned with Editorial Style */}
        <Reveal>
          <div className="mb-16 md:mb-28">
            <SectionTag>02. Sicherheit</SectionTag>
            <div className="flex flex-col lg:flex-row gap-12 mt-8 lg:items-end justify-between">
                <h2 className="text-5xl md:text-8xl font-serif text-white leading-[0.9] max-w-4xl tracking-tighter text-left">
                  Recht & <br />
                  <span className="text-[#C5A028] italic">Ordnung</span>
                </h2>
                <div className="max-w-md lg:pl-12 lg:border-l border-white/10 text-left">
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light mb-6">
                    Ein Investment braucht festen Boden. Wir liefern Fakten: Verlängerter Bauvorbescheid 
                    und positives Votum des Arbeitskreises.
                  </p>
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <Leaf className="w-3 h-3 text-green-500" />
                    <span className="text-[10px] uppercase tracking-widest text-green-400 font-bold">Zukunftssicher geplant</span>
                  </div>
                </div>
            </div>
          </div>
        </Reveal>

        {/* SECURITY STAGE */}
        <Stage className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Visual Column: The Digital Badge/Certificate */}
            <div className="lg:col-span-5 relative p-12 md:p-20 flex items-center justify-center bg-white/[0.01] overflow-hidden">
               <div className="relative z-10 w-full max-w-sm">
                  <div className="relative aspect-[3/4] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 shadow-2xl flex flex-col justify-between group transition-transform duration-1000 hover:scale-[1.02]">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Dokument</p>
                          <p className="text-xs font-mono text-white/60">QNL-CERT-81</p>
                        </div>
                        <Stamp className="w-12 h-12 text-[#C5A028] opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </div>

                    <div className="text-center py-8">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#C5A028] font-bold mb-4">Rechtskraft</p>
                        <h3 className="text-7xl md:text-8xl font-serif text-white tracking-tighter mb-2">§34</h3>
                        <p className="text-sm italic text-white/40 font-serif">BauGB Konformität</p>
                        <div className="w-12 h-[1px] bg-[#C5A028]/30 mx-auto my-8" />
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Gültig bis</p>
                        <p className="text-lg font-serif text-white">12 / 2026</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-[#C5A028]/20 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-[#C5A028]" />
                      </div>
                    </div>
                  </div>
               </div>
               
               {/* Background Decorative Element */}
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#C5A028] blur-[120px] rounded-full" />
               </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
               {safetyPoints.map((point, i) => (
                 <div key={i} className="p-8 md:p-14 group hover:bg-white/[0.03] transition-all duration-700 text-left">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028] group-hover:bg-[#C5A028] group-hover:text-black transition-all duration-500 shadow-xl shrink-0">
                           <point.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                           <div className="flex justify-between items-center mb-4">
                              <h4 className="text-2xl md:text-3xl font-serif text-white">{point.title}</h4>
                              <span className="text-[10px] uppercase tracking-widest text-green-500 font-bold px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5">
                                 {point.status}
                              </span>
                           </div>
                           <p className="text-lg text-white/45 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                              {point.desc}
                           </p>
                           <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-bold">Prüfung abgeschlossen</span>
                              <ChevronRight className="w-4 h-4 text-[#C5A028]" />
                           </div>
                        </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </Stage>

        {/* Cinematic Bottom Block */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="relative group overflow-hidden rounded-[32px] border border-white/10 shadow-2xl aspect-video lg:aspect-[16/9]">
                <img
                    src="https://whhy.de/wp-content/uploads/2026/01/2.png"
                    alt="Sicherheit und Beständigkeit"
                    className="w-full h-full object-cover transition-transform duration-[15s] ease-linear group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <p className="text-white font-serif italic text-2xl drop-shadow-lg">"Sicherheit ist das Fundament <br/> jeder Wertschöpfung."</p>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

            <div className="text-left space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-[#C5A028]"></div>
                    <p className="text-[11px] text-[#C5A028] uppercase tracking-[0.4em] font-bold">Transparenz</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  Geprüfte Qualität. <br />
                  <span className="text-[#C5A028] italic">Ohne Kompromisse.</span>
                </h3>
                <p className="text-lg text-white/50 leading-relaxed font-light">
                  Die Integration in die parkähnliche Umgebung von Büderich ist nicht nur Design, 
                  sondern Teil der Genehmigungsstrategie. Alle Unterlagen sind im gesicherten 
                  Datenraum für qualifizierte Investoren hinterlegt.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all group/btn font-bold text-[10px] uppercase tracking-widest">
                    Zertifikat laden <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Planning;
