import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsappIntegration = () => {
  return (
    <section id="whatsapp" className="py-20 px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Integración con WhatsApp</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conecta con tus clientes donde ya están, sin necesidad de descargar nuevas aplicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-black p-8 lg:p-10 rounded-xl shadow-lg text-white lg:col-span-2 flex flex-col justify-between h-full">
            <div className="flex flex-col md:flex-row items-start mb-6 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl flex-shrink-0">
                <MessageCircle className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">WhatsApp Business API</h3>
                <p className="opacity-90 text-lg">
                  Utilizamos la API oficial de WhatsApp Business para garantizar una comunicación segura y confiable con tus clientes.
                </p>
              </div>
            </div>
            
            <div className="mb-6 flex justify-center">
              <img 
                src="/lovable-uploads/39e83c64-4ab3-4a7f-a2d4-748ec7ab2544.jpg" 
                alt="Escena de restaurante con clientes disfrutando mientras una mujer usa Gandolfo en su teléfono" 
                className="rounded-xl w-full object-cover shadow-md"
                style={{ maxHeight: "240px" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-5 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Mensajes automáticos</h4>
                <p className="text-base opacity-90">Respuestas instantáneas a preguntas frecuentes de tus clientes</p>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Confirmaciones</h4>
                <p className="text-base opacity-90">Envío de confirmaciones y recordatorios de reserva automáticos</p>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Menús interactivos</h4>
                <p className="text-base opacity-90">Comparte tu carta y promociones especiales a través de mensajes</p>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Atención personalizada</h4>
                <p className="text-base opacity-90">La IA recuerda preferencias de clientes para una mejor experiencia</p>
              </div>
            </div>
          </div>

          <div className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-100 h-full">
            <div className="absolute top-4 left-4 h-12 w-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="pt-14 pb-4">
              <h3 className="text-2xl font-bold mb-6">Ejemplo de interacción</h3>
              <div className="space-y-4 max-w-xs mx-auto">
                <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm">
                  <p className="text-base font-medium">Hola, ¿tienen mesa disponible para hoy a las 9?</p>
                  <span className="text-xs text-slate-400 block text-right mt-1">20:15</span>
                </div>
                <div className="bg-green-50 rounded-lg p-4 shadow-sm">
                  <p className="text-base font-medium">Sí, tenemos disponibilidad para hoy a las 9pm. ¿Para cuántas personas sería la reserva?</p>
                  <span className="text-xs text-slate-400 block text-right mt-1">20:15</span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm">
                  <p className="text-base font-medium">Para 3 personas, a nombre de Carlos</p>
                  <span className="text-xs text-slate-400 block text-right mt-1">20:16</span>
                </div>
                <div className="bg-green-50 rounded-lg p-4 shadow-sm">
                  <p className="text-base font-medium">Perfecto, he reservado una mesa para 3 personas a las 9pm a nombre de Carlos. ¿Necesitas algo especial para tu visita?</p>
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
