import { motion } from 'framer-motion';

export default function PublicationsPage() {
  const pubs = [
    {
      title: 'A. Researcher*, B. Collaborator* (2025). Interpretable Latent Dynamics in Prefrontal Cortex.',
      venue: 'NeurIPS',
      link: '#'
    },
    {
      title: 'A. Researcher (2024). Cross-Frequency Coupling Predicts Working Memory Variability.',
      venue: 'Nature Communications',
      link: '#'
    },
    {
      title: 'A. Researcher, C. Collaborator (2023). Emergent Computation in Recurrent Microcircuits.',
      venue: 'ICLR',
      link: '#'
    }
  ];

  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-medium tracking-tight">Publications</h1>
        <p className="text-zinc-300/90 max-w-2xl">Selected peer-reviewed work and preprints. A full list is available upon request.</p>
      </header>
      <ul className="space-y-4">
        {pubs.map((p, i) => (
          <motion.li
            key={p.title}
            className="glass rounded-2xl p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="leading-relaxed">{p.title}</p>
                <p className="text-accent/90 mt-1">{p.venue}</p>
              </div>
              <a href={p.link} className="text-zinc-300/90 hover:text-white focus-ring px-3 py-1.5 rounded-xl">PDF</a>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
