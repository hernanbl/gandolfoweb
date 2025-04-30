
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 bg-white/80 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/lovable-uploads/6bcb67af-0832-459e-84e2-ac3b11d0c7ab.png" alt="Gandolfo" className="h-14" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary">Beneficios</a>
          <a href="#reservations" className="text-sm font-medium hover:text-primary">Reservas</a>
          <a href="#whatsapp" className="text-sm font-medium hover:text-primary">WhatsApp</a>
          <a href="#dashboard" className="text-sm font-medium hover:text-primary">Resultados</a>
          <Button variant="outline" className="ml-2">Iniciar Sesión</Button>
          <Button className="bg-[#fde68a] text-[#8a6914] font-bold hover:bg-[#fbc222]">Probar Gratis</Button>
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
            <a href="#features" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Características</a>
            <a href="#reservations" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Reservas</a>
            <a href="#whatsapp" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>WhatsApp</a>
            <a href="#dashboard" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
            <Button variant="outline" className="w-full">Iniciar Sesión</Button>
            <Button className="w-full bg-[#fde68a] text-[#8a6914] font-bold hover:bg-[#fbc222]">Probar Gratis</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
