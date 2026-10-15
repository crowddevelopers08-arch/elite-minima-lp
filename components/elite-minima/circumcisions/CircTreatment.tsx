"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal } from "../motion"
import { track } from "../track"
import { CornerTicks, Eyebrow, SECTION_Y, SHELL, Tick } from "./ui"
import {
  CIRCUMCISION_BRANCH,
  JOURNEY,
  JOURNEY_LEAD,
  JOURNEY_TITLE,
  OPTIONS,
  OPTIONS_CTA,
  OPTIONS_TITLE,
} from "./content"

/**
 * Section 03 — treatment journey, then the two options.
 *
 * One section rather than two, per the deck: the stages and the techniques
 * answer the same question ("what will actually happen to me"), and splitting
 * them across two banded sections made the reader cross a boundary
 * mid-thought. They are two blocks on one ink ground, separated by a rule.
 *
 * The section carries a single id, `#treatment`, which is what the header nav
 * and the footer's "Services" link both point at.
 */
export default function CircTreatment() {
  return (
    <section id="treatment" className={`relative overflow-hidden bg-[var(--c-base)] ${SECTION_Y}`}>
      <div
        aria-hidden
        className="c-tex pointer-events-none absolute inset-0 opacity-50"
        style={{
          maskImage: "radial-gradient(75% 55% at 50% 0%,#000,transparent)",
          WebkitMaskImage: "radial-gradient(75% 55% at 50% 0%,#000,transparent)",
        }}
      />
      <div className={`${SHELL} relative`}>
        <Journey />
        <Options />
      </div>
    </section>
  )
}

/**
 * The six conditions, laid out along a horizontal rail.
 *
 * Borrowed from the gynecomastia journey and then given its descriptions back:
 * that page prints headings only, and this deck writes a sentence for each
 * entry that is the substance of the section. No scroll-linked animation: the
 * rail sits fully drawn rather than filling as the block is read, and each
 * cell is simply there rather than rising into place — same layout, just
 * static. Dropped below lg where the row is no longer a row.
 */
function Journey() {
  return (
    <>
      <Reveal className="max-w-[62ch]">
        <Eyebrow n="02">What We Treat</Eyebrow>
        <h2 className="mt-5">{JOURNEY_TITLE}</h2>
        <p className="mt-5 text-[0.98rem] leading-relaxed text-[var(--c-dim)]">{JOURNEY_LEAD}</p>
      </Reveal>

      {/* The rail. Desktop only: it reads left → right, which is only true
          once the stages are actually in a row. Drawn fully filled — there is
          no scroll-tied fill animation here any more. */}
      <div className="relative mt-12 hidden h-px w-full bg-[var(--c-line)] lg:block" aria-hidden>
        <span className="absolute inset-y-0 left-0 block w-full bg-[var(--c-violet)]" />
      </div>

      <div className="mt-10 grid gap-px border-t border-[var(--c-line)] bg-[var(--c-line)] sm:grid-cols-2 lg:mt-0 lg:grid-cols-6 lg:border-t-0">
        {JOURNEY.map((s) => (
          <StepCell key={s.n} step={s} />
        ))}
      </div>
    </>
  )
}

function StepCell({ step }: { step: (typeof JOURNEY)[number] }) {
  /* Six cells in a two-up fill evenly (3 full rows) — no gap there. At lg
     there are now six columns, exactly matching the six cells, so all of them
     sit in one row and nothing is left over. */
  return (
    <div className="group relative flex flex-col bg-[var(--c-base)] p-6 transition-colors duration-300 hover:bg-[var(--c-surface)] sm:p-7">
      {/* The node that meets the rail above. */}
      <span aria-hidden className="absolute -top-[3px] left-6 hidden h-1.5 w-1.5 bg-[var(--c-violet)] sm:left-7 lg:block" />

      <p className="c-numeral text-[2.6rem] transition-colors duration-300 group-hover:[-webkit-text-stroke-color:var(--c-violet)]">
        {step.n}
      </p>
      {/* min-h holds three lines at this heading's largest size, so every
          description starts on the same baseline whether its own title wraps
          to one line or three — "Phimosis (Tight Foreskin)" and "Children"
          would otherwise stagger within a row. From `sm:` up cells sit two or
          six to a row, where that matters; below `sm` each cell is alone in
          its own single column, so there is no row-mate to align against —
          the same min-height there just left a block of empty space under a
          short one-line title. */}
      <h3 className="mt-5 text-[var(--c-text)] sm:min-h-[4.5rem]">{step.title}</h3>
      <p className="mt-3 text-[0.85rem] leading-relaxed text-[var(--c-dim)]">{step.desc}</p>
    </div>
  )
}

/**
 * Stapler and Laser, side by side.
 *
 * Two equal cards, not a tab strip or an accordion: with exactly two options,
 * hiding one behind a control is worse than showing both — the question here
 * is what the difference is, and a comparison has to be readable in one look.
 * (The gynecomastia page uses a list-and-panel because it has four.)
 *
 * The cards are flex columns whose tick lists carry the bottom margin, so the
 * two CTAs land on one line however unevenly the lists run.
 */
function Options() {
  return (
    <div className="mt-8 border-t border-[var(--c-line)] pt-8 sm:mt-20 sm:pt-16">
      <Reveal>
        <Eyebrow n="02">Options</Eyebrow>
        <h2 className="mt-5">{OPTIONS_TITLE}</h2>
      </Reveal>

      {/* One row rather than a grid, now that there are three cards instead of
          the original two — a 2-column grid would wrap the third card onto a
          lonely line of its own. Cards sit still by default; the row only
          scrolls if a narrow viewport can't fit all three, and only on the
          reader's own swipe/drag — nothing moves on its own. */}
      <div className="mt-10 flex gap-4 overflow-x-auto pb-1">
        {OPTIONS.map((o, i) => (
          <article
            key={o.id}
            className="flex h-full w-[82vw] max-w-[380px] shrink-0 flex-col border border-[var(--c-line)] bg-[var(--c-base)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[var(--c-raised)]">
              <Image src={o.img} alt={o.alt} fill sizes="(min-width: 1024px) 380px, 82vw" className="object-cover object-center" />
              <span aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,24,50,0.05),rgba(28,24,50,0.55))]" />
              <span className="c-numeral c-numeral--on absolute bottom-4 left-5 text-[2.2rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <CornerTicks />
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-[1.15rem] text-[var(--c-text)] sm:text-[1.3rem]">{o.name}</h3>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-[var(--c-dim)]">{o.desc}</p>

              <ul className="mb-8 mt-6 grid gap-x-8 gap-y-1 border-t border-[var(--c-line)] pt-2">
                {o.points.map((p) => (
                  <Tick key={p}>{p}</Tick>
                ))}
              </ul>

              <a
                href="#book"
                onClick={() => track("book_click", { branch: CIRCUMCISION_BRANCH, section: "options", option: o.name })}
                className="c-btn c-btn-line group/btn mt-auto w-full self-start"
              >
                Ask about {o.name}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* The deck's "Not Sure Which Treatment You Need?" block. A bone strip on
          the ink ground — the one light object in this section, which is what
          makes it read as the answer to the two cards above it. */}
      <Reveal className="mt-px flex flex-col gap-6 border-l-2 border-[var(--c-violet-deep)] bg-[var(--c-bone)] p-7 text-[var(--c-ink)] sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div className="min-w-0">
          <h3 className="text-[1.1rem]">{OPTIONS_CTA.title}</h3>
          <p className="mt-3 max-w-[62ch] text-[0.9rem] leading-relaxed text-[var(--c-ink-dim)]">{OPTIONS_CTA.body}</p>
        </div>
        <a
          href="#book"
          onClick={() => track("book_click", { branch: CIRCUMCISION_BRANCH, section: "options_cta" })}
          className="c-btn c-btn-ink group/btn w-full flex-none sm:w-auto"
        >
          {OPTIONS_CTA.button}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden />
        </a>
      </Reveal>
    </div>
  )
}
