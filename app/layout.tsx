import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manan Jindal — Enterprise GenAI Architect & AI Transformation Consultant',
  description:
    'Manan Jindal is an Enterprise GenAI Architect and AI Transformation Consultant with 15+ years of experience. Specializing in RAG systems, multi-agent architectures, corporate AI training, and enterprise AI strategy.',
  keywords: [
    'Enterprise GenAI Consultant',
    'AI Architect India',
    'Corporate AI Trainer',
    'GenAI Workshop India',
    'RAG Consultant',
    'AI Transformation Consultant',
    'Enterprise AI Training',
    'AI Engineering Mentor',
    'Multi-Agent Systems Consultant',
    'AI Architecture Expert',
    'Manan Jindal',
    'Generative AI Consulting',
    'LLMOps',
    'AI Product Engineering',
  ],
  authors: [{ name: 'Manan Jindal' }],
  creator: 'Manan Jindal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Manan Jindal',
    title: 'Manan Jindal — Enterprise GenAI Architect & AI Transformation Consultant',
    description:
      'Helping enterprises build production-grade AI systems using Generative AI, RAG, and Multi-Agent Architectures.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manan Jindal — Enterprise GenAI Architect',
    description:
      'Helping enterprises build production-grade AI systems using Generative AI, RAG, and Multi-Agent Architectures.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
