'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    period: '2011 – 2015',
    title: 'Engineering Foundations',
    description:
      'Began career in software engineering, building full-stack applications for early-stage startups and mid-sized enterprises. Developed deep expertise in software architecture and agile development methodologies.',
    tags: ['Full-Stack', 'Architecture', 'Agile'],
  },
  {
    period: '2015 – 2019',
    title: 'Enterprise & MNC Experience',
    description:
      'Led engineering initiatives at large MNCs and US/Singapore clients. Architected and delivered mission-critical enterprise systems, managing cross-functional teams and driving technical strategy.',
    tags: ['Enterprise', 'Tech Leadership', 'US Clients', 'Singapore'],
  },
  {
    period: '2019 – 2023',
    title: 'Engineering Leadership & Mentoring',
    description:
      'Grew into senior engineering leadership, overseeing multiple product lines and teams. Started formal mentoring programs, training and upskilling 1000+ developers across organizations.',
    tags: ['Leadership', 'Mentoring', 'Product Engineering'],
  },
  {
    period: '2023 – 2025',
    title: 'Government & Startup Ecosystems',
    description:
      'Extended experience to government digital transformation initiatives and high-growth startups. Built applications from scratch, led technical due diligence, and scaled engineering teams rapidly.',
    tags: ['Government', 'Startups', 'Digital Transformation'],
  },
  {
    period: '2025 – 2026',
    title: 'Deep AI Transition',
    description:
      'Committed fully to Generative AI — immersing in LLM architectures, RAG systems, multi-agent frameworks, prompt engineering, and AI evaluation methodologies. Developed enterprise AI programs.',
    tags: ['GenAI', 'LLMs', 'RAG', 'Multi-Agent'],
  },
  {
    period: '2026 – Present',
    title: 'Enterprise GenAI Architect & AI Consultant',
    description:
      'Now working with CTOs, engineering leaders, and enterprises globally to design AI strategies, architect production AI systems, deliver corporate GenAI training, and build lasting AI capabilities.',
    tags: ['AI Architecture', 'Consulting', 'Enterprise AI', '3000+ Mentored'],
  },
]

export function Timeline() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Career Journey
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            15+ Years of Engineering Excellence
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-8 group pb-12 last:pb-0"
              >
                {/* Dot */}
                <div className="flex-shrink-0 relative z-10 hidden md:flex">
                  <div className="w-10 h-10 rounded-full border-2 border-border bg-background flex items-center justify-center group-hover:border-ai-blue transition-colors">
                    <div className="w-2 h-2 rounded-full bg-ai-blue/50 group-hover:bg-ai-blue transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-0">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="font-mono text-xs text-ai-blue tracking-wide border border-ai-blue/30 px-2 py-1 rounded">
                      {m.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-ai-blue transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {m.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
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
