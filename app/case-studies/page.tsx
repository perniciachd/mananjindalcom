import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { CaseStudiesHero } from '@/components/case-studies/case-studies-hero'
import { CaseStudyCards } from '@/components/case-studies/case-study-cards'

export const metadata = {
  title: 'Case Studies — Manan Jindal | Enterprise AI Architecture Projects',
  description:
    'Enterprise AI case studies: RAG knowledge systems, AI support assistants, document intelligence, workflow automation, and AI training transformations.',
}

export default function CaseStudiesPage() {
  return (
    <main>
      <Nav />
      <CaseStudiesHero />
      <CaseStudyCards />
      <Footer />
    </main>
  )
}
