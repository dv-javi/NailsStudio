import { getWhatsAppBookUrl } from "@/services/booking";

export const contactLinks = {
  whatsapp: "https://wa.me/51973574125",
  instagram: "https://instagram.com",
  instagramHandle: "@nailstudio.grace",
  phone: "tel:+51973574125",
  phoneDisplay: "+51 973 574 125",
} as const;

export const bookLink = getWhatsAppBookUrl();
