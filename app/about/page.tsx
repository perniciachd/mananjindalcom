import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { AboutHero } from '@/components/about/about-hero'
import { Timeline } from '@/components/about/timeline'
import { Specializations } from '@/components/about/specializations'
import { Philosophy } from '@/components/about/philosophy'

export const metadata = {
  title: 'About — Manan Jindal | Enterprise GenAI Architect',
  description:
    '15+ years of engineering leadership experience. Deep expertise in Generative AI, RAG systems, multi-agent architectures, and enterprise AI transformation.',
}

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutHero />
      <Timeline />
      <Specializations />
      <Philosophy />
      <Footer />
    </main>
  )
}
