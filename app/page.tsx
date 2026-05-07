import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/home/hero'
import { ExpertiseStrip } from '@/components/home/expertise-strip'
import { EnterpriseExpertise } from '@/components/home/enterprise-expertise'
import { TechnologyJourney } from '@/components/home/technology-journey'
import { EnterprisePrograms } from '@/components/home/enterprise-programs'
import { TransformationApproach } from '@/components/home/transformation-approach'
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
      <EnterpriseExpertise />
      <TechnologyJourney />
      <EnterprisePrograms />
      <TransformationApproach />
      <ServicesOverview />
      <Approach />
      <Testimonials />
      <CTABand />
      <Footer />
    </main>
  )
}
