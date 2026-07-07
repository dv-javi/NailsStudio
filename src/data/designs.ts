import type { NailDesign } from "@/types/design";

const classicImages = import.meta.glob(
  "@/assets/Images/NailsImages/Desings/Classics/*.{png,jpg,jpeg,avif,webp}",
  { eager: true, import: "default" },
);

const elegantImages = import.meta.glob(
  "@/assets/Images/NailsImages/Desings/Elegants/*.{png,jpg,jpeg,avif,webp}",
  { eager: true, import: "default" },
);

const acrylicImages = import.meta.glob(
  "@/assets/Images/NailsImages/Desings/Acrylics/*.{png,jpg,jpeg,avif,webp}",
  { eager: true, import: "default" },
);

const minimalImages = import.meta.glob(
  "@/assets/Images/NailsImages/Desings/Minimalists/*.{png,jpg,jpeg,avif,webp}",
  { eager: true, import: "default" },
);

const trendingImages = import.meta.glob(
  "@/assets/Images/NailsImages/Desings/Trending/*.{png,jpg,jpeg,avif,webp}",
  { eager: true, import: "default" },
);

export const categories = [
  "todos",
  "clasicos",
  "elegantes",
  "acrilicos",
  "minimalistas",
  "tendencia",
] as const;

const createDesigns = (
  images: Record<string, unknown>,
  category: string,
  titles: string[],
  startId: number,
): NailDesign[] => {
  return Object.values(images).map((img, index) => ({
    id: startId + index,
    title: titles[index] || `${category} ${index + 1}`,
    category,
    image: img as string,
  }));
};

export const nails: NailDesign[] = [
  ...createDesigns(
    classicImages,
    "clasicos",
    ["Milky White", "Blue Serenity", "Mocha Milk", "Classic Nude"],
    1,
  ),
  ...createDesigns(
    elegantImages,
    "elegantes",
    ["Blossom French", "Daisy French", "French Blush", "Golden Veli"],
    100,
  ),
  ...createDesigns(
    acrylicImages,
    "acrilicos",
    ["Blutter French", "Diamond French", "Pink Acrylic", "Golden Star"],
    200,
  ),
  ...createDesigns(
    minimalImages,
    "minimalistas",
    ["Blutter Bloom", "Cherry Star", "Burgundy Bloom", "Pastel Stardust"],
    300,
  ),
  ...createDesigns(
    trendingImages,
    "tendencia",
    ["Crystal French", "Cosmic Chrome", "Coquette Cherry", "Cherry Pistachino"],
    400,
  ),
];
