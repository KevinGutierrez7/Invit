import React, { useState, useEffect } from 'react';
import parejaIcono from '../assets/pareja.png';
import BrindisIcono from '../assets/salud.png';
import ubicacionIcono from '../assets/icons/ic_ubicacion.svg';

import SidebarNav from '../components/SidebarNav';
import TikTokRightNav from '../components/TikTokRightNav';
import InicioView from './InicioView';
import DetallesView from './DetallesView';
import UbicacionView from './UbicacionView';

export default function MainView() {
  const [seccionActiva, setSeccionActiva] = useState('saludo');

  // Intersection Observer ajustado para un scroll continuo más natural
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeccionActiva(entry.target.id);
          }
        });
      },
      {
        root: null,
        // Estos márgenes hacen que detecte la sección un poco antes de que llegue al centro
        rootMargin: '-20% 0px -40% 0px', 
        threshold: 0.1
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // block: 'start' asegura que se posicione bien arriba de la sección
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const obtenerEstiloBtnSidebar = (id) => {
    const isActive = seccionActiva === id;
    return `
      flex items-center gap-3 w-full px-4 py-2.5 rounded-xl my-0.5 transition-all duration-300 select-none
      ${isActive 
        ? 'text-[#8c7863] font-semibold bg-[#8c7863]/10' 
        : 'text-[#a38a70]/60 hover:text-[#a38a70] hover:bg-[#f4eee5]/50'}
    `;
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#4a3f35] flex font-sans antialiased overflow-hidden">
      
      {/* Menú Web (Izquierda) */}
      <SidebarNav 
        seccionActiva={seccionActiva} 
        scrollToSection={scrollToSection} 
        obtenerEstiloBtn={obtenerEstiloBtnSidebar} 
        parejaIcono={parejaIcono} 
        BrindisIcono={BrindisIcono}
        ubicacionIcono={ubicacionIcono} 
      />

      {/* Menú Móvil Flotante Derecha (Estilo TikTok) */}
      <TikTokRightNav 
        seccionActiva={seccionActiva} 
        scrollToSection={scrollToSection} 
        parejaIcono={parejaIcono} 
        BrindisIcono={BrindisIcono} 
        ubicacionIcono={ubicacionIcono} 
      />

      {/* SCROLL GLOBAL CONTINUO (Sin saltos) */}
      <main className="w-full h-screen overflow-y-auto scroll-smooth md:pl-56 pb-6 pt-6 px-4 flex justify-center">
        
        {/* UNA SOLA TARJETA BLANCA PARA TODA LA INVITACIÓN */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#e6dfd5]/60 p-6 md:p-10 flex flex-col gap-12 md:gap-16 h-max">          
          <section id="saludo" className="scroll-mt-8">
            <InicioView />
          </section>

          {/* Divisor estético entre secciones */}
          <div className="flex justify-center opacity-60">
             <span className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#b89c7d] to-transparent"></span>
          </div>

          <section id="detalles" className="scroll-mt-8">
            <DetallesView />
          </section>

          {/* Divisor estético entre secciones */}
          <div className="flex justify-center opacity-60">
             <span className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#b89c7d] to-transparent"></span>
          </div>

          <section id="ubicacion" className="scroll-mt-8">
            <UbicacionView />
          </section>

        </div>
      </main>
    </div>
  );
}