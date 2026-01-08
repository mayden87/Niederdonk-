
import React from 'react';
import { SectionTag, Reveal } from './ui/Shared';
import { CheckCircle2, CircleDashed, Milestone } from 'lucide-react';

const RoadmapItem: React.FC<{
  phase: string;
  date: string;
  title: string;
  desc: string;
  status: 'done' | 'current' | 'future';
  align: 'left' | 'right';
}> = ({ phase, date, title, desc, status, align }) => {
  const isLeft = align === 'left';
  
  return (
    <div className={`relative flex items-center justify-center md:justify-between w-full mb-16 md:mb-24 last:mb-0 group ${isLeft ? 'flex-row-reverse' : ''}`}>
      
      {/* Content Side */}
      <div className={`w-full md:w-[45%] ${isLeft ? 'text-left md:text-right pl-12 md:pl-0 md:pr-12' : 'pl-12 text-left'}`}>
        <Reveal>
          <div className={`flex flex-col ${isLeft ? 'items-start md:items-end' : 'items-start'}`}>
             <span className={`inline-block px-3 py-1 mb-3 text-[9px] font-bold uppercase tracking-widest rounded-full border ${
                status === 'done' ? 'bg-[#C5A028]/10 text-[#C5A028] border-[#C5A028]/20' : 
                status === 'current' ? 'bg-white/10 text-white border-white/20 animate-pulse' :
                'bg-white/5 text-text-muted border-white/5'
             }`}>
                {phase}
             </span>
             <h3 className={`text-2xl md:text-4xl font-serif text-white mb-2 transition-colors duration-500 ${status === 'current' ? 'text-[#C5A028]' : ''}`}>
                {title}
             </h3>
             <p className="text-[#C5A028] font-mono text-sm mb-4">{date}</p>
             <p className="text-text-muted text-sm leading-relaxed max-w-sm">
                {desc}
             </p>
          </div>
        </Reveal>
      </div>

      {/* Center Line Node */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
         {/* Glow Effect */}
         <div className={`absolute w-12 h-12 rounded-full blur-xl transition-all duration-700 ${
            status === 'done' ? 'bg-[#C5A028]/30' : 
            status === 'current' ? 'bg-white/30' : 
            'bg-transparent'
         }`} />
         
         {/* The Node */}
         <div className={`relative w-4 h-4 md:w-6 md:h-6 rounded-full border-2 transition-all duration-500 z-10 flex items-center justify-center ${
             status === 'done' ? 'bg-[#050505] border-[#C5A028]' :
             status === 'current' ? 'bg-[#C5A028] border-white scale-125' :
             'bg-[#050505] border-white/20'
         }`}>
             {status === 'done' && <div className="w-1.5 h-1.5 bg-[#C5A028] rounded-full" />}
         </div>
      </div>

      {/* Empty Side for Desktop Balance */}
      <div className="hidden md:block w-[45%]" />

    </div>
  );
};

const Roadmap: React.FC = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#050505]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C5A028]/30 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
            <Reveal>
                <SectionTag className="justify-center">Meilensteine</SectionTag>
                <h2 className="text-4xl md:text-7xl font-serif font-medium text-white mt-6">
                   Roadmap zur <br />
                   <span className="text-[#C5A028] italic">Realisierung</span>
                </h2>
            </Reveal>
        </div>

        {/* The Timeline Container */}
        <div className="relative">
            {/* The Vertical Beam (Desktop Center / Mobile Left) */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C5A028] via-white/20 to-transparent opacity-30" />
            
            <RoadmapItem 
                phase="Status Quo"
                date="2024 - 2025"
                title="Sicherung & Recht"
                desc="Grundstückssicherung, Bauvoranfrage, Verlängerung des Bauvorbescheids und positives Votum des Arbeitskreises (AK34)."
                status="done"
                align="left"
            />

            <RoadmapItem 
                phase="Meilenstein 1"
                date="Q2 2026"
                title="Bauantrag & Pre-Sale"
                desc="Einreichung des Bauantrags auf Basis der genehmigten Planung. Start des 'Friends & Family' Vorvertriebs."
                status="current"
                align="right"
            />

            <RoadmapItem 
                phase="Meilenstein 2"
                date="Q4 2026"
                title="Spatenstich"
                desc="Erteilung der Baugenehmigung und Baubeginn (Tiefbau/Rohbau). Offizieller Vertriebsstart der Einheiten."
                status="future"
                align="left"
            />

            <RoadmapItem 
                phase="Meilenstein 3"
                date="Q2 2027"
                title="Richtfest"
                desc="Fertigstellung des Rohbaus. Beginn des Innenausbaus und der Fassadenarbeiten."
                status="future"
                align="right"
            />

             <RoadmapItem 
                phase="Abschluss"
                date="Q4 2028"
                title="Fertigstellung"
                desc="Schlüsselübergabe an die Eigentümer. Fertigstellung der Außenanlagen und Bezugsreife."
                status="future"
                align="left"
            />

        </div>

        {/* Future Vision Note */}
        <div className="mt-24 text-center">
             <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <CircleDashed className="w-4 h-4 text-[#C5A028] animate-spin-slow" />
                <span className="text-[10px] uppercase tracking-widest text-white/60">Projektlaufzeit: ca. 36 Monate</span>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Roadmap;
