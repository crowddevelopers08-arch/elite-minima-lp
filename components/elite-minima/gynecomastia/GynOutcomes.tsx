"use client"

import { ArrowRight, Check } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "../motion"
import { track } from "../track"
import { ANSWERS, GYN_BRANCH, IMPROVEMENTS, RECOVERY_MARKS } from "./content"

/**
 * What the surgery changes, and the two questions everyone asks before they
 * book: the scars, and how long they will be out of the gym.
 *
 * Both answers are prose in the brief; the recovery one is also drawn as a
 * scale underneath, because "1–2 weeks / 4–6 weeks" is a shape, and a reader
 * comparing it against their own calendar takes it in faster as one.
 */
export default function GynOutcomes() {
  return (
    <section className="relative overflow-hidden bg-[var(--g-base)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full opacity-30 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(81,62,152,0.4), transparent 70%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1320px] gap-10 px-5 py-10 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* ── Improvements ─────────────────────────────────────────────── */}
        <div className="min-w-0">
          <Reveal>
            <p className="g-eyebrow">Outcomes</p>
            <h2 className="mt-5 max-w-[18ch]">What Can Gynecomastia Surgery Improve?</h2>
          </Reveal>

          <Stagger gap={0.06} className="mt-9">
            {IMPROVEMENTS.map((im) => (
              <StaggerItem key={im}>
                <div className="group flex items-center gap-4 border-b border-[var(--g-line)] py-4 transition-colors duration-300 hover:border-[var(--g-accent)]">
                  <span className="flex h-6 w-6 flex-none items-center justify-center border border-[var(--g-line-strong)] text-[var(--g-accent)] transition-colors duration-300 group-hover:border-[var(--g-accent)] group-hover:bg-[var(--g-accent)] group-hover:text-[#04140a]">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                  </span>
                  <p className="text-[0.95rem] text-[var(--g-text)]">{im}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* ── Scars + recovery ─────────────────────────────────────────── */}
        <div className="min-w-0 lg:pt-[4.5rem]">
          <div className="space-y-px bg-[var(--g-line)]">
            {ANSWERS.map((a) => (
              <Reveal key={a.q}>
                <div className="bg-[var(--g-surface)] p-7 sm:p-8">
                  <h3 className="text-[var(--g-text)]">{a.q}</h3>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-[var(--g-dim)]">{a.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Recovery, as a scale. */}
          <Reveal delay={0.08} className="mt-8 border border-[var(--g-line)] p-7 sm:p-8">
            <p className="text-[0.64rem] font-bold uppercase tracking-[0.24em] text-[var(--g-dim)]">Typical recovery scale</p>

            <ol className="mt-6">
              {RECOVERY_MARKS.map((m, i) => (
                <li key={m.when} className="relative flex gap-5 pb-6 last:pb-0">
                  {/* connector between marks */}
                  {i < RECOVERY_MARKS.length - 1 && (
                    <span aria-hidden className="absolute bottom-0 left-[5px] top-4 w-px bg-[var(--g-line-strong)]" />
                  )}
                  <span aria-hidden className="relative mt-1.5 h-[11px] w-[11px] flex-none border border-[var(--g-accent)] bg-[var(--g-base)]" />
                  <div className="min-w-0">
                    <p className="g-display text-[1rem] leading-none text-[var(--g-accent)]">{m.when}</p>
                    <p className="mt-1.5 text-[0.86rem] leading-snug text-[var(--g-dim)]">{m.what}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-2 border-t border-[var(--g-line)] pt-5 text-[0.78rem] leading-relaxed text-[var(--g-dim)]">
              Timelines are indicative. Your surgeon sets the schedule that applies to your procedure.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="#book"
              onClick={() => track("book_click", { branch: GYN_BRANCH, section: "outcomes" })}
              className="g-btn g-btn-solid group/btn mt-8 w-full sm:w-auto"
            >
              Check your treatment options
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
