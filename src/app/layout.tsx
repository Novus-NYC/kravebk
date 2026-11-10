import type { Metadata, Viewport } from "next"
import { Big_Shoulders, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

// Display: the tall block letters of the BK in the logo. Text: a plain, warm sans.
const display = Big_Shoulders({ subsets: ["latin"], weight: ["800", "900"], variable: "--font-display", display: "swap", adjustFontFallback: false })
const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans", display: "swap" })

const description =
  "Krave Bk Catering: soul cooking by the tray. Glazed salmon, baked mac and cheese, collard greens, short ribs off the smoker. Call 917-340-0332 to plan your event."

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3104"),
  title: { default: "Krave Bk Catering · Katch the Krave", template: "%s · Krave Bk Catering" },
  description,
  openGraph: {
    title: "Krave Bk Catering",
    description,
    images: [{ url: "/images/tray-salmon.jpg", width: 720, height: 1280, alt: "A foil tray of glazed salmon on curly kale" }],
    type: "website",
  },
}

export const viewport: Viewport = { themeColor: "#0E0D0D" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks the document so reveals only hide content when JS can show it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main id="content" className="flex-1 pt-[var(--nav-h)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
