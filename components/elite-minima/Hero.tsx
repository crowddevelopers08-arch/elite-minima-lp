"use client"

import { ShieldCheck, Stethoscope, Award } from "lucide-react"
import CountUp from "./CountUp"
import TitleUnderline from "./TitleUnderline"
import { HERO_YOUTUBE_EMBED_URL } from "./config"
import LeadForm from "./LeadForm"

const STATS = [
  { icon: Stethoscope, value: 4000, suffix: "+", label: "Surgeries performed" },
  { icon: Award, value: 12, suffix: "+", label: "Years of experience" },
  { icon: ShieldCheck, value: null, label: "Safe & Secure care" },
]

export default function Hero() {
  const hasYoutubeVideo = !HERO_YOUTUBE_EMBED_URL.includes("VIDEO_ID")

  return (
    <section id="top" className="relative overflow-hidden bg-[var(--e-canvas)]">
      <div className="mx-auto grid w-full max-w-[1350px] gap-5 px-5 py-4 sm:px-8 sm:py-5 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-8 lg:py-4">
        <div className="min-w-0 self-center">
          <div className="rise d2">
            <h1 className="text-[clamp(1.8rem,1.15rem+2.4vw,2.9rem)] font-extrabold leading-none tracking-tight text-[var(--e-ink)] lg:whitespace-nowrap">
              Advanced Piles Treatment
            </h1>
            <TitleUnderline className="mt-3" />

            <p className="mt-3 flex max-w-full flex-nowrap items-center gap-x-2 text-[clamp(0.72rem,0.58rem+0.5vw,0.98rem)] leading-relaxed text-[var(--e-muted)] whitespace-nowrap">
              <span>Laser &amp; Minimally Invasive Care</span>
              <span className="text-[var(--e-green)]">•</span>
              <span>Personalized Treatment</span>
              <span className="text-[var(--e-green)]">•</span>
              <span>Specialist Consultation</span>
            </p>
          </div>

          <div className="rise d4 mt-4 overflow-hidden rounded-[24px] border border-[var(--e-line)] bg-[var(--e-ink)] shadow-[0_18px_60px_-30px_rgba(14,22,38,0.42)]">
            <div className="h-[220px] w-full sm:h-[290px] lg:h-[355px]">
              {hasYoutubeVideo ? (
                <iframe
                  className="h-full w-full"
                  src={HERO_YOUTUBE_EMBED_URL}
                  title="Elite Minima Clinic video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="relative flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(81,62,152,0.45),_transparent_54%),linear-gradient(135deg,_rgba(8,56,28,0.98),_rgba(14,22,38,0.96))] px-6 text-center">
                  <div className="dot-tex absolute inset-0 opacity-20" aria-hidden />
                  <div className="relative max-w-[30rem]">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/60">YouTube Video</p>
                    <p className="mt-3 text-[1.25rem] font-semibold leading-snug text-white sm:text-[1.5rem]">
                      Add the clinic&apos;s YouTube embed URL in <code>config.ts</code> to show the hero video here.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="rise d5 mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {STATS.map(({ icon: Icon, value, suffix, label }) => (
              <div key={label} className="card flex items-center gap-3 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--e-green-soft)] text-[var(--e-green-deep)]">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0">
                  {value !== null ? (
                    <p className="text-[1.15rem] font-extrabold leading-none text-[var(--e-ink)] sm:text-[1.3rem]">
                      <CountUp end={value} suffix={suffix} />
                    </p>
                  ) : (
                    <p className="text-[1.05rem] font-extrabold leading-none text-[var(--e-ink)] sm:text-[1.15rem]">Safe &amp; Secure</p>
                  )}
                  <p className="mt-1 text-[0.72rem] leading-tight text-[var(--e-muted)]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="book" className="lg:self-center">
          <LeadForm compact />
        </div>
      </div>
    </section>
  )
}
