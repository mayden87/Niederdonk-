
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Planning from './components/Planning';
import Masterplan from './components/Masterplan';
import Mobility from './components/Mobility';
import Tech from './components/Tech';
import Finance from './components/Finance';
import Sensitivity from './components/Sensitivity';
import Market from './components/Market';
import TextVersion from './components/TextVersion';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MagneticField, ResonanceGrid } from './components/ui/Interstitials';

function App() {
  const [currentTheme, setCurrentTheme] = useState<'default' | 'forest'>('default');

  useEffect(() => {
    const handleThemeChange = (e: CustomEvent) => {
      setCurrentTheme(e.detail);
    };

    window.addEventListener('theme-change', handleThemeChange as EventListener);
    return () => {
      window.removeEventListener('theme-change', handleThemeChange as EventListener);
    };
  }, []);

  return (
    <div className="antialiased min-h-screen bg-[#050505] text-text-main font-sans relative overflow-x-hidden selection:bg-[#C5A028]/30 selection:text-white">
      
      {/* Navbar Fixed */}
      <Navbar />

      {/* --- CINEMATIC GRAIN (GLOBAL) --- */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.035] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* --- AMBIENT LIVING BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
         {/* Theme: DEFAULT (Gold/Warm) */}
         <div className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${currentTheme === 'default' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[#C5A028]/5 rounded-full blur-[150px] animate-blob mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#665214]/10 rounded-full blur-[180px] animate-blob animation-delay-2000 mix-blend-screen" />
         </div>

         {/* Theme: FOREST (Green/Secure) */}
         <div className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${currentTheme === 'forest' ? 'opacity-100' : 'opacity-0'}`}>
             <div className="absolute inset-0 bg-[#060a06]" /> 
             <div className="absolute top-[10%] right-[0%] w-[50vw] h-[50vw] bg-[#122212]/30 rounded-full blur-[200px] animate-blob" />
         </div>
      </div>

      <div className="relative z-10">
        <Hero />
        
        {/* Main Content Container - Perfect spacing for High Class feel */}
        <main className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32 md:pb-64 pt-20 md:pt-40 space-y-32 md:space-y-48">
          <Overview />
          
          {/* INTERSTITIAL 1: ARCHITECTURAL PRECISION */}
          <div className="w-full border-y border-white/5">
             <MagneticField />
          </div>

          <Planning />
          <Masterplan />
          <Mobility />
          <Tech />

          {/* INTERSTITIAL 2: MARKET DYNAMICS */}
          <div className="w-full border-y border-white/5">
             <ResonanceGrid />
          </div>

          <Finance />
          <Sensitivity />
          <Market />
          <TextVersion />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
