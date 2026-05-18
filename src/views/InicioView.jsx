import React from 'react';
import heroImg from '../assets/boda.png';

export default function InicioView() {
  return (
    <div className="space-y-10 text-center py-6 px-4 max-w-2xl mx-auto">
      
      {/* CONTENEDOR DE IMAGEN DE PORTADA */}
      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-md border border-[#e6dfd5]/60 bg-[#faf6f0]">
        <img 
          src={heroImg} 
          alt="Portada Boda" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'italic', 'text-[#a38a70]/60', 'text-sm', 'p-8');
            e.target.parentNode.innerHTML = '✨ [ Coloca tu hermosa foto aquí (hero.png) ] ✨';
          }}
        />
      </div>

      {/* Ornamentación decorativa superior */}
      <div className="flex justify-center items-center gap-3 text-[#b89c7d] opacity-75 my-4">
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#b89c7d]"></span>
          <span className="text-lg">✧ ❦ ✧</span>
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#b89c7d]"></span>
      </div>

      {/* Mensaje de Bienvenida */}
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#a38a70] font-semibold">
        Nos complace invitarte a la boda de
      </p>

      {/* NOMBRES ESTILIZADOS (GRANDES Y ELEGANTES) */}
      <div className="py-4 space-y-2 select-none">
        <h1 className="text-5xl md:text-7xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#b89c7d] via-[#8c7863] to-[#b89c7d] drop-shadow-sm font-light custom-wedding-font">
          Alejandro
        </h1>
        
        <div className="flex items-center justify-center gap-4 my-2">
          <span className="h-[1px] w-6 bg-[#e6dfd5]"></span>
          <p className="text-3xl md:text-4xl font-serif italic text-[#b89c7d] font-light">&</p>
          <span className="h-[1px] w-6 bg-[#e6dfd5]"></span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#b89c7d] via-[#8c7863] to-[#b89c7d] drop-shadow-sm font-light custom-wedding-font">
          Gabriela
        </h1>
      </div>

      <hr className="w-1/2 mx-auto border-[#e6dfd5]/80" />

      {/* Frase / Dedicatoria */}
      <p className="text-sm md:text-base italic text-[#705e4d] max-w-md mx-auto leading-relaxed font-serif px-4">
        "Hay momentos en la vida que son inolvidables, y compartirlos con quienes más amamos los hace eternos."
      </p>

      {/* TARJETA DE PASES / ACCESO RE DISEÑADA */}
      <div className="bg-gradient-to-b from-[#faf6f0] to-[#f4eee4] p-6 rounded-2xl border border-[#e6dfd5] inline-block w-full max-w-md shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a38a70] mb-2">
          Pase de Invitación
        </p>
        <div className="h-[1px] w-12 bg-[#b89c7d]/40 mx-auto mb-3"></div>
        <p className="text-sm md:text-base font-medium text-[#4a3f35] flex items-center justify-center gap-2">
          <span className="text-[#b89c7d]">✨</span> 
          <span className="tracking-wide font-serif">Pase Familiar — <strong className="font-semibold text-[#8c7863]">4 Personas</strong></span> 
          <span className="text-[#b89c7d]">✨</span>
        </p>
      </div>

    </div>
  );
}