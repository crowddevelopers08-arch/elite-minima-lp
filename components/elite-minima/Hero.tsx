"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import TitleUnderline from "./TitleUnderline"
import { HERO_IMAGE } from "./config"
import LeadForm from "./LeadForm"

const HIGHLIGHTS = ["Piles & Proctology Care", "Laser Piles Treatment", "4000+ Surgeries Performed", "12+ Years of Experience"]

/** One pass of the highlight pills. Rendered twice so the marquee loop has no
    visible seam — see .elite .marquee in globals.css. */
function HighlightTrack({ duplicate }: { duplicate?: boolean }) {
  return (
    <ul aria-hidden={duplicate} className={`flex shrink-0 items-stretch gap-3 ${duplicate ? "marquee-dup" : ""}`}>
      {HIGHLIGHTS.map((text) => (
        <li
          key={text}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[var(--e-line)] bg-white px-4 py-2.5 shadow-sm"
        >
          <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--e-green-soft)] text-[var(--e-green-deep)]">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="text-[0.82rem] font-bold text-[var(--e-ink)] sm:text-[0.86rem]">{text}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--e-canvas)]">
      <div className="mx-auto grid w-full max-w-[1350px] gap-5 px-5 py-4 sm:px-8 sm:py-5 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-8 lg:py-4">
        <div className="min-w-0 self-center">
          <div className="rise d2">
            <h1 className="text-[clamp(1.8rem,1.15rem+2.4vw,2.9rem)] font-extrabold leading-none tracking-tight text-[var(--e-ink)] lg:whitespace-nowrap">
              1#Piles Care in Chennai
            </h1>
            <TitleUnderline className="mt-3" />

            <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="text-[clamp(0.95rem,0.8rem+0.4vw,1.15rem)] font-bold text-[var(--e-ink)]">Dr. Lohit Sai K</span>
              <span className="text-[clamp(0.78rem,0.68rem+0.3vw,0.92rem)] text-[var(--e-muted)]">(Invasive &amp; Laparoscopic Surgeon)</span>
            </p>

            <p className="mt-2 max-w-[82ch] text-[clamp(0.78rem,0.68rem+0.3vw,0.95rem)] leading-relaxed text-[var(--e-muted)]">
              Experienced in piles, laser proctology, fissure, fistula and minimally invasive procedures, with treatment planned according to
              each patient&apos;s condition.
            </p>
          </div>

          {/* The frame keeps the video slot's fixed heights so the column stays
              balanced against the booking form. The source is 16:9 and the box is
              wider than that at lg, so object-cover trims top and bottom — the
              model sits centred, which is what survives the crop. */}
          <div className="rise d4 mt-4 overflow-hidden rounded-[24px] border border-[var(--e-line)] bg-[var(--e-line-soft)] shadow-[0_18px_60px_-30px_rgba(14,22,38,0.42)]">
            <div className="relative h-[220px] w-full sm:h-[290px] lg:h-[355px]">
              <Image
                src={HERO_IMAGE}
                alt="A clinician holding an anatomical cross-section model of the anal canal showing hemorrhoids"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* The four highlights drift right → left in one row, forever, rather
              than sitting in a static grid. */}
          <div className="rise d5 mt-3 marquee-rail marquee-fade">
            <div className="marquee py-1 [--marquee-duration:15s]">
              <HighlightTrack />
              <HighlightTrack duplicate />
            </div>
          </div>
        </div>

        <div id="book" className="lg:self-center">
          <LeadForm compact />
        </div>
      </div>
    </section>
  )
}
