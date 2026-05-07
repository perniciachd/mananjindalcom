import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

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
    'Enterprise AI Architect',
    'AI Transformation Consultant',
    'AI Engineering Mentor',
    'Product Engineering Consultant',
    'AWS Solution Architect',
    'Enterprise Architecture',
    'RAG Systems Consultant',
    'AI Architecture Expert',
    'Full Stack Architecture',
    'Enterprise Engineering Leadership',
    'Enterprise GenAI Consultant',
    'AI Architect India',
    'Corporate AI Trainer',
    'GenAI Workshop India',
    'RAG Consultant',
    'Enterprise AI Training',
    'Multi-Agent Systems Consultant',
    'Manan Jindal',
    'Generative AI Consulting',
    'LLMOps',
    'AI Product Engineering',
    'Java Microservices',
    'React Architecture',
    'Cloud Architecture',
    'System Design',
    'Full Stack Engineering',
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
      'Full Stack Development',
      'React & Next.js Architecture',
      'Java & Microservices',
      'AWS Cloud Architecture',
      'System Design',
      'Enterprise Architecture',
      'Distributed Systems',
      'DevOps & CI/CD',
      'Database Architecture',
      'Performance Engineering',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Manan Jindal Consulting',
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
