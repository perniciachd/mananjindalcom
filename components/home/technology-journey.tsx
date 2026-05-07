'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'

const journeyPhases = [
  {
    phase: 'Phase 1',
    title: 'Enterprise Engineering Foundations',
    period: '2011 – 2015',
    description: 'Built deep expertise in software engineering, full-stack development, and enterprise systems. Focused on scalable architecture patterns and engineering best practices.',
    highlights: [
      'Full-stack development across enterprise applications',
      'Engineering architecture and system design',
      'Scalable backend platforms and database systems',
      'Enterprise integration patterns'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Cloud & Scalable Systems',
    period: '2015 – 2019',
    description: 'Architected cloud-native infrastructure and scalable distributed systems. Specialized in AWS, DevOps, and modern deployment strategies.',
    highlights: [
      'AWS Solution Architecture and cloud migration',
      'CI/CD pipelines and DevOps automation',
      'Microservices and distributed systems',
      'Scalable infrastructure design'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Architecture & Product Engineering',
    period: '2019 – 2023',
    description: 'Led enterprise architecture initiatives and product engineering programs. Focused on system design, product strategy, and engineering leadership.',
    highlights: [
      'Enterprise architecture and system design',
      'Product engineering and technical strategy',
      'Engineering team leadership and mentorship',
      'Technology transformation programs'
    ]
  },
  {
    phase: 'Phase 4',
    title: 'Enterprise AI & Intelligent Systems',
    period: '2023 – Present',
    description: 'Evolved expertise toward Enterprise AI, Generative AI, and intelligent systems. Helping organizations build AI-native systems and modern technology transformation.',
    highlights: [
      'Generative AI architecture and RAG systems',
      'AI Agents and Multi-Agent Systems',
      'AI Architecture and AI Engineering',
      'LLMOps and Enterprise AI Transformation'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function TechnologyJourney() {
  return (
    <section className="py-24 lg:py-32 border-b border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technology Transformation Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From enterprise engineering foundations to AI-native systems — 15+ years of strategic evolution in technology and architecture.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ai-blue/50 via-ai-blue to-ai-blue/50 transform -translate-x-1/2 hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {journeyPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-ai-blue rounded-full items-center justify-center z-10">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>

                <div className="flex-1">
                  <div className="bg-background rounded-lg p-8 border border-border hover:border-ai-blue/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-ai-blue/10 text-ai-blue text-sm font-semibold rounded-full">
                        {phase.phase}
                      </span>
                      <span className="text-sm text-muted-foreground">{phase.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    <ul className="space-y-2">
                      {phase.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 text-ai-blue flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
