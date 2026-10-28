'use client';

import { AlertCircle, Loader2 } from 'lucide-react';
import { contact } from '@/shared/config';
import { useContactForm } from '../model/useContactForm';
import { ContactSuccess } from './ContactSuccess';

const fieldClass =
  'w-full rounded-[10px] border-[1.5px] border-[#d3d7df] bg-[#fbfbfc] px-[18px] text-[17px] text-ink placeholder:text-question transition-colors focus:border-on focus:bg-white focus:outline-none';

export function ContactForm() {
  const { formState, status, errorMessage, handleSubmit, updateField, reset } = useContactForm();

  if (status === 'success') {
    return <ContactSuccess onReset={reset} />;
  }

  const loading = status === 'loading';

  return (
    <form onSubmit={handleSubmit} aria-label="메시지 보내기" className="flex flex-col gap-[22px]">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-[15px] font-medium">
          답장받을 이메일
        </label>
        <input
          id="contact-email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={`${fieldClass} min-h-14`}
          value={formState.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-subject" className="text-[15px] font-medium">
          제목 <span className="font-normal text-muted">(선택)</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="예) 프론트엔드 포지션 제안"
          className={`${fieldClass} min-h-14`}
          value={formState.subject}
          onChange={(e) => updateField('subject', e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-[15px] font-medium">
          내용
        </label>
        <textarea
          id="contact-message"
          required
          rows={7}
          placeholder="궁금한 점이나 제안하고 싶은 내용을 적어주세요."
          className={`${fieldClass} resize-y py-4 leading-[1.7]`}
          value={formState.message}
          onChange={(e) => updateField('message', e.target.value)}
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-[10px] bg-[#fdecea] px-4 py-3.5 text-[15px] text-[#8a1c12]">
          <AlertCircle aria-hidden="true" size={20} className="mt-[3px] flex-none" />
          <p>
            {errorMessage} 계속 안 되면{' '}
            <a href={`mailto:${contact.email}`} className="underline underline-offset-2">
              {contact.email}
            </a>
            으로 직접 메일을 보내주세요. 작성한 내용은 그대로 남아 있어요.
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[26em] text-[13px] text-muted">스팸 방지를 위해 reCAPTCHA를 사용합니다.</p>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-14 cursor-pointer items-center gap-2.5 rounded-full bg-ink px-8 text-[17px] font-medium text-white transition-colors hover:bg-[#2a3047] disabled:cursor-wait disabled:opacity-60"
        >
          {loading && <Loader2 aria-hidden="true" size={20} className="animate-spin" />}
          {loading ? '보내는 중…' : status === 'error' ? '다시 보내기' : '메시지 보내기'}
        </button>
      </div>
    </form>
  );
}
