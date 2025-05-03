import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, affiliation, title, abstract } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Konfiguracja wiadomości e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Nadawca
    to: 'karoldawidg@gmail.com',  // Adres odbiorcy
    subject: 'Nowe zgłoszenie konferencyjne',
    text: `
      Nowe zgłoszenie konferencyjne:

      Imię i nazwisko: ${name}
      Afiliacja: ${affiliation}
      Tytuł naukowy: ${title}
      Abstrakt: ${abstract}
      Email: ${email}
      Nr telefonu: ${phone}
    `,
  };

  // Wysyłanie e-maila
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Błąd wysyłania e-maila:', error);
    return NextResponse.json({ error: 'Błąd wysyłania e-maila' }, { status: 500 });
  }
}
