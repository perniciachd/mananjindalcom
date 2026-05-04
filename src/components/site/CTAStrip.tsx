import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTAStrip({
  title = "Your AI works in the demo. Does it survive production?",
  subtitle = "Free 30-min diagnostic call. I'll pinpoint the biggest risk in your current AI architecture and tell you exactly what to fix first. No pitch, no follow-up spam.",
  ctaLabel = "Diagnose my AI system →",
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
