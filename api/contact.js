import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  const response = await resend.emails.send({
    from: 'Contact Form <contact@davidromanhernandez.com>',
    to: 'davidro3421@gmail.com',
    subject: `Mensaje de ${name}`,
    html: `<p>${message}</p>\n\n<p>Email: ${email}</p>`,
  });

  if (!response) {
    return res.status(500).json({ success: false, error: 'Error 500: unable to send email' });
  }

  res.status(200).json({ success: true });
}
