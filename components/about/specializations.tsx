'use client'

import { motion } from 'framer-motion'
import { Brain, Network, BookOpen, Target, Shield, Cpu } from 'lucide-react'

const specs = [
  {
    icon: Brain,
    title: 'Generative AI Systems',
    skills: ['LLMs', 'Prompt Engineering', 'Fine-tuning', 'Evaluation', 'AI Safety'],
  },
  {
    icon: Network,
    title: 'RAG Architecture',
    skills: ['Vector DBs', 'Chunking Strategies', 'Retrieval Pipelines', 'Hybrid Search', 'Re-ranking'],
  },
  {
    icon: Cpu,
    title: 'Multi-Agent Systems',
    skills: ['LangGraph', 'AutoGen', 'CrewAI', 'Agent Orchestration', 'Tool Use'],
  },
  {
    icon: Target,
    title: 'LLMOps & Deployment',
    skills: ['MLflow', 'LangSmith', 'Monitoring', 'CI/CD for AI', 'Observability'],
  },
  {
    icon: BookOpen,
    title: 'Enterprise AI Training',
    skills: ['Curriculum Design', 'Hands-on Labs', 'Corporate Programs', 'Bootcamps', 'Workshops'],
  },
  {
    icon: Shield,
    title: 'AI Strategy & Governance',
    skills: ['AI Roadmaps', 'Risk Frameworks', 'Responsible AI', 'ROI Assessment', 'Change Management'],
  },
]

export function Specializations() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Core Expertise
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            Specialization Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, i) => {
            const Icon = spec.icon
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center mb-4 group-hover:bg-ai-blue/20 transition-colors">
                  <Icon size={18} className="text-muted-foreground group-hover:text-ai-blue transition-colors" />
                </div>
                <h3 className="font-semibold mb-3 group-hover:text-ai-blue transition-colors">
                  {spec.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {spec.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
