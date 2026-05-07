import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { InsightsHero } from '@/components/insights/insights-hero'
import { FeaturedArticle } from '@/components/insights/featured-article'
import { ArticleGrid } from '@/components/insights/article-grid'
import { NewsletterSignup } from '@/components/insights/newsletter-signup'

export const metadata = {
  title: 'Enterprise AI & Engineering Insights — Manan Jindal',
  description:
    'Enterprise AI insights, AI architecture deep-dives, engineering leadership, cloud architecture, and technology transformation. Thought leadership on RAG, multi-agent systems, full-stack architecture, and enterprise engineering.',
  keywords: [
    'Enterprise AI',
    'AI Architecture',
    'Engineering Leadership',
    'Cloud Architecture',
    'Product Engineering',
    'Frontend Systems',
    'Microservices',
    'AI Transformation',
    'Scalable Systems',
    'System Design',
    'AWS Architecture',
    'DevOps',
    'LLMOps',
    'RAG Systems',
    'AI Engineering',
  ],
}

export default function InsightsPage() {
  return (
    <main>
      <Nav />
      <InsightsHero />
      <FeaturedArticle />
      <ArticleGrid />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
