import React, { useState } from 'react';
import parejaIcono from '../assets/pareja.png';
import ubicacionIcono from '../assets/icons/ic_ubicacion.svg';

// Importación de Componentes usando tus nuevos nombres
import SidebarNav from '../components/SidebarNav';
import BottomNav from '../components/BottomNav';
import InicioView from './InicioView';
import DetallesView from './DetallesView';
import UbicacionView from './UbicacionView';

export default function MainView() {
  const [seccionActiva, setSeccionActiva] = useState('saludo');

  // Estilo base de los botones adaptado para soportar los filtros de color del SVG
  const obtenerEstiloBtn = (id) => {
    const isActive = seccionActiva === id;
    return `
      flex flex-col items-center justify-center flex-1 py-2 relative transition-all duration-300 select-none
      md:flex-row md:justify-start md:gap-3 md:w-full md:px-4 md:py-2.5 md:rounded-xl md:my-0.5
      ${isActive 
        ? 'text-[#8c7863] font-semibold md:bg-[#8c7863]/10' 
        : 'text-[#a38a70]/60 hover:text-[#a38a70] md:hover:bg-[#f4eee5]/50'}
    `;
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#4a3f35] flex flex-col md:flex-row font-sans items-center justify-center">
      
      {/* Menú Web (Izquierda) */}
      <SidebarNav 
        seccionActiva={seccionActiva} 
        setSeccionActiva={setSeccionActiva} 
        obtenerEstiloBtn={obtenerEstiloBtn} 
        parejaIcono={parejaIcono} 
        ubicacionIcono={ubicacionIcono} 
      />

      {/* Menú Móvil (Abajo) */}
      <BottomNav 
        seccionActiva={seccionActiva} 
        setSeccionActiva={setSeccionActiva} 
        obtenerEstiloBtn={obtenerEstiloBtn} 
        parejaIcono={parejaIcono} 
        ubicacionIcono={ubicacionIcono} 
      />

      {/* Tarjeta de Contenido con Scroll Independiente */}
      <main className="w-full flex items-center justify-center p-4 pt-6 pb-24 md:p-0 md:pl-48">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#e6dfd5]/60 p-6 md:p-10 text-center transition-all duration-300">
          {seccionActiva === 'saludo' && <InicioView />}
          {seccionActiva === 'detalles' && <DetallesView />}
          {seccionActiva === 'ubicacion' && <UbicacionView />}
        </div>
      </main>
    </div>
  );
}