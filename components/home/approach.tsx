'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'AI Readiness Assessment',
    description:
      'Deep-dive into your current tech stack, data infrastructure, team capabilities, and business objectives to identify high-impact AI opportunities.',
  },
  {
    number: '02',
    title: 'Architecture Blueprint',
    description:
      'Design production-grade AI system architectures — RAG pipelines, agent frameworks, and LLMOps infrastructure tailored to your enterprise needs.',
  },
  {
    number: '03',
    title: 'Engineering & Implementation',
    description:
      'Hands-on development of AI systems alongside your team, with best practices for evaluation, observability, and AI safety built in from day one.',
  },
  {
    number: '04',
    title: 'Team Enablement & Scale',
    description:
      'Train your engineers on GenAI best practices, establish internal AI capabilities, and build a roadmap for long-term AI transformation.',
  },
]

export function Approach() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-24">
            <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
              How I Work
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              A Structured Approach to AI Transformation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every enterprise AI initiative is unique. My engagement methodology combines deep
              technical expertise with strategic thinking to deliver AI systems that actually work
              in production.
            </p>
            <div className="p-6 border border-border rounded-lg bg-surface">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                &ldquo;The goal is not to build AI for the sake of AI, but to architect intelligent
                systems that solve real business problems at enterprise scale.&rdquo;
              </p>
              <p className="text-sm font-semibold mt-4 text-foreground">— Manan Jindal</p>
            </div>
          </div>

          {/* Right — steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 py-8 border-b border-border last:border-0 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-secondary flex items-center justify-center group-hover:bg-ai-blue/20 transition-colors">
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-ai-blue transition-colors">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-ai-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
