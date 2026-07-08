import IntroAnimation from "@/components/home/IntroAnimation";
import Hero from "@/components/home/Hero";
import StoryIntro from "@/components/home/StoryIntro";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import StoryTimeline from "@/components/home/StoryTimeline";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import SchemesPreview from "@/components/home/SchemesPreview";
import BlogPreview from "@/components/home/BlogPreview";
import FaqTeaser from "@/components/home/FaqTeaser";
import CtaBanner from "@/components/home/CtaBanner";
import { siteConfig } from "@/lib/data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Thrikaripur",
      addressRegion: "Kerala",
      postalCode: "671310",
      addressCountry: "IN",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹₹",
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.time.split(" – ")[0],
      closes: h.time.split(" – ")[1],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IntroAnimation />
      <Hero />
      <StoryIntro />
      <ServicesShowcase />
      <StoryTimeline />
      <GalleryPreview />
      <Testimonials />
      <SchemesPreview />
      <BlogPreview />
      <FaqTeaser />
      <CtaBanner />
    </>
  );
}
