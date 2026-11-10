"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { nav, site } from "@/lib/site"
import { photos } from "@/lib/photos"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const close = useCallback(() => {
    setOpen(false)
    toggleRef.current?.focus()
  }, [])

  // Mobile sheet: focus the first link, Escape closes, Tab stays inside, body scroll locked.
  useEffect(() => {
    if (!open) return
    const sheet = sheetRef.current
    const focusables = () => Array.from(sheet?.querySelectorAll<HTMLElement>("a[href], button") ?? [])
    focusables().find((el) => el.tagName === "A")?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== "Tab") return
      const items = focusables()
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener("keydown", onKey)
    }
  }, [open, close])

  // Always coal, like the sign over the pass. A hairline appears once content runs beneath it.
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-coal text-cream transition-colors duration-300 ${
        scrolled ? "border-white/15" : "border-transparent"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:bg-cream focus:px-4 focus:py-2 focus:text-coal"
      >
        Skip to content
      </a>
      <div className="wrap flex h-[var(--nav-h)] items-center justify-between gap-6">
        <Link href="/" aria-label="Krave Bk, home" className="flex min-h-[44px] items-center">
          <Image
            src={photos.logo.src}
            alt=""
            width={photos.logo.width}
            height={photos.logo.height}
            sizes="52px"
            className="h-[52px] w-[52px]"
            preload
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`inline-flex min-h-[44px] items-center text-[1rem] font-semibold underline-offset-[8px] hover:underline ${
                    pathname === item.href ? "underline decoration-neon decoration-2" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.phoneHref} className="btn-red min-h-[44px] px-5 text-[0.98rem]">
                Call {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a href={site.phoneHref} className="btn-red min-h-[44px] px-4 text-[0.95rem]">
            Call
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex min-h-[44px] items-center gap-2 px-2 font-bold"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            Menu
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-coal text-cream md:hidden"
        >
          <div className="wrap flex h-[var(--nav-h)] items-center justify-between">
            <Image src={photos.logo.src} alt="" width={photos.logo.width} height={photos.logo.height} sizes="52px" className="h-[52px] w-[52px]" />
            <button type="button" onClick={close} className="inline-flex min-h-[44px] items-center gap-2 px-2 font-bold">
              Close <span aria-hidden="true" className="text-2xl leading-none">×</span>
            </button>
          </div>
          <div className="wrap flex flex-1 flex-col pb-10 pt-8">
            <nav aria-label="Menu">
              <ul>
                {[{ href: "/", label: "Home" }, ...nav].map((item) => (
                  <li key={item.href} className="border-b border-white/15">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="display block py-4 text-[3.25rem] leading-none"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-10">
              <a href={site.phoneHref} className="btn-red">
                Call {site.phoneDisplay}
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-line text-cream">
                Instagram {site.instagramHandle}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
