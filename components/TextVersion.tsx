
import React from 'react';
import { SectionTag, Reveal } from './ui/Shared';

const TextVersion: React.FC = () => {
  return (
    <section id="textversion" className="relative py-24 md:py-40 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Editorial Style */}
        <Reveal>
          <div className="mb-16 md:mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div>
              <SectionTag>Galerie</SectionTag>
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] mt-8 text-left">
                Visuelle <br />
                <span className="text-[#C5A028] italic">Impressionen</span>
              </h2>
            </div>
            <div className="max-w-xl lg:pl-10 lg:border-l border-white/10 text-left">
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                Die Architektur spricht für sich. Ausgewählte Perspektiven, die den Charakter des Quartiers einfangen.
              </p>
            </div>
          </div>
        </Reveal>

        {/* IMAGE COLLAGE GRID - 4 Images, different sizes, aligned block */}
        <Reveal delay={200} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] md:h-[650px]">
            {/* Main Image - Large (Spans 2 columns, 2 rows) */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-[24px] border border-white/10 shadow-2xl">
              <img 
                src="https://whhy.de/wp-content/uploads/2026/01/1.png" 
                alt="Architecture Detail 1" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-left">
                <span className="text-[9px] uppercase tracking-widest text-[#C5A028] font-bold">Perspektive A</span>
              </div>
            </div>

            {/* Top Right - Wide (Spans 2 columns, 1 row) */}
            <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-[24px] border border-white/10 shadow-xl">
              <img 
                src="https://whhy.de/wp-content/uploads/2026/01/2.png" 
                alt="Architecture Detail 2" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-left">
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Fassade</span>
              </div>
            </div>

            {/* Bottom Mid-Right - Square (1x1) */}
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-[24px] border border-white/10 shadow-xl">
              <img 
                src="https://whhy.de/wp-content/uploads/2026/01/4.png" 
                alt="Interior Detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-left">
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Licht</span>
              </div>
            </div>

            {/* Bottom Far-Right - Square (1x1) */}
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-[24px] border border-white/10 shadow-xl">
              <img 
                src="https://whhy.de/wp-content/uploads/2026/01/1.png" 
                alt="Concept Detail" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-left">
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Konzept</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footer Signature */}
        <Reveal delay={400}>
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30 group-hover:opacity-60 transition-opacity">
            <div className="flex items-center gap-4">
              <div className="w-px h-12 bg-white/20" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-white font-bold text-left">
                Quartier Niederdonk Living <br />
                Visuelle Referenz 2026
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default TextVersion;
