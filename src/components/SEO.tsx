import { Helmet } from "react-helmet-async";

const SITE_NAME = "Nailstudio Grace";
const SITE_URL = "https://your-domain.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_TWITTER_IMAGE = `${SITE_URL}/twitter-image.jpg`;

export type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

function buildTitle(title: string): string {
  if (title.includes(SITE_NAME)) {
    return title;
  }

  return `${title} | ${SITE_NAME}`;
}

export default function SEO({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  url = SITE_URL,
}: SEOProps) {
  const pageTitle = buildTitle(title);
  const twitterImage = image === DEFAULT_OG_IMAGE ? DEFAULT_TWITTER_IMAGE : image;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
    </Helmet>
  );
}

export { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE };
