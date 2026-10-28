import Image from 'next/image';
import { ToggleMark } from '@/shared/ui';
import type { Project } from '../model/types';

const outlineButton =
    'inline-flex min-h-11 items-center rounded-full border-[1.5px] border-line-strong px-5 text-[15px] font-medium text-ink transition-colors hover:border-ink';

export default function ProjectCard({ project }: { project: Project }) {
    const { question, title, description, role, period, tags, image, imageAlt, demoUrl, codeLinks } = project;

    return (
        <article className="flex flex-wrap items-center gap-8 border-t border-line py-12 md:gap-[clamp(32px,5vw,72px)] md:py-[clamp(48px,6vw,88px)]">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px]">
                <p className="text-[clamp(24px,2.5vw,34px)] font-light leading-[1.4] tracking-[-0.02em] text-question">
                    {question}
                </p>
                <div className="flex items-center gap-3.5">
                    <ToggleMark />
                    <p className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.2] tracking-[-0.03em]">됩니다.</p>
                </div>
                <h3 className="mt-2 text-xl font-medium">{title}</h3>
                <p className="max-w-[34em] text-[17px] leading-[1.8] text-ink-soft">{description}</p>

                {(role || period) && (
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[15px]">
                        {role && (
                            <>
                                <dt className="text-muted">역할</dt>
                                <dd>{role}</dd>
                            </>
                        )}
                        {period && (
                            <>
                                <dt className="text-muted">기간</dt>
                                <dd>{period}</dd>
                            </>
                        )}
                    </dl>
                )}

                <ul aria-label="사용 기술" className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <li key={tag} className="rounded-md bg-chip px-2.5 py-1 text-sm text-ink-soft">
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className="mt-1.5 flex flex-wrap gap-2.5">
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-[15px] font-medium text-white transition-colors hover:bg-[#2a3047]"
                    >
                        데모 열기
                    </a>
                    {codeLinks.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            <figure className="relative aspect-[16/10] min-w-0 flex-[1_1_520px] overflow-hidden rounded-xl border border-line bg-white">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-left-top"
                />
            </figure>
        </article>
    );
}
