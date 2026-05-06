import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/home/hero'
import { ExpertiseStrip } from '@/components/home/expertise-strip'
import { ServicesOverview } from '@/components/home/services-overview'
import { Approach } from '@/components/home/approach'
import { Testimonials } from '@/components/home/testimonials'
import { CTABand } from '@/components/home/cta-band'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <ExpertiseStrip />
      <ServicesOverview />
      <Approach />
      <Testimonials />
      <CTABand />
      <Footer />
    </main>
  )
}
