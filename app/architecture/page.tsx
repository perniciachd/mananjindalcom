import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ArchitectureHero } from '@/components/architecture/architecture-hero'
import { ArchitectureTopics } from '@/components/architecture/architecture-topics'
import { RAGDiagram } from '@/components/architecture/rag-diagram'
import { AgentDiagram } from '@/components/architecture/agent-diagram'

export const metadata = {
  title: 'GenAI Architecture | RAG Systems & Multi-Agent Architectures',
  description: 'Enterprise GenAI architecture expertise by Manan Jindal. RAG systems, multi-agent architectures, LLMOps, and production AI engineering for enterprise applications.',
  keywords: [
    'GenAI Architecture',
    'RAG Systems Architecture',
    'Multi-Agent Architecture',
    'Enterprise AI Architecture',
    'LLMOps Architecture',
    'Production AI Systems',
    'AI System Design',
    'Scalable AI Architecture',
  ],
  openGraph: {
    title: 'GenAI Architecture | RAG Systems & Multi-Agent Architectures',
    description: 'Enterprise GenAI architecture expertise. RAG systems, multi-agent architectures, LLMOps, and production AI engineering.',
    url: 'https://mananjindal.com/architecture',
  },
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
