"use client"

import { useEffect, useRef, useState } from "react"
import { track } from "./track"
import { BRANCH, PHONE_DISPLAY, PHONE_TEL } from "./config"

const LEAD_ENDPOINT = "/api/leads"

const CONCERNS = ["Bleeding", "Pain", "Swelling or Lump", "Itching", "Other"]
const CALL_TIMES = ["9 AM - 12 PM", "12 PM - 3 PM", "3 PM - 6 PM"]

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const q = new URLSearchParams(window.location.search)
    ;["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"].forEach((k) => {
      const el = form.querySelector<HTMLInputElement>(`[name="${k}"]`)
      if (el) el.value = q.get(k) || ""
    })

    const pageUrl = form.querySelector<HTMLInputElement>('[name="page_url"]')
    if (pageUrl) pageUrl.value = window.location.href
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setSubmitting(true)
    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>

    const payload = {
      name: raw.name,
      phone: raw.phone,
      email: raw.email,
      area: raw.concern,
      callTime: raw.callTime,
      branch: raw.branch || BRANCH,
      source: raw.utm_source || "direct",
      medium: raw.utm_medium || "",
      campaign: raw.utm_campaign || "",
      pageUrl: raw.page_url || (typeof window !== "undefined" ? window.location.href : ""),
    }

    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Request failed with ${res.status}`)

      track("lead_submit", { branch: BRANCH, concern: raw.concern })
      setDone(true)
      window.location.href = "/thank-you"
    } catch {
      setSubmitting(false)
      alert(`That did not go through. Please call ${PHONE_DISPLAY} instead.`)
    }
  }

  return (
    <div className={`rounded-[24px] border border-[var(--e-line)] bg-white ${compact ? "p-4 sm:p-5" : "p-5 sm:p-6"} shadow-[0_30px_60px_-36px_rgba(14,22,38,0.28)]`}>
      {!done ? (
        <form ref={formRef} onSubmit={onSubmit} noValidate>
          <h3 className="text-[1.05rem] font-bold text-[var(--e-ink)]">Book a Consultation</h3>
          <p className="mt-1 text-[0.85rem] text-[var(--e-muted)]">Share 5 quick details and our team will call you back to confirm.</p>

          <div className="mt-4 space-y-3">
            <Field label="Name" htmlFor="lf-name">
              <input id="lf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputCls} />
            </Field>

            <Field label="Phone Number" htmlFor="lf-phone">
              <input
                id="lf-phone"
                name="phone"
                type="tel"
                required
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                className={inputCls}
              />
            </Field>

            <Field label="Email" htmlFor="lf-email">
              <input
                id="lf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={inputCls}
              />
            </Field>

            <Field label="Concern" htmlFor="lf-concern">
              <select id="lf-concern" name="concern" required defaultValue="" className={inputCls}>
                <option value="" disabled>
                  Select your concern
                </option>
                {CONCERNS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>

            <Field label="Preferred Call Time" htmlFor="lf-calltime">
              <select id="lf-calltime" name="callTime" required defaultValue="" className={inputCls}>
                <option value="" disabled>
                  Select a time window
                </option>
                {CALL_TIMES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>

          <input type="hidden" name="utm_source" />
          <input type="hidden" name="utm_medium" />
          <input type="hidden" name="utm_campaign" />
          <input type="hidden" name="utm_content" />
          <input type="hidden" name="utm_term" />
          <input type="hidden" name="fbclid" />
          <input type="hidden" name="gclid" />
          <input type="hidden" name="branch" defaultValue={BRANCH} />
          <input type="hidden" name="page_url" />

          {/* .elite .btn sets 14px block padding and outranks a py-* utility,
              so the trimmed height is applied inline */}
          <button
            type="submit"
            disabled={submitting}
            style={{ paddingTop: 13, paddingBottom: 13 }}
            className="btn btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Booking..." : "Book Your Consultation"}
          </button>

          <p className="mt-2.5 text-center text-[0.75rem] leading-relaxed text-[var(--e-muted)]">
            Or call{" "}
            <a href={`tel:${PHONE_TEL}`} onClick={() => track("call_click", { branch: BRANCH })} className="font-semibold text-[var(--e-green-deep)]">
              {PHONE_DISPLAY}
            </a>
          </p>
        </form>
      ) : (
        <div className="px-2 py-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--e-green-soft)] text-[1.6rem] text-[var(--e-green-deep)]">
            ✓
          </div>
          <h3 className="mb-2 text-[1.1rem] font-bold text-[var(--e-ink)]">Booked. We&apos;ll call you shortly.</h3>
          <p className="text-[0.9rem] text-[var(--e-muted)]">Our team will reach you on the number you shared to confirm your slot.</p>
        </div>
      )}
    </div>
  )
}

const inputCls =
  "w-full rounded-xl border border-[var(--e-line)] bg-[var(--e-canvas)] px-4 py-2.5 text-[0.95rem] text-[var(--e-ink)] transition-all duration-150 focus:border-[var(--e-green)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--e-green-soft)]"

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[var(--e-muted)]">
        {label}
      </label>
      {children}
    </div>
  )
}
