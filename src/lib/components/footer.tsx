import Image from "next/image"
import Link from "next/link"
import { nav, site } from "@/lib/site"
import { photos } from "@/lib/photos"

/* Three rows, like the Lash and Kreore footers: the sign and the call, how to reach them, the sign-off. */
export default function Footer() {
  return (
    <footer className="bg-coal text-cream">
      <div className="wrap flex flex-col gap-8 pb-10 pt-16 md:flex-row md:items-end md:justify-between">
        <Link href="/" aria-label="Krave Bk, home" className="w-fit">
          <Image
            src={photos.logo.src}
            alt=""
            width={photos.logo.width}
            height={photos.logo.height}
            sizes="160px"
            className="neon-logo h-36 w-auto md:h-44"
          />
        </Link>
        <div className="flex flex-col gap-3 md:items-end">
          <p className="display text-d3 text-cream">{site.tagline}.</p>
          <a href={site.phoneHref} className="btn-red w-fit">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="wrap">
        <div className="flex flex-col gap-x-10 gap-y-1 border-t border-white/15 py-5 md:flex-row md:flex-wrap md:items-center">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="link-under inline-flex min-h-[44px] w-fit items-center">
              {item.label}
            </Link>
          ))}
          <a href={site.instagram} target="_blank" rel="noreferrer" className="link-under inline-flex min-h-[44px] w-fit items-center">
            Instagram {site.instagramHandle}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="flex flex-col gap-1 border-t border-white/15 py-5 text-foil sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <a href="https://novusnyc.org" target="_blank" rel="noreferrer" className="link-under inline-flex min-h-[44px] w-fit items-center text-cream">
            Made by Novus
          </a>
        </div>
      </div>
    </footer>
  )
}
