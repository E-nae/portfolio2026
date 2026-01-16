import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail({
    to,
    subject,
    html,
}: {
    to: string;
    subject: string;
    html: string;
}) {
    try {
        const response = await resend.emails.send({
            from: 'Queue Service <onboarding@resend.dev>',
            to,
            subject,
            html,
        });
          
        if (response.error) {
            console.error('[MAIL] failed:', response.error);
            return { success: false };
        }
        
        console.log('[MAIL] sent:', response.data?.id);
        return { success: true };

    } catch (e) {
        console.error('[MAIL] failed:', e);
        return { success: false };
    }
}

