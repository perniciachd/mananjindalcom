'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-surface-secondary to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Let&apos;s Transform Your Enterprise
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Whether you&apos;re exploring GenAI possibilities or ready to implement a full-scale transformation, 
            I&apos;m here to guide you through every step.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
