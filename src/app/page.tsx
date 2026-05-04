import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAStrip } from "@/components/site/CTAStrip";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const latest = getAllArticles().slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <Badge variant="secondary" className="mb-6">
          AI Architect &middot; 15+ years
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
          AI systems that <span className="text-primary">survive production.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          I help engineering teams ship RAG, agents, and LLM features that
          work in the real world &mdash; not just in demos. Trained 3,000+
          engineers. Fixed a live RAG that was wrong 29% of the time.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/consulting#book">Book a free 30-min call</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/articles">Read the deep-dives</Link>
          </Button>
        </div>
      </section>

      {/* Offer tiles */}
      <section className="grid gap-4 md:grid-cols-3 mb-20">
        <Card className="group hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle>Architecture Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              1-week deep dive. C4 doc + risk register + 90-day roadmap for
              your AI system.
            </p>
            <Link
              href="/consulting"
              className="text-sm font-medium text-primary group-hover:underline"
            >
              Learn more &rarr;
            </Link>
          </CardContent>
        </Card>
        <Card className="group hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle>Production Readiness Sprint</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              2-week embedded engagement. Evals, observability, guardrails,
              cost model, CI gates.
            </p>
            <Link
              href="/consulting"
              className="text-sm font-medium text-primary group-hover:underline"
            >
              Learn more &rarr;
            </Link>
          </CardContent>
        </Card>
        <Card className="group hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle>Corporate Training</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              4.8/5 across 3,000+ engineers at Cisco, Capgemini, Genpact,
              GlobalLogic, PepsiCo.
            </p>
            <Link
              href="/training"
              className="text-sm font-medium text-primary group-hover:underline"
            >
              Learn more &rarr;
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Latest articles */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Latest deep-dives
          </h2>
          <Link
            href="/articles"
            className="text-sm font-medium text-primary hover:underline"
          >
            All articles &rarr;
          </Link>
        </div>
        {latest.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            First articles ship in Phase 0. Subscribe below to get them.
          </p>
        ) : (
          <ul className="grid gap-4 md:grid-cols-3">
            {latest.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="block rounded-lg border p-5 hover:border-primary/40 transition-colors h-full"
                >
                  <p className="text-xs text-muted-foreground mb-2">
                    {new Date(a.date).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-semibold leading-snug mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {a.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <CTAStrip />
    </div>
  );
}
