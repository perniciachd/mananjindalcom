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
  metadataBase: new URL('https://mananjindal.com'),
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
  publisher: 'Manan Jindal',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Manan Jindal',
    title: 'Manan Jindal — Enterprise GenAI Architect & AI Transformation Consultant',
    description:
      'Helping enterprises build production-grade AI systems using Generative AI, RAG, and Multi-Agent Architectures.',
    url: 'https://mananjindal.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manan Jindal — Enterprise GenAI Architect',
    description:
      'Helping enterprises build production-grade AI systems using Generative AI, RAG, and Multi-Agent Architectures.',
    creator: '@MananJindal18',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'OiH8K0j2mpAU1bgz3fN1uq4hvd5BbWo4Csdcoo0O_WM',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manan Jindal',
    jobTitle: 'Enterprise GenAI Architect & AI Transformation Consultant',
    description: 'Enterprise GenAI Architect and AI Transformation Consultant with 15+ years of experience in software engineering, AI architecture, and corporate training.',
    url: 'https://mananjindal.com',
    image: 'https://mananjindal.com/placeholder-user.jpg',
    sameAs: [
      'https://linkedin.com/in/mananjindal',
      'https://twitter.com/MananJindal18',
      'https://medium.com/@manan_jindal',
    ],
    knowsAbout: [
      'Generative AI',
      'RAG Systems',
      'Multi-Agent Architectures',
      'Enterprise AI Strategy',
      'LLMOps',
      'AI Engineering',
      'Corporate AI Training',
      'AI Product Engineering',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Manan Jindal Consulting',
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <head>
        <meta name="google-site-verification" content="OiH8K0j2mpAU1bgz3fN1uq4hvd5BbWo4Csdcoo0O_WM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
