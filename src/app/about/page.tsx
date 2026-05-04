import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "15+ years building production systems across React, Java, Python, and AWS — focused on shipping AI that survives production.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h1>
      <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
        I&apos;m Manan. I&apos;ve spent 15+ years building production systems
        across React, Java, Python, Node.js, and AWS &mdash; at Infosys, Spice
        Digital (UMANG, India&apos;s largest gov-tech platform), Hitachi, and
        Ness Digital Engineering. The last 18 months I&apos;ve focused
        entirely on getting LLMs to behave in production: RAG pipelines,
        agentic workflows, evals, observability, cost.
      </p>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        I&apos;ve also trained 3,000+ professionals at Cisco, Capgemini,
        Brillio, Genpact, GlobalLogic, Oman Airports, and PepsiCo (4.8/5
        average).
      </p>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        I write about what I ship &mdash; including the time I discovered
        my own RAG system was wrong 29% of the time and what I did about it.
      </p>
      <p className="mt-8 text-sm text-muted-foreground">
        Mohali, India. Working globally with full IST overlap and 4 hours of
        US-East overlap.
      </p>
    </div>
  );
}
