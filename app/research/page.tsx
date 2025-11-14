import { motion } from 'framer-motion';

export default function ResearchPage() {
  const items = [
    {
      title: 'Neural Oscillations and Cognitive Control',
      desc: 'Modeling cross-frequency coupling and its role in working memory dynamics.'
    },
    {
      title: 'Interpretable Deep Neural Population Models',
      desc: 'Bridging latent variable models with biologically-plausible architectures.'
    },
    {
      title: 'Cortical Microcircuits and Emergent Computation',
      desc: 'Simulating recurrent motifs to replicate decision-making and attention.'
    },
  ];

  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-medium tracking-tight">Research</h1>
        <p className="text-zinc-300/90 max-w-2xl">Selected directions exploring dynamics, representation, and interpretable computation in the brain.</p>
      </header>

      <div className="space-y-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            className="glass rounded-2xl p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl mb-1.5 tracking-tight">{it.title}</h3>
            <p className="text-zinc-300/90">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
