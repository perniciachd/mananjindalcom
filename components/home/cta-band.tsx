'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'

export function CTABand() {
  return (
    <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-ai-blue/8 blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-6">
            Ready to Transform?
          </p>
          <h2 className="text-3xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
            {"Let's Build Your Enterprise"}
            <br />
            <span className="gradient-text">AI Transformation Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Whether you need AI architecture consulting, corporate GenAI training, or hands-on
            implementation support — {"let's"} design the right AI strategy for your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/mananjindal/training"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-md text-sm hover:bg-foreground/90 transition-colors group"
            >
              <Calendar size={16} />
              Schedule AI Strategy Call
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-md text-sm hover:bg-secondary transition-colors group"
            >
              <MessageCircle size={16} className="text-green-400" />
              WhatsApp Inquiry
            </a>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Typically responds within 24 hours &middot; Free initial consultation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
