"use client"

import { ArrowRight } from "lucide-react"
import { Reveal } from "../motion"
import { track } from "../track"
import { cldTransform } from "../config"
import { CornerTicks, Eyebrow, MediaFrame, SECTION_Y, SHELL, Tick } from "./ui"
import { CIRCUMCISION_BRANCH, DOCTOR } from "./content"

/**
 * Section 04 — the doctor.
 *
 * On `--c-surface` rather than the base ink: the section before and after are
 * both full-strength, and lifting this one a step is enough to separate them
 * without another bone band so soon after the reviews.
 *
 * Portrait left, credentials right, aligned on a shared top edge rather than
 * centred: the qualification string is long, and a vertically centred portrait
 * beside it leaves the row visibly lopsided between lg and xl.
 *
 * The portrait is requested from Cloudinary at roughly twice its drawn size.
 * next/image runs `unoptimized` (see next.config.mjs), so the browser is handed
 * whatever URL it is given — the original is a tall studio frame, and dropping
 * it straight into a 400px column downscales it in one step and comes out soft.
 * `g_face` keeps the crop on the face as the frame changes shape between
 * breakpoints.
 */
export default function CircDoctor() {
  return (
    <section id="doctor" className={`border-y border-[var(--c-line)] bg-[var(--c-surface)] ${SECTION_Y}`}>
      <div className={SHELL}>
        {/* Three blocks in one grid, same arrangement as the hero: on phones
            they follow each other, which puts the portrait between the section
            heading and the surgeon's name; from lg the two copy halves go back
            into column two and the portrait spans both their rows. */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-0">
          {/* ── Heading, above the portrait on mobile ─────────────────── */}
          <Reveal className="min-w-0 lg:col-start-2 lg:row-start-1">
            <Eyebrow n="03">Your Specialist</Eyebrow>
            <h2 className="mt-5">{DOCTOR.title}</h2>
          </Reveal>

          <Reveal className="min-w-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <MediaFrame
              /* c_limit, not c_fill,g_face: a face-gravity fill at 4:5 centres
                 on the face and takes the crown off the top. This only asks
                 Cloudinary for a smaller file at the original aspect and lets
                 `object-top` below do the framing, which keeps the head whole
                 and crops the coat instead. */
              src={cldTransform(DOCTOR.photo, "c_limit,w_800,q_auto")}
              alt={`${DOCTOR.name} — ${DOCTOR.speciality} at Elite-Minima`}
              label="Doctor Photo"
              focus="top"
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 400px, 100vw"
              className="mx-auto aspect-[4/5] w-full max-w-[400px] lg:mx-0 lg:max-w-none"
            >
              {/* Kept dark through the move to the white theme, because it is
                  on the photograph rather than on the page: the name plate has
                  to stay readable over whatever the bottom of the portrait
                  turns out to be, and only a scrim guarantees that. It is
                  shallower than it was — it no longer has a near-black band to
                  blend into, so it only has to carry the plate. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(28,24,50,0.86))]"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-[var(--c-violet-soft)]">
                  Your Specialist
                </p>
                <p className="c-display mt-2 text-[1.1rem] leading-none text-white">{DOCTOR.name}</p>
              </div>
              <CornerTicks />
            </MediaFrame>
          </Reveal>

          {/* ── Credentials, below the portrait on mobile ────────────────
              No top margin on the name: the grid's row gap supplies the space
              on phones and `lg:pt-8` does at desktop, where the heading above
              is a separate row rather than a sibling. */}
          <Reveal delay={0.1} className="min-w-0 lg:col-start-2 lg:row-start-2 lg:pt-8">
            <p className="c-display text-[1.5rem] leading-none text-[var(--c-violet)]">{DOCTOR.name}</p>
            <p className="mt-3 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-[var(--c-text)]">
              {DOCTOR.speciality}
            </p>
            {/* Plain text, not the page's tracked caps, and break-words: the
                qualifications are one 90-character run of comma-separated
                abbreviations, which in uppercase at 0.16em tracking wrapped to
                four lines and pushed the column past its track at 360px. */}
            <p className="mt-2.5 break-words text-[0.8rem] leading-relaxed text-[var(--c-dim)]">
              {DOCTOR.qualifications}
            </p>

            <p className="mt-7 max-w-[58ch] text-[0.95rem] leading-relaxed text-[var(--c-dim)]">{DOCTOR.body}</p>

            <p className="mt-9 text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[var(--c-text)]">
              {DOCTOR.pointsTitle}
            </p>
            <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
              {DOCTOR.points.map((p) => (
                <Tick key={p}>{p}</Tick>
              ))}
            </ul>

            <a
              href="#book"
              onClick={() => track("book_click", { branch: CIRCUMCISION_BRANCH, section: "doctor" })}
              className="c-btn c-btn-solid group/btn mt-9 w-full sm:w-auto"
            >
              {DOCTOR.button}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
