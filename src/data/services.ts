import type { Servicio } from "@/types/service";
import { resolveGlobDefault } from "@/utils/assets";

const serviceImages = import.meta.glob(
  "@/assets/Images/NailsImages/Services/*.{png,jpg,jpeg,avif,webp}",
  { eager: true, import: "default" },
) as Record<string, string>;

const getImage = (fileName: string) =>
  resolveGlobDefault(
    serviceImages,
    `NailsImages/Services/${fileName}`,
  );

const createService = ({
  id,
  title,
  description,
  icon,
  image,
  duration,
  price,
  includes,
  tip,
}: {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  duration: string;
  price: string;
  includes: string[];
  tip: string;
}): Servicio => ({
  id,
  title,
  description,
  icon,
  img: getImage(image),
  link: `/${id}`,
  modalInfo: { duration, price, includes, tip },
});

export const servicios: Servicio[] = [
  createService({
    id: "manicure-gel",
    title: "Manicure en gel",
    description: "Acabado brillante y elegante con larga duración.",
    icon: "ti-hand-finger",
    image: "manicureGel.avif",
    duration: "50 min",
    price: "S/.45",
    includes: ["Preparación de uña", "Esmaltado en gel", "Sellado UV"],
    tip: "Ideal para un look limpio y duradero.",
  }),
  createService({
    id: "rubber-base",
    title: "Rubber Base",
    description: "Fortalece la uña natural con acabado flexible.",
    icon: "ti-sparkles",
    image: "rubberBase.avif",
    duration: "90 min",
    price: "S/.65",
    includes: ["Base niveladora", "Fortalecimiento", "Color opcional"],
    tip: "Perfecto para uñas débiles.",
  }),
  createService({
    id: "gel-builder",
    title: "Gel Builder",
    description: "Construcción y refuerzo con acabado profesional.",
    icon: "ti-brush",
    image: "gelBuilder.avif",
    duration: "90 min",
    price: "S/.70",
    includes: ["Construcción en gel", "Moldeado", "Nivelación"],
    tip: "Ideal para mayor resistencia y duración.",
  }),
  createService({
    id: "polygel",
    title: "Polygel",
    description: "Extensión ligera y resistente con acabado natural.",
    icon: "ti-heart",
    image: "polygel.avif",
    duration: "120 min",
    price: "S/.85",
    includes: ["Extensión", "Moldeado", "Color incluido"],
    tip: "Comodidad y resistencia en un solo servicio.",
  }),
  createService({
    id: "acrilicas",
    title: "Acrílicas",
    description: "Extensiones clásicas con máxima duración.",
    icon: "ti-star",
    image: "acrylics.avif",
    duration: "120 min",
    price: "S/.100",
    includes: ["Extensión completa", "Moldeado", "Esmaltado"],
    tip: "Perfectas para diseños elaborados.",
  }),
  createService({
    id: "pedicure-gel",
    title: "Pedicure en gel",
    description: "Pies suaves con acabado brillante y duradero.",
    icon: "ti-shoe",
    image: "pedicureGel.avif",
    duration: "60 min",
    price: "S/.55",
    includes: ["Limpieza", "Esmaltado en gel", "Hidratación"],
    tip: "El complemento ideal para tu manicure.",
  }),
  createService({
    id: "acrygel",
    title: "Acrygel",
    description: "Refuerzo y extensión ligera para pies.",
    icon: "ti-sparkles",
    image: "acrygel.avif",
    duration: "90 min",
    price: "S/.80",
    includes: ["Refuerzo", "Moldeado", "Acabado brillante"],
    tip: "Natural, resistente y elegante.",
  }),
  createService({
    id: "cat-eye",
    title: "Cat Eye",
    description: "Efecto magnético brillante y moderno.",
    icon: "ti-stars",
    image: "catEye.avif",
    duration: "10 min",
    price: "Desde S/.10",
    includes: ["Efecto magnético", "Brillo intenso"],
    tip: "Uno de los efectos más populares.",
  }),
  createService({
    id: "mano-alzada",
    title: "Mano alzada",
    description: "Diseños personalizados pintados a mano.",
    icon: "ti-pencil",
    image: "handPainted.avif",
    duration: "15 - 30 min",
    price: "Desde S/.10",
    includes: ["Diseño personalizado", "Arte manual"],
    tip: "Cada diseño es único.",
  }),
  createService({
    id: "difuminados",
    title: "Difuminados",
    description: "Transiciones suaves y elegantes de color.",
    icon: "ti-brush",
    image: "ombre.avif",
    duration: "20 min",
    price: "Desde S/.10",
    includes: ["Degradado profesional", "Acabado suave"],
    tip: "Perfecto para estilos minimalistas.",
  }),
  createService({
    id: "retiro-gel",
    title: "Retiro de gel",
    description: "Remoción segura sin dañar la uña natural.",
    icon: "ti-trash",
    image: "gelRemoval.avif",
    duration: "15 min",
    price: "S/.15",
    includes: ["Retiro seguro", "Limpieza básica"],
    tip: "Protegemos la salud de tu uña.",
  }),
  createService({
    id: "retiro-acrilico",
    title: "Retiro de acrílico",
    description: "Eliminación profesional de acrílico.",
    icon: "ti-trash",
    image: "acrylicRemoval.avif",
    duration: "30 min",
    price: "S/.45",
    includes: ["Retiro completo", "Pulido", "Hidratación"],
    tip: "Evita retirar el acrílico en casa.",
  }),
];
