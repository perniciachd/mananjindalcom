'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Manan helped us architect and deploy a production RAG system that reduced our support ticket resolution time by 60%. His technical depth and strategic clarity are exceptional.',
    name: 'VP Engineering',
    company: 'Series B Fintech Startup',
    sector: 'Fintech',
  },
  {
    quote:
      'The GenAI training program Manan designed for our 200-person engineering team was transformative. The hands-on approach and enterprise focus made the difference.',
    name: 'Head of L&D',
    company: 'Global Technology MNC',
    sector: 'Enterprise Tech',
  },
  {
    quote:
      'Manan brings rare combination of deep AI architecture expertise and enterprise consulting experience. He designed our entire multi-agent AI system from ground up.',
    name: 'CTO',
    company: 'Government Digital Initiative',
    sector: 'Government',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Client Outcomes
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            What Leaders Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 border border-border rounded-lg bg-surface flex flex-col gap-6 hover:border-ai-blue/30 transition-colors"
            >
              <Quote size={24} className="text-ai-blue/40" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
                <span className="mt-2 inline-block text-xs font-mono px-2 py-0.5 rounded border border-ai-blue/30 text-ai-blue">
                  {t.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
