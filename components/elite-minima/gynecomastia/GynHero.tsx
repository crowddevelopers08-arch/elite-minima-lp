"use client"

import Image from "next/image"
import { ArrowDown, Check, Phone, Play } from "lucide-react"
import { track } from "../track"
import { GYN_BRANCH, GYN_PHONE_TEL, HERO, HERO_CONCERNS, HERO_MEDIA, HERO_SURGEON } from "./content"

/**
 * Hero — media-led, form-free.
 *
 * Both other pages put the booking card in the hero's right column. Here the
 * right column is the film, and the form is the band immediately below (see
 * GynBooking): a visitor deciding whether to be evaluated for their chest
 * wants to see the clinic and the surgeon before they are asked for a phone
 * number, and the form is still the first thing under the fold either way.
 */
export default function GynHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--g-base)]">
      {/* Ground: hairline grid, faded out toward the bottom so the band below
          starts on clean black rather than a hard edge. */}
      <div
        aria-hidden
        className="g-grid-tex pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{ maskImage: "linear-gradient(180deg,#000,transparent 88%)", WebkitMaskImage: "linear-gradient(180deg,#000,transparent 88%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[-12rem] h-[34rem] w-[34rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(63,191,119,0.28), transparent 68%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1320px] gap-10 px-5 py-10 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-10">
        {/* ── Copy ─────────────────────────────────────────────────────── */}
        <div className="min-w-0">
          <p className="g-rise g-d1 g-eyebrow">Male Breast Reduction</p>

          <h1 className="g-rise g-d2 mt-5 max-w-[16ch]">{HERO.title}</h1>

          <p className="g-rise g-d3 mt-6 max-w-[62ch] text-[0.98rem] leading-relaxed text-[var(--g-dim)]">{HERO.lead}</p>

          <div className="g-rise g-d4 mt-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--g-text)]">Common concerns we treat</p>
            {/* Hairline rows, two columns from sm. A tinted chip per concern
                would have been six coloured pills in the hero — the rule does
                the separating instead. */}
            <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {HERO_CONCERNS.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 border-b border-[var(--g-line)] py-2.5 text-[0.9rem] text-[var(--g-text)]"
                >
                  <Check className="h-3.5 w-3.5 flex-none text-[var(--g-accent)]" strokeWidth={3} aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="g-rise g-d5 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              onClick={() => track("book_click", { branch: GYN_BRANCH, section: "hero" })}
              className="g-btn g-btn-solid group/btn w-full sm:w-auto"
            >
              {HERO.primaryCta}
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-y-0.5" />
            </a>
            <a
              href={`tel:${GYN_PHONE_TEL}`}
              onClick={() => track("call_click", { branch: GYN_BRANCH, section: "hero" })}
              className="g-btn g-btn-line w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {HERO.secondaryCta}
            </a>
          </div>
        </div>

        {/* ── Media + surgeon plate ────────────────────────────────────── */}
        <div className="g-rise g-d3 min-w-0">
          <HeroMedia />

          {/* The surgeon is named on the media, not in a card of his own —
              the film and the face are one credential. */}
          <div className="flex items-center gap-4 border border-t-0 border-[var(--g-line)] bg-[var(--g-surface)] p-4">
            <span className="relative h-14 w-14 flex-none overflow-hidden bg-[var(--g-raised)]">
              <Image
                src={HERO_SURGEON.photo}
                alt={`${HERO_SURGEON.name} — ${HERO_SURGEON.title}`}
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </span>
            <div className="min-w-0">
              <p className="g-display text-[1.05rem] leading-none text-[var(--g-text)]">{HERO_SURGEON.name}</p>
              <p className="mt-1.5 text-[0.78rem] leading-snug text-[var(--g-dim)]">{HERO_SURGEON.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * The hero frame.
 *
 * A real `<video>` when one is configured in content.ts, and the poster still
 * otherwise — the clinic has no chest-contouring film yet, and a play button
 * over an image that cannot play is worse than no button. Dropping a URL into
 * HERO_MEDIA.video is the only change needed to turn this into a player.
 */
function HeroMedia() {
  const { video, poster, alt } = HERO_MEDIA

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--g-line)] bg-[var(--g-raised)]">
      {video ? (
        <video
          className="h-full w-full object-cover"
          src={video}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          aria-label={alt}
        />
      ) : (
        <>
          <Image src={poster} alt={alt} fill sizes="(min-width: 1024px) 46vw, 100vw" priority className="object-cover object-center" />
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,20,0.05),rgba(8,12,20,0.72))]" />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2.5 border border-white/25 bg-[rgba(8,12,20,0.6)] px-3 py-2 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-[6px]"
          >
            <Play className="h-3 w-3 fill-current" />
            Chest contouring
          </span>
        </>
      )}

      {/* Corner ticks — the viewfinder motif this page uses wherever an image
          is framed. */}
      {["left-0 top-0 border-l border-t", "right-0 top-0 border-r border-t", "left-0 bottom-0 border-l border-b", "right-0 bottom-0 border-r border-b"].map(
        (c) => (
          <span key={c} className={`pointer-events-none absolute h-5 w-5 border-[var(--g-accent)] ${c}`} aria-hidden />
        ),
      )}
    </div>
  )
}
