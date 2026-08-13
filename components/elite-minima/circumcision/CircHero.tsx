"use client"

import Image from "next/image"
import { ArrowRight, BadgeCheck, CalendarClock, HeartHandshake, Phone, ShieldCheck, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { track } from "../track"
import { CornerTicks, SHELL_WIDE } from "./ui"
import { CIRCUMCISION_BRANCH, CIRC_PHONE_TEL, DOCTOR, HERO, HERO_ASSURANCES } from "./content"

/**
 * Section 01 — the hook, and the surgeon's face.
 *
 * A single contained panel rather than a full-bleed band: copy in the left
 * two-thirds, the portrait bleeding to the panel's own top, bottom and right
 * edges in the right third. That is the reference layout this section was
 * asked to follow — badge, headline with a coloured closing run, lead, a
 * two-by-two grid of assurances, then a solid CTA beside an outlined one.
 *
 * The booking form is no longer here. It has its own band directly underneath
 * (CircBooking), which is also how the gynecomastia page is arranged: someone
 * deciding whether to be evaluated wants to see who would treat them before
 * they are asked for a phone number, and the form is still the first thing
 * under the fold either way.
 *
 * Two things deliberately do not copy the reference. Its panel has large
 * rounded corners; this page has no rounded corner anywhere, and one here
 * would read as a mistake rather than a flourish. And its palette is green on
 * gold — this keeps the page's plum ink and violet, so the hero belongs to the
 * six sections under it.
 *
 * Entrance is `.c-rise` / `.c-dN`: a CSS animation on load, not an in-view
 * observer. The hero is on screen already, and anything gated on a scroll band
 * can be jumped past without ever entering it.
 */

/* Icon per assurance, keyed by the string in content.ts. A map rather than an
   array paired by index — the labels are content and may be reordered, and a
   silent off-by-one would put the wrong glyph beside the wrong promise.
   Anything unmatched falls back to the check badge. */
const ASSURANCE_ICONS: Record<string, LucideIcon> = {
  "Private Consultation": ShieldCheck,
  "Day-Care Treatment": CalendarClock,
  "Stapler & Laser Options": Sparkles,
  "Personalized Aftercare": HeartHandshake,
}

export default function CircHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--c-base)]">
      {/* Ground: diagonal hairlines, faded out toward the bottom so the band
          below starts on clean ink rather than a hard edge. */}
      <div
        aria-hidden
        className="c-tex pointer-events-none absolute inset-0 opacity-70"
        style={{
          maskImage: "linear-gradient(180deg,#000,transparent 90%)",
          WebkitMaskImage: "linear-gradient(180deg,#000,transparent 90%)",
        }}
      />
      {/* A single violet bloom behind the headline — the page's only glow. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[-14rem] h-[34rem] w-[34rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(81,62,152,0.55), transparent 68%)" }}
      />

      <div className={`${SHELL_WIDE} relative py-8 sm:py-12`}>
        <div className="c-rise c-d1 grid overflow-hidden border border-[var(--c-line)] bg-[var(--c-surface)] lg:grid-cols-[1.2fr_0.8fr]">
          {/* ── Copy ──────────────────────────────────────────────────── */}
          <div className="min-w-0 p-7 sm:p-10 lg:p-12">
            <p className="inline-flex items-center gap-2.5 border border-[var(--c-line-strong)] px-3.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[var(--c-violet)]">
              <BadgeCheck className="h-3.5 w-3.5 flex-none" aria-hidden />
              {HERO.eyebrow}
            </p>

            <h1 className="mt-6 max-w-[15ch]">
              {HERO.headline} <span className="text-[var(--c-violet)]">{HERO.headlineAccent}</span>
            </h1>

            <p className="mt-5 max-w-[52ch] text-[0.98rem] leading-relaxed text-[var(--c-dim)] sm:text-[1.04rem]">
              {HERO.subtext}
            </p>

            {/* Two by two from sm, per the reference. Icon and label on one
                line each, so the four read as a set of promises rather than a
                list of features. */}
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {HERO_ASSURANCES.map((a) => {
                const Icon = ASSURANCE_ICONS[a] ?? BadgeCheck
                return (
                  <li key={a} className="flex items-center gap-3 text-[0.9rem] text-[var(--c-text)]">
                    <Icon className="h-[18px] w-[18px] flex-none text-[var(--c-violet)]" aria-hidden />
                    <span className="min-w-0">{a}</span>
                  </li>
                )
              })}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#book"
                onClick={() => track("book_click", { branch: CIRCUMCISION_BRANCH, section: "hero" })}
                className="c-btn c-btn-solid group/btn w-full sm:w-auto"
              >
                {HERO.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden />
              </a>
              <a
                href={`tel:${CIRC_PHONE_TEL}`}
                onClick={() => track("call_click", { branch: CIRCUMCISION_BRANCH, section: "hero" })}
                className="c-btn c-btn-line w-full sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {HERO.secondaryCta}
              </a>
            </div>
          </div>

          {/* ── Portrait ──────────────────────────────────────────────────
              The figure is a cut-out, so this column supplies the background
              it stands on: a violet panel lifted out of the page's own accent,
              with a soft bloom behind the head. A white coat needs something
              with weight behind it — on the panel's own plum it read as a
              figure floating in the dark.

              `object-contain object-bottom`, not cover: a cut-out cropped to
              fill would lose the hands and the crown, and the whole point of
              the treatment is that he stands on the panel's base edge. */}
          <div
            className="relative min-h-[380px] overflow-hidden sm:min-h-[460px] lg:min-h-0"
            style={{
              background:
                "radial-gradient(72% 58% at 50% 22%, rgba(185,167,232,0.30), transparent 72%), linear-gradient(180deg, #2c2457 0%, #1d1936 100%)",
            }}
          >
            <Image
              src={HERO.portrait}
              alt={`${DOCTOR.name} — ${DOCTOR.speciality} at Elite-Minima`}
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-contain object-bottom"
            />
            <CornerTicks />
          </div>
        </div>
      </div>
    </section>
  )
}
