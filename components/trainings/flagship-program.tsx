'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const modules = [
  {
    day: 'Day 1',
    title: 'AI Foundations & LLM Architecture',
    topics: ['Transformer architecture', 'How LLMs work', 'OpenAI & Claude APIs', 'Token economics', 'Model selection'],
  },
  {
    day: 'Day 2',
    title: 'Prompt Engineering & Multimodal AI',
    topics: ['Advanced prompt patterns', 'Chain-of-thought', 'Few-shot learning', 'Vision models', 'Multimodal pipelines'],
  },
  {
    day: 'Day 3',
    title: 'RAG Systems & Vector Databases',
    topics: ['RAG architecture', 'Embedding models', 'Vector DB setup', 'Retrieval strategies', 'Hybrid search'],
  },
  {
    day: 'Day 4',
    title: 'AI Agents & Fine-Tuning',
    topics: ['Agent design patterns', 'LangGraph / AutoGen', 'Fine-tuning strategies', 'PEFT / LoRA', 'Tool use'],
  },
  {
    day: 'Day 5',
    title: 'Deployment, Safety & Capstone',
    topics: ['LLMOps & monitoring', 'AI safety practices', 'Production deployment', 'Evaluation pipelines', 'Capstone project'],
  },
]

export function FlagshipProgram() {
  return (
    <section id="flagship" className="py-24 lg:py-32 border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-ai-blue/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ai-blue/30 bg-ai-blue/10 text-ai-blue text-xs font-medium mb-6">
            Flagship Program
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            5-Day Intensive
            <br />
            <span className="gradient-text">GenAI Engineering Program</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A comprehensive, hands-on program that takes engineers from AI foundations to
            building and deploying production-grade GenAI systems. The most complete corporate
            AI engineering program available.
          </p>
        </div>

        {/* Modules */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border mb-12">
          {modules.map((m, i) => (
            <motion.div
              key={m.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-6 hover:bg-surface transition-colors group"
            >
              <div className="font-mono text-xs text-ai-blue mb-2">{m.day}</div>
              <h3 className="text-sm font-semibold mb-4 leading-snug group-hover:text-ai-blue transition-colors">
                {m.title}
              </h3>
              <ul className="space-y-2">
                {m.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle size={10} className="text-ai-blue mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Program features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Duration', value: '5 Full Days (40+ Hours)' },
            { label: 'Format', value: 'On-site / Virtual / Hybrid' },
            { label: 'Team Size', value: '10–500+ Engineers' },
            { label: 'Hands-on Labs', value: '10+ Production Projects' },
            { label: 'Certification', value: 'Certificate of Completion' },
            { label: 'Post-program', value: '30-day Q&A Support' },
          ].map((f) => (
            <div key={f.label} className="p-4 border border-border rounded-md bg-surface flex justify-between items-center">
              <span className="text-xs text-muted-foreground">{f.label}</span>
              <span className="text-xs font-semibold text-foreground">{f.value}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://cal.com/mananjindal/training"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ai-blue text-white font-semibold rounded-md text-sm hover:bg-ai-blue/90 transition-colors group"
          >
            Request Program Details
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
