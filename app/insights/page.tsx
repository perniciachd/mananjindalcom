import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { InsightsHero } from '@/components/insights/insights-hero'
import { FeaturedArticle } from '@/components/insights/featured-article'
import { ArticleGrid } from '@/components/insights/article-grid'
import { NewsletterSignup } from '@/components/insights/newsletter-signup'

export const metadata = {
  title: 'AI Insights & Articles — Manan Jindal',
  description:
    'Enterprise AI insights, GenAI architecture deep-dives, and AI engineering tutorials. Thought leadership on RAG, multi-agent systems, LLMOps, and enterprise AI adoption.',
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
