import type { Metadata, Viewport } from "next"
import { Big_Shoulders, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

// Display: the tall block letters of the BK in the logo. Text: a plain, warm sans.
const display = Big_Shoulders({ subsets: ["latin"], weight: ["800", "900"], variable: "--font-display", display: "swap", adjustFontFallback: false })
const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans", display: "swap" })

const description =
  "Krave Bk Catering, Brooklyn: Caribbean soul cooking by the tray. Glazed salmon, mac and cheese, collard greens, jerk chicken, oxtail rasta pasta. Call 917-340-0332 to plan your event."

// Set NEXT_PUBLIC_SITE_URL to the real domain once it exists; Vercel's production URL is the fallback.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3104")

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Krave Bk Catering · Katch the Krave", template: "%s · Krave Bk Catering" },
  description,
  openGraph: { title: "Krave Bk Catering · Katch the Krave", description, url: "/", siteName: "Krave Bk Catering", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image" },
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
