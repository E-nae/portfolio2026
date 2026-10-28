'use client';

import Link from 'next/link';
import { ToggleMark } from '@/shared/ui';

export function ContactSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div role="status" className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-8 md:p-14">
      <ToggleMark size="lg" />
      <h2 className="text-[clamp(26px,2.6vw,34px)] font-bold tracking-[-0.03em]">메시지를 보냈어요.</h2>
      <p className="text-[17px] text-ink-soft">적어주신 이메일로 답장드릴게요.</p>
      <div className="mt-2 flex flex-wrap gap-2.5">
        <Link
          href="/#projects"
          className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-medium text-white transition-colors hover:bg-[#2a3047]"
        >
          프로젝트 더 보기
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex min-h-12 cursor-pointer items-center rounded-full border-[1.5px] border-line-strong px-6 font-medium text-ink transition-colors hover:border-ink"
        >
          메시지 하나 더 보내기
        </button>
      </div>
    </div>
  );
}
