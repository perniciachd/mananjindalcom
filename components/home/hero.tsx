'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '3000+', label: 'Developers Mentored' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '100+', label: 'AI Systems Architected' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] rounded-full bg-ai-blue/5 blur-3xl" />
      </div>

      {/* Floating nodes — AI visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '15%', left: '8%' },
          { top: '70%', left: '5%' },
          { top: '25%', right: '6%' },
          { top: '65%', right: '10%' },
          { top: '45%', left: '15%' },
          { top: '40%', right: '18%' },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-ai-blue/60"
            style={pos as React.CSSProperties}
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
          <line x1="8%" y1="15%" x2="15%" y2="45%" stroke="oklch(0.58 0.18 255)" strokeWidth="0.5" />
          <line x1="5%" y1="70%" x2="15%" y2="45%" stroke="oklch(0.58 0.18 255)" strokeWidth="0.5" />
          <line x1="82%" y1="25%" x2="82%" y2="65%" stroke="oklch(0.58 0.18 255)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-ai-blue/30 bg-ai-blue/10 text-ai-blue text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-ai-blue animate-pulse" />
            Enterprise AI Architect &amp; Transformation Consultant
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.08] mb-6"
        >
          Enterprise GenAI{' '}
          <span className="gradient-text">Architect</span>
          {' & '}
          <br className="hidden lg:block" />
          AI Transformation{' '}
          <span className="gradient-text">Consultant</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
        >
          Helping enterprises, startups, and engineering teams build production-grade AI systems
          using Generative AI, RAG, Multi-Agent Architectures, and AI Engineering best practices.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a
            href="https://cal.com/mananjindal/training"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-md text-sm hover:bg-foreground/90 transition-colors group"
          >
            Book Corporate Training
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="https://cal.com/mananjindal/training"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-border text-foreground font-medium rounded-md text-sm hover:bg-secondary transition-colors group"
          >
            Schedule AI Strategy Call
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/trainings"
            className="inline-flex items-center gap-2 px-6 py-3 text-ai-blue font-medium text-sm hover:text-ai-blue/80 transition-colors group"
          >
            Explore AI Programs
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-border"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1 gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
