
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Overview from './components/Overview';
import Planning from './components/Planning';
import Roadmap from './components/Roadmap';
import Mobility from './components/Mobility';
import Tech from './components/Tech';
import Masterplan from './components/Masterplan';
import Floorplans from './components/Floorplans';
import Finance from './components/Finance';
import Sensitivity from './components/Sensitivity';
import Market from './components/Market';
import TextVersion from './components/TextVersion';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GlobalSpotlight, AmbientParticles } from './components/ui/Shared';
import { MobileDock } from './components/ui/MobileDock';

function App() {
  return (
    <div className="antialiased min-h-screen bg-[#050505] text-text-main font-sans relative overflow-x-hidden selection:bg-[#C5A028]/30 selection:text-white">
      
      {/* --- NEW: HIGH-END LIFE ELEMENTS --- */}
      <GlobalSpotlight />
      <AmbientParticles />
      <MobileDock />

      {/* Navbar Fixed */}
      <Navbar />

      {/* --- CINEMATIC GRAIN (GLOBAL) --- */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10">
        <Hero />
        <Thesis />
        
        {/* Main Content Container */}
        <main>
          <Overview />
          <Planning />
          <Roadmap />
          <Mobility />
          <Tech />
          <Masterplan />
          <Floorplans />
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
