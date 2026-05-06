'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Clock, Award } from 'lucide-react'

export function TrainingsHero() {
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
            Corporate Programs
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
            Enterprise AI Upskilling &amp;
            <br />
            <span className="gradient-text">GenAI Engineering Programs</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Structured, hands-on AI training programs designed for engineering teams, tech
            leaders, and organizations embarking on AI transformation. From foundations to
            advanced production AI engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-md text-sm hover:bg-foreground/90 transition-colors group"
            >
              Request Corporate Training
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="#flagship"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md text-sm hover:bg-secondary transition-colors"
            >
              View 5-Day Program
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { icon: Users, label: '3000+ Developers Trained' },
              { icon: Clock, label: 'Flexible Delivery Formats' },
              { icon: Award, label: 'Certificate of Completion' },
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
