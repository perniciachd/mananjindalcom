import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ResponsibleAIContent } from '@/components/responsible-ai/responsible-ai-content'

const customExpertiseLinks = [
  { label: 'Responsible AI Training', href: '/responsible-ai-training' },
  { label: 'AI Governance', href: '/responsible-ai-training#methodology' },
  { label: 'Data Protection in AI', href: '/responsible-ai-training#what-youll-walk-away-with' },
  { label: 'Corporate AI Policy', href: '/responsible-ai-training#curriculum' },
]

export const metadata = {
  title: 'Responsible AI Training for Corporates, Government & Universities | Manan Jindal',
  description: 'A 3-day hands-on training program on Responsible AI for managers, government officials, and academic institutions. Learn to use AI productively while protecting data, ensuring compliance, and applying ethical governance. No technical background required.',
  keywords: [
    'Responsible AI training',
    'AI training for corporates',
    'AI training for government',
    'AI training for universities',
    'AI governance training',
    'AI ethics training',
    'ChatGPT training for managers',
    'AI policy training',
    'data privacy AI training',
    'AI compliance training',
  ],
  twitter: {
    card: 'summary_large_image',
    creator: '@MananJindal18',
    title: 'Responsible AI Training for Corporates, Government & Universities',
    description: 'A 3-day hands-on training program that helps your teams use AI productively while protecting data, ensuring compliance, and applying ethical governance. No technical background required.',
    images: ['/responsible-ai-training/opengraph-image.png'],
  },
  openGraph: {
    type: 'website',
    title: 'Responsible AI Training for Corporates, Government & Universities',
    description: 'A 3-day hands-on training program that helps your teams use AI productively while protecting data, ensuring compliance, and applying ethical governance.',
    url: 'https://mananjindal.com/responsible-ai-training',
    images: [
      {
        url: 'https://mananjindal.com/responsible-ai-training/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Responsible AI Training for Corporates, Government & Universities',
      },
    ],
    siteName: 'Manan Jindal',
  },
}

export default function ResponsibleAITrainingPage() {
  return (
    <main>
      <Nav />
      <ResponsibleAIContent />
      <Footer customExpertiseLinks={customExpertiseLinks} />
    </main>
  )
}
