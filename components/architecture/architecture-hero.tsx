'use client'

import { motion } from 'framer-motion'

export function ArchitectureHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-ai-blue/6 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Technical Showcase
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
            Enterprise GenAI
            <br />
            <span className="gradient-text">Architecture Patterns</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Production-grade AI architecture patterns for enterprise systems — from RAG pipelines
            and multi-agent orchestration to LLMOps, AI safety, and evaluation frameworks.
            Designed for scale, reliability, and enterprise compliance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
