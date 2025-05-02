import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type EmailData = {
  name: string;
  email: string;
  date: string;
  selectedHour: string;
  company: string;
  phone: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, date, selectedHour, company, phone } = req.body as EmailData;
  
  // Validar datos requeridos
  if (!name || !email || !date || !selectedHour || !phone) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Crear enlace para Google Calendar
    // Parsear la fecha y hora para crear el formato adecuado para Google Calendar
    const [day, month, year] = date.split(' de ');
    
    // Mapeo de meses en español a números
    const monthsMap: {[key: string]: string} = {
      'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
      'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
      'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
    };
    
    const monthNumber = monthsMap[month.toLowerCase()] || '01';
    const [hours, minutes] = selectedHour.split(':');
    
    // Crear fecha de inicio y fin (30 minutos después)
    const startDate = new Date(`${year}-${monthNumber}-${day.padStart(2, '0')}T${hours}:${minutes || '00'}:00-03:00`);
    const endDate = new Date(startDate.getTime() + 30 * 60000); // 30 minutos después
    
    // Formatear para URL
    const formatForUrl = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, '');
    const start = formatForUrl(startDate);
    const end = formatForUrl(endDate);
    
    // Crear texto para el evento
    const eventTitle = encodeURIComponent(`Reunión con Gandolfo AI`);
    const eventLocation = encodeURIComponent('Meet virtual - recibirás el enlace por correo');
    const eventDetails = encodeURIComponent(`Reunión para conocer Gandolfo AI\n\nDetalle de la reserva:\n- Nombre: ${name}\n- Empresa: ${company || 'No especificada'}\n- Teléfono: ${phone}\n- Email: ${email}`);
    
    // Generar URL de Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${start}/${end}&details=${eventDetails}&location=${eventLocation}&sf=true&output=xml`;

    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER || 'gandolfo@vivacom.com.ar',
        pass: process.env.EMAIL_PASS || 'tu-contraseña-segura'
      }
    });
    
    // Enviar email
    await transporter.sendMail({
      from: '"Gandolfo AI" <gandolfo@vivacom.com.ar>',
      to: email,
      bcc: 'gandolfo@vivacom.com.ar', // Copia para tu equipo
      subject: '✅ Confirmación de tu reunión con Gandolfo AI',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f7; padding: 20px; text-align: center;">
            <img src="https://vivacomdev.com/static/img/logo.png" alt="Gandolfo AI" style="max-width: 200px; height: auto;">
            <h1 style="color: #000;">Reunión confirmada</h1>
          </div>
          <div style="padding: 20px;">
            <h2>¡Hola ${name}!</h2>
            <p>Tu reunión ha sido confirmada para el <strong>${date}</strong> a las <strong>${selectedHour} hs</strong>.</p>
            <p>Te enviaremos el enlace de la videollamada antes del evento!</p>
            <div style="background-color: #f9f9f9; border-left: 4px solid #fdad18; padding: 15px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Fecha:</strong> ${date}</p>
              <p style="margin: 0;"><strong>Hora:</strong> ${selectedHour} hs (Buenos Aires GMT-3)</p>
              <p style="margin: 0;"><strong>Duración:</strong> 30 minutos</p>
            </div>
            
            <p style="margin-top: 20px; text-align: center;">
              <a href="${googleCalendarUrl}" target="_blank" style="color: #1a73e8; font-weight: bold; text-decoration: underline;">
                Haz clic aquí para agregar esta reunión a tu Google Calendar
              </a>
            </p>
            
            <p>Si necesitas cambiar la cita, contáctanos respondiendo a este correo CHE!!.</p>
            <p>¡Nos vemos pronto!</p>
            <p>Saludos,<br>El equipo de Gandolfo AI</p>
          </div>
          <div style="background-color: #333; color: #fff; padding: 15px; text-align: center; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Gandolfo AI - Todos los derechos reservados</p>
          </div>
        </div>
      `
    });

    // Responder al cliente
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: (error as Error).message });
  }
}