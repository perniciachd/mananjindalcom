import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTAStrip({
  title = "Working on RAG or agents in production?",
  subtitle = "Book a free 30-min call. I'll diagnose the biggest risk in your current architecture in 30 minutes flat. No pitch, no follow-up spam.",
  ctaLabel = "Book the call →",
  ctaHref = "/consulting#book",
}: {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="my-16 rounded-2xl border bg-muted/40 p-8 sm:p-10 text-center">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      <Button asChild size="lg" className="mt-6">
        <Link href={ctaHref}>{ctaLabel}</Link>
      </Button>
    </section>
  );
}
