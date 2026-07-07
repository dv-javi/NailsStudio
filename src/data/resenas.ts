import type { Resena } from "@/types/review";
import { resolveGlobDefault } from "@/utils/assets";

const avatarImages = import.meta.glob(
  "@/assets/Images/Customers/Avatars/*.{png,jpg,jpeg,avif,webp}",
  { eager: true, import: "default" },
) as Record<string, string>;

const reviewImages = import.meta.glob(
  "@/assets/Images/Customers/Nails/*.{png,jpg,jpeg,avif,webp}",
  { eager: true, import: "default" },
) as Record<string, string>;

const getAvatar = (fileName: string) =>
  resolveGlobDefault(avatarImages, `Customers/Avatars/${fileName}`);

const getReviewImage = (fileName: string) =>
  resolveGlobDefault(reviewImages, `Customers/Nails/${fileName}`);

const createReview = (
  review: Omit<Resena, "avatar" | "image"> & {
    avatar: string;
    image: string;
  },
): Resena => ({
  ...review,
  avatar: getAvatar(review.avatar),
  image: getReviewImage(review.image),
});

export const resenas: Resena[] = [
  createReview({
    id: "lucia",
    name: "Lucia M.",
    avatar: "customer1.avif",
    image: "review1.avif",
    date: "Hace 1 semana",
    rating: 5,
    text: "¡Increíble experiencia! Grace es muy profesional y detallista. Mis uñas quedaron hermosas y duraron perfecto.",
  }),
  createReview({
    id: "heydi",
    name: "Heydi",
    avatar: "customer2.avif",
    image: "review2.avif",
    date: "Hace 2 semanas",
    rating: 5,
    text: "El mejor lugar para consentirte. Ambiente hermoso y súper higiénico. 100% recomendado.",
  }),
  createReview({
    id: "magaly",
    name: "Magaly",
    avatar: "customer3.avif",
    image: "review3.avif",
    date: "Hace 3 semanas",
    rating: 5,
    text: "Me hice el esmaltado permanente y quedó divino. Mucha atención a los detalles.",
  }),
  createReview({
    id: "deborah",
    name: "Deborah",
    avatar: "customer4.avif",
    image: "review4.avif",
    date: "Hace 1 mes",
    rating: 5,
    text: "Grace tiene un talento único. Escucha lo que quieres y lo hace realidad.",
  }),
  createReview({
    id: "maria",
    name: "María",
    avatar: "customer5.avif",
    image: "review5.avif",
    date: "Hace 1 mes",
    rating: 5,
    text: "Servicio impecable desde que llegas hasta que te vas. Me encantó el diseño.",
  }),
  createReview({
    id: "gabriela",
    name: "Gabriela",
    avatar: "customer6.avif",
    image: "review6.avif",
    date: "Hace 1 mes",
    rating: 5,
    text: "Vine por recomendación y superó mis expectativas. Uñas perfectas y un trato súper dulce.",
  }),
  createReview({
    id: "gemma",
    name: "Gemma",
    avatar: "customer7.avif",
    image: "review7.avif",
    date: "Hace 1 mes",
    rating: 5,
    text: "Vine por recomendación y superó mis expectativas. Uñas perfectas y un trato súper dulce.",
  }),
];
