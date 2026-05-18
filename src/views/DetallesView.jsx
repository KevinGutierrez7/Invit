import React from 'react';

export default function DetallesView() {
  return (
    <div className="space-y-6 max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#b89c7d] font-bold bg-[#faf6f0] px-3 py-1 rounded-full">Nuestra Historia</span>
      <h2 className="text-xl font-serif text-[#705e4e]">El Motivo de Celebrar</h2>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#faf6f0] aspect-[3/4] rounded-2xl flex items-center justify-center text-xs text-[#a38a70]/70 italic border border-[#e6dfd5]/60">
          [ Foto 1 ]
        </div>
        <div className="bg-[#faf6f0] aspect-[3/4] rounded-2xl flex items-center justify-center text-xs text-[#a38a70]/70 italic border border-[#e6dfd5]/60">
          [ Foto 2 ]
        </div>
      </div>
      
      <p className="text-xs text-[#8c7863] max-w-xs mx-auto leading-relaxed">
        Porque decidimos unir nuestras vidas y queremos que formes parte de este nuevo comienzo.
      </p>
    </div>
  );
}