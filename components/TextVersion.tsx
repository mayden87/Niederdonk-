import React, { useState } from 'react';
import { SectionTag, UnifiedCard, Reveal } from './ui/Shared';
import { Copy, Check, FileText, Scale, MapPin, HardHat, Banknote, ScrollText, ShieldCheck } from 'lucide-react';

const TextVersion: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Der exakte Text für die Zwischenablage (unverändert)
  const fullRawText = `1. PROJEKTÜBERBLICK
Auf einem ca. 7.398 m² großen Grundstück (6.317 m² Nettobauland) in einer der exklusivsten Lagen von Meerbusch-Büderich entsteht ein hochwertiges Wohnquartier. Das Konzept sieht eine Mischung aus 16 Einfamilienhäusern und 2 Mehrfamilienhäusern vor, eingebettet in ein nahezu autofreies, grünes Umfeld.

Wohneinheiten: 32 (9 DHH, 7 RH, 16 Wohnungen)
Bruttogeschossfläche (BGF): 4.069 m²
Netto-Wohnfläche: 3.250 m²
Planwerte: GRZ I: 0,27 | GRZ II: 0,38 | GFZ: 0,48

2. PLANUNGSSTAND & GENEHMIGUNGSSICHERHEIT
Bauvorbescheid: Ein rechtsgültiger Bauvorbescheid liegt vor (verlängert im Dezember 2025).
Konzept-Bestätigung: Die aktuelle Entwurfsplanung wurde am 21.07.2025 dem Arbeitskreis 34 (AK 34) der Stadt vorgestellt.
Votum: Die Planung erhielt ein positives Votum. Es wurde bestätigt, dass auf dieser Basis direkt der Bauantrag gestellt werden kann (keine erneute Voranfrage nötig).
Baurecht: Realisierung nach § 34 BauGB.

3. STÄDTEBAULICHES & MOBILITÄTSKONZEPT
Infrastruktur: 6 m breiter interner Wohnweg für Anlieferung und Notdienste. Die Feuerwehr nutzt das Drehleiter-Konzept von außen.
Stellplatz-Optimierung: Durch die Lagegunst (ÖPNV < 350 m) und zusätzliche Fahrradstellplätze wurde der Bedarf von 56 auf 42 Stellplätze reduziert.
Tiefgarage: 40 Plätze in einer zentralen Mittelgarage, 2 Ablösungen sowie 6 oberirdische Besucherplätze.
Ökologie: Extensive Dachbegrünung aller Staffelgeschosse zur Verbesserung des Mikroklimas und der Regenwasserrückhaltung.

4. BEBAUUNG & TECHNIK
Einfamilienhäuser: 9 DHH (ca. 140 m², Maße 5,5 m x 11,5 m) und 7 RH (ca. 120 m², Maße 5,5 m x 10 m).
Baugrund: 12 Sondierungspunkte wurden bereits zur Bewertung von Tragfähigkeit und Grundwasser untersucht.
Spezialtiefbau: Die Kosten für die Wasserhaltung sowie die notwendige Unterfangung der Nachbarbebauung sind in der Kalkulation voll berücksichtigt.

5. INVESTITIONSMODELL (KALKULATION)
Kalkulationsbasis: 2.800 € Baukosten/m² Wohnfläche | Verkaufserlös 6.500 €/m²

Anlagekosten (Investition)
Grundstückskaufpreis (ca. 1.044 €/m² BGF): 4.250.000 €
Erwerbsnebenkosten (ca. 10%): 425.000 €
Baukosten (KG 300+400): 9.100.000 €
Spezialtiefbau (Wasserhaltung/Unterfangung): 450.000 €
Baunebenkosten & Außenanlagen (ca. 18%): 1.719.000 €
Finanzierungskosten (Zinsen/Gebühren): ca. 600.000 €
GESAMTINVESTITIONSKOSTEN (GKI): ca. 16.544.000 €

Ertragserwartung (Verkauf)
Verkaufserlöse Wohnflächen (3.250 m² × 6.500 €/m²): 21.125.000 €
Verkauf Stellplätze (TG): 1.200.000 €
GESAMTERLÖS (EXIT): ca. 22.325.000 €

Ergebnisrechnung
PROJEKTGEWINN (EBT): ca. 5.781.000 €
PROJEKTRENDITE: ca. 34,9 %

Die Kalkulation der Verkaufserlöse orientiert sich an offiziellen Auswertungen der Gutachterausschüsse für Grundstückswerte sowie Analysen unabhängiger Forschungsinstitute für Meerbusch-Büderich.

6. KONDITIONEN
Kaufpreis: 4.250.000 €
Courtage: 3% des Kaufpreises zzgl. gesetzl. MwSt.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullRawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="textversion" className="py-20 md:py-32 relative group">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-[#0a0a0a] to-transparent pointer-events-none opacity-50" />
      
      {/* Header Section */}
      <Reveal>
        <div className="mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
            <SectionTag>Memorandum</SectionTag>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-4">
                Executive <span className="text-[#D4AF37]">Summary</span>
            </h2>
            <p className="text-text-muted mt-4 max-w-xl font-light leading-relaxed">
                Die Essenz des Projekts. Komprimiert für Ihre Unterlagen und direkte Weiterverarbeitung.
            </p>
            </div>
            
            <button 
            onClick={handleCopy}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] text-white hover:text-black rounded-full transition-all duration-300 group/btn shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md"
            >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span className="uppercase tracking-widest text-[10px] font-bold">{copied ? 'In Zwischenablage kopiert' : 'Textversion kopieren'}</span>
            </button>
        </div>
      </Reveal>

      {/* The Intelligence Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

        {/* CARD 1: OVERVIEW */}
        <Reveal delay={100} className="h-full">
            <UnifiedCard className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <span className="text-[#D4AF37] font-serif text-2xl font-bold">01</span>
                    <h3 className="text-white font-medium uppercase tracking-wider text-xs">Projektüberblick</h3>
                    <MapPin className="w-4 h-4 ml-auto text-white/20" />
                </div>
                <div className="space-y-4 text-sm text-text-muted leading-relaxed font-light flex-1">
                    <p>
                        Auf einem ca. <span className="text-white font-medium">7.398 m² großen Grundstück</span> (6.317 m² Nettobauland) in einer der exklusivsten Lagen von Meerbusch-Büderich entsteht ein hochwertiges Wohnquartier.
                    </p>
                    <ul className="space-y-2 mt-4">
                        <li className="flex justify-between border-b border-white/5 pb-1">
                            <span>Wohneinheiten</span>
                            <span className="text-white">32 (9 DHH, 7 RH, 16 ETW)</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-1">
                            <span>BGF</span>
                            <span className="text-white">4.069 m²</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-1">
                            <span>Netto-Wohnfläche</span>
                            <span className="text-white">3.250 m²</span>
                        </li>
                    </ul>
                    <div className="pt-2 text-xs opacity-60 font-mono">
                        GRZ I: 0,27 | GRZ II: 0,38 | GFZ: 0,48
                    </div>
                </div>
            </UnifiedCard>
        </Reveal>

        {/* CARD 2: PLANNING */}
        <Reveal delay={200} className="h-full">
            <UnifiedCard className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <span className="text-[#D4AF37] font-serif text-2xl font-bold">02</span>
                    <h3 className="text-white font-medium uppercase tracking-wider text-xs">Genehmigung</h3>
                    <ShieldCheck className="w-4 h-4 ml-auto text-white/20" />
                </div>
                <div className="space-y-4 text-sm text-text-muted leading-relaxed font-light">
                    <div>
                        <span className="text-white block mb-1">Bauvorbescheid</span>
                        Rechtsgültig und verlängert bis Dezember 2025.
                    </div>
                    <div>
                        <span className="text-white block mb-1">Konzept-Bestätigung (AK 34)</span>
                        Positives Votum am 21.07.2025. Keine erneute Voranfrage nötig.
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg mt-2">
                        <span className="text-green-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                            <Check className="w-3 h-3" />
                            Direkt Bauantragsfähig
                        </span>
                    </div>
                    <p className="text-xs pt-2">Realisierung nach § 34 BauGB.</p>
                </div>
            </UnifiedCard>
        </Reveal>

        {/* CARD 3: MOBILITY */}
        <Reveal delay={300} className="h-full">
            <UnifiedCard className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <span className="text-[#D4AF37] font-serif text-2xl font-bold">03</span>
                    <h3 className="text-white font-medium uppercase tracking-wider text-xs">Städtebau</h3>
                    <Scale className="w-4 h-4 ml-auto text-white/20" />
                </div>
                <div className="space-y-4 text-sm text-text-muted leading-relaxed font-light">
                    <p>6 m breiter interner Wohnweg. Feuerwehr nutzt Drehleiter-Konzept von außen.</p>
                    <div className="border-l-2 border-[#D4AF37] pl-4 py-1 my-4">
                        <p className="text-white font-medium">Stellplatz-Optimierung</p>
                        <p className="text-xs mt-1">Reduktion von 56 auf 42 Plätze durch ÖPNV-Nähe & Bike-Konzept.</p>
                    </div>
                    <p>
                        <span className="text-white">Tiefgarage:</span> 40 Plätze (Mittelgarage) + 6 Besucher oberirdisch.
                    </p>
                </div>
            </UnifiedCard>
        </Reveal>

        {/* CARD 4: TECH */}
        <Reveal delay={100} className="h-full">
            <UnifiedCard className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <span className="text-[#D4AF37] font-serif text-2xl font-bold">04</span>
                    <h3 className="text-white font-medium uppercase tracking-wider text-xs">Technik</h3>
                    <HardHat className="w-4 h-4 ml-auto text-white/20" />
                </div>
                <div className="space-y-4 text-sm text-text-muted leading-relaxed font-light">
                    <ul className="list-disc list-inside space-y-2 marker:text-[#D4AF37]">
                        <li>
                            <span className="text-white">Einfamilienhäuser:</span> 9 DHH (ca. 140 m²) und 7 RH (ca. 120 m²).
                        </li>
                        <li>
                            <span className="text-white">Baugrund:</span> 12 Sondierungspunkte analysiert.
                        </li>
                        <li>
                            <span className="text-white">Spezialtiefbau:</span> Kosten für Wasserhaltung & Unterfangung voll einkalkuliert.
                        </li>
                    </ul>
                    <p className="text-xs opacity-60 mt-4">Ökologie: Extensive Dachbegrünung aller Staffelgeschosse.</p>
                </div>
            </UnifiedCard>
        </Reveal>

        {/* CARD 5: FINANCE (Highlighted) */}
        <Reveal delay={200} className="h-full md:col-span-2 lg:col-span-1">
            <UnifiedCard className="h-full flex flex-col bg-gradient-to-br from-white/[0.03] to-[#D4AF37]/[0.05] border-[#D4AF37]/20">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D4AF37]/20">
                    <span className="text-[#D4AF37] font-serif text-2xl font-bold">05</span>
                    <h3 className="text-white font-medium uppercase tracking-wider text-xs">Investitionsmodell</h3>
                    <Banknote className="w-4 h-4 ml-auto text-[#D4AF37]" />
                </div>
                
                <div className="space-y-4 flex-1">
                    <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                        <div className="p-3 bg-black/20 rounded-lg">
                            <span className="block text-text-muted mb-1">GKI (Total)</span>
                            <span className="block text-white font-medium">16.544.000 €</span>
                        </div>
                        <div className="p-3 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/20">
                            <span className="block text-[#D4AF37] mb-1">Exit (Erlös)</span>
                            <span className="block text-white font-bold">22.325.000 €</span>
                        </div>
                    </div>

                    <div className="space-y-2 text-sm text-text-muted font-light border-t border-white/5 pt-4">
                        <div className="flex justify-between">
                             <span>Basis Baukosten</span>
                             <span className="font-mono">2.800 €/m²</span>
                        </div>
                        <div className="flex justify-between">
                             <span>Basis Verkauf</span>
                             <span className="font-mono">6.500 €/m²</span>
                        </div>
                    </div>

                    <div className="mt-auto pt-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Projektgewinn</p>
                                <p className="text-xl text-white font-serif">5.781.000 €</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Rendite</p>
                                <p className="text-3xl text-white font-serif font-bold">34,9 %</p>
                            </div>
                        </div>
                    </div>
                </div>
            </UnifiedCard>
        </Reveal>

        {/* CARD 6: OFFER */}
        <Reveal delay={300} className="h-full">
            <UnifiedCard className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <span className="text-[#D4AF37] font-serif text-2xl font-bold">06</span>
                    <h3 className="text-white font-medium uppercase tracking-wider text-xs">Konditionen</h3>
                    <ScrollText className="w-4 h-4 ml-auto text-white/20" />
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-6">
                     <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[10px] text-text-muted uppercase tracking-widest mb-2">Kaufpreis Asset</p>
                        <p className="text-3xl font-serif text-white">4.25 Mio. €</p>
                     </div>
                     
                     <div className="flex justify-between items-center px-2">
                        <span className="text-sm text-text-muted">Courtage</span>
                        <span className="text-white font-medium">3% <span className="text-xs text-text-muted font-light">zzgl. MwSt.</span></span>
                     </div>

                     <p className="text-[10px] text-text-muted/50 text-center leading-relaxed mt-auto">
                        Die Kalkulation basiert auf offiziellen Gutachterwerten und Marktzahlen für Meerbusch-Büderich.
                     </p>
                </div>
            </UnifiedCard>
        </Reveal>

      </div>
    </section>
  );
};

export default TextVersion;