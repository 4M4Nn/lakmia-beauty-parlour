import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";
import { blogPosts as staticBlogPosts, siteConfig } from "@/lib/data";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const DEFAULT_COVER_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop";

type AgentFrontmatter = {
  title: string;
  slug: string;
  status?: string;
  metaDescription?: string;
  targetKeyword?: string;
  secondaryKeywords?: string[];
  publishedAt?: string;
  faq?: { question: string; answer: string }[];
};

function markdownToParagraphs(markdown: string): string[] {
  return markdown
    .split(/\n\s*\n/)
    .map((block) => block.replace(/^#+\s*/, "").trim())
    .filter(Boolean);
}

function estimateReadTime(paragraphs: string[]): string {
  const words = paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

/** Blog posts written by the Nexora SEO agent (src/content/blog/*.mdx), mapped onto this site's BlogPost shape. */
function getAgentBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, f), "utf-8"));
      const fm = data as AgentFrontmatter;
      const paragraphs = markdownToParagraphs(content);
      return {
        slug: fm.slug,
        title: fm.title,
        excerpt: fm.metaDescription || paragraphs[0] || "",
        content: paragraphs,
        coverImage: DEFAULT_COVER_IMAGE,
        date: fm.publishedAt || new Date().toISOString().slice(0, 10),
        author: siteConfig.founderName,
        readTime: estimateReadTime(paragraphs),
        category: fm.targetKeyword || "Beauty Tips",
        tags: fm.secondaryKeywords?.length ? fm.secondaryKeywords : fm.targetKeyword ? [fm.targetKeyword] : [],
        status: fm.status,
      } as BlogPost & { status?: string };
    })
    .filter((post) => post.status === "published");
}

/** Static posts from data.ts merged with agent-published posts, newest first. */
export function getAllBlogPosts(): BlogPost[] {
  const agentPosts = getAgentBlogPosts();
  const agentSlugs = new Set(agentPosts.map((p) => p.slug));
  const merged = [...staticBlogPosts.filter((p) => !agentSlugs.has(p.slug)), ...agentPosts];
  return merged.sort((a, b) => b.date.localeCompare(a.date));
}
