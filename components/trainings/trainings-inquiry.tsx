'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Mail, ArrowRight } from 'lucide-react'

export function TrainingsInquiry() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-6">
            Corporate Booking
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-4">
            Ready to Upskill Your Team?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            All training programs are customized to your team&apos;s current AI maturity level,
            technology stack, and business context. Reach out to discuss your requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-md text-sm hover:bg-foreground/90 transition-colors group"
            >
              <Mail size={16} />
              Send Training Inquiry
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md text-sm hover:bg-secondary transition-colors"
            >
              <MessageCircle size={16} className="text-green-400" />
              WhatsApp Us
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              'Custom curriculum design',
              'On-site or virtual delivery',
              'Team size: 10 to 500+',
              'Pre-training assessment',
              'Post-program support',
              'Certificate of completion',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                <span className="w-1 h-1 rounded-full bg-ai-blue flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
