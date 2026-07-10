export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  name: string;
  category: "Hair" | "Makeup & Bridal" | "Facial & Skin" | "Nails" | "Waxing" | "Specialty";
  shortDescription: string;
  description: string;
  image: string;
  priceFrom: number;
  priceTo?: number;
  priceNote?: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceCategoryGroup {
  category: Service["category"];
  tagline: string;
  services: Service[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  service: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  coverImageAlt?: string;
  coverImageCredit?: { name: string; profileUrl?: string; photoUrl?: string };
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  category: string;
}

export interface Scheme {
  slug: string;
  name: string;
  badge?: string;
  price: number;
  originalPrice?: number;
  billingNote: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Bridal" | "Hair & Skin" | "Booking";
}

export interface GalleryItem {
  image: string;
  alt: string;
  category: "Bridal" | "Hair" | "Facial" | "Salon" | "Nails" | "Inauguration";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "whatsapp" | "youtube";
}
