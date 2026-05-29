import React, { useState, useEffect, useRef } from 'react';
import parejaIcono from '../assets/pareja.png';
import BrindisIcono from '../assets/salud.png';
import ubicacionIcono from '../assets/icons/ic_ubicacion.svg';
import musicaIcono from '../assets/icons/ic_music.svg'; // IMPORTA TU ICONO DE MÚSICA AQUÍ
import cancionBoda from '../assets/cancion.mp3'; // IMPORTA TU CANCIÓN AQUÍ

import SidebarNav from '../components/SidebarNav';
import TikTokRightNav from '../components/TikTokRightNav';
import InicioView from './InicioView';
import DetallesView from './DetallesView';
import UbicacionView from './UbicacionView';

export default function MainView() {
  const [seccionActiva, setSeccionActiva] = useState('saludo');
  
  // ESTADOS Y REFERENCIAS PARA LA MÚSICA
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusica = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
      
      {/* ELEMENTO DE AUDIO OCULTO */}
      <audio ref={audioRef} src={cancionBoda} loop />

      {/* Menú Web (Izquierda) */}
      <SidebarNav 
        seccionActiva={seccionActiva} 
        scrollToSection={scrollToSection} 
        obtenerEstiloBtn={obtenerEstiloBtnSidebar} 
        parejaIcono={parejaIcono} 
        BrindisIcono={BrindisIcono}
        ubicacionIcono={ubicacionIcono} 
        musicaIcono={musicaIcono}
        isPlaying={isPlaying}
        toggleMusica={toggleMusica}
      />

      {/* Menú Móvil Flotante Derecha (Estilo TikTok) */}
      <TikTokRightNav 
        seccionActiva={seccionActiva} 
        scrollToSection={scrollToSection} 
        parejaIcono={parejaIcono} 
        BrindisIcono={BrindisIcono} 
        ubicacionIcono={ubicacionIcono}
        musicaIcono={musicaIcono}
        isPlaying={isPlaying}
        toggleMusica={toggleMusica}
      />

      {/* SCROLL GLOBAL CONTINUO */}
      <main className="w-full h-screen overflow-y-auto scroll-smooth md:pl-56 pb-6 pt-6 px-4 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#e6dfd5]/60 p-6 md:p-10 flex flex-col gap-12 md:gap-16 h-max">          
          <section id="saludo" className="scroll-mt-8">
            <InicioView />
          </section>

          <div className="flex justify-center opacity-60">
             <span className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#b89c7d] to-transparent"></span>
          </div>

          <section id="detalles" className="scroll-mt-8">
            <DetallesView />
          </section>

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