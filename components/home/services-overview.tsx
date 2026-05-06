'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Network, GraduationCap, BarChart3, Cpu, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Enterprise AI Consulting',
    description:
      'Strategic AI transformation roadmaps, architecture assessments, and GenAI system design for enterprise organizations.',
    href: '/consulting',
    tag: 'Strategy',
  },
  {
    icon: Network,
    title: 'GenAI Architecture',
    description:
      'Production-grade RAG systems, multi-agent pipelines, LLMOps, and scalable AI infrastructure design.',
    href: '/architecture',
    tag: 'Architecture',
  },
  {
    icon: GraduationCap,
    title: 'Corporate AI Training',
    description:
      'Intensive AI upskilling programs for engineering teams — from foundations to advanced GenAI engineering.',
    href: '/trainings',
    tag: 'Training',
  },
  {
    icon: BarChart3,
    title: 'AI Product Engineering',
    description:
      'End-to-end AI product development, from PoC to production. Turning AI ideas into enterprise-grade solutions.',
    href: '/consulting',
    tag: 'Engineering',
  },
  {
    icon: Cpu,
    title: 'AI Transformation Workshops',
    description:
      'Hands-on workshops for leadership and technical teams on AI strategy, adoption, and engineering excellence.',
    href: '/workshops',
    tag: 'Workshops',
  },
  {
    icon: Network,
    title: 'AI Team Enablement',
    description:
      'Build internal AI capabilities across your engineering and product teams with structured enablement programs.',
    href: '/trainings',
    tag: 'Enablement',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
            Enterprise AI Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From AI strategy to production deployment — comprehensive AI services designed for
            enterprise organizations that need real results.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <motion.div key={svc.title} variants={item}>
                <Link
                  href={svc.href}
                  className="group flex flex-col h-full p-8 bg-background hover:bg-surface transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center group-hover:bg-ai-blue/20 transition-colors">
                      <Icon size={18} className="text-muted-foreground group-hover:text-ai-blue transition-colors" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono tracking-wide border border-border px-2 py-1 rounded">
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-ai-blue transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {svc.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-xs text-ai-blue font-medium opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
