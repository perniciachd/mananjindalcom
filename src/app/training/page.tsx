import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Corporate Training — Production AI for engineering teams",
  description:
    "Hands-on AI training rated 4.8/5 across 3,000+ engineers. Production RAG, Agentic AI, AI for Engineering Leaders, AI for PMs.",
};

const programs = [
  {
    title: "Production RAG (2 days)",
    audience: "Backend / platform engineers",
    summary:
      "Hands-on, production-focused: chunking, hybrid search, re-ranking, evals, observability, cost. Same system the 29% case study is built on.",
  },
  {
    title: "Agentic AI for Engineering Teams (2 days)",
    audience: "Senior ICs / leads",
    summary:
      "ReAct, tool-use, supervisor/planner/critic patterns, MCP, durable workflows, agent evals.",
  },
  {
    title: "AI for Engineering Leaders (1 day)",
    audience: "EMs / Directors / VPs",
    summary:
      "How to estimate, scope, hire for, and de-risk an AI initiative without writing the code.",
  },
  {
    title: "AI for Product Managers (1 day)",
    audience: "PMs / Product leads",
    summary:
      "What's actually possible, what isn't, evaluation, cost, and how to write requirements that ship.",
  },
];

export default function TrainingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
        Production AI training that engineers actually rate 4.8+/5.
      </h1>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
        Hands-on programs for engineering teams stepping into RAG, agents, and
        AI systems. 3,000+ engineers trained at Cisco, Capgemini, Brillio,
        Genpact, GlobalLogic, Oman Airports, and PepsiCo.
      </p>
      <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
        <Link href="/contact">Talk about training &rarr;</Link>
      </Button>

      <section className="mt-12 sm:mt-16">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">Programs</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {programs.map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <p className="text-xs text-muted-foreground mt-1">For: {p.audience}</p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {p.summary}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4">Format &amp; pricing</h2>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>&bull; In-house workshops (in-person India, remote elsewhere).</li>
          <li>&bull; ₹1,50,000 – ₹4,00,000 per 2-day program (in-house).</li>
          <li>&bull; Public cohorts opening in 2026.</li>
          <li>&bull; Discovery call before every engagement to tailor the curriculum.</li>
        </ul>
      </section>

      <section className="mt-12 sm:mt-16 rounded-2xl border bg-muted/40 p-6 sm:p-10 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Discuss a training for your team</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Tell me your team&apos;s starting point and what you want them to ship after. I&apos;ll send a 1-page proposal with curriculum and dates.
        </p>
        <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
          <a href="https://cal.com/mananjindal/training" target="_blank" rel="noreferrer">
            Book a training call &rarr;
          </a>
        </Button>
      </section>
    </div>
  );
}
