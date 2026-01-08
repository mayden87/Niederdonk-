import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] pt-16 md:pt-24 pb-12 overflow-hidden border-t border-white/5 mt-24 group">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      {/* Ambient Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] bg-white/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP ROW: Branding & Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12 mb-12 md:mb-20">
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-sm flex items-center justify-center font-bold text-black text-sm md:text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                QNL
                </div>
                {/* Mobile only: Quick tagline next to logo */}
                <span className="md:hidden text-xs text-text-muted uppercase tracking-widest opacity-60">Investment-Memorandum</span>
            </div>
            
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight mb-4 leading-none">
              Quartier <br className="hidden md:block" />
              <span className="text-[#D4AF37] md:text-white md:group-hover:text-[#D4AF37] transition-colors duration-500">Niederdonk Living</span>
            </h2>
            <p className="text-text-muted max-w-md font-light text-sm md:text-lg leading-relaxed opacity-80 hidden md:block">
              Eine Entwicklung, die Maßstäbe setzt. <br />
              Exklusives Wohnen in Meerbusch-Büderich.
            </p>
          </div>

          {/* HIGH END BUTTON (Full width mobile, compact desktop) */}
          <button 
            onClick={scrollToTop}
            className="w-full md:w-auto group/btn flex items-center justify-between md:justify-start gap-4 px-6 md:px-8 py-4 md:py-4 rounded-xl md:rounded-full border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 bg-white/5 active:bg-white/10 hover:bg-[#D4AF37]/10 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col text-left">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white group-hover/btn:text-[#D4AF37] transition-colors">Zurück nach oben</span>
                <span className="md:hidden text-[10px] text-text-muted mt-1">Zum Seitenanfang springen</span>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-[#D4AF37] group-hover/btn:text-black transition-all duration-300 shadow-inner">
              <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </button>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 md:mb-16" />

        {/* MIDDLE ROW: Mobile Grid Layout (2 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          
          {/* Col 1: Legal / Disclaimer (Full width on mobile for readability) */}
          <div className="col-span-2 md:col-span-5 order-3 md:order-1 pt-4 md:pt-0 border-t border-white/5 md:border-none">
            <h4 className="text-white font-medium mb-4 md:mb-6 flex items-center gap-2 text-sm md:text-base">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4AF37]" />
              Disclaimer & Vertraulichkeit
            </h4>
            <p className="text-text-muted text-[10px] md:text-xs leading-loose opacity-60 text-justify">
              Dieses Investment-Memorandum dient ausschließlich Informationszwecken für ausgewählte Interessenten. 
              Es stellt kein verbindliches Verkaufsangebot dar. Alle Angaben, Pläne und Berechnungen beruhen auf 
              dem Planungsstand von 01/2026 und können sich im Rahmen des Genehmigungsverfahrens ändern. 
              Die Weitergabe an Dritte ist ohne schriftliche Zustimmung der Eigentümergesellschaft untersagt.
            </p>
          </div>

          {/* Col 2: Navigation (Left Col Mobile) */}
          <div className="col-span-1 md:col-span-3 md:col-start-7 order-1 md:order-2">
             <h4 className="text-white font-medium mb-4 md:mb-6 text-sm md:text-base">Navigation</h4>
             <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-text-muted">
                {['Überblick', 'Planung', 'Kalkulation', 'Sensitivität', 'Konditionen'].map((item) => (
                  <li key={item}>
                    <a href={`#${item === 'Konditionen' ? 'contact' : item.toLowerCase()}`} className="hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300 inline-block py-1">
                      {item}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          {/* Col 3: Address (Right Col Mobile) */}
          <div className="col-span-1 md:col-span-3 order-2 md:order-3">
            <h4 className="text-white font-medium mb-4 md:mb-6 text-sm md:text-base">Standort</h4>
            <address className="not-italic text-xs md:text-sm text-text-muted leading-relaxed opacity-80">
              Niederdonker Str. 81<br />
              40667 Meerbusch<br />
              Deutschland
            </address>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/5">
               <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#D4AF37]">Premium Asset Class</p>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 md:gap-0">
          <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] opacity-50 text-center md:text-left">
            © 2026 QNL Investment. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 md:gap-8">
             <a href="#" className="text-[10px] uppercase tracking-wider text-text-muted hover:text-white transition-colors opacity-60 hover:opacity-100">Impressum</a>
             <a href="#" className="text-[10px] uppercase tracking-wider text-text-muted hover:text-white transition-colors opacity-60 hover:opacity-100">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;