
import React, { useState } from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { FileText, Lock, ArrowRight, ShieldCheck, Download, Check, Loader2, Unlock } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    company: '',
    representative: '',
    address: '',
    zipCity: '',
    email: '',
    phone: ''
  });

  const [agreements, setAgreements] = useState({
    confidentiality: false,
    commission: false,
    contactConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (key: keyof typeof agreements) => {
    setAgreements({ ...agreements, [key]: !agreements[key] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!agreements.confidentiality || !agreements.commission || !agreements.contactConsent) return;
    
    setIsLoading(true);

    try {
      const response = await fetch('/send_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setErrorMessage("Fehler beim Senden: " + (errorData.message || "Unbekannter Fehler"));
        // Fallback für Demo-Zwecke, falls PHP nicht läuft:
        // setIsSubmitted(true); 
      }
    } catch (error) {
      console.error("Netzwerkfehler:", error);
      setErrorMessage("Netzwerkfehler. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = 
    Object.values(formData).every((val) => (val as string).length > 0) &&
    Object.values(agreements).every(val => val === true);

  return (
    <section id="contact" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND */}
      <SectionBackground 
         src="https://whhy.de/wp-content/uploads/2026/01/7.png" 
         opacity={0.3} 
         color="from-[#050505] via-transparent to-[#050505]" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Updated Text (No "Asset") */}
        <Reveal>
          <div className="mb-16 md:mb-24">
            <SectionTag>07. Unterlagen anfordern</SectionTag>
            <div className="flex flex-col md:flex-row gap-12 mt-8 md:items-end">
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] max-w-3xl">
                Exklusiver <br />
                <span className="text-[#C5A028] italic">Zugang</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed max-w-xl md:pl-10 md:border-l border-white/10">
                Erhalten Sie vollständigen Einblick in das Investment-Memorandum und die genehmigte Planung. 
                Bitte legitimieren Sie sich über das nachfolgende Formular, um den geschützten Datenraum freizuschalten.
              </p>
            </div>
          </div>
        </Reveal>

        {/* TRANSACTION STAGE */}
        <Stage className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Column 1: The Form (Left) */}
            <div className="lg:col-span-7 p-8 md:p-16 bg-white/[0.01]">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                        <ShieldCheck className="w-4 h-4" />
                     </div>
                     <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Legitimation</span>
                  </div>

                  {/* Input Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Firma</label>
                        <input 
                            required name="company" value={formData.company} onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#C5A028] focus:outline-none transition-colors"
                            placeholder="Firmenname"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Vertreter</label>
                        <input 
                            required name="representative" value={formData.representative} onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#C5A028] focus:outline-none transition-colors"
                            placeholder="Vorname Nachname"
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Adresse</label>
                        <input 
                            required name="address" value={formData.address} onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#C5A028] focus:outline-none transition-colors mb-2"
                            placeholder="Straße, Hausnummer"
                        />
                         <input 
                            required name="zipCity" value={formData.zipCity} onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#C5A028] focus:outline-none transition-colors"
                            placeholder="PLZ, Ort"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">E-Mail</label>
                        <input 
                            required type="email" name="email" value={formData.email} onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#C5A028] focus:outline-none transition-colors"
                            placeholder="name@firma.de"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Telefon</label>
                        <input 
                            required type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#C5A028] focus:outline-none transition-colors"
                            placeholder="+49 ..."
                        />
                    </div>
                  </div>

                  {/* Agreements */}
                  <div className="space-y-4 pt-6 border-t border-white/5">
                    
                    {/* 1. Confidentiality */}
                    <label className="flex items-start gap-4 cursor-pointer group">
                        <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-all ${agreements.confidentiality ? 'bg-[#C5A028] border-[#C5A028]' : 'bg-transparent border-white/20 group-hover:border-white/40'}`}>
                            {agreements.confidentiality && <Check className="w-3.5 h-3.5 text-black" />}
                        </div>
                        <input type="checkbox" className="hidden" onChange={() => handleCheckboxChange('confidentiality')} checked={agreements.confidentiality} />
                        <span className="text-xs text-white/60 leading-relaxed select-none">
                            Ich verpflichte mich zur <strong className="text-white">Vertraulichkeit</strong> und werde keine Informationen oder Inhalte an Dritte weitergeben.
                        </span>
                    </label>

                    {/* 2. Commission */}
                    <label className="flex items-start gap-4 cursor-pointer group">
                        <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-all ${agreements.commission ? 'bg-[#C5A028] border-[#C5A028]' : 'bg-transparent border-white/20 group-hover:border-white/40'}`}>
                            {agreements.commission && <Check className="w-3.5 h-3.5 text-black" />}
                        </div>
                        <input type="checkbox" className="hidden" onChange={() => handleCheckboxChange('commission')} checked={agreements.commission} />
                        <span className="text-xs text-white/60 leading-relaxed select-none">
                            Ich bestätige die Kenntnisnahme der Maklercourtage in Höhe von <strong className="text-white">3,00 %</strong> zzgl. gesetzl. MwSt. im Falle eines notariellen Ankaufes.
                        </span>
                    </label>

                    {/* 3. Contact Consent */}
                    <label className="flex items-start gap-4 cursor-pointer group">
                        <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-all ${agreements.contactConsent ? 'bg-[#C5A028] border-[#C5A028]' : 'bg-transparent border-white/20 group-hover:border-white/40'}`}>
                            {agreements.contactConsent && <Check className="w-3.5 h-3.5 text-black" />}
                        </div>
                        <input type="checkbox" className="hidden" onChange={() => handleCheckboxChange('contactConsent')} checked={agreements.contactConsent} />
                        <span className="text-xs text-white/60 leading-relaxed select-none">
                            Ich bin damit einverstanden, vom Vertreter des Eigentümers bezüglich dieses Angebots kontaktiert zu werden.
                        </span>
                    </label>

                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                       {errorMessage}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className={`w-full py-5 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 transition-all ${
                        isFormValid && !isLoading 
                        ? 'bg-[#C5A028] text-black hover:bg-white shadow-[0_10px_40px_-10px_rgba(197,160,40,0.5)]' 
                        : 'bg-white/5 text-white/20 cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Exposé anfordern & Zugang erhalten'}
                  </button>

                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-up py-20">
                    <div className="w-20 h-20 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/30 flex items-center justify-center mb-8">
                        <Check className="w-10 h-10 text-[#C5A028]" />
                    </div>
                    <h3 className="text-3xl font-serif text-white mb-4">Vielen Dank.</h3>
                    <p className="text-white/50 text-lg max-w-md mx-auto mb-8">
                        Ihre Daten wurden erfolgreich übermittelt. Der Download-Bereich ist nun für Sie freigeschaltet.
                    </p>
                    <div className="px-6 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <Unlock className="w-3 h-3" />
                        Zugriff gewährt
                    </div>
                </div>
              )}
            </div>

            {/* Column 2: Data Room (Right) */}
            <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-16 bg-black/40 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className={`w-10 h-10 rounded-full border bg-white/5 flex items-center justify-center transition-colors duration-500 ${isSubmitted ? 'border-[#C5A028]/50 text-[#C5A028]' : 'border-white/10 text-white/30'}`}>
                      {isSubmitted ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">
                        {isSubmitted ? 'Datenraum Geöffnet' : 'Geschützter Bereich'}
                    </span>
                  </div>

                  <p className="text-white font-serif text-xl mb-6">Dokumente & Pläne</p>
                  <p className="text-sm text-white/50 leading-relaxed mb-10">
                    {isSubmitted 
                        ? "Bitte laden Sie die Unterlagen vertraulich herunter. Bei Rückfragen steht Ihnen der Vertreter jederzeit zur Verfügung."
                        : "Die Dokumente sind geschützt. Bitte füllen Sie das Formular aus, um den Download zu starten."
                    }
                  </p>

                  <div className={`space-y-3 transition-all duration-500 ${!isSubmitted ? 'opacity-50 grayscale pointer-events-none blur-[1px]' : 'opacity-100'}`}>
                    {[
                        { name: 'Investment_Memorandum_QNL.pdf', size: '12 MB' },
                        { name: 'Bauvorbescheid_2026.pdf', size: '2.4 MB' }, 
                        { name: 'AK34_Protokoll_Genehmigung.pdf', size: '1.1 MB' },
                        { name: 'Fliesstext_Baubeschreibung.pdf', size: '0.8 MB' }
                    ].map((doc, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 group/doc cursor-pointer hover:bg-white/10 hover:border-[#C5A028]/30 transition-all">
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-[#C5A028]/60" />
                          <div className="flex flex-col text-left">
                             <span className="text-[11px] text-white/80 font-mono group-hover/doc:text-white transition-colors">{doc.name}</span>
                             <span className="text-[9px] text-white/30">{doc.size}</span>
                          </div>
                        </div>
                        <Download className="w-3.5 h-3.5 text-white/20 group-hover/doc:text-[#C5A028] transition-colors" />
                      </div>
                    ))}
                  </div>
                  
                  {!isSubmitted && (
                      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-12 pointer-events-none">
                          <span className="flex items-center gap-2 text-[#C5A028] text-[10px] uppercase tracking-widest font-bold">
                              <Lock className="w-3 h-3" /> Download gesperrt
                          </span>
                      </div>
                  )}
                </div>
            </div>

          </div>
        </Stage>

        <Reveal delay={400}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <p className="text-[10px] font-mono text-white leading-relaxed max-w-2xl uppercase tracking-widest">
              Alle Angaben beruhen auf Informationen der Verkäuferseite. Irrtümer und Zwischenverkauf vorbehalten. 
              Die Kalkulationen stellen Prognosen dar und sind kein Garant für künftige Ergebnisse.
            </p>
            <div className="flex items-center gap-4 whitespace-nowrap">
              <span className="text-[9px] uppercase tracking-widest text-white/60">Asset ID:</span>
              <span className="text-xs font-mono text-white">QNL-MB-81-2026</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;
