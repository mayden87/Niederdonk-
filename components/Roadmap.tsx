
import React from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { CheckCircle2, CircleDashed, ArrowRight, Calendar, Flag, Construction, Home, ArrowUpRight } from 'lucide-react';

const milestones = [
  {
    phase: "Status Quo",
    date: "2024 - 2025",
    title: "Sicherung & Recht",
    desc: "Grundstückssicherung, Bauvoranfrage, Verlängerung des Bauvorbescheids und positives Votum des Arbeitskreises (AK34).",
    status: 'done',
    icon: <Flag className="w-5 h-5" />
  },
  {
    phase: "Phase 01",
    date: "Q2 2026",
    title: "Bauantrag & Pre-Sale",
    desc: "Einreichung des Bauantrag auf Basis der genehmigten Planung. Start des 'Friends & Family' Vorvertriebs.",
    status: 'current',
    icon: <Calendar className="w-5 h-5" />
  },
  {
    phase: "Phase 02",
    date: "Q4 2026",
    title: "Spatenstich",
    desc: "Erteilung der Baugenehmigung und Baubeginn (Tiefbau/Rohbau). Offizieller Vertriebsstart der Einheiten.",
    status: 'future',
    icon: <Construction className="w-5 h-5" />
  },
  {
    phase: "Phase 03",
    date: "Q2 2027",
    title: "Richtfest",
    desc: "Fertigstellung des Rohbaus. Beginn des Innenausbaus und der Fassadenarbeiten.",
    status: 'future',
    icon: <Home className="w-5 h-5" />
  },
  {
    phase: "Abschluss",
    date: "Q4 2028",
    title: "Fertigstellung",
    desc: "Schlüsselübergabe an die Eigentümer. Fertigstellung der Außenanlagen und Bezugsreife.",
    status: 'future',
    icon: <CheckCircle2 className="w-5 h-5" />
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-[#C5A028]/5 blur-[160px] opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Editorial Style */}
        <Reveal>
          <div className="mb-16 md:mb-28 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-left">
            <div>
              <SectionTag>Realierung</SectionTag>
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] mt-8">
                Roadmap zur <br />
                <span className="text-[#C5A028] italic">Realisierung</span>
              </h2>
            </div>
            <div className="max-w-xl md:pl-10 md:border-l border-white/10">
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                Der Weg von der Vision zum fertigen Quartier. Wir folgen einem strukturierten Prozess, 
                um Termintreue und Qualität zu gewährleisten.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <CircleDashed className="w-3 h-3 text-[#C5A028] animate-spin-slow" />
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Projektlaufzeit: ~36 Monate</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* PROCESS MATRIX STAGE */}
        <Stage className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 lg:divide-x divide-white/10">
            {milestones.map((item, i) => {
              const isDone = item.status === 'done';
              const isCurrent = item.status === 'current';
              
              return (
                <div 
                  key={i} 
                  className={`relative p-8 md:p-10 lg:p-12 group transition-all duration-700 text-left ${
                    isCurrent ? 'bg-[#C5A028]/10' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 flex">
                    <div className={`h-full transition-all duration-1000 ${
                      isDone ? 'bg-[#C5A028] w-full' : 
                      isCurrent ? 'bg-[#C5A028] w-1/2 animate-pulse' : 
                      'bg-white/5 w-0'
                    }`} />
                  </div>

                  <div className="flex justify-between items-start mb-12">
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isDone ? 'bg-[#C5A028] border-[#C5A028] text-black' : 
                      isCurrent ? 'bg-white/10 border-[#C5A028] text-[#C5A028] shadow-[0_0_20px_rgba(197,160,40,0.2)]' : 
                      'bg-white/5 border-white/10 text-white/20'
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${
                      isCurrent ? 'text-[#C5A028]' : 'text-white/20'
                    }`}>
                      {item.phase}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className={`text-xs font-bold uppercase tracking-widest ${isDone ? 'text-white/40' : 'text-[#C5A028]'}`}>
                      {item.date}
                    </p>
                    <h3 className={`text-2xl font-serif leading-tight transition-colors duration-500 ${
                      isCurrent || isDone ? 'text-white' : 'text-white/30'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isDone || isCurrent ? 'text-white/50' : 'text-white/20'
                    }`}>
                      {item.desc}
                    </p>
                  </div>

                  {i < milestones.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 items-center justify-center w-8 h-8 rounded-full bg-[#050505] border border-white/10 text-white/20 group-hover:text-[#C5A028] transition-colors">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}

                  <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold ${
                      isDone ? 'text-green-500' : isCurrent ? 'text-[#C5A028]' : 'text-white/10'
                    }`}>
                      {isDone ? 'Abgeschlossen' : isCurrent ? 'In Arbeit' : 'Geplant'}
                    </span>
                    {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
                  </div>
                </div>
              );
            })}
          </div>
        </Stage>

        {/* Cinematic Bottom Block */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="text-left space-y-8 order-2 lg:order-1">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-[#C5A028]"></div>
                    <p className="text-[11px] text-[#C5A028] uppercase tracking-[0.4em] font-bold">Verbindlichkeit</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  Sicherheit im <br />
                  <span className="text-[#C5A028] italic">Zeitplan.</span>
                </h3>
                <p className="text-lg text-white/50 leading-relaxed font-light">
                  Unsere Roadmap ist kein Versprechen, sondern eine Verpflichtung. Durch die enge 
                  Abstimmung mit allen Fachplanern und der Stadt Meerbusch minimieren wir zeitliche 
                  Risiken und schaffen eine belastbare Planungsgrundlage.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all group/btn font-bold text-[10px] uppercase tracking-widest shadow-2xl">
                    Meilenstein-Plan laden <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
            </div>

            <div className="relative group overflow-hidden rounded-[32px] border border-white/10 shadow-2xl aspect-video lg:aspect-[16/9] order-1 lg:order-2">
                <img
                    src="https://whhy.de/wp-content/uploads/2026/01/4.png"
                    alt="Roadmap Realisierung"
                    className="w-full h-full object-cover transition-transform duration-[15s] ease-linear group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <p className="text-white font-serif italic text-2xl drop-shadow-lg text-left">"Der Weg zum Ziel <br/> ist präzise markiert."</p>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Roadmap;
