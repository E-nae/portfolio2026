import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();


// [1] Transporter 생성 (Gmail SMTP 설정)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // 587 포트 사용 시 false
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});



router.post('/', async(req, res) => {
  const { email, message } = req.body;
  
  try {
    // [2] 메일 옵션 설정 (HTML 템플릿 적용)
    const mailOptions = {
      from: process.env.EMAIL_USER, // 보내는 사람 (내 인증 계정)
      to: process.env.EMAIL_USER,   // 받는 사람 (나)
      replyTo: email,               // 답장 누르면 문의한 사람 이메일로 가게 설정
      subject: `[Portfolio] 새로운 프로젝트 문의가 도착했습니다.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563EB;">Everything is Enaeble.</h2>
          <p style="font-size: 16px; color: #333;">
            포트폴리오 웹사이트를 통해 새로운 연락이 도착했습니다.
          </p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <p style="margin: 0 0 10px 0;"><strong>보낸 사람:</strong> ${email}</p>
            <p style="margin: 0;"><strong>내용:</strong></p>
            <p style="white-space: pre-wrap; margin-top: 10px; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #aaa;">
            Sent from your portfolio website.
          </div>
        </div>
      `,
    };

    // [3] 전송
    await transporter.sendMail(mailOptions);
    
    console.log(`[Success] Email sent from ${email}`);
    
    res.status(200).json({ 
      success: true, 
      message: '메일이 성공적으로 전송되었습니다.' 
    });

  } catch (error) {
    console.error('[Error] Email sending failed:', error);
    res.status(500).json({ 
      success: false, 
      message: '메일 전송 중 오류가 발생했습니다.' 
    });
}});

export default router;