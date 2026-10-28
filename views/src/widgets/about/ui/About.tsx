import Link from 'next/link';
import { contact } from '@/shared/config';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ink text-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-end gap-10 px-5 py-16 sm:px-10 md:gap-[clamp(40px,6vw,96px)] lg:px-16 lg:py-32">
        <div className="min-w-0 flex-[1_1_440px]">
          <h2 id="about-title" className="mb-6 text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.03em]">
            Enae에 Enable을 더해, Enaeble
          </h2>
          <p className="max-w-[30em] text-[clamp(17px,1.5vw,20px)] leading-[1.8] text-[#c9cedc]">
            막히면 파고들고, 새로우면 일단 써봅니다. 문제가 풀리는 순간의 짜릿함 때문에 오늘도 코드를 씁니다.
          </p>
        </div>

        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
          <p className="text-[17px] text-[#c9cedc]">될지 궁금한 아이디어가 있다면</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-[clamp(22px,2.4vw,32px)] font-medium text-white underline decoration-2 underline-offset-[6px] [overflow-wrap:anywhere]"
          >
            {contact.email}
          </a>
          <div className="mt-2 flex flex-wrap gap-2.5">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-6 font-medium text-ink transition-colors hover:bg-[#e6e8ee]"
            >
              메시지 보내기
            </Link>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border-[1.5px] border-[#5a6178] px-6 font-medium text-white transition-colors hover:border-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
