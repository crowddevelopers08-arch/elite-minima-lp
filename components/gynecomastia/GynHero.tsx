"use client"

import { ArrowRight, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Reveal } from "../elite-minima/motion"
import { track } from "../elite-minima/track"
import { WHATSAPP_URL } from "../elite-minima/config"
import GynLeadForm from "./GynLeadForm"
import { GYN_BRANCH, GYN_PHONE_DISPLAY, GYN_PHONE_TEL, HERO } from "./content"

/**
 * Section 01 — the hook, and the form.
 *
 * Replaces the old pixel-mapped before/after banner: copy on the left —
 * eyebrow, headline with a coloured closing run, lead, then a solid CTA
 * beside two outlined ones — and the booking fields on the right, in one
 * bordered panel. The same shape as the circumcision page's hero, because the
 * reasoning is the same: a band of its own further down repeating "Book Your
 * Consultation" under a hero that already shows the fields would be a scroll
 * spent on nothing, so GynBooking (the section that used to do that
 * immediately under this one) is no longer rendered — see
 * app/gynecomastias/page.tsx. `#book` lives on the form column here, so
 * every CTA on the page still lands on the fields.
 */
export default function GynHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--g-bone-2)]">
      {/* Ground: the grid hairline texture, faded out toward the bottom so
          the grain has stopped by the time the band ends — same fade shape
          CircHero uses, on .gyn's own square-grid texture rather than
          borrowing .circ's diagonal one.

          Drawn inline rather than via the shared `.g-grid-tex` class: that
          class draws its lines in `--g-line`, the dark-ground hairline
          colour, which reads as a hard dark grid on this light band instead
          of a texture. `--g-bone-line` is the token actually meant for a
          light surface. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--g-bone-line) 1px, transparent 1px), linear-gradient(90deg, var(--g-bone-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.6,
          maskImage: "linear-gradient(180deg,#000,transparent 90%)",
          WebkitMaskImage: "linear-gradient(180deg,#000,transparent 90%)",
        }}
      />
      {/* A single green bloom behind the headline — the page's only glow,
          same placement and softness as CircHero's violet one, re-mixed in
          the brand green instead. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[-14rem] h-[34rem] w-[34rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(23,116,60,0.18), transparent 68%)" }}
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 py-8 sm:px-8 sm:py-12">
        <div className="grid overflow-hidden border border-[var(--g-bone-line)] bg-white lg:grid-cols-[1.05fr_0.95fr]">
          {/* ── Copy ──────────────────────────────────────────────────── */}
          <Reveal className="flex min-w-0 flex-col justify-center px-7 py-9 text-[var(--g-ink)] sm:px-10 sm:py-11 lg:px-12 lg:py-14">
            <p className="g-eyebrow g-eyebrow--ink">{HERO.eyebrow}</p>

            <h1 className="mt-6 max-w-[16ch] text-[var(--g-ink)]">
              {HERO.headline} <span className="text-[var(--g-accent-deep)]">{HERO.headlineAccent}</span>
            </h1>

            <p className="mt-5 max-w-[52ch] text-[0.98rem] leading-relaxed text-[var(--g-ink-dim)] sm:text-[1.04rem]">
              {HERO.subtext}
            </p>

            {/* flex-wrap, not a hard row: three full-text buttons don't
                reliably fit this panel's narrower width, and letting a
                button's own label wrap mid-word (what was happening to "Book
                Consultation" and the phone number) made the row uneven —
                shorter buttons stayed one line while the wrapped ones grew
                taller. whitespace-nowrap keeps every label on one line, and
                the row itself wraps as whole buttons instead. */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#book"
                onClick={() => track("book_click", { branch: GYN_BRANCH, section: "hero" })}
                className="g-btn g-btn-ink group/btn w-full whitespace-nowrap sm:w-auto"
              >
                {HERO.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden />
              </a>
              <a
                href={`tel:${GYN_PHONE_TEL}`}
                onClick={() => track("call_click", { branch: GYN_BRANCH, section: "hero" })}
                className="g-btn g-btn-ink-line w-full whitespace-nowrap sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {GYN_PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { branch: GYN_BRANCH, section: "hero" })}
                className="g-btn g-btn-ink-line w-full whitespace-nowrap sm:w-auto"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden />
                {HERO.whatsappCta}
              </a>
            </div>
          </Reveal>

          {/* ── Form ──────────────────────────────────────────────────────
              A step lighter than the copy half, and a hairline between them,
              so the fields read as a separate object inside the panel rather
              than the tail of the paragraph above. The border flips from top
              to left once the two go side by side. */}
          {/* `id` lives on this wrapper rather than on `Reveal` itself — that
              component doesn't forward arbitrary props — and `contents` keeps
              it invisible to the grid, so `Reveal`'s own div is still the
              actual grid cell. */}
          <div id="book" className="contents">
            <Reveal
              delay={0.1}
              className="flex min-w-0 flex-col justify-center border-t border-[var(--g-line)] bg-[var(--g-surface)] px-7 py-7 sm:px-10 sm:py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10"
            >
              <h2 className="text-[1.35rem] sm:text-[1.5rem]">Book Your Consultation</h2>
              <p className="mt-2 max-w-[42ch] text-[0.9rem] leading-relaxed text-[var(--g-dim)]">
                Share your details and our team will call you back to confirm a time that suits you.
              </p>

              <div className="mt-5">
                <GynLeadForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
