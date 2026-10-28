import { getRecaptchaToken } from '@/shared/lib/recaptcha';
import type { ContactFormData } from '../model/types';

const FALLBACK_ERROR = '메시지를 보내지 못했어요. 네트워크 연결을 확인하고 다시 보내주세요.';

/** 실패 시 화면에 띄울 문구를 Error에 담아서 던짐 */
export const sendContact = async (formState: ContactFormData) => {
  let token: string;
  try {
    token = await getRecaptchaToken('contact');
  } catch {
    throw new Error('스팸 방지 확인을 불러오지 못했어요. 페이지를 새로고침한 뒤 다시 보내주세요.');
  }

  let res: Response;
  try {
    // Pages Functions(functions/api/contact.ts)가 같은 도메인에서 처리
    res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formState, captchaToken: token }),
    });
  } catch {
    throw new Error(FALLBACK_ERROR);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message ?? FALLBACK_ERROR);
  }
};
