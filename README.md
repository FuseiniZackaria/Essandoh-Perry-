# Essandoh Perry — Brand Site

Premium dark-editorial site for Essandoh Perry (cybersecurity · AI · speaking).
React + TypeScript + Tailwind CSS v4 + Framer Motion + React Router.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Editing content

Almost everything on the site — copy, projects, nav links, WhatsApp messages,
social links, the "Currently" line — lives in one file:

```
src/content/site.ts
```

Edit the values there; you don't need to touch any component markup for
text changes. Each export is documented by its shape (`hero`, `about`,
`expertise`, `projects`, `speaking`, `whyPerry`, `currently`, `finalCta`,
`footer`, `nav`, `social`, `whatsapp`).

### Adding or editing a project

Add an entry to the `projects` array in `src/content/site.ts`. Every field is
required by the `ProjectDetail` type, so TypeScript will tell you if anything
is missing. `type` must be `"LAB"` or `"CLIENT"` — this controls the badge
color and label on both the project card and its detail page, so it's worth
double-checking before publishing anything as client work.

### Swapping the portrait

Replace `public/images/perry-portrait.jpg` and `perry-portrait.webp` with new
exports at the same filenames (a photo close to 3:4 portrait orientation
works best with the current crop). Update the `alt` text in `hero.portrait`
inside `site.ts` to describe the new image.

### Changing the WhatsApp number

Update `personal.whatsappNumber` in `site.ts` (digits only, country code, no
`+` or spaces).

## Project structure

```
src/
  content/site.ts      — all copy and data
  lib/                 — motion variants, WhatsApp link helper
  components/          — reusable UI pieces
  pages/               — Home and the project detail template
  App.tsx              — routes + layout shell
public/
  images/              — portrait (jpg + webp)
```

## Deployment

This is a static Vite build — it deploys to Vercel, Netlify, Cloudflare
Pages, or any static host. Build command: `npm run build`. Output directory:
`dist`. Because routing is client-side, configure your host to rewrite all
paths to `/index.html` (a "SPA fallback" — Vercel/Netlify do this
automatically for Vite projects).
