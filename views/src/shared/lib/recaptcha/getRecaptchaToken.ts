import { env } from '@/shared/config';

export const getRecaptchaToken = async (action: string) => {
  await new Promise<void>((resolve) => {
    window.grecaptcha.ready(() => resolve());
  });

  return window.grecaptcha.execute(env.recaptchaSiteKey, { action });
};
