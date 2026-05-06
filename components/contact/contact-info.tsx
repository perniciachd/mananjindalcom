'use client'

import { motion } from 'framer-motion'

export function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
          Email
        </h3>
        <a
          href="mailto:manan.jindal@gmail.com"
          className="text-lg text-accent hover:text-accent/80 transition-colors break-all"
        >
          manan.jindal@gmail.com
        </a>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
          Phone
        </h3>
        <a
          href="tel:+919501565955"
          className="text-lg text-accent hover:text-accent/80 transition-colors"
        >
          +91-9501-5659-55
        </a>
        <p className="text-sm text-secondary mt-1">WhatsApp: +91-9501-5659-55</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">
          Connect
        </h3>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="https://wa.me/919501565955"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="pt-8 border-t border-border">
        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
          Response Time
        </h3>
        <p className="text-sm text-secondary leading-relaxed">
          Enterprise consulting inquiries: <span className="text-accent font-medium">24 hours</span>
          <br />
          Training program requests: <span className="text-accent font-medium">48 hours</span>
          <br />
          Speaking engagements: <span className="text-accent font-medium">3 business days</span>
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="pt-8 border-t border-border">
        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
          Timezone
        </h3>
        <p className="text-sm text-secondary">
          Pacific Time (PT) / GMT-8 (or GMT-7 during DST)
        </p>
      </motion.div>
    </motion.div>
  )
}
