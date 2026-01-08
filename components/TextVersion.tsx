import React, { useState } from 'react';
import { SectionTag } from './ui/Shared';
import { Copy, Check, FileText, ArrowRight, Database, Layers, MapPin } from 'lucide-react';

const TextVersion: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const summaryPoints = [
    { label: "Projekt", value: "QNL Meerbusch", icon: Layers },
    { label: "Adresse", value: "Niederdonker Str. 81", icon: MapPin },
    { label: "Einheiten", value: "32 (16 EFH / 16 ETW)", icon: Database },
    { label: "Volumen", value: "4.069 m² BGF", icon: FileText },
  ];

  const fullText = `INVESTMENT-MEMORANDUM
PROJEKT: QNL – Quartier Niederdonk Living
STANDORT: Niederdonker Straße 81, 40667 Meerbusch-Büderich

1. ECKDATEN
Grundstück: 7.398 m² (6.317 m² Nettobauland)
Programm: 32 Einheiten (16 EFH: 9 DHH / 7 RH + 16 ETW)
Flächen: 4.069 m² BGF · 3.250 m² Netto-Wohnfläche

2. BAURECHT
Status: § 34 BauGB, Bauvorbescheid verlängert (12/2025).
Planung: Positives Votum AK 34. Direktantrag möglich.

3. KALKULATION
GKI (Gesamtinvest): 16.544.000 €
Exit (Erlös): 22.325.000 € (Basis 6.500 €/m²)
EBT (Gewinn): 5.781.000 €
Rendite: 34,9 %

4. ANGEBOT
Kaufpreis: 4.250.000 € (Asset Deal)
Courtage: 3,0% zzgl. MwSt.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="textversion" className="py-12 md:py-24 relative group">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-white/5 to-transparent pointer-events-none opacity-30" />
      
      <div className="mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <SectionTag>Compact Intelligence</SectionTag>
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
             Executive <span className="text-white/40">Summary</span>
           </h2>
        </div>
        
        {/* Copy Button (Desktop Position) */}
        <button 
          onClick={handleCopy}
          className="hidden md:flex items-center gap-3 px-6 py-3 bg-[#D4AF37] hover:bg-[#b8952b] text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          <span className="uppercase tracking-wider text-xs">{copied ? 'Kopiert' : 'Copy Summary'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        
        {/* Left: Visual Dashboard */}
        <div className="flex flex-col gap-6">
           {/* Key Specs Grid */}
           <div className="grid grid-cols-2 gap-4">
              {summaryPoints.map((point, idx) => (
                <div key={idx} className="bg-[#121212] border border-white/10 p-5 rounded-2xl hover:border-[#D4AF37]/30 transition-colors group/card">
                   <div className="flex items-start justify-between mb-3">
                      <point.icon className="w-5 h-5 text-[#D4AF37] opacity-70 group-hover/card:opacity-100 transition-opacity" />
                      <span className="text-[10px] uppercase tracking-widest text-text-muted">0{idx + 1}</span>
                   </div>
                   <p className="text-text-muted text-xs uppercase tracking-wider mb-1">{point.label}</p>
                   <p className="text-white font-medium">{point.value}</p>
                </div>
              ))}
           </div>

           {/* Callout Box */}
           <div className="flex-1 bg-gradient-to-br from-[#1A1A1A] to-black border border-white/10 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-[50px] rounded-full" />
              <h3 className="text-xl font-serif font-semibold text-white mb-4 relative z-10">Für Entscheider</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 relative z-10">
                 Dieses Memorandum fasst die wesentlichen KPIs zusammen. Nutzen Sie die Copy-Funktion, 
                 um die Daten direkt in Ihre interne Kommunikation oder CRM-Systeme zu übernehmen.
              </p>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest relative z-10">
                 <ArrowRight className="w-4 h-4" />
                 <span>Ready to share</span>
              </div>
           </div>
        </div>

        {/* Right: The "Document" Preview */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F0F0F] group/doc hover:border-white/20 transition-colors">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#161616]">
               <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
               </div>
               <span className="text-[10px] uppercase tracking-widest text-text-muted opacity-50 font-mono">summary.txt</span>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed text-text-muted overflow-x-auto">
               <pre className="whitespace-pre-wrap font-inherit">
                 {fullText}
               </pre>
            </div>

            {/* Overlay Gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F0F0F] to-transparent pointer-events-none" />
            
            {/* Mobile Copy Button (Floating) */}
            <button 
              onClick={handleCopy}
              className="md:hidden absolute bottom-6 right-6 w-12 h-12 bg-[#D4AF37] text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 z-20"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
        </div>

      </div>
    </section>
  );
};

export default TextVersion;
