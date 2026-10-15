"use client"

import { useState } from "react"
import { Reveal } from "../motion"
import { Eyebrow, SECTION_Y, SHELL } from "./ui"
import { FAQS, FAQ_LEAD, FAQ_TITLE } from "./content"

/**
 * Section 08 — FAQ, as a bordered accordion.
 *
 * The piles page's two-column FAQ (sticky heading beside a card of questions)
 * redrawn in this page's own vocabulary: square corners rather than a rounded
 * card — nothing on `.circ` has a rounded corner — hairline dividers instead
 * of soft ones, and the open/closed glyph is a square plus that turns into a
 * cross on rotation rather than a filled circle.
 *
 * Only one answer is open at a time — a reader comparing "laser vs ZSR" to
 * "is it painful" is weighing two answers, not reading five at once — and the
 * first question starts open so the pattern is legible without a click.
 */
export default function CircFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className={`bg-[var(--c-bone)] text-[var(--c-ink)] ${SECTION_Y}`}>
      <div className={`${SHELL} flex flex-col gap-10 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16`}>
        <Reveal className="lg:sticky lg:top-28">
          <Eyebrow n="07" tone="ink">
            FAQ
          </Eyebrow>
          <h2 className="mt-5">{FAQ_TITLE}</h2>
          <p className="mt-5 max-w-[48ch] text-[0.98rem] leading-relaxed text-[var(--c-ink-dim)]">{FAQ_LEAD}</p>
        </Reveal>

        <Reveal className="border border-[var(--c-bone-line)] bg-[var(--c-bone)]">
          <div className="divide-y divide-[var(--c-bone-line)]">
            {FAQS.map((f, i) => {
              const isOpen = open === i
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-200 hover:bg-[var(--c-bone-2)] sm:px-8"
                  >
                    <span
                      className={`c-display text-[0.98rem] transition-colors duration-200 ${
                        isOpen ? "text-[var(--c-violet-deep)]" : "text-[var(--c-ink)]"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className={`relative flex h-7 w-7 flex-none items-center justify-center border transition-colors duration-300 ${
                        isOpen ? "border-[var(--c-violet-deep)] bg-[var(--c-violet-deep)]" : "border-[var(--c-bone-line)]"
                      }`}
                    >
                      <span
                        className={`absolute h-px w-3 transition-colors duration-300 ${isOpen ? "bg-white" : "bg-[var(--c-ink)]"}`}
                      />
                      <span
                        className={`absolute h-3 w-px transition-all duration-300 ${
                          isOpen ? "rotate-90 bg-white opacity-0" : "bg-[var(--c-ink)]"
                        }`}
                      />
                    </span>
                  </button>

                  <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pr-14 text-[0.9rem] leading-relaxed text-[var(--c-ink-dim)] sm:px-8">{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
