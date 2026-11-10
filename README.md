# Krave Bk Catering

Website for **Krave Bk Catering**, a soul food catering business that serves its food by the foil tray at events. "We cater to all your needs. Soul cooking." Katch the Krave.

The site is built as the tray spread under the neon sign: coal night backgrounds, the BK red, and every photo in a foil pan frame with a masking-tape label. Display type is Big Shoulders, text is DM Sans. Full spec: `DESIGN.md`. Sources and the list of things to confirm with the owner: `research/BRIEF.md`.

## Pages

| Route | Content |
|---|---|
| `/` | Hero, trays, the smoker, the family, call to action |
| `/menu` | The spread: trays and grill dishes from their own jobs |
| `/contact` | Phone, Instagram, and an event form that writes a text to Krave Bk |

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 3 with brand tokens in `tailwind.config.ts`
- Fonts via `next/font/google`, photos via `next/image`
- No backend: the form opens the visitor's messages app with the text written for them

## Structure

- `src/lib/site.ts` every business detail (phone, Instagram, tagline)
- `src/lib/spread.ts` the dishes; `src/lib/photos.ts` the images with sizes and alt text
- `src/lib/components/` `Navbar`, `Footer`, `Pan`, `Reveal`, `EventForm`
- `research/` the brief, saved Instagram posts and reel frames

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # TypeScript check
```
