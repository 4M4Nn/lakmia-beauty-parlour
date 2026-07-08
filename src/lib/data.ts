import type {
  NavLink,
  Service,
  ServiceCategoryGroup,
  TeamMember,
  Testimonial,
  Milestone,
  StatItem,
  BlogPost,
  Scheme,
  FaqItem,
  GalleryItem,
  SocialLink,
} from "@/types";

export const siteConfig = {
  name: "Lakmia Beauty Parlour",
  tagline: "Where Every Story Becomes Beautiful",
  description:
    "Kerala's premier bridal, hair, skin and spa destination in Thrikaripur, Kannur.",
  address: "Near Thrikaripur Junction, Thrikaripur, Kannur, Kerala 671310",
  phone: "+91 94960 12345",
  phoneHref: "+919496012345",
  whatsapp: "+91 94960 12345",
  whatsappHref: "919496012345",
  email: "hello@lakmiabeauty.in",
  hours: [
    { day: "Monday – Saturday", time: "9:30 AM – 8:30 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],
  mapQuery: "Thrikaripur, Kannur, Kerala 671310",
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  {
    label: "WhatsApp",
    href: "https://wa.me/919496012345",
    icon: "whatsapp",
  },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Schemes", href: "/schemes" },
  { label: "Journal", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const stats: StatItem[] = [
  { label: "Years of Artistry", value: 12, suffix: "+" },
  { label: "Brides Transformed", value: 3200, suffix: "+" },
  { label: "Happy Clients", value: 28000, suffix: "+" },
  { label: "Awards & Recognitions", value: 9, suffix: "" },
];

export const milestones: Milestone[] = [
  {
    year: "2013",
    title: "A Dream Takes Root",
    description:
      "Founder Lakshmi Menon returned to Thrikaripur after training under celebrity stylists in Bangalore and Dubai, opening a modest two-chair studio with a single promise — to bring international technique to her home soil.",
  },
  {
    year: "2016",
    title: "The Bridal Reputation Begins",
    description:
      "A single viral bridal transformation at a Kannur wedding put Lakmia on the map. Brides began travelling from Kasaragod, Kozhikode and even the Gulf to be styled here before their big day.",
  },
  {
    year: "2019",
    title: "The Studio Doubles",
    description:
      "Lakmia expanded into a full-floor studio with dedicated bridal suites, a private grooming lounge for grooms, and Kerala's first hair-spa bar outside the district capitals.",
  },
  {
    year: "2022",
    title: "Recognised Beyond Kannur",
    description:
      "Featured by regional bridal magazines and awarded 'Emerging Salon of the Year – North Kerala', Lakmia's technique-first, story-first philosophy earned recognition alongside metro-city names.",
  },
  {
    year: "Today",
    title: "Your Story, Next",
    description:
      "A 20-member team of colourists, bridal artists, therapists and groomers now carries forward one belief — that every client walks in with a story, and walks out wearing it with confidence.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Lakshmi Menon",
    role: "Founder & Creative Director",
    bio: "Trained in advanced colour theory and bridal editorial styling, Lakshmi has personally styled over 1,200 brides across North Kerala and mentors every artist who joins the Lakmia family.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
    specialty: "Bridal Direction & Colour Artistry",
  },
  {
    name: "Arjun Nair",
    role: "Senior Hair Stylist",
    bio: "A precision-cut specialist with a decade of experience across Kochi and Bangalore studios, Arjun leads Lakmia's men's grooming lounge and modern texture cutting.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    specialty: "Precision Cuts & Men's Grooming",
  },
  {
    name: "Fathima Rasheed",
    role: "Lead Bridal Makeup Artist",
    bio: "Fathima's HD and airbrush bridal work has been the highlight of over 400 Kannur weddings, blending traditional Kerala bridal aesthetics with contemporary finish.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    specialty: "HD Bridal Makeup",
  },
  {
    name: "Divya Prakash",
    role: "Senior Skin & Spa Therapist",
    bio: "A certified aesthetician specialising in Kerala Ayurveda-infused facials and therapeutic spa rituals that restore skin long after wedding season ends.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    specialty: "Facials & Ayurvedic Spa",
  },
];

export const services: Service[] = [
  // Bridal
  {
    slug: "signature-bridal-makeover",
    name: "Signature Bridal Makeover",
    category: "Bridal",
    shortDescription:
      "Full-day HD bridal makeup, hair styling and draping for your wedding morning.",
    description:
      "Our flagship bridal package covers everything from base prep to final draping — HD or airbrush makeup, bridal hairstyling with premium extensions, saree/lehenga draping, and a dedicated artist who stays with you until you leave for the mandapam.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    duration: "4–5 hours",
    priceFrom: 15000,
    features: [
      "HD or airbrush makeup",
      "Bridal hairstyling with extensions",
      "Saree/lehenga draping",
      "False lashes & touch-up kit",
      "Dedicated artist on standby",
    ],
    popular: true,
  },
  {
    slug: "pre-bridal-glow-package",
    name: "Pre-Bridal Glow Package",
    category: "Bridal",
    shortDescription:
      "A 4-session skin, hair and body prep journey in the month before your wedding.",
    description:
      "Designed as a month-long ritual, this package combines deep-cleansing facials, hair spa, manicure-pedicure and body polishing sessions timed perfectly so you glow on cue for your big day.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
    duration: "4 sessions over 4 weeks",
    priceFrom: 12000,
    features: [
      "3 brightening facials",
      "2 hair spa sessions",
      "Manicure & pedicure",
      "Full body polishing",
      "Personalised skincare plan",
    ],
  },
  {
    slug: "groom-grooming-package",
    name: "Groom Grooming Package",
    category: "Bridal",
    shortDescription:
      "Sharp haircut, beard sculpting, skin treatment and grooming for the groom.",
    description:
      "A dedicated grooming lounge experience for the groom — precision haircut, beard shaping, D-tan facial and a relaxing head massage so he looks as sharp as his story deserves.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    duration: "2–3 hours",
    priceFrom: 4500,
    features: [
      "Precision haircut",
      "Beard sculpting & styling",
      "D-tan facial",
      "Head massage",
      "Grooming touch-up kit",
    ],
  },
  {
    slug: "mehendi-and-sangeet-look",
    name: "Mehendi & Sangeet Look",
    category: "Bridal",
    shortDescription: "Festive makeup and hairstyling for pre-wedding functions.",
    description:
      "Lighter, camera-ready glam for mehendi, haldi and sangeet functions — vibrant, long-lasting and comfortable for hours of dancing and celebration.",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200&auto=format&fit=crop",
    duration: "2 hours",
    priceFrom: 6000,
    features: [
      "Festive makeup look",
      "Braided/bun hairstyling",
      "Optional saree/gown draping",
      "Long-wear setting spray",
    ],
  },
  // Hair
  {
    slug: "signature-haircut-styling",
    name: "Signature Haircut & Styling",
    category: "Hair",
    shortDescription: "Precision cutting consultation with blow-dry finish.",
    description:
      "A face-shape-led consultation followed by precision cutting and a salon-finish blow dry — the Lakmia signature cut that holds its shape for weeks.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    duration: "45–60 min",
    priceFrom: 800,
    features: [
      "Face-shape consultation",
      "Precision cutting",
      "Wash & blow-dry finish",
      "Style recommendation",
    ],
    popular: true,
  },
  {
    slug: "global-hair-colour",
    name: "Global Hair Colour",
    category: "Hair",
    shortDescription: "Full-head colour using ammonia-free international brands.",
    description:
      "Rich, dimensional colour using ammonia-free professional colour lines, customised to your skin tone with a gloss finish for long-lasting shine.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    duration: "2–3 hours",
    priceFrom: 2500,
    features: [
      "Ammonia-free colour",
      "Skin-tone matched shade",
      "Gloss finish",
      "Post-colour care kit",
    ],
  },
  {
    slug: "keratin-smoothening",
    name: "Keratin Smoothening",
    category: "Hair",
    shortDescription: "Frizz-free, smooth, manageable hair for up to 6 months.",
    description:
      "Our keratin treatment tames frizz and adds a silky finish while keeping hair's natural movement — ideal for Kerala's humidity, with results lasting up to six months.",
    image:
      "https://images.unsplash.com/photo-1522336284037-91f7da073525?q=80&w=1200&auto=format&fit=crop",
    duration: "3 hours",
    priceFrom: 4500,
    features: [
      "Frizz control up to 6 months",
      "Humidity resistant finish",
      "Safe for coloured hair",
      "Free aftercare consultation",
    ],
  },
  {
    slug: "luxury-hair-spa",
    name: "Luxury Hair Spa",
    category: "Hair",
    shortDescription: "Deep conditioning ritual with scalp massage.",
    description:
      "A restorative ritual combining deep-conditioning masks, steam therapy and scalp massage to repair damage and restore natural shine.",
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1200&auto=format&fit=crop",
    duration: "60 min",
    priceFrom: 1200,
    features: [
      "Deep conditioning mask",
      "Steam therapy",
      "Scalp massage",
      "Shine serum finish",
    ],
  },
  // Skin & Facial
  {
    slug: "radiance-facial",
    name: "Radiance Brightening Facial",
    category: "Skin & Facial",
    shortDescription: "Vitamin-C infused facial for instant glow.",
    description:
      "A brightening facial using vitamin-C actives to even out tone and lift dullness — the go-to choice before any event.",
    image:
      "https://images.unsplash.com/photo-1616394158624-6a5ce8bcf7ca?q=80&w=1200&auto=format&fit=crop",
    duration: "60 min",
    priceFrom: 1500,
    features: [
      "Vitamin-C infusion",
      "Deep cleansing",
      "Face massage",
      "Instant glow finish",
    ],
    popular: true,
  },
  {
    slug: "ayurvedic-herbal-facial",
    name: "Ayurvedic Herbal Facial",
    category: "Skin & Facial",
    shortDescription: "Traditional Kerala herbal facial for sensitive skin.",
    description:
      "Rooted in Kerala's Ayurvedic heritage, this facial uses herbal pastes and cooling oils to calm sensitive skin and restore its natural balance.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    duration: "75 min",
    priceFrom: 1800,
    features: [
      "Herbal paste treatment",
      "Cooling oil massage",
      "Suitable for sensitive skin",
      "Chemical-free formulation",
    ],
  },
  {
    slug: "d-tan-body-polishing",
    name: "D-Tan Body Polishing",
    category: "Skin & Facial",
    shortDescription: "Full-body de-tan and exfoliation treatment.",
    description:
      "An exfoliating body scrub and pack treatment that removes tan and dead skin, leaving skin soft, even-toned and photo-ready.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    duration: "90 min",
    priceFrom: 2200,
    features: [
      "Full-body scrub",
      "De-tan pack",
      "Moisturising wrap",
      "Even-tone finish",
    ],
  },
  {
    slug: "anti-ageing-facial",
    name: "Anti-Ageing Collagen Facial",
    category: "Skin & Facial",
    shortDescription: "Firming facial with collagen-boosting actives.",
    description:
      "A results-driven facial using peptide and collagen-boosting actives to firm, lift and reduce the appearance of fine lines.",
    image:
      "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=1200&auto=format&fit=crop",
    duration: "75 min",
    priceFrom: 2800,
    features: [
      "Peptide infusion",
      "Firming massage technique",
      "Collagen mask",
      "LED finishing (select branches)",
    ],
  },
  // Spa & Body
  {
    slug: "aroma-body-massage",
    name: "Aroma Therapy Body Massage",
    category: "Spa & Body",
    shortDescription: "Full-body relaxation massage with essential oils.",
    description:
      "A full-body massage using essential-oil blends to relieve tension, improve circulation and leave you deeply relaxed.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    duration: "60 min",
    priceFrom: 2000,
    features: [
      "Essential oil blend",
      "Full-body technique",
      "Stress-relief focus",
      "Herbal tea post-session",
    ],
  },
  {
    slug: "royal-spa-ritual",
    name: "Royal Spa Ritual",
    category: "Spa & Body",
    shortDescription: "A complete 3-hour pampering journey.",
    description:
      "Our most indulgent offering — body scrub, wrap, massage and facial combined into one three-hour journey designed for complete renewal.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    duration: "3 hours",
    priceFrom: 5500,
    features: [
      "Body scrub & wrap",
      "Full massage",
      "Express facial",
      "Complimentary refreshments",
    ],
  },
  // Grooming
  {
    slug: "classic-mens-haircut",
    name: "Classic Men's Haircut",
    category: "Grooming",
    shortDescription: "Sharp, styled haircut for the modern man.",
    description:
      "A precision men's haircut finished with styling products suited to your hair type and lifestyle.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
    duration: "30 min",
    priceFrom: 400,
    features: ["Consultation", "Precision cut", "Styling finish"],
  },
  {
    slug: "beard-sculpting",
    name: "Beard Sculpting & Shave",
    category: "Grooming",
    shortDescription: "Hot towel shave and beard shaping.",
    description:
      "Traditional hot-towel shave paired with expert beard sculpting for a clean, defined finish.",
    image:
      "https://images.unsplash.com/photo-1521490878406-1e60f5cd0f0c?q=80&w=1200&auto=format&fit=crop",
    duration: "30 min",
    priceFrom: 350,
    features: ["Hot towel prep", "Beard shaping", "Aftershave balm"],
  },
  // Nails
  {
    slug: "gel-manicure-pedicure",
    name: "Gel Manicure & Pedicure",
    category: "Nails",
    shortDescription: "Long-lasting gel polish with nail care ritual.",
    description:
      "A complete nail-care ritual with cuticle work, exfoliation and chip-resistant gel polish that lasts for weeks.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
    duration: "75 min",
    priceFrom: 1500,
    features: ["Cuticle care", "Exfoliation", "Gel polish", "Hand & foot massage"],
  },
  {
    slug: "bridal-nail-art",
    name: "Bridal Nail Art",
    category: "Nails",
    shortDescription: "Custom nail art to match your bridal theme.",
    description:
      "Delicate, custom nail art designed to complement your bridal outfit and jewellery — the finishing detail brides love in photographs.",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1200&auto=format&fit=crop",
    duration: "60 min",
    priceFrom: 1800,
    features: ["Custom design", "Gel application", "Rhinestone/foil accents"],
  },
];

export const serviceCategories: ServiceCategoryGroup[] = [
  "Bridal",
  "Hair",
  "Skin & Facial",
  "Spa & Body",
  "Grooming",
  "Nails",
].map((category) => ({
  category: category as Service["category"],
  tagline:
    {
      Bridal: "Your biggest day, told through every detail.",
      Hair: "Cut, coloured and styled with editorial precision.",
      "Skin & Facial": "Glow that starts with genuine skin care.",
      "Spa & Body": "Slow down. Breathe. Be renewed.",
      Grooming: "Sharp, clean, effortlessly confident.",
      Nails: "The finishing touch that completes the look.",
    }[category as Service["category"]] ?? "",
  services: services.filter((s) => s.category === category),
}));

export const testimonials: Testimonial[] = [
  {
    name: "Anjali Suresh",
    location: "Kannur",
    quote:
      "Lakmia didn't just do my bridal makeup — they understood the story I wanted my wedding day to tell. Three years later, people still talk about how radiant I looked.",
    rating: 5,
    service: "Signature Bridal Makeover",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Fathima Beevi",
    location: "Kasaragod",
    quote:
      "I travelled 40km for my pre-bridal package and it was worth every kilometre. My skin has never looked this good, and the team made me feel completely at ease.",
    rating: 5,
    service: "Pre-Bridal Glow Package",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Vishnu Prasad",
    location: "Thrikaripur",
    quote:
      "The grooming lounge is a different experience altogether — sharp haircut, proper beard sculpting, none of the rush you get elsewhere.",
    rating: 5,
    service: "Groom Grooming Package",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Divya Menon",
    location: "Kannur",
    quote:
      "Been coming here for hair spa and keratin for two years now. My hair has genuinely transformed, and the staff remember exactly what I like every single time.",
    rating: 5,
    service: "Keratin Smoothening",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sreelakshmi Nair",
    location: "Payyanur",
    quote:
      "The Ayurvedic facial is unlike anything else in the district — gentle, authentic, and my skin felt calm for weeks after. This is craftsmanship, not just a service.",
    rating: 5,
    service: "Ayurvedic Herbal Facial",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Rahul Chandran",
    location: "Kannur",
    quote:
      "Booked the Royal Spa Ritual after a stressful work quarter — genuinely one of the most relaxing three hours I've spent. Coming back monthly now.",
    rating: 5,
    service: "Royal Spa Ritual",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    alt: "Bridal makeup application in progress",
    category: "Bridal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1000&auto=format&fit=crop",
    alt: "Bride with traditional Kerala jewellery",
    category: "Bridal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
    alt: "Precision haircut styling session",
    category: "Hair",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    alt: "Hair colour application",
    category: "Hair",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616394158624-6a5ce8bcf7ca?q=80&w=1000&auto=format&fit=crop",
    alt: "Brightening facial treatment",
    category: "Facial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    alt: "Body polishing spa treatment",
    category: "Spa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop",
    alt: "Lakmia salon interior",
    category: "Salon",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470259078422-0dab66f1d1e5?q=80&w=1000&auto=format&fit=crop",
    alt: "Salon styling station",
    category: "Salon",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop",
    alt: "Pre-bridal skincare session",
    category: "Bridal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
    alt: "Aromatherapy massage treatment",
    category: "Spa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1000&auto=format&fit=crop",
    alt: "Luxury hair spa treatment",
    category: "Hair",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1000&auto=format&fit=crop",
    alt: "Bridal nail art detail",
    category: "Bridal",
  },
];

export const schemes: Scheme[] = [
  {
    slug: "glow-starter",
    name: "Glow Starter",
    price: 1999,
    billingNote: "one-time / valid 3 months",
    description: "A perfect entry point to experience the Lakmia difference.",
    features: [
      "1 Radiance Brightening Facial",
      "1 Luxury Hair Spa",
      "1 Gel Manicure",
      "10% off any single service",
    ],
  },
  {
    slug: "bridal-radiance-plan",
    name: "Bridal Radiance Plan",
    badge: "Most Booked",
    price: 24999,
    originalPrice: 32000,
    billingNote: "complete package / valid until your wedding date",
    description:
      "Our most comprehensive bridal journey — from first consultation to the final touch-up before you walk the aisle.",
    features: [
      "Signature Bridal Makeover (wedding day)",
      "Full Pre-Bridal Glow Package (4 sessions)",
      "Mehendi/Sangeet look included",
      "Complimentary trial session",
      "Priority scheduling & dedicated artist",
    ],
    highlight: true,
  },
  {
    slug: "lakmia-elite-membership",
    name: "Lakmia Elite Membership",
    badge: "Best Value",
    price: 7999,
    originalPrice: 11000,
    billingNote: "annual membership",
    description:
      "For clients who visit often — unlock a full year of preferential pricing and priority access.",
    features: [
      "15% off all services year-round",
      "2 complimentary facials annually",
      "1 complimentary hair spa quarterly",
      "Priority appointment booking",
      "Member-only festive offers",
    ],
  },
  {
    slug: "groom-ready-plan",
    name: "Groom Ready Plan",
    price: 6999,
    billingNote: "one-time package",
    description:
      "A complete grooming journey for the groom, from skin prep to wedding-day sharpness.",
    features: [
      "3 grooming sessions before the wedding",
      "1 Groom Grooming Package (wedding day)",
      "D-tan & skin brightening included",
      "Complimentary head massage each visit",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How far in advance should I book my bridal appointment?",
    answer:
      "We recommend booking your bridal package at least 2–3 months in advance, especially during peak wedding season (November–February) when our bridal calendar fills quickly. A trial session is always included so we can perfect your look before the big day.",
    category: "Bridal",
  },
  {
    question: "Do you offer home/venue bridal services?",
    answer:
      "Yes, our bridal team travels to your venue or home across Kannur, Kasaragod and Kozhikode districts for an additional convenience fee. Please mention this while booking so we can plan artist travel time accordingly.",
    category: "Bridal",
  },
  {
    question: "What hair colour brands do you use?",
    answer:
      "We exclusively use ammonia-free, internationally recognised professional colour lines that protect hair integrity while delivering rich, long-lasting colour and shine.",
    category: "Hair & Skin",
  },
  {
    question: "Is the keratin treatment safe for previously coloured hair?",
    answer:
      "Yes, our keratin smoothening treatment is safe for coloured or chemically treated hair. In fact, many clients find their colour looks glossier and lasts longer after keratin treatment.",
    category: "Hair & Skin",
  },
  {
    question: "Do you have Ayurvedic or natural facial options?",
    answer:
      "Yes, our Ayurvedic Herbal Facial uses traditional Kerala herbal pastes and cooling oils, formulated to be gentle on sensitive skin while delivering visible results.",
    category: "Hair & Skin",
  },
  {
    question: "How does the Lakmia Elite Membership work?",
    answer:
      "The Elite Membership is an annual plan offering 15% off all services, complimentary facials and hair spa sessions through the year, and priority booking — ideal for clients who visit regularly.",
    category: "Membership",
  },
  {
    question: "Can membership benefits be shared with family?",
    answer:
      "Membership is registered to one individual, but we offer a Family Elite add-on at a discounted rate for immediate family members bundled under one account — ask our front desk for details.",
    category: "Membership",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We understand plans change. Appointments can be rescheduled free of charge with at least 24 hours' notice. Bridal package deposits are non-refundable but fully transferable to a new date within 6 months.",
    category: "Booking",
  },
  {
    question: "Do I need to pay an advance to book?",
    answer:
      "Single-service appointments do not require advance payment. Bridal packages and spa rituals require a 25% advance to confirm your artist and time slot.",
    category: "Booking",
  },
  {
    question: "Is parking available at the salon?",
    answer:
      "Yes, we have dedicated two-wheeler and car parking space right outside our Thrikaripur studio.",
    category: "General",
  },
  {
    question: "Do you serve both men and women?",
    answer:
      "Absolutely — Lakmia is a full-service unisex salon with a dedicated grooming lounge for men and private bridal suites for women, ensuring comfort for every guest.",
    category: "General",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-your-bridal-makeup-style",
    title: "How to Choose Your Bridal Makeup Style: A Kerala Bride's Guide",
    excerpt:
      "From traditional Kasavu elegance to modern HD glam — here's how to decide the bridal look that tells your story best.",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    date: "2026-05-12",
    author: "Fathima Rasheed",
    readTime: "6 min read",
    category: "Bridal",
    tags: ["bridal makeup", "wedding tips", "Kerala bride"],
    content: [
      "Every bride who walks into our Thrikaripur studio carries a different story — some want to honour their mother's traditional Kasavu-and-gold aesthetic, others dream of contemporary HD glam inspired by destination weddings they've seen online. Neither is more 'correct' than the other; the right bridal look is simply the one that feels most like you.",
      "We always start with a consultation, not a brush. Skin tone, outfit colour, venue lighting (is your muhurtham indoors under tube lights, or outdoors at golden hour?), and how long you'll be wearing the look all shape our recommendation before a single product touches your face.",
      "For most Kannur weddings, we recommend a hybrid approach: HD-finish base for camera longevity, paired with traditional touches — a defined bindi, gold-toned eye look, and a hairstyle that can hold heavy temple jewellery through hours of rituals.",
      "A trial session, always included in our Signature Bridal Makeover, is the single best decision a bride can make. It removes wedding-day surprises and gives you the confidence to enjoy your morning instead of worrying about how you'll look in the photos.",
      "Whatever style you choose, the goal is the same — that when you look back at your wedding photographs ten years from now, you see yourself, just more radiant.",
    ],
  },
  {
    slug: "monsoon-hair-care-guide-kerala",
    title: "The Complete Monsoon Hair Care Guide for Kerala's Humidity",
    excerpt:
      "Frizz, dandruff and hair fall spike every monsoon. Here's the routine our hair spa clients swear by.",
    coverImage:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1200&auto=format&fit=crop",
    date: "2026-06-02",
    author: "Arjun Nair",
    readTime: "5 min read",
    category: "Hair Care",
    tags: ["monsoon hair care", "frizz control", "scalp health"],
    content: [
      "Kannur's monsoon humidity is beautiful for the paddy fields and brutal for hair. The excess moisture in the air disrupts the hair cuticle, leading to frizz, while damp scalps become the perfect breeding ground for dandruff-causing fungus.",
      "The first fix is almost always the shampoo routine — switch to a sulphate-free, anti-fungal shampoo during monsoon months, and resist the urge to over-wash, which strips natural oils your scalp needs to stay balanced.",
      "A monthly hair spa session does more than add shine. The steam-and-mask process we use at Lakmia rebuilds the protein layer that humidity strips away, making hair genuinely more resistant to frizz between visits — not just temporarily smoother.",
      "For those prone to dandruff, we recommend our herbal scalp treatment add-on alongside the standard hair spa; it targets the scalp specifically rather than just conditioning the strands.",
      "Lastly, always dry hair fully before stepping out, even under an umbrella. Damp hair left to air-dry in humid air is the single biggest cause of monsoon frizz we see walk through our doors.",
    ],
  },
  {
    slug: "5-facials-every-skin-type-should-know",
    title: "5 Facials Every Skin Type Should Know Before Booking",
    excerpt:
      "Not all facials are created equal. Here's how to match your skin concern to the right treatment.",
    coverImage:
      "https://images.unsplash.com/photo-1616394158624-6a5ce8bcf7ca?q=80&w=1200&auto=format&fit=crop",
    date: "2026-04-18",
    author: "Divya Prakash",
    readTime: "7 min read",
    category: "Skin Care",
    tags: ["facials", "skincare", "glow"],
    content: [
      "One of the most common questions at our reception desk is simply: 'Which facial should I get?' The honest answer depends entirely on what your skin needs right now, not what's trending.",
      "For dull, tired-looking skin, our Radiance Brightening Facial with vitamin-C actives gives the fastest visible lift — ideal before an event when you need results within 24 hours.",
      "For sensitive or reactive skin, the Ayurvedic Herbal Facial is gentler, using cooling herbal pastes instead of stronger actives, making it suitable even for skin that reacts to typical salon products.",
      "If fine lines and skin laxity are your concern, the Anti-Ageing Collagen Facial's peptide infusion works on firmness over a series of sessions rather than a single dramatic result — patience here pays off.",
      "And before any wedding or big event covering your body, not just your face, the D-Tan Body Polishing treatment ensures even tone across your neck, arms and back for photographs.",
      "When in doubt, book a skin consultation first — it's complimentary at Lakmia, and our therapists will always recommend based on your skin, not the price list.",
    ],
  },
  {
    slug: "groom-grooming-101",
    title: "Groom Grooming 101: What Kannur's Grooms Are Booking in 2026",
    excerpt:
      "Grooming isn't just a haircut anymore. Here's what a modern groom's pre-wedding routine looks like.",
    coverImage:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    date: "2026-03-22",
    author: "Arjun Nair",
    readTime: "4 min read",
    category: "Grooming",
    tags: ["groom grooming", "men's style", "wedding prep"],
    content: [
      "We've seen a clear shift over the last few years — grooms in Kannur are now booking multi-session grooming plans months in advance, the same way brides always have.",
      "The most requested combination in our grooming lounge is a precision haircut paired with beard sculpting done 2–3 times in the run-up to the wedding, allowing the barber to shape growth gradually rather than making one drastic change days before the event.",
      "Skin care matters just as much. A D-tan facial a week before the wedding, paired with a hydrating treatment the day before, gives skin an even, camera-ready tone without looking obviously 'done'.",
      "On the wedding day itself, our Groom Grooming Package wraps haircut, beard finishing, skin prep and a relaxing head massage into one unhurried session — because looking sharp shouldn't feel rushed.",
      "Our advice to every groom: book your trial haircut at least three weeks out. It gives enough time to adjust length or style before the day that matters most.",
    ],
  },
  {
    slug: "why-hair-spa-is-not-a-luxury",
    title: "Why Hair Spa Isn't a Luxury — It's Hair Insurance",
    excerpt:
      "Regular hair spa treatments prevent damage before it starts. Here's the science, simply explained.",
    coverImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    date: "2026-02-10",
    author: "Lakshmi Menon",
    readTime: "5 min read",
    category: "Hair Care",
    tags: ["hair spa", "hair health", "self-care"],
    content: [
      "Many clients tell us hair spa feels indulgent — something to book only before a special occasion. We'd like to reframe that thinking entirely.",
      "Hair spa is fundamentally a maintenance treatment, not a cosmetic one. The deep-conditioning mask and steam process rebuild the protein bonds that everyday stressors — sun, salt air, pollution, styling heat — break down continuously.",
      "Clients who book monthly hair spa sessions consistently need fewer corrective treatments later, whether that's keratin smoothening for severe frizz or protein treatments for breakage. Prevention is simply cheaper and gentler than correction.",
      "The scalp massage component also matters more than people realise — improved circulation to hair follicles supports healthier growth cycles over time, something a single at-home oil massage rarely achieves with the same consistency.",
      "Think of hair spa the way you think of a dental cleaning — not urgent in the moment, but the reason you avoid a much bigger problem down the line.",
    ],
  },
  {
    slug: "the-lakmia-story",
    title: "The Lakmia Story: From a Two-Chair Studio to Kannur's Bridal Landmark",
    excerpt:
      "How a homegrown dream in Thrikaripur became North Kerala's most trusted name in bridal beauty.",
    coverImage:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
    date: "2026-01-15",
    author: "Lakshmi Menon",
    readTime: "8 min read",
    category: "Our Story",
    tags: ["our story", "founder journey", "Thrikaripur"],
    content: [
      "In 2013, Lakmia opened with two chairs, one mirror wall, and a promise I made to myself after years of training in Bangalore and Dubai — that world-class technique shouldn't require leaving home to access.",
      "Thrikaripur wasn't an obvious choice for a 'premium' salon at the time. But I believed that the women and families here deserved the same calibre of bridal artistry as any metro city, without the travel, without the premium-city prices, without losing the cultural understanding of what a Kerala wedding actually needs.",
      "The turning point came in 2016, when a bride we styled for a wedding in Kannur town had her photographs shared widely — not because of any marketing push, but because people simply hadn't seen that quality of bridal work from a local studio before. Enquiries started coming from Kasaragod, then Kozhikode, then families visiting from the Gulf for weddings back home.",
      "By 2019 we had outgrown our original space and built what is now our full studio — dedicated bridal suites, a grooming lounge for the men who were increasingly asking for the same attention their partners received, and Kerala's first hair-spa bar outside the district capitals.",
      "What hasn't changed since day one is the belief that every single client walks through our door carrying a story — a wedding, a first job, a reunion, or simply a Tuesday when they need to feel like themselves again. Our job was never just to apply product. It's to listen first, and let the technique follow.",
      "Twelve years and thousands of transformations later, that two-chair studio's promise still holds: world-class artistry, told through a distinctly Kannur story.",
    ],
  },
];
