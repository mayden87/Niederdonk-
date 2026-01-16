
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Mail,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  number: string;
};

const NAV: NavItem[] = [
  { href: "#home", label: "Intro", number: "01" },
  { href: "#thesis", label: "Überblick", number: "02" },
  { href: "#mobility", label: "Mobilität", number: "03" },
  { href: "#tech", label: "Technik", number: "04" },
  { href: "#finance", label: "Kalkulation", number: "05" },
  { href: "#sensitivity", label: "Sensitivität", number: "06" },
  { href: "#market", label: "Markt", number: "07" },
  { href: "#contact", label: "Kontakt", number: "08" },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [locked]);
}

function useScrollProgress() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(clamp(y / max, 0, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, progress };
}

function useActiveSection(items: NavItem[]) {
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { 
        // Create a narrow detection zone in the middle of the screen
        // Top 45% and Bottom 45% are ignored. 
        // An element is active when it crosses the center 10% strip.
        rootMargin: "-45% 0px -45% 0px", 
        threshold: 0 
      }
    );

    items.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return activeHref;
}

const Navbar: React.FC = () => {
  const { scrolled, progress } = useScrollProgress();
  const activeHref = useActiveSection(NAV);
  const [sheetOpen, setSheetOpen] = useState(false);
  useLockBodyScroll(sheetOpen);

  const activeItem = useMemo(
    () => NAV.find((n) => n.href === activeHref) ?? NAV[0],
    [activeHref]
  );

  const go = (href: string) => {
    setSheetOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y - 80, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[120] border-b transition-all duration-700 ${scrolled ? "bg-black/60 backdrop-blur-xl border-white/5" : "bg-transparent border-transparent"}`}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-12">
          {/* Main Container: Exact height match for Logo and Controls */}
          <div className="h-[76px] md:h-[96px] flex items-center justify-between relative">
            
            {/* Logo Group */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 md:gap-4 group h-full py-2">
              <span className="font-serif text-3xl md:text-4xl text-white font-light tracking-tighter">
                Q<span className="text-[#C5A028]">.</span>
              </span>
              <div className="flex flex-col leading-none text-left">
                <span className="text-white font-serif text-[14px] md:text-[15px] tracking-tight uppercase">Niederdonk</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.45em] text-[#C5A028] font-bold mt-1">Living</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 h-full">
              {NAV.slice(0, 9).map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className={`text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${activeHref === item.href ? "text-[#C5A028]" : "text-white/40 hover:text-white"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Controls Group - Perfectly Aligned */}
            <div className="flex items-center gap-2.5 h-full py-2">
              <div className="hidden md:block">
                <a href="#contact" className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white/80 hover:bg-white hover:text-black transition-all">Concierge</a>
              </div>

              {/* Mobile Pill - Synchronized & Smaller */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={() => setSheetOpen(true)}
                  className="h-10 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full pl-3.5 pr-1.5 transition-all active:scale-95 group shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#C5A028] font-bold text-[10px] font-mono leading-none">{activeItem.number}</span>
                    <div className="w-px h-2.5 bg-white/20" />
                    <span className="text-white font-serif text-[13px] leading-none tracking-tight">{activeItem.label}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A028]" />
                  </div>
                </button>

                {/* Call/Email Button - Next to Pill */}
                <a
                  href="mailto:qnl@baugrundstueck-meerbusch.de"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C5A028] text-black shadow-lg shadow-[#C5A028]/20 transition-transform active:scale-90"
                  aria-label="E-Mail schreiben"
                >
                  <Mail className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Progress Bar (Hairline) */}
            <div className="absolute bottom-0 left-0 h-[1px] bg-[#C5A028] transition-all duration-300 ease-out" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </nav>

      {/* MOBILE GLOSSY MENU */}
      <div className={`fixed inset-0 z-[999] transition-all duration-700 ${sheetOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSheetOpen(false)} />
        
        <div className={`absolute inset-x-0 bottom-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${sheetOpen ? "translate-y-0" : "translate-y-full"}`}>
          <div className="relative rounded-t-[40px] overflow-hidden border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            
            {/* Glossy Background with Blurred Image & Overlay */}
            <div className="absolute inset-0 z-0">
               <img src="https://whhy.de/wp-content/uploads/2026/01/2.png" className="w-full h-full object-cover blur-3xl opacity-40 scale-150 transform rotate-3" alt="" />
               <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
               <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5" />
            </div>

            <div className="relative z-10 p-6 pb-14">
               {/* Drag Handle */}
               <div className="w-10 h-1 bg-white/10 rounded-full mx-auto mb-10" />
               
               <div className="flex justify-between items-center mb-8 px-2">
                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#C5A028] font-bold mb-1">Auswahl</p>
                    <h3 className="text-white font-serif text-2xl tracking-tight">Menü Index</h3>
                  </div>
                  <button onClick={() => setSheetOpen(false)} className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white/40 active:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
               </div>

               <div className="grid grid-cols-1 gap-1.5">
                 {NAV.map((item) => {
                   const active = item.href === activeHref;
                   return (
                     <button
                       key={item.href}
                       onClick={() => go(item.href)}
                       className={`w-full py-4 px-5 flex items-center justify-between rounded-2xl transition-all duration-500 ${active ? "bg-[#C5A028]/15 border border-[#C5A028]/20" : "active:bg-white/5 border border-transparent hover:bg-white/[0.02]"}`}
                     >
                       <div className="flex items-center gap-4">
                         <span className={`font-mono text-[10px] font-bold ${active ? "text-[#C5A028]" : "text-white/20"}`}>{item.number}</span>
                         <span className={`font-serif text-[18px] transition-colors ${active ? "text-white" : "text-white/60"}`}>{item.label}</span>
                       </div>
                       {active && <ArrowUpRight className="w-4 h-4 text-[#C5A028] animate-in fade-in zoom-in duration-500" />}
                     </button>
                   );
                 })}
               </div>

               <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-3 px-2">
                 <a href="mailto:qnl@baugrundstueck-meerbusch.de" className="flex items-center justify-center gap-2 py-4 bg-[#C5A028] text-black rounded-2xl text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-[#C5A028]/20">
                   <Mail className="w-3.5 h-3.5" /> E-Mail
                 </a>
                 <button onClick={() => setSheetOpen(false)} className="py-4 bg-white/5 text-white/80 rounded-2xl text-[11px] font-bold uppercase tracking-widest border border-white/10">
                   Schließen
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
