import React, { useState, useMemo } from 'react';
import { SectionTag, Drawer, MetricRow, UnifiedCard } from './ui/Shared';
import { Filter, ArrowRight, Check, CheckCircle2 } from 'lucide-react';

// Mock Data for 32 Units
const generateUnits = () => {
    const units = [];
    const types = ['DHH', 'RH', 'ETW'];
    
    // 9 DHH
    for (let i = 1; i <= 9; i++) units.push({ id: `DHH-${i < 10 ? '0' + i : i}`, type: 'DHH', rooms: 5, area: 140, price: 910000, status: i === 1 ? 'Reserved' : 'Available', floor: 'H' });
    // 7 RH
    for (let i = 1; i <= 7; i++) units.push({ id: `RH-${i < 10 ? '0' + i : i}`, type: 'RH', rooms: 4, area: 120, price: 780000, status: 'Available', floor: 'H' });
    // 16 ETW
    for (let i = 1; i <= 16; i++) {
        const rooms = i % 2 === 0 ? 3 : 4;
        const area = i % 2 === 0 ? 85 : 110;
        const price = area * 6500;
        units.push({ id: `ETW-${i < 10 ? '0' + i : i}`, type: 'ETW', rooms, area, price, status: i % 5 === 0 ? 'Sold' : 'Available', floor: i < 9 ? 'MFH I' : 'MFH II' });
    }
    return units;
};

const allUnits = generateUnits();

const UnitFinder: React.FC = () => {
    const [filterType, setFilterType] = useState<string>('All');
    const [selectedUnit, setSelectedUnit] = useState<any>(null);

    const filteredUnits = useMemo(() => {
        if (filterType === 'All') return allUnits;
        return allUnits.filter(u => u.type === filterType);
    }, [filterType]);

    const formatMoney = (val: number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

    return (
        <section className="relative py-20 z-20">
            {/* Fix: items-start on mobile ensures filters align left */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                <div>
                    <SectionTag>Verfügbarkeit</SectionTag>
                    <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mt-4">
                        Einheiten <span className="text-[#C5A028] italic">Finder</span>
                    </h2>
                </div>
                
                {/* Filters */}
                <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-full border border-white/10">
                    {['All', 'DHH', 'RH', 'ETW'].map(type => (
                        <button 
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${filterType === type ? 'bg-[#C5A028] text-black' : 'text-white/60 hover:text-white'}`}
                        >
                            {type === 'All' ? 'Alle' : type}
                        </button>
                    ))}
                </div>
            </div>

            {/* TABLE HEADER */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 text-[10px] uppercase tracking-widest text-text-muted font-bold">
                <div className="col-span-2">Einheit ID</div>
                <div className="col-span-2">Typ</div>
                <div className="col-span-2 hidden md:block">Etage/Lage</div>
                <div className="col-span-2 text-right">Fläche</div>
                <div className="col-span-2 text-right">Zimmer</div>
                <div className="col-span-2 text-right">Status</div>
            </div>

            {/* LIST */}
            <div className="divide-y divide-white/5 max-h-[600px] overflow-y-auto custom-scrollbar border-b border-white/10">
                {filteredUnits.map((unit) => (
                    <div 
                        key={unit.id}
                        onClick={() => setSelectedUnit(unit)}
                        className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-white/5 transition-colors cursor-pointer group items-center"
                    >
                        <div className="col-span-2 font-mono text-white text-xs font-bold group-hover:text-[#C5A028] transition-colors flex items-center gap-2">
                             {unit.id}
                             <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C5A028]" />
                        </div>
                        <div className="col-span-2 text-xs text-white/80">{unit.type === 'DHH' ? 'Doppelhaus' : unit.type === 'RH' ? 'Reihenhaus' : 'Wohnung'}</div>
                        <div className="col-span-2 hidden md:block text-xs text-text-muted">{unit.floor}</div>
                        <div className="col-span-2 text-right text-xs text-white/90 font-mono">{unit.area} m²</div>
                        <div className="col-span-2 text-right text-xs text-white/90">{unit.rooms}</div>
                        <div className="col-span-2 text-right">
                            <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-sm text-[9px] font-bold uppercase tracking-wider ${
                                unit.status === 'Available' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                                unit.status === 'Reserved' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                                'bg-white/5 text-white/30'
                            }`}>
                                <span className={`w-1 h-1 rounded-full ${unit.status === 'Available' ? 'bg-green-400' : unit.status === 'Reserved' ? 'bg-orange-400' : 'bg-gray-500'}`} />
                                {unit.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* DRAWER DETAILS */}
            <Drawer 
                isOpen={!!selectedUnit} 
                onClose={() => setSelectedUnit(null)} 
                title={selectedUnit ? `Detail ${selectedUnit.id}` : ''}
            >
                {selectedUnit && (
                    <div className="space-y-8 animate-fade-up">
                        {/* Status Banner */}
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4">
                             <CheckCircle2 className="w-5 h-5 text-[#C5A028]" />
                             <div>
                                <p className="text-white text-sm font-medium">Status: {selectedUnit.status}</p>
                                <p className="text-xs text-text-muted">Provisionsfrei für Käufer im Global-Exit.</p>
                             </div>
                        </div>

                        {/* Main Image placeholder */}
                        <div className="w-full aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden relative group">
                            <img src="https://whhy.de/wp-content/uploads/2026/01/4.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                            <span className="relative z-10 text-xs uppercase tracking-widest text-white bg-black/50 backdrop-blur px-3 py-1 rounded">Beispielansicht</span>
                        </div>

                        {/* Specs */}
                        <div>
                            <h4 className="text-lg font-serif text-white mb-4">Spezifikationen</h4>
                            <div className="space-y-1">
                                <MetricRow label="Kaufpreis (Indikativ)" value={formatMoney(selectedUnit.price)} />
                                <MetricRow label="Wohnfläche" value={`${selectedUnit.area} m²`} />
                                <MetricRow label="Zimmer" value={selectedUnit.rooms} />
                                <MetricRow label="Lage / Typ" value={`${selectedUnit.floor} / ${selectedUnit.type}`} border={false} />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                             <h4 className="text-lg font-serif text-white mb-4">Beschreibung</h4>
                             <p className="text-sm text-text-muted leading-relaxed font-light">
                                Großzügig geschnittene Einheit mit hochwertiger Ausstattung. Bodentiefe Fenster, Fußbodenheizung und Smart-Home Vorbereitung inklusive. 
                                Ideal geeignet für {selectedUnit.rooms > 3 ? 'Familien' : 'Paare und Singles'}.
                             </p>
                        </div>

                        {/* Action */}
                        <button className="w-full py-4 bg-[#C5A028] hover:bg-white text-black font-bold uppercase tracking-widest text-xs rounded-lg transition-colors mt-8">
                            Exposé anfordern
                        </button>
                    </div>
                )}
            </Drawer>
        </section>
    );
};

export default UnitFinder;