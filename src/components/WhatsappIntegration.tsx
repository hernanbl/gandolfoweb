import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const WhatsappIntegration = () => {
  return (
    <section id="whatsapp" className="py-20 px-6 md:px-10 bg-[#f5f5f7]">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Integración con WhatsApp</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Conecta con tus clientes donde ya están, sin necesidad de descargar nuevas aplicaciones
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Panel negro - WhatsApp Business API */}
          <ScrollReveal direction="left" className="lg:w-[70%]">
            <div className="bg-black h-full rounded-xl p-6 text-white">
              <div className="flex items-start gap-5 mb-5">
                <div className="bg-green-500 rounded-xl p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    <circle cx="19.5" cy="4.5" r="2.5" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">WhatsApp Business API</h3>
                  <p className="text-gray-300">
                    Utilizamos la API oficial de WhatsApp Business para garantizar una comunicación segura y confiable con tus clientes.
                  </p>
                </div>
              </div>

              <motion.div 
                whileInView={{ opacity: [0.8, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="my-6"
              >
                <img 
                  src="/lovable-uploads/39e83c64-4ab3-4a7f-a2d4-748ec7ab2544.jpg"
                  alt="Escena de restaurante" 
                  className="rounded-xl w-full object-cover shadow-lg"
                  style={{ maxHeight: "300px" }}
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <motion.div 
                  className="bg-zinc-900 p-5 rounded-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xl font-bold mb-2">Mensajes automáticos</h4>
                  <p className="text-gray-400">Respuestas instantáneas a preguntas frecuentes de tus clientes</p>
                </motion.div>
                <motion.div 
                  className="bg-zinc-900 p-5 rounded-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xl font-bold mb-2">Confirmaciones</h4>
                  <p className="text-gray-400">Envío de confirmaciones y recordatorios de reserva automáticos</p>
                </motion.div>
                <motion.div 
                  className="bg-zinc-900 p-5 rounded-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xl font-bold mb-2">Menús interactivos</h4>
                  <p className="text-gray-400">Comparte tu carta y promociones especiales a través de mensajes</p>
                </motion.div>
                <motion.div 
                  className="bg-zinc-900 p-5 rounded-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xl font-bold mb-2">Atención personalizada</h4>
                  <p className="text-gray-400">La IA recuerda preferencias de clientes para una mejor experiencia</p>
                </motion.div>
              </div>

              {/* Texto explicativo debajo de las cards de WhatsApp */}
              <div className="mt-8  px-4 md:px-0">
                <p className="text-sm text-gray-400 max-w-3xl mx-auto">
                  Comunícate con tus clientes por medio de la app de mensajería más usada del mundo. 
                  La WhatsApp Business API es una interfaz de programación de aplicaciones (API) 
                  proporcionada por Meta (anteriormente Facebook) que permite a tu restaurante 
                  integrar WhatsApp en tu negocio de manera segura, mediante el bot de Gandolfo.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Panel blanco - Ejemplo de interacción (simulando pantalla de teléfono) */}
          <ScrollReveal direction="right" className="lg:w-[30%]">
            <div className="bg-white h-full rounded-xl shadow-md overflow-hidden flex flex-col max-w-[360px] mx-auto">
              {/* Header de WhatsApp */}
              <div className="bg-[#41b72c] p-4 flex items-center gap-3">
                <div className="bg-white rounded-full p-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Ejemplo de interacción</h3>
              </div>

              {/* Cuerpo del chat */}
              <div className="p-4 bg-gray-50 flex-grow flex flex-col space-y-4 overflow-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="self-end max-w-[80%]"
                >
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <p className="text-gray-700">Hola, ¿tienen mesa disponible para hoy a las 9?</p>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs text-gray-400">20:15</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="self-start max-w-[80%]"
                >
                  <div className="bg-green-100 rounded-lg p-3 shadow-sm">
                    <p className="text-gray-700">Sí, tenemos disponibilidad para hoy a las 9pm. ¿Para cuántas personas sería la reserva?</p>
                  </div>
                  <div className="text-left mt-1">
                    <span className="text-xs text-gray-400">20:15</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="self-end max-w-[80%]"
                >
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <p className="text-gray-700">Para 3 personas, a nombre de Carlos</p>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs text-gray-400">20:16</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="self-start max-w-[80%]"
                >
                  <div className="bg-green-100 rounded-lg p-3 shadow-sm">
                    <p className="text-gray-700">Perfecto, he reservado una mesa para 3 personas a las 9pm a nombre de Carlos. ¿Necesitas algo especial para tu visita?</p>
                  </div>
                  <div className="text-left mt-1">
                    <span className="text-xs text-gray-400">20:16</span>
                  </div>
                </motion.div>
              </div>

              {/* Footer de entrada de texto */}
              <div className="bg-white p-3 border-t border-gray-200 flex items-center gap-2">
                <div className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                  Escribe un mensaje...
                </div>
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhatsappIntegration;
