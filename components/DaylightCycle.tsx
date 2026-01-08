import React, { useState } from 'react';
import { SectionTag } from './ui/Shared';
import { Sun, Moon } from 'lucide-react';

const DaylightCycle: React.FC = () => {
  const [hour, setHour] = useState(14); // 14:00 default

  // Calculate atmosphere based on hour (6 to 22)
  const getAtmosphere = (h: number) => {
    // Dawn (6-9)
    if (h < 10) return { 
        gradient: 'linear-gradient(to top, rgba(20,30,50,0.6), rgba(255,150,100,0.3))', 
        blend: 'hard-light',
        shadowX: -20 + (h*2),
        label: 'Morgen'
    };
    // Noon (10-15)
    if (h < 16) return { 
        gradient: 'linear-gradient(to top, rgba(0,0,0,0), rgba(255,255,200,0.1))', 
        blend: 'overlay',
        shadowX: 0,
        label: 'Mittag'
    };
    // Golden Hour (16-19)
    if (h < 20) return { 
        gradient: 'linear-gradient(to top, rgba(50,20,0,0.3), rgba(255,100,0,0.4))', 
        blend: 'soft-light',
        shadowX: 20 + ((h-16)*5),
        label: 'Abendsonne'
    };
    // Night (20+)
    return { 
        gradient: 'linear-gradient(to top, rgba(5,5,15,0.8), rgba(10,10,30,0.5))', 
        blend: 'multiply',
        shadowX: 50,
        label: 'Nacht'
    };
  };

  const atm = getAtmosphere(hour);

  return (
    <section className="py-20">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
         <div>
            <SectionTag>Atmosphäre</SectionTag>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-4">Tageslicht</h2>
         </div>
         {/* Info displayed on all screens now, left aligned on mobile */}
         <div className="text-left md:text-right">
            <p className="text-4xl md:text-5xl font-mono text-[#C5A028]">{hour}:00</p>
            <p className="text-sm text-text-muted uppercase tracking-widest">{atm.label}</p>
         </div>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
         {/* Base Render */}
         <img 
            src="https://whhy.de/wp-content/uploads/2026/01/2.png" 
            alt="Building Render"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         />

         {/* Atmosphere Overlay */}
         <div 
            className="absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none"
            style={{ 
                background: atm.gradient,
                mixBlendMode: atm.blend as any
            }}
         />
         
         {/* Shadow Simulation (Vignette shift) */}
         <div 
            className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none transition-all duration-1000"
            style={{ 
                opacity: hour > 18 || hour < 8 ? 0.6 : 0,
                transform: `translateX(${atm.shadowX}%)` 
            }}
         />

         {/* Controls Overlay - Improved Mobile Layout */}
         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-start md:items-center">
             <div className="w-full max-w-lg flex items-center gap-4 md:gap-6">
                <Sun className="w-4 h-4 md:w-5 md:h-5 text-white/50" />
                <input 
                    type="range" 
                    min="6" 
                    max="22" 
                    step="1" 
                    value={hour} 
                    onChange={(e) => setHour(+e.target.value)}
                    className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C5A028]"
                />
                <Moon className="w-4 h-4 md:w-5 md:h-5 text-white/50" />
             </div>
             {/* Mobile Time label in control area removed to avoid duplication, strictly clean controls */}
         </div>
      </div>
    </section>
  );
};

export default DaylightCycle;