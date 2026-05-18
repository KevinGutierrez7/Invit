import React from 'react';

export default function UbicacionView() {
  return (
    /* Ajuste: Eliminadas las clases max-h y overflow-y-auto para liberar el scroll global */
    <div className="space-y-8 text-center py-2">
      
      {/* Etiqueta Principal */}
      <div>
        <span className="text-xs uppercase tracking-[0.25em] text-[#b89c7d] font-bold bg-[#faf6f0] px-4 py-1.5 rounded-full border border-[#e6dfd5]/40 shadow-sm">
          ¿Cuándo y Dónde?
        </span>
      </div>
      
      {/* SECCIÓN FECHA DESTACADA */}
      <div className="bg-gradient-to-b from-[#faf6f0] to-[#f4eee4] border border-[#e6dfd5] rounded-3xl p-6 max-w-sm mx-auto shadow-sm">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#a38a70] font-bold mb-2">
          Fecha de la Celebración
        </p>
        <div className="h-[1px] w-8 bg-[#b89c7d]/40 mx-auto mb-3"></div>
        
        <p className="text-2xl md:text-3xl font-serif text-[#5c4d3e] tracking-wide font-light">
          Sábado
        </p>
        <p className="text-4xl md:text-5xl font-serif font-semibold text-[#8c7863] my-1">
          12
        </p>
        <p className="text-sm uppercase tracking-widest text-[#a38a70] font-medium">
          Diciembre, 2026
        </p>
      </div>

      {/* DETALLES DE LOS EVENTOS (ESTILO RE-ORDENADO COMO LA IMAGEN) */}
      <div className="space-y-6 max-w-sm mx-auto">
        
        {/* Tarjeta: Ceremonia */}
        <div className="bg-[#faf6f0] p-6 rounded-2xl border border-[#e6dfd5] shadow-[0_2px_8px_rgba(140,120,99,0.03)] text-center space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#b89c7d] block mb-0.5">
              Ceremonia Religiosa
            </span>
            <p className="text-sm font-medium text-[#705e4d]">5:00 PM</p>
          </div>
          
          {/* Círculo estético del lugar (puedes reemplazar el div por una etiqueta <img> si tienes foto) */}
          <div className="w-28 h-28 rounded-full mx-auto bg-[#e6dfd5]/40 border border-[#e6dfd5] flex items-center justify-center text-2xl shadow-inner">
            ⛪
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-lg tracking-wide text-[#4a3f35] uppercase font-medium">
              Parroquia de Santa María
            </h3>
            <p className="text-xs text-[#a38a70] leading-relaxed max-w-[240px] mx-auto">
              Av. de la Paz #456, Col. Centro, CP 64000, Monterrey, N.L.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#292623] hover:bg-[#423d39] text-[#faf6f0] active:scale-[0.98] font-medium tracking-wide py-2 px-5 rounded-lg text-xs transition-all shadow-sm gap-2"
            >
              📍 Ver ubicación
            </a>
          </div>
        </div>

        {/* Tarjeta: Recepción */}
        <div className="bg-[#faf6f0] p-6 rounded-2xl border border-[#e6dfd5] shadow-[0_2px_8px_rgba(140,120,99,0.03)] text-center space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#b89c7d] block mb-0.5">
              Recepción
            </span>
            <p className="text-sm font-medium text-[#705e4d]">7:30 PM</p>
          </div>
          
          {/* Círculo estético del lugar */}
          <div className="w-28 h-28 rounded-full mx-auto bg-[#e6dfd5]/40 border border-[#e6dfd5] flex items-center justify-center text-2xl shadow-inner">
            🥂
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-lg tracking-wide text-[#4a3f35] uppercase font-medium">
              Jardín "El Campanario"
            </h3>
            <p className="text-xs text-[#a38a70] leading-relaxed max-w-[240px] mx-auto">
              Carr. Central Km 12.5, Col. Valle de Cumbres, 64344 Premier, N.L.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#292623] hover:bg-[#423d39] text-[#faf6f0] active:scale-[0.98] font-medium tracking-wide py-2 px-5 rounded-lg text-xs transition-all shadow-sm gap-2"
            >
              📍 Ver ubicación
            </a>
          </div>
        </div>

      </div>
      
    </div>
  );
}