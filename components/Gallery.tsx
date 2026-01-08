import React, { useState, useEffect } from 'react';
import { SectionTag, Tabs } from './ui/Shared';
import { ArrowUpRight } from 'lucide-react';

const images = {
  exterior: [
    "https://whhy.de/wp-content/uploads/2026/01/1.png",
    "https://whhy.de/wp-content/uploads/2026/01/2.png"
  ],
  interior: [
    "https://whhy.de/wp-content/uploads/2026/01/4.png", // Using provided assets
    "https://whhy.de/wp-content/uploads/2026/01/1.png"  // Recycling for demo
  ],
  material: [
     "https://www.transparenttextures.com/patterns/stardust.png", // Abstract placeholder
     "https://whhy.de/wp-content/uploads/2026/01/2.png"
  ]
};

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('exterior');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate slowly
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images[activeTab as keyof typeof images].length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section className="py-20">
       {/* Fix: items-start for mobile, md:items-end for desktop to keep alignment clean */}
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-8">
          <div>
            <SectionTag>Impressionen</SectionTag>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-4">Kuratierte <span className="text-[#C5A028]">Einblicke</span></h2>
          </div>
          {/* Tabs aligned left on mobile via parent items-start */}
          <div className="w-full md:w-auto">
             <Tabs tabs={['exterior', 'interior', 'material']} activeTab={activeTab} onChange={(t) => { setActiveTab(t); setCurrentIndex(0); }} />
          </div>
       </div>

       <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-black border border-white/10 group">
          {images[activeTab as keyof typeof images].map((src, idx) => (
             <div 
                key={`${activeTab}-${idx}`}
                className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
             >
                <img 
                    src={src} 
                    alt="Gallery" 
                    className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${idx === currentIndex ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-black/20" />
             </div>
          ))}

          {/* Custom Cursor Hint Area */}
          <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                 <span className="text-[10px] uppercase tracking-widest font-bold text-white">View</span>
             </div>
          </div>

          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
             <div className="flex gap-2">
                 {images[activeTab as keyof typeof images].map((_, idx) => (
                     <button 
                        key={idx} 
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-[#C5A028]' : 'w-4 bg-white/30 hover:bg-white'}`} 
                     />
                 ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default Gallery;