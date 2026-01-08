import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      // Glass effect trigger
      setScrolled(window.scrollY > 50);

      // Progress Bar Calculation
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock Body Scroll when Menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${
          scrolled 
            ? 'bg-[#0F0F0F]/80 backdrop-blur-xl border-white/5 py-4 shadow-2xl' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-sm bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors duration-500">
               <span className="font-serif font-bold text-white relative z-10 group-hover:scale-110 transition-transform duration-500">Q</span>
               <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </div>
            <div className={`flex flex-col transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
               <span className="font-bold text-white text-sm tracking-[0.2em] leading-none">QNL</span>
               {/* Increased contrast here: text-white/60 instead of text-text-muted/opacity-70 */}
               <span className="text-[9px] text-white/60 uppercase tracking-widest mt-1 group-hover:text-[#D4AF37] transition-colors">Meerbusch</span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                // Increased contrast: text-white/70 instead of text-text-muted
                className="relative text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <div className="w-px h-6 bg-white/10 mx-2" />
            
            <a 
              href="#contact"
              className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors duration-300 rounded-sm"
            >
              Exposé
            </a>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden group relative w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 z-50 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
          >
            <div className={`absolute w-5 h-[1px] bg-white group-hover:bg-black transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <div className={`absolute w-5 h-[1px] bg-white group-hover:bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`absolute w-5 h-[1px] bg-white group-hover:bg-black transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>

        {/* SCROLL PROGRESS BAR */}
        <div className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-100 ease-out z-40 shadow-[0_0_15px_#D4AF37] ${isOpen ? 'opacity-0' : 'opacity-100'}`} style={{ width: `${scrollProgress * 100}%` }} />
      </nav>

      {/* FULLSCREEN MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-[800ms] cubic-bezier(0.77, 0, 0.175, 1) ${
          isOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

        <div className="h-full flex flex-col relative z-10 pt-28 pb-8 px-6 overflow-y-auto">
           
           {/* MENU LINKS LIST */}
           <div className="flex-1 flex flex-col justify-center space-y-6">
             {links.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between border-b border-white/10 pb-4 transition-all duration-700 transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${100 + idx * 50}ms` }}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#D4AF37] font-mono mb-1 opacity-80 group-hover:translate-x-1 transition-transform">{link.number}</span>
                    <span className="text-4xl sm:text-5xl font-serif text-white font-light group-hover:text-[#D4AF37] transition-colors duration-300">
                      {link.label}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                </a>
             ))}
           </div>

           {/* BOTTOM ACTION AREA */}
           <div 
             className={`mt-12 space-y-4 transition-all duration-1000 delay-500 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
             }`}
           >
              {/* WhatsApp / Concierge Button */}
              <button 
                onClick={() => window.open('https://wa.me/49123456789', '_blank')}
                className="w-full bg-[#D4AF37] hover:bg-[#b8952b] text-black p-4 rounded-xl flex items-center justify-between group transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-black/10 p-2 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-black" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs uppercase font-bold tracking-widest opacity-70">Direct Concierge</p>
                    <p className="font-serif font-bold text-lg">Via WhatsApp</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Actions Grid */}
              <div className="grid grid-cols-2 gap-4">
                <a href="tel:+49211123456" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-medium text-white">Anrufen</span>
                </a>
                <a href="mailto:invest@qnl.de" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-medium text-white">E-Mail</span>
                </a>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;