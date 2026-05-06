'use client'

import { motion } from 'framer-motion'

const techStack = [
  'OpenAI GPT-4', 'Claude 3', 'LangChain', 'LlamaIndex', 'Pinecone',
  'Weaviate', 'ChromaDB', 'Azure OpenAI', 'AWS Bedrock', 'Hugging Face',
  'FastAPI', 'Python', 'TypeScript', 'Docker', 'Kubernetes', 'Airflow',
  'MLflow', 'LangGraph', 'AutoGen', 'Vertex AI',
]

const ecosystems = [
  'Startups', 'MNCs', 'US Clients', 'Singapore', 'Government', 'Enterprises',
]

export function ExpertiseStrip() {
  return (
    <section className="py-16 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-center text-xs text-muted-foreground font-mono tracking-widest uppercase">
          Trusted Across Startups, Enterprises &amp; Government Ecosystems
        </p>
      </div>

      {/* Ecosystem badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto px-6">
        {ecosystems.map((e) => (
          <span
            key={e}
            className="px-4 py-1.5 text-xs font-medium border border-border text-muted-foreground rounded-full"
          >
            {e}
          </span>
        ))}
      </div>

      {/* Scrolling tech strip */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-4 py-2 text-xs font-mono text-muted-foreground border border-border/50 rounded-md bg-surface whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
