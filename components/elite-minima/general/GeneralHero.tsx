"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Phone, Check, ArrowRight } from "lucide-react"
import TitleUnderline from "../TitleUnderline"
import { track } from "../track"
import { EASE } from "../tokens"
import GeneralLeadForm from "./GeneralLeadForm"
import { GENERAL_PHONE_TEL, HERO_CONCERNS, HERO_IMAGES } from "./content"

const BRANCH = "Elite Minima Clinic — General"

/** Slide dwell time, ms. */
const SLIDE_MS = 5000

export default function GeneralHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--e-canvas)]">
      <div className="mx-auto grid w-full max-w-[1350px] gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-10">
        <div className="min-w-0 self-center">
          <div className="rise d2">
            <h1 className="text-[clamp(1.7rem,1.1rem+2.1vw,2.6rem)] font-extrabold leading-[1.12] tracking-tight text-[var(--e-ink)]">
              Advanced Surgical Care for Piles, Circumcision &amp; Gynecomastia
            </h1>
            <TitleUnderline className="mt-3" maxWidth={520} />
            <p className="mt-3 max-w-[72ch] text-[clamp(0.86rem,0.8rem+0.24vw,1rem)] leading-relaxed text-[var(--e-muted)]">
              Get specialist evaluation and personalized treatment at Elite-Minima – The Surgical Speciality Clinic, with a focus on privacy,
              safety, clear communication, and supportive recovery.
            </p>
          </div>

          <div className="rise d4 mt-5">
            <HeroCarousel />
          </div>

          {HERO_CONCERNS.length > 0 && (
            <ul className="rise d5 mt-4 grid gap-2.5 sm:grid-cols-3">
              {HERO_CONCERNS.map((c) => (
                <li key={c.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--e-green-soft)] text-[var(--e-green-deep)]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.9rem] font-bold text-[var(--e-ink)]">{c.title}</span>
                    <span className="mt-0.5 block text-[0.8rem] leading-snug text-[var(--e-muted)]">{c.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="rise d5 mt-6 flex flex-col gap-2.5 sm:flex-row">
            <a
              href="#book"
              onClick={() => track("book_click", { branch: BRANCH, section: "hero" })}
              className="btn btn-primary group/btn w-full sm:w-auto"
            >
              Book Your Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
            <a
              href={`tel:${GENERAL_PHONE_TEL}`}
              onClick={() => track("call_click", { branch: BRANCH, section: "hero" })}
              className="btn btn-ghost w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Call Our Team
            </a>
          </div>
        </div>

        <div id="book" className="lg:self-center">
          <GeneralLeadForm compact />
        </div>
      </div>
    </section>
  )
}

/** Frames visible at once. */
const PER_VIEW = 2

/**
 * Hero carousel — two pathway images at a time, advancing on its own.
 *
 * A sliding window rather than a paged track: with three images and two slots,
 * paging would leave a half-empty second page, so instead each slot holds
 * `HERO_IMAGES[(i + slot) % count]` and the window steps one image per tick.
 * Every image therefore gets a turn in both positions.
 *
 * The slots cross-fade in place rather than translating — each frame is only a
 * few hundred px wide, and sliding at that size reads as a jitter. Autoplay
 * stops on hover and on focus, and the dots double as manual controls.
 *
 * Advancing is deliberately not gated on reduced motion — changing which image
 * is shown is a content change, and it is the cross-fade that counts as motion.
 * Under `reduced` the fade collapses to 0s and the swap is instant instead.
 */
function HeroCarousel() {
  const reduced = useReducedMotion()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = HERO_IMAGES.length

  const go = useCallback((next: number) => setI(((next % count) + count) % count), [count])

  useEffect(() => {
    if (paused || count <= PER_VIEW) return
    const t = window.setInterval(() => setI((v) => (v + 1) % count), SLIDE_MS)
    return () => window.clearInterval(t)
  }, [paused, count])

  return (
    <div
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Treatments at Elite-Minima"
    >
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: PER_VIEW }, (_, slot) => {
          const s = HERO_IMAGES[(i + slot) % count]
          return (
            <div
              key={slot}
              className="relative h-[190px] overflow-hidden rounded-[20px] bg-[var(--e-line-soft)] shadow-[0_18px_50px_-32px_rgba(14,22,38,0.45)] sm:h-[235px] sm:rounded-[22px] lg:h-[258px]"
            >
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={s.src}
                  className="absolute inset-0"
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.7, ease: EASE }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    priority={slot === 0}
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Dots are real buttons — the carousel has to be reachable without a
          pointer, and autoplay alone is not a control. They sit under the
          frames now: with two slots there is no single image to overlay, and
          the slides carry no caption that would need a scrim anyway. */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {HERO_IMAGES.map((s, d) => (
          <button
            key={s.src}
            type="button"
            onClick={() => go(d)}
            aria-label={`Show ${s.caption}`}
            aria-current={d === i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              d === i ? "w-6 bg-[var(--e-green)]" : "w-1.5 bg-[var(--e-line)] hover:bg-[var(--e-muted)]"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
