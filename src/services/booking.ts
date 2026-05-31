const WHATSAPP_NUMBER = "51973574125";

const DEFAULT_BOOK_MESSAGE =
  "¡Quiero que mis uñas brillen! ¿Agendas un día para mí?";

export function getWhatsAppBookUrl(message = DEFAULT_BOOK_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppServiceUrl(serviceTitle: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero reservar ${serviceTitle}`,
  )}`;
}

export const WHATSAPP_DIRECT_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
