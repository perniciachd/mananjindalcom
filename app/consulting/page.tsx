import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ConsultingHero } from '@/components/consulting/consulting-hero'
import { ConsultingServices } from '@/components/consulting/consulting-services'
import { EngagementModel } from '@/components/consulting/engagement-model'
import { TransformationFramework } from '@/components/consulting/transformation-framework'

export const metadata = {
  title: 'AI Consulting Services | Enterprise GenAI Strategy & Architecture',
  description: 'Enterprise AI strategy and architecture consulting by Manan Jindal. Strategic AI consulting for enterprises ready to build production-grade AI systems with measurable business outcomes.',
  keywords: [
    'Enterprise AI Consulting',
    'GenAI Strategy Consulting',
    'AI Architecture Consulting India',
    'RAG Consulting Services',
    'Multi-Agent Systems Consulting',
    'Enterprise AI Transformation',
    'AI Product Engineering',
    'LLMOps Consulting',
    'Corporate AI Strategy',
  ],
  openGraph: {
    title: 'AI Consulting Services | Enterprise GenAI Strategy',
    description: 'Strategic AI consulting for enterprises ready to build production-grade AI systems. RAG, multi-agent architectures, and AI transformation expertise.',
    url: 'https://mananjindal.com/consulting',
  },
}

export default function ConsultingPage() {
  return (
    <main>
      <Nav />
      <ConsultingHero />
      <ConsultingServices />
      <EngagementModel />
      <TransformationFramework />
      <Footer />
    </main>
  )
}
