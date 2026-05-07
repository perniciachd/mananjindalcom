'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const workshops = [
  {
    id: 1,
    title: 'Prompt Engineering Mastery',
    description: 'Learn advanced techniques for crafting effective prompts that unlock LLM potential.',
    duration: '2 days',
    audience: 'Developers, Product Managers',
    topics: ['Prompt Design', 'Few-shot Learning', 'Chain-of-Thought'],
  },
  {
    id: 2,
    title: 'Building Production RAG Systems',
    description: 'Design and deploy retrieval-augmented generation systems at scale.',
    duration: '3 days',
    audience: 'Engineers, Architects',
    topics: ['Vector Databases', 'Retrieval Optimization', 'Production Patterns'],
  },
  {
    id: 3,
    title: 'AI Agent Development Workshop',
    description: 'Create autonomous agents that can reason, plan, and execute complex tasks.',
    duration: '3 days',
    audience: 'Senior Engineers, Architects',
    topics: ['Agent Architecture', 'Tool Integration', 'Safety & Reliability'],
  },
  {
    id: 4,
    title: 'LLM Fine-Tuning & Adaptation',
    description: 'Customize language models for domain-specific tasks and improve performance.',
    duration: '2 days',
    audience: 'ML Engineers, Data Scientists',
    topics: ['Fine-tuning Techniques', 'Domain Adaptation', 'Evaluation Metrics'],
  },
  {
    id: 5,
    title: 'Secure GenAI Implementation',
    description: 'Implement security, privacy, and compliance controls for production AI systems.',
    duration: '2 days',
    audience: 'Security Engineers, CTOs',
    topics: ['Prompt Injection Prevention', 'Data Privacy', 'Compliance'],
  },
  {
    id: 6,
    title: 'GenAI Product Strategy',
    description: 'Navigate AI product development from strategy through launch and scaling.',
    duration: '1 day',
    audience: 'Product Leaders, Founders',
    topics: ['AI Product Principles', 'User Experience', 'Go-to-Market Strategy'],
  },
]

export function WorkshopsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workshops.map((workshop) => (
            <motion.div key={workshop.id} variants={itemVariants}>
              <div className="bg-surface-secondary border border-border rounded-lg p-6 h-full flex flex-col hover:border-accent transition-colors group cursor-pointer">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {workshop.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{workshop.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Duration</p>
                      <p className="text-sm text-foreground">{workshop.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Best For</p>
                      <p className="text-sm text-foreground">{workshop.audience}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Topics Covered</p>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <button className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-2 group/btn">
                    Learn More
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
