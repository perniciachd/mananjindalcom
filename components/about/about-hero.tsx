'use client'

import { motion } from 'framer-motion'
import { MapPin, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const highlights = [
  '15+ Years in Software Engineering & AI',
  'Enterprise, Startup & Government Experience',
  '3000+ Developers Trained & Mentored',
  'Generative AI & Multi-Agent Architecture Specialist',
]

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-ai-blue/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
              About Manan
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
              Engineering Leader.
              <br />
              <span className="gradient-text">AI Architect.</span>
              <br />
              Transformation Catalyst.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With over 15 years at the intersection of software engineering, enterprise
              architecture, and AI, Manan Jindal has spent his career building systems that matter —
              and now leads organizations into the era of Generative AI.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <MapPin size={14} className="text-ai-blue" />
              India &middot; Serving Global Enterprises
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-ai-blue/50 transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-ai-blue/50 transition-colors"
              >
                <Twitter size={14} /> Twitter
              </a>
              <a
                href="https://cal.com/mananjindal/training"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-ai-blue text-white rounded-md text-sm font-medium hover:bg-ai-blue/90 transition-colors"
              >
                Book a Call
              </a>
            </div>
          </motion.div>

          {/* Highlights panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="p-8 border border-border rounded-lg bg-surface">
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Starting as a software engineer working across MNCs, startups, and government
                ecosystems, Manan built a reputation for engineering excellence and technical
                leadership. Over a decade and a half, he led critical product initiatives, mentored
                hundreds of engineers, and architected systems across diverse technology stacks.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                His deep transition into Generative AI was deliberate and comprehensive — immersing
                in LLM architectures, RAG systems, multi-agent frameworks, and LLMOps — to emerge
                as one of the leading voices in enterprise AI transformation.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Today, Manan works at the executive level with CTOs, engineering leaders, and
                innovation teams to design AI strategies, architect production AI systems, and
                enable organizations to build lasting internal AI capabilities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h}
                  className="p-4 border border-border rounded-md bg-surface text-xs text-muted-foreground leading-relaxed"
                >
                  <span className="text-ai-blue mr-2">→</span>
                  {h}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
