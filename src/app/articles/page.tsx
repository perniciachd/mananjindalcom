import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles — Production-grade deep-dives on RAG, agents, and AI systems",
  description:
    "Long-form, production-focused writing on RAG, agentic AI, and AI architecture. The companion deep-dives to my Medium series.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Articles</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Long-form, production-focused deep-dives on RAG, agents, and AI architecture.
        The companion pieces to my{" "}
        <a
          href="https://medium.com/@manan_jindal"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Medium series
        </a>
        {" "}— with full code, diagrams, ADRs, and eval numbers.
      </p>

      {articles.length === 0 ? (
        <p className="mt-12 text-muted-foreground">
          First deep-dives are in progress. Subscribe via the footer to get them as they ship.
        </p>
      ) : (
        <ul className="mt-12 space-y-8">
          {articles.map((a) => (
            <li key={a.slug} className="border-b pb-8 last:border-0">
              <p className="text-xs text-muted-foreground mb-1">
                {new Date(a.date).toLocaleDateString("en-IN", {
                  year: "numeric", month: "short", day: "numeric",
                })}
                {a.readingTime && <> &middot; {a.readingTime}</>}
              </p>
              <h2 className="text-xl font-semibold">
                <Link href={`/articles/${a.slug}`} className="hover:text-primary transition-colors">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-2 text-muted-foreground">{a.description}</p>
              {a.tags.length > 0 && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {a.tags.map((t) => `#${t}`).join("  ")}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
