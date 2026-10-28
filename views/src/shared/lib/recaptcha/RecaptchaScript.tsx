import Script from 'next/script';
import { env } from '@/shared/config';

export function RecaptchaScript() {
  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${env.recaptchaSiteKey}`}
      strategy="afterInteractive"
    />
  );
}
