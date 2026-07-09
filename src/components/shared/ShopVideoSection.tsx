import SectionHeading from "@/components/shared/SectionHeading";

export default function ShopVideoSection() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Watch Our Story"
        title="Step Inside Lakmia Beauty Lounge"
        description="A look inside our Trikaripur studio and the day we opened our doors."
      />

      <div className="mx-auto mt-10 max-w-sm overflow-hidden rounded-[2rem] border border-border shadow-xl">
        <video
          className="aspect-[9/16] w-full bg-black object-cover"
          controls
          preload="metadata"
          playsInline
          poster="/media/inauguration/lakmia-ribbon-cutting-1.jpeg"
        >
          <source src="/media/video/lakmia-shop-reel.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
