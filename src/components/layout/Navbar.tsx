"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(214,51,108,0.08)] border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-baseline gap-1 shrink-0">
          <span className="font-serif-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Lakmia
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.25em] text-accent sm:inline">
            Beauty Parlour
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary",
                  active ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
          <Link href="/contact" className={cn(buttonVariants({ size: "default" }), "rounded-full bg-primary hover:bg-primary/90")}>
            Book Appointment
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background sm:w-[360px]">
            <SheetHeader>
              <SheetTitle className="font-serif-display text-2xl text-primary">
                Lakmia
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-1">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary",
                      pathname === link.href ? "bg-secondary text-primary" : "text-foreground/80"
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3 px-1">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                <Phone className="size-4" />
                {siteConfig.phone}
              </a>
              <SheetClose asChild>
                <Link href="/contact" className={cn(buttonVariants(), "w-full rounded-full bg-primary hover:bg-primary/90")}>
                  Book Appointment
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
