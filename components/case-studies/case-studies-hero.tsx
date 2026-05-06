'use client'

import { motion } from 'framer-motion'

export function CaseStudiesHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Impact
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            Enterprise AI <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Real-world AI system architectures and transformation initiatives across
            industries — from fintech to government. Each case study illustrates how
            production-grade AI delivers measurable business outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
