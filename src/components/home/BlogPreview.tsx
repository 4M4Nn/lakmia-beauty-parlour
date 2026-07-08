import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogCard from "@/components/shared/BlogCard";
import { blogPosts } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function BlogPreview() {
  const preview = blogPosts.slice(0, 3);

  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Journal"
          title="Stories, Tips & Beauty Wisdom"
          description="Advice from Jisha and the Lakmia team — written for North Kerala's climate, culture and celebrations."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-primary px-8 hover:bg-primary/90"
            )}
          >
            Read More Stories
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
