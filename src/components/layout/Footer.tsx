import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { navLinks, siteConfig, socialLinks, services } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import {
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons/SocialIcons";

const iconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  whatsapp: WhatsAppIcon,
  youtube: YouTubeIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const featuredServices = services.filter((s) => s.popular).slice(0, 4);

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-serif-display text-2xl font-bold text-primary">
              Lakmia
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} — Thrikaripur, Kannur&apos;s home for
              bridal artistry, hair, skin and spa since 2013.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-9 items-center justify-center rounded-full border border-border bg-white text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-serif-display text-lg font-semibold text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif-display text-lg font-semibold text-foreground">
              Signature Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif-display text-lg font-semibold text-foreground">
              Visit Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-primary">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  {siteConfig.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} Lakmia Beauty Parlour. All rights reserved.</p>
          <p>Crafted with care in Thrikaripur, Kannur.</p>
        </div>
      </div>
    </footer>
  );
}
