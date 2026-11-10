import { photos, type Photo } from "./photos"

/**
 * Dishes seen in Krave Bk's own posts. Names come from the owner's captions where one exists
 * (e.g. "Oxtail rasta pasta with calypso shrimp", "Beef short ribs", "Krab kluster"); the trays
 * describe what the photo shows.
 * CONFIRM with the owner: which dishes they still cook, the house names for the trays, and Kravegria.
 * No prices: the business does not publish any, and catering menus are built per event.
 */
export type Dish = { id: string; name: string; note: string; photo: Photo; group: "trays" | "grill" | "plates" }

export const spread: Dish[] = [
  // By the tray
  { id: "salmon", name: "Glazed salmon", note: "Fillets laid over curly kale.", photo: photos.salmon, group: "trays" },
  { id: "mac", name: "Baked mac and cheese", note: "Browned on top, edge to edge.", photo: photos.mac, group: "trays" },
  { id: "fried-rice", name: "Fried rice", note: "Egg, peas, carrots, scallions.", photo: photos.friedRice, group: "trays" },
  { id: "greens", name: "Collard greens", note: "Cooked down with smoked meat.", photo: photos.greens, group: "trays" },
  { id: "chicken", name: "Curry chicken", note: "With potatoes.", photo: photos.chicken, group: "trays" },
  { id: "rice-beans", name: "Rice and beans", note: "With meat cooked in.", photo: photos.riceBeans, group: "trays" },

  // Off the grill and smoker
  { id: "tomahawk", name: "Tomahawk ribeye", note: "Long bone, over open flame.", photo: photos.tomahawk, group: "grill" },
  { id: "short-ribs", name: "Beef short ribs", note: "Off the smoker.", photo: photos.shortRibs, group: "grill" },
  { id: "jerk-chicken", name: "Jerk chicken", note: "Charred on the grill.", photo: photos.grill, group: "grill" },
  { id: "ribs", name: "Ribs", note: "Glazed, with the char left on.", photo: photos.ribs, group: "grill" },

  // Plated
  { id: "oxtail-pasta", name: "Oxtail rasta pasta", note: "With calypso shrimp.", photo: photos.oxtailPasta, group: "plates" },
  { id: "jerk-salmon", name: "Jerk salmon", note: "Loaded baked potato and honey jerk shrimp.", photo: photos.jerkSalmon, group: "plates" },
  { id: "snapper", name: "Red snapper", note: "Slow smoked, with rice and deep fried okra.", photo: photos.snapper, group: "plates" },
  { id: "surf-turf", name: "Surf and turf", note: "Steak and shrimp over yellow rice.", photo: photos.surfTurf, group: "plates" },
  { id: "pork-chop", name: "Long bone pork chop", note: "Smoked, with garlic mashed potatoes.", photo: photos.porkChop, group: "plates" },
  { id: "swai", name: "Swai fish plate", note: "Shrimp mac and cheese, collard greens, candied yams.", photo: photos.swai, group: "plates" },
  { id: "cajun-shrimp", name: "Cajun shrimp", note: "With garlic yellow rice.", photo: photos.cajunShrimp, group: "plates" },
  { id: "bowtie", name: "Bow tie pasta and shrimp", note: "In garlic alfredo.", photo: photos.bowtie, group: "plates" },
  { id: "crab", name: "Krab kluster", note: "Seasoned crab legs.", photo: photos.crab, group: "plates" },
]

/** Short list for the form's "What are you kraving" chips: the dishes people ask for by name. */
export const formDishes = [
  "Glazed salmon",
  "Baked mac and cheese",
  "Collard greens",
  "Curry chicken",
  "Rice and beans",
  "Fried rice",
  "Jerk chicken",
  "Oxtail rasta pasta",
  "Beef short ribs",
  "Seafood",
]
