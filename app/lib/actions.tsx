'use server'
import {z} from 'zod'
import { ContactForm } from './definitions';
import { revalidatePath } from "next/cache";

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
        projectDesc: formData.get('projectDesc')
    }
    const {name, email, phone, projectDesc}: ContactForm = ContactFormSchema.parse(rawFormData)

    revalidatePath("/")
    return { message: "Wiadomość wysłana!"}
}