'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
    
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-accent/10 border border-accent rounded-lg p-8 text-center"
      >
        <h3 className="text-2xl font-semibold text-accent mb-2">Thank you!</h3>
        <p className="text-secondary">
          I&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors"
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
          >
            <option value="">Select a topic...</option>
            <option value="consulting">AI Consulting & Architecture</option>
            <option value="training">Enterprise Training Programs</option>
            <option value="speaking">Speaking & Conference</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder="Tell me about your GenAI goals and current challenges..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-accent hover:bg-accent/90 disabled:opacity-50 text-background font-medium rounded-lg transition-colors"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-xs text-secondary text-center">
          I&apos;ll respond to enterprise inquiries within 24 hours. For urgent matters, call me directly.
        </p>
      </form>
    </motion.div>
  )
}
