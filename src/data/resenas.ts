import type { Resena } from "@/types/review";
import { resolveGlobDefault } from "@/utils/assets";

const reviewImages = import.meta.glob(
  "@/assets/Images/NailsImages/Resenas/*.{png,jpg,jpeg,avif,webp}",
  { eager: true, import: "default" },
) as Record<string, string>;

const getImage = (fileName: string) =>
  resolveGlobDefault(reviewImages, `NailsImages/Resenas/${fileName}`);

const createReview = (review: Omit<Resena, "avatar" | "image"> & {
  avatar: string;
  image: string;
}): Resena => ({
  ...review,
  avatar: getImage(review.avatar),
  image: getImage(review.image),
});

export const resenas: Resena[] = [
  createReview({
    id: "valentina",
    name: "Valentina R.",
    avatar: "avatar1.avif",
    image: "review1.avif",
    date: "Hace 1 semana",
    rating: 5,
    text: "¡Increíble experiencia! Grace es muy profesional y detallista. Mis uñas quedaron hermosas y duraron perfecto.",
  }),
  createReview({
    id: "camila",
    name: "Camila P.",
    avatar: "avatar2.avif",
    image: "review2.avif",
    date: "Hace 2 semanas",
    rating: 5,
    text: "El mejor lugar para consentirte. Ambiente hermoso y súper higiénico. 100% recomendado.",
  }),
  createReview({
    id: "sofia",
    name: "Sofía M.",
    avatar: "avatar1.avif",
    image: "review3.avif",
    date: "Hace 3 semanas",
    rating: 5,
    text: "Me hice el esmaltado permanente y quedó divino. Mucha atención a los detalles.",
  }),
  createReview({
    id: "antonella",
    name: "Antonella G.",
    avatar: "avatar3.avif",
    image: "review4.avif",
    date: "Hace 1 mes",
    rating: 5,
    text: "Grace tiene un talento único. Escucha lo que quieres y lo hace realidad.",
  }),
  createReview({
    id: "maria",
    name: "María José L.",
    avatar: "avatar1.avif",
    image: "review5.avif",
    date: "Hace 1 mes",
    rating: 5,
    text: "Servicio impecable desde que llegas hasta que te vas. Me encantó el diseño.",
  }),
  createReview({
    id: "daniela",
    name: "Daniela V.",
    avatar: "avatar1.avif",
    image: "review6.avif",
    date: "Hace 1 mes",
    rating: 5,
    text: "Vine por recomendación y superó mis expectativas. Uñas perfectas y un trato súper dulce.",
  }),
  createReview({
    id: "isabella",
    name: "Isabella T.",
    avatar: "avatar1.avif",
    image: "review7.avif",
    date: "Hace 2 meses",
    rating: 5,
    text: "El nail art quedó exactamente como lo pedí. Se nota el cariño en cada detalle.",
  }),
  createReview({
    id: "luciana",
    name: "Luciana F.",
    avatar: "avatar1.avif",
    image: "review8.avif",
    date: "Hace 2 meses",
    rating: 5,
    text: "Lugar hermoso, super limpio y relajante. Ya es mi estudio de confianza.",
  }),
];
