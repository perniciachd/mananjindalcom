import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  mediumUrl?: string;
  githubUrl?: string;
  readingTime?: string;
  draft?: boolean;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
  const articles = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: (data.title as string) ?? slug,
      description: (data.description as string) ?? "",
      date: (data.date as string) ?? "1970-01-01",
      tags: (data.tags as string[]) ?? [],
      mediumUrl: data.mediumUrl as string | undefined,
      githubUrl: data.githubUrl as string | undefined,
      readingTime: data.readingTime as string | undefined,
      draft: (data.draft as boolean) ?? false,
    };
  });
  return articles
    .filter((a) => !a.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}
