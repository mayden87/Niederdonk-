
import React, { useRef, useState, useEffect } from 'react';
import { SectionTag, Stage, Reveal } from './ui/Shared';
import { MapPin, ShieldCheck, TrendingUp, Layers } from 'lucide-react';

const Thesis: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const points = [
    {
      index: "01",
      title: "Prime Location",
      desc: "Meerbusch-Büderich zählt zu den begehrtesten Wohnlagen Deutschlands. Hohes Preisniveau und extrem begrenztes Angebot.",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      index: "02",
      title: "Planungssicherheit",
      desc: "Rechtsgültiger Bauvorbescheid (bis 12/2026) und positives AK34-Votum. Realisierung nach §34 BauGB gesichert.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      index: "03",
      title: "Hybrider Produktmix",
      desc: "Optimale Diversifizierung durch 9 DHH, 7 RH und 16 ETW. Spricht Eigennutzer und Kapitalanleger gleichzeitig an.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      index: "04",
      title: "Performance",
      desc: "Konservativ kalkuliert mit ~34,9% Projekt-Rendite und signifikantem Risikopuffer für maximale Sicherheit.",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    }
  };

  return (
    <section className="relative -mt-2 pt-24 md:pt-[340px] lg:pt-[220px] pb-24 md:pb-40 bg-[#050505] overflow-hidden z-10">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#C5A028]/5 blur-[160px] pointer-events-none opacity-40" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            
            {/* Header Section */}
            <Reveal>
              <div className="mb-16 md:mb-28">
                  <SectionTag>Executive Summary</SectionTag>
                  <div className="flex flex-col lg:flex-row gap-12 mt-8 lg:items-end justify-between">
                      <h2 className="text-5xl md:text-8xl font-serif text-white leading-[0.9] max-w-4xl tracking-tighter text-left">
                          Warum dieses <br />
                          <span className="text-[#C5A028] italic">Investment?</span>
                      </h2>
                      <div className="max-w-md lg:pl-12 lg:border-l border-white/10">
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light text-left">
                            Einzigartige Marktchance in Bestlage. Wir kombinieren exzellente Architektur mit 
                            einer wasserfesten Genehmigungsbasis.
                        </p>
                      </div>
                  </div>
              </div>
            </Reveal>

            {/* Top Metrics Stage */}
            <Stage className="group/stage overflow-hidden">
                {/* 
                  MOBILE: Flex with Snap Scrolling 
                  DESKTOP: Grid with 4 Columns (Unchanged)
                */}
                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-4 divide-x divide-white/10"
                >
                    {points.map((point, i) => {
                        const isHighlight = point.title === "Planungssicherheit";
                        
                        return (
                            <div 
                              key={i} 
                              className={`relative min-w-[85vw] md:min-w-0 snap-center p-8 md:p-12 lg:p-14 group transition-all duration-700 flex flex-col h-full border-r border-white/10 md:border-r-0 last:border-r-0 ${
                                isHighlight ? 'bg-[#C5A028]/10 hover:bg-[#C5A028]/20' : 'hover:bg-white/[0.03]'
                              }`}
                            >
                                {/* Highlight Effects */}
                                {isHighlight && (
                                    <>
                                        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group-hover:opacity-[0.08] transition-opacity pointer-events-none" />
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#C5A028]/20 blur-[60px] rounded-full animate-pulse-slow pointer-events-none" />
                                    </>
                                )}

                                <div className="relative z-10 flex justify-between items-start mb-12">
                                    <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 shadow-xl ${
                                        isHighlight 
                                            ? 'border-[#C5A028]/40 bg-[#C5A028]/20 text-[#C5A028]' 
                                            : 'border-white/10 bg-white/5 text-[#C5A028] group-hover:scale-110 group-hover:bg-[#C5A028] group-hover:text-black'
                                    }`}>
                                         {point.icon}
                                    </div>
                                    <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                                        isHighlight ? 'text-[#C5A028]/60' : 'text-white/20 group-hover:text-[#C5A028]/60'
                                    }`}>
                                      {point.index}
                                    </span>
                                </div>
                                <div className="relative z-10 flex-1">
                                    <h3 className={`text-2xl md:text-3xl font-serif mb-6 group-hover:translate-x-1 transition-transform duration-500 text-left ${
                                        isHighlight ? 'text-[#C5A028]' : 'text-white'
                                    }`}>
                                      {point.title}
                                    </h3>
                                    <p className={`text-sm md:text-base leading-relaxed font-light text-left transition-colors duration-500 ${
                                        isHighlight ? 'text-white/80' : 'text-white/45 group-hover:text-white/70'
                                    }`}>
                                        {point.desc}
                                    </p>
                                </div>

                                {/* Footer for Highlighted Item */}
                                {isHighlight && (
                                    <div className="relative z-10 mt-6 pt-4 border-t border-[#C5A028]/20">
                                       <p className="text-[9px] text-white/40 italic">Genehmigungssituation</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Progress Bar (Visible only on mobile) */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
                   <div 
                      className="h-full bg-[#C5A028]" 
                      style={{ width: '25%', transform: `translateX(${scrollProgress * 300}%)`, transition: 'transform 0.1s linear' }}
                   />
                </div>
            </Stage>

            {/* NEW: 2 Images Grid (excluding image 4) - WITHOUT TEXT, BIG/SMALL SPLIT - REDUCED HEIGHT */}
            <Reveal delay={200} className="mt-12 md:mt-24">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-4 md:pb-0 md:grid md:grid-cols-12 md:gap-6 md:mx-0 md:px-0 no-scrollbar">
                    {/* Image Left - Bigger (Span 8) */}
                    <div className="min-w-[85vw] md:min-w-0 snap-center md:col-span-8 relative group overflow-hidden rounded-[32px] border border-white/10 shadow-2xl h-[200px] md:h-[300px]">
                        <img 
                            src="https://whhy.de/wp-content/uploads/2026/01/5.png" 
                            alt="Architektur Perspective" 
                            className="w-full h-full object-cover transition-transform duration-[20s] ease-out scale-[1.25] group-hover:scale-[1.3]"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>

                    {/* Image Right - Smaller (Span 4) */}
                    <div className="min-w-[85vw] md:min-w-0 snap-center md:col-span-4 relative group overflow-hidden rounded-[32px] border border-white/10 shadow-2xl h-[200px] md:h-[300px]">
                         <img 
                            src="https://whhy.de/wp-content/uploads/2026/01/6.png" 
                            alt="Interior Detail" 
                            className="w-full h-full object-cover transition-transform duration-[20s] ease-out scale-[1.3] group-hover:scale-[1.35]"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                </div>
            </Reveal>

        </div>
    </section>
  );
};

export default Thesis;
