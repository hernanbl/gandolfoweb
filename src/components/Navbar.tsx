import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import BookingModal from "@/components/BookingModal"; // Importar el componente BookingModal

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false); // Añadir estado para el modal

  return (
    <>
      <nav className="py-4 px-6 md:px-10 bg-white/80 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/lovable-uploads/6bcb67af-0832-459e-84e2-ac3b11d0c7ab.png" alt="Gandolfo" className="h-14" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-base font-semibold hover:text-[#41b72c]">Beneficios</a>
            <a href="#reservations" className="text-base font-semibold hover:text-[#41b72c]">Reservas</a>
            <a href="#whatsapp" className="text-base font-semibold hover:text-[#41b72c]">WhatsApp</a>
            <a href="#dashboard" className="text-base font-semibold hover:text-[#41b72c]">Resultados</a>
            <Button 
              variant="outline" 
              className="ml-2 text-base"
              onClick={() => window.open('https://vivacomdev.com/admin/login', '_blank')}
            >
              Iniciar Sesión
            </Button>
            {/* Modificar este botón para abrir el modal */}
            <Button 
              className="bg-[#fde68a] text-[#8a6914] font-bold hover:bg-[#fbc222] text-base"
              onClick={() => setBookingModalOpen(true)}
            >
              Probar Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 animated fade-in z-40">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-base font-semibold hover:text-[#41b72c]" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
              <a href="#reservations" className="text-base font-semibold hover:text-[#41b72c]" onClick={() => setMobileMenuOpen(false)}>Reservas</a>
              <a href="#whatsapp" className="text-base font-semibold hover:text-[#41b72c]" onClick={() => setMobileMenuOpen(false)}>WhatsApp</a>
              <a href="#dashboard" className="text-base font-semibold hover:text-[#41b72c]" onClick={() => setMobileMenuOpen(false)}>Resultados</a>
              <Button 
                variant="outline" 
                className="w-full text-base"
                onClick={() => {
                  setMobileMenuOpen(false); // Opcional: cerrar el menú móvil al hacer clic
                  window.open('https://vivacomdev.com/admin/login', '_blank');
                }}
              >
                Iniciar Sesión
              </Button>
              {/* Modificar también este botón para el menú móvil */}
              <Button 
                className="w-full bg-[#fde68a] text-[#8a6914] font-bold hover:bg-[#fbc222] text-base"
                onClick={() => {
                  setMobileMenuOpen(false); // Cerrar el menú móvil
                  setBookingModalOpen(true); // Abrir el modal de reserva
                }}
              >
                Probar Gratis
              </Button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Agregar el BookingModal fuera del nav para evitar problemas de z-index */}
      <BookingModal 
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
      />
    </>
  );
};

export default Navbar;
