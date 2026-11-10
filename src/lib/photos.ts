/**
 * Every photo is the owner's own, taken from frames of Krave Bk's Instagram reels:
 * - "Busy is always a Blessings" (Aug 11, 2024): the foil trays
 * - "Beef short ribs coming up" (Oct 12, 2024): the smoker
 * - Aug 2, 2024 slideshow: crab legs, the grilled salmon plate, the team at an event
 * The March 2026 dish posts look like stock or generated renders, so none of them are used.
 * Frames are 720px wide (the reels' own resolution): never show one wider than ~720 CSS px on a 1x screen.
 */
export type Photo = { src: string; width: number; height: number; alt: string }

const p = (src: string, width: number, height: number, alt: string): Photo => ({ src: `/images/${src}`, width, height, alt })

export const photos = {
  logo: p("logo.jpg", 900, 1081, "Krave Bk Catering logo: a red script Krave over a black BK, with Catering in red neon letters"),
  salmon: p("tray-salmon.jpg", 720, 1280, "A foil tray of glazed salmon fillets on a bed of curly kale"),
  friedRice: p("tray-fried-rice.jpg", 720, 1090, "A full foil tray of fried rice with egg, peas, carrots and scallions"),
  mac: p("tray-mac.jpg", 720, 1120, "A foil tray of baked macaroni and cheese with a browned top"),
  greens: p("tray-greens.jpg", 720, 980, "A foil tray of collard greens with pieces of smoked meat"),
  chicken: p("tray-chicken.jpg", 720, 1280, "A foil tray of curry chicken with potatoes"),
  riceBeans: p("tray-rice-beans.jpg", 720, 1080, "A foil tray of rice and beans with pieces of meat"),
  ribs: p("short-ribs.jpg", 720, 1280, "Beef short ribs cooking on the grates of a smoker"),
  crab: p("crab.jpg", 720, 1000, "A platter of seasoned crab legs"),
  salmonPlate: p("salmon-plate.jpg", 720, 1000, "A grilled salmon fillet over salad with a balsamic drizzle"),
  team: p("team-event.jpg", 720, 1080, "Four members of the Krave Bk team in black aprons and chef coats, between red, black and gold balloon columns spelling BK"),
} as const
