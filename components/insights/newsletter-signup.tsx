'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function NewsletterSignup() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Stay Updated
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Get AI Insights in Your Inbox
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Enterprise AI architecture insights, GenAI engineering tutorials, and strategic AI
            perspectives — delivered monthly. No noise, only depth.
          </p>

          <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@company.com"
              className="flex-1 px-4 py-3 text-sm bg-surface border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ai-blue/50 transition-colors"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-ai-blue text-white rounded-md text-sm font-medium hover:bg-ai-blue/90 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  )
}
