// NEXT_PUBLIC_ 변수는 빌드 시 문자열로 치환되므로 반드시 리터럴로 접근해야 합니다.
export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? '',
  recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '',
};
