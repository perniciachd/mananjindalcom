'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: '60-minute free consultation to understand your business context, AI maturity, current challenges, and transformation goals.',
    duration: '60 min',
  },
  {
    step: '02',
    title: 'AI Readiness Assessment',
    desc: 'Deep-dive assessment of your data infrastructure, team capabilities, existing systems, and business processes to identify AI opportunities.',
    duration: '1–2 weeks',
  },
  {
    step: '03',
    title: 'Strategy & Architecture Blueprint',
    desc: 'Detailed AI strategy document and system architecture blueprint covering prioritized initiatives, technical design, and implementation roadmap.',
    duration: '2–3 weeks',
  },
  {
    step: '04',
    title: 'Implementation Support',
    desc: 'Hands-on technical guidance during implementation — architecture reviews, code reviews, team mentoring, and problem-solving.',
    duration: 'Ongoing',
  },
  {
    step: '05',
    title: 'Enablement & Handover',
    desc: 'Structured knowledge transfer to your team, documentation of AI systems, and establishment of internal AI governance processes.',
    duration: '2–4 weeks',
  },
]

const engagementTypes = [
  {
    title: 'Advisory Retainer',
    desc: 'Ongoing strategic AI advisory on a monthly retainer. Includes weekly check-ins, async Q&A, architecture reviews, and priority access.',
    best: 'Best for: Organizations in active AI transformation',
  },
  {
    title: 'Project Engagement',
    desc: 'Fixed-scope project engagement for specific AI initiatives — RAG system design, agent architecture, AI strategy, or team enablement.',
    best: 'Best for: Specific AI system builds or assessments',
  },
  {
    title: 'Fractional AI CTO',
    desc: 'Part-time strategic AI leadership for startups or enterprises without an AI-focused technical leader. Includes team leadership and stakeholder management.',
    best: 'Best for: Startups scaling AI capabilities',
  },
]

export function EngagementModel() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            How We Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-4">
            Engagement Process
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            A structured, outcome-focused consulting process designed to minimize risk and
            maximize the speed of AI value delivery.
          </p>
        </div>

        {/* Process */}
        <div className="grid lg:grid-cols-5 gap-px bg-border mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background hover:bg-surface transition-colors p-6 group"
            >
              <div className="font-mono text-xs text-ai-blue mb-3">{s.step}</div>
              <div className="text-xs font-mono text-muted-foreground mb-3 px-2 py-0.5 border border-border rounded inline-block">
                {s.duration}
              </div>
              <h3 className="font-semibold text-sm mb-3 group-hover:text-ai-blue transition-colors">
                {s.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Engagement types */}
        <div className="grid md:grid-cols-3 gap-6">
          {engagementTypes.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors"
            >
              <h3 className="font-semibold mb-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{e.desc}</p>
              <p className="text-xs text-ai-blue">{e.best}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ai-blue text-white font-semibold rounded-md text-sm hover:bg-ai-blue/90 transition-colors group"
          >
            Schedule Discovery Call
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
