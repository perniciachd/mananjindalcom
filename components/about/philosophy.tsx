'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const principles = [
  {
    title: 'Architecture Before Implementation',
    body: 'Great AI systems are designed before they are built. Every production AI system requires deliberate architecture decisions around retrieval, context management, agent design, and evaluation.',
  },
  {
    title: 'Enterprise Context Matters',
    body: 'AI systems for enterprises are fundamentally different from research demos. Security, compliance, scalability, and integration with existing systems are not afterthoughts — they define the architecture.',
  },
  {
    title: 'Enablement Over Dependency',
    body: 'The goal of consulting is not to create dependency — it is to build internal capabilities. Every engagement is designed to leave your team more capable than when we started.',
  },
  {
    title: 'Measurable Business Outcomes',
    body: 'AI investments must justify themselves through business outcomes. Every AI system I architect is designed with clear success metrics, evaluation frameworks, and ROI visibility built in.',
  },
]

export function Philosophy() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
              Guiding Principles
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6">
              Philosophy of Enterprise AI
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              After 15 years of engineering and 3 years of intensive AI architecture work, these
              are the principles that guide every project, training program, and consulting
              engagement.
            </p>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 text-sm text-ai-blue font-medium hover:gap-3 transition-all"
            >
              View Consulting Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-ai-blue mt-0.5">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
