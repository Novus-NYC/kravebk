import type { Metadata } from "next"
import { EventForm } from "@/lib/components/event-form"
import { Pan } from "@/lib/components/pan"
import { photos } from "@/lib/photos"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Plan your event",
  description: "Call or text Krave Bk Catering at 917-340-0332, or message @krave_bk on Instagram. Tell them the date, the headcount and what you're kraving.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      {/* Coal on the left with the number big enough to tap from across the room; the form on a cream card that runs into the next band. */}
      <section className="bg-coal text-cream" aria-labelledby="contact-title">
        <div className="wrap grid gap-12 pb-16 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-0 lg:pt-20">
          <div className="lg:col-span-5 lg:pb-24">
            <h1 id="contact-title" className="display text-d1">
              Plan your <span className="text-neon">event.</span>
            </h1>
            <p className="mt-6 max-w-[34ch] text-[1.2rem] text-cream/90">Krave Bk books by phone. Call, text, or send the details below.</p>
            <p className="kicker mt-12 text-foil">Call or text</p>
            <a href={site.phoneHref} className="display mt-2 block w-fit text-[clamp(3rem,7vw,5.5rem)] leading-none text-cream transition-colors hover:text-neon">
              {site.phoneDisplay}
            </a>
            <p className="kicker mt-10 text-foil">Instagram</p>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="link-under mt-2 inline-flex min-h-[44px] items-center text-[1.3rem] font-bold">
              {site.instagramHandle}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <div className="mt-12 hidden max-w-[18rem] lg:block">
              <Pan photo={photos.team} ratio="aspect-[4/5]" sizes="288px" objectPosition="50% 62%" label="The Krave Bk family" labelAt="bl" />
            </div>
          </div>
          <div className="relative lg:col-span-7">
            <div className="-mx-5 bg-cream p-5 text-coal sm:mx-0 sm:rounded-[10px] sm:p-8 md:p-10">
              <h2 className="display text-d3">Send the details</h2>
              <div className="mt-4">
                <EventForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream" aria-labelledby="ready-title">
        <div className="wrap pb-20 pt-16 lg:pt-20">
          <h2 id="ready-title" className="kicker border-t-2 border-coal pt-4">
            Good to have ready when you call
          </h2>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["The date", "And the time you want to eat."],
              ["The headcount", "Roughly how many people."],
              ["Where", "The neighborhood and the space."],
              ["The krave", "The dishes you want on the table."],
            ].map(([t, d], i) => (
              <li key={t}>
                <p className="display text-[3.5rem] leading-none text-red">{i + 1}</p>
                <p className="mt-2 text-[1.2rem] font-bold">{t}</p>
                <p className="text-mute">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
