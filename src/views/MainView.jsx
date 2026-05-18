import React, { useState } from 'react';
import parejaIcono from '../assets/pareja.png';
import BrindisIcono from '../assets/salud.png'; // Cargado correctamente desde assets
import ubicacionIcono from '../assets/icons/ic_ubicacion.svg';

// Importación de Componentes
import SidebarNav from '../components/SidebarNav';
import BottomNav from '../components/BottomNav';
import InicioView from './InicioView';
import DetallesView from './DetallesView';
import UbicacionView from './UbicacionView';

export default function MainView() {
  const [seccionActiva, setSeccionActiva] = useState('saludo');

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
    <div className="min-h-screen bg-[#faf6f0] text-[#4a3f35] flex flex-col md:flex-row font-sans antialiased overflow-hidden">
      
      {/* Menú Web (Izquierda) */}
      <SidebarNav 
        seccionActiva={seccionActiva} 
        setSeccionActiva={setSeccionActiva} 
        obtenerEstiloBtn={obtenerEstiloBtn} 
        parejaIcono={parejaIcono} 
        BrindisIcono={BrindisIcono}
        ubicacionIcono={ubicacionIcono} 
      />

      {/* Menú Móvil (Abajo) */}
      <BottomNav 
        seccionActiva={seccionActiva} 
        setSeccionActiva={setSeccionActiva} 
        obtenerEstiloBtn={obtenerEstiloBtn} 
        parejaIcono={parejaIcono} 
        BrindisIcono={BrindisIcono} 
        ubicacionIcono={ubicacionIcono} 
      />

      {/* SCROLL GLOBAL DE LA APP */}
      <main className="w-full h-screen overflow-y-auto pb-24 md:pb-0 md:pl-56 flex justify-center items-start md:items-center p-4 pt-6 scroll-smooth">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#e6dfd5]/60 p-6 md:p-10 text-center my-auto transition-all duration-300">
          {seccionActiva === 'saludo' && <InicioView />}
          {seccionActiva === 'detalles' && <DetallesView />}
          {seccionActiva === 'ubicacion' && <UbicacionView />}
        </div>
      </main>
    </div>
  );
}