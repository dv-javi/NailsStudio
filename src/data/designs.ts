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
    [
      "Baby Boomer",
      "Soft French",
      "Milky White",
      "Classic Nude",
      "Natural Pink",
      "French Almond",
    ],
    1,
  ),
  ...createDesigns(
    elegantImages,
    "elegantes",
    [
      "French Black",
      "Luxury Nude",
      "Dark Gold",
      "Elegant Chrome",
      "Glossy Black",
      "Royal White",
    ],
    100,
  ),
  ...createDesigns(
    acrylicImages,
    "acrilicos",
    [
      "Glossy Nude",
      "Long Square",
      "Pink Acrylic",
      "Soft Coffin",
      "Extra Shine",
      "Milky Acrylic",
    ],
    200,
  ),
  ...createDesigns(
    minimalImages,
    "minimalistas",
    [
      "Pink Minimal",
      "Clean Aura",
      "Soft Beige",
      "Tiny Hearts",
      "White Touch",
      "Minimal Chrome",
    ],
    300,
  ),
  ...createDesigns(
    trendingImages,
    "tendencia",
    [
      "Aura Glow",
      "Chrome Pink",
      "Cat Eye",
      "Mirror Shine",
      "Glazed Donut",
      "Pearl Effect",
    ],
    400,
  ),
];
