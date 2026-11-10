"use client"

import { useRef, useState, type FormEvent } from "react"
import { site } from "@/lib/site"
import { spread } from "@/lib/spread"

/*
 * Krave Bk takes bookings by phone and text (Instagram bio). There is no email or booking system,
 * so this form does not pretend to send anything: it writes the text message for the visitor and
 * opens their messages app addressed to 917-340-0332. Nothing reaches Krave Bk until they press send.
 */
const eventTypes = ["Birthday", "Church or community", "Office or work", "Wedding or shower", "Something else"]
const dishes = [...spread.map((d) => d.name), "Something else"]

type Field = "name" | "phone"
type Errors = Partial<Record<Field, string>>

const validate = (name: string, phone: string): Errors => {
  const e: Errors = {}
  if (!name.trim()) e.name = "Add your name so they know who is texting."
  const digits = phone.replace(/\D/g, "")
  if (!digits) e.phone = "Add a phone number they can text you back on."
  else if (digits.length < 10) e.phone = "That number looks short. Include the area code."
  return e
}

const chip = (on: boolean) =>
  `inline-flex min-h-[44px] cursor-pointer items-center rounded-[4px] border-2 px-4 font-semibold transition-colors duration-150 peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-red ${
    on ? "border-coal bg-coal text-cream" : "border-coal/30 bg-white hover:border-coal"
  }`

export function EventForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [guests, setGuests] = useState("")
  const [type, setType] = useState("")
  const [picked, setPicked] = useState<string[]>([])
  const [notes, setNotes] = useState("")
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [message, setMessage] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const blur = (f: Field) => {
    setTouched((t) => ({ ...t, [f]: true }))
    setErrors(validate(name, phone))
  }
  const shown = (f: Field) => (touched[f] ? errors[f] : undefined)

  const compose = () => {
    const when = date ? new Date(`${date}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""
    return [
      "Hi Krave Bk, I'd like to plan an event.",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      when && `Date: ${when}`,
      guests && `Guests: about ${guests}`,
      type && `Event: ${type}`,
      picked.length > 0 && `Kraving: ${picked.join(", ")}`,
      notes.trim() && `Notes: ${notes.trim()}`,
    ]
      .filter(Boolean)
      .join("\n")
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const found = validate(name, phone)
    setErrors(found)
    setTouched({ name: true, phone: true })
    if (found.name) return nameRef.current?.focus()
    if (found.phone) return phoneRef.current?.focus()
    const text = compose()
    setMessage(text)
    setCopied(false)
    window.location.href = site.smsBase + encodeURIComponent(text)
  }

  const copy = async () => {
    if (!message) return
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  if (message) {
    return (
      <div role="status" aria-live="polite">
        <p className="display text-d3">Your text is ready.</p>
        <p className="mt-4 max-w-[44ch]">
          Your messages app should be open with everything filled in, addressed to {site.phoneDisplay}. Press send there and Krave Bk gets it.
        </p>
        <p className="mt-3 max-w-[44ch] text-mute">On a computer? Copy it and text it from your phone, or just call.</p>
        <pre className="mt-6 whitespace-pre-wrap rounded-[6px] border-2 border-coal/15 bg-white p-4 font-sans text-[0.98rem]">{message}</pre>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button type="button" onClick={copy} className="btn-red">
            {copied ? "Copied" : "Copy the message"}
          </button>
          <a href={site.phoneHref} className="btn-line text-coal">
            Call {site.phoneDisplay}
          </a>
          <button type="button" onClick={() => setMessage(null)} className="link-under inline-flex min-h-[44px] items-center px-2 font-bold">
            Edit details
          </button>
        </div>
      </div>
    )
  }

  const input =
    "mt-2 block min-h-[52px] w-full rounded-[4px] border-2 bg-white px-4 text-[1.05rem] text-coal outline-none transition-colors focus:border-coal"
  const err = (f: Field) => (shown(f) ? "border-red" : "border-coal/25")

  return (
    <form noValidate onSubmit={submit} aria-describedby="form-how">
      <p id="form-how" className="max-w-[46ch] text-[1.02rem]">
        Fill this in and we&rsquo;ll write the text for you. It opens in your messages app, addressed to Krave Bk. Nothing is sent until you press send.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="font-bold">
            Your name <span className="text-red">(required)</span>
          </label>
          <input
            id="f-name"
            ref={nameRef}
            autoComplete="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (touched.name) setErrors(validate(e.target.value, phone))
            }}
            onBlur={() => blur("name")}
            aria-invalid={!!shown("name")}
            aria-describedby={shown("name") ? "f-name-err" : undefined}
            className={`${input} ${err("name")}`}
          />
          {shown("name") ? (
            <p id="f-name-err" className="mt-2 font-bold text-red">
              ! {shown("name")}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="f-phone" className="font-bold">
            Your phone <span className="text-red">(required)</span>
          </label>
          <input
            id="f-phone"
            ref={phoneRef}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
              if (touched.phone) setErrors(validate(name, e.target.value))
            }}
            onBlur={() => blur("phone")}
            aria-invalid={!!shown("phone")}
            aria-describedby={shown("phone") ? "f-phone-err" : undefined}
            className={`${input} ${err("phone")}`}
          />
          {shown("phone") ? (
            <p id="f-phone-err" className="mt-2 font-bold text-red">
              ! {shown("phone")}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="f-date" className="font-bold">
            Event date
          </label>
          <input id="f-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={`${input} border-coal/25`} />
        </div>
        <div>
          <label htmlFor="f-guests" className="font-bold">
            How many people
          </label>
          <input
            id="f-guests"
            type="number"
            inputMode="numeric"
            min={1}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className={`${input} border-coal/25`}
          />
        </div>
      </div>

      <fieldset className="mt-8">
        <legend className="font-bold">What&rsquo;s the occasion</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {eventTypes.map((t) => (
            <label key={t}>
              <input
                type="radio"
                name="type"
                value={t}
                checked={type === t}
                onChange={() => setType(t)}
                className="peer sr-only"
              />
              <span className={chip(type === t)}>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="font-bold">What are you kraving</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {dishes.map((d) => {
            const on = picked.includes(d)
            return (
              <label key={d}>
                <input
                  type="checkbox"
                  value={d}
                  checked={on}
                  onChange={() => setPicked((p) => (on ? p.filter((x) => x !== d) : [...p, d]))}
                  className="peer sr-only"
                />
                <span className={chip(on)}>{d}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-8">
        <label htmlFor="f-notes" className="font-bold">
          Anything else
        </label>
        <textarea
          id="f-notes"
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Where it is, timing, dietary needs"
          className={`${input} min-h-[120px] border-coal/25 py-3`}
        />
      </div>

      <button type="submit" className="btn-red mt-8 w-full sm:w-auto">
        Write my text to Krave Bk
      </button>
    </form>
  )
}
