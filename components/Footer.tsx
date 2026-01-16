
import React from "react";
import {
  ArrowUpRight,
  ChevronUp,
  Mail,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const BRAND = {
    short: "QNL",
    name: "Quartier Niederdonk Living",
    location: "40667 Meerbusch-Büderich · Deutschland",
    email: "qnl@baugrundstueck-meerbusch.de",
  };

  // Split Navigation into logical groups
  const NAV_CONCEPT = [
    { href: "#overview", label: "Überblick", meta: "01" },
    { href: "#planning", label: "Sicherheit", meta: "02" },
    { href: "#mobility", label: "Mobilität", meta: "03" },
    { href: "#tech", label: "Technik", meta: "04" },
  ];

  const NAV_INVEST = [
    { href: "#finance", label: "Kalkulation", meta: "05" },
    { href: "#sensitivity", label: "Sensitivität", meta: "06" },
    { href: "#market", label: "Markt", meta: "07" },
    { href: "#textversion", label: "Galerie", meta: "Img" },
  ];

  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY;
    const offset = 96;
    window.scrollTo({ top: Math.max(0, y - offset), behavior: "smooth" });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#020202] overflow-hidden">
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A028]/45 to-transparent" />

      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[920px] h-[420px] bg-[#C5A028]/10 blur-[110px] rounded-full opacity-70" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[520px] h-[520px] bg-white/6 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-14 md:pb-16">
        
        {/* TOP ROW: Brand & Intro */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-[600px]">
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/45 font-bold mb-6">
                    Vertrauliches Investment Memorandum
                </p>
                <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center shrink-0">
                        <span className="font-serif font-bold text-white text-lg">Q</span>
                    </div>
                    <div>
                        <h2 className="text-white font-serif text-3xl md:text-4xl leading-[0.95] mb-4">
                            {BRAND.name}
                            <span className="text-[#C5A028] italic">.</span>
                        </h2>
                        <p className="text-white/55 leading-relaxed max-w-[45ch]">
                            Premium-Wohnquartier in Meerbusch-Büderich. Detaillierte Planungssicherheit für anspruchsvolle Investoren.
                        </p>
                    </div>
                </div>
            </div>

            {/* Address Block */}
            <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/[0.03] border border-white/5 md:min-w-[300px]">
                <MapPin className="w-5 h-5 text-[#C5A028] mt-1 shrink-0" />
                <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Standort</p>
                    <p className="text-white font-medium">{BRAND.location}</p>
                </div>
            </div>
        </div>

        <div className="h-px w-full bg-white/5 mb-16" />

        {/* MAIN GRID: 3 Columns (Concept | Invest | Contact) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* COL 1: KONZEPT */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#C5A028]/90 font-bold mb-6">
              Konzept & Planung
            </p>
            <div className="flex flex-col gap-2">
                {NAV_CONCEPT.map((item) => (
                    <button
                        key={item.href}
                        onClick={() => scrollToHash(item.href)}
                        className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all text-left"
                    >
                        <span className="text-white/80 font-serif text-lg group-hover:text-white transition-colors">{item.label}</span>
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-mono text-white/20 group-hover:text-[#C5A028] transition-colors">{item.meta}</span>
                            <ArrowUpRight className="w-3 h-3 text-white/20 group-hover:text-white transition-colors" />
                        </div>
                    </button>
                ))}
            </div>
          </div>

          {/* COL 2: INVESTMENT */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#C5A028]/90 font-bold mb-6">
              Investment Case
            </p>
            <div className="flex flex-col gap-2">
                {NAV_INVEST.map((item) => (
                    <button
                        key={item.href}
                        onClick={() => scrollToHash(item.href)}
                        className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all text-left"
                    >
                        <span className="text-white/80 font-serif text-lg group-hover:text-white transition-colors">{item.label}</span>
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-mono text-white/20 group-hover:text-[#C5A028] transition-colors">{item.meta}</span>
                            <ArrowUpRight className="w-3 h-3 text-white/20 group-hover:text-white transition-colors" />
                        </div>
                    </button>
                ))}
            </div>
          </div>

          {/* COL 3: CONTACT */}
          <div className="md:col-span-4 flex flex-col h-full">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#C5A028]/90 font-bold mb-6">
              Kontakt
            </p>
            
            <div className="flex-1 flex flex-col gap-4">
                 {/* Email CTA */}
                <a
                    href={`mailto:${BRAND.email}`}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#C5A028] px-8 py-8 transition-transform active:scale-[0.98]"
                >
                    <div className="relative z-10 flex flex-col items-start gap-4">
                        <div className="p-3 rounded-xl bg-black/10 text-black">
                             <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-black/60 font-bold mb-1">
                                Direktanfrage
                            </p>
                            <p className="text-black font-serif text-xl font-medium break-all">
                                {BRAND.email}
                            </p>
                        </div>
                    </div>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>

                {/* Confidentiality Box */}
                <div className="mt-auto p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                    <div className="flex items-center gap-3 mb-3 text-[#C5A028]">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Vertraulichkeit</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed">
                        Dieses Dokument stellt kein öffentliches Angebot dar. Eine Weitergabe an Dritte ist ohne schriftliche Zustimmung untersagt.
                    </p>
                </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-[78ch]">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/35 font-bold">
              Rechtlicher Hinweis
            </p>
            <p className="mt-3 text-white/40 text-sm leading-relaxed">
              Alle Angaben, Pläne und Berechnungen beruhen auf dem aktuellen Planungsstand und können
              sich im Rahmen des Genehmigungsverfahrens ändern. Irrtümer vorbehalten.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-[10px] uppercase tracking-[0.34em] text-white/25 font-bold">
              © {year} {BRAND.short}
            </div>

            <button
              onClick={scrollTop}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.1] flex items-center justify-center transition-colors group"
              aria-label="Nach oben"
            >
              <ChevronUp className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Wordmark */}
      <div className="pointer-events-none select-none pb-8 md:pb-0">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mt-12 overflow-hidden opacity-[0.03]">
            <div className="text-white font-serif font-black leading-none tracking-tight text-[16vw] md:text-[13vw] text-center md:text-left">
              NIEDERDONK
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
