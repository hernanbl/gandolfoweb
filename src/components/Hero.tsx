import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-10 bg-gradient-to-br from-[#2a6d8a] to-[#c3cb9c] relative z-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit shadow-sm">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-medium text-white">Atención al cliente reinventada</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Atención al cliente con <span className="text-[#f97118]">IA</span> para restaurantes
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Automatiza reservas, responde preguntas y mejora la experiencia del cliente con nuestra plataforma de IA integrada con WhatsApp y web.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="text-md bg-gradient-to-r from-orange-500 to-red-500 h-12 px-6 shadow-lg shadow-orange-500/20 text-white">
                Empezar ahora
              </Button>
              <Button 
                variant="outline" 
                className="text-md h-12 px-6 flex items-center bg-white/20 text-white hover:bg-white/30 border-white/40"
                onClick={() => window.open('https://vivacomdev.com/', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Ver demostración
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-r from-orange-${200 + i*100} to-red-${200 + i*100} border-2 border-white`}></div>
                ))}
              </div>
              <p className="text-sm text-white">
                <span className="font-semibold">+100</span> restaurantes ya lo utilizan
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-orange-500/30 rounded-xl transform rotate-3 z-0"></div>
            <div className="absolute inset-0 rounded-xl shadow-xl z-10 overflow-hidden">
              <img 
                src="/lovable-uploads/7599bc87-acca-4874-aabd-f17e6da4fad0.png" 
                alt="Restaurante con personas disfrutando comida con asistencia de Gandolfo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
