import React, { useState, useEffect, useRef } from 'react';
import parejaIcono from '../assets/pareja.png';
import BrindisIcono from '../assets/salud.png';
import ubicacionIcono from '../assets/icons/ic_ubicacion.svg';
import musicaIcono from '../assets/icons/ic_music.svg'; 
import cancionBoda from '../assets/cancion.mp3'; 

import SidebarNav from '../components/SidebarNav';
import TikTokRightNav from '../components/TikTokRightNav';
import InicioView from './InicioView';
import DetallesView from './DetallesView';
import UbicacionView from './UbicacionView';

export default function MainView() {
  const [seccionActiva, setSeccionActiva] = useState('saludo');
  const [invitacionAbierta, setInvitacionAbierta] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAbrirInvitacion = () => {
    setInvitacionAbierta(true); 
    
    if (audioRef.current) {
      audioRef.current.volume = 0; // Empezamos en silencio
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true); 
          
          let volumenActual = 0;
          const intervaloFade = setInterval(() => {
            if (volumenActual < 1) {
              volumenActual += 0.05;
              audioRef.current.volume = Math.min(volumenActual, 1);
            } else {
              clearInterval(intervaloFade);
            }
          }, 200); 
        }).catch(error => {
          console.log("No se pudo reproducir el audio", error);
        });
      }
    }
  };

  const toggleMusica = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 1;
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!invitacionAbierta) return; 

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
  }, [invitacionAbierta]);

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

  // ESTRUCTURA PRINCIPAL
  return (
    <>
      {/* EL AUDIO ESTÁ AQUÍ AFUERA: Nunca se destruye al cambiar de pantalla */}
      <audio ref={audioRef} src={cancionBoda} loop />

      {!invitacionAbierta ? (
        // --- 1. PANTALLA DE INICIO (SOBRE) ---
        <div className="min-h-screen bg-[#faf6f0] flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-[#e6dfd5]/60 max-w-sm w-full space-y-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#a38a70] font-bold">
              Tienes una invitación de
            </p>
            <h1 className="text-4xl font-serif text-[#8c7863] font-light">Alejandro & Gabriela</h1>
            <p className="text-sm text-[#705e4d] font-serif italic">
              "Te invitamos a ser parte de nuestro gran día"
            </p>
            <button 
              onClick={handleAbrirInvitacion}
              className="mt-4 px-8 py-3 bg-[#8c7863] hover:bg-[#7a6855] text-white rounded-full font-medium tracking-wider uppercase text-xs transition-all shadow-md active:scale-95"
            >
              Abrir Invitación 💌
            </button>
          </div>
        </div>
      ) : (
        // --- 2. INVITACIÓN PRINCIPAL ---
        <div className="min-h-screen bg-[#faf6f0] text-[#4a3f35] flex font-sans antialiased overflow-hidden animate-fade-in">
          
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
      )}
    </>
  );
}