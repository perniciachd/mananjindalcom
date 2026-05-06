import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ConsultingHero } from '@/components/consulting/consulting-hero'
import { ConsultingServices } from '@/components/consulting/consulting-services'
import { EngagementModel } from '@/components/consulting/engagement-model'
import { TransformationFramework } from '@/components/consulting/transformation-framework'

export const metadata = {
  title: 'AI Consulting — Manan Jindal | Enterprise AI Architecture & Strategy',
  description:
    'Enterprise AI consulting services: AI strategy, RAG architecture, multi-agent systems, LLMOps, and AI transformation roadmaps.',
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
