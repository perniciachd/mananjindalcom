'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const categories = [
  'All', 'GenAI Architecture', 'RAG Systems', 'AI Agents', 'LLMOps',
  'Enterprise AI', 'AI Strategy', 'AI Safety',
]

export function InsightsHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-2">
                Thought Leadership
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                AI Insights &amp; Articles
              </h1>
            </div>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-ai-blue/50 transition-colors"
            >
              Follow on Medium <ExternalLink size={12} />
            </a>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Deep dives into enterprise AI architecture, GenAI engineering patterns, LLMOps, and
            practical AI transformation insights — written for engineering leaders and enterprise
            AI practitioners.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                  i === 0
                    ? 'border-ai-blue/50 bg-ai-blue/10 text-ai-blue'
                    : 'border-border text-muted-foreground hover:border-ai-blue/30 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
