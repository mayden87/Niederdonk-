import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

// --- ANIMATION WRAPPER ---
// Uses a simpler, smoother threshold for "organic" reveal
export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number; threshold?: number }> = ({ children, className = '', delay = 0, threshold = 0.1 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: threshold, rootMargin: '0px 0px -10% 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- THE UNIFIED CARD COMPONENT V2 ---
// Refined for "High Class": Darker, less border opacity, subtler shine.
export const UnifiedCard: React.FC<{ children: React.ReactNode; className?: string; noPadding?: boolean }> = ({ children, className = '', noPadding = false }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`
        relative h-full overflow-hidden 
        rounded-2xl 
        border border-white/[0.08] 
        bg-[#0A0A0A]/40 
        backdrop-blur-3xl 
        shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] 
        transition-colors duration-700 
        group 
        ${className} 
        ${noPadding ? '' : 'p-6 md:p-8 lg:p-10'}
      `}
    >
      {/* Texture Grain - Ultra subtle noise to remove "digital" flatness */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-overlay" />
      
      {/* Top sheen for depth */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

      {/* The Moving Spotlight - Gold but very faint */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-700 ease-out"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(197,160,40,0.06), transparent 40%)`,
        }}
      />
      
      {/* Content z-index adjustment */}
      <div className="relative h-full z-10 flex flex-col">{children}</div>
    </div>
  );
};

export const SpotlightCard = UnifiedCard;
export const PremiumCard = UnifiedCard;
export const GlassContainer = UnifiedCard;

// --- SHARED UI COMPONENTS ---

export const SectionTag: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`flex items-center gap-3 mb-6 md:mb-8 ${className}`}>
    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#C5A028] font-medium leading-none">
      {children}
    </span>
    <div className="h-[1px] w-8 bg-[#C5A028]/30"></div>
  </div>
);

export const MetricRow: React.FC<{ label: string; value: string; border?: boolean }> = ({ label, value, border = true }) => (
  <div className={`flex justify-between items-end py-3 md:py-4 ${border ? 'border-b border-white/5' : ''} group`}>
    <span className="text-text-muted text-xs md:text-sm font-light group-hover:text-white transition-colors duration-500">{label}</span>
    <span className="text-white font-serif text-lg md:text-xl tracking-tight">{value}</span>
  </div>
);

// --- NEW: DRAWER (SIDE PANEL) ---
export const Drawer: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode; title?: string }> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className={`fixed top-0 right-0 bottom-0 z-[101] w-full md:w-[600px] bg-[#0A0A0A] border-l border-white/10 shadow-2xl transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="h-full overflow-y-auto custom-scrollbar p-8 md:p-12 relative">
            <div className="flex items-center justify-between mb-12">
               {title && <h3 className="font-serif text-2xl text-white">{title}</h3>}
               <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors group">
                  <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
               </button>
            </div>
            {children}
         </div>
      </div>
    </>
  );
};

// --- NEW: TABS ---
export const Tabs: React.FC<{ tabs: string[]; activeTab: string; onChange: (tab: string) => void }> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all duration-300 whitespace-nowrap
            ${activeTab === tab 
              ? 'bg-[#C5A028] text-black border-[#C5A028]' 
              : 'bg-white/5 text-white/60 border-white/5 hover:border-white/20 hover:text-white'
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};