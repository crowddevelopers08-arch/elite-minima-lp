"use client"

import { Phone } from "lucide-react"
import { Reveal } from "../motion"
import { track } from "../track"
import { Eyebrow, SECTION_Y, SHELL, Tick } from "./ui"
import CircForm from "./CircForm"
import { BOOKING, CIRCUMCISION_BRANCH, CIRC_PHONES, HERO_CONCERNS } from "./content"

/**
 * Section 01b — the booking band, directly under the hero.
 *
 * The form used to sit in the hero's right column; the portrait took that
 * space, so the six fields get a band of their own. A full-width strip split
 * into a pitch and the fields, the same arrangement the gynecomastia page
 * uses — and more room than the hero column ever gave them.
 *
 * The left column carries the deck's four concerns and the phone number, so
 * someone who would rather call than type never has to scroll for it, and
 * someone still working out whether this page is about them can see the four
 * reasons to book while looking at the form.
 *
 * `#book` is on the section, so every CTA on the page lands here.
 */
export default function CircBooking() {
  return (
    <section id="book" className={`border-y border-[var(--c-line)] bg-[var(--c-surface)] ${SECTION_Y}`}>
      <div className={`${SHELL} grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}>
        <Reveal className="min-w-0">
          <Eyebrow n="01">Book</Eyebrow>
          <h2 className="mt-5 max-w-[16ch]">{BOOKING.title}</h2>
          <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-[var(--c-dim)]">{BOOKING.lead}</p>

          <p className="mt-9 text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[var(--c-text)]">
            {BOOKING.concernsTitle}
          </p>
          <ul className="mt-4">
            {HERO_CONCERNS.map((c) => (
              <Tick key={c}>{c}</Tick>
            ))}
          </ul>

          {/* No top rule here: the last tick above already draws its own
              bottom border, and the two together read as a doubled line. */}
          <div className="mt-8">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[var(--c-dim)]">{BOOKING.callTitle}</p>
            {/* Both lines. This is a listing, not a single-button CTA, so it
                follows the site convention in config.ts and shows the second
                number beside the primary. */}
            <div className="mt-3 flex flex-col gap-2">
              {CIRC_PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  onClick={() => track("call_click", { branch: CIRCUMCISION_BRANCH, section: "booking" })}
                  className="c-display inline-flex w-fit items-center gap-3 text-[1.35rem] leading-none text-[var(--c-text)] transition-colors hover:text-[var(--c-violet)]"
                >
                  <Phone className="h-4 w-4 flex-none text-[var(--c-green)]" aria-hidden />
                  {p.display}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 border border-[var(--c-line)] bg-[var(--c-base)] p-6 sm:p-8 lg:p-10">
          <CircForm />
        </Reveal>
      </div>
    </section>
  )
}
