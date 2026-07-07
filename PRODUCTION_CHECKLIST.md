# Production Checklist — Nailstudio Grace

Use this list before launching to production. Replace every `your-domain.com` placeholder with your real domain.

## Domain & branding

- [ ] Replace `https://your-domain.com` in:
  - `index.html` (canonical, Open Graph, Twitter, JSON-LD)
  - `public/robots.txt`
  - `public/sitemap.xml`
  - `public/llms.txt`
  - `public/humans.txt`
  - `src/components/SEO.tsx` (`SITE_URL`)
- [ ] Update site name, author, and business copy if needed
- [ ] Fix route casing consistency (`/Disenos` vs `/disenos`) and update `sitemap.xml` accordingly
- [ ] Set real social profile URLs in JSON-LD (`sameAs`)

## Icons & social images

Add these files to `/public` (currently referenced but not included):

- [ ] `/public/favicon.ico`
- [ ] `/public/favicon-16x16.png`
- [ ] `/public/favicon-32x32.png`
- [ ] `/public/apple-touch-icon.png`
- [ ] `/public/android-chrome-192x192.png`
- [ ] `/public/android-chrome-512x512.png`
- [ ] `/public/og-image.jpg` (1200×630 recommended)
- [ ] `/public/twitter-image.jpg` (1200×630 recommended)

Tip: generate a full favicon pack from one source image using [realfavicongenerator.net](https://realfavicongenerator.net/).

## SEO

- [ ] Submit `https://your-domain.com/sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap to Bing Webmaster Tools (optional)
- [ ] Verify `robots.txt` is reachable at `/robots.txt`
- [ ] Add `<SEO />` to each page with page-specific `title`, `description`, `url`, and `image`
- [ ] Update `lastmod` dates in `sitemap.xml` when content changes
- [ ] Review JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results)

## PWA

- [ ] Test `/manifest.webmanifest` loads correctly
- [ ] Confirm theme/background colors match your brand
- [ ] Test “Add to Home Screen” on iOS and Android
- [ ] Consider adding a service worker if you need offline support (not included by default)

## Performance

- [ ] Replace font `preload` in `index.html` with production asset URLs after `vite build`
- [ ] Run `pnpm build` and fix any TypeScript or build errors
- [ ] Audit with Lighthouse (Performance, Accessibility, Best Practices, SEO)
- [ ] Optimize large images (AVIF/WebP, responsive sizes)
- [ ] Review third-party scripts (`AOS` CDN) — self-host if needed for CSP/performance

## Accessibility

- [ ] Keyboard-test navigation, modals, and the 404 page
- [ ] Verify `:focus-visible` styles are visible on all interactive elements
- [ ] Test with `prefers-reduced-motion: reduce` enabled in OS settings
- [ ] Run axe DevTools or Lighthouse accessibility audit
- [ ] Confirm icon-only buttons have `aria-label` across all components

## Analytics & monitoring

- [ ] Add analytics (e.g. Google Analytics 4, Plausible, or Vercel Analytics)
- [ ] Set up error monitoring (e.g. Sentry) if needed
- [ ] Configure conversion events for booking/contact actions

## Deployment headers (Vercel / Netlify)

Configure security and caching headers on your host.

### Vercel (`vercel.json` example)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Netlify (`public/_headers` example)

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

## SPA routing

- [ ] Configure fallback to `index.html` for client-side routes (Vercel/Netlify do this automatically for Vite SPAs)
- [ ] Test direct loads and refreshes on `/servicios`, `/sobre-mi`, `/resenas`, and unknown URLs (404)

## Environment & secrets

- [ ] Move API keys (EmailJS, booking URLs, etc.) to environment variables
- [ ] Never commit `.env` files with production secrets
- [ ] Set env vars in Vercel/Netlify project settings

## Legal & content

- [ ] Add Privacy Policy and Cookie notice if using analytics
- [ ] Replace placeholder text in `humans.txt` and `llms.txt`
- [ ] Verify contact details, booking links, and business hours

## Final smoke test

- [ ] Home, designs, services, about, reviews pages load
- [ ] 404 page renders and “Volver al inicio” works
- [ ] Social preview looks correct (Facebook Sharing Debugger, Twitter Card Validator)
- [ ] Mobile layout and bottom navigation work
- [ ] Contact modal and booking links open correctly

## Useful commands

```bash
pnpm build
pnpm preview
```

After preview, open the local URL and run through the checklist above.
