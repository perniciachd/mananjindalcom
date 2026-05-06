'use client'

import { motion } from 'framer-motion'
import { Clock, ExternalLink, ArrowRight } from 'lucide-react'

export function FeaturedArticle() {
  return (
    <section className="py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
          Featured Article
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 border border-border rounded-lg bg-surface hover:border-ai-blue/30 transition-colors group"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono px-2 py-0.5 border border-ai-blue/30 text-ai-blue rounded">
                GenAI Architecture
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock size={10} /> 12 min read
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight group-hover:text-ai-blue transition-colors text-balance">
              Building Production-Grade RAG Systems: A Complete Enterprise Architecture Guide
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm mb-6">
              A comprehensive walkthrough of designing, building, and deploying enterprise-grade
              Retrieval-Augmented Generation systems. Covers architecture patterns, chunking
              strategies, vector database selection, evaluation frameworks, and production
              deployment considerations for organizations handling millions of documents.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
              <span>May 2025</span>
              <span>&middot;</span>
              <span>4.2k reads</span>
              <span>&middot;</span>
              <span>Enterprise AI Series</span>
            </div>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ai-blue font-medium hover:gap-3 transition-all"
            >
              Read Full Article <ArrowRight size={14} />
            </a>
          </div>

          {/* Code snippet illustration */}
          <div className="font-mono text-xs bg-background border border-border rounded-md p-6 overflow-hidden">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
              <span className="ml-2 text-muted-foreground">rag_pipeline.py</span>
            </div>
            <div className="space-y-1 text-muted-foreground leading-relaxed">
              <p><span className="text-blue-400">from</span> <span className="text-green-400">langchain.vectorstores</span> <span className="text-blue-400">import</span> Pinecone</p>
              <p><span className="text-blue-400">from</span> <span className="text-green-400">langchain.embeddings</span> <span className="text-blue-400">import</span> OpenAI</p>
              <p className="mt-3"><span className="text-muted-foreground/50"># Hybrid search with re-ranking</span></p>
              <p><span className="text-blue-400">def</span> <span className="text-yellow-400">enterprise_rag_query</span>(query: str):</p>
              <p className="pl-4">dense = vector_store.similarity_search(</p>
              <p className="pl-8">query, k=<span className="text-orange-400">20</span></p>
              <p className="pl-4">)</p>
              <p className="pl-4">sparse = bm25_retriever.retrieve(query)</p>
              <p className="pl-4">merged = reciprocal_rank_fusion(</p>
              <p className="pl-8">dense, sparse</p>
              <p className="pl-4">)</p>
              <p className="pl-4"><span className="text-blue-400">return</span> reranker.rerank(merged)[:<span className="text-orange-400">5</span>]</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
