'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Building2, Layers, TrendingUp } from 'lucide-react'

const approaches = [
  {
    icon: Building2,
    title: 'Engineering Foundations in AI',
    description: 'Modern AI systems require deep engineering maturity. Without scalable architecture, robust backend systems, and cloud infrastructure, AI initiatives fail to deliver enterprise value.',
    insight: 'AI is not magic—it\'s engineering. Production AI systems need the same architectural rigor as any enterprise platform.'
  },
  {
    icon: Layers,
    title: 'Architecture Maturity for Scalable AI',
    description: 'Scalable AI systems need distributed architecture, microservices patterns, and cloud-native infrastructure. Traditional engineering principles enable AI at enterprise scale.',
    insight: 'The same architecture patterns that scale traditional systems—microservices, event-driven design, cloud infrastructure—enable scalable AI systems.'
  },
  {
    icon: TrendingUp,
    title: 'Modern Engineering for AI-Native Organizations',
    description: 'AI-native organizations need modern engineering practices: CI/CD for ML models, LLMOps pipelines, observability for AI systems, and automated evaluation frameworks.',
    insight: 'Building AI-native systems requires evolving engineering practices—not just adding AI tools to existing processes.'
  },
  {
    icon: Lightbulb,
    title: 'Enterprise Transformation Mindset',
    description: 'Technology transformation is about people, processes, and platforms. Success requires strategic thinking, engineering leadership, and a clear path from current state to AI-native future.',
    insight: 'Transformation is a journey, not a destination. The goal is building lasting engineering capabilities, not just deploying AI models.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function TransformationApproach() {
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
            How I Approach Technology Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategic thinking and engineering leadership for organizations evolving toward AI-native systems and modern technology transformation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {approaches.map((approach) => (
            <motion.div
              key={approach.title}
              variants={itemVariants}
              className="bg-background rounded-lg p-8 border border-border hover:border-ai-blue/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-ai-blue/10 rounded-lg flex-shrink-0">
                  <approach.icon className="w-8 h-8 text-ai-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{approach.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {approach.description}
                  </p>
                  <div className="p-4 bg-ai-blue/5 rounded-lg border-l-4 border-ai-blue">
                    <p className="text-sm text-ai-blue font-medium italic">
                      "{approach.insight}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
