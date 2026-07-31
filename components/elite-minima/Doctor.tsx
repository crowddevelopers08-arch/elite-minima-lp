"use client"

import { User, ArrowRight } from "lucide-react"
import Reveal from "./Reveal"
import TitleUnderline from "./TitleUnderline"
import { track } from "./track"
import { ADDRESS_SHORT } from "./config"

const EXPERTISE = ["Piles Treatment", "Laser Piles Treatment", "Fissure Treatment", "Fistula Treatment", "Minimally Invasive Procedures"]

export default function Doctor() {
  return (
    <section id="doctor" className="border-b border-[var(--e-line)] bg-[var(--e-canvas)] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-5 sm:px-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        {/* portrait placeholder */}
        <Reveal className="mx-auto w-full max-w-[360px] lg:mx-0">
          <div className="dot-tex relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-[var(--e-line)] bg-white">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-28 w-28 items-center justify-center rounded-full bg-[var(--e-green-soft)] text-[var(--e-green-deep)]">
                <User className="h-14 w-14" />
              </span>
            </div>
          </div>
        </Reveal>

        {/* details */}
        <Reveal index={1} className="min-w-0">
          <p className="kicker">Meet Your Specialist</p>
          <h2 className="mt-4">Expert Care for Piles &amp; Proctology Conditions</h2>
          <TitleUnderline className="mt-3" />
          <p className="mt-4 max-w-[60ch] text-[0.98rem] leading-relaxed text-[var(--e-muted)]">
            At Elite Minima – The Surgical Speciality Clinic, our specialists provide personalized evaluation and advanced treatment for piles,
            fissures, fistulas and other proctology conditions, with both non-surgical and minimally invasive treatment options.
          </p>

          <div className="mt-7 rounded-[20px] border border-[var(--e-line)] bg-white p-6">
            <h3 className="text-[1.15rem] text-[var(--e-ink)]">Dr. [Doctor Name]</h3>
            <p className="mt-1 text-[0.9rem] font-semibold text-[var(--e-green-deep)]">[Qualification] | Consultant Surgeon &amp; Proctology Specialist</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {EXPERTISE.map((e) => (
                <span
                  key={e}
                  className="inline-flex items-center rounded-full border border-[var(--e-line)] bg-[var(--e-canvas)] px-3 py-1.5 text-[0.78rem] font-medium text-[var(--e-ink-soft)]"
                >
                  {e}
                </span>
              ))}
            </div>

            <a
              href="#book"
              onClick={() => track("book_click", { branch: "Elite Minima Clinic", section: "doctor" })}
              className="btn btn-primary group/btn mt-6"
            >
              Book a Consultation with the Doctor
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
          </div>

          <p className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.85rem] font-medium text-[var(--e-muted)]">
            <span>Personalized Care</span>
            <span className="text-[var(--e-green)]">•</span>
            <span>Advanced Treatment</span>
            <span className="text-[var(--e-green)]">•</span>
            <span>{ADDRESS_SHORT}</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
