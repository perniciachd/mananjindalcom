'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ConsultingHero() {
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
            Consulting
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
            Enterprise AI Strategy
            <br />
            &amp; <span className="gradient-text">Architecture Consulting</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Strategic AI consulting for enterprises ready to move beyond pilots and build
            production-grade AI systems that deliver measurable business outcomes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-md text-sm hover:bg-foreground/90 transition-colors group"
          >
            Schedule Discovery Call
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
