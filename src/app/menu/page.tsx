import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Pan } from "@/lib/components/pan"
import { Reveal } from "@/lib/components/reveal"
import { photos } from "@/lib/photos"
import { spread } from "@/lib/spread"
import { site } from "@/lib/site"

const description =
  "What comes out of the Krave Bk kitchen: trays of glazed salmon, mac and cheese and collard greens, tomahawk and jerk chicken off the grill, oxtail rasta pasta, red snapper and more. Menus are built around your event."

export const metadata: Metadata = {
  title: "The spread",
  description,
  alternates: { canonical: "/menu" },
  openGraph: { title: "The spread · Krave Bk Catering", description, url: "/menu" },
}

// The buffet table: pans of different sizes, set at different heights. Spans, offsets and crops change only at lg.
const layout = [
  "lg:col-span-5",
  "lg:col-span-4 lg:mt-24",
  "lg:col-span-3 lg:mt-48",
  "lg:col-span-4",
  "lg:col-span-3 lg:mt-16",
  "lg:col-span-5 lg:mt-6",
]
const ratios = ["lg:aspect-[5/6]", "lg:aspect-[3/4]", "lg:aspect-[2/3]", "lg:aspect-[3/4]", "lg:aspect-[2/3]", "lg:aspect-[5/4]"]
const traySizes = "(min-width: 1024px) 34vw, 46vw"

export default function MenuPage() {
  const trays = spread.filter((d) => d.group === "trays")
  const [tomahawk, ...grill] = spread.filter((d) => d.group === "grill")
  const [featured, ...board] = spread.filter((d) => d.group === "plates")

  return (
    <>
      <section className="on-light bg-cream" aria-labelledby="menu-title">
        <div className="wrap grid gap-8 pb-10 pt-14 lg:grid-cols-12 lg:items-end lg:pt-20">
          <h1 id="menu-title" className="display text-mega lg:col-span-7">
            The <span className="text-red">spread.</span>
          </h1>
          <div className="lg:col-span-5 lg:pb-4">
            <p className="max-w-[40ch] text-[1.15rem]">
              Every catering menu is built around your event. These are dishes from Krave Bk&rsquo;s own kitchen, photographed by the crew. Don&rsquo;t see what you&rsquo;re kraving? Ask.
            </p>
            <a href={site.phoneHref} className="btn-red mt-6">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* By the tray: the buffet table, pans at different heights. */}
      <section className="on-light bg-cream pb-24 pt-10" aria-labelledby="trays-title">
        <div className="wrap">
          <h2 id="trays-title" className="kicker border-t-2 border-coal pt-4">
            By the tray
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-12">
            {trays.map((dish, i) => {
              const body = (
                <>
                  <Pan photo={dish.photo} ratio={`aspect-[3/4] ${ratios[i] ?? ""}`} sizes={traySizes} priority={i === 0} />
                  <h3 className="display mt-4 text-[1.5rem] leading-[0.95] sm:mt-5 sm:text-d3">{dish.name}</h3>
                  <p className="mt-1 text-[0.95rem] text-mute sm:text-[1.0625rem]">{dish.note}</p>
                </>
              )
              // The first pan is above the fold on mobile: render it straight away, no reveal.
              return i === 0 ? (
                <li key={dish.id} className={layout[i]}>
                  {body}
                </li>
              ) : (
                <Reveal as="li" key={dish.id} i={i % 3} className={layout[i] ?? "lg:col-span-4"}>
                  {body}
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Off the grill: the tomahawk big and alone, three smaller pans stepping down beside it. */}
      <section className="bg-coal text-cream" aria-labelledby="grill-title">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-6">
            <h2 id="grill-title" className="display text-d1">
              Off the <span className="text-neon">grill.</span>
            </h2>
            <p className="mt-6 max-w-[34ch] text-[1.15rem] text-cream/90">Smoked and grilled over open flame: the tomahawk, short ribs on the smoker, jerk chicken with the char left on.</p>
            <Reveal variant="pan" className="mt-12">
              <Pan photo={tomahawk.photo} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 44vw, 92vw" label={tomahawk.name} labelAt="bl" objectPosition="50% 35%" />
            </Reveal>
          </div>
          <ul className="grid grid-cols-3 gap-3 sm:gap-6 lg:col-span-5 lg:col-start-8 lg:grid-cols-1 lg:gap-12 lg:pt-44">
            {grill.map((dish, i) => (
              <Reveal as="li" key={dish.id} i={i} className={i === 1 ? "lg:ml-16" : "lg:mr-16"}>
                <Pan photo={dish.photo} ratio="aspect-[4/5] lg:aspect-[5/4]" sizes="(min-width: 1024px) 30vw, 31vw" />
                <h3 className="display mt-3 text-[1.15rem] leading-[0.95] sm:mt-5 sm:text-d3">{dish.name}</h3>
                <p className="mt-1 hidden text-foil sm:block">{dish.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Plated: a dinner board. One plate big and round on the left, the rest as a written menu with small round plates. */}
      <section className="on-light bg-cream py-20 lg:py-28" aria-labelledby="plates-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 id="plates-title" className="display text-[clamp(2.75rem,4.6vw,4.5rem)] leading-[0.9]">
                Plated, <span className="block text-red">Karibean soul.</span>
              </h2>
              <p className="mt-6 max-w-[34ch] text-[1.1rem]">Dinners Krave Bk has cooked and posted over the years. Ask which ones they can bring to your event.</p>
              <Reveal variant="pan" className="mt-10 w-[78%] max-w-[22rem] lg:w-full">
                <figure className="zoom">
                  <div className="relative aspect-square overflow-hidden rounded-full ring-[6px] ring-white">
                    <Image src={featured.photo.src} alt={featured.photo.alt} fill sizes="(min-width: 1024px) 26vw, 78vw" className="grade object-cover" />
                  </div>
                  <figcaption className="mt-5">
                    <span className="display block text-d3">{featured.name}</span>
                    <span className="text-mute">{featured.note}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
          <ul className="grid content-start gap-x-10 border-b-2 border-coal sm:grid-cols-2 lg:col-span-8">
            {board.map((dish, i) => (
              <Reveal as="li" key={dish.id} i={i % 2} className="zoom flex items-center gap-5 border-t-2 border-coal py-5">
                <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-white md:w-28">
                  <Image src={dish.photo.src} alt={dish.photo.alt} fill sizes="112px" className="grade object-cover" />
                </div>
                <div className="min-w-0">
                  <h3 className="display text-[1.6rem] leading-[0.95] md:text-[1.9rem]">{dish.name}</h3>
                  <p className="mt-1 text-mute">{dish.note}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Kravegria, then the ask, on the logo's red. */}
      <section className="on-red bg-red text-cream" aria-labelledby="kravegria-title">
        <div className="wrap grid gap-10 pt-20 lg:grid-cols-12 lg:gap-8 lg:pt-24">
          <Reveal variant="pan" className="mx-auto w-full max-w-[24rem] lg:col-span-4 lg:mx-0">
            <Pan photo={photos.kravegria} ratio="aspect-square" sizes="(min-width: 480px) 384px, 92vw" objectPosition="50% 40%" />
          </Reveal>
          <Reveal i={1} className="lg:col-span-7 lg:col-start-6 lg:self-center">
            <h2 id="kravegria-title" className="display text-d1">
              Kravegria.
            </h2>
            <p className="mt-6 max-w-[38ch] text-[1.2rem] leading-snug">
              Krave Bk&rsquo;s own sangria, bottled with chopped fruit, in Red and Sunsets. Ask if it&rsquo;s available for your date.
            </p>
          </Reveal>
        </div>
        <div className="wrap mt-16 flex flex-col gap-8 border-t-2 border-cream/40 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="display text-d2">Build your menu.</h2>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link href="/contact" className="btn-cream">
              Plan your event
            </Link>
            <a href={site.phoneHref} className="link-under inline-flex min-h-[44px] items-center font-bold">
              Or call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
