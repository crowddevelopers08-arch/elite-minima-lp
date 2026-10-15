import { Bandage, CalendarCheck, Clock, Stethoscope, Syringe } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Reveal } from "../motion"
import { Eyebrow, SECTION_Y, SHELL } from "./ui"
import { PROCEDURE, PROCEDURE_TITLE } from "./content"

const STAGE_ICONS: Record<string, LucideIcon> = {
  Consultation: Stethoscope,
  Surgery: Syringe,
  Aftercare: Bandage,
  "Follow-Up": CalendarCheck,
  "Recovery Time": Clock,
}

export default function CircProcedure() {
  return (
    <section
      id="procedure"
      aria-labelledby="procedure-heading"
      className={`bg-[var(--c-bone)] text-[var(--c-ink)] ${SECTION_Y}`}
    >
      <div className={`${SHELL} grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16`}>
        <Reveal className="max-w-[54ch] lg:pt-5">
          <Eyebrow n="03" tone="ink">
            Procedure &amp; Recovery
          </Eyebrow>
          <h2 id="procedure-heading" className="mt-5 lg:max-w-[18ch]">{PROCEDURE_TITLE}</h2>
          <p className="mt-5 max-w-[38ch] text-[0.95rem] leading-relaxed text-[var(--c-ink-dim)]">
            Know what to expect, from your first consultation to follow-up care.
          </p>
          <div aria-hidden="true" className="mt-8 flex items-center gap-3 text-[var(--c-violet-deep)]">
            <span className="h-1 w-10 bg-current" />
            <span className="h-px w-20 bg-current opacity-25" />
          </div>
        </Reveal>

        <ol className="m-0 list-none overflow-hidden border border-[var(--c-bone-line)] bg-[var(--c-base)] p-0">
          {PROCEDURE.map((stage, index) => {
            const Icon = STAGE_ICONS[stage.title] ?? Stethoscope
            const isRecovery = stage.title === "Recovery Time"

            return (
              <li
                key={stage.n}
                className={`relative flex gap-4 p-5 sm:gap-5 sm:p-6 ${
                  isRecovery
                    ? "bg-[var(--c-violet-deep)] text-white"
                    : "border-b border-[var(--c-bone-line)]"
                }`}
              >
                {!isRecovery && index < PROCEDURE.length - 2 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-[43px] top-[68px] w-px bg-[var(--c-bone-line)] sm:left-[47px] sm:top-[72px]"
                  />
                )}
                <span
                  className={`relative z-10 flex h-12 w-12 flex-none items-center justify-center border ${
                    isRecovery
                      ? "border-white/25 bg-white/10 text-white"
                      : "border-[var(--c-bone-line)] bg-[var(--c-bone)] text-[var(--c-violet-deep)]"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1 py-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <h3>{stage.title}</h3>
                    <span
                      aria-hidden="true"
                      className={`pt-0.5 text-[0.7rem] font-bold tabular-nums tracking-[0.12em] ${
                        isRecovery ? "text-white/60" : "text-[var(--c-violet-deep)]"
                      }`}
                    >
                      {stage.n}
                    </span>
                  </div>
                  <p className={`mt-2 max-w-[48ch] text-[0.875rem] leading-relaxed ${isRecovery ? "text-white/85" : "text-[var(--c-ink-dim)]"}`}>
                    {stage.desc}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
