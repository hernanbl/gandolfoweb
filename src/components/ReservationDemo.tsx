import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ChevronDown, CheckCircle } from "lucide-react";

const ReservationDemo = () => {
  return (
    <section id="reservations" className="py-20 px-6 md:px-10 bg-gradient-to-br from-fuchsia-400 via-amber-300 to-yellow-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-md mx-auto">
              <div className="bg-black p-4">
                <h3 className="text-lg font-semibold text-white">Reserva una mesa</h3>
                <p className="text-sm text-white">Completa el formulario para reservar</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">Fecha</label>
                  <div className="flex items-center border rounded-lg p-3">
                    <Calendar className="h-5 w-5 text-black mr-2" />
                    <span className="text-sm text-black">24 de abril, 2025</span>
                    <ChevronDown className="h-4 w-4 text-black ml-auto" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">Hora</label>
                  <div className="flex items-center border rounded-lg p-3">
                    <Clock className="h-5 w-5 text-black mr-2" />
                    <span className="text-sm text-black">20:00</span>
                    <ChevronDown className="h-4 w-4 text-black ml-auto" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">Personas</label>
                  <div className="flex items-center border rounded-lg p-3">
                    <Users className="h-5 w-5 text-black mr-2" />
                    <span className="text-sm text-black">4 personas</span>
                    <ChevronDown className="h-4 w-4 text-black ml-auto" />
                  </div>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white mt-4">Confirmar reserva</Button>
                <p className="text-xs text-center text-black mt-4">
                  Solo de demostración. No se procesará ninguna reserva real.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black">Cada reserva impulsa tu rentabilidad.</h2>
            <p className="text-lg text-black">
            Automatizá tus reservas. Integración total con tu web y WhatsApp.
            </p>
            <ul className="space-y-4">
              {[
                "Confirmaciones automáticas por WhatsApp",
                "Recordatorios personalizados",
                "Gestión de cancelaciones",
                "Historial de clientes con preferencias y frecuencia de visitas",
                "Integración con tu calendario"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-white mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationDemo;
