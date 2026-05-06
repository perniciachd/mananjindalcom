'use client'

import { motion } from 'framer-motion'

const ingestionSteps = [
  { label: 'Documents', sub: 'PDF, Docs, Web', color: 'border-blue-500/40' },
  { label: 'Chunking', sub: 'Semantic splits', color: 'border-ai-blue/40' },
  { label: 'Embedding', sub: 'Vector model', color: 'border-ai-blue/40' },
  { label: 'Vector DB', sub: 'Pinecone / Weaviate', color: 'border-purple-500/40' },
]

const querySteps = [
  { label: 'User Query', sub: 'Natural language', color: 'border-green-500/40' },
  { label: 'Query Embed', sub: 'Same model', color: 'border-ai-blue/40' },
  { label: 'Retrieval', sub: 'Hybrid search', color: 'border-ai-blue/40' },
  { label: 'Re-ranking', sub: 'Cross-encoder', color: 'border-yellow-500/40' },
  { label: 'LLM + Context', sub: 'GPT-4 / Claude', color: 'border-orange-500/40' },
  { label: 'Response', sub: 'Grounded answer', color: 'border-green-500/40' },
]

export function RAGDiagram() {
  return (
    <section className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-ai-blue text-sm font-mono tracking-widest uppercase mb-4">
            Architecture Pattern
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
            Enterprise RAG Architecture
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
            Production-grade Retrieval-Augmented Generation architecture for enterprise knowledge
            systems. Designed for accuracy, scalability, and auditability.
          </p>
        </div>

        <div className="space-y-8">
          {/* Ingestion pipeline */}
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
              Ingestion Pipeline
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {ingestionSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <div className={`px-4 py-3 border ${step.color} rounded-md bg-surface text-center min-w-[100px]`}>
                    <p className="text-xs font-semibold text-foreground">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.sub}</p>
                  </div>
                  {i < ingestionSteps.length - 1 && (
                    <span className="text-muted-foreground text-sm">→</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Query pipeline */}
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
              Query Pipeline
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {querySteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <div className={`px-4 py-3 border ${step.color} rounded-md bg-surface text-center min-w-[90px]`}>
                    <p className="text-xs font-semibold text-foreground">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.sub}</p>
                  </div>
                  {i < querySteps.length - 1 && (
                    <span className="text-muted-foreground text-sm">→</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Key considerations */}
        <div className="grid md:grid-cols-4 gap-4 mt-10">
          {[
            { label: 'Accuracy', detail: 'Precision@k, RAGAS evaluation' },
            { label: 'Latency', detail: 'Sub-second retrieval with caching' },
            { label: 'Security', detail: 'PII filtering, access controls' },
            { label: 'Scalability', detail: 'Millions of documents, distributed' },
          ].map((kpi) => (
            <div key={kpi.label} className="p-4 border border-border rounded-md bg-surface">
              <p className="text-xs font-semibold text-foreground mb-1">{kpi.label}</p>
              <p className="text-xs text-muted-foreground">{kpi.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
