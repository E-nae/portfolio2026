'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ToggleMark } from '@/shared/ui';

const links = [
  { href: '/#projects', label: '프로젝트' },
  { href: '/#about', label: '소개' },
  { href: '/contact', label: '연락하기' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-10 lg:px-16">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-2.5 text-xl font-bold tracking-tight text-ink"
      >
        <ToggleMark size="sm" />
        Enaeble
      </Link>
      <nav aria-label="주요 메뉴" className="flex gap-1 text-[15px] font-medium">
        {links.map(({ href, label }) => {
          const current = href === pathname;
          return (
            <Link
              key={href}
              href={href}
              aria-current={current ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center px-3.5 text-ink transition-colors hover:text-on ${
                current ? 'underline decoration-2 underline-offset-[6px]' : ''
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
