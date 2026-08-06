"use client"

import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import CountUp from "../CountUp"
import Reveal from "../Reveal"
import TitleUnderline from "../TitleUnderline"
import { track } from "../track"
import { EXPECTATIONS, SPECIALISTS } from "./content"

const BRANCH = "Elite Minima Clinic — General"

/* Portrait and caption both come off this one record, so the picture and the
   name under it can't drift apart. */
const lead = SPECIALISTS[0]

/* Only figures the clinic actually claims elsewhere on the site. Two real
   numbers beat four padded ones — a made-up third stat on a surgical clinic
   is a claim, not decoration. */
const STATS = [
  { value: 4000, suffix: "+", label: "Surgeries performed" },
  { value: 12, suffix: "+", label: "Years of experience" },
]

/**
 * Why the clinic, and what a visit involves.
 *
 * Photograph beside the pitch, with the credibility figures directly under it,
 * then the expectations as one quiet band.
 *
 * Deliberately does NOT restate the treatment pathways. It used to carry a
 * "Treatments at Elite-Minima" grid listing the same three groups and the same
 * procedures as GeneralTreatments above — a reader met that content twice
 * within a screen or two, which no amount of styling was going to rescue.
 */
export default function GeneralClinic() {
  return (
    <section id="clinic" className="border-b border-[var(--e-line)] bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14">
          {/* ── Specialist portrait ──────────────────────────────────────
              Not a clinical image. Every other asset in IMAGES is an
              anatomical piles model or diagram — graphic, and piles-only on a
              page that also sells circumcision and gynecomastia. On a section
              whose job is reassurance, a surgeon's face does that work and a
              cutaway of the anal canal actively undoes it.

              The portrait carries a pale green studio background, close enough
              to the section's white that the frame still needs its own hairline
              — without one its edge dissolves into the page. The fill matches
              that backdrop so it doesn't flash grey while the image loads. */}
          <Reveal className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-[var(--e-green-soft)] ring-1 ring-inset ring-[var(--e-line)] shadow-[0_30px_60px_-34px_rgba(14,22,38,0.45)]">
              <Image
                src={lead.photo}
                alt={`${lead.name}, ${lead.title}, Elite-Minima – The Surgical Speciality Clinic`}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top"
              />

              {/* Names the face — a portrait with no attribution reads as a
                  stock model, which is worse than no portrait at all. Solid
                  white, not a translucent fill: over the shirt, any alpha here
                  tints the plate peach. */}
              <div className="absolute inset-x-3 bottom-3 rounded-[18px] bg-white px-4 py-3 shadow-[0_10px_30px_-18px_rgba(14,22,38,0.5)] sm:inset-x-4 sm:bottom-4">
                <p className="text-[0.92rem] font-bold leading-snug text-[var(--e-ink)]">{lead.name}</p>
                <p className="mt-0.5 text-[0.76rem] leading-snug text-[var(--e-green-deep)]">{lead.title}</p>
              </div>
            </div>
          </Reveal>

          {/* ── Pitch, counters, CTA ─────────────────────────────────────── */}
          <Reveal index={1} className="min-w-0 lg:col-span-7">
            <p className="kicker">Why Choose Elite-Minima?</p>
            <h2 className="mt-4">Advanced Surgical Care. Personalized for You.</h2>
            <TitleUnderline className="mt-3" maxWidth={430} />

            <p className="mt-5 max-w-[58ch] text-[0.98rem] leading-relaxed text-[var(--e-muted)]">
              Elite-Minima – The Surgical Speciality Clinic in Anna Nagar provides specialist surgical and minimally invasive care with an
              emphasis on accurate evaluation, personalized treatment, privacy, and supportive recovery.
            </p>
            <p className="mt-3 max-w-[58ch] text-[0.98rem] leading-relaxed text-[var(--e-muted)]">
              From your first consultation through treatment and follow-up, our team guides you through every stage with clear communication.
            </p>

            {/* Counters run on reveal — the numerals are the loudest thing in
                the column, which is the point of borrowing this pattern. */}
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map(({ value, suffix, label }) => (
                <div key={label} className="rounded-[20px] bg-[var(--e-canvas)] px-5 py-5 sm:px-6">
                  <dd className="text-[clamp(1.7rem,1.3rem+1.4vw,2.6rem)] font-extrabold leading-none tracking-tight text-[var(--e-green-deep)]">
                    <CountUp end={value} suffix={suffix} separator="," />
                  </dd>
                  <dt className="mt-2 text-[0.82rem] leading-tight text-[var(--e-muted)]">{label}</dt>
                </div>
              ))}
            </dl>

            <a
              href="#book"
              onClick={() => track("book_click", { branch: BRANCH, section: "clinic" })}
              className="btn btn-primary group/btn mt-7 w-full sm:w-auto"
            >
              Book Your Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* ── What you can expect ──────────────────────────────────────────
            Each point is its own tile rather than a line of text on one flat
            slab. Half these labels wrap to two lines and half do not, so as
            bare rows they left ragged pockets of dead space down the band; a
            tile stretches to its row's height and absorbs that difference. */}
        <Reveal className="mt-11">
          <p className="inline-flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--e-purple-deep)]">
            <span aria-hidden className="h-[2px] w-5 flex-none rounded-full bg-[linear-gradient(90deg,var(--e-green),var(--e-purple))]" />
            What you can expect
          </p>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {EXPECTATIONS.map((e) => (
              <li
                key={e}
                className="group flex h-full items-start gap-3 rounded-[16px] bg-[var(--e-canvas)] px-4 py-3.5 transition-colors duration-300 hover:bg-[var(--e-green-soft)]"
              >
                <span className="mt-px flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[var(--e-green-deep)] transition-colors duration-300 group-hover:bg-[var(--e-green)] group-hover:text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <p className="text-[0.88rem] leading-snug text-[var(--e-ink-soft)]">{e}</p>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  )
}
