import type { Metadata } from "next"
import { EventForm } from "@/lib/components/event-form"
import { Pan } from "@/lib/components/pan"
import { Reveal } from "@/lib/components/reveal"
import { photos } from "@/lib/photos"
import { site } from "@/lib/site"

const description =
  "Call or text Krave Bk Catering at 917-340-0332, or message @krave_bk on Instagram. Tell them the date, the headcount and what you're kraving."

export const metadata: Metadata = {
  title: "Plan your event",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Plan your event · Krave Bk Catering", description, url: "/contact" },
}

const ready = [
  ["The date", "And the time you want to eat."],
  ["The headcount", "Roughly how many people."],
  ["Where", "The neighborhood and the space."],
  ["The krave", "The dishes you want on the table."],
]

export default function ContactPage() {
  return (
    <>
      {/* Coal on the left with the number big enough to tap from across the room; the form on a cream card. */}
      <section className="bg-coal text-cream" aria-labelledby="contact-title">
        <div className="wrap grid gap-12 pb-0 pt-14 sm:pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-5">
            <h1 id="contact-title" className="display text-d1">
              Plan your <span className="text-neon">event.</span>
            </h1>
            <p className="mt-6 max-w-[34ch] text-[1.2rem] text-cream/90">Krave Bk books by phone. Call, text, or send the details below.</p>
            <p className="kicker mt-12 text-foil">Call or text</p>
            <a
              href={site.phoneHref}
              className="display mt-2 block w-fit whitespace-nowrap text-[clamp(2.75rem,12vw,5.5rem)] leading-none text-cream transition-colors hover:text-neon lg:text-[clamp(3.5rem,5.6vw,5rem)]"
            >
              {site.phoneDisplay}
            </a>
            <p className="kicker mt-10 text-foil">Instagram</p>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="link-under mt-2 inline-flex min-h-[44px] items-center text-[1.3rem] font-bold">
              {site.instagramHandle}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <div className="mt-12 hidden max-w-[20rem] lg:block">
              <Pan photo={photos.buffet} ratio="aspect-[4/5]" sizes="320px" objectPosition="70% 50%" label="On the line" labelAt="bl" />
            </div>
          </div>
          <div className="relative z-10 lg:col-span-7">
            <div className="on-light -mx-5 bg-cream p-5 pb-12 text-coal sm:mx-0 sm:rounded-[10px] sm:p-8 md:p-10">
              <EventForm />
            </div>
          </div>
        </div>
      </section>

      {/* The staff photo against a plain checklist: what to have in hand when you call. */}
      <section className="on-light bg-cream" aria-labelledby="ready-title">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <Reveal variant="pan" className="mx-auto w-full max-w-[28rem] lg:col-span-5 lg:mx-0">
            <Pan photo={photos.staff} ratio="aspect-[5/4]" sizes="(min-width: 480px) 448px, 92vw" objectPosition="50% 55%" label="The Krave Bk crew" labelAt="bl" />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="ready-title" className="display text-d2">
              Good to have ready <span className="text-red">when you call.</span>
            </h2>
            <dl className="mt-10 border-t-2 border-coal">
              {ready.map(([t, d]) => (
                <div key={t} className="grid gap-1 border-b border-coal/25 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <dt className="text-[1.2rem] font-bold">{t}</dt>
                  <dd className="text-mute">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
