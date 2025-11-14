import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'NeuroFlow',
      desc: 'Interactive simulation of coupled oscillators for teaching CFC concepts.',
      link: '#'
    },
    {
      title: 'Cortex-LVM',
      desc: 'Latent variable modeling toolkit for neural population analysis.',
      link: '#'
    },
    {
      title: 'Synapse Sketches',
      desc: 'Minimal visual notebooks exploring microcircuit motifs.',
      link: '#'
    }
  ];

  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-medium tracking-tight">Projects</h1>
        <p className="text-zinc-300/90 max-w-2xl">Tools and experiments that translate neuroscience into approachable, elegant interfaces.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            className="group glass rounded-2xl p-6 block"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl tracking-tight">{p.title}</h3>
              <span className="text-accent/90 opacity-0 group-hover:opacity-100 transition-opacity">?</span>
            </div>
            <p className="text-zinc-300/90 mt-2">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
