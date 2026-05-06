import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata = {
  title: 'Contact | Enterprise GenAI Solutions',
  description: 'Get in touch to discuss your enterprise AI transformation goals.',
}

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <ContactHero />
      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
          <div className="bg-surface rounded-lg p-4 border border-border">
            <iframe
              src="https://cal.com/mananjindal/training?embed"
              title="Schedule a meeting with Manan Jindal"
              className="w-full h-[700px] rounded-md border-0"
              allow="clipboard-write; calendar"
            />
          </div>
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  )
}
