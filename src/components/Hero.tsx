import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  
  useEffect(() => {
    // Aplicar la clase animated después de que el resaltado haya comenzado
    const timer = setTimeout(() => {
      setIsHighlighted(true);
    }, 1100); // Este tiempo coincide con el transition-delay del CSS
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-12 pb-8 md:pt-16 md:pb-10 px-6 md:px-10 bg-[#f5f5f7] relative z-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5 md:space-y-7 animate-fade-in">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit shadow-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-300" />
              <span className="text-sm font-medium text-[#333333]">Atención al cliente reinventada</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#333333]">
              Tu restaurante, en modo <span className={`highlight-container highlighted ${isHighlighted ? 'animated' : ''}`}>inteligente</span>
            </h1>
            <p className="text-lg md:text-xl text-[#333333]/90 max-w-xl">
              Reservas automatizadas. Costos bajos. <strong>Mesas llenas.</strong>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-3">
              <Button 
                className="text-md bg-black hover:bg-gray-800 h-12 px-6 shadow-lg shadow-black/20 text-white"
                onClick={() => setBookingModalOpen(true)}
              >
                Empezar ahora
              </Button>
              <Button 
                variant="outline" 
                className="text-md h-12 px-6 flex items-center bg-white/20 text-[#333333] hover:bg-white/30 border-[#333333]/40"
                onClick={() => window.open('https://vivacomdev.com/', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Ver demostración
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              {/* Se eliminó el mensaje "+100 restaurantes ya lo utilizan" */}
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[480px] lg:h-[640px] animate-fade-in">
            {/* Elemento de fondo naranja existente */}
            <div className="absolute inset-x-[25%] top-[28%] bottom-[22%] bg-gradient-to-br from-white/5 to-orange-500/10 rounded-lg transform rotate-2 z-0"></div>
            
            {/* Elementos para el borde irregular pardo - Más grandes y rotados */}
            <div 
              className="absolute inset-0 m-auto w-[97%] h-[83%] bg-[#ffc69d] rounded-lg transform -rotate-2 z-[5]" // Aumentado tamaño y rotación
              style={{ backgroundColor: '#ffc69d' }} // Color pardo 1
            ></div>
             <div 
              className="absolute inset-0 m-auto w-[96.5%] h-[82.5%] bg-[#f8d7bf] rounded-lg transform rotate-1 z-[6]" // Aumentado tamaño y rotación
              style={{ backgroundColor: '#f8d7bf' }} // Color pardo 2
            ></div>

            {/* Contenedor de la imagen principal */}
            <div className="absolute inset-0 z-10 flex items-center justify-center"> 
              <img 
                src="/lovable-uploads/36033922-751d-4db0-89eb-88c4e2401063.jpeg" 
                alt="Restaurante con personas disfrutando comida con asistencia de Gandolfo" 
                // Mantenemos el tamaño y redondeo de la imagen
                className="w-[95%] h-[81%] object-cover object-[center_55%] rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </section>
  );
};

export default Hero;