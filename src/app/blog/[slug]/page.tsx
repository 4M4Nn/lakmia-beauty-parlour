import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import BlogCard from "@/components/shared/BlogCard";
import CtaBanner from "@/components/home/CtaBanner";
import { siteConfig } from "@/lib/data";
import { getAllBlogPosts } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllBlogPosts().find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blogPosts = getAllBlogPosts();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author:
      post.author === siteConfig.founderName
        ? { "@type": "Person", name: post.author, jobTitle: "Certified Makeup Artist & Hairstylist" }
        : { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: `https://lakmia-beauty-parlour.vercel.app/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <section className="relative flex min-h-[40vh] items-end overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1420]/90 via-[#2b1420]/50 to-[#2b1420]/20" />
          <div className="relative mx-auto w-full max-w-3xl px-5 pb-12 pt-24 sm:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white"
            >
              <ArrowLeft className="size-3.5" />
              Back to Journal
            </Link>
            <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-accent">
              {post.category}
            </span>
            <h1 className="mt-2 font-serif-display text-3xl font-bold text-white sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary"
              >
                #{tag.replace(/\s+/g, "")}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-10 rounded-full bg-primary hover:bg-primary/90"
            )}
          >
            Book an Appointment
          </Link>
        </div>
      </article>

      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-serif-display text-2xl font-bold text-foreground">
            More From the Journal
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
