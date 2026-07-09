import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatbot/ChatWidget";
import { siteConfig, serviceCategories } from "@/lib/data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://lakmia-beauty-parlour.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lakmia Beauty Parlour | Bridal & Beauty Salon in Trikaripur, Kasaragod",
    template: "%s | Lakmia Beauty Parlour",
  },
  description:
    "Lakmia Beauty Parlour, Trikaripur, Kasaragod — certified bridal makeup, hair, facial and nail care by Jisha Korambath. 30+ services. Book your appointment today.",
  keywords: [
    "beauty parlour Trikaripur",
    "beauty parlour Kasaragod",
    "best salon near Kannur",
    "bridal makeup Trikaripur",
    "bridal makeup Kasaragod",
    "HD bridal makeup Kerala",
    "hair protein treatment Trikaripur",
    "hydra facial Kasaragod",
    "party makeup Trikaripur",
    "groom makeup Kerala",
    "Lakmia Beauty Parlour",
    "Jisha Korambath makeup artist",
    "salon near me Trikaripur",
  ],
  authors: [{ name: siteConfig.founderName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Lakmia Beauty Parlour",
    title: "Lakmia Beauty Parlour | Bridal & Beauty Salon in Trikaripur, Kasaragod",
    description:
      "Certified bridal makeup, hair, facial and nail care by Jisha Korambath in Trikaripur, Kasaragod, Kerala.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Lakmia Beauty Parlour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakmia Beauty Parlour | Bridal & Beauty Salon in Trikaripur, Kasaragod",
    description:
      "Certified bridal makeup, hair, facial and nail care by Jisha Korambath in Trikaripur, Kasaragod, Kerala.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteUrl}/#business`,
    name: siteConfig.name,
    url: siteUrl,
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, Burj Trikaripur",
      addressLocality: "Trikaripur",
      addressRegion: "Kerala",
      postalCode: "671310",
      addressCountry: "IN",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [siteConfig.instagramUrl],
    founder: {
      "@type": "Person",
      name: siteConfig.founderName,
      jobTitle: "Certified Makeup Artist & Hairstylist",
    },
    areaServed: ["Trikaripur", "Kasaragod", "Kannur", "Payyanur", "Nileshwaram"],
    priceRange: "₹350 – ₹21,000",
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.time.split(" – ")[0],
      closes: h.time.split(" – ")[1],
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lakmia Beauty Parlour Services",
      itemListElement: serviceCategories.map((group) => ({
        "@type": "OfferCatalog",
        name: group.category,
        itemListElement: group.services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.shortDescription,
          },
          price: s.priceFrom,
          priceCurrency: "INR",
        })),
      })),
    },
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
