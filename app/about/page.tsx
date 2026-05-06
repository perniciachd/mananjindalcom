import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { AboutHero } from '@/components/about/about-hero'
import { Philosophy } from '@/components/about/philosophy'
import { Specializations } from '@/components/about/specializations'
import { Timeline } from '@/components/about/timeline'

export const metadata = {
  title: 'About | Manan Jindal - Enterprise GenAI Architect',
  description: 'Learn about Manan Jindal, an Enterprise GenAI Architect with 15+ years of experience in software engineering, AI architecture, and corporate training. Expert in RAG, multi-agent systems, and enterprise AI transformation.',
  keywords: [
    'About Manan Jindal',
    'Enterprise AI Architect',
    'GenAI Expert India',
    'AI Transformation Consultant',
    'Corporate AI Trainer',
    'RAG Systems Expert',
    'Multi-Agent Architecture Specialist',
  ],
  openGraph: {
    title: 'About Manan Jindal - Enterprise GenAI Architect',
    description: '15+ years of experience in software engineering, AI architecture, and corporate training. Expert in RAG, multi-agent systems, and enterprise AI transformation.',
    url: 'https://mananjindal.com/about',
  },
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
