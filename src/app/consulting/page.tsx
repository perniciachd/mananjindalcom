import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonLd } from "@/components/site/JsonLd";
import { serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Consulting — AI Architect for RAG, Agents, LLM Systems",
  description:
    "Production-grade AI consulting. Architecture reviews, production readiness sprints, fractional AI lead. Book a free 30-min call.",
};

export default function ConsultingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
        AI systems that survive production.
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
        I help engineering teams ship RAG, agents, and LLM features that work
        in the real world &mdash; not just in demos. 15+ years building
        production systems. Trained 3,000+ engineers. Fixed a live RAG that was
        wrong 29% of the time.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="#book">Book a free 30-min call &rarr;</Link>
      </Button>

      {/* Anti-promises */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">What I won&apos;t do</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "I won't sell you a model", d: "No vendor pitches, no commissions. I help you pick what fits your stack and constraints." },
            { t: "I won't write your prompts", d: "Prompt engineering is a subset of the work, not the work. We design the system around it." },
            { t: "I won't replace your team", d: "I work with your engineers — building knowledge they keep, not dependency they pay for." },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border p-5">
              <p className="font-semibold mb-2">{x.t}</p>
              <p className="text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Packages</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Architecture Review</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">1 week &middot; remote &middot; ₹75k–1.5L</p>
            </CardHeader>
            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <p>For teams kicking off a new AI initiative.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>C4 architecture document</li>
                <li>Risk register with mitigations</li>
                <li>90-day implementation roadmap</li>
                <li>Leadership readout</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Production Readiness Sprint</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">2 weeks &middot; embedded &middot; ₹1.5–3L</p>
            </CardHeader>
            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <p>For teams with a working demo that needs to go live safely.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Eval framework + golden dataset</li>
                <li>Observability (Langfuse / OTel)</li>
                <li>Guardrails &amp; PII redaction</li>
                <li>Cost model + CI quality gates</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fractional AI Lead</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">10 hrs/wk &middot; ₹2.5–4L/month</p>
            </CardHeader>
            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <p>For scale-ups without a senior AI hire (yet).</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Architecture decisions &amp; ADRs</li>
                <li>Code review on AI PRs</li>
                <li>Hiring loops</li>
                <li>Engineering office hours</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Global rates available on request. Indian INR pricing shown above.
        </p>
      </section>

      {/* Booking */}
      <section id="book" className="mt-20 rounded-2xl border bg-muted/40 p-8 sm:p-10 text-center scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Book a free 30-min architecture call</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Tell me what you&apos;re building and what&apos;s blocking you. If we&apos;re a fit, I&apos;ll send a scoped proposal within 48 hours. If we&apos;re not, I&apos;ll point you at someone who is.
        </p>
        <Button asChild size="lg" className="mt-6">
          <a href="https://cal.com/mananjindal/discovery" target="_blank" rel="noreferrer">
            Open Cal.com &rarr;
          </a>
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          (Cal.com inline embed will replace this button once you set up your event.)
        </p>
      </section>

      <JsonLd data={serviceJsonLd({
        name: "AI Architect Consulting",
        description: "Architecture reviews, production readiness sprints, and fractional AI engineering lead engagements for RAG, agents, and LLM systems.",
        priceRange: "₹75,000 – ₹4,00,000",
      })} />
    </div>
  );
}
