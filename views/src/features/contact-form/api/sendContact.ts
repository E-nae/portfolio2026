import { env } from '@/shared/config';
import { getRecaptchaToken } from '@/shared/lib/recaptcha';
import type { ContactFormData } from '../model/types';

export const sendContact = async (formState: ContactFormData) => {
  const token = await getRecaptchaToken('contact');

  try {
    const res = await fetch(`${env.apiUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formState,
        captchaToken: token,
      }),
    });

    return res;
  } catch (error) {
    console.error(error);
  }
};
