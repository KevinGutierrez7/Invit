import React from 'react';

export default function TikTokRightNav({ seccionActiva, scrollToSection, parejaIcono, BrindisIcono, ubicacionIcono, musicaIcono, isPlaying, toggleMusica }) {
  
  // Clases dinámicas para dar forma de botón circular flotante
  const getBtnClass = (id) => {
    const isActive = seccionActiva === id;
    return `relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 backdrop-blur-md border 
    ${isActive 
      ? 'bg-[#8c7863] border-[#8c7863] scale-110 text-white' 
      : 'bg-white/80 border-[#e6dfd5]/80 hover:bg-white scale-100'}`;
  };

  const getIconFilter = (id) => {
    return seccionActiva === id 
      ? 'brightness-0 invert drop-shadow-md opacity-100' 
      : 'opacity-70';
  };

  return (
    <nav className="fixed right-4 bottom-10 flex flex-col gap-5 z-50 md:hidden">
      
      {/* Botón Inicio */}
      <div className="flex flex-col items-center gap-1">
        <button onClick={() => scrollToSection('saludo')} className={getBtnClass('saludo')}>
          <img src={parejaIcono} alt="Inicio" className={`w-6 h-6 object-contain transition-all ${getIconFilter('saludo')}`} />
        </button>
      </div>

      {/* Botón Detalles */}
      <div className="flex flex-col items-center gap-1">
        <button onClick={() => scrollToSection('detalles')} className={getBtnClass('detalles')}>
          <img src={BrindisIcono} alt="Detalles" className={`w-6 h-6 object-contain transition-all ${getIconFilter('detalles')}`} />
        </button>
      </div>

      {/* Botón Ubicación */}
      <div className="flex flex-col items-center gap-1">
        <button onClick={() => scrollToSection('ubicacion')} className={getBtnClass('ubicacion')}>
          <img src={ubicacionIcono} alt="Ubicación" className={`w-6 h-6 object-contain transition-all ${getIconFilter('ubicacion')}`} />
        </button>
      </div>

      {/* Botón Música (Sin línea de separación) */}
      <div className="flex flex-col items-center gap-1">
        <button onClick={toggleMusica} className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 backdrop-blur-md border ${isPlaying ? 'bg-[#8c7863] border-[#8c7863] text-white' : 'bg-white/80 border-[#e6dfd5]/80 hover:bg-white scale-100'}`}>
          <img src={musicaIcono} alt="Música" className={`w-6 h-6 object-contain transition-all ${isPlaying ? 'brightness-0 invert drop-shadow-md opacity-100 animate-pulse' : 'opacity-70'}`} />
        </button>
      </div>

    </nav>
  );
}