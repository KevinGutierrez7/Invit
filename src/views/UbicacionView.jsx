import React from 'react';

export default function UbicacionView() {
  return (
    <div className="space-y-5 max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#b89c7d] font-bold bg-[#faf6f0] px-3 py-1 rounded-full">¿Cuándo y Dónde?</span>
      
      <div className="bg-[#faf6f0]/50 border border-[#e6dfd5]/60 rounded-2xl py-3">
        <p className="text-[10px] tracking-widest uppercase text-[#a38a70] font-bold">Fecha</p>
        <p className="text-lg font-serif text-[#705e4e] mt-0.5">Sábado, 12 de Dic, 2026</p>
      </div>

      <div className="space-y-3 text-sm text-left">
        <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#e6dfd5]/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#b89c7d] block mb-0.5">⛪ Ceremonia</span>
          <p className="font-medium text-sm">Parroquia de Santa María</p>
          <p className="text-xs text-[#a38a70] mt-1">17:00 Hrs — Av. de la Paz #456</p>
        </div>

        <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#e6dfd5]/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#b89c7d] block mb-0.5">🥂 Recepción</span>
          <p className="font-medium text-sm">Jardín "El Campanario"</p>
          <p className="text-xs text-[#a38a70] mt-1">19:00 Hrs — Carr. Central Km 12.5</p>
        </div>
      </div>

      <button className="w-full bg-[#8c7863] text-[#faf6f0] hover:bg-[#705e4e] active:scale-[0.98] font-medium tracking-wide py-3 px-6 rounded-xl text-xs uppercase shadow-sm transition-all mt-2">
        Abrir en Google Maps 📍
      </button>
    </div>
  );
}