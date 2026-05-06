'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Users, Monitor, ArrowRight } from 'lucide-react'

const trainings = [
  {
    title: 'Generative AI for Developers',
    overview: 'Comprehensive introduction to GenAI for software developers. Covers LLMs, prompt engineering, API integration, and building AI-powered applications from scratch.',
    audience: 'Software Developers, Full-Stack Engineers',
    duration: '2–3 Days',
    format: 'Instructor-led + Hands-on Labs',
    tools: ['OpenAI API', 'LangChain', 'Python', 'FastAPI'],
    outcomes: ['Build AI-powered apps', 'Master prompt engineering', 'Integrate LLMs into products'],
    tag: 'Foundation',
  },
  {
    title: 'Enterprise RAG Systems',
    overview: 'Deep-dive into Retrieval-Augmented Generation architectures. Learn to design, build, and deploy enterprise-grade knowledge systems using vector databases and LLMs.',
    audience: 'Senior Engineers, Architects',
    duration: '3 Days',
    format: 'Workshop + Architecture Reviews',
    tools: ['Pinecone', 'Weaviate', 'LlamaIndex', 'OpenAI'],
    outcomes: ['Design RAG architectures', 'Optimize retrieval pipelines', 'Deploy production systems'],
    tag: 'Advanced',
  },
  {
    title: 'AI Agents & Multi-Agent Systems',
    overview: 'Master the design and implementation of autonomous AI agents and multi-agent orchestration systems for complex enterprise workflows.',
    audience: 'Engineers, AI Teams',
    duration: '2–3 Days',
    format: 'Project-based Learning',
    tools: ['LangGraph', 'AutoGen', 'CrewAI', 'OpenAI'],
    outcomes: ['Build autonomous agents', 'Design agent pipelines', 'Handle complex workflows'],
    tag: 'Advanced',
  },
  {
    title: 'Prompt Engineering Masterclass',
    overview: 'From basic prompting to advanced techniques: chain-of-thought, few-shot learning, prompt chaining, and systematic prompt optimization for enterprise use cases.',
    audience: 'Developers, Product Managers, Analysts',
    duration: '1 Day',
    format: 'Intensive Workshop',
    tools: ['GPT-4', 'Claude', 'Gemini', 'PromptFlow'],
    outcomes: ['Master prompt patterns', 'Build prompt libraries', 'Optimize AI outputs'],
    tag: 'Core Skill',
  },
  {
    title: 'AI Architecture for Tech Leaders',
    overview: 'Strategic and technical overview of enterprise AI architecture. Designed for CTOs, tech leads, and architects making AI investment and design decisions.',
    audience: 'CTOs, Tech Leads, Solution Architects',
    duration: '1–2 Days',
    format: 'Executive Workshop',
    tools: ['System Design Frameworks', 'Architecture Patterns', 'ROI Models'],
    outcomes: ['Define AI strategy', 'Evaluate build vs buy', 'Lead AI transformation'],
    tag: 'Leadership',
  },
  {
    title: 'AI Product Engineering',
    overview: 'End-to-end product engineering for AI-first products — from idea to production. Covers AI product design, evaluation loops, user feedback, and iterative improvement.',
    audience: 'Product Engineers, Tech Leads',
    duration: '3 Days',
    format: 'Hands-on + Case Studies',
    tools: ['LangSmith', 'Streamlit', 'FastAPI', 'Docker'],
    outcomes: ['Ship AI products', 'Build evaluation pipelines', 'Manage AI product lifecycle'],
    tag: 'Engineering',
  },
  {
    title: 'AI Transformation Workshops',
    overview: 'Organizational-level workshops to align leadership and engineering teams on AI adoption strategy, capability building, and transformation roadmap.',
    audience: 'Leadership Teams, L&D, HR',
    duration: '1 Day',
    format: 'Facilitated Workshop',
    tools: ['Frameworks', 'Case Studies', 'Roadmap Templates'],
    outcomes: ['Define AI roadmap', 'Align stakeholders', 'Prioritize AI initiatives'],
    tag: 'Strategy',
  },
  {
    title: 'Corporate GenAI Bootcamps',
    overview: 'Intensive multi-day bootcamps for large engineering cohorts. Covers the full GenAI engineering stack with industry-relevant projects and mentored learning.',
    audience: 'Engineering Teams (20–500+)',
    duration: '3–5 Days',
    format: 'Bootcamp Format',
    tools: ['Full GenAI Stack', 'Cloud AI Services', 'Production Tools'],
    outcomes: ['Team-wide AI capability', 'Shared vocabulary', 'Production-ready skills'],
    tag: 'Corporate',
  },
]

export function TrainingsList() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Training Catalog
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            AI Training Programs
          </h2>
        </div>

        <div className="space-y-4">
          {trainings.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors group overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold group-hover:text-ai-blue transition-colors">
                      {t.title}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded border border-ai-blue/30 text-ai-blue">
                      {t.tag}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center gap-1 text-xs text-ai-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Inquire <ArrowRight size={12} />
                  </Link>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {t.overview}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users size={12} className="text-ai-blue" />
                    {t.audience}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={12} className="text-ai-blue" />
                    {t.duration}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Monitor size={12} className="text-ai-blue" />
                    {t.format}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    {t.tools.map((tool) => (
                      <span key={tool} className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
