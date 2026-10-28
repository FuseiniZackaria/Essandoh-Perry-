# Essandoh Perry — Brand Site

Premium dark-editorial site for Essandoh Perry (practical AI · cybersecurity · speaking).
React + TypeScript + Tailwind CSS v4 + Framer Motion + React Router, with a Vercel serverless API for Elsie.

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

## Elsie AI assistant

The chat UI is mounted across the site. Its Vercel function is `api/chat.ts`;
the Gemini API key and all provider credentials are server-only. Never use
a `VITE_` prefix for secrets. Configure these environment variables in the
Vercel project settings (and in a local, untracked `.env` file when testing):

| Variable | Required | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | Yes | Server-side Google Gemini API key |
| `GEMINI_MODEL` | No | Gemini model ID; defaults to `gemini-2.5-flash` |
| `RESEND_API_KEY` | For email alerts | Resend API key for booking/follow-up emails |
| `ALERT_FROM_EMAIL` | For email alerts | Verified sender address |
| `ALERT_TO_EMAIL` | No | Alert recipient; defaults to `info@essandohperry.com` |
| `WHATSAPP_TOKEN` | Optional | WhatsApp Business API token |
| `WHATSAPP_PHONE_ID` | Optional | WhatsApp Business phone number ID |
| `PERRY_WHATSAPP` | Optional | Alert recipient phone number in international format |
| `WHATSAPP_ALERT_TEMPLATE` | Optional | Approved WhatsApp template name; adapter is skipped unless all WhatsApp values are set |
| `WHATSAPP_TEMPLATE_LANGUAGE` | Optional | Approved template language; defaults to `en` |
| `WHATSAPP_API_VERSION` | Optional | Graph API version; defaults to `v22.0` |

The API keeps a short in-memory per-IP rate limit. Serverless instances can
restart or scale independently, so use a shared rate-limit store before
relying on it for high-traffic production abuse protection. The chat does not
persist conversation history. Booking and follow-up details are emailed only
when Elsie invokes the corresponding confirmed action.

### Editing Elsie's guidance

Edit `api/_agent/IDENTITY.md`, `SOUL.md` and `USER.md`; these files are read
by the server function and are not in `public/` or `src/`. Never put API keys
or credentials in these files. The server-only guidance now reflects the supplied approved identity, tone,
audience and alert instructions. Consultation rates appear only in
`api/_agent/IDENTITY.md` and the server-generated alert/chat flow; do not copy
them into website copy, React components or browser environment variables.
Digital product names, formats by sector, prices and links and the DCHT website
URL have not been supplied, so Elsie must not invent them.

### Adding communities and events

Add community entries to the `communities` array in `site.ts` with `name`,
`description`, `access` (`free` or `paid`) and optional `price`. Add event
entries to `events` with `title`, `date`, `time`, `format`, optional `price`
and `description`. Both arrays intentionally start empty; do not add unconfirmed
offerings, dates or prices. Empty states appear automatically.

## Project structure

```
src/
  content/site.ts      — all copy and data
  lib/                 — motion variants, WhatsApp link helper
  components/          — reusable UI pieces
  pages/               — Home and the project detail template
  App.tsx              — routes + layout shell
api/
  chat.ts              — Vercel chat, booking and follow-up function
  _agent/              — server-only Elsie guidance files
public/
  images/              — portrait (jpg + webp)
```

## Deployment

automatically for Vite projects).
Build command: `npm run build`. Output directory: `dist`. Vercel is required
for the included `/api/chat` serverless function; the Vercel rewrite preserves
the API route and sends client routes to `/index.html`. Other static hosts can
serve the site UI but need a compatible server-side API deployment for Elsie.
