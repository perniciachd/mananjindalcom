import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ArchitectureHero } from '@/components/architecture/architecture-hero'
import { ArchitectureTopics } from '@/components/architecture/architecture-topics'
import { RAGDiagram } from '@/components/architecture/rag-diagram'
import { AgentDiagram } from '@/components/architecture/agent-diagram'

export const metadata = {
  title: 'GenAI Architecture — Manan Jindal | Enterprise RAG & Multi-Agent Systems',
  description:
    'Enterprise GenAI architecture patterns: RAG systems, multi-agent frameworks, LLMOps, AI safety, and scalable AI infrastructure.',
}

export default function ArchitecturePage() {
  return (
    <main>
      <Nav />
      <ArchitectureHero />
      <RAGDiagram />
      <AgentDiagram />
      <ArchitectureTopics />
      <Footer />
    </main>
  )
}
