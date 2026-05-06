import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { TrainingsHero } from '@/components/trainings/trainings-hero'
import { TrainingsList } from '@/components/trainings/trainings-list'
import { FlagshipProgram } from '@/components/trainings/flagship-program'
import { TrainingsInquiry } from '@/components/trainings/trainings-inquiry'

export const metadata = {
  title: 'AI Training Programs | Corporate GenAI Workshops India',
  description: 'Enterprise AI training programs and corporate GenAI workshops by Manan Jindal. Customized AI upskilling for engineering teams, from foundations to advanced production AI engineering.',
  keywords: [
    'Corporate AI Training India',
    'GenAI Workshop India',
    'Enterprise AI Upskilling',
    'Corporate GenAI Programs',
    'AI Engineering Training',
    'LLM Training Programs',
    'RAG Systems Training',
    'Multi-Agent Architecture Training',
    'Corporate AI Certification',
  ],
  openGraph: {
    title: 'AI Training Programs | Corporate GenAI Workshops',
    description: 'Enterprise AI training programs customized for engineering teams. 3000+ developers trained. From foundations to advanced production AI engineering.',
    url: 'https://mananjindal.com/trainings',
  },
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
