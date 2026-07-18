import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import BlogCard from "@/components/shared/BlogCard";
import CtaBanner from "@/components/home/CtaBanner";
import RevealGroup from "@/components/motion/RevealGroup";
import { getAllBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Journal — Beauty Tips & Stories",
  description:
    "Bridal advice, hair and skin care tips tailored to Kerala's climate, and stories from Jisha Korambath at Lakmia Beauty Parlour, Trikaripur, Kasaragod.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Stories, Tips & Beauty Wisdom"
        description="Written by Jisha Korambath and the Lakmia team — practical advice, real experience, no filler."
        image="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </RevealGroup>
      </section>

      <CtaBanner />
    </>
  );
}
