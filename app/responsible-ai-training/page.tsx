import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ResponsibleAIContent } from '@/components/responsible-ai/responsible-ai-content'

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
  openGraph: {
    title: 'Responsible AI Training — Corporate, Government & Academic Programs',
    description: 'Help your organization adopt AI responsibly. A 3-day program covering productivity, data protection, ethics, and compliance — designed for non-technical leaders.',
    url: 'https://mananjindal.com/responsible-ai-training',
  },
}

export default function ResponsibleAITrainingPage() {
  return (
    <main>
      <Nav />
      <ResponsibleAIContent />
      <Footer />
    </main>
  )
}
