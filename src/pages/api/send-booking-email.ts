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
            <img src="https://tudominio.com/logo.png" alt="Gandolfo AI" style="max-width: 200px; margin-bottom: 20px;">
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
            <p>Si necesitas cambiar la cita, contáctanos respondiendo a este correo.</p>
            <p>¡Nos vemos pronto!</p>
            <p>Saludos,<br>El equipo de Gandolfo AI</p>
          </div>
          <div style="background-color: #333; color: #fff; padding: 15px; text-align: center; font-size: 12px;">
            <p>Este es un correo automático, por favor no respondas directamente a este mensaje.</p>
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