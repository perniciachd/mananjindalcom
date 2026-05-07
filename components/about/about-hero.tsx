'use client'

import { motion } from 'framer-motion'
import { MapPin, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const highlights = [
  '15+ Years Enterprise Engineering & AI',
  'Full-Stack, Cloud & Architecture Expertise',
  '3000+ Engineers Trained & Mentored',
  'Enterprise AI & Systems Transformation',
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
              Over the past 15+ years, Manan Jindal has worked across enterprise engineering,
              full-stack development, cloud systems, architecture, usability engineering, and
              scalable backend platforms — evolving toward modern Enterprise AI and intelligent
              systems architecture.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <MapPin size={14} className="text-ai-blue" />
              India &middot; Serving Global Enterprises
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/mananjindal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-ai-blue/50 transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="https://twitter.com/MananJindal18"
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
                ecosystems, Manan built deep expertise in full-stack development, enterprise
                backend systems, cloud architecture, and scalable platforms. Over a decade and a
                half, he led critical product initiatives, mentored thousands of engineers, and
                architected systems across diverse technology stacks.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                His evolution toward Enterprise AI was a natural progression — applying deep
                engineering maturity to Generative AI, RAG systems, multi-agent architectures,
                and LLMOps — positioning him as a leader in AI-native system transformation.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Today, Manan works at the executive level with CTOs, engineering leaders, and
                innovation teams to design technology strategies, architect production systems,
                and enable organizations to build lasting engineering and AI capabilities.
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
