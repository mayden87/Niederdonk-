import React, { useState, useMemo } from 'react';
import { SectionTag, UnifiedCard } from './ui/Shared';
import { Maximize2, Ruler, Compass, Download, Layers, ArrowRight, Sofa, Utensils, BedDouble, Bath } from 'lucide-react';

// --- DATA TYPES ---
type Room = {
  id: string;
  label: string;
  area: number; // m²
  icon?: React.ReactNode;
  coords: { x: number; y: number; w: number; h: number }; 
};

type Floor = {
  id: string; // 'EG', 'OG', 'DG'
  label: string;
  rooms: Room[];
};

type UnitType = {
  id: string; // 'DHH', 'RH', 'ETW'
  title: string;
  shortTitle?: string; // For mobile buttons
  description: string;
  specs: { totalArea: number; rooms: number; price: string };
  floors: Floor[];
};

// --- CONFIGURATION ---
const UNIT_DATA: Record<string, UnitType> = {
  DHH: {
    id: 'DHH',
    title: 'Doppelhaushälfte',
    shortTitle: 'DHH',
    description: 'Großzügiges Familiendomizil mit Privatgarten und Dachstudio.',
    specs: { totalArea: 140, rooms: 5, price: 'ab 910.000 €' },
    floors: [
      {
        id: 'EG',
        label: 'Erdgeschoss',
        rooms: [
          { id: 'living', label: 'Wohnen / Essen', area: 42.5, icon: <Sofa className="w-3 h-3"/>, coords: { x: 0, y: 35, w: 100, h: 65 } },
          { id: 'kitchen', label: 'Küche', area: 12.0, icon: <Utensils className="w-3 h-3"/>, coords: { x: 50, y: 0, w: 50, h: 35 } },
          { id: 'hall', label: 'Diele & WC', area: 8.5, coords: { x: 0, y: 0, w: 50, h: 35 } },
        ]
      },
      {
        id: 'OG',
        label: 'Obergeschoss',
        rooms: [
          { id: 'child1', label: 'Kind 1', area: 16.5, icon: <BedDouble className="w-3 h-3"/>, coords: { x: 0, y: 0, w: 50, h: 50 } },
          { id: 'child2', label: 'Kind 2', area: 16.5, icon: <BedDouble className="w-3 h-3"/>, coords: { x: 50, y: 0, w: 50, h: 50 } },
          { id: 'bath', label: 'Master Bad', area: 12.0, icon: <Bath className="w-3 h-3"/>, coords: { x: 50, y: 50, w: 50, h: 50 } },
          { id: 'corridor', label: 'Flur', area: 6.0, coords: { x: 0, y: 50, w: 50, h: 50 } },
        ]
      },
      {
        id: 'DG',
        label: 'Dachgeschoss',
        rooms: [
          { id: 'studio', label: 'Studio / Gast', area: 22.0, coords: { x: 0, y: 20, w: 70, h: 80 } },
          { id: 'utility', label: 'HWR / Technik', area: 6.0, coords: { x: 70, y: 20, w: 30, h: 40 } },
          { id: 'terrace', label: 'Dachterrasse', area: 14.0, coords: { x: 0, y: 0, w: 100, h: 20 } },
        ]
      }
    ]
  },
  RH: {
    id: 'RH',
    title: 'Reihenhaus',
    shortTitle: 'RH',
    description: 'Effizientes Raumwunder. Perfekt organisiertes Wohnen auf 3 Ebenen.',
    specs: { totalArea: 120, rooms: 4, price: 'ab 780.000 €' },
    floors: [
      {
        id: 'EG',
        label: 'Erdgeschoss',
        rooms: [
          { id: 'living', label: 'Living', area: 38.0, coords: { x: 0, y: 40, w: 100, h: 60 } },
          { id: 'kitchen', label: 'Küche / Essen', area: 14.0, coords: { x: 40, y: 0, w: 60, h: 40 } },
          { id: 'wc', label: 'WC / Entrée', area: 6.0, coords: { x: 0, y: 0, w: 40, h: 40 } },
        ]
      },
      {
        id: 'OG',
        label: 'Obergeschoss',
        rooms: [
          { id: 'sleep', label: 'Schlafen', area: 18.0, coords: { x: 0, y: 50, w: 100, h: 50 } },
          { id: 'bath', label: 'Bad', area: 10.0, coords: { x: 50, y: 0, w: 50, h: 50 } },
          { id: 'work', label: 'Arbeiten', area: 12.0, coords: { x: 0, y: 0, w: 50, h: 50 } },
        ]
      },
      {
        id: 'DG',
        label: 'Dachgeschoss',
        rooms: [
          { id: 'studio', label: 'Studio', area: 24.0, coords: { x: 0, y: 0, w: 100, h: 80 } },
        ]
      }
    ]
  },
  ETW: {
    id: 'ETW',
    title: 'Eigentumswohnung',
    shortTitle: 'ETW',
    description: 'Barrierefreier Komfort. Penthouse-Feeling oder Gartenwohnung.',
    specs: { totalArea: 110, rooms: 3, price: 'ab 6.500 €/m²' },
    floors: [
      {
        id: 'REGEL',
        label: 'Regelgeschoss',
        rooms: [
          { id: 'living', label: 'Wohnen / Essen', area: 45.0, coords: { x: 40, y: 0, w: 60, h: 100 } },
          { id: 'sleep', label: 'Schlafen', area: 18.0, coords: { x: 0, y: 0, w: 40, h: 40 } },
          { id: 'bath', label: 'Bad', area: 12.0, coords: { x: 0, y: 40, w: 40, h: 30 } },
          { id: 'guest', label: 'Gast', area: 14.0, coords: { x: 0, y: 70, w: 40, h: 30 } },
        ]
      }
    ]
  }
};

// --- VISUALIZER COMPONENT ---
const BlueprintViewer: React.FC<{ 
  floor: Floor; 
  mode: 'architect' | 'living';
  hoveredRoom: string | null;
  onHover: (id: string | null) => void; 
}> = ({ floor, mode, hoveredRoom, onHover }) => {
  
  return (
    <div className="relative w-full h-full p-0 flex items-center justify-center">
       {/* Background Grid */}
       <div 
         className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${mode === 'architect' ? 'opacity-100' : 'opacity-20'}`}
         style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
         }} 
       />

       {/* THE FLOORPLAN SVG */}
       <svg 
         viewBox="0 0 100 100" 
         preserveAspectRatio="xMidYMid meet" 
         className="w-full h-full max-h-[90%] md:max-h-full drop-shadow-2xl transition-all duration-700"
       >
         {/* Outline Shadow */}
         <rect x="1" y="1" width="98" height="98" rx="0" fill="black" fillOpacity="0.5" filter="blur(5px)" transform="translate(2,2)" />

         {/* Rooms Loop */}
         {floor.rooms.map((room) => {
           const isHovered = hoveredRoom === room.id;
           const strokeColor = isHovered ? '#C5A028' : 'white';
           const strokeWidth = mode === 'architect' ? 0.8 : 0;
           const fill = mode === 'architect' 
              ? (isHovered ? 'rgba(197, 160, 40, 0.1)' : 'transparent')
              : (isHovered ? 'rgba(197, 160, 40, 0.6)' : 'rgba(255, 255, 255, 0.1)');

           return (
             <g 
                key={room.id} 
                onMouseEnter={() => onHover(room.id)}
                onMouseLeave={() => onHover(null)}
                className="cursor-pointer transition-all duration-300"
             >
                <rect 
                    x={room.coords.x} 
                    y={room.coords.y} 
                    width={room.coords.w} 
                    height={room.coords.h} 
                    fill={fill}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    className="transition-all duration-300 ease-out"
                />
                
                {mode === 'architect' && (
                    <>
                        <line x1={room.coords.x + 2} y1={room.coords.y + room.coords.h - 2} x2={room.coords.x + room.coords.w - 2} y2={room.coords.y + room.coords.h - 2} stroke="white" strokeOpacity="0.3" strokeWidth="0.2" />
                        <text x={room.coords.x + room.coords.w/2} y={room.coords.y + room.coords.h - 3} fill="white" fillOpacity="0.5" fontSize="2" textAnchor="middle">{room.coords.w / 10}m</text>
                    </>
                )}

                <foreignObject 
                    x={room.coords.x} 
                    y={room.coords.y} 
                    width={room.coords.w} 
                    height={room.coords.h} 
                    className="pointer-events-none"
                >
                    <div className={`w-full h-full flex flex-col items-center justify-center text-center transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                        <span className={`text-[2.5px] uppercase font-bold tracking-widest ${isHovered ? 'text-[#C5A028]' : 'text-white'}`}>
                            {room.label}
                        </span>
                        {mode === 'living' && (
                             <span className="text-[2px] text-white/60 mt-[1px] font-mono">{room.area} m²</span>
                        )}
                    </div>
                </foreignObject>
             </g>
           );
         })}
         
         <rect x="0" y="0" width="100" height="100" fill="none" stroke="white" strokeWidth={mode === 'architect' ? 2 : 0.5} strokeOpacity={0.8} pointerEvents="none" />
       </svg>
    </div>
  );
};


const Floorplans: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('DHH');
  const [activeFloorIdx, setActiveFloorIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'architect' | 'living'>('living');
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  const unit = UNIT_DATA[activeType];
  const floor = unit.floors[activeFloorIdx];

  const handleTypeChange = (typeId: string) => {
    setActiveType(typeId);
    setActiveFloorIdx(0);
  };

  return (
    <section id="floorplans" className="py-20 md:py-32 relative">
      <div className="mb-8 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
         <div>
            <SectionTag>Architektur</SectionTag>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-4">
               Grundrisse & <br />
               <span className="text-[#C5A028] italic">Perspektiven</span>
            </h2>
         </div>
         
         {/* TYPE SELECTOR (FULL WIDTH MOBILE) */}
         <div className="w-full md:w-auto flex bg-white/5 border border-white/10 p-1 rounded-xl backdrop-blur-md">
            {Object.values(UNIT_DATA).map((t) => (
                <button
                    key={t.id}
                    onClick={() => handleTypeChange(t.id)}
                    className={`flex-1 md:flex-none px-2 md:px-6 py-3 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all duration-300 whitespace-nowrap ${
                        activeType === t.id 
                        ? 'bg-[#C5A028] text-black shadow-lg scale-100' 
                        : 'text-text-muted hover:text-white'
                    }`}
                >
                    <span className="md:hidden">{t.shortTitle}</span>
                    <span className="hidden md:inline">{t.title}</span>
                </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
         
         {/* LEFT: SPECS & ROOM LIST */}
         <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            <UnifiedCard className="flex flex-col h-full" noPadding>
                <div className="p-4 md:p-6 flex flex-col h-full">
                    {/* Header Specs */}
                    <div className="mb-8">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-serif text-white">{unit.title}</h3>
                            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white font-mono">
                                {unit.specs.rooms} Zimmer
                            </div>
                        </div>
                        <p className="text-text-muted text-sm font-light leading-relaxed mb-6">
                            {unit.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/5">
                            <div>
                                 <p className="text-[9px] uppercase tracking-widest text-text-muted mb-1">Gesamtfläche</p>
                                 <p className="text-xl font-mono text-white">~ {unit.specs.totalArea} m²</p>
                            </div>
                            <div>
                                 <p className="text-[9px] uppercase tracking-widest text-text-muted mb-1">Preisindikation</p>
                                 <p className="text-xl font-mono text-[#C5A028]">{unit.specs.price}</p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Room List */}
                    <div className="flex-1 space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-text-muted mb-3 font-bold flex items-center gap-2">
                            <Layers className="w-3 h-3" />
                            Raumaufteilung {floor.label}
                        </p>
                        {floor.rooms.map(room => (
                            <div 
                                key={room.id}
                                onMouseEnter={() => setHoveredRoom(room.id)}
                                onMouseLeave={() => setHoveredRoom(null)}
                                className={`group flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all duration-200 border border-transparent ${
                                    hoveredRoom === room.id ? 'bg-[#C5A028]/10 border-[#C5A028]/30 translate-x-1' : 'hover:bg-white/5'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`transition-colors ${hoveredRoom === room.id ? 'text-[#C5A028]' : 'text-text-muted group-hover:text-white'}`}>
                                        {room.icon || <ArrowRight className="w-3 h-3 opacity-50" />}
                                    </span>
                                    <span className={`text-sm ${hoveredRoom === room.id ? 'text-white font-medium' : 'text-text-muted group-hover:text-white'}`}>
                                        {room.label}
                                    </span>
                                </div>
                                <span className={`font-mono text-xs ${hoveredRoom === room.id ? 'text-[#C5A028]' : 'text-text-muted/60'}`}>
                                    {room.area.toFixed(1)} m²
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <button className="w-full py-4 rounded-xl border border-white/10 hover:bg-white text-white hover:text-black transition-all flex items-center justify-center gap-2 group">
                            <Download className="w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-widest font-bold">PDF Exposé laden</span>
                        </button>
                    </div>
                </div>
            </UnifiedCard>
         </div>

         {/* RIGHT: INTERACTIVE VIEWER */}
         <div className="lg:col-span-8 order-1 lg:order-2 h-[350px] md:h-[650px] relative rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl group">
             
             {/* BIG GOLD FLOOR LABEL (Mobile Optimized) */}
             <div className="absolute top-6 left-6 z-10 pointer-events-none max-w-[80%]">
                <div className="overflow-hidden">
                    <h3 key={floor.id} className="text-3xl md:text-5xl font-serif font-bold text-[#C5A028] tracking-tight leading-none animate-fade-up">
                        {floor.label}
                    </h3>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2 font-bold pl-1 animate-fade-up" style={{ animationDelay: '100ms' }}>
                    {unit.title}
                </p>
             </div>

             {/* Mode Toggle (Top Right) */}
             <div className="absolute top-6 right-6 z-20 flex gap-2 bg-black/40 backdrop-blur rounded-lg p-1 border border-white/10">
                 <button 
                    onClick={() => setViewMode('architect')}
                    className={`p-2 rounded transition-all ${viewMode === 'architect' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
                 >
                    <Ruler className="w-4 h-4" />
                 </button>
                 <button 
                    onClick={() => setViewMode('living')}
                    className={`p-2 rounded transition-all ${viewMode === 'living' ? 'bg-[#C5A028] text-black' : 'text-white/50 hover:text-white'}`}
                 >
                    <Sofa className="w-4 h-4" />
                 </button>
             </div>

             {/* Floor Elevator (Left - Vertically Centered) */}
             {unit.floors.length > 1 && (
                 <div className="absolute top-1/2 -translate-y-1/2 left-6 z-20 flex flex-col gap-3">
                     {unit.floors.map((f, idx) => (
                         <button
                            key={f.id}
                            onClick={() => setActiveFloorIdx(idx)}
                            className={`w-10 h-10 rounded-xl border flex items-center justify-center text-xs font-bold transition-all duration-300 relative ${
                                activeFloorIdx === idx 
                                ? 'bg-[#C5A028] border-[#C5A028] text-black shadow-[0_0_20px_rgba(197,160,40,0.4)] scale-110' 
                                : 'bg-black/40 border-white/10 text-white/50 hover:text-white hover:border-white/30 backdrop-blur'
                            }`}
                         >
                            {f.id}
                         </button>
                     ))}
                 </div>
             )}

             {/* Compass */}
             <div className="absolute bottom-8 right-8 z-10 opacity-30 pointer-events-none">
                 <Compass className="w-16 h-16 text-white" strokeWidth={1} />
             </div>

             {/* Main Viewer */}
             <BlueprintViewer 
                floor={floor} 
                mode={viewMode} 
                hoveredRoom={hoveredRoom}
                onHover={setHoveredRoom}
             />
             
         </div>
      </div>
    </section>
  );
};

export default Floorplans;