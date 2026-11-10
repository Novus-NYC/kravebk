# Krave Bk: design spec

## The idea: the foil tray spread under the neon sign

Krave Bk's whole visual world is in their reels: a long table of foil catering pans under a dark sky, and a logo with red BK block letters and a neon script. The site is that table. Every photo sits in a foil pan frame (a brushed silver rim around a dark pan), labeled with a strip of masking tape the way caterers label trays. The page itself is the night, the red is the sign.

Who visits: someone planning a birthday, church event, office lunch or shower who saw the food on Instagram or got the number from a friend. What they should do next: call or text 917-340-0332 with the date and headcount.

## Palette

| Token | Hex | Role |
|---|---|---|
| `coal` | `#0E0D0D` | Night canvas: navbar, hero, smoker band, footer, mobile menu |
| `ink` | `#161313` | Text on light |
| `red` | `#D11A20` | The BK red: primary buttons, "Meet the chefs" band, Kravegria band, the spread CTA, big phone number on cream |
| `neon` | `#FF4747` | Accent text on coal only (the neon sign): "Krave.", focus rings on dark |
| `foil` | `#C9CED4` | Pan rims, kickers on coal |
| `cream` | `#F5EFE4` | Day canvas: tray sections, contact form panel |
| `tape` | `#EFE2C4` | Masking tape labels |
| `mute` | `#5C5552` | Secondary text on cream (AA) |

Bands alternate coal, cream, coal, red, cream so scrolling reads as a sequence. Red text is never used on coal for body copy.

## Type

- Display: **Big Shoulders** 800/900, uppercase. Tall Chicago block letters that match the BK in the logo.
- Text: **DM Sans** 400/500/700, 17px body.
- Hero headline `mega` clamp(4.75rem, 15vw, 13.5rem).

## Photos

All from the owner's Instagram: reel frames for the trays, 2021 to 2023 feed posts for the chefs, staff and plates. One shared grade (`.grade`: contrast 1.06, saturate 1.08). Inside a `Pan` frame with a tape label, or as one big full-bleed crop (the short ribs on the smoker). Never a uniform grid: trays are staggered at different heights and ratios.

## Pages

- `/` Coal hero ("Katch the Krave.", salmon pan hanging into the next band) → cream "Soul cooking, by the tray." with three staggered pans → coal smoker band (short ribs full bleed, tomahawk and jerk chicken pans) → red "Meet the chefs." with the chefs photo and their "booked and busy" line → cream CTA with the phone number huge.
- `/menu` "The spread." Six trays in an offset grid (first pan renders without a reveal for LCP), "Off the grill." coal band with the tomahawk big, "Plated, Karibean soul." as a masonry wall of plates in their own shapes, then a red Kravegria band ending in "Build your menu."
- `/contact` "Plan your event." Phone huge on coal with the buffet line photo, event form on a cream panel; then the staff photo beside a plain "Good to have ready when you call" checklist.
- 404: "This page isn't on the menu." on cream, so it separates from the coal footer.

## Motion

Fade-up reveals and a top-down clip reveal on pans (the foil coming off). Slight zoom on pan hover. All disabled under `prefers-reduced-motion`.

## Form

The event form validates name and phone on blur and submit, then builds a text message and opens the messages app (`sms:+19173400332?&body=`). The success state shows the message with Copy and Call options. It says plainly that nothing is sent until the visitor presses send.

## Focus

One global focus ring (3px, neon red) for dark bands. Cream bands carry `on-light` (ring turns BK red) and red bands carry `on-red` (ring turns cream), so the ring always contrasts with what is behind it.
