import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Service } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatServicePrice(service: Pick<Service, "priceFrom" | "priceTo" | "priceNote">) {
  const from = `₹${service.priceFrom.toLocaleString("en-IN")}`;
  if (service.priceTo) {
    return `${from} – ₹${service.priceTo.toLocaleString("en-IN")}`;
  }
  if (service.priceNote) {
    return `${from} ${service.priceNote}`;
  }
  return from;
}
