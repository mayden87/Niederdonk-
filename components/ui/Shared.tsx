
import React, { useEffect, useRef, useState } from 'react';
import { X, Download } from 'lucide-react';

// --- UPDATED: ULTRA-SUBTLE HAIRLINE DIVIDER ---
// Minimalist tapering line that blends perfectly into the background
export const SectionDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full flex justify-center ${className}`}>
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A028]/25 to-transparent" />
  </div>
);

// --- NEW: LUXURY "STAGE" WRAPPER ---
export const Stage: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div
    className={[
      "relative rounded-[32px] border border-white/10 overflow-hidden",
      "bg-[radial-gradient(1200px_700px_at_20%_0%,rgba(197,160,40,0.12),transparent_55%),radial-gradient(900px_600px_at_80%_20%,rgba(255,255,255,0.06),transparent_60%)]",
      "shadow-[0_30px_120px_-60px_rgba(0,0,0,0.9)]",
      className || "",
    ].join(" ")}
  >
    <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"220\" height=\"220\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"220\" height=\"220\" filter=\"url(%23n)\" opacity=\"0.9\"/></svg>')",
      }}
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
    <div className="relative">{children}</div>
  </div>
);

// --- NEW: LUXURY TABS ---
export const LuxuryTabs: React.FC<{
  items: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}> = ({ items, value, onChange }) => (
  <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
    {items.map((t) => {
      const active = value === t.id;
      return (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={[
            "relative py-2 text-[11px] uppercase tracking-[0.22em] font-bold transition-colors whitespace-nowrap",
            active ? "text-white" : "text-white/45 hover:text-white/80",
          ].join(" ")}
        >
          {t.label}
          <span
            className={[
              "absolute left-0 right-0 -bottom-1 h-[2px] rounded-full transition-all duration-500",
              active ? "bg-[#C5A028] opacity-100" : "bg-white/10 opacity-0",
            ].join(" ")}
          />
        </button>
      );
    })}
  </div>
);

// --- NEW: ROOM INDEX LIST ---
export const RoomIndex: React.FC<{
  rooms: { id: string; label: string; area: number; icon?: React.ReactNode }[];
  activeId: string | null;
  onPick: (id: string) => void;
}> = ({ rooms, activeId, onPick }) => (
  <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
    {rooms.map((r) => {
      const active = activeId === r.id;
      return (
        <button
          key={r.id}
          onClick={() => onPick(r.id)}
          className={[
            "w-full px-5 py-4 flex items-center justify-between gap-4 text-left transition duration-300",
            active ? "bg-[#C5A028]/10" : "hover:bg-white/[0.05]",
          ].join(" ")}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className={active ? "text-[#C5A028]" : "text-white/45"}>
              {r.icon ?? null}
            </span>
            <span className={["truncate", active ? "text-white font-medium" : "text-white/80"].join(" ")}>
              {r.label}
            </span>
          </div>
          <span className={["font-mono text-xs shrink-0", active ? "text-[#C5A028]" : "text-white/45"].join(" ")}>
            {r.area.toFixed(1)} m²
          </span>
        </button>
      );
    })}
  </div>
);

// --- GLOBAL MOUSE SPOTLIGHT ---
export const GlobalSpotlight: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[5] transition-opacity duration-700"
      style={{
        background: `radial-gradient(1000px circle at ${pos.x}px ${pos.y}px, rgba(255, 255, 255, 0.03), transparent 60%)`
      }}
    />
  );
};

// --- AMBIENT PARTICLES ---
export const AmbientParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    left: `${(i * 7) % 100}%`,
    top: `${(i * 13) % 100}%`,
    duration: 20 + (i % 10),
    delay: i * 2,
    size: (i % 3) + 1
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-[0.05]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s infinite linear`,
            animationDelay: `-${p.delay}s`
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 0.15; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// --- MOBILE SWIPER WRAPPER ---
export const MobileSwiper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childCount = React.Children.count(children);

  const handleScroll = () => {
    if (scrollRef.current) {
      const x = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(x / (width * 0.7));
      setActiveIndex(Math.min(Math.max(0, index), childCount - 1));
    }
  };

  return (
    <div className="relative">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className={`flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-6 pb-8 md:pb-0 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 ${className}`}
        style={{ scrollBehavior: 'smooth' }}
      >
        {React.Children.map(children, (child, i) => (
          <div className="min-w-[85vw] md:min-w-0 snap-center md:snap-align-none flex">
             <div className="w-full h-full">
                {child}
             </div>
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center gap-2 mt-4 absolute bottom-0 left-0 right-0 pointer-events-none">
        {Array.from({ length: childCount }).map((_, i) => (
          <div 
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-[#C5A028]' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- ATMOSPHERIC BACKGROUND COMPONENT ---
export const SectionBackground: React.FC<{ src: string; opacity?: number; color?: string }> = ({ src, opacity = 0.3, color = 'from-[#050505] via-transparent to-[#050505]' }) => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[60s] ease-linear scale-110"
        style={{ 
            backgroundImage: `url('${src}')`,
            opacity: opacity,
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${color}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-60" />
  </div>
);

// --- ANIMATION WRAPPER ---
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
export const UnifiedCard: React.FC<{ children: React.ReactNode; className?: string; noPadding?: boolean }> = ({ children, className = '', noPadding = false }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
        bg-[#0A0A0A]/80 
        backdrop-blur-md
        shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] 
        transition-colors duration-700 
        group 
        ${className} 
        ${noPadding ? '' : 'p-6 md:p-8 lg:p-10'}
      `}
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-700 ease-out"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(197,160,40,0.06), transparent 40%)`,
        }}
      />
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

// --- DRAWER ---
export const Drawer: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode; title?: string }> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={onClose}
      />
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

// --- TABS (Legacy) ---
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
