"use client"

import { Clock, MapPin, Phone } from "lucide-react"
import { track } from "../track"
import { ADDRESS_SHORT, PHONES } from "../config"
import { CONSULT_WINDOW, GYN_BRANCH } from "./content"

/**
 * Utility strip above the header.
 *
 * Static, not a marquee. Both other pages open with a scrolling claims ticker;
 * this one opens with the three facts a visitor actually needs before they
 * decide to call — where, when, and on what number — set on one hairline row.
 */
export default function GynTopStrip() {
  return (
    <div className="relative z-50 border-b border-[var(--g-line)] bg-[var(--g-base)]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-center gap-x-6 gap-y-1 px-5 py-2 text-[0.7rem] tracking-[0.08em] text-[var(--g-dim)] sm:px-8 lg:justify-between">
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-[var(--g-accent)]" aria-hidden />
          {ADDRESS_SHORT}
        </span>

        <span className="hidden items-center gap-2 sm:inline-flex">
          <Clock className="h-3.5 w-3.5 text-[var(--g-accent)]" aria-hidden />
          Consultations {CONSULT_WINDOW} · By appointment
        </span>

        <span className="inline-flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 text-[var(--g-accent)]" aria-hidden />
          {PHONES.map((p, i) => (
            <span key={p.tel} className="inline-flex items-center gap-2">
              {i > 0 && <span aria-hidden className="text-[var(--g-line-strong)]">/</span>}
              <a
                href={`tel:${p.tel}`}
                onClick={() => track("call_click", { branch: GYN_BRANCH, section: "top-strip" })}
                className="font-semibold text-[var(--g-text)] transition-colors hover:text-[var(--g-accent)]"
              >
                {p.display}
              </a>
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
