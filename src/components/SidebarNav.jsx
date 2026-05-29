import React from 'react';

export default function SidebarNav({ seccionActiva, scrollToSection, obtenerEstiloBtn, parejaIcono, BrindisIcono, ubicacionIcono, musicaIcono, isPlaying, toggleMusica }) {
  return (
    <nav className="hidden md:fixed md:top-1/2 md:-translate-y-1/2 md:left-8 md:w-56 md:h-auto md:bg-white md:border border-[#e6dfd5]/60 md:flex md:flex-col md:justify-start md:p-4 md:shadow-[0_4px_20px_rgba(0,0,0,0.02)] md:rounded-2xl z-50">
      <div className="pb-3 border-b border-[#e6dfd5]/60 mb-2">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#8c7863] font-bold">Nuestra Boda</p>
      </div>

      <button onClick={() => scrollToSection('saludo')} className={obtenerEstiloBtn('saludo')}>
        <img src={parejaIcono} alt="Inicio" className={`w-5 h-5 object-contain transition-opacity duration-300 ${seccionActiva === 'saludo' ? 'opacity-100' : 'opacity-60'}`} />
        <span className="text-xs tracking-wide">Inicio</span>
      </button>

      <button onClick={() => scrollToSection('detalles')} className={obtenerEstiloBtn('detalles')}>
        <img src={BrindisIcono} alt="Detalles" className={`w-5 h-5 object-contain transition-opacity duration-300 ${seccionActiva === 'detalles' ? 'opacity-100' : 'opacity-60'}`} />
        <span className="text-xs tracking-wide">Celebración</span>
      </button>

      <button onClick={() => scrollToSection('ubicacion')} className={obtenerEstiloBtn('ubicacion')}>
        <img src={ubicacionIcono} alt="Ubicación" className={`w-5 h-5 object-contain transition-all duration-300 ${seccionActiva === 'ubicacion' ? 'opacity-100' : 'opacity-60'}`} />
        <span className="text-xs tracking-wide">Ubicación</span>
      </button>

      {/* Botón Música (Sin línea de separación) */}
      <button onClick={toggleMusica} className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl my-0.5 transition-all duration-300 select-none ${isPlaying ? 'text-[#8c7863] font-semibold bg-[#8c7863]/10' : 'text-[#a38a70]/60 hover:text-[#a38a70] hover:bg-[#f4eee5]/50'}`}>
        <img src={musicaIcono} alt="Música" className={`w-5 h-5 object-contain transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-60'}`} />
        <span className="text-xs tracking-wide">{isPlaying ? 'Pausar Audio' : 'Poner Música'}</span>
      </button>
    </nav>
  );
}