"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Magnetic from './Magnetic';

const links = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-5xl px-6 py-5">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-medium tracking-tight focus-ring">
            <span className="text-zinc-100">Neural</span>
            <span className="text-accent/90">?</span>
            <span className="text-zinc-300">Portfolio</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Magnetic key={l.href} className="">
                  <Link
                    href={l.href}
                    className={`relative px-3 py-1.5 rounded-xl focus-ring transition-colors ${active ? 'text-accent' : 'text-zinc-300/90 hover:text-white'}`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute left-2 right-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                    )}
                  </Link>
                </Magnetic>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
