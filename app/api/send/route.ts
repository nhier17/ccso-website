import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { config } from '@/lib/config';

const resend = new Resend(config.env.resend.apiKey);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const body = await req.body;
    const { firstName, amount, frequency, email } = body;
  const { data, error } = await resend.emails.send({
    from: 'CCSO <bishop.pacong@gmail.com>',
    to: email,
    subject: 'Thank you for your donation',
    react: EmailTemplate({
        firstName,
        amount,
        frequency,
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};