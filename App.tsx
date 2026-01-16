
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Mobility from './components/Mobility';
import Tech from './components/Tech';
import Finance from './components/Finance';
import Sensitivity from './components/Sensitivity';
import Market from './components/Market';
import TextVersion from './components/TextVersion';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GlobalSpotlight, SectionDivider, LightLeak } from './components/ui/Shared';
import { MobileDock } from './components/ui/MobileDock';

function App() {
  return (
    <div className="antialiased min-h-screen bg-[#050505] text-text-main font-sans relative overflow-x-hidden selection:bg-[#C5A028]/30 selection:text-white">
      
      {/* --- LAYER 1: ATMOSPHERE (Top Level) --- */}
      <GlobalSpotlight />
      
      {/* 
         MOBILE DOCK DISABLED 
         <MobileDock /> 
      */}

      {/* Navbar Fixed */}
      <Navbar />

      {/* --- CINEMATIC GRAIN (GLOBAL) - Kept for texture, but particles are gone --- */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.05] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n  oiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10">
        <Hero />
        
        {/* Thesis with Overlay Leak */}
        <div className="relative">
          <LightLeak position="top-right" intensity={0.3} />
          <Thesis />
        </div>
        
        <SectionDivider />

        {/* Main Content Container */}
        <main className="relative">
          <div className="relative">
             <LightLeak position="bottom-left" intensity={0.25} />
             <Mobility />
          </div>

          <SectionDivider />

          <div className="relative">
            <LightLeak position="top-right" color="#ffffff" intensity={0.08} />
            <Tech />
          </div>

          <SectionDivider />

          <Finance />

          <SectionDivider />

          <div className="relative">
             <LightLeak position="center" intensity={0.15} />
             <Sensitivity />
          </div>

          <SectionDivider />

          <Market />

          <SectionDivider />

          <div className="relative">
             <LightLeak position="bottom-right" intensity={0.3} />
             <TextVersion />
          </div>

          <SectionDivider />

          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
