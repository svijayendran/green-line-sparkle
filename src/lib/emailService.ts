import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_xsztlo5';
const TEMPLATE_ID = 'template_esk2lc4';
const PUBLIC_KEY = 'lzmPQfEMYkxtIkD2p';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  phn?: string;
  company?: string;
  subject?: string;
  message: string;
}

export const sendContactEmail = (data: ContactFormData): Promise<void> => {
  const templateParams = {
    name: data.name,
    email: data.email,
    phone: data.phone || data.phn || '',
    company: data.company || '',
    subject: data.subject || 'Contact Form Enquiry',
    message: data.message,
  };

  return emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => undefined);
};
