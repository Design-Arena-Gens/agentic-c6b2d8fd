import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-medium tracking-tight">About</h1>
        <p className="text-zinc-300/90 max-w-2xl">Computational neuroscientist focused on interpretable models and elegant scientific communication.</p>
      </header>

      <motion.div
        className="glass rounded-2xl p-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-zinc-300/90 leading-relaxed">
          My work explores how coherent dynamics emerge from local interactions and how these can be
          mapped into interpretable computational systems. I build tools, models, and interfaces to
          make complex ideas feel intuitive without sacrificing rigor.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a className="focus-ring rounded-xl px-3 py-2 text-zinc-300/90 hover:text-white" href="#">Email</a>
          <a className="focus-ring rounded-xl px-3 py-2 text-zinc-300/90 hover:text-white" href="#">Scholar</a>
        </div>
      </motion.div>
    </section>
  );
}
