import type { Metadata } from "next"
import Link from "next/link"
import { Pan } from "@/lib/components/pan"
import { Reveal } from "@/lib/components/reveal"
import { spread } from "@/lib/spread"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "The spread",
  description:
    "What comes out of the Krave Bk kitchen: glazed salmon, baked mac and cheese, fried rice, collard greens, curry chicken, rice and beans, beef short ribs and crab. Menus are built around your event.",
  alternates: { canonical: "/menu" },
}

// The buffet table: pans of different sizes, set at different heights. Spans and offsets per pan, desktop only.
const layout = [
  "lg:col-span-5",
  "lg:col-span-4 lg:mt-24",
  "lg:col-span-3 lg:mt-48",
  "lg:col-span-4",
  "lg:col-span-3 lg:mt-16",
  "lg:col-span-5 lg:mt-6",
]
const ratios = ["aspect-[5/6]", "aspect-[3/4]", "aspect-[2/3]", "aspect-[3/4]", "aspect-[2/3]", "aspect-[5/4]"]

export default function MenuPage() {
  const trays = spread.filter((d) => d.group === "trays")
  const grill = spread.filter((d) => d.group === "grill")
  const [ribs, ...plates] = grill

  return (
    <>
      <section className="bg-cream" aria-labelledby="menu-title">
        <div className="wrap grid gap-8 pb-10 pt-14 lg:grid-cols-12 lg:items-end lg:pt-20">
          <h1 id="menu-title" className="display text-mega lg:col-span-7">
            The <span className="text-red">spread.</span>
          </h1>
          <div className="lg:col-span-5 lg:pb-4">
            <p className="max-w-[40ch] text-[1.15rem]">
              Every catering menu is built around your event. These are dishes from Krave Bk&rsquo;s own jobs, photographed in the pan. Don&rsquo;t see what you&rsquo;re kraving? Ask.
            </p>
            <a href={site.phoneHref} className="btn-red mt-6">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-24 pt-10" aria-labelledby="trays-title">
        <div className="wrap">
          <h2 id="trays-title" className="kicker border-t-2 border-coal pt-4">
            By the tray
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
            {trays.map((dish, i) => (
              <Reveal as="li" key={dish.id} i={i % 3} className={layout[i] ?? "lg:col-span-4"}>
                <Pan photo={dish.photo} ratio={ratios[i] ?? "aspect-[3/4]"} sizes="(min-width: 1024px) 34vw, (min-width: 640px) 46vw, 92vw" />
                <h3 className="display mt-5 text-d3">{dish.name}</h3>
                <p className="mt-1 text-mute">{dish.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-coal text-cream" aria-labelledby="grill-title">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-5">
            <h2 id="grill-title" className="display text-d1">
              Off the <span className="text-neon">grill.</span>
            </h2>
            <p className="mt-6 max-w-[34ch] text-[1.15rem] text-cream/90">
              Smoked, grilled and plated: short ribs on the smoker, crab by the pile, salmon dressed for the table.
            </p>
            <Reveal variant="pan" className="mt-12">
              <Pan photo={ribs.photo} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 36vw, 92vw" label={ribs.name} labelAt="bl" />
            </Reveal>
          </div>
          <ul className="grid gap-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:grid-cols-1 lg:pt-40">
            {plates.map((dish, i) => (
              <Reveal as="li" key={dish.id} i={i} className={i === 1 ? "lg:ml-24" : "lg:mr-24"}>
                <Pan photo={dish.photo} ratio="aspect-[5/4]" sizes="(min-width: 1024px) 34vw, (min-width: 640px) 46vw, 92vw" objectPosition="50% 45%" />
                <h3 className="display mt-5 text-d3">{dish.name}</h3>
                <p className="mt-1 text-foil">{dish.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-red text-cream" aria-labelledby="build-title">
        <div className="wrap flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <h2 id="build-title" className="display text-d2">
            Build your menu.
          </h2>
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
