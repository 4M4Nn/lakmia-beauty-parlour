import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment",
  description:
    "Book your appointment at Lakmia Beauty Parlour, Trikaripur, Kasaragod. Call, WhatsApp, or send an enquiry — we respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.mapQuery
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Start Your Story"
        description="Book an appointment, ask a question, or just say hello — we'd love to hear from you."
        image="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <h2 className="font-serif-display text-2xl font-bold text-foreground">
              Send Us an Enquiry
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the details below and our front desk will call you back
              within 24 hours to confirm your appointment.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal direction="right">
            <h2 className="font-serif-display text-2xl font-bold text-foreground">
              Visit Our Studio
            </h2>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm text-foreground/90">{siteConfig.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phoneHref}`} className="text-sm text-foreground/90 hover:text-primary">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-foreground/90 hover:text-primary">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="text-sm text-foreground/90">
                  {siteConfig.hours.map((h) => (
                    <p key={h.day}>
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lakmia Beauty Parlour location map"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
