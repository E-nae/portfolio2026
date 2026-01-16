import 'dotenv/config';
import express from 'express';
import { Resend } from 'resend';
import rateLimit from 'express-rate-limit';
import axios from 'axios';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

/** 봇 판단 */
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 5,                  // IP당 5번
  message: {
    success: false,
    message: '너무 많은 요청입니다. 잠시 후 다시 시도해주세요.',
  },
});

/** 구글 reCAPTCHA 검증 */
async function verifyCaptcha(token: string) {
  const res = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    null,
    {
      params: {
        secret: process.env.RECAPTCHA_SECRET,
        response: token,
      },
    }
  );

  return res.data;
}

router.post('/', contactLimiter, async (req, res) => {
  const { email, message, captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({
      success: false,
      message: '캡차 토큰이 없습니다.',
    });
  }

  if (!email || !message) {
    return res.status(400).json({
      success: false,
      message: 'email과 message는 필수입니다.',
    });
  }

  const captcha = await verifyCaptcha(captchaToken);

  if (!captcha.success || captcha.score < 0.5) {
    return res.status(403).json({
      success: false,
      message: '봇 요청으로 판단되었습니다.',
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <contact@enaeble.co.kr>', 
      to: [process.env.CONTACT_RECEIVER_EMAIL || 'your@email.com'],
      replyTo: email,
      subject: '[Portfolio] 새로운 프로젝트 문의가 도착했습니다.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563EB;">Everything is Enaeble.</h2>
          <p style="font-size: 16px; color: #333;">
            포트폴리오 웹사이트를 통해 새로운 연락이 도착했습니다.
          </p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <p><strong>보낸 사람:</strong> ${email}</p>
            <p><strong>내용:</strong></p>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>

          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #aaa;">
            Sent from your portfolio website.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[MAIL ERROR]', error);
      return res.status(500).json({
        success: false,
        message: '메일 전송 실패',
      });
    }

    console.log('[MAIL SENT]', data.id);

    return res.status(200).json({
      success: true,
      message: '메일이 성공적으로 전송되었습니다.',
    });
  } catch (e) {
    console.error('[MAIL EXCEPTION]', e);
    return res.status(500).json({
      success: false,
      message: '서버 오류',
    });
  }
});

export default router;
