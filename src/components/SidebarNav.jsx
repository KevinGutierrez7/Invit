import React from 'react';

export default function SidebarNav({ seccionActiva, setSeccionActiva, obtenerEstiloBtn, parejaIcono, ubicacionIcono }) {
  return (
    <nav className="hidden md:fixed md:bottom-auto md:left-8 md:w-56 md:h-auto md:bg-white md:border border-[#e6dfd5]/60 md:flex md:flex-col md:justify-start md:p-4 md:shadow-[0_4px_20px_rgba(0,0,0,0.02)] md:rounded-2xl">
      <div className="pb-3 border-b border-[#e6dfd5]/60 mb-2">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#8c7863] font-bold">Invitación</p>
      </div>

      <button onClick={() => setSeccionActiva('saludo')} className={obtenerEstiloBtn('saludo')}>
        <img src={parejaIcono} alt="Inicio" className={`w-5 h-5 object-contain transition-opacity duration-300 ${seccionActiva === 'saludo' ? 'opacity-100' : 'opacity-60'}`} />
        <span className="text-xs tracking-wide">Inicio</span>
      </button>

      <button onClick={() => setSeccionActiva('detalles')} className={obtenerEstiloBtn('detalles')}>
        <span className="text-base">📸</span>
        <span className="text-xs tracking-wide">Detalles</span>
      </button>

      <button onClick={() => setSeccionActiva('ubicacion')} className={obtenerEstiloBtn('ubicacion')}>
        <img 
          src={ubicacionIcono} 
          alt="Ubicación" 
          className={`w-5 h-5 object-contain transition-all duration-300
            ${seccionActiva === 'ubicacion' 
              ? 'invert-[35%] sepia-[15%] saturate-[600%] hue-rotate-[340deg] opacity-100' 
              : 'invert-[45%] sepia-[10%] saturate-[400%] hue-rotate-[340deg] opacity-60'}`} 
        />
        <span className="text-xs tracking-wide">Ubicación</span>
      </button>
    </nav>
  );
}