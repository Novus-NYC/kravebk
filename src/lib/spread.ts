import { photos, type Photo } from "./photos"

/**
 * Dishes seen in Krave Bk's own posts. Names come from the owner's captions where one exists
 * ("Beef short ribs", "Krab kluster"); the rest describe what the photo shows.
 * CONFIRM with the owner: the house names for each, and the curry chicken / rice and beans labels.
 * No prices: the business does not publish any, and catering menus are built per event.
 */
export type Dish = { id: string; name: string; note: string; photo: Photo; group: "trays" | "grill" }

export const spread: Dish[] = [
  { id: "salmon", name: "Glazed salmon", note: "Fillets laid over curly kale, by the tray.", photo: photos.salmon, group: "trays" },
  { id: "mac", name: "Baked mac and cheese", note: "Browned on top, edge to edge.", photo: photos.mac, group: "trays" },
  { id: "fried-rice", name: "Fried rice", note: "Egg, peas, carrots, scallions.", photo: photos.friedRice, group: "trays" },
  { id: "greens", name: "Collard greens", note: "Cooked down with smoked meat.", photo: photos.greens, group: "trays" },
  { id: "chicken", name: "Curry chicken", note: "With potatoes.", photo: photos.chicken, group: "trays" },
  { id: "rice-beans", name: "Rice and beans", note: "With meat cooked in.", photo: photos.riceBeans, group: "trays" },
  { id: "ribs", name: "Beef short ribs", note: "Off the smoker.", photo: photos.ribs, group: "grill" },
  { id: "crab", name: "Krab kluster", note: "Seasoned crab legs.", photo: photos.crab, group: "grill" },
  { id: "salmon-plate", name: "Grilled salmon plate", note: "Over salad, plated.", photo: photos.salmonPlate, group: "grill" },
]
