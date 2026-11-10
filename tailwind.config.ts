import type { Config } from "tailwindcss"

/*
 * Krave Bk palette, taken from the logo and the trays:
 * coal (the logo's black), red (the script and the neon), foil (the half pans), cream (the counter paper),
 * plus tape (the masking tape caterers label pans with).
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#0E0D0D",
        ink: "#161313",
        red: "#D11A20",
        neon: "#FF4747",
        foil: "#C9CED4",
        cream: "#F5EFE4",
        tape: "#EFE2C4",
        mute: "#5C5552",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        mega: ["clamp(4.75rem, 15vw, 13.5rem)", { lineHeight: "0.84", letterSpacing: "-0.01em" }],
        d1: ["clamp(3.4rem, 9vw, 8.5rem)", { lineHeight: "0.88" }],
        d2: ["clamp(2.6rem, 6vw, 5.5rem)", { lineHeight: "0.9" }],
        d3: ["clamp(2rem, 3.6vw, 3.25rem)", { lineHeight: "0.95" }],
      },
      transitionTimingFunction: { tray: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
    },
  },
  plugins: [],
}
export default config
