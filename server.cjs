// Al principio del archivo
require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Configurar CORS para permitir solicitudes desde tu frontend
app.use(cors({
  origin: ['https://gandolfo.netlify.app', 'http://localhost:8080'], // Añade tu URL de Netlify
  methods: ['POST', 'GET'],  // Permitir tanto POST como GET
  credentials: true
}));

app.use(bodyParser.json());

// Añade esto antes de iniciar el servidor
process.on('uncaughtException', (err) => {
  console.error('Error no capturado:', err);
  // No dejar que se cierre el servidor
});

// Endpoint para enviar correos
app.post('/api/send-booking-email', async (req, res) => {
  const { name, email, date, selectedHour, company, phone } = req.body;
  
  console.log('Recibida solicitud de reserva:', { name, email, date, selectedHour });
  
  try {
    // Código para generar la URL de Google Calendar aquí...
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reunión+con+Gandolfo+AI&dates=${date}T${selectedHour}00/${date}T${selectedHour}30&details=Reunión+confirmada+con+Gandolfo+AI&location=Videollamada&sf=true&output=xml`;

    // Configurar el transportador de email
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || 'gandolfo@vivacom.com.ar',
        pass: process.env.EMAIL_PASS || 'tu-contraseña'
      }
    });
    
    // Enviar el correo
    await transporter.sendMail({
      from: '"Gandolfo AI" <gandolfo@vivacom.com.ar>',
      to: email,
      bcc: 'gandolfo@vivacom.com.ar', // Para recibir una copia
      subject: '✅ Confirmación de tu reunión con Gandolfo AI',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f7; padding: 20px; text-align: center;">
            <!-- Logo de Gandolfo -->
            <img src="https://vivacomdev.com/static/img/logo.png" alt="Gandolfo AI" style="max-width: 200px; height: auto; margin-bottom: 15px;">
            <h1 style="color: #000;">Reunión confirmada</h1>
          </div>
          <div style="padding: 20px;">
            <h2>¡Hola ${name}!</h2>
            <p>Tu reunión ha sido confirmada para el <strong>${date}</strong> a las <strong>${selectedHour} hs</strong>.</p>
            <p>Te enviaremos el enlace de la videollamada antes del evento.</p>
            <div style="background-color: #f9f9f9; border-left: 4px solid #fdad18; padding: 15px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Fecha:</strong> ${date}</p>
              <p style="margin: 0;"><strong>Hora:</strong> ${selectedHour} hs (Buenos Aires GMT-3)</p>
              <p style="margin: 0;"><strong>Duración:</strong> 30 minutos</p>
            </div>
            
            <!-- Agregar botón de Google Calendar -->
            <div style="text-align: center; margin: 25px 0;">
              <a href="${googleCalendarUrl}" target="_blank" style="background-color: #4285F4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
                Agregar a Google Calendar
              </a>
            </div>
            
            <p>Si necesitas cambiar la cita, contáctanos respondiendo a este correo de mierda.</p>
            <p>¡Nos vemos pronto!</p>
            <p>Saludos,<br>El equipo de Gandolfo CACA</p>
          </div>
          <div style="background-color: #333; color: #fff; padding: 15px; text-align: center; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Gandolfo AI - Todos los derechos reservados</p>
          </div>
        </div>
      `
    });
    
    console.log('Email enviado con éxito a:', email);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message || 'Error al enviar el correo' 
    });
  }
});

// También añade un mejor logging
app.use((err, req, res, next) => {
  console.error('Error en Express:', err);
  res.status(500).json({ success: false, message: 'Error interno del servidor' });
});

// Ruta simple para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor de emails funcionando');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});