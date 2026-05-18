import React from 'react';

export default function InicioView() {
  return (
    <div className="space-y-6 max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#b89c7d] font-bold bg-[#faf6f0] px-3 py-1 rounded-full">Bienvenidos</span>
      <div className="space-y-2">
        <h1 className="text-4xl font-serif text-[#705e4e]">Alejandro</h1>
        <p className="text-lg font-serif italic text-[#b89c7d]">y</p>
        <h1 className="text-4xl font-serif text-[#705e4e]">Gabriela</h1>
      </div>
      <p className="text-sm italic text-[#8c7863] max-w-xs mx-auto leading-relaxed">
        "Hay momentos en la vida que son inolvidables, y compartirlos con quienes más amamos los hace eternos."
      </p>
      <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#e6dfd5]/40 inline-block w-full">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#a38a70]">Tipo de Invitación</p>
        <p className="text-sm font-medium text-[#4a3f35] mt-1">✨ Pase Familiar — 4 Personas ✨</p>
      </div>
    </div>
  );
}