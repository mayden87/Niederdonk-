
import React, { useState, useMemo, useEffect } from "react";
import { SectionTag, Stage, Reveal, SectionBackground } from "./ui/Shared";
import { 
  Ruler, 
  Sofa, 
  Download, 
  Layers, 
  Maximize2, 
  ArrowRight,
  Compass,
  Bath,
  Utensils,
  BedDouble
} from "lucide-react";

// Types
type Room = { id: string; label: string; area: number; icon?: React.ReactNode; coords: { x: number; y: number; w: number; h: number } };
type Floor = { id: string; label: string; rooms: Room[] };
type UnitType = { id: string; title: string; shortTitle: string; description: string; specs: { totalArea: number; rooms: number; price: string }; floors: Floor[] };

const UNIT_DATA: Record<string, UnitType> = {
  DHH: {
    id: "DHH",
    title: "Doppelhaushälfte",
    shortTitle: "DHH",
    description: "Großzügiges Familiendomizil mit Privatgarten und Dachstudio. Perfekte Balance aus Gemeinschaft und Rückzug.",
    specs: { totalArea: 140, rooms: 5, price: "ab 910.000 €" },
    floors: [
      {
        id: "EG",
        label: "Erdgeschoss",
        rooms: [
          { id: "living", label: "Wohnen / Essen", area: 42.5, icon: <Sofa className="w-3 h-3" />, coords: { x: 0, y: 35, w: 100, h: 65 } },
          { id: "kitchen", label: "Küche", area: 12.0, icon: <Utensils className="w-3 h-3" />, coords: { x: 50, y: 0, w: 50, h: 35 } },
          { id: "hall", label: "Diele & WC", area: 8.5, coords: { x: 0, y: 0, w: 50, h: 35 } },
        ],
      },
      {
        id: "OG",
        label: "Obergeschoss",
        rooms: [
          { id: "child1", label: "Kind 1", area: 16.5, icon: <BedDouble className="w-3 h-3" />, coords: { x: 0, y: 0, w: 50, h: 50 } },
          { id: "child2", label: "Kind 2", area: 16.5, icon: <BedDouble className="w-3 h-3" />, coords: { x: 50, y: 0, w: 50, h: 50 } },
          { id: "bath", label: "Master Bad", area: 12.0, icon: <Bath className="w-3 h-3" />, coords: { x: 50, y: 50, w: 50, h: 50 } },
        ],
      },
    ],
  },
  ETW: {
    id: "ETW",
    title: "Eigentumswohnung",
    shortTitle: "ETW",
    description: "Barrierefreier Komfort. Penthouse-Feeling oder Gartenwohnung mit exklusiver Ausstattung.",
    specs: { totalArea: 110, rooms: 3, price: "ab 6.500 €/m²" },
    floors: [
      {
        id: "REGEL",
        label: "Regelgeschoss",
        rooms: [
          { id: "living", label: "Living", area: 45.0, icon: <Sofa className="w-3 h-3" />, coords: { x: 40, y: 0, w: 60, h: 100 } },
          { id: "sleep", label: "Schlafen", area: 18.0, icon: <BedDouble className="w-3 h-3" />, coords: { x: 0, y: 0, w: 40, h: 50 } },
          { id: "bath", label: "Bad", area: 12.0, icon: <Bath className="w-3 h-3" />, coords: { x: 0, y: 50, w: 40, h: 50 } },
        ],
      },
    ],
  }
};

const Floorplans: React.FC = () => {
  const [activeType, setActiveType] = useState<string>("DHH");
  const [activeFloorIdx, setActiveFloorIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"architect" | "living">("living");
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  const unit = UNIT_DATA[activeType];
  const floor = unit.floors[activeFloorIdx];

  return (
    <section id="floorplans" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND - Consistent with other sections */}
      <SectionBackground 
        src="https://whhy.de/wp-content/uploads/2026/01/2.png" 
        opacity={0.12} 
        color="from-[#050505] via-transparent to-[#050505]" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <Reveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <SectionTag>06. Architektur</SectionTag>
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] mt-8">
                Grundrisse & <br />
                <span className="text-[#C5A028] italic">Perspektiven</span>
              </h2>
            </div>
            <div className="max-w-xl md:pl-10 md:border-l border-white/10">
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                Präzise durchdachte Raumkonzepte für individuelle Lebensentwürfe. 
                Nutzen Sie den Viewer, um zwischen technischer Ansicht und bewohnter Atmosphäre zu wechseln.
              </p>
              
              {/* Type Selection Tabs */}
              <div className="flex gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                {Object.values(UNIT_DATA).map(t => (
                  <button 
                    key={t.id}
                    onClick={() => { setActiveType(t.id); setActiveFloorIdx(0); }}
                    className={`px-6 py-2 rounded-xl text-[10px] uppercase font-bold tracking-widest transition-all ${
                      activeType === t.id ? 'bg-[#C5A028] text-black shadow-lg' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* FLOORPLAN STAGE */}
        <Stage>
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Control Column (Span 4) */}
            <div className="lg:col-span-4 p-8 md:p-12 flex flex-col bg-white/[0.01]">
               <div className="mb-12">
                  <div className="flex justify-between items-center mb-6">
                     <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-bold">Details</span>
                     <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-white font-mono">
                        {unit.specs.rooms} Zimmer
                     </div>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4">{unit.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{unit.description}</p>
               </div>

               {/* Floor Selector */}
               <div className="mb-12">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-4">Ebene wählen</p>
                  <div className="space-y-2">
                     {unit.floors.map((f, idx) => (
                        <button 
                          key={f.id}
                          onClick={() => setActiveFloorIdx(idx)}
                          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                            activeFloorIdx === idx ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5 opacity-60 hover:opacity-100 hover:bg-white/10'
                          }`}
                        >
                           <span className="text-[11px] uppercase tracking-widest font-bold text-white">{f.label}</span>
                           <Layers className={`w-4 h-4 ${activeFloorIdx === idx ? 'text-[#C5A028]' : 'text-white/20'}`} />
                        </button>
                     ))}
                  </div>
               </div>

               {/* Room List (Dynamic) */}
               <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-4">Raumaufteilung {floor.label}</p>
                  <div className="space-y-1">
                     {floor.rooms.map(room => (
                        <div 
                          key={room.id}
                          onMouseEnter={() => setHoveredRoom(room.id)}
                          onMouseLeave={() => setHoveredRoom(null)}
                          className={`flex justify-between items-center p-3 rounded-xl transition-colors ${hoveredRoom === room.id ? 'bg-[#C5A028]/10' : 'hover:bg-white/5'}`}
                        >
                           <div className="flex items-center gap-3">
                              <span className={hoveredRoom === room.id ? 'text-[#C5A028]' : 'text-white/30'}>{room.icon || <ArrowRight className="w-3 h-3" />}</span>
                              <span className={`text-xs ${hoveredRoom === room.id ? 'text-white' : 'text-white/60'}`}>{room.label}</span>
                           </div>
                           <span className="font-mono text-[10px] text-white/30">{room.area.toFixed(1)} m²</span>
                        </div>
                     ))}
                  </div>
               </div>

               <button className="mt-12 w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all">
                  <Download className="w-4 h-4" /> PDF Exposé laden
               </button>
            </div>

            {/* Visualizer Column (Span 8) */}
            <div className="lg:col-span-8 flex flex-col divide-y divide-white/10">
               
               {/* View Switcher Header */}
               <div className="px-8 py-6 flex justify-between items-center bg-white/[0.03]">
                  <div className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full bg-[#C5A028] animate-pulse" />
                     <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-bold">{floor.label} Viewer</span>
                  </div>

                  <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
                     <button 
                        onClick={() => setViewMode('living')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[9px] uppercase tracking-widest font-bold transition-all ${
                          viewMode === 'living' ? 'bg-[#C5A028] text-black shadow-lg' : 'text-white/40 hover:text-white'
                        }`}
                     >
                        <Sofa className="w-3 h-3" /> Living
                     </button>
                     <button 
                        onClick={() => setViewMode('architect')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[9px] uppercase tracking-widest font-bold transition-all ${
                          viewMode === 'architect' ? 'bg-white text-black shadow-lg' : 'text-white/40 hover:text-white'
                        }`}
                     >
                        <Ruler className="w-3 h-3" /> Technical
                     </button>
                  </div>
               </div>

               {/* Drawing Area */}
               <div className="relative flex-1 p-8 md:p-16 flex items-center justify-center min-h-[500px] overflow-hidden group/canvas">
                  
                  {/* Grid background for technical mode */}
                  <div className={`absolute inset-0 opacity-10 transition-opacity duration-1000 ${viewMode === 'architect' ? 'opacity-20' : 'opacity-0'}`}
                       style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  
                  {/* Floorplan Drawing */}
                  <div className="relative w-full max-w-[600px] aspect-square">
                     <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        {floor.rooms.map(room => {
                           const isActive = hoveredRoom === room.id;
                           return (
                              <g 
                                key={room.id}
                                onMouseEnter={() => setHoveredRoom(room.id)}
                                onMouseLeave={() => setHoveredRoom(null)}
                                className="cursor-pointer"
                              >
                                 <rect 
                                    x={room.coords.x} y={room.coords.y} 
                                    width={room.coords.w} height={room.coords.h}
                                    fill={isActive ? 'rgba(197,160,40,0.2)' : viewMode === 'architect' ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.08)'}
                                    stroke={isActive ? '#C5A028' : viewMode === 'architect' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}
                                    strokeWidth={isActive ? '0.8' : '0.4'}
                                    className="transition-all duration-500"
                                 />
                                 {/* Label */}
                                 <foreignObject x={room.coords.x} y={room.coords.y} width={room.coords.w} height={room.coords.h} className="pointer-events-none">
                                    <div className="w-full h-full flex flex-col items-center justify-center p-1 text-center">
                                       <span className={`text-[2px] uppercase tracking-widest font-bold ${isActive ? 'text-[#C5A028]' : 'text-white/40'}`}>{room.label}</span>
                                       {viewMode === 'living' && <span className="text-[1.5px] text-white/20 font-mono mt-[0.5px]">{room.area} m²</span>}
                                    </div>
                                 </foreignObject>
                              </g>
                           )
                        })}
                        {/* Outer frame */}
                        <rect x="0.5" y="0.5" width="99" height="99" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.2" pointerEvents="none" />
                     </svg>
                  </div>

                  {/* Compass Overlay */}
                  <div className="absolute top-8 right-8 opacity-20 group-hover/canvas:opacity-50 transition-opacity">
                     <Compass className="w-12 h-12 text-white" strokeWidth={1} />
                  </div>
               </div>

            </div>
          </div>
        </Stage>

      </div>
    </section>
  );
};

export default Floorplans;
