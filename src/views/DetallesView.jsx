import React, { useState, useEffect, memo } from 'react';
import foto1 from '../assets/images/f1.webp';
import foto2 from '../assets/images/f2.webp';

// LA CONSTANTE SE QUEDA AQUÍ AFUERA (Evita cálculos innecesarios cada segundo)
const FECHA_BODA = new Date('2026-12-12T17:00:00').getTime();

const DetallesView = memo(function DetallesView() {
  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0, horas: 0, minutos: 0, segundos: 0
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = FECHA_BODA - ahora;

      if (diferencia <= 0) {
        clearInterval(intervalo);
      } else {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        setTiempoRestante({ dias, horas, minutos, segundos });
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, []); // Quitamos FECHA_BODA de las dependencias porque ya es externa estática

  return (
    <div className="space-y-8 text-center py-2 max-w-sm mx-auto px-1">
      
      {/* SECCIÓN: NUESTRA HISTORIA */}
      <div className="space-y-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#b89c7d] font-bold bg-[#faf6f0] px-4 py-1.5 rounded-full border border-[#e6dfd5]/40 shadow-sm">
            Nuestra Historia
          </span>
        </div>
        
        <h2 className="text-2xl font-serif text-[#4a3f35] tracking-wide">
          El Motivo de Celebrar
        </h2>
        
        {/* Cuadrícula de fotos */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          
          {/* Contenedor Foto 1 */}
          <div className="bg-[#fcfaf7] aspect-[3/4] rounded-[2rem] border border-[#e6dfd5]/60 overflow-hidden shadow-sm">
            <img 
              src={foto1} 
              loading="lazy"
              className="w-full h-full object-cover" 
              alt="Nosotros Foto 1"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span class="text-xs text-[#a38a70]/60 italic p-4 flex items-center justify-center h-full">[ f1.jpg no encontrada ]</span>';
              }}
            />
          </div>
          
          {/* Contenedor Foto 2 */}
          <div className="bg-[#fcfaf7] aspect-[3/4] rounded-[2rem] border border-[#e6dfd5]/60 overflow-hidden shadow-sm">
            <img 
              src={foto2} 
              loading="lazy"
              className="w-full h-full object-cover" 
              alt="Nosotros Foto 2"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span class="text-xs text-[#a38a70]/60 italic p-4 flex items-center justify-center h-full">[ f2.jpg no encontrada ]</span>';
              }}
            />
          </div>
          
        </div>
        
        <p className="text-xs md:text-sm text-[#705e4d] max-w-xs mx-auto leading-relaxed font-serif italic px-2">
          "Porque decidimos unir nuestras vidas y queremos que formes parte de este nuevo comienzo."
        </p>
      </div>

      <hr className="w-1/3 mx-auto border-[#e6dfd5]/80 my-2" />

      {/* SECCIÓN: CUENTA REGRESIVA */}
      <div className="bg-gradient-to-b from-[#faf6f0] to-[#f4eee4] border border-[#e6dfd5] rounded-3xl p-5 shadow-sm space-y-3">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#a38a70] font-bold">
          Cada segundo cuenta para el gran día
        </p>
        
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-white/80 rounded-xl p-2 border border-[#e6dfd5]/50">
            <p className="text-xl md:text-2xl font-serif font-semibold text-[#8c7863]">{tiempoRestante.dias}</p>
            <p className="text-[9px] uppercase text-[#a38a70] tracking-wider font-medium">Días</p>
          </div>
          <div className="bg-white/80 rounded-xl p-2 border border-[#e6dfd5]/50">
            <p className="text-xl md:text-2xl font-serif font-semibold text-[#8c7863]">{tiempoRestante.horas}</p>
            <p className="text-[9px] uppercase text-[#a38a70] tracking-wider font-medium">Hrs</p>
          </div>
          <div className="bg-white/80 rounded-xl p-2 border border-[#e6dfd5]/50">
            <p className="text-xl md:text-2xl font-serif font-semibold text-[#8c7863]">{tiempoRestante.minutos}</p>
            <p className="text-[9px] uppercase text-[#a38a70] tracking-wider font-medium">Min</p>
          </div>
          <div className="bg-white/80 rounded-xl p-2 border border-[#e6dfd5]/50">
            <p className="text-xl md:text-2xl font-serif font-semibold text-[#8c7863]">{tiempoRestante.segundos}</p>
            <p className="text-[9px] uppercase text-[#a38a70] tracking-wider font-medium">Seg</p>
          </div>
        </div>
      </div>

      {/* SECCIÓN: CONFIRMACIÓN DE ASISTENCIA (RSVP) */}
      <div className="bg-[#292623] text-[#faf6f0] p-6 rounded-3xl shadow-md space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b89c7d]">
            Confirmación de Asistencia
          </span>
          <h3 className="font-serif text-base tracking-wide text-white">
            ¿Nos acompañarás?
          </h3>
          <p className="text-[11px] text-[#e6dfd5]/70 max-w-[240px] mx-auto leading-normal">
            Por favor, ayúdanos confirmando tu asistencia antes del 12 de Noviembre.
          </p>
        </div>

        <div>
          <a 
            href="https://wa.me/TU_NUMERO_AQUI?text=Hola!%20Confirmo%20mi%20asistencia%20a%20la%20boda." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center bg-[#b89c7d] hover:bg-[#a38a70] text-[#292623] font-semibold tracking-wide py-2.5 px-4 rounded-xl text-xs uppercase transition-all shadow-sm gap-2 active:scale-[0.98]"
          >
            💌 Confirmar por WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
});

export default DetallesView;