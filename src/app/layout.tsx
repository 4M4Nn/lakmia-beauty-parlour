import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    default: "Lakmia Beauty Parlour | Premium Salon in Thrikaripur, Kannur",
    template: "%s | Lakmia Beauty Parlour",
  },
  description:
    "Lakmia Beauty Parlour, Thrikaripur, Kannur — Kerala's premier bridal, hair, skin & spa destination. Award-inspired styling, bridal grooming, facials, hair spa & more. Book your transformation today.",
  keywords: [
    "beauty parlour Thrikaripur",
    "best salon Kannur",
    "bridal makeup Kannur",
    "bridal grooming Thrikaripur",
    "hair spa Kannur",
    "facial treatment Kannur",
    "unisex salon Kerala",
    "Lakmia Beauty Parlour",
    "salon near me Thrikaripur",
  ],
  authors: [{ name: "Lakmia Beauty Parlour" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Lakmia Beauty Parlour",
    title: "Lakmia Beauty Parlour | Premium Salon in Thrikaripur, Kannur",
    description:
      "Kerala's premier bridal, hair, skin & spa destination in Thrikaripur, Kannur.",
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
    title: "Lakmia Beauty Parlour | Premium Salon in Thrikaripur, Kannur",
    description:
      "Kerala's premier bridal, hair, skin & spa destination in Thrikaripur, Kannur.",
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
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
