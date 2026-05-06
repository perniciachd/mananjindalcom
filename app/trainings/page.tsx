import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { TrainingsHero } from '@/components/trainings/trainings-hero'
import { TrainingsList } from '@/components/trainings/trainings-list'
import { FlagshipProgram } from '@/components/trainings/flagship-program'
import { TrainingsInquiry } from '@/components/trainings/trainings-inquiry'

export const metadata = {
  title: 'Enterprise AI Trainings — Manan Jindal',
  description:
    'Enterprise GenAI engineering programs for developers, tech leaders, and engineering teams. RAG, multi-agent systems, LLMOps, and AI architecture training.',
}

export default function TrainingsPage() {
  return (
    <main>
      <Nav />
      <TrainingsHero />
      <TrainingsList />
      <FlagshipProgram />
      <TrainingsInquiry />
      <Footer />
    </main>
  )
}
