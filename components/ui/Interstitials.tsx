
import React, { useEffect, useRef } from 'react';

// --- 1. THE MAGNETIC FIELD ---
// Symbolisiert Anziehungskraft und Präzision.
// Ein Raster aus Linien, die sich zum Mauszeiger drehen.

export const MagneticField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      itemsRef.current.forEach((item) => {
        if (!item) return;
        
        // Position des Elements
        const itemRect = item.getBoundingClientRect();
        const itemX = (itemRect.left - rect.left) + (itemRect.width / 2);
        const itemY = (itemRect.top - rect.top) + (itemRect.height / 2);

        // Winkel berechnen
        const angle = Math.atan2(mouseY - itemY, mouseX - itemX);
        const degrees = angle * (180 / Math.PI);

        // Performance: Transform direkt setzen ohne React Re-Render
        item.style.transform = `rotate(${degrees}deg)`;
        
        // Optional: Deckkraft basierend auf Distanz ändern
        const dist = Math.hypot(mouseX - itemX, mouseY - itemY);
        const maxDist = 400;
        const opacity = Math.max(0.1, 1 - (dist / maxDist));
        const color = opacity > 0.6 ? '#D4AF37' : '#333';
        
        const line = item.querySelector('.mag-line') as HTMLElement;
        if (line) {
            line.style.backgroundColor = color;
            line.style.opacity = String(opacity > 0.3 ? opacity : 0.1);
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Erstellen des Rasters (Grid)
  const rows = 6;
  const cols = 12; // Mehr Spalten für Desktop
  const total = rows * cols;

  return (
    <div className="relative w-full py-24 md:py-32 overflow-hidden flex justify-center items-center bg-[#050505]">
      {/* Label */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]/40 pointer-events-none">
        Location Gravity
      </div>

      <div 
        ref={containerRef}
        className="relative z-10 grid gap-8 md:gap-12"
        style={{ 
            gridTemplateColumns: `repeat(auto-fit, minmax(20px, 1fr))`,
            width: '90%',
            maxWidth: '1000px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <div 
            key={i}
            ref={(el) => { itemsRef.current[i] = el; }}
            className="w-8 h-8 flex items-center justify-center transition-transform duration-75 ease-out will-change-transform"
          >
            {/* Die "Nadel" */}
            <div className="mag-line w-full h-[1px] bg-white/10 transition-colors duration-300 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#D4AF37] rounded-full opacity-0" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Vignette für Tiefe */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/50 to-[#050505] pointer-events-none" />
    </div>
  );
};

// --- 2. THE RESONANCE GRID ---
// Symbolisiert Dynamik und Impact.
// Vertikale Balken, die auf Mausnähe mit Höhe/Skalierung reagieren.

export const ResonanceGrid: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Grid Konfiguration
    const bars = 40; 
  
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
  
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        // Maus X relativ zum Container
        const x = e.clientX - rect.left;
        
        const children = container.children;
        
        for (let i = 0; i < children.length; i++) {
            const bar = children[i] as HTMLElement;
            const barRect = bar.getBoundingClientRect();
            const barCenter = barRect.left - rect.left + (barRect.width / 2);
            
            // Distanz zur Maus (nur X-Achse für Welle)
            const dist = Math.abs(x - barCenter);
            
            // Welle berechnen (Gaussian Bell Curve Logic)
            const maxDist = 250; // Radius des Effekts
            
            if (dist < maxDist) {
                const intensity = 1 - (dist / maxDist);
                // Scale Y based on intensity (1.0 base, up to 4.0)
                const scale = 1 + (intensity * 3);
                const brightness = 0.1 + (intensity * 0.9);
                
                bar.style.transform = `scaleY(${scale})`;
                bar.style.backgroundColor = `rgba(197, 160, 40, ${brightness})`; // Gold
                bar.style.boxShadow = `0 0 ${intensity * 20}px rgba(197, 160, 40, ${intensity * 0.5})`;
            } else {
                bar.style.transform = `scaleY(1)`;
                bar.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
                bar.style.boxShadow = 'none';
            }
        }
      };
      
      const handleLeave = () => {
        const children = container.children;
        for (let i = 0; i < children.length; i++) {
             const bar = children[i] as HTMLElement;
             bar.style.transform = `scaleY(1)`;
             bar.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
             bar.style.boxShadow = 'none';
        }
      };
  
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleLeave);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleLeave);
      };
    }, []);
  
    return (
      <div className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center bg-[#050505] overflow-hidden group cursor-crosshair">
         <div className="absolute top-10 text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]/40 pointer-events-none">
            Market Resonance
         </div>

         {/* Center Line for Reference */}
         <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 pointer-events-none" />
         
         <div 
            ref={containerRef}
            className="flex items-center justify-center gap-1.5 h-32 w-full max-w-5xl px-6"
         >
            {Array.from({ length: bars }).map((_, i) => (
                <div 
                    key={i}
                    className="w-1.5 md:w-2 h-8 bg-white/10 rounded-full transition-all duration-100 ease-out will-change-transform origin-center"
                />
            ))}
         </div>
         
         <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[9px] font-mono text-[#D4AF37] tracking-widest">
            INTERACTIVE DATA STREAM
         </div>
      </div>
    );
};
