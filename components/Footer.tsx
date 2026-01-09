
import React from "react";
import {
  ArrowUpRight,
  ChevronUp,
  FileText,
  Globe,
  Linkedin,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  // Anpassbar
  const BRAND = {
    short: "QNL",
    name: "Quartier Niederdonk Living",
    location: "40667 Meerbusch-Büderich · Deutschland",
    email: "invest@qnl-meerbusch.de",
    phone: "+49 123 456 789",
    websiteLabel: "qnl-meerbusch.de",
    websiteUrl: "#",
    linkedinUrl: "#",
  };

  const NAV = [
    { href: "#overview", label: "Überblick", meta: "Eckdaten" },
    { href: "#roadmap", label: "Roadmap", meta: "Zeitplan" },
    { href: "#mobility", label: "Mobilität", meta: "Stellplätze" },
    { href: "#finance", label: "Kalkulation", meta: "GKI / Exit" },
    { href: "#sensitivity", label: "Sensitivität", meta: "Stresstest" },
    { href: "#market", label: "Markt", meta: "Vertrieb" },
    { href: "#contact", label: "Kontakt", meta: "Concierge" },
  ] as const;

  const DOCS = [
    { href: "#expose", label: "Exposé (PDF)", meta: "Download" },
    { href: "#", label: "Digitaler Datenraum", meta: "Zugang auf Anfrage" },
    { href: "#impressum", label: "Impressum", meta: "Rechtliches" },
    { href: "#datenschutz", label: "Datenschutz", meta: "Privacy" },
  ] as const;

  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // Footer -> Navigation: gleiche Logik wie Navbar (Offset für fixed header)
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
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"260\" height=\"260\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"260\" height=\"260\" filter=\"url(%23n)\" opacity=\"0.9\"/></svg>')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-14 md:pb-16">
        {/* Statement */}
        <div className="max-w-[980px]">
          <p className="text-[10px] uppercase tracking-[0.34em] text-white/45 font-bold">
            Vertrauliches Investment Memorandum
          </p>

          <div className="mt-5 flex items-start gap-4">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center">
              <span className="font-serif font-bold text-white text-lg">Q</span>
            </div>

            <div className="min-w-0">
              <h2 className="text-white font-serif text-3xl md:text-5xl leading-[0.95]">
                {BRAND.name}
                <span className="text-[#C5A028] italic">.</span>
              </h2>
              <p className="mt-4 text-white/55 leading-relaxed max-w-[62ch]">
                Premium-Wohnquartier in Meerbusch-Büderich. Alle Angaben basieren auf dem
                Planungsstand und sind ausschließlich für ausgewählte Interessenten bestimmt.
              </p>
              <p className="mt-4 text-white/35 text-sm">
                {BRAND.location}
              </p>
            </div>
          </div>

          <div className="mt-10 h-px w-24 bg-[#C5A028]/35" />
        </div>

        {/* Grid */}
        <div className="mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* Navigation */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#C5A028]/90 font-bold">
              Navigation
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
              {NAV.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToHash(item.href)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-6 hover:bg-white/[0.05] transition"
                >
                  <div className="min-w-0">
                    <p className="text-white font-serif text-lg truncate">{item.label}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/35 font-bold">
                      {item.meta}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/35 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Dokumente / Legal */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#C5A028]/90 font-bold">
              Unterlagen
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
              {DOCS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-6 py-4 hover:bg-white/[0.05] transition"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="min-w-0">
                      <p className="text-white/85 font-medium truncate">{item.label}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/35 font-bold">
                        {item.meta}
                      </p>
                    </div>
                    <FileText className="w-4 h-4 text-white/35 shrink-0" />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="p-2 rounded-2xl bg-[#C5A028]/10 border border-[#C5A028]/15">
                <ShieldCheck className="w-4 h-4 text-[#C5A028]" />
              </div>
              <div>
                <p className="text-white/80 font-medium">Vertraulichkeit</p>
                <p className="mt-2 text-white/45 text-sm leading-relaxed">
                  Dieses Dokument stellt kein öffentliches Angebot dar. Eine Weitergabe an Dritte ist
                  ohne schriftliche Zustimmung untersagt.
                </p>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#C5A028]/90 font-bold">
              Kontakt
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl px-6 py-5 hover:bg-white/[0.04] transition"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2 rounded-2xl bg-white/5 border border-white/10">
                    <Mail className="w-4 h-4 text-[#C5A028]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/35 font-bold">
                      E-Mail
                    </p>
                    <p className="mt-1 text-white/85 font-medium truncate">{BRAND.email}</p>
                    <p className="mt-1 text-white/40 text-sm">
                      Für Exposé, Datenraum & Rückfragen.
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/35 group-hover:text-white/60 transition shrink-0" />
              </a>

              <a
                href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                className="group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl px-6 py-5 hover:bg-white/[0.04] transition"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2 rounded-2xl bg-white/5 border border-white/10">
                    <Phone className="w-4 h-4 text-[#C5A028]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/35 font-bold">
                      Telefon
                    </p>
                    <p className="mt-1 text-white/85 font-medium truncate">{BRAND.phone}</p>
                    <p className="mt-1 text-white/40 text-sm">
                      Diskrete Anfrage · Rückruf nach Termin.
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/35 group-hover:text-white/60 transition shrink-0" />
              </a>

              {/* Social / Web (optional, clean) */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BRAND.websiteUrl}
                  className="flex items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.05] transition"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Globe className="w-4 h-4 text-white/55 shrink-0" />
                    <span className="text-white/75 text-sm truncate">{BRAND.websiteLabel}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30" />
                </a>

                <a
                  href={BRAND.linkedinUrl}
                  className="flex items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.05] transition"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Linkedin className="w-4 h-4 text-white/55 shrink-0" />
                    <span className="text-white/75 text-sm truncate">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-[78ch]">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/35 font-bold">
              Rechtlicher Hinweis
            </p>
            <p className="mt-3 text-white/40 text-sm leading-relaxed">
              Alle Angaben, Pläne und Berechnungen beruhen auf dem aktuellen Planungsstand und können
              sich im Rahmen des Genehmigungsverfahrens ändern. Irrtümer vorbehalten.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollTop}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3 transition flex items-center gap-2"
              aria-label="Nach oben"
            >
              <ChevronUp className="w-4 h-4 text-white/70 group-hover:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-white/70">
                Top
              </span>
            </button>

            <div className="text-[10px] uppercase tracking-[0.34em] text-white/25 font-bold">
              © {year} {BRAND.short} Investment
            </div>
          </div>
        </div>
      </div>

      {/* Quiet wordmark (decorative, ultra subtle) */}
      <div className="pointer-events-none select-none pb-10 md:pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mt-12 md:mt-16 overflow-hidden">
            <div className="text-white/[0.04] font-serif font-black leading-none tracking-tight text-[16vw] md:text-[10vw]">
              NIEDERDONK
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
