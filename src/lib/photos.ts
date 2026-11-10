/**
 * Every photo is the owner's own, from Krave Bk's Instagram (@krave_bk):
 * - Reel frames (720px wide, the reels' own resolution): the foil trays ("Busy is always a Blessings",
 *   Aug 11, 2024), the short ribs ("Beef short ribs coming up", Oct 12, 2024), crab legs and the
 *   grilled salmon plate (Aug 2, 2024 slideshow).
 * - Feed posts, 2021 to 2023: the chefs ("Meet The Chefs", Jan 2022), the staff, the buffet line at a
 *   birthday event, and the plated dishes named in their captions. Downloaded to research/instagram-full.
 * - Logo: the round "BK Krave" mark from the first post ("Welcome To KRAVE BK", Mar 3, 2021).
 * The March 2026 dish posts look like stock or generated renders, so none of them are used.
 */
export type Photo = { src: string; width: number; height: number; alt: string }

const p = (src: string, width: number, height: number, alt: string): Photo => ({ src: `/images/${src}`, width, height, alt })

export const photos = {
  logo: p("logo-round.png", 320, 320, "Krave Bk logo: a white script Krave over a black BK, in a white circle"),

  // The trays (reel frames)
  salmon: p("tray-salmon.jpg", 720, 1280, "A foil tray of glazed salmon fillets on a bed of curly kale"),
  friedRice: p("tray-fried-rice.jpg", 720, 1090, "A full foil tray of fried rice with egg, peas, carrots and scallions"),
  mac: p("tray-mac.jpg", 720, 1120, "A foil tray of baked macaroni and cheese with a browned top"),
  greens: p("tray-greens.jpg", 720, 980, "A foil tray of collard greens with pieces of smoked meat"),
  chicken: p("tray-chicken.jpg", 720, 1280, "A foil tray of curry chicken with potatoes"),
  riceBeans: p("tray-rice-beans.jpg", 720, 1080, "A foil tray of rice and beans with pieces of meat"),

  // Off the grill and smoker
  shortRibs: p("short-ribs.jpg", 720, 1280, "Beef short ribs cooking on the grates of a smoker"),
  tomahawk: p("tomahawk.jpg", 1080, 1296, "A long bone tomahawk ribeye standing on a charcoal grill over open flame"),
  grill: p("jerk-chicken-grill.jpg", 1080, 1350, "Jerk chicken quarters and ribs charring side by side on a grill"),
  ribs: p("ribs.jpg", 1080, 1080, "A pile of glazed ribs with charred edges on a wooden board"),
  crab: p("crab.jpg", 720, 1000, "A platter of seasoned crab legs"),

  // Plates (feed posts)
  oxtailPasta: p("oxtail-rasta-pasta.jpg", 1080, 1080, "Penne in a creamy rasta sauce with peppers, pieces of oxtail and grilled shrimp"),
  jerkSalmon: p("jerk-salmon.jpg", 806, 1008, "A jerk salmon fillet with grilled shrimp, a loaded baked potato and a salad with avocado"),
  snapper: p("red-snapper.jpg", 800, 650, "A whole red snapper with rice, fried okra, plantains and grilled lemon halves"),
  swai: p("swai-plate.jpg", 1080, 850, "Fried swai fish and fried shrimp with mac and cheese, candied yams and a bowl of collard greens"),
  bowtie: p("bowtie-shrimp.jpg", 1080, 822, "Bow tie pasta with shrimp and sliced sausage in a garlic alfredo sauce"),
  cajunShrimp: p("cajun-shrimp.jpg", 1080, 1350, "Large Cajun shrimp around a mound of yellow rice"),
  surfTurf: p("surf-turf.jpg", 1080, 810, "A grilled steak topped with shrimp, with yellow rice, broccoli and peppers"),
  porkChop: p("pork-chop.jpg", 1080, 776, "Two glazed long bone pork chops with garlic mashed potatoes and asparagus"),
  salmonPlate: p("salmon-plate.jpg", 720, 1000, "A grilled salmon fillet over salad with a balsamic drizzle"),
  kravegria: p("kravegria.jpg", 1080, 1096, "Bottles of Kravegria sangria with chopped fruit inside, labeled BK Kravegria, beside an orange and two apples"),

  // The crew
  chefs: p("chefs.jpg", 1080, 1350, "The two Krave Bk chefs, a woman and a man, in black Krave Bk chef coats, standing together at an event"),
  staff: p("staff.jpg", 1080, 1092, "Four Krave Bk staff in black Krave shirts and face masks, standing together in an event space"),
  buffet: p("buffet-line.jpg", 1080, 1350, "Krave Bk staff in black gloves serving a guest from a long line of foil pans: pasta, mac and cheese, oxtail and more"),
} as const
