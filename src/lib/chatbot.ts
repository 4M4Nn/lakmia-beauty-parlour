import {
  siteConfig,
  services,
  serviceCategories,
  schemes,
  faqs,
} from "@/lib/data";
import { formatServicePrice } from "@/lib/utils";

export interface ChatReply {
  text: string;
  quickReplies?: string[];
}

export const CHAT_QUICK_START = [
  "Services & pricing",
  "Bridal packages",
  "Location & hours",
  "Book an appointment",
];

export const GREETING: ChatReply = {
  text: `Hi! I'm the Lakmia Assistant 🌸 Ask me about our services, pricing, bridal packages, hours, or how to book — or tap a quick option below.`,
  quickReplies: CHAT_QUICK_START,
};

function findServiceMatch(input: string) {
  return services.find((s) => {
    const name = s.name.toLowerCase();
    if (input.includes(name)) return true;
    const slugWords = s.slug.split("-");
    return slugWords.length > 1 && slugWords.every((w) => input.includes(w));
  });
}

function findCategoryMatch(input: string) {
  return serviceCategories.find((g) => input.includes(g.category.toLowerCase()));
}

function findFaqMatch(input: string) {
  const inputWords = new Set(
    input.split(/\W+/).filter((w) => w.length > 3)
  );
  let best: { score: number; faq: (typeof faqs)[number] } | null = null;

  for (const faq of faqs) {
    const questionWords = faq.question.toLowerCase().split(/\W+/);
    const score = questionWords.filter((w) => inputWords.has(w)).length;
    if (score > 0 && (!best || score > best.score)) {
      best = { score, faq };
    }
  }
  return best && best.score >= 2 ? best.faq : null;
}

export function getBotReply(rawInput: string): ChatReply {
  const input = rawInput.trim().toLowerCase();

  if (!input) return GREETING;

  if (/^(hi|hello|hey|namaste|hii+)\b/.test(input)) {
    return GREETING;
  }

  // Specific service match
  const service = findServiceMatch(input);
  if (service) {
    return {
      text: `${service.name} — ${formatServicePrice(service)}. ${service.shortDescription}`,
      quickReplies: ["Book an appointment", "Services & pricing"],
    };
  }

  // Category match
  const category = findCategoryMatch(input);
  if (category) {
    const list = category.services
      .map((s) => `• ${s.name} — ${formatServicePrice(s)}`)
      .join("\n");
    return {
      text: `${category.category} services at Lakmia:\n${list}`,
      quickReplies: ["Book an appointment", "Bridal packages"],
    };
  }

  // Bridal / wedding
  if (/bridal|wedding|bride|groom|makeup/.test(input)) {
    const bridal = serviceCategories.find((g) => g.category === "Makeup & Bridal");
    const list = bridal
      ? bridal.services.slice(0, 6).map((s) => `• ${s.name} — ${formatServicePrice(s)}`).join("\n")
      : "";
    const bridalScheme = schemes.find((s) => s.slug === "bridal-radiance-plan");
    return {
      text: `Our Makeup & Bridal menu:\n${list}\n\nWe also have a "${bridalScheme?.name}" bundle from ₹${bridalScheme?.price.toLocaleString("en-IN")} — ask about it on /schemes.`,
      quickReplies: ["Book an appointment", "Location & hours"],
    };
  }

  // Schemes / packages / offers
  if (/scheme|package|offer|deal|discount|bundle|combo/.test(input)) {
    const list = schemes
      .map((s) => `• ${s.name} — ₹${s.price.toLocaleString("en-IN")}`)
      .join("\n");
    return {
      text: `Our current bundle packages:\n${list}\n\nSee full details on our Schemes page.`,
      quickReplies: ["Book an appointment", "Services & pricing"],
    };
  }

  // Hours
  if (/hour|open|close|timing|time\b/.test(input)) {
    const list = siteConfig.hours.map((h) => `${h.day}: ${h.time}`).join("\n");
    return {
      text: `Our hours are:\n${list}`,
      quickReplies: ["Location & hours", "Book an appointment"],
    };
  }

  // Location
  if (/location|address|where|direction|map|trikaripur|kasaragod/.test(input)) {
    return {
      text: `We're at ${siteConfig.address}. You can find directions on our Contact page.`,
      quickReplies: ["Book an appointment", "Services & pricing"],
    };
  }

  // Booking / contact
  if (/book|appointment|call|phone|whatsapp|contact|reach/.test(input)) {
    return {
      text: `You can book with us by calling or WhatsApping ${siteConfig.phone}, or emailing ${siteConfig.email}. Want me to open WhatsApp for you?`,
      quickReplies: ["Chat on WhatsApp", "Services & pricing"],
    };
  }

  // Founder / about
  if (/founder|owner|jisha|who (started|runs|owns)|about/.test(input)) {
    return {
      text: `Lakmia Beauty Lounge was founded by ${siteConfig.founderName}, ${siteConfig.founderTitle.replace("Founder — ", "")}. Read the full story on our About page.`,
      quickReplies: ["Services & pricing", "Book an appointment"],
    };
  }

  // FAQ keyword match
  const faqMatch = findFaqMatch(input);
  if (faqMatch) {
    return {
      text: faqMatch.answer,
      quickReplies: ["Services & pricing", "Book an appointment"],
    };
  }

  // Fallback
  return {
    text: `I'm not totally sure about that one — but our team can help directly on WhatsApp or you can browse our Services and FAQ pages.`,
    quickReplies: ["Chat on WhatsApp", "Services & pricing", "Location & hours"],
  };
}
