import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Manan Jindal — consulting, training, speaking, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Get in touch</h1>
      <p className="mt-4 text-muted-foreground">
        Easiest way to talk: book a 30-min call. For everything else, email works.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold mb-2">Book a call</h2>
          <p className="text-sm text-muted-foreground mb-4">
            30-min discovery call. Free. No pitch, no follow-up spam.
          </p>
          <Button asChild>
            <a href={site.social.cal} target="_blank" rel="noreferrer">Open Cal.com</a>
          </Button>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold mb-2">Email</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Best for written proposals, NDAs, or anything async.
          </p>
          <Button asChild variant="outline">
            <a href={`mailto:${site.author.email}`}>{site.author.email}</a>
          </Button>
        </div>
      </div>
      <div className="mt-12 text-sm text-muted-foreground">
        <p>Also on:{" "}
          <a className="underline" href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          {" · "}
          <a className="underline" href={site.social.medium} target="_blank" rel="noreferrer">Medium</a>
          {" · "}
          <a className="underline" href={site.social.github} target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>
      <p className="mt-12 text-xs text-muted-foreground">
        Prefer a form? <Link href="/consulting" className="underline">Start with the consulting page</Link>.
      </p>
    </div>
  );
}
