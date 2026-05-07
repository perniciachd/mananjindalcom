'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Layers,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const expertiseCategories = [
  {
    icon: Code,
    title: 'Modern Frontend Engineering',
    description: 'Designing scalable, user-centric enterprise interfaces and modern frontend architectures.',
    topics: [
      'React & Next.js Architecture',
      'Angular Enterprise Systems',
      'Frontend Architecture Patterns',
      'UX & Usability Engineering',
      'Enterprise UI Systems',
      'UAT Best Practices'
    ]
  },
  {
    icon: Database,
    title: 'Enterprise Backend Engineering',
    description: 'Building scalable enterprise backend systems and resilient distributed architectures.',
    topics: [
      'Java & Microservices',
      'Distributed Systems',
      'API Architecture Design',
      'Scalable Backend Platforms',
      'System Design Patterns',
      'Enterprise Integration'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure Engineering',
    description: 'Architecting cloud-native infrastructure and scalable engineering platforms.',
    topics: [
      'AWS Solution Architecture',
      'Cloud Architecture Design',
      'CI/CD & DevOps',
      'Scalable Deployment Systems',
      'Infrastructure as Code',
      'Cloud Migration Strategies'
    ]
  },
  {
    icon: Layers,
    title: 'Data & Scalability',
    description: 'Engineering high-performance data systems and scalable enterprise architectures.',
    topics: [
      'SQL & NoSQL Design',
      'Database Architecture',
      'Performance Engineering',
      'Scalability Patterns',
      'Data Pipeline Design',
      'Caching Strategies'
    ]
  },
  {
    icon: Cpu,
    title: 'Enterprise AI & Intelligent Systems',
    description: 'Helping organizations build production-grade AI-native systems and intelligent enterprise workflows.',
    topics: [
      'Generative AI Architecture',
      'RAG Systems Design',
      'AI Agents & Multi-Agent Systems',
      'AI Engineering & LLMOps',
      'Enterprise AI Transformation',
      'AI-Native System Design'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function EnterpriseExpertise() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Engineering & AI Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            15+ years of enterprise engineering expertise powering scalable AI systems and modern digital transformation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`group relative bg-surface rounded-lg p-8 border border-border hover:border-ai-blue/50 transition-all duration-300 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-ai-blue/10 rounded-lg group-hover:bg-ai-blue/20 transition-colors">
                  <category.icon className="w-6 h-6 text-ai-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mt-6">
                {category.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-ai-blue flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/trainings"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ai-blue text-white rounded-lg font-semibold hover:bg-ai-blue/90 transition-colors"
          >
            Explore Enterprise Programs
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
