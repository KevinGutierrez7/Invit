import React from 'react';
import heroImg from '../assets/hero.png';

export default function InicioView() {
  return (
    <div className="space-y-6 text-center">
      
      {/* CONTENEDOR DE IMAGEN DE PORTADA */}
      <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-sm border border-[#e6dfd5]/40 bg-[#faf6f0]">
        <img 
          src={heroImg} 
          alt="Portada Boda" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'italic', 'text-[#a38a70]/50', 'text-xs', 'p-8');
            e.target.parentNode.innerHTML = '✨ [ Coloca tu imagen hero.png aquí ] ✨';
          }}
        />
      </div>

      {/* Ornamentación decorativa */}
      <div className="flex justify-center items-center gap-2 text-[#b89c7d] opacity-60 my-1">
        <span className="h-[1px] w-8 bg-[#b89c7d]"></span>
        <span className="text-xs">❦</span>
        <span className="h-[1px] w-8 bg-[#b89c7d]"></span>
      </div>

      {/* Mensaje de Bienvenida */}
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#b89c7d] font-bold">
        You are invited to the wedding of
      </p>

      {/* NOMBRES ESTILIZADOS */}
      <div className="py-2 space-y-1">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#b89c7d] via-[#a38a70] to-[#b89c7d] drop-shadow-sm font-medium">
          Alejandro
        </h1>
        <p className="text-2xl font-serif italic text-[#b89c7d]/80 font-light">&</p>
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#b89c7d] via-[#a38a70] to-[#b89c7d] drop-shadow-sm font-medium">
          Gabriela
        </h1>
      </div>

      <hr className="w-1/3 mx-auto border-[#e6dfd5]" />

      {/* Frase / Dedicatoria */}
      <p className="text-xs md:text-sm italic text-[#8c7863] max-w-xs mx-auto leading-relaxed px-2">
        "Hay momentos en la vida que son inolvidables, y compartirlos con quienes más amamos los hace eternos."
      </p>

      {/* TARJETA DE PASES / ACCESO */}
      <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#e6dfd5]/50 inline-block w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a38a70]">
          Tipo de Invitación
        </p>
        <p className="text-xs md:text-sm font-medium text-[#4a3f35] mt-1.5 flex items-center justify-center gap-1.5">
          <span>✨</span> 
          <span className="tracking-wide">Pase Familiar — 4 Personas</span> 
          <span>✨</span>
        </p>
      </div>

    </div>
  );
}