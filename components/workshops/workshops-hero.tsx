'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mic, Users, BookOpen } from 'lucide-react'

export function WorkshopsHero() {
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
            Speaking &amp; Workshops
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
            Conference Keynotes,
            <br />
            <span className="gradient-text">Workshops &amp; Enterprise Sessions</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Engaging, technically rigorous AI presentations designed for technology conferences,
            enterprise leadership forums, and engineering teams looking to accelerate their AI
            transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://cal.com/mananjindal/training"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-md text-sm hover:bg-foreground/90 transition-colors group"
            >
              Request Speaking Engagement
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { icon: Mic, label: 'Conference Keynotes' },
              { icon: Users, label: 'Enterprise Workshops' },
              { icon: BookOpen, label: 'Panel Discussions' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon size={16} className="text-ai-blue" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
