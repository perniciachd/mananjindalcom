import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { WorkshopsHero } from '@/components/workshops/workshops-hero'
import { WorkshopsGrid } from '@/components/workshops/workshops-grid'
import { WorkshopsCTA } from '@/components/workshops/workshops-cta'

export const metadata = {
  title: 'Workshops & Speaking — Manan Jindal | Enterprise AI Conference Speaker',
  description:
    'Enterprise AI workshops, keynote speaking, and panel discussions on Generative AI, RAG systems, multi-agent architectures, and enterprise AI transformation.',
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
