
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  TrendingUp,
  Send,
  Phone,
  FileText,
  Check,
  ChevronUp,
  ChevronDown,
  Copy,
  ExternalLink,
  ShieldCheck,
  Download,
  Lock,
  Unlock,
  Loader2
} from "lucide-react";

type ActiveTool = "calc" | "facts" | "status" | "contact";

type Availability = { sold: number; reserved: number; free: number };

type MobileDockProps = {
  // Contact
  phone?: string; // e.g. "+49123456789"
  whatsapp?: string; // e.g. "49123456789" (no +)
  email?: string; // e.g. "info@qnl-invest.de"

  // Docs / Links
  exposePdfUrl?: string;
  dataRoomRequestUrl?: string;

  // Base Case (optional override)
  base?: {
    livingAreaM2: number; // 3250
    parkingRevenue: number; // 1200000
    baseSalePrice: number; // 6500
    baseGKI: number; // 16544000
    baseConstructionTotal: number; // 9100000
    baseConstructionPerM2: number; // 2800
    baseFinancingCost: number; // 600000 (included in baseGKI)
    grz1: string; // "0,27"
    gfz: string; // "0,48"
    grz2?: string; // "0,38"
    lawRef: string; // "§34 BauGB"
    units: number; // 32
    ak34Date: string; // "21.07.2025"
    permitUntil: string; // "Dezember 2026"
  };

  availability?: Availability; // sold/reserved/free
};

const DEFAULTS: Required<MobileDockProps>["base"] = {
  livingAreaM2: 3250,
  parkingRevenue: 1_200_000,
  baseSalePrice: 6500,
  baseGKI: 16_544_000,
  baseConstructionTotal: 9_100_000,
  baseConstructionPerM2: 2800,
  baseFinancingCost: 600_000,
  grz1: "0,27",
  grz2: "0,38",
  gfz: "0,48",
  lawRef: "§34 BauGB",
  units: 32,
  ak34Date: "21.07.2025",
  permitUntil: "Dezember 2026",
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function formatEURCompactM(n: number) {
  // millions with 2 decimals
  const m = n / 1_000_000;
  return `${new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 }).format(m)} Mio. €`;
}

function formatPct(n: number) {
  return `${new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 }).format(n)}%`;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(!!mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

/**
 * “Investment-grade” Quick Model:
 */
const ProfitTool: React.FC<{
  base: Required<MobileDockProps>["base"];
  reducedMotion: boolean;
  onCopy: (txt: string) => void;
}> = ({ base, reducedMotion, onCopy }) => {
  const [salePrice, setSalePrice] = useState(base.baseSalePrice); // €/m²
  const [buildCost, setBuildCost] = useState(base.baseConstructionPerM2); // €/m² (KG300+400 avg)
  const [equity, setEquity] = useState(30); // %
  const [interest, setInterest] = useState(3.5); // % p.a.
  const [duration, setDuration] = useState(2.0); // years

  const model = useMemo(() => {
    const livingArea = base.livingAreaM2;
    const revenue = livingArea * salePrice + base.parkingRevenue;

    const baseNonFin = base.baseGKI - base.baseFinancingCost;
    const scaledConstructionTotal =
      base.baseConstructionTotal * (buildCost / base.baseConstructionPerM2);

    const nonFin =
      baseNonFin - base.baseConstructionTotal + scaledConstructionTotal;

    const debtShare = clamp(1 - equity / 100, 0, 0.95);
    const financing =
      nonFin * debtShare * (interest / 100) * duration * 0.5;

    const invest = nonFin + financing;
    const ebt = revenue - invest;

    const roi = invest > 0 ? (ebt / invest) * 100 : 0;
    const breakEven = (invest - base.parkingRevenue) / livingArea;
    const buffer = salePrice - breakEven;

    return {
      revenue,
      invest,
      ebt,
      roi,
      breakEven,
      buffer,
      nonFin,
      financing,
      debtShare,
    };
  }, [base, salePrice, buildCost, equity, interest, duration]);

  const health = useMemo(() => {
    const b = model.buffer;
    const x = clamp((b - 0) / 2000, 0, 1);
    return Math.pow(x, 0.8);
  }, [model.buffer]);

  const copySummary = () => {
    const txt = [
      "QNL – Quartier Niederdonk Living | Quick-Model",
      `Verkauf Ø: ${salePrice} €/m²`,
      `Baukosten Ø (KG 300+400): ${buildCost} €/m²`,
      `EK: ${equity}% | Zins: ${interest}% p.a. | Laufzeit: ${duration} J.`,
      `Invest: ${formatEURCompactM(model.invest)} | Erlös: ${formatEURCompactM(model.revenue)}`,
      `EBT: ${formatEURCompactM(model.ebt)} | Rendite (EBT/Invest): ${formatPct(model.roi)}`,
      `Break-even: ${new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(
        model.breakEven
      )} €/m² | Puffer: ${new Intl.NumberFormat("de-DE", {
        maximumFractionDigits: 0,
      }).format(model.buffer)} €/m²`,
      "",
      "Hinweis: Indikative Simulation (vereinfachtes Finanzierungsmodell).",
    ].join("\n");

    onCopy(txt);
  };

  return (
    <div className="space-y-5 animate-fade-up">
      {/* Top KPI band */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">
              Projektrendite (EBT/Invest)
            </p>
            <p className="text-4xl font-serif text-white leading-none">
              {formatPct(clamp(model.roi, -99, 99))}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">
              Gewinn (EBT)
            </p>
            <p className="text-xl font-mono text-[#C5A028] leading-none">
              {formatEURCompactM(model.ebt)}
            </p>
          </div>
        </div>

        {/* Confidence / buffer bar */}
        <div className="mt-4">
          <div className="flex justify-between text-[10px] text-white/55 mb-2">
            <span>Break-even</span>
            <span className="font-mono">
              {new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(model.breakEven)}{" "}
              €/m²
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#C5A028]"
              style={{
                width: `${health * 100}%`,
                transition: reducedMotion ? "none" : "width 600ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-white/45">
            <span>Puffer</span>
            <span className="font-mono text-white/80">
              {new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(model.buffer)} €/m²
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={copySummary}
          className="mt-4 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-[11px] uppercase tracking-widest text-white/80 hover:bg-black/40 active:scale-[0.99] transition"
          aria-label="Quick-Model kopieren"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <Copy className="w-4 h-4" />
            Quick-Model kopieren
          </span>
        </button>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <Control
          label="Verkaufspreis Ø (Wohnen)"
          value={`${salePrice} €/m²`}
          minLabel="5.000"
          maxLabel="8.000"
        >
          <input
            type="range"
            min={5000}
            max={8000}
            step={100}
            value={salePrice}
            onChange={(e) => setSalePrice(+e.target.value)}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C5A028]"
          />
        </Control>

        <Control
          label="Baukosten Ø (KG 300+400)"
          value={`${buildCost} €/m²`}
          minLabel="2.400"
          maxLabel="3.400"
        >
          <input
            type="range"
            min={2400}
            max={3400}
            step={50}
            value={buildCost}
            onChange={(e) => setBuildCost(+e.target.value)}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C5A028]"
          />
        </Control>

        <div className="grid grid-cols-2 gap-3">
          <Control label="Eigenkapitalquote" value={`${equity}%`} minLabel="10" maxLabel="50">
            <input
              type="range"
              min={10}
              max={50}
              step={5}
              value={equity}
              onChange={(e) => setEquity(+e.target.value)}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C5A028]"
            />
          </Control>

          <Control label="Zinssatz (p.a.)" value={`${interest.toFixed(1)}%`} minLabel="2.0" maxLabel="7.0">
            <input
              type="range"
              min={2.0}
              max={7.0}
              step={0.1}
              value={interest}
              onChange={(e) => setInterest(+e.target.value)}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C5A028]"
            />
          </Control>
        </div>

        <Control label="Projektlaufzeit (ind.)" value={`${duration.toFixed(1)} Jahre`} minLabel="1.0" maxLabel="4.0">
          <input
            type="range"
            min={1.0}
            max={4.0}
            step={0.1}
            value={duration}
            onChange={(e) => setDuration(+e.target.value)}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C5A028]"
          />
        </Control>

        <p className="text-[10px] text-white/45 leading-snug">
          Diese Simulation ist indikativ. Finanzierung modelliert als Durchschnittsverschuldung über die Laufzeit
          (vereinfachte Annahme).
        </p>
      </div>
    </div>
  );
};

const Control: React.FC<{
  label: string;
  value: string;
  minLabel: string;
  maxLabel: string;
  children: React.ReactNode;
}> = ({ label, value, minLabel, maxLabel, children }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-xs">
      <span className="text-white/55">{label}</span>
      <span className="text-white font-semibold font-mono">{value}</span>
    </div>
    {children}
    <div className="flex justify-between text-[9px] text-white/35 font-mono">
      <span>{minLabel}</span>
      <span>{maxLabel}</span>
    </div>
  </div>
);

// --- NEW: DOWNLOAD GATE ---
const DownloadGate: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', accepted: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.accepted) return;
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
    }, 1200);
  };

  const downloads = [
    { label: "QNL_Exposé_2026.pdf", size: "12 MB" },
    { label: "Grundrisse_Gesamt.pdf", size: "8 MB" },
    { label: "Preisliste_Q2.pdf", size: "0.5 MB" },
  ];

  if (isSubmitted) {
    return (
      <div className="animate-fade-up space-y-5">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
            <Unlock className="w-4 h-4 text-green-400" />
            <div>
                <p className="text-xs font-bold text-green-400 uppercase tracking-wide">Zugang gewährt</p>
                <p className="text-[10px] text-white/60">Session aktiv für 30 Minuten.</p>
            </div>
        </div>

        <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Verfügbare Dokumente</p>
            {downloads.map((doc, i) => (
                <button 
                  key={i}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C5A028]/30 transition-all group"
                  onClick={() => window.open('#', '_blank')}
                >
                   <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#C5A028]/20 transition-colors">
                          <FileText className="w-4 h-4 text-white/60 group-hover:text-[#C5A028]" />
                      </div>
                      <div className="text-left">
                          <p className="text-xs font-mono text-white/90">{doc.label}</p>
                          <p className="text-[9px] text-white/40">{doc.size}</p>
                      </div>
                   </div>
                   <Download className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                </button>
            ))}
        </div>
        
        <div className="pt-4 border-t border-white/5 text-center">
            <p className="text-[9px] text-white/30">
                Die Dokumente sind vertraulich zu behandeln.
            </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-up">
       <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
             <Lock className="w-4 h-4 text-[#C5A028]" />
          </div>
          <div>
             <h4 className="text-white font-serif">Downloads</h4>
             <p className="text-[10px] text-white/50">Bitte legitimieren Sie sich für den Zugang.</p>
          </div>
       </div>

       <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
             <input 
                type="text" 
                placeholder="Ihr Name"
                required
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A028] transition-colors placeholder:text-white/20"
             />
             <input 
                type="email" 
                placeholder="Ihre E-Mail Adresse"
                required
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A028] transition-colors placeholder:text-white/20"
             />
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
              <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${form.accepted ? 'bg-[#C5A028] border-[#C5A028]' : 'border-white/20 group-hover:border-white/40'}`}>
                  {form.accepted && <Check className="w-3 h-3 text-black" />}
              </div>
              <input type="checkbox" className="hidden" checked={form.accepted} onChange={() => setForm({...form, accepted: !form.accepted})} />
              <span className="text-[10px] text-white/50 leading-relaxed">
                  Ich bestätige die Vertraulichkeit der Unterlagen und stimme der Kontaktaufnahme zu.
              </span>
          </label>

          <button 
             type="submit"
             disabled={!form.accepted || isLoading}
             className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all ${
                form.accepted && !isLoading 
                ? 'bg-[#C5A028] text-black hover:bg-white' 
                : 'bg-white/5 text-white/20 cursor-not-allowed'
             }`}
          >
             {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Zugang freischalten'}
          </button>
       </form>
    </div>
  );
};

const FactSheet: React.FC<{ base: Required<MobileDockProps>["base"] }> = ({ base }) => {
  const facts = [
    { label: "Baurecht", val: base.lawRef },
    { label: "Vorbescheid", val: `positiv bis ${base.permitUntil}` },
    { label: "AK34", val: `positiv (${base.ak34Date})` },
    { label: "GRZ / GFZ", val: `${base.grz1} / ${base.gfz}` },
    { label: "Netto-Wohnfläche", val: `${new Intl.NumberFormat("de-DE").format(base.livingAreaM2)} m²` },
    { label: "Einheiten", val: `${base.units}` },
  ];

  return (
    <div className="animate-fade-up">
      <div className="mb-4">
        <h4 className="text-white font-serif">Projekt Kennziffern</h4>
        <p className="text-[10px] text-white/50 mt-1">Ankaufsprofil Quick-Check</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {facts.map((f, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-3 rounded-xl flex flex-col"
          >
            <span className="text-[9px] uppercase tracking-widest text-white/50 mb-1">
              {f.label}
            </span>
            <span className="text-white font-mono font-medium leading-tight">
              {f.val}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 text-[10px] text-white/55">
        <ShieldCheck className="w-4 h-4 text-[#C5A028]" />
        <span>Vertraulich. Keine öffentliche Angebotsunterlage.</span>
      </div>
    </div>
  );
};

const AccessCard: React.FC<{
  phone?: string;
  whatsapp?: string;
  email?: string;
  exposePdfUrl?: string;
  dataRoomRequestUrl?: string;
  onCopy: (txt: string) => void;
}> = ({ phone, whatsapp, email, exposePdfUrl, dataRoomRequestUrl, onCopy }) => {
  const waUrl = whatsapp ? `https://wa.me/${whatsapp}` : undefined;
  const telUrl = phone ? `tel:${phone}` : undefined;
  const mailUrl = email ? `mailto:${email}` : undefined;

  const copyContact = () => {
    const lines = [
      "QNL – Quartier Niederdonk Living | Kontakt",
      phone ? `Tel: ${phone}` : "",
      whatsapp ? `WhatsApp: ${whatsapp}` : "",
      email ? `E-Mail: ${email}` : "",
    ].filter(Boolean);
    onCopy(lines.join("\n"));
  };

  const open = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="animate-fade-up space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => open(waUrl)}
          disabled={!waUrl}
          className={[
            "rounded-2xl p-4 border transition active:scale-[0.99]",
            waUrl
              ? "bg-[#25D366] text-black border-black/10 hover:brightness-95"
              : "bg-white/5 text-white/30 border-white/10 cursor-not-allowed",
          ].join(" ")}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              WhatsApp
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => (telUrl ? (window.location.href = telUrl) : undefined)}
          disabled={!telUrl}
          className={[
            "rounded-2xl p-4 border transition active:scale-[0.99]",
            telUrl
              ? "bg-white text-black border-white/10 hover:bg-white/90"
              : "bg-white/5 text-white/30 border-white/10 cursor-not-allowed",
          ].join(" ")}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Anruf
            </span>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={copyContact}
          className="rounded-2xl p-4 border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-[0.99] transition"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Copy className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Kontakt kopieren
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => (mailUrl ? (window.location.href = mailUrl) : undefined)}
          disabled={!mailUrl}
          className={[
            "rounded-2xl p-4 border transition active:scale-[0.99]",
            mailUrl
              ? "bg-white/5 text-white border-white/10 hover:bg-white/10"
              : "bg-white/5 text-white/30 border-white/10 cursor-not-allowed",
          ].join(" ")}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              E-Mail
            </span>
          </div>
        </button>
      </div>

      <p className="text-[10px] text-white/45 leading-snug">
        Hinweis: Dokumente/Downloads können zugangsbeschränkt sein (qualifizierte Interessenten).
      </p>
    </div>
  );
};

export const MobileDock: React.FC<MobileDockProps> = (props) => {
  const base = { ...DEFAULTS, ...(props.base ?? {}) };
  const availability: Availability = props.availability ?? { sold: 8, reserved: 4, free: 20 };

  const reducedMotion = usePrefersReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTool, setActiveTool] = useState<ActiveTool>("calc");
  const [isVisible, setIsVisible] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const rootRef = useRef<HTMLDivElement | null>(null);

  // Entrance
  useEffect(() => {
    const t = window.setTimeout(() => setIsVisible(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  // Close on ESC / outside click
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (!root.contains(e.target as Node)) setIsOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  const copyToClipboard = async (txt: string) => {
    try {
      await navigator.clipboard.writeText(txt);
      setToast("Kopiert.");
    } catch {
      // fallback
      try {
        const ta = document.createElement("textarea");
        ta.value = txt;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setToast("Kopiert.");
      } catch {
        setToast("Kopieren nicht möglich.");
      }
    } finally {
      window.setTimeout(() => setToast(null), 1200);
    }
  };

  const toggle = () => setIsOpen((v) => !v);

  return (
    <div
      ref={rootRef}
      className={[
        "fixed inset-x-4 bottom-6 z-[999] md:hidden",
        "transition-transform duration-1000",
        isVisible ? "translate-y-0" : "translate-y-[200%]",
      ].join(" ")}
      style={{
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      aria-label="QNL Mobile Dock"
    >
      {/* Floating panel (opens upward) */}
      <div
        className={[
          "absolute bottom-full mb-3 left-0 right-0",
          "bg-[#0A0A0A]/92 backdrop-blur-3xl",
          "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]",
          "border border-white/10 rounded-[2rem]",
          "transition-all duration-500 origin-bottom overflow-hidden",
          isOpen
            ? "opacity-100 scale-100 translate-y-0 max-h-[560px] pointer-events-auto"
            : "opacity-0 scale-[0.97] translate-y-4 max-h-0 pointer-events-none",
        ].join(" ")}
        style={{
          transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
        }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        {/* top hairline */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" />

        {/* Tabs */}
        <div className="flex justify-between px-6 pt-6 pb-4 border-b border-white/5">
          {[
            { id: "calc", label: "Rendite", icon: TrendingUp },
            { id: "facts", label: "Fakten", icon: FileText },
            { id: "status", label: "Downloads", icon: Download },
            { id: "contact", label: "Kontakt", icon: Phone },
          ].map((t) => {
            const isActive = activeTool === (t.id as ActiveTool);
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTool(t.id as ActiveTool)}
                className={[
                  "flex flex-col items-center gap-1.5 transition-all relative",
                  isActive ? "text-[#C5A028]" : "text-white/45 hover:text-white",
                ].join(" ")}
                aria-pressed={isActive}
              >
                <t.icon className="w-5 h-5" />
                <span className="text-[9px] uppercase font-bold tracking-wider">
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTool === "calc" && (
            <ProfitTool base={base} reducedMotion={reducedMotion} onCopy={copyToClipboard} />
          )}
          {activeTool === "facts" && <FactSheet base={base} />}
          {activeTool === "status" && (
            <DownloadGate />
          )}
          {activeTool === "contact" && (
            <AccessCard
              phone={props.phone}
              whatsapp={props.whatsapp}
              email={props.email}
              exposePdfUrl={props.exposePdfUrl}
              dataRoomRequestUrl={props.dataRoomRequestUrl}
              onCopy={copyToClipboard}
            />
          )}
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-white/60 hover:text-white transition-colors"
          aria-label="Schließen"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Capsule Bar */}
      <button
        type="button"
        onClick={toggle}
        className={[
          "w-full h-14 relative group rounded-full overflow-hidden",
          "shadow-[0_10px_40px_-5px_rgba(0,0,0,0.8)]",
          "transition-all duration-300 active:scale-[0.985]",
          isOpen ? "ring-1 ring-white/10" : "",
        ].join(" ")}
        aria-expanded={isOpen}
        aria-controls="qnl-dock-panel"
      >
        {/* Glass layers */}
        <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/5 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] pointer-events-none" />

        {/* Moving sheen */}
        {!reducedMotion && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.6s]" />
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-between pl-1 pr-5">
          {/* Left pill */}
          <div className="flex items-center gap-2.5 px-4 h-10 bg-black/20 rounded-full border border-white/10 ml-1">
            <div className="relative w-2 h-2">
              {!reducedMotion && (
                <div className="absolute inset-0 bg-[#C5A028] rounded-full animate-ping opacity-60" />
              )}
              <div className="relative w-2 h-2 bg-[#C5A028] rounded-full" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
              Live
            </span>
          </div>

          {/* Marquee */}
          <div className="flex-1 overflow-hidden px-4 qnl-mask">
            <div
              className={[
                "whitespace-nowrap flex items-center gap-8 text-xs font-mono text-white/80",
                reducedMotion ? "" : "qnl-marquee",
              ].join(" ")}
              style={{
                animation: reducedMotion ? "none" : undefined,
              }}
            >
              <span>
                Exit: <span className="text-white">{formatEURCompactM(22_325_000)}</span>
              </span>
              <span className="text-white/20">•</span>
              <span>
                Rendite: <span className="text-[#C5A028]">34,9%</span>
              </span>
              <span className="text-white/20">•</span>
              <span>
                EBT: <span className="text-white">5,78 Mio. €</span>
              </span>
              <span className="text-white/20">•</span>
              <span>
                Status: <span className="text-green-400">{availability.free}/{availability.sold + availability.reserved + availability.free} frei</span>
              </span>
              <span className="text-white/20">•</span>
              <span>
                Baurecht: <span className="text-white">§34</span>
              </span>
              <span className="text-white/20">•</span>
              <span>
                Vorbescheid: <span className="text-white">{base.permitUntil}</span>
              </span>

              {/* duplicate to keep marquee smooth */}
              {!reducedMotion && (
                <>
                  <span className="text-white/20">•</span>
                  <span>
                    Exit: <span className="text-white">{formatEURCompactM(22_325_000)}</span>
                  </span>
                  <span className="text-white/20">•</span>
                  <span>
                    Rendite: <span className="text-[#C5A028]">34,9%</span>
                  </span>
                  <span className="text-white/20">•</span>
                  <span>
                    EBT: <span className="text-white">5,78 Mio. €</span>
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Chevron */}
          <div
            className={[
              "text-white/60 transition-transform duration-500",
              isOpen ? "rotate-180" : "rotate-0",
            ].join(" ")}
          >
            <ChevronUp className="w-5 h-5 drop-shadow-md" />
          </div>
        </div>
      </button>

      {/* Toast */}
      {toast && (
        <div className="mt-3 flex justify-center">
          <div className="px-3 py-1.5 rounded-full bg-black/70 border border-white/10 text-[11px] text-white/80">
            {toast}
          </div>
        </div>
      )}

      {/* Local styles */}
      <style>{`
        @keyframes qnlMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .qnl-marquee{
          width: max-content;
          animation: qnlMarquee 18s linear infinite;
        }
        .qnl-mask{
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up{
          animation: fadeUp 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </div>
  );
};
