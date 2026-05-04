import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleSlugs } from "@/lib/articles";
import { CTAStrip } from "@/components/site/CTAStrip";
import { JsonLd } from "@/components/site/JsonLd";
import { articleJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getAllArticles().find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `${site.url}/articles/${slug}`,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getAllArticles().find((a) => a.slug === slug);
  if (!article) notFound();

  const { default: MDXContent } = await import(`@/../content/articles/${slug}.mdx`);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-10">
        <p className="text-xs text-muted-foreground mb-2">
          {new Date(article.date).toLocaleDateString("en-IN", {
            year: "numeric", month: "long", day: "numeric",
          })}
          {article.readingTime && <> &middot; {article.readingTime}</>}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
          {article.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">{article.description}</p>
        {article.mediumUrl && (
          <div className="mt-6 rounded-lg border bg-muted/40 px-4 py-3 text-sm">
            <span className="text-muted-foreground">If you read the short version on Medium, this is the production version. </span>
            <a
              href={article.mediumUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline underline-offset-4"
            >
              Read the Medium piece →
            </a>
          </div>
        )}
      </header>

      <div className="article-body">
        <MDXContent />
      </div>

      <CTAStrip />

      <p className="mt-8 text-sm text-muted-foreground">
        <Link href="/articles" className="underline">← All articles</Link>
        {article.githubUrl && (
          <>
            {"  ·  "}
            <a
              href={article.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              GitHub repo
            </a>
          </>
        )}
      </p>

      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.description,
          url: `${site.url}/articles/${slug}`,
          datePublished: article.date,
        })}
      />
    </article>
  );
}
