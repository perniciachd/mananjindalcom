'use client'

import { motion } from 'framer-motion'
import { Brain, Network, Target, Cpu, BarChart3, Shield, GitBranch, Zap } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    desc: 'Develop comprehensive AI strategies aligned with business objectives. Includes opportunity identification, prioritization frameworks, and build vs. buy analysis.',
  },
  {
    icon: Network,
    title: 'Enterprise AI Architecture',
    desc: 'Design scalable AI system architectures for enterprise environments — covering data pipelines, model serving, integration patterns, and security considerations.',
  },
  {
    icon: GitBranch,
    title: 'GenAI Product Development',
    desc: 'End-to-end guidance on building AI-first products — from concept validation to production deployment, with evaluation loops and user feedback mechanisms.',
  },
  {
    icon: Target,
    title: 'RAG Architecture Design',
    desc: 'Design and implement enterprise knowledge retrieval systems using RAG patterns. Covers chunking strategies, embedding selection, hybrid search, and re-ranking.',
  },
  {
    icon: Cpu,
    title: 'AI Agent Systems',
    desc: 'Architect multi-agent systems for complex enterprise workflows — autonomous agents, tool integration, human-in-the-loop patterns, and agent evaluation.',
  },
  {
    icon: BarChart3,
    title: 'AI Team Enablement',
    desc: 'Build internal AI engineering capabilities across your teams. Includes capability assessment, hiring guidance, process design, and upskilling programs.',
  },
  {
    icon: Zap,
    title: 'AI Workflow Automation',
    desc: 'Identify and automate high-value business workflows using AI. Document processing, support automation, data extraction, and intelligent routing systems.',
  },
  {
    icon: Shield,
    title: 'AI Transformation Roadmaps',
    desc: 'Create detailed 6–18 month AI transformation roadmaps with prioritized initiatives, resource requirements, risk mitigation, and milestone-based execution plans.',
  },
]

export function ConsultingServices() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            Consulting Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-background hover:bg-surface transition-colors p-6 group"
              >
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center mb-4 group-hover:bg-ai-blue/20 transition-colors">
                  <Icon size={18} className="text-muted-foreground group-hover:text-ai-blue transition-colors" />
                </div>
                <h3 className="font-semibold text-sm mb-3 group-hover:text-ai-blue transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
