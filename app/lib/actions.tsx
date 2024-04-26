'use server';
import { z } from 'zod';
import { ContactForm } from './definitions';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';
import ContactEmail from '../ui/templates/contact-mail';

const resend = new Resend(process.env.RESEND_API_KEY);
const officeMailBox = process.env.MAIL_BOX;

const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
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
    to: officeMailBox? officeMailBox : "zajkowski.pawel@wp.pl" ,
    subject: `Nowy projekt od ${name} - ${phone}`,
    reply_to: email,
    react: <ContactEmail name={name} phone={phone} description={projectDesc} email={email}/>,
  });

  if (error) {
    console.log(`Error while sending email: ${error}`);
    return { message: error.message };
  }

  revalidatePath('/');
  return { message: 'Wiadomość wysłana!' };
}
