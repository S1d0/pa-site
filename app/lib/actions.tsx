'use server';
import { z } from 'zod';
import { ContactForm } from './definitions';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.coerce.number(),
  projectDesc: z.string(),
});

export async function sendEmail(prevState: any, formData: FormData) {  
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    projectDesc: formData.get('projectDesc'),
  };
  const { name, email, phone, projectDesc }: ContactForm =
    ContactFormSchema.parse(rawFormData);

  console.log("Sending email");
  const { data, error } = await resend.emails.send({
    from: `P&A strona <sidzkowski@softwaregoodies.org>`,
    to: email,
    subject: `Nowy projekt od ${name} - ${phone}`,
    text: 'Hello from email',
  });

  if (error) {
    console.log(`Error while sending email: ${error}`);
    return { message: error.message };
  }

  revalidatePath('/');
  return { message: 'Wiadomość wysłana!' };
}
