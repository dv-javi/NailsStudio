type EagerGlobModule = Record<string, { default: string }>;
type EagerGlobDefault = Record<string, string>;

export function resolveGlobAsset(
  map: EagerGlobModule,
  relativePath: string,
): string | undefined {
  return map[`/src/assets/Images/${relativePath}`]?.default;
}

export function resolveGlobDefault(
  map: EagerGlobDefault,
  relativePath: string,
): string {
  return map[`/src/assets/Images/${relativePath}`] || "";
}

export const brandImages = import.meta.glob(
  "@/assets/Images/*.{png,webp,avif,jpg,svg}",
  { eager: true },
) as EagerGlobModule;

export const heroImages = import.meta.glob(
  "@/assets/Images/HeroImages/*.{png,webp,avif,jpg,jpeg}",
  { eager: true },
) as EagerGlobModule;

export const profileImages = import.meta.glob(
  "@/assets/Images/Profiles/*.{png,webp,avif,jpg,svg}",
  { eager: true },
) as EagerGlobModule;

export const CUSTOMER_AVATAR_IDS = [1, 2, 3, 4] as const;

export function getCustomerAvatars() {
  return CUSTOMER_AVATAR_IDS.map((id) => ({
    id,
    img: resolveGlobAsset(heroImages, `HeroImages/customer${id}.avif`),
    alt: `Cliente ${id}`,
  }));
}
