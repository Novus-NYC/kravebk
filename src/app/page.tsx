import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Pan } from "@/lib/components/pan"
import { Reveal } from "@/lib/components/reveal"
import { photos } from "@/lib/photos"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

/* Only verified facts: name, phone, Instagram, the borough and the kind of cooking. No address, hours or prices. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: site.legalName,
  slogan: site.tagline,
  servesCuisine: ["Caribbean", "Soul food"],
  telephone: "+1-917-340-0332",
  address: { "@type": "PostalAddress", addressLocality: "Brooklyn", addressRegion: "NY", addressCountry: "US" },
  sameAs: [site.instagram],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. The sign over the pass: the tagline huge on coal, a full pan of glazed salmon sliding off the edge. */}
      <section className="relative z-10 bg-coal text-cream" aria-labelledby="hero-title">
        <div className="wrap grid gap-10 pb-14 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-0">
          <div className="lg:col-span-7 lg:pb-24">
            <p className="kicker text-neon">Krave Bk Catering · {site.area}</p>
            <h1 id="hero-title" className="display mt-6 text-mega">
              Katch the <span className="text-neon">Krave.</span>
            </h1>
            <p className="mt-7 max-w-[34ch] text-[1.25rem] leading-snug text-cream/90 md:text-[1.4rem]">
              We cater to all your needs. Caribbean soul cooking, by the tray, out of {site.area}.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={site.phoneHref} className="btn-red">
                Call {site.phoneDisplay}
              </a>
              <Link href="/contact" className="link-under inline-flex min-h-[44px] items-center text-[1.05rem] font-bold">
                Plan your event <span aria-hidden="true">&nbsp;→</span>
              </Link>
            </div>
          </div>
          {/* No reveal here: the hero pan is the largest paint on mobile and must not wait for JS. */}
          <div className="lg:col-span-5 lg:-mb-28 lg:self-end">
            <div className="mx-auto max-w-[26rem] lg:ml-auto lg:mr-0">
              <Pan photo={photos.salmon} ratio="aspect-[4/5] lg:aspect-[720/1080]" sizes="(min-width: 480px) 416px, 92vw" label="Glazed salmon" priority />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The spread: three pans set down on the counter at different heights, each taped and labeled. */}
      <section className="on-light bg-cream pb-24 pt-20 lg:pt-40" aria-labelledby="spread-title">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-6">
              <h2 id="spread-title" className="display text-d1">
                Soul cooking,
                <br />
                <span className="text-red">by the tray.</span>
              </h2>
            </Reveal>
            <Reveal i={1} className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-[40ch] text-[1.15rem]">
                The food goes out in full foil pans. These are from Krave Bk&rsquo;s own catering jobs, shot right off the line.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
            <Reveal variant="pan" className="col-span-2 lg:col-span-5">
              <Pan photo={photos.mac} ratio="aspect-[4/3] lg:aspect-[5/6]" sizes="(min-width: 1024px) 34vw, 92vw" label="Baked mac and cheese" />
            </Reveal>
            <Reveal variant="pan" i={1} className="col-span-1 lg:col-span-4 lg:mt-20">
              <Pan photo={photos.friedRice} ratio="aspect-[3/4]" sizes="(min-width: 1024px) 28vw, 46vw" label="Fried rice" labelAt="bl" />
            </Reveal>
            <Reveal variant="pan" i={2} className="col-span-1 lg:col-span-3 lg:mt-40">
              <Pan photo={photos.greens} ratio="aspect-[3/4] lg:aspect-[2/3]" sizes="(min-width: 1024px) 21vw, 46vw" label="Collard greens" labelAt="bl" />
            </Reveal>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link href="/menu" className="btn-red">
              See the whole spread
            </Link>
            <span className="text-mute">Oxtail rasta pasta, jerk chicken, red snapper and more.</span>
          </div>
        </div>
      </section>

      {/* 3. Off the smoker: the short ribs tall on the left, bleeding off the page; the owner's own caption as the headline. */}
      <section className="overflow-hidden bg-coal text-cream" aria-labelledby="smoker-title">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-0">
          <Reveal variant="pan" className="lg:col-span-5 lg:ml-[min(-2.5rem,calc((1320px-100vw)/2-2.5rem))]">
            <div className="zoom relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[44rem]">
              <Image
                src={photos.shortRibs.src}
                alt={photos.shortRibs.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="grade object-cover"
                style={{ objectPosition: "50% 40%" }}
              />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7 lg:pb-36 lg:pt-24">
            <Reveal>
              <p className="kicker text-neon">Off the smoker</p>
              <h2 id="smoker-title" className="display mt-5 text-d1">
                &ldquo;Beef short ribs coming up.&rdquo;
              </h2>
              <p className="mt-4 text-foil">@krave_bk, on the grill</p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6">
              <Reveal variant="pan">
                <Pan photo={photos.tomahawk} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 22vw, 45vw" label="Tomahawk" labelAt="bl" objectPosition="50% 35%" />
              </Reveal>
              <Reveal variant="pan" i={1} className="mt-10">
                <Pan photo={photos.grill} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 22vw, 45vw" label="Jerk chicken" labelAt="bl" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The chefs, on the logo's red: their photo breaks up out of the section. */}
      <section className="on-red bg-red text-cream" aria-labelledby="chefs-title">
        <div className="wrap grid gap-12 pb-20 pt-20 lg:grid-cols-12 lg:gap-8 lg:pt-0">
          <div className="lg:col-span-6 lg:pt-28">
            <Reveal>
              <h2 id="chefs-title" className="display text-d1">
                Meet the chefs.
              </h2>
              <p className="mt-7 max-w-[38ch] text-[1.2rem] leading-snug">
                Krave Bk shows up as a crew: black chef coats with the Krave Bk mark, gloves on, every pan served by hand.
              </p>
            </Reveal>
            <Reveal i={1}>
              <blockquote className="mt-12 border-l-4 border-cream pl-6">
                <p className="display text-d3">&ldquo;We have been booked and busy with catering jobs. Thank you to all our amazing customers.&rdquo;</p>
                <footer className="mt-3 text-[0.98rem] text-cream">Krave Bk on Instagram</footer>
              </blockquote>
            </Reveal>
          </div>
          <Reveal variant="pan" className="mx-auto w-full max-w-[26rem] lg:col-span-5 lg:col-start-8 lg:-mt-20 lg:mr-0">
            <Pan photo={photos.chefs} ratio="aspect-[4/5]" sizes="(min-width: 480px) 416px, 92vw" objectPosition="50% 30%" label="Meet the chefs" labelAt="bl" />
          </Reveal>
        </div>
      </section>

      {/* 5. The ask: one huge phone number, nothing else competing. */}
      <section className="on-light bg-cream" aria-labelledby="call-title">
        <div className="wrap py-24 lg:py-32">
          <Reveal>
            <h2 id="call-title" className="max-w-[26ch] text-[1.35rem] font-medium leading-snug md:text-[1.6rem]">
              Tell us the date, how many people, and what you&rsquo;re kraving.
            </h2>
            <a
              href={site.phoneHref}
              className="display mt-6 block w-fit whitespace-nowrap text-[clamp(2.5rem,14.5vw,12rem)] leading-[0.85] text-red transition-colors hover:text-coal"
            >
              {site.phoneDisplay}
            </a>
          </Reveal>
          <Reveal i={1} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link href="/contact" className="btn-red">
              Plan your event
            </Link>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="link-under inline-flex min-h-[44px] items-center font-bold">
              Message {site.instagramHandle}
              <span className="sr-only"> on Instagram (opens in a new tab)</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
