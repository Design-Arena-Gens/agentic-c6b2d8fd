import Link from 'next/link';
import type { Route } from 'next';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <section className="space-y-14">
      <header className="space-y-6">
        <motion.h1
          className="text-4xl sm:text-6xl font-medium tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Computational Neuroscience
          <span className="block font-[var(--font-garamond)] text-accent/90 italic">Research & Design</span>
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-zinc-300/90"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          I study neural dynamics, cognition, and computational models of the brain -
          crafting interpretable systems that feel as elegant as they are rigorous.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.href}
            className="group glass rounded-2xl p-6 shadow-soft hover:shadow-xl hover:shadow-black/30 transition-shadow duration-500"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={card.href} className="block">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium tracking-tight">{card.title}</h3>
                <span className="h-8 w-8 grid place-items-center rounded-full bg-white/5 text-accent/90 group-hover:bg-white/10 transition-colors">?</span>
              </div>
              <p className="text-zinc-300/90">{card.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const cards: Array<{ title: string; href: Route; desc: string }> = [
  { title: 'Research', href: '/research', desc: 'Neural dynamics, oscillations, and interpretable models.' },
  { title: 'Publications', href: '/publications', desc: 'Selected peer-reviewed work and preprints.' },
  { title: 'Projects', href: '/projects', desc: 'Simulations, tools, and interactive experiments.' },
];
