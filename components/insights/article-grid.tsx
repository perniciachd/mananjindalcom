'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'

const sections = [
  {
    title: 'Latest Articles',
    articles: [
      {
        title: 'Multi-Agent Systems in Production: Patterns, Pitfalls & Best Practices',
        desc: 'A practical guide to designing and deploying multi-agent AI systems for enterprise use cases, covering orchestration patterns and reliability.',
        category: 'AI Agents',
        readTime: '10 min',
        date: 'Apr 2025',
      },
      {
        title: 'Five Minutes to Diagnose a 401: A Production AI Reliability Story',
        desc: 'How refusing to retry an authentication error turned a 30-minute outage into a 5-minute fix. A production incident from a finance compliance tool, and the retry policy that made fast diagnosis possible.',
        category: 'AI Reliability',
        readTime: '6 min',
        date: 'May 2026',
      },
      {
        title: 'Enterprise AI Safety: Beyond Basic Guardrails',
        desc: 'Building comprehensive AI safety frameworks for enterprise systems — from prompt injection prevention to output validation and audit trails.',
        category: 'AI Safety',
        readTime: '9 min',
        date: 'Mar 2025',
      },
    ],
  },
  {
    title: 'Enterprise AI Architecture Series',
    articles: [
      {
        title: 'Designing AI Systems for Enterprise Compliance',
        desc: 'Architecture patterns for AI systems that meet enterprise compliance requirements — data residency, audit logging, access control, and PII handling.',
        category: 'GenAI Architecture',
        readTime: '11 min',
        date: 'Mar 2025',
      },
      {
        title: 'Vector Database Selection for Enterprise RAG',
        desc: 'A practical comparison of Pinecone, Weaviate, Qdrant, and pgvector for enterprise RAG systems — performance, cost, and operational considerations.',
        category: 'RAG Systems',
        readTime: '7 min',
        date: 'Feb 2025',
      },
      {
        title: 'Fine-Tuning vs RAG: When to Use Each Approach',
        desc: 'A decision framework for choosing between fine-tuning and RAG for enterprise AI use cases, with cost-benefit analysis and hybrid approaches.',
        category: 'GenAI Architecture',
        readTime: '9 min',
        date: 'Feb 2025',
      },
    ],
  },
  {
    title: 'Corporate AI Adoption',
    articles: [
      {
        title: 'Building Internal AI Champions: An Enablement Playbook',
        desc: 'How to create a self-sustaining AI culture within engineering organizations through structured enablement, internal champions, and community of practice.',
        category: 'Enterprise AI',
        readTime: '6 min',
        date: 'Jan 2025',
      },
      {
        title: 'AI ROI Measurement for Enterprise Initiatives',
        desc: 'Practical frameworks for measuring the return on AI investments — from productivity gains to revenue impact and cost reduction.',
        category: 'AI Strategy',
        readTime: '8 min',
        date: 'Jan 2025',
      },
      {
        title: 'The Enterprise AI Maturity Model',
        desc: 'A five-stage maturity model for assessing and advancing enterprise AI capabilities, from experimentation to AI-native organization.',
        category: 'AI Strategy',
        readTime: '10 min',
        date: 'Dec 2024',
      },
    ],
  },
]

export function ArticleGrid() {
  return (
    <section className="py-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {sections.map((section, si) => (
          <div key={section.title} className="mb-16">
            <h2 className="text-xl font-semibold mb-8 pb-4 border-b border-border">
              {section.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {section.articles.map((article, i) => (
                <motion.a
                  key={article.title}
                  href="https://medium.com/@manan_jindal/five-minutes-to-diagnose-a-401-a-production-ai-reliability-story-1ded1ac75c46"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 + si * 0.05 }}
                  className="group p-6 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono px-2 py-0.5 border border-ai-blue/30 text-ai-blue rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={10} /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold mb-2 leading-snug group-hover:text-ai-blue transition-colors flex-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {article.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    <span className="flex items-center gap-1 text-xs text-ai-blue opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight size={10} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
