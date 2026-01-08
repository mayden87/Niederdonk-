import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const links = [
    { href: '#overview', label: 'Überblick', number: '01' },
    { href: '#planning', label: 'Planung', number: '02' },
    { href: '#mobility', label: 'Mobilität', number: '03' },
    { href: '#finance', label: 'Kalkulation', number: '04' },
    { href: '#sensitivity', label: 'Sensitivität', number: '05' },
    { href: '#contact', label: 'Konditionen', number: '06' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled 
            ? 'bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/5' 
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm transition-colors duration-500 group-hover:border-[#C5A028]/50">
               <span className="font-serif font-bold text-white text-sm md:text-base">Q</span>
            </div>
            <div className="flex flex-col">
               <span className="font-bold text-white text-xs tracking-[0.15em] leading-none mb-1">QNL</span>
               <span className="text-[9px] text-white/50 uppercase tracking-widest group-hover:text-[#C5A028] transition-colors">Meerbusch</span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
            
            <a 
              href="#contact"
              className="ml-4 px-6 py-2 bg-[#C5A028] text-[#050505] text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors duration-500 rounded-sm"
            >
              Exposé
            </a>
          </div>

          {/* BURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-end gap-1.5 group z-50"
          >
            <span className={`h-[1px] bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`h-[1px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-[1px] bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-6'}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-2xl transition-all duration-[800ms] cubic-bezier(0.77, 0, 0.175, 1) ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none" />
        
        <div className="h-full flex flex-col justify-center px-8 md:px-12 relative z-10">
           <div className="flex flex-col space-y-2">
             {links.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between py-4 border-b border-white/5 transition-all duration-700 transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${100 + idx * 50}ms` }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[10px] text-[#C5A028] font-mono opacity-60">/{link.number}</span>
                    <span className="text-3xl font-serif text-white font-light group-hover:pl-2 transition-all duration-500">
                      {link.label}
                    </span>
                  </div>
                </a>
             ))}
           </div>

           <div className={`mt-12 transition-all duration-1000 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => window.open('https://wa.me/49123456789', '_blank')}
                className="w-full bg-white/5 border border-white/10 hover:bg-[#C5A028] hover:text-black hover:border-[#C5A028] text-white p-5 rounded-lg flex items-center justify-between group transition-all duration-500"
              >
                <div>
                   <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Concierge</p>
                   <p className="font-serif text-lg">WhatsApp Direkt</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;