import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, X, Clock } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const availableHours = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", 
  "18:00"
];

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Enviando solicitud al servidor...");
      
      const response = await fetch('https://gandolfo-web.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          date: date ? format(date, "PPP", { locale: es }) : '',
          selectedHour,
          company,
          phone
        }),
      });
      
      const responseData = await response.json();
      
      if (response.ok && responseData.success) {
        console.log("¡Email enviado con éxito!");
        setSubmitted(true);
      } else {
        throw new Error(`Error del servidor: ${responseData.message || 'Desconocido'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Error al enviar: ${error instanceof Error ? error.message : 'Desconocido'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setDate(undefined);
    setSelectedHour("");
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    resetForm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      if (!newOpen) resetForm();
      onOpenChange(newOpen);
    }}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center">
            <span className="mr-2">🚀</span> Descubrí Gandolfo
          </DialogTitle>
          <DialogDescription className="text-base">
            30 min · Detalles de la conferencia web proporcionados al confirmar.
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div className="space-y-1">
              <h3 className="font-medium flex items-center">
                <span className="mr-2">🎯</span> ¿Tenés 30 minutos? Hagamos que valgan la pena.
              </h3>
              <p className="text-sm text-muted-foreground">
                ¿Cansado de llamadas perdidas e ingresos desperdiciados? Cambiemos eso. 
                En esta sesión exprés de 30 minutos, veremos cómo el asistente de chat 
                impulsado por IA de Gandolfo puede atender consultas de clientes las 24 horas, 
                aumentar tus ingresos y permitir que tu equipo se concentre en lo que mejor sabe hacer.
              </p>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-medium flex items-center">
                <span className="mr-2">💡</span> Exploraremos soluciones reales adaptadas a tus necesidades
              </h3>
              <p className="text-sm text-muted-foreground">
                Sin cháchara. Solo ideas revolucionarias, ejemplos concretos y la 
                oportunidad de ver cómo la IA puede transformar tu negocio.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-medium">Seleccioná una fecha y hora</h3>
              
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date() || date > new Date(2025, 12, 31)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                        disabled={!date}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {selectedHour ? selectedHour : <span>Seleccionar hora</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0" align="start">
                      <div className="grid grid-cols-2 gap-1 p-2 max-h-[300px] overflow-y-auto">
                        {availableHours.map((hour) => (
                          <Button
                            key={hour}
                            variant="ghost"
                            className="justify-start font-normal"
                            onClick={() => setSelectedHour(hour)}
                          >
                            {hour}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Zona horaria: Hora de Buenos Aires (GMT-3)
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-medium">Tus datos</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input 
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <DialogFooter className="pt-4">
              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800"
                disabled={!date || !selectedHour || !name || !email || !phone || isSubmitting}
              >
                {isSubmitting ? 'Procesando...' : 'Confirmar reunión'}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-xl">¡Reserva confirmada!</h3>
            <p className="text-center text-gray-600">
              Hemos enviado un correo a <strong>{email}</strong> con los detalles de la reunión.
              Te esperamos el {date && format(date, "PPP", { locale: es })} a las {selectedHour} hs.
            </p>
            <Button
              onClick={handleCloseModal}
              className="mt-4"
            >
              Cerrar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;