'use client';

import { useState } from 'react';
import { contact } from '@/shared/config';

const linkClass = 'text-[clamp(20px,2vw,26px)] font-medium underline underline-offset-[5px] [overflow-wrap:anywhere] hover:text-on';

export function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 접근이 막힌 환경이면 그냥 넘어감 (주소는 직접 드래그해서 복사 가능)
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-6 border-t border-line pt-6">
      <div className="flex flex-col gap-2">
        <p className="text-[15px] text-muted">이메일</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href={`mailto:${contact.email}`} className={linkClass}>
            {contact.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex min-h-10 cursor-pointer items-center rounded-full border-[1.5px] border-line-strong px-4 text-sm font-medium transition-colors hover:border-ink"
          >
            <span aria-live="polite">{copied ? '복사했어요' : '주소 복사'}</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[15px] text-muted">GitHub</p>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          github.com/E-nae
        </a>
      </div>
    </div>
  );
}
