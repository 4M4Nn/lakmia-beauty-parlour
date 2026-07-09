import IntroAnimation from "@/components/home/IntroAnimation";
import Hero from "@/components/home/Hero";
import StoryIntro from "@/components/home/StoryIntro";
import ShopVideoSection from "@/components/shared/ShopVideoSection";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import StoryTimeline from "@/components/home/StoryTimeline";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import SchemesPreview from "@/components/home/SchemesPreview";
import BlogPreview from "@/components/home/BlogPreview";
import FaqTeaser from "@/components/home/FaqTeaser";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Hero />
      <StoryIntro />
      <ShopVideoSection />
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
