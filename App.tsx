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
    <div className="antialiased min-h-screen bg-[#050505] text-text-main font-sans selection:bg-accent selection:text-black relative overflow-x-hidden">
      <a href="#main" className="skip-link">Zum Inhalt springen</a>
      
      {/* --- CINEMATIC GRAIN OVERLAY (THE "LIFE" TEXTURE) --- */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* --- LIVING BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-[2000ms] ease-in-out bg-[#050505]">
         
         {/* Theme: DEFAULT (Dark/Gold/Warm) */}
         <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${currentTheme === 'default' ? 'opacity-100' : 'opacity-0'}`}>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.05] mix-blend-screen saturate-0"
              style={{ backgroundImage: `url('https://whhy.de/wp-content/uploads/2026/01/1.png')` }}
            />
            {/* Organic Breathing Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[100px] animate-blob mix-blend-screen" />
            <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#8a6e15]/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
         </div>

         {/* Theme: FOREST (Planning/Safety - Deep Green/Bronze/Safe) */}
         <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${currentTheme === 'forest' ? 'opacity-100' : 'opacity-0'}`}>
             <div className="absolute inset-0 bg-[#080c08]" /> {/* Darker Forest Base */}
             
             {/* "Safe Harbor" Lights */}
             <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#1a3c1a]/20 rounded-full blur-[150px] animate-blob" />
             <div className="absolute bottom-[0%] left-[0%] w-[50vw] h-[50vw] bg-[#D4AF37]/5 rounded-full blur-[180px] animate-blob animation-delay-4000" />
         </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Increased vertical spacing for "Breath" */}
        <main id="main" className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32 md:pb-64 pt-32 md:pt-64 space-y-48 md:space-y-64">
          <Overview />
          <Planning />
          <Masterplan />
          <Mobility />
          <Tech />
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