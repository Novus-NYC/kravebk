import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Page not found" }

export default function NotFound() {
  return (
    <section className="bg-coal text-cream">
      <div className="wrap py-24 lg:py-36">
        <p className="kicker text-neon">This pan is empty</p>
        <h1 className="display mt-5 text-d1">This page isn&rsquo;t on the menu.</h1>
        <p className="mt-6 max-w-[40ch] text-[1.15rem] text-cream/90">The link may be old. The food and the way to book are one tap away.</p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link href="/menu" className="btn-red">
            See the spread
          </Link>
          <a href={site.phoneHref} className="link-under inline-flex min-h-[44px] items-center font-bold">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
