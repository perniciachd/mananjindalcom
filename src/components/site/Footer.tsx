import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-5xl px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold mb-2">{site.name}</p>
          <p className="text-muted-foreground">
            AI Architect &middot; 15+ yrs &middot; {site.author.location}
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Work with me</p>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link href="/consulting" className="hover:text-foreground">Consulting</Link></li>
            <li><Link href="/training" className="hover:text-foreground">Corporate Training</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Read</p>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link href="/articles" className="hover:text-foreground">Articles</Link></li>
            <li><a href={site.social.medium} target="_blank" rel="noreferrer" className="hover:text-foreground">Medium</a></li>
            <li><a href={site.social.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a></li>
            <li><a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Newsletter</p>
          <p className="text-muted-foreground mb-2">
            Sunday deep-dive on RAG, agents, and AI systems.
          </p>
          <Link
            href="/newsletter"
            className="font-medium text-primary underline underline-offset-4"
          >
            Subscribe →
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 py-6 border-t border-border/60 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Built with Next.js &middot; Hosted on Vercel</p>
      </div>
    </footer>
  );
}
