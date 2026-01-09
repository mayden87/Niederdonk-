
import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

// --- NEW: GLOBAL MOUSE SPOTLIGHT ---
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

// --- NEW: AMBIENT PARTICLES ---
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

// --- NEW: MOBILE SWIPER WRAPPER ---
// Transforms grids into swipeable carousels on mobile
export const MobileSwiper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childCount = React.Children.count(children);

  const handleScroll = () => {
    if (scrollRef.current) {
      const x = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      // Simple calculation to find current slide
      const index = Math.round(x / (width * 0.7)); // 0.7 because cards are usually 85% width
      setActiveIndex(Math.min(Math.max(0, index), childCount - 1));
    }
  };

  return (
    <div className="relative">
      {/* The Scroll Container - className applied here for Grid Layouts */}
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

      {/* Pagination Dots (Mobile Only) */}
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

// --- TABS ---
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
