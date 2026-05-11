'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    number: '01',
    title: 'AI Readiness',
    items: ['Data infrastructure audit', 'Team capability assessment', 'Technology stack review', 'Compliance mapping'],
  },
  {
    number: '02',
    title: 'Strategy Design',
    items: ['AI use case prioritization', 'ROI modeling', 'Build vs buy analysis', 'Risk assessment'],
  },
  {
    number: '03',
    title: 'Architecture',
    items: ['System design', 'Data pipelines', 'Model selection', 'Integration patterns'],
  },
  {
    number: '04',
    title: 'Implementation',
    items: ['PoC development', 'Production engineering', 'Testing & evaluation', 'Safety & governance'],
  },
  {
    number: '05',
    title: 'Scale & Operate',
    items: ['LLMOps setup', 'Monitoring', 'Team enablement', 'Responsible AI & AI Governance', 'Continuous improvement'],
  },
]

export function TransformationFramework() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Framework
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-4">
            Enterprise AI Transformation Framework
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A proven five-pillar framework for enterprise AI transformation, developed through
            engagements across startups, MNCs, and government organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border rounded-lg overflow-hidden">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background hover:bg-surface transition-colors p-8 group"
            >
              <div className="font-mono text-2xl text-ai-blue/30 font-bold mb-4">{p.number}</div>
              <h3 className="font-semibold text-lg mb-4 group-hover:text-ai-blue transition-colors">
                {p.title}
              </h3>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-ai-blue/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
