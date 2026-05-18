import React from 'react';

export default function BottomNav({ seccionActiva, setSeccionActiva, obtenerEstiloBtn, parejaIcono, BrindisIcono, ubicacionIcono }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#e6dfd5]/80 z-50 flex justify-around px-2 pb-safe-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.03)] md:hidden">
      
      {/* Botón Inicio */}
      <button onClick={() => setSeccionActiva('saludo')} className={obtenerEstiloBtn('saludo')}>
        <div className={`absolute top-1 w-12 h-7 rounded-full transition-all duration-300 -z-10 ${seccionActiva === 'saludo' ? 'bg-[#8c7863]/10 scale-100' : 'scale-75 opacity-0'}`} />
        <img src={parejaIcono} alt="Inicio" className={`w-6 h-6 object-contain transition-opacity duration-300 ${seccionActiva === 'saludo' ? 'opacity-100' : 'opacity-60'}`} />
        <span className="text-[10px] tracking-wide mt-1">Inicio</span>
      </button>

      {/* Botón Detalles (Ajustado con tu imagen de salud/brindis) */}
      <button onClick={() => setSeccionActiva('detalles')} className={obtenerEstiloBtn('detalles')}>
        <div className={`absolute top-1 w-12 h-7 rounded-full transition-all duration-300 -z-10 ${seccionActiva === 'detalles' ? 'bg-[#8c7863]/10 scale-100' : 'scale-75 opacity-0'}`} />
        <img 
          src={BrindisIcono} 
          alt="Detalles" 
          className={`w-6 h-6 object-contain transition-opacity duration-300 ${seccionActiva === 'detalles' ? 'opacity-100' : 'opacity-60'}`} 
        />
        <span className="text-[10px] tracking-wide mt-1">Detalles</span>
      </button>

      {/* Botón Ubicación */}
      <button onClick={() => setSeccionActiva('ubicacion')} className={obtenerEstiloBtn('ubicacion')}>
        <div className={`absolute top-1 w-12 h-7 rounded-full transition-all duration-300 -z-10 ${seccionActiva === 'ubicacion' ? 'bg-[#8c7863]/10 scale-100' : 'scale-75 opacity-0'}`} />
        <img 
          src={ubicacionIcono} 
          alt="Ubicación" 
          className={`w-6 h-6 object-contain transition-all duration-300
            ${seccionActiva === 'ubicacion' 
              ? 'invert-[35%] sepia-[15%] saturate-[600%] hue-rotate-[340deg] opacity-100' 
              : 'invert-[45%] sepia-[10%] saturate-[400%] hue-rotate-[340deg] opacity-60'}`} 
        />
        <span className="text-[10px] tracking-wide mt-1">Ubicación</span>
      </button>
    </nav>
  );
}