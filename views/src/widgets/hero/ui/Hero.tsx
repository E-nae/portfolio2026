'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [on, setOn] = useState(false);

    // 처음 들어오면 스위치가 한 번 켜지게 함. 모션 줄이기 설정이면 애니메이션 없이 바로 켬
    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const timer = setTimeout(() => setOn(true), reduce ? 0 : 700);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="top"
            className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 pb-20 pt-16 sm:px-10 md:gap-5 lg:px-16 lg:pb-36 lg:pt-32"
        >
            <p className="text-[clamp(36px,6vw,84px)] font-light leading-[1.15] tracking-[-0.03em] text-question">
                이게 될까요?
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-9">
                <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    aria-label="될까요 스위치"
                    onClick={() => setOn((v) => !v)}
                    className={`relative h-[60px] w-[104px] flex-none cursor-pointer rounded-full transition-colors duration-300 md:h-[88px] md:w-[156px] ${
                        on ? 'bg-on' : 'bg-line-strong'
                    }`}
                >
                    <span
                        className={`absolute top-[7px] aspect-square h-[calc(100%-14px)] rounded-full bg-white shadow-[0_2px_6px_rgba(21,26,46,0.25)] transition-[left,transform] duration-300 ease-out ${
                            on ? 'left-[calc(100%-7px)] -translate-x-full' : 'left-[7px]'
                        }`}
                    />
                </button>
                <h1
                    className={`text-[clamp(72px,13vw,184px)] font-bold leading-none tracking-[-0.05em] transition-colors duration-300 ${
                        on ? 'text-ink' : 'text-[#d3d7df]'
                    }`}
                >
                    됩니다.
                </h1>
            </div>

            <p className="mt-6 max-w-[32em] text-[clamp(17px,1.5vw,20px)] text-ink-soft md:mt-10">
                프론트엔드 개발자 임인혜입니다. &ldquo;이게 될까요?&rdquo;라는 질문을 받으면 되는 방법부터 찾습니다.
                아래 네 가지 질문에 어떻게 답했는지 보여드릴게요.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
                <Link
                    href="#projects"
                    className="inline-flex min-h-13 items-center rounded-full bg-ink px-7 font-medium text-white transition-colors hover:bg-[#2a3047]"
                >
                    프로젝트 보기
                </Link>
                <Link
                    href="/contact"
                    className="inline-flex min-h-13 items-center rounded-full border-[1.5px] border-ink px-7 font-medium text-ink transition-colors hover:bg-white"
                >
                    연락하기
                </Link>
            </div>
        </section>
    );
}
