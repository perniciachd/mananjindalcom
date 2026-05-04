Personal site for **Manan Jindal** — AI Architect. Production-grade deep-dives on RAG, agents, and LLM systems, plus the home for consulting and corporate training. Companion to [medium.com/@manan_jindal](https://medium.com/@manan_jindal).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind 4 + shadcn/ui
- MDX via `@next/mdx` (Turbopack-compatible plugin config)
- `gray-matter` for frontmatter
- `next-sitemap` for sitemap + robots
- Plausible for analytics (env-driven)
- Cal.com for bookings, Resend for email (env-driven)

## Repo conventions

- Site config / branding: `src/lib/site.ts`
- Article pipeline: `src/lib/articles.ts` reads `content/articles/*.mdx`
- Article frontmatter: `title, description, date, tags, mediumUrl?, githubUrl?, readingTime?, draft?`
- Global MDX components: `mdx-components.tsx`
- Site components: `src/components/site/*`
- shadcn primitives: `src/components/ui/*`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verify before pushing)
npm run lint
```

## Add an article

1. Create `content/articles/<slug>.mdx`
2. Add frontmatter (see existing `29-percent-wrong.mdx` as template)
3. Page auto-renders at `/articles/<slug>`

