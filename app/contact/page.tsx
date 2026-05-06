import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
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
          <ContactForm />
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  )
}
