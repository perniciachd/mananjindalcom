import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { WorkshopsHero } from '@/components/workshops/workshops-hero'
import { WorkshopsGrid } from '@/components/workshops/workshops-grid'
import { WorkshopsCTA } from '@/components/workshops/workshops-cta'

export const metadata = {
  title: 'AI Workshops & Speaking | Conference Keynotes & Enterprise Sessions',
  description: 'AI workshops, conference keynotes, and enterprise sessions by Manan Jindal. Engaging, technically rigorous AI presentations for technology conferences and enterprise leadership forums.',
  keywords: [
    'AI Workshops India',
    'Conference Keynote Speaker',
    'Enterprise AI Sessions',
    'GenAI Speaking',
    'AI Conference Speaker',
    'Corporate AI Workshops',
    'Technology Conference Keynote',
    'AI Presentation Expert',
  ],
  openGraph: {
    title: 'AI Workshops & Speaking | Conference Keynotes',
    description: 'Engaging, technically rigorous AI presentations for technology conferences and enterprise leadership forums.',
    url: 'https://mananjindal.com/workshops',
  },
}

export default function WorkshopsPage() {
  return (
    <main>
      <Nav />
      <WorkshopsHero />
      <WorkshopsGrid />
      <WorkshopsCTA />
      <Footer />
    </main>
  )
}
