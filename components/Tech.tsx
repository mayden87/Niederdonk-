import React from 'react';
import { SectionTag, GlassContainer } from './ui/Shared';

const Tech: React.FC = () => {
  return (
    <section id="tech">
      <GlassContainer className="p-8 md:p-12 rounded-3xl">
        <SectionTag>04. Bebauung & Technik</SectionTag>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-white">Bauweise, Baugrund, Spezialtiefbau</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          <div className="bg-black/30 p-8 rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300">
            <h3 className="text-xl font-serif font-semibold mb-4 text-accent">Einfamilienhäuser</h3>
            <p className="text-text-muted leading-relaxed text-sm">
              9 DHH (ca. 140 m², ca. 5,5 m × 11,5 m) sowie 7 RH (ca. 120 m², ca. 5,5 m × 10 m).
              Ergänzt durch 16 Wohnungen in 2 Mehrfamilienhäusern.
            </p>
          </div>

          <div className="bg-black/30 p-8 rounded-xl border border-white/5 hover:bg-white/5 transition-colors duration-300">
            <h3 className="text-xl font-serif font-semibold mb-4 text-accent">Baugrund & Tiefbau</h3>
            <p className="text-text-muted leading-relaxed text-sm">
              12 Sondierungspunkte zur Bewertung von Tragfähigkeit und Grundwasser. Kosten für Wasserhaltung
              sowie erforderliche Unterfangungen sind in der Kalkulation berücksichtigt.
            </p>
          </div>
        </div>
      </GlassContainer>
    </section>
  );
};

export default Tech;