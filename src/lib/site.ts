/**
 * Every business detail lives here. Sources (checked Nov 9, 2026):
 * - Instagram @krave_bk bio: "We Cater to all your Needs.. Soul Cooking. Please give us a call @ 917-340-0332"
 * - Logo: "BK Krave Catering" (Instagram reel cover, Aug 2, 2024)
 * - Tagline "Katch the Krave" and #KATCHTHEKRAVE: the owner's own menu card and captions
 * No email, address, hours or prices are public. Do not add any until the owner confirms them.
 */
export const site = {
  name: "Krave Bk",
  legalName: "Krave Bk Catering",
  tagline: "Katch the Krave",
  bio: "We cater to all your needs. Soul cooking.",
  phoneDisplay: "917-340-0332",
  phoneHref: "tel:+19173400332",
  /** iOS reads `&body=`, Android reads `?body=`; "?&body=" satisfies both. */
  smsBase: "sms:+19173400332?&body=",
  instagram: "https://www.instagram.com/krave_bk/",
  instagramHandle: "@krave_bk",
} as const

export const nav = [
  { href: "/menu", label: "The spread" },
  { href: "/contact", label: "Plan your event" },
] as const
