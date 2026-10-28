/**
 * Cloudflare Pages Function: POST /api/contact
 * 기존 Express 서버(routes/contact.ts)를 옮긴 것. 프론트와 같은 도메인에서 동작하므로 CORS 설정이 필요 없음.
 *
 * Pages 대시보드 > Settings > Variables and Secrets 에 아래 값을 등록해야 함:
 * RESEND_API_KEY, RECAPTCHA_SECRET, CONTACT_RECEIVER_EMAIL
 */

interface Env {
  RESEND_API_KEY: string;
  RECAPTCHA_SECRET: string;
  CONTACT_RECEIVER_EMAIL: string;
}

interface Context {
  request: Request;
  env: Env;
}

const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 5000;

const json = (status: number, success: boolean, message: string) =>
  Response.json({ success, message }, { status });

/** 메일 HTML에 넣기 전에 사용자 입력 이스케이프 처리 */
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** 구글 reCAPTCHA v3 검증 */
async function verifyCaptcha(token: string, secret: string, ip: string | null) {
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body,
  });
  return (await res.json()) as { success: boolean; score?: number };
}

const buildHtml = (email: string, subject: string, message: string) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
    <h2 style="color: #2563EB;">Everything is Enaeble.</h2>
    <p style="font-size: 16px; color: #333;">
      포트폴리오 웹사이트를 통해 새로운 연락이 도착했습니다.
    </p>
    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />

    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
      <p><strong>보낸 사람:</strong> ${escapeHtml(email)}</p>
      ${subject ? `<p><strong>제목:</strong> ${escapeHtml(subject)}</p>` : ''}
      <p><strong>내용:</strong></p>
      <p style="white-space: pre-wrap; color: #555;">${escapeHtml(message)}</p>
    </div>

    <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #aaa;">
      Sent from your portfolio website.
    </div>
  </div>
`;

export const onRequestPost = async ({ request, env }: Context) => {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json(400, false, '잘못된 요청입니다.');
  }

  const { email, subject, message, captchaToken } = payload;

  if (typeof captchaToken !== 'string' || !captchaToken) {
    return json(400, false, '캡차 토큰이 없습니다.');
  }

  if (typeof email !== 'string' || !email.trim() || typeof message !== 'string' || !message.trim()) {
    return json(400, false, 'email과 message는 필수입니다.');
  }

  if (email.length > MAX_EMAIL_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return json(400, false, '입력 내용이 너무 깁니다.');
  }

  const captcha = await verifyCaptcha(
    captchaToken,
    env.RECAPTCHA_SECRET,
    request.headers.get('CF-Connecting-IP'),
  ).catch(() => null);

  if (!captcha?.success || (captcha.score ?? 0) < 0.5) {
    return json(403, false, '봇 요청으로 판단되었습니다.');
  }

  const cleanEmail = email.trim();
  const cleanSubject = typeof subject === 'string' ? subject.trim().slice(0, MAX_SUBJECT_LENGTH) : '';

  try {
    // Resend SDK 대신 REST API를 직접 호출 (추가 의존성 없음)
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <contact@enaeble.co.kr>',
        to: [env.CONTACT_RECEIVER_EMAIL],
        reply_to: cleanEmail,
        subject: cleanSubject
          ? `[Portfolio] ${cleanSubject}`
          : '[Portfolio] 새로운 프로젝트 문의가 도착했습니다.',
        html: buildHtml(cleanEmail, cleanSubject, message),
      }),
    });

    if (!res.ok) {
      console.error('[MAIL ERROR]', res.status, await res.text());
      return json(500, false, '메일 전송 실패');
    }

    const data = (await res.json()) as { id?: string };
    console.log('[MAIL SENT]', data.id);
    return json(200, true, '메일이 성공적으로 전송되었습니다.');
  } catch (e) {
    console.error('[MAIL EXCEPTION]', e);
    return json(500, false, '서버 오류');
  }
};
