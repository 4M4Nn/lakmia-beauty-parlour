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
    "Certified bridal, hair, skin and nail care by Jisha Korambath at Lakmia Beauty Lounge, Trikaripur, Kasaragod, Kerala.",
  address:
    "Lakmia Beauty Lounge, 1st Floor, Burj Trikaripur, Trikaripur, Kasaragod (Dt), Kerala 671310",
  phone: "+91 96565 48838",
  phoneHref: "+919656548838",
  whatsapp: "+91 96565 48838",
  whatsappHref: "919656548838",
  email: "kjisha969@gmail.com",
  instagramHandle: "@lakmia_salon_trikaripur_",
  instagramUrl: "https://instagram.com/lakmia_salon_trikaripur_",
  founderName: "Jisha Korambath",
  founderTitle: "Founder — Certified Makeup Artist & Hairstylist",
  hours: [
    { day: "Monday – Saturday", time: "9:30 AM – 8:30 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],
  mapQuery: "Burj Trikaripur, Trikaripur, Kasaragod, Kerala 671310",
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: siteConfig.instagramUrl,
    icon: "instagram",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${siteConfig.whatsappHref}`,
    icon: "whatsapp",
  },
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
  { label: "Beauty & Bridal Services", value: 30, suffix: "+" },
  { label: "Facial Treatment Options", value: 9, suffix: "" },
  { label: "Bridal & Party Makeup Looks", value: 7, suffix: "" },
  { label: "Service Categories", value: 6, suffix: "" },
];

export const milestones: Milestone[] = [
  {
    year: "Chapter One",
    title: "A Certified Beginning",
    description:
      "Jisha Korambath, a certified makeup artist and hairstylist, opens Lakmia Beauty Lounge on the 1st floor of Burj Trikaripur — with one goal: bringing genuinely certified, professional beauty expertise to her hometown.",
  },
  {
    year: "Chapter Two",
    title: "Built on Word of Mouth",
    description:
      "No shortcuts, no gimmicks — just real transformations. Brides, party guests and everyday clients start recommending Lakmia to family and friends across Trikaripur and beyond.",
  },
  {
    year: "Chapter Three",
    title: "A Menu That Keeps Growing",
    description:
      "From a simple haircut to full bridal HD glam, from a quick clean-up to advanced hair protein treatments — the service menu expands to cover nearly every beauty need under one roof.",
  },
  {
    year: "Today",
    title: "Every Story, Personally",
    description:
      "Every client at Lakmia is still attended to with the same personal, certified care the studio was built on — because a good beauty studio should feel like it was made just for you.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: siteConfig.founderName,
    role: siteConfig.founderTitle,
    bio: "A certified makeup artist and hairstylist, Jisha founded Lakmia Beauty Lounge to bring professional, certified bridal and beauty artistry to Trikaripur — personally attending to brides, grooms and everyday clients with the same care and attention to detail.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
    specialty: "Bridal Makeup & Hairstyling",
  },
];

export const services: Service[] = [
  // Hair
  {
    slug: "hair-protein-treatment",
    name: "Hair Protein Treatment (Nanoplastia / Botox / Keratin)",
    category: "Hair",
    shortDescription:
      "Smoothening protein treatment — choose Nanoplastia, Hair Botox or Keratin.",
    description:
      "A deep protein-repair treatment that smoothens frizz and strengthens hair from within. Choose between Nanoplastia, Hair Botox or Keratin based on your hair type and the finish you want — our team will guide you to the right pick during consultation.",
    image:
      "https://images.unsplash.com/photo-1522336284037-91f7da073525?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 6000,
    features: [
      "Choice of Nanoplastia, Botox or Keratin",
      "Smoothens frizz, strengthens hair",
      "Consultation included",
    ],
    popular: true,
  },
  {
    slug: "advanced-haircut",
    name: "Advanced Haircut",
    category: "Hair",
    shortDescription: "Precision haircut styled to suit your face and hair type.",
    description:
      "A precision haircut consultation and cut, finished with a styled blow-dry — for a fresh look that's easy to maintain.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 800,
    features: ["Consultation", "Precision cutting", "Styled finish"],
  },
  {
    slug: "hair-spa",
    name: "Hair Spa",
    category: "Hair",
    shortDescription: "Deep-conditioning hair spa for softer, healthier hair.",
    description:
      "A relaxing, deep-conditioning hair spa treatment that restores moisture and shine — ideal as a regular maintenance ritual between bigger treatments.",
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 1000,
    priceNote: "onwards (normal spa)",
    features: ["Deep conditioning mask", "Scalp massage", "Shine finish"],
  },

  // Makeup & Bridal
  {
    slug: "party-makeup",
    name: "Party Makeup (Guest Look)",
    category: "Makeup & Bridal",
    shortDescription: "Camera-ready glam for weddings, parties and functions.",
    description:
      "A polished, long-lasting party makeup look for wedding guests and celebrations — vibrant, photo-ready and comfortable for a full evening out.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 3000,
    features: ["Long-wear finish", "Guest/function-ready glam"],
  },
  {
    slug: "reception-look",
    name: "Reception Look",
    category: "Makeup & Bridal",
    shortDescription: "Elegant post-wedding reception makeup and styling.",
    description:
      "A refined reception-day look, styled to complement your reception outfit — polished, elegant and made to last through photos and celebrations.",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 8000,
    priceTo: 10000,
    features: ["Full makeup & hairstyling", "Outfit-matched look"],
  },
  {
    slug: "groom-makeup",
    name: "Groom Makeup",
    category: "Makeup & Bridal",
    shortDescription: "Sharp, camera-ready makeup and grooming for the groom.",
    description:
      "A natural, camera-ready makeup application for grooms — subtle enough for everyday confidence, polished enough for wedding photography.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 4000,
    features: ["Natural, camera-ready finish", "Long-lasting wear"],
  },
  {
    slug: "bridal-hd-makeup",
    name: "Bridal HD Makeup",
    category: "Makeup & Bridal",
    shortDescription: "High-definition bridal makeup for your wedding day.",
    description:
      "Full HD bridal makeup application designed to look flawless in person and in photographs — a Lakmia signature for wedding-day glamour.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 16000,
    features: ["HD finish", "Long-wear bridal formula", "Touch-up kit included"],
    popular: true,
  },
  {
    slug: "signature-hd-makeup",
    name: "Signature HD Makeup",
    category: "Makeup & Bridal",
    shortDescription: "Lakmia's premium signature HD bridal makeup experience.",
    description:
      "Our most detailed HD bridal makeup service, layered with premium techniques for a flawless, editorial-level bridal finish.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 18000,
    features: ["Premium HD techniques", "Editorial-level finish", "Extended wear"],
  },
  {
    slug: "glass-skin-makeup",
    name: "Glass Skin Makeup",
    category: "Makeup & Bridal",
    shortDescription: "Dewy, luminous \"glass skin\" bridal makeup finish.",
    description:
      "A luminous, dewy-skin finish inspired by the glass-skin trend — perfect for brides who want a fresh, radiant, barely-there-makeup look with maximum glow.",
    image:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 18000,
    features: ["Dewy, luminous finish", "Skin-first technique"],
  },
  {
    slug: "airbrush-makeup",
    name: "Airbrush Makeup",
    category: "Makeup & Bridal",
    shortDescription: "Featherlight, flawless airbrush bridal makeup.",
    description:
      "Airbrush application for an ultra-lightweight, seamless bridal finish that photographs beautifully and lasts through a long wedding day.",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 21000,
    features: ["Lightweight airbrush formula", "Seamless, photo-perfect finish"],
  },
  {
    slug: "saree-draping-normal",
    name: "Saree Draping (Normal)",
    category: "Makeup & Bridal",
    shortDescription: "Classic saree draping for everyday elegance.",
    description: "Neat, classic saree draping for weddings, functions and everyday occasions.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 600,
    features: ["Classic drape style", "Secure, comfortable fit"],
  },
  {
    slug: "saree-draping-box-folding",
    name: "Saree Draping (Box Folding)",
    category: "Makeup & Bridal",
    shortDescription: "Structured box-fold saree draping style.",
    description: "A neat, structured box-fold drape for a sharp, symmetrical saree silhouette.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 500,
    features: ["Structured box-fold pleats", "Clean, symmetrical finish"],
  },
  {
    slug: "saree-draping-fluffy-pleats",
    name: "Saree Draping (Fluffy Pleats)",
    category: "Makeup & Bridal",
    shortDescription: "Voluminous fluffy-pleat saree draping for special occasions.",
    description:
      "A voluminous, fashion-forward fluffy-pleat drape for brides and guests who want extra flair on their saree look.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 1500,
    features: ["Voluminous pleat styling", "Statement bridal look"],
  },

  // Facial & Skin
  {
    slug: "hydra-facial",
    name: "Hydra Facial",
    category: "Facial & Skin",
    shortDescription: "Deep-hydrating facial for instant glow.",
    description:
      "A deep-cleansing, deep-hydrating facial that leaves skin visibly refreshed and glowing — available in tiers based on the level of treatment.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 2000,
    priceTo: 5000,
    features: ["Deep hydration", "Instant glow", "Multiple treatment tiers"],
    popular: true,
  },
  {
    slug: "shahnaz-facial",
    name: "Shahnaz Facial",
    category: "Facial & Skin",
    shortDescription: "Herbal-based Shahnaz facial for a natural glow.",
    description:
      "A herbal-based facial treatment known for gently brightening and refreshing the skin using natural, time-tested techniques.",
    image:
      "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 2500,
    features: ["Herbal-based formula", "Gentle brightening"],
  },
  {
    slug: "vitamin-c-facial",
    name: "Vitamin C Facial",
    category: "Facial & Skin",
    shortDescription: "Brightening facial with vitamin C actives.",
    description:
      "A brightening facial using vitamin C to even out tone and lift dullness — a great pick before any event.",
    image:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 2000,
    features: ["Vitamin C infusion", "Brightens & evens tone"],
  },
  {
    slug: "aroma-facial",
    name: "Aroma Facial",
    category: "Facial & Skin",
    shortDescription: "Relaxing aroma-therapy facial treatment.",
    description:
      "A calming facial built around aromatic actives, designed to relax while it refreshes tired-looking skin.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 2500,
    features: ["Aromatic actives", "Relaxing application"],
  },
  {
    slug: "bridal-glow-facial",
    name: "Bridal Glow Facial",
    category: "Facial & Skin",
    shortDescription: "Pre-bridal facial designed for that wedding-day glow.",
    description:
      "A facial specifically designed for brides-to-be, timed in the run-up to the wedding for a natural, camera-ready glow.",
    image:
      "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 2500,
    features: ["Pre-bridal glow prep", "Camera-ready finish"],
  },
  {
    slug: "o3-plus-facial",
    name: "O3+ Facial",
    category: "Facial & Skin",
    shortDescription: "Advanced O3+ facial for deeper skin renewal.",
    description:
      "An advanced facial treatment using the O3+ range for deeper cleansing and visible skin renewal.",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 3500,
    features: ["Advanced O3+ range", "Deep skin renewal"],
  },
  {
    slug: "pimple-treatment",
    name: "Pimple Treatment",
    category: "Facial & Skin",
    shortDescription: "Targeted treatment for active breakouts.",
    description:
      "A focused treatment for active breakouts and pimple-prone skin, aimed at calming irritation and reducing recurrence.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 1500,
    features: ["Targeted spot treatment", "Calms active breakouts"],
  },
  {
    slug: "acne-facial",
    name: "Acne Facial",
    category: "Facial & Skin",
    shortDescription: "Deep-cleansing facial for acne-prone skin.",
    description:
      "A deep-cleansing facial formulated for acne-prone skin, helping to clear congestion while keeping skin calm and balanced.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 3000,
    features: ["Deep-cleansing formula", "Suited to acne-prone skin"],
  },
  {
    slug: "korean-facial",
    name: "Korean Facial",
    category: "Facial & Skin",
    shortDescription: "Multi-step Korean-inspired glass-skin facial.",
    description:
      "A multi-step, Korean-inspired facial focused on hydration and that sought-after glass-skin glow.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 3000,
    features: ["Multi-step routine", "Hydration-first glow"],
  },
  {
    slug: "clean-up",
    name: "Clean Up",
    category: "Facial & Skin",
    shortDescription: "Quick refresh clean-up for everyday upkeep.",
    description:
      "A quick, effective clean-up to clear congestion and refresh the skin — perfect for regular upkeep between facials.",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 500,
    features: ["Quick refresh", "Great for regular upkeep"],
  },
  {
    slug: "clean-up-detan",
    name: "Clean Up + De-tan (Bleach)",
    category: "Facial & Skin",
    shortDescription: "Clean-up combined with de-tan bleach treatment.",
    description:
      "Our clean-up service combined with a de-tanning bleach treatment for a brighter, more even-toned finish.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 650,
    features: ["Clean-up + de-tan combo", "Brighter, even-toned finish"],
  },

  // Nails
  {
    slug: "manicure",
    name: "Manicure",
    category: "Nails",
    shortDescription: "Hand care and nail grooming ritual.",
    description:
      "A complete manicure — cuticle care, shaping and polish — for neat, well-groomed hands.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 500,
    features: ["Cuticle care", "Shaping & polish"],
  },
  {
    slug: "pedicure",
    name: "Pedicure",
    category: "Nails",
    shortDescription: "Foot care and nail grooming ritual.",
    description:
      "A relaxing pedicure with exfoliation, foot massage and polish — a well-deserved reset for tired feet.",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 1000,
    features: ["Exfoliation & massage", "Neat polish finish"],
    popular: true,
  },

  // Waxing
  {
    slug: "face-wax",
    name: "Face Wax",
    category: "Waxing",
    shortDescription: "Gentle facial waxing for smooth skin.",
    description: "Quick, gentle facial waxing for smooth, hair-free skin.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 350,
    features: ["Gentle technique", "Smooth finish"],
  },
  {
    slug: "underarms-wax",
    name: "Underarms Waxing",
    category: "Waxing",
    shortDescription: "Quick and gentle underarm waxing.",
    description: "Fast, gentle underarm waxing for a clean, smooth finish.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 400,
    features: ["Quick service", "Gentle on skin"],
  },
  {
    slug: "full-leg-wax",
    name: "Full Leg Waxing",
    category: "Waxing",
    shortDescription: "Complete leg waxing for smooth, hair-free skin.",
    description: "Full-leg waxing from thigh to ankle for long-lasting smoothness.",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 1500,
    features: ["Full-leg coverage", "Long-lasting smoothness"],
  },
  {
    slug: "full-hand-wax",
    name: "Full Hand Waxing",
    category: "Waxing",
    shortDescription: "Complete arm waxing for smooth, hair-free skin.",
    description: "Full-hand (arm) waxing for a clean, smooth finish from shoulder to wrist.",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 1000,
    features: ["Full-arm coverage", "Smooth, even finish"],
  },
  {
    slug: "full-body-wax",
    name: "Full Body Waxing",
    category: "Waxing",
    shortDescription: "Complete full-body waxing service.",
    description: "A complete full-body waxing session for thorough, long-lasting smoothness.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 4000,
    features: ["Complete full-body coverage", "Long-lasting results"],
  },

  // Specialty
  {
    slug: "microblading",
    name: "Eyebrow Microblading",
    category: "Specialty",
    shortDescription: "Semi-permanent, natural-looking eyebrow enhancement.",
    description:
      "A semi-permanent microblading technique that fills and shapes eyebrows for a natural, defined look that lasts.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 3000,
    features: ["Semi-permanent technique", "Natural, defined shape"],
  },
  {
    slug: "warts-removal",
    name: "Warts Removal",
    category: "Specialty",
    shortDescription: "Quick, minor skin treatment to remove warts.",
    description:
      "A quick, minor skin treatment to safely remove warts, priced per wart.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    priceFrom: 50,
    priceNote: "per wart",
    features: ["Quick, minor procedure", "Priced per wart"],
  },
];

export const serviceCategories: ServiceCategoryGroup[] = [
  "Hair",
  "Makeup & Bridal",
  "Facial & Skin",
  "Nails",
  "Waxing",
  "Specialty",
].map((category) => ({
  category: category as Service["category"],
  tagline:
    {
      Hair: "Cut, treated and styled with certified technique.",
      "Makeup & Bridal": "Every look, from guest glam to full bridal HD.",
      "Facial & Skin": "Glow that starts with genuine skin care.",
      Nails: "The finishing touch that completes the look.",
      Waxing: "Smooth, quick, and comfortable.",
      Specialty: "The little details that make a big difference.",
    }[category as Service["category"]] ?? "",
  services: services.filter((s) => s.category === category),
}));

export const testimonials: Testimonial[] = [
  {
    name: "Anjali Suresh",
    location: "Kannur",
    quote:
      "My Bridal HD Makeup at Lakmia was exactly what I wanted — Jisha understood the look I was going for and executed it perfectly. Three years later, people still talk about how radiant I looked.",
    rating: 5,
    service: "Bridal HD Makeup",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Fathima Beevi",
    location: "Kasaragod",
    quote:
      "I did the Bridal Glow Facial in the weeks before my wedding and my skin has never looked better. The team made me feel completely at ease every visit.",
    rating: 5,
    service: "Bridal Glow Facial",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Vishnu Prasad",
    location: "Trikaripur",
    quote:
      "Got my Groom Makeup and haircut done here before my wedding — natural finish, no rush, and it photographed beautifully.",
    rating: 5,
    service: "Groom Makeup",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Divya Menon",
    location: "Kannur",
    quote:
      "Been coming here for the hair protein treatment for over a year now. My hair has genuinely transformed, and the results last for months.",
    rating: 5,
    service: "Hair Protein Treatment",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sreelakshmi Nair",
    location: "Payyanur",
    quote:
      "The Korean Facial here is unlike anything else in the area — my skin felt hydrated and glowing for weeks after. Genuine craftsmanship, not just a service.",
    rating: 5,
    service: "Korean Facial",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Rahul Chandran",
    location: "Kasaragod",
    quote:
      "Booked the Signature HD Makeup package for a family function and it was worth every rupee — detailed, patient work and a stunning final look.",
    rating: 5,
    service: "Signature HD Makeup",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    image: "/media/inauguration/lakmia-ribbon-cutting-1.jpeg",
    alt: "Ribbon-cutting ceremony at the opening of Lakmia Beauty Lounge, Trikaripur",
    category: "Inauguration",
  },
  {
    image: "/media/inauguration/lakmia-lamp-lighting.jpeg",
    alt: "Traditional lamp-lighting ceremony at Lakmia Beauty Lounge's inauguration",
    category: "Inauguration",
  },
  {
    image: "/media/inauguration/lakmia-family-portrait.jpeg",
    alt: "The Korambath family celebrating the opening of Lakmia Beauty Lounge",
    category: "Inauguration",
  },
  {
    image: "/media/inauguration/lakmia-family-group.jpeg",
    alt: "Family and guests inside Lakmia Beauty Lounge on opening day",
    category: "Inauguration",
  },
  {
    image: "/media/inauguration/lakmia-inauguration-guests.jpeg",
    alt: "Guests gathered for the Lakmia Beauty Lounge inauguration ceremony",
    category: "Inauguration",
  },
  {
    image: "/media/inauguration/lakmia-ribbon-cutting-2.jpeg",
    alt: "Chief guest cutting the ribbon at Lakmia Beauty Lounge's launch",
    category: "Inauguration",
  },
  {
    image: "/media/inauguration/lakmia-team-portrait.jpeg",
    alt: "Portrait inside the Lakmia Beauty Lounge studio",
    category: "Salon",
  },
  {
    image: "/media/inauguration/lakmia-salon-interior.jpeg",
    alt: "Lakmia Beauty Lounge pedicure and styling stations",
    category: "Salon",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    alt: "Bridal HD makeup application in progress",
    category: "Bridal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
    alt: "Bride with traditional Kerala jewellery and saree draping",
    category: "Bridal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
    alt: "Advanced haircut styling session",
    category: "Hair",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522336284037-91f7da073525?q=80&w=1000&auto=format&fit=crop",
    alt: "Hair protein treatment session",
    category: "Hair",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=1000&auto=format&fit=crop",
    alt: "Brightening facial treatment",
    category: "Facial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    alt: "Clean-up and de-tan skin treatment",
    category: "Facial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop",
    alt: "Lakmia Beauty Lounge studio interior",
    category: "Salon",
  },
  {
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop",
    alt: "Salon styling station",
    category: "Salon",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?q=80&w=1000&auto=format&fit=crop",
    alt: "Bridal glow facial session",
    category: "Facial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
    alt: "Aroma facial treatment",
    category: "Facial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1000&auto=format&fit=crop",
    alt: "Luxury hair spa treatment",
    category: "Hair",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
    alt: "Bridal manicure detail",
    category: "Nails",
  },
];

export const schemes: Scheme[] = [
  {
    slug: "glow-starter",
    name: "Glow Starter",
    price: 2999,
    originalPrice: 3500,
    billingNote: "one-time bundle",
    description:
      "A perfect entry point to experience Lakmia — skin, hair and hands, all in one visit.",
    features: [
      "1 Vitamin C Facial",
      "1 Hair Spa",
      "1 Manicure",
    ],
  },
  {
    slug: "bridal-radiance-plan",
    name: "Bridal Radiance Plan",
    badge: "Most Booked",
    price: 18499,
    originalPrice: 20100,
    billingNote: "complete bridal-day bundle",
    description:
      "Our most-booked bridal bundle — HD makeup, saree draping, hair spa and a pre-glow facial, all in one package.",
    features: [
      "Bridal HD Makeup (wedding day)",
      "Saree Draping (Normal)",
      "1 Hair Spa session",
      "1 Bridal Glow Facial",
    ],
    highlight: true,
  },
  {
    slug: "signature-glam-package",
    name: "Signature Glam Package",
    badge: "Premium",
    price: 20999,
    originalPrice: 23000,
    billingNote: "complete premium bundle",
    description:
      "For brides who want the full premium experience — Signature HD Makeup, statement draping and an advanced facial.",
    features: [
      "Signature HD Makeup (wedding day)",
      "Saree Draping (Fluffy Pleats)",
      "1 O3+ Facial",
    ],
  },
  {
    slug: "groom-ready-plan",
    name: "Groom Ready Plan",
    price: 6999,
    originalPrice: 8150,
    billingNote: "one-time bundle",
    description:
      "A complete grooming bundle for the groom, from a fresh haircut to wedding-day makeup.",
    features: [
      "Groom Makeup (wedding day)",
      "1 Advanced Haircut",
      "1 Face Wax",
      "1 Acne Facial",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How far in advance should I book my bridal appointment?",
    answer:
      "We recommend booking your bridal package at least 4–6 weeks in advance, especially during wedding season, so we can plan your look and confirm your preferred time slot.",
    category: "Bridal",
  },
  {
    question:
      "What's the difference between Bridal HD, Signature HD, Glass Skin and Airbrush makeup?",
    answer:
      "Bridal HD Makeup is our classic high-definition finish. Signature HD adds premium layering techniques for an editorial-level result. Glass Skin focuses on a dewy, luminous, skin-first finish. Airbrush uses a lightweight airbrush formula for an ultra-seamless look. We're happy to help you choose the right one for your skin and outfit during a consultation.",
    category: "Bridal",
  },
  {
    question: "Do you offer home or venue bridal services?",
    answer:
      "For home or venue bookings, please message us directly on WhatsApp or Instagram to check availability and any additional charges for your date and location.",
    category: "Bridal",
  },
  {
    question: "Which protein treatment should I choose — Nanoplastia, Botox or Keratin?",
    answer:
      "All three smoothen frizz and strengthen hair, but they differ in finish and hair-type suitability. During your visit, we'll assess your hair and recommend the best fit — all three are priced the same, so there's no wrong choice to try.",
    category: "Hair & Skin",
  },
  {
    question: "Which facial should I choose?",
    answer:
      "It depends on your skin's need: Hydra Facial and Vitamin C Facial are great for a quick glow, Acne Facial and Pimple Treatment target breakouts, Korean Facial and O3+ Facial go deeper for hydration and renewal, and Bridal Glow Facial is timed specifically for upcoming events. Ask us at the front desk if you're unsure — we're happy to recommend.",
    category: "Hair & Skin",
  },
  {
    question: "Do you offer saree draping without makeup?",
    answer:
      "Yes — saree draping (Normal, Box Folding or Fluffy Pleats) is available as a standalone service, no makeup booking required.",
    category: "Booking",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We understand plans change. Please inform us as early as possible if you need to reschedule, so we can offer your slot to another client and find you a new time that works.",
    category: "Booking",
  },
  {
    question: "Do I need to pay an advance to book?",
    answer:
      "Single-service appointments generally don't require advance payment. For bridal packages, we may request a partial advance to confirm your date — please ask us directly when booking.",
    category: "Booking",
  },
  {
    question: "Where exactly is Lakmia Beauty Lounge located?",
    answer:
      "We're on the 1st floor of Burj Trikaripur, a well-known landmark building in Trikaripur town, Kasaragod district, Kerala — easy to find and reach.",
    category: "General",
  },
  {
    question: "Do you serve both men and women?",
    answer:
      "Yes — our menu includes services for everyone, from groom makeup, haircuts and waxing to bridal makeup, facials and nail care.",
    category: "General",
  },
  {
    question: "Do you treat minor skin concerns like warts?",
    answer:
      "Yes, we offer quick wart removal, priced per wart. Ask our team during your visit for a quick assessment.",
    category: "General",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-your-bridal-makeup-style",
    title: "Bridal HD, Signature HD, Glass Skin or Airbrush — Which One Is Right for You?",
    excerpt:
      "A guide to choosing between Lakmia's four bridal makeup styles, based on your skin, outfit and the finish you want on camera.",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    date: "2026-05-12",
    author: "Jisha Korambath",
    readTime: "6 min read",
    category: "Bridal",
    tags: ["bridal makeup", "wedding tips", "Kerala bride"],
    content: [
      "One of the most common questions I hear at Lakmia is simple: 'Which bridal makeup should I book?' The honest answer depends on your skin, your outfit, and how you want to look in photographs versus in person.",
      "Bridal HD Makeup is our classic choice — a reliable, high-definition finish that holds up through a long wedding day and photographs cleanly under most lighting.",
      "Signature HD Makeup builds on that with more detailed, premium layering techniques for a more editorial, dramatic finish — a good pick if you want your bridal look to feel a notch more elevated.",
      "Glass Skin Makeup is for brides who want to look like themselves, just glowing — a dewy, luminous, skin-first finish that's especially popular for daytime ceremonies and outdoor venues.",
      "Airbrush Makeup uses a lightweight airbrush formula for an almost weightless, seamless finish — ideal if you want maximum wear time with minimal product feel on the skin.",
      "Whatever you choose, come in for a consultation before your big day. Skin tone, outfit colour and venue lighting all shape the right recommendation, and it's always easier to decide with a proper conversation rather than guessing from photos online.",
    ],
  },
  {
    slug: "monsoon-hair-care-guide-kerala",
    title: "The Complete Monsoon Hair Care Guide for Kerala's Humidity",
    excerpt:
      "Frizz and dull hair spike every monsoon. Here's the routine we recommend to our hair spa clients at Lakmia.",
    coverImage:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1200&auto=format&fit=crop",
    date: "2026-06-02",
    author: "Team Lakmia",
    readTime: "5 min read",
    category: "Hair Care",
    tags: ["monsoon hair care", "frizz control", "scalp health"],
    content: [
      "Kasaragod and Kannur's monsoon humidity is tough on hair. The excess moisture in the air disrupts the hair cuticle, leading to frizz and a dull, weighed-down look.",
      "The first fix is often the shampoo routine — avoid over-washing during monsoon months, which strips the natural oils your scalp needs to stay balanced.",
      "A monthly hair spa session does more than add shine. The deep-conditioning and steam process helps rebuild the protein layer that humidity strips away, making hair genuinely more resistant to frizz between visits.",
      "If frizz is a persistent problem regardless of season, our hair protein treatment (Nanoplastia, Botox or Keratin) tackles it at a deeper level — the effects last for months, not days.",
      "Lastly, always dry hair fully before stepping out, even under an umbrella. Damp hair left to air-dry in humid air is one of the biggest causes of monsoon frizz.",
    ],
  },
  {
    slug: "which-facial-should-you-book",
    title: "Nine Facials, One Decision: Which Facial Should You Book at Lakmia?",
    excerpt:
      "From Hydra Facial to Korean Facial — a simple guide to matching your skin concern to the right treatment.",
    coverImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    date: "2026-04-18",
    author: "Team Lakmia",
    readTime: "6 min read",
    category: "Skin Care",
    tags: ["facials", "skincare", "glow"],
    content: [
      "One of the most common questions at our reception desk is simply: 'Which facial should I get?' The honest answer depends on what your skin needs right now, not what's trending.",
      "For dull, tired-looking skin, our Hydra Facial or Vitamin C Facial give the fastest visible lift — ideal before an event when you need results within a day or two.",
      "For active breakouts, Pimple Treatment targets specific spots, while our Acne Facial works more broadly on congested, acne-prone skin.",
      "If you want a deeper reset, the Korean Facial and O3+ Facial go further — Korean Facial for that hydrated glass-skin glow, O3+ for deeper cleansing and renewal.",
      "The Shahnaz Facial and Aroma Facial are gentler, relaxing options — great for regular upkeep rather than solving a specific concern.",
      "And if you're getting ready for your wedding, the Bridal Glow Facial is timed and formulated specifically to have you glowing on the day itself.",
      "When in doubt, just ask us — we'll always recommend based on your skin, not the price list.",
    ],
  },
  {
    slug: "groom-grooming-101",
    title: "Groom Grooming 101: A Simple Pre-Wedding Checklist",
    excerpt:
      "Groom Makeup, a fresh haircut and a proper face wax — here's what a modern groom's pre-wedding routine should include.",
    coverImage:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    date: "2026-03-22",
    author: "Team Lakmia",
    readTime: "4 min read",
    category: "Grooming",
    tags: ["groom grooming", "men's style", "wedding prep"],
    content: [
      "We've noticed grooms increasingly booking their pre-wedding grooming ahead of time, the same way brides always have.",
      "Start with an Advanced Haircut a couple of weeks before the wedding — enough time to adjust the style if needed, but fresh enough to still look sharp on the day.",
      "A Face Wax a few days before the wedding keeps skin clean and camera-ready without looking obviously 'done'.",
      "On the wedding day itself, our Groom Makeup service gives a natural, camera-ready finish — subtle enough for everyday confidence, polished enough for wedding photography.",
      "Our advice to every groom: book your haircut trial a few weeks out, and don't leave your Groom Makeup booking to the last minute — wedding-day slots fill up fast.",
    ],
  },
  {
    slug: "why-hair-spa-is-not-a-luxury",
    title: "Why Hair Spa Isn't a Luxury — It's Hair Maintenance",
    excerpt:
      "Regular hair spa sessions prevent damage before it starts. Here's why we recommend it as routine care, not an occasional treat.",
    coverImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    date: "2026-02-10",
    author: "Jisha Korambath",
    readTime: "5 min read",
    category: "Hair Care",
    tags: ["hair spa", "hair health", "self-care"],
    content: [
      "Many clients tell me hair spa feels indulgent — something to book only before a special occasion. I'd like to reframe that thinking.",
      "Hair spa is fundamentally a maintenance treatment, not a cosmetic one. The deep-conditioning and steam process helps rebuild what everyday stressors — sun, styling heat, hard water — break down continuously.",
      "Clients who book regular hair spa sessions often need fewer corrective treatments later, whether that's a full protein treatment for severe frizz or repeated clean-up visits for damage control. Prevention is simply gentler than correction.",
      "The scalp massage component matters too — improved circulation to hair follicles can support healthier-looking hair over time.",
      "Think of hair spa the way you think of any routine upkeep — not urgent in the moment, but the reason you avoid a bigger problem down the line.",
    ],
  },
  {
    slug: "the-lakmia-story",
    title: "The Lakmia Story: Certified Artistry, Built for Trikaripur",
    excerpt:
      "How a certified makeup artist and hairstylist built Lakmia Beauty Lounge into a trusted name in Trikaripur.",
    coverImage:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
    date: "2026-01-15",
    author: "Jisha Korambath",
    readTime: "6 min read",
    category: "Our Story",
    tags: ["our story", "founder journey", "Trikaripur"],
    content: [
      "I'm Jisha Korambath, a certified makeup artist and hairstylist, and the founder of Lakmia Beauty Lounge in Trikaripur.",
      "When I started Lakmia, my goal was simple — to bring genuinely certified, professional beauty expertise to my hometown, without anyone having to travel elsewhere for it. Certification matters to me because clients deserve to know the person working on their hair or skin actually knows the craft, not just the tools.",
      "Over time, the service menu at Lakmia has grown from the essentials — haircuts, hair spa — into a full range covering bridal makeup, protein treatments, facials, waxing, nail care and more. Every addition came from listening to what clients actually asked for.",
      "What hasn't changed is how I approach every appointment: understanding what the client wants first, and letting technique follow. Whether it's a bride's HD makeup on her wedding morning or a quick clean-up on an ordinary Tuesday, the attention is the same.",
      "Lakmia Beauty Lounge is on the 1st floor of Burj Trikaripur — I'd love for you to visit and experience it for yourself.",
    ],
  },
];
