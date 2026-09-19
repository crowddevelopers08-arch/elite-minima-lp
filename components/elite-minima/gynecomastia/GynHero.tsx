"use client"

import Image from "next/image"
import { Timer, Users, Star, UserRound, CalendarClock, ShieldCheck, Check, Phone, ArrowRight, ChevronRight } from "lucide-react"

/**
 * Gynecomastia Surgery clinic banner — responsive replica.
 *
 * TWO LAYOUTS, one component:
 *
 * 1. lg and up (>=1024px) — exact pixel-mapped replica. Reference art is
 *    1893 x 722px; every element is positioned from that coordinate space
 *    (left% = x/1893, top% = y/722). Type uses `cqw` (1cqw = 1% of the
 *    banner's own width) wrapped in clamp() so it stays readable on a
 *    small laptop and stops growing on an ultrawide.
 *
 * 2. below lg — the absolute composition would crush the copy, so it's
 *    replaced by a stacked flow layout: headline, stats, trust row,
 *    buttons, then the before/after pair. Same content, same colors.
 *
 * Traced measurements (used by the lg+ layout):
 *   left column margin .... x = 202
 *   eyebrow cap top ....... y = 80
 *   headline cap tops ..... y = 114 / 183   (69px line spacing)
 *   subtitle cap top ...... y = 252
 *   stat circles .......... 80px dia at x = 245 / 481 / 720, y = 304
 *   stat dividers ......... x = 400 / 640, y 310 -> 450
 *   stat numbers .......... y = 400   labels y = 437
 *   trust row ............. y = 501 -> 547
 *   primary button ........ 202,585 -> 584,677   (382 x 92, pill)
 *   outline button ........ 604,585 -> 935,677   (331 x 92, pill)
 *   before photo panel .... 946,75  -> 1303,590  (357 x 515, r24)
 *   after photo panel ..... 1311,115 -> 1666,630 (355 x 515, r24)
 *   arrow circle .......... center (1307, 357), 70px dia
 *   before pill ........... 1068,418  after pill 1442,416
 *   white benefits card ... 1444,487 -> 1760,656 (316 x 169, r20)
 *   script tagline ........ ~1530,20 -> 1720,100
 *
 * IMAGES YOU SUPPLY (put in /public):
 *   /before.jpg  - the "before" clinical photo
 *   /after.jpg   - the "after" clinical photo
 */

const GREEN = "#02734B"
const NAVY = "#0F2C5C"
const TEAL = "#0C4A45"
const PURPLE = "#6A6C99"
const BG = "#F8FCFA"

const stats = [
  { icon: Timer, value: "60 Minutes", label: "PROCEDURE" },
  { icon: Users, value: "4,000+", label: "SURGERIES\nPERFORMED" },
  { icon: Star, value: "12+", label: "YEARS OF\nEXPERIENCE" },
]

const trust = [
  { icon: UserRound, label: "Evaluated by\nDr. Madan K" },
  { icon: CalendarClock, label: "Callbacks within\nclinic hours" },
  { icon: ShieldCheck, label: "Private\nconsultation" },
]

const benefits = ["Minimal Scars", "Quick Recovery", "Improved Confidence"]

const PHONE = "+91 95000 91428"

/* Soft mint blobs that sit behind everything. */
function Blobs() {
  return (
    <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -left-[6%] -top-[30%] aspect-square w-[22%] rounded-full bg-[#EAF5F0]" />
      <div className="absolute -left-[3%] top-[55%] aspect-square w-[16%] rounded-full bg-[#EAF5F0]" />
      <div className="absolute right-[8%] -top-[18%] aspect-square w-[18%] rounded-full bg-[#EFF7F3]" />
      <div className="absolute -right-[4%] top-[40%] aspect-square w-[20%] rounded-full bg-[#EAF5F0]" />
    </div>
  )
}

/* Hand-script tagline + swoosh, shared by both layouts. */
function ScriptTag({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      <p
        className="whitespace-nowrap font-serif italic leading-[1.3] tracking-tight"
        style={{ color: NAVY, fontSize: "inherit" }}
      >
        Flatter Chest
        <br />
        Greater Confidence
      </p>
      <svg viewBox="0 0 200 20" className="mt-1 w-full" fill="none" aria-hidden>
        <path d="M2,16 C60,18 150,12 198,2" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default function GynecomastiaBanner() {
  return (
    <section className="w-full" style={{ backgroundColor: BG }}>
      {/* ================================================================
          MOBILE / TABLET (< 1024px) — stacked flow layout
      ================================================================= */}
      <div className="relative isolate overflow-hidden px-5 py-10 lg:hidden">
        <Blobs />

        <div className="relative z-10 mx-auto max-w-[640px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: PURPLE }}>
            Get a more <span style={{ color: NAVY }}>Confident You</span>
          </p>

          <div className="mt-3 text-[30px] font-extrabold leading-[1.15] tracking-[-0.015em] sm:text-[40px]">
            <span style={{ color: GREEN }}>Gynecomastia Surgery</span>
            <br />
            <span style={{ color: NAVY }}>at Lowest Cost in Chennai</span>
          </div>

          <p className="mt-3 text-[18px] font-medium sm:text-[22px]" style={{ color: PURPLE }}>
            Safe. Effective. Natural Looking Results.
          </p>

          {/* before / after — comes right after the label/heading/subheading
              on mobile, ahead of stats/trust/benefits/buttons. */}
          <div className="relative mt-8">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-[357/515] overflow-hidden rounded-2xl bg-[#DCE6E3]">
                <Image src="/banner-fats.jpg" alt="Patient chest before gynecomastia surgery" fill className="object-cover" />
              </div>
              <div className="relative aspect-[357/515] overflow-hidden rounded-2xl bg-[#DCE6E3]">
                <Image src="/banner-fits.jpg" alt="Patient chest after gynecomastia surgery" fill className="object-cover" />
              </div>
            </div>

            <span className="absolute left-1/2 top-1/2 flex h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
              <ChevronRight className="h-[22px] w-[22px]" style={{ color: GREEN }} strokeWidth={3} />
            </span>
          </div>

          {/* stats */}
          <div className="mt-8 grid grid-cols-3 gap-2">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center text-center ${i > 0 ? "border-l border-[#D8E4E0]" : ""}`}
              >
                <span
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full sm:h-[64px] sm:w-[64px]"
                  style={{ backgroundColor: TEAL }}
                >
                  <s.icon className="h-[24px] w-[24px] text-white sm:h-[30px] sm:w-[30px]" strokeWidth={2} />
                </span>
                <span className="mt-2 text-[17px] font-bold sm:text-[22px]" style={{ color: GREEN }}>
                  {s.value}
                </span>
                <span
                  className="mt-1 whitespace-pre-line text-[9px] font-bold uppercase leading-tight tracking-[0.12em] sm:text-[11px]"
                  style={{ color: NAVY }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* trust row — first two side by side, the third centred on its own
              row below, on mobile only (grid-cols-3 takes back over at sm). */}
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {trust.map((t, i) => (
              <div
                key={t.label}
                className={`flex items-center gap-2.5 ${
                  i === trust.length - 1 ? "col-span-2 justify-center sm:col-span-1 sm:justify-start" : ""
                }`}
              >
                <t.icon className="h-[26px] w-[26px] shrink-0" style={{ color: GREEN }} strokeWidth={1.8} />
                <span className="whitespace-pre-line text-[14px] leading-tight" style={{ color: NAVY }}>
                  {t.label}
                </span>
              </div>
            ))}
          </div>

          {/* benefits card */}
          <div className="mt-6 rounded-2xl bg-white p-5 shadow-lg">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 py-1.5">
                <span
                  className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: TEAL }}
                >
                  <Check className="h-[13px] w-[13px] text-white" strokeWidth={3.5} />
                </span>
                <span className="text-[16px]" style={{ color: NAVY }}>
                  {b}
                </span>
              </div>
            ))}
          </div>

          {/* buttons — moved to the end on mobile so the persuasion (stats,
              before/after, benefits) reads before the ask. */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-md px-8 py-4 text-[16px] font-medium text-white transition hover:brightness-110"
              style={{ backgroundColor: "var(--chart-1)" }}
            >
              Book Your Consultation
              <ArrowRight className="h-[18px] w-[18px]" />
            </button>

            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 rounded-md border-2 bg-white px-7 py-3"
              style={{ borderColor: GREEN }}
            >
              <Phone className="h-[22px] w-[22px] shrink-0" style={{ color: GREEN }} fill={GREEN} strokeWidth={0} />
              <span className="leading-tight">
                <span className="block text-[18px] font-bold" style={{ color: GREEN }}>
                  {PHONE}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ================================================================
          DESKTOP (>= 1024px) — exact pixel-mapped replica
      ================================================================= */}
      <div
        className="relative isolate mx-auto hidden aspect-[1893/722] w-full max-w-[1893px] overflow-hidden lg:block min-[1600px]:min-h-svh"
        style={{ containerType: "inline-size" }}
      >
        <Blobs />

        {/* ---------- eyebrow ---------- */}
        <p
          className="absolute z-10 font-bold uppercase"
          style={{
            left: "10.67%",
            top: "10.25%",
            fontSize: "clamp(11px, 0.9cqw, 20px)",
            letterSpacing: "0.18em",
            color: PURPLE,
          }}
        >
          Get a more <span style={{ color: NAVY }}>Confident You</span>
        </p>

        {/* ---------- headline (plain divs + inline color so global h1/h2 styles can't override) ---------- */}
        <div
          className="absolute z-10 font-extrabold"
          style={{
            left: "10.67%",
            top: "14.13%",
            fontSize: "min(2.85cqw, 62px)",
            lineHeight: 1.21,
            letterSpacing: "-0.015em",
            color: GREEN,
            whiteSpace: "nowrap",
          }}
        >
          Gynecomastia Surgery
        </div>
        <div
          className="absolute z-10 font-extrabold"
          style={{
            left: "10.67%",
            top: "23.68%",
            fontSize: "min(2.85cqw, 62px)",
            lineHeight: 1.21,
            letterSpacing: "-0.015em",
            color: NAVY,
            whiteSpace: "nowrap",
          }}
        >
          at Lowest Cost in Chennai
        </div>

        {/* ---------- subtitle ---------- */}
        <p
          className="absolute z-10 font-medium"
          style={{
            left: "10.67%",
            top: "33.93%",
            fontSize: "min(1.8cqw, 40px)",
            color: PURPLE,
            whiteSpace: "nowrap",
          }}
        >
          Safe. Effective. Natural Looking Results.
        </p>

        {/* ---------- stat dividers (x = 400 / 640) ---------- */}
        {[21.13, 33.81].map((l) => (
          <span
            key={l}
            aria-hidden
            className="absolute z-[5] w-px bg-[#D3DFDB]"
            style={{ left: `${l}%`, top: "42.94%", height: "19.39%" }}
          />
        ))}

        {/* ---------- stats (circles 80px @ x 245/481/720, y 304) ---------- */}
        {stats.map((s, i) => {
          const circleLeft = [12.94, 25.41, 38.03][i]
          const centerLeft = [15.05, 27.52, 40.15][i]
          return (
            <div key={s.label} className="absolute inset-0 z-10">
              <span
                className="absolute flex aspect-square items-center justify-center rounded-full"
                style={{ left: `${circleLeft}cqw`, top: "42.11%", width: "4.23cqw", backgroundColor: TEAL }}
              >
                <s.icon className="text-white" style={{ width: "52%", height: "52%" }} strokeWidth={2} />
              </span>

              <span
                className="absolute -translate-x-1/2 whitespace-nowrap font-bold"
                style={{
                  left: `${centerLeft}cqw`,
                  top: "54.02%",
                  fontSize: "min(1.75cqw, 38px)",
                  color: GREEN,
                }}
              >
                {s.value}
              </span>

              <span
                className="absolute -translate-x-1/2 whitespace-pre-line text-center font-bold uppercase"
                style={{
                  left: `${centerLeft}cqw`,
                  top: "59.97%",
                  fontSize: "min(0.8cqw, 17px)",
                  lineHeight: 1.55,
                  letterSpacing: "0.14em",
                  color: NAVY,
                }}
              >
                {s.label}
              </span>
            </div>
          )
        })}

        {/* ---------- trust row (y = 501) ---------- */}
        {trust.map((t, i) => (
          <div
            key={t.label}
            className="absolute z-10 flex items-center"
            style={{ left: `${[10.67, 22.72, 35.92][i]}%`, top: "69.39%", gap: "0.65cqw" }}
          >
            <t.icon
              className="shrink-0"
              style={{ width: "1.9cqw", height: "1.9cqw", color: GREEN }}
              strokeWidth={1.8}
            />
            <span
              className="whitespace-pre-line"
              style={{ fontSize: "min(1.16cqw, 25px)", lineHeight: 1.35, color: NAVY }}
            >
              {t.label}
            </span>
          </div>
        ))}

        {/* ---------- desktop actions ---------- */}
        <div
          className="absolute z-10 flex items-stretch"
          style={{ left: "10.67%", top: "81.02%", width: "38.73%", height: "10.14%", gap: "1.06cqw" }}
        >
          <button
            type="button"
            className="flex min-w-0 flex-[1.15] items-center justify-center whitespace-nowrap rounded-md text-white transition hover:brightness-110"
            style={{ gap: "0.6cqw", fontSize: "1.27cqw", backgroundColor: "var(--chart-1)" }}
          >
            Book Your Consultation
            <ArrowRight className="shrink-0" style={{ width: "1.32cqw", height: "1.32cqw" }} />
          </button>

          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-md bg-white"
            style={{ gap: "0.7cqw", border: `2px solid ${GREEN}` }}
          >
            <Phone
              className="shrink-0"
              style={{ width: "1.7cqw", height: "1.7cqw", color: GREEN }}
              fill={GREEN}
              strokeWidth={0}
            />
            <span className="font-bold leading-tight" style={{ fontSize: "1.38cqw", color: GREEN }}>
              {PHONE}
            </span>
          </a>
        </div>

        {/* ---------- before photo panel (946,75 -> 1303,590) ---------- */}
        <div
          className="absolute z-[5] overflow-hidden bg-[#DCE6E3]"
          style={{ left: "49.97%", top: "10.39%", width: "18.86%", height: "71.33%", borderRadius: "1.27cqw" }}
        >
          <Image src="/banner-fats.jpg" alt="Patient chest before gynecomastia surgery" fill className="object-cover" />
        </div>

        {/* ---------- after photo panel (1311,115 -> 1666,630) ---------- */}
        <div
          className="absolute z-[5] overflow-hidden bg-[#DCE6E3]"
          style={{ left: "69.26%", top: "15.93%", width: "18.75%", height: "71.33%", borderRadius: "1.27cqw" }}
        >
          <Image src="/banner-fits.jpg" alt="Patient chest after gynecomastia surgery" fill className="object-cover" />
        </div>

        {/* ---------- arrow circle (center 1307,357, 70px) ---------- */}
        <span
          className="absolute z-10 flex aspect-square items-center justify-center rounded-full bg-white shadow-md"
          style={{ left: "67.19%", top: "44.6%", width: "3.7%" }}
        >
          <ChevronRight style={{ width: "50%", height: "50%", color: GREEN }} strokeWidth={3} />
        </span>

        {/* ---------- white benefits card (1444,487 -> 1760,656) ---------- */}
        <div
          className="absolute z-10 flex flex-col justify-center bg-white shadow-lg"
          style={{
            left: "76.28%",
            top: "67.45%",
            width: "16.69%",
            height: "23.41%",
            borderRadius: "1.06cqw",
            padding: "0 1.3cqw",
            gap: "0.85cqw",
          }}
        >
          {benefits.map((b) => (
            <div key={b} className="flex items-center" style={{ gap: "0.75cqw" }}>
              <span
                className="flex aspect-square shrink-0 items-center justify-center rounded-full"
                style={{ width: "1.64cqw", backgroundColor: TEAL }}
              >
                <Check className="text-white" style={{ width: "58%", height: "58%" }} strokeWidth={3.5} />
              </span>
              <span style={{ fontSize: "min(1.16cqw, 25px)", color: NAVY }}>{b}</span>
            </div>
          ))}
        </div>

        {/* ---------- script tagline (top right) ---------- */}
        <ScriptTag
          className="absolute z-10"
          style={{ left: "84.5%", top: "2.77%", width: "14%", fontSize: "min(1.45cqw, 31px)" }}
        />
      </div>
    </section>
  )
}
