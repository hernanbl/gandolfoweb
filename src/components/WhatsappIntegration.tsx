
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsappIntegration = () => {
  return (
    <section id="whatsapp" className="py-20 px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integración con WhatsApp</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conecta con tus clientes donde ya están, sin necesidad de descargar nuevas aplicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-black p-8 rounded-xl shadow-lg text-white lg:col-span-2">
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg mr-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">WhatsApp Business API</h3>
                <p className="opacity-90">
                  Utilizamos la API oficial de WhatsApp Business para garantizar una comunicación segura y confiable con tus clientes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-medium mb-2">Mensajes automáticos</h4>
                <p className="text-sm opacity-90">Respuestas instantáneas a preguntas frecuentes de tus clientes</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-medium mb-2">Confirmaciones</h4>
                <p className="text-sm opacity-90">Envío de confirmaciones y recordatorios de reserva automáticos</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-medium mb-2">Menús interactivos</h4>
                <p className="text-sm opacity-90">Comparte tu carta y promociones especiales a través de mensajes</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-medium mb-2">Atención personalizada</h4>
                <p className="text-sm opacity-90">La IA recuerda preferencias de clientes para una mejor experiencia</p>
              </div>
            </div>
          </div>

          <div className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="absolute top-4 left-4 h-10 w-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="pt-12 pb-4">
              <h3 className="text-xl font-semibold mb-4">Ejemplo de interacción</h3>
              <div className="space-y-4 max-w-xs mx-auto">
                <div className="bg-white rounded-lg p-3 border border-slate-100 shadow-sm">
                  <p className="text-sm">Hola, ¿tienen mesa disponible para hoy a las 9?</p>
                  <span className="text-xs text-slate-400 block text-right mt-1">20:15</span>
                </div>
                <div className="bg-green-50 rounded-lg p-3 shadow-sm">
                  <p className="text-sm">Sí, tenemos disponibilidad para hoy a las 9pm. ¿Para cuántas personas sería la reserva?</p>
                  <span className="text-xs text-slate-400 block text-right mt-1">20:15</span>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-100 shadow-sm">
                  <p className="text-sm">Para 3 personas, a nombre de Carlos</p>
                  <span className="text-xs text-slate-400 block text-right mt-1">20:16</span>
                </div>
                <div className="bg-green-50 rounded-lg p-3 shadow-sm">
                  <p className="text-sm">Perfecto, he reservado una mesa para 3 personas a las 9pm a nombre de Carlos. ¿Necesitas algo especial para tu visita?</p>
                  <span className="text-xs text-slate-400 block text-right mt-1">20:16</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappIntegration;
