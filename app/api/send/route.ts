import { NextResponse, NextRequest } from 'next/server';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { config } from '@/lib/config';
import { render } from '@react-email/components';

const resend = new Resend(config.env.resend.apiKey);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const emailHtml = await render(
      EmailTemplate({ name, email, subject, message })
    );

  const { data, error } = await resend.emails.send({
    from: 'CCSO <onboarding@resend.dev>',
    to: ['nhiermaker17@gmail.com'],
    subject: `New Contact: ${subject}`,
    html: emailHtml,
  });

  if (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
} catch (error) {
  console.error(error);
  return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
}
}
