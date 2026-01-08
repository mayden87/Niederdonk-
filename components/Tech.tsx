import React from 'react';
import { SectionTag, UnifiedCard } from './ui/Shared';

const Tech: React.FC = () => {
  return (
    <section id="tech" className="py-20 md:py-32">
      <UnifiedCard>
        <div className="mb-8 md:mb-12">
            <SectionTag>04. Bebauung & Technik</SectionTag>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mt-4">Bauweise, Baugrund, Spezialtiefbau</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          <div className="bg-white/[0.03] p-6 md:p-10 rounded-3xl border border-white/[0.08] hover:bg-white/[0.06] transition-colors duration-300">
            <h3 className="text-xl font-serif font-medium mb-4 text-[#D4AF37]">Einfamilienhäuser</h3>
            <p className="text-text-muted leading-7 text-sm font-light">
              9 DHH (ca. 140 m², ca. 5,5 m × 11,5 m) sowie 7 RH (ca. 120 m², ca. 5,5 m × 10 m).
              Ergänzt durch 16 Wohnungen in 2 Mehrfamilienhäusern.
            </p>
          </div>

          <div className="bg-white/[0.03] p-6 md:p-10 rounded-3xl border border-white/[0.08] hover:bg-white/[0.06] transition-colors duration-300">
            <h3 className="text-xl font-serif font-medium mb-4 text-[#D4AF37]">Baugrund & Tiefbau</h3>
            <p className="text-text-muted leading-7 text-sm font-light">
              12 Sondierungspunkte zur Bewertung von Tragfähigkeit und Grundwasser. Kosten für Wasserhaltung
              sowie erforderliche Unterfangungen sind in der Kalkulation berücksichtigt.
            </p>
          </div>
        </div>
      </UnifiedCard>
    </section>
  );
};

export default Tech;