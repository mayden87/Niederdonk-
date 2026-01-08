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
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
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

// --- SPOTLIGHT CARD (NEW HIGH END INTERACTION) ---
export const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212]/80 backdrop-blur-xl transition-all duration-500 group ${className}`}
    >
      {/* The Moving Spotlight Gradient - Softer and larger */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 ease-out"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.08), transparent 40%)`,
        }}
      />
      
      {/* The Content */}
      <div className="relative h-full z-10">{children}</div>
    </div>
  );
};

// --- SHARED UI COMPONENTS ---

export const SectionTag: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`inline-flex items-center gap-4 mb-6 ${className}`}>
    <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent opacity-60"></div>
    <span className="uppercase tracking-[0.25em] text-[11px] text-[#D4AF37] font-semibold drop-shadow-sm">
      {children}
    </span>
  </div>
);

export const PremiumCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative group isolate ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md rounded-2xl transition-all duration-700 border border-white/5 group-hover:border-[#D4AF37]/30" />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05)_0%,transparent_60%)] rounded-2xl pointer-events-none" />
    <div className="relative z-10 h-full">
      {children}
    </div>
  </div>
);

export const GlassContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative isolate overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-3xl rounded-3xl border border-white/5 shadow-2xl" />
    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export const MetricRow: React.FC<{ label: string; value: string; border?: boolean }> = ({ label, value, border = true }) => (
  <div className={`flex justify-between items-center py-3 ${border ? 'border-b border-white/5' : ''} group`}>
    <span className="text-text-muted font-light text-sm group-hover:text-white transition-colors">{label}</span>
    <span className="text-white font-medium tracking-wide group-hover:translate-x-1 transition-transform duration-300">{value}</span>
  </div>
);