'use client'

import { motion } from 'framer-motion'

export function WorkshopsCTA() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Level Up Your Team?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss which workshop best fits your organization&apos;s goals and current skill level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-medium">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border border-border text-foreground hover:bg-surface-secondary transition-colors rounded-lg font-medium">
              View Full Curriculum
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
