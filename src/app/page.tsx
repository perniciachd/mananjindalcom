import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAStrip } from "@/components/site/CTAStrip";
import { getAllArticles } from "@/lib/articles";

const TRUSTED_BY = ["Cisco", "Capgemini", "PepsiCo", "Genpact", "GlobalLogic", "Brillio"];

const WHAT_I_FIX = [
  {
    title: "RAG hallucinations",
    problem: "Wrong-but-confident answers reaching users.",
    explain:
      "Most teams ship without a golden eval set or faithfulness check. Regressions go unnoticed for months until a user complains.",
    outcome: "Faithfulness ≥ 0.9, with a CI gate that blocks bad releases.",
  },
  {
    title: "Poor retrieval quality",
    problem: "Top-5 keeps missing the right chunk.",
    explain:
      "Default chunking + dense-only embeddings can't handle structured docs, tables, or domain jargon. Recall stays in the 60s.",
    outcome: "Hybrid search + re-ranking. Recall@5 from ~60% to 90%+.",
  },
  {
    title: "Agents that loop or burn cash",
    problem: "Tool calls misfire, plans never finish, costs spike.",
    explain:
      "Most agents ship without supervisor patterns, retries, durable workflows, or budget caps. Production is the first stress test.",
    outcome: "Bounded workflows, agent-level evals, predictable cost per run.",
  },
  {
    title: "Latency & cost out of control",
    problem: "p95 over budget, OpenAI bill 3× what you forecasted.",
    explain:
      "Oversized contexts, missed caches, wrong model tier per call. The fix is rarely a bigger model — it's better routing.",
    outcome: "Tiered routing + caching + cost dashboard. 30–60% savings typical.",
  },
  {
    title: "Production drift, no observability",
    problem: "You can't tell if today's model is worse than last week's.",
    explain:
      "No traces, no eval harness, no CI gates. The first signal of regression is a Slack thread from the support team.",
    outcome: "Langfuse traces + golden eval set + CI quality gate.",
  },
];

const SERVICES = [
  {
    title: "Architecture Review",
    duration: "1 week · remote",
    price: "₹75k – 1.5L",
    who: "Teams scoping a new AI initiative.",
    get: [
      "C4 architecture document",
      "Risk register with mitigations",
      "90-day implementation roadmap",
      "Leadership readout",
    ],
    outcome:
      "Clarity on what to build, what to skip, and how to ship in 90 days.",
  },
  {
    title: "Production Readiness Sprint",
    duration: "2 weeks · embedded",
    price: "₹1.5L – 3L",
    who: "Teams with a working AI demo that needs to survive real users.",
    get: [
      "Eval harness + golden dataset",
      "Observability (Langfuse / OTel)",
      "Guardrails + PII redaction",
      "Cost model + CI quality gates",
    ],
    outcome:
      "Measurable quality, predictable cost, safe to launch — without rebuilds.",
    featured: true,
  },
  {
    title: "Corporate Training",
    duration: "2-day in-house",
    price: "₹1.5L – 4L",
    who: "Engineering teams stepping into RAG, agents, or production AI.",
    get: [
      "Hands-on production-focused workshop",
      "Real artifacts (eval set, traces, ADRs)",
      "Curriculum tailored to your stack",
      "Recording + reference repo",
    ],
    outcome:
      "A team that ships AI without you. 4.8/5 from 3,000+ peers.",
  },
];

export default function Home() {
  const latest = getAllArticles().slice(0, 3);

  return (
    <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
      {/* Soft hero gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_at_top_left,_oklch(0.93_0.07_264)_0%,_transparent_55%),_radial-gradient(ellipse_at_top_right,_oklch(0.95_0.05_220)_0%,_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_left,_oklch(0.32_0.1_264)_0%,_transparent_55%),_radial-gradient(ellipse_at_top_right,_oklch(0.28_0.06_220)_0%,_transparent_55%)]"
      />
      {/* Hero */}
      <section className="py-14 sm:py-24 lg:py-32">
        <Badge
          variant="secondary"
          className="mb-6 border-primary/20 bg-primary/10 text-primary"
        >
          AI Systems Architect · RAG · Agents · Production AI
        </Badge>
        <h1 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] sm:leading-[1.05] max-w-4xl">
          Your AI works in the demo.{" "}
          <span className="bg-gradient-to-r from-primary to-[oklch(0.6_0.18_220)] bg-clip-text text-transparent">
            I make it work in production.
          </span>
        </h1>
        <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          I help engineering teams ship RAG, agents, and LLM features that
          survive real users — through architecture reviews, production
          readiness sprints, and embedded engagements.
        </p>

        {/* Credibility line */}
        <p className="mt-5 text-sm sm:text-base text-foreground/70 max-w-2xl">
          <span className="font-medium text-foreground">13+ years</span> building
          production systems. <span className="font-medium text-foreground">3,000+</span>{" "}
          engineers trained at Cisco, Capgemini, Genpact, GlobalLogic, and
          PepsiCo. Fixed a live RAG from{" "}
          <span className="font-medium text-foreground">29% error rate</span> to
          production-grade.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3">
          <Button asChild size="lg" className="w-full sm:w-auto group">
            <Link href="/consulting#book">
              Diagnose my AI system{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="#case-study">See the 29% case study</Link>
          </Button>
        </div>
      </section>

      {/* Trust strip */}
      <section className="mb-16 sm:mb-24 border-y border-border/60 py-8 sm:py-10">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
          Trained engineering teams at
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4">
          {TRUSTED_BY.map((org) => (
            <li
              key={org}
              className="text-base sm:text-lg font-semibold tracking-tight text-foreground/55 hover:text-foreground/80 transition-colors"
            >
              {org}
            </li>
          ))}
        </ul>
      </section>

      {/* What I Fix */}
      <section className="mb-16 sm:mb-24">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-primary mb-3">What I fix</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
            The 5 things that break AI in production.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Most AI demos fail the same way once real users show up. Here&apos;s
            what I see, and what changes when I&apos;m done.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_I_FIX.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border bg-card p-5 sm:p-6 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all"
            >
              <h3 className="font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-foreground/80">
                {item.problem}
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.explain}
              </p>
              <div className="mt-4 pt-4 border-t border-border/60 flex gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <p className="text-sm text-foreground/80">{item.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mb-16 sm:mb-24">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-primary mb-3">How I help</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
            Three engagements. Outcome-priced. No retainer creep.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Card
              key={s.title}
              className={
                s.featured
                  ? "border-primary/50 shadow-lg shadow-primary/10 relative"
                  : "hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all"
              }
            >
              {s.featured && (
                <div className="absolute -top-3 left-6">
                  <Badge className="bg-primary text-primary-foreground">
                    Most booked
                  </Badge>
                </div>
              )}
              <CardHeader>
                <p className="text-xs text-muted-foreground">
                  {s.duration} · {s.price}
                </p>
                <CardTitle className="mt-1 text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                    Who it&apos;s for
                  </p>
                  <p className="text-sm">{s.who}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    What you get
                  </p>
                  <ul className="space-y-1.5">
                    {s.get.map((g) => (
                      <li key={g} className="flex gap-2 text-sm">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-border/60">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                    Outcome
                  </p>
                  <p className="text-sm font-medium leading-relaxed">
                    {s.outcome}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/consulting">
              See full consulting details{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-16 sm:mb-24 scroll-mt-20">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-primary mb-3">
            Real production impact
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
            How a 29% error rate became a production-grade RAG.
          </h2>
        </div>
        <div className="rounded-2xl border bg-gradient-to-br from-card to-muted/30 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-destructive mb-2">
                Problem
              </p>
              <h3 className="font-semibold mb-2">29% wrong answers in production</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A live RAG looked great in demos. A 23-question golden set
                revealed it was wrong nearly a third of the time — and nobody
                had noticed for months.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                Approach
              </p>
              <h3 className="font-semibold mb-2">Eval first, fix second</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built RAGAS + LLM-as-judge + a custom faithfulness check.
                Categorized failure modes, fixed retrieval (hybrid + re-rank),
                tuned chunking, added a refusal layer.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-foreground/70 mb-2">
                Result
              </p>
              <h3 className="font-semibold mb-2">From 0.71 → 0.94 faithfulness</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recall@5 from 62% → 91%. Eval suite added to CI to prevent
                regressions. Cost down 35% from smarter routing.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <div className="grid grid-cols-3 gap-6 sm:gap-10">
              <div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  29% → 6%
                </p>
                <p className="text-xs text-muted-foreground mt-1">Error rate</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  +29 pts
                </p>
                <p className="text-xs text-muted-foreground mt-1">Recall@5</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  −35%
                </p>
                <p className="text-xs text-muted-foreground mt-1">Cost / query</p>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/articles/29-percent-wrong">
                Read the full breakdown <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="mb-16 sm:mb-24">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-3">
              Field reports
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              Production-grade deep-dives.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Companion pieces to my Medium series — with full code, evals,
              ADRs, and the numbers behind every claim.
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden sm:inline-flex shrink-0 text-sm font-medium text-primary hover:underline"
          >
            All articles &rarr;
          </Link>
        </div>
        {latest.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            First articles ship in Phase 0. Subscribe via the footer to get
            them.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex flex-col h-full rounded-xl border bg-card p-5 sm:p-6 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {a.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[0.7rem] uppercase tracking-wider font-medium text-primary bg-primary/10 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {a.readingTime && (
                      <span className="text-xs text-muted-foreground ml-auto">
                        {a.readingTime}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {a.description}
                  </p>
                  <p className="mt-auto pt-4 text-xs text-muted-foreground">
                    {new Date(a.date).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 sm:hidden">
          <Link
            href="/articles"
            className="text-sm font-medium text-primary hover:underline"
          >
            All articles &rarr;
          </Link>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
