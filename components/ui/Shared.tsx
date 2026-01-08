import React, { useEffect, useRef, useState } from 'react';

// --- ANIMATION WRAPPER ---
export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- THE UNIFIED CARD COMPONENT (FORMERLY SPOTLIGHT) ---
// This is now the "One Source of Truth" for boxes to ensure consistency.
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
      className={`relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#101010] shadow-2xl transition-all duration-500 hover:border-white/20 group ${className} ${noPadding ? '' : 'p-8 md:p-10'}`}
    >
      {/* Texture Grain */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-overlay" />

      {/* The Moving Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 ease-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.06), transparent 40%)`,
        }}
      />
      
      {/* The Content */}
      <div className="relative h-full z-10 flex flex-col">{children}</div>
    </div>
  );
};

// Aliases for backward compatibility but mapped to the Unified style
export const SpotlightCard = UnifiedCard;
export const PremiumCard = UnifiedCard;
export const GlassContainer = UnifiedCard;

// --- SHARED UI COMPONENTS ---

export const SectionTag: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`inline-flex items-center gap-4 mb-6 ${className}`}>
    <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
    <span className="uppercase tracking-[0.25em] text-[11px] text-[#D4AF37] font-bold">
      {children}
    </span>
  </div>
);

export const MetricRow: React.FC<{ label: string; value: string; border?: boolean }> = ({ label, value, border = true }) => (
  <div className={`flex justify-between items-center py-4 ${border ? 'border-b border-white/5' : ''} group`}>
    <span className="text-text-muted text-sm font-light group-hover:text-white transition-colors">{label}</span>
    <span className="text-white font-medium tracking-wide font-sans">{value}</span>
  </div>
);