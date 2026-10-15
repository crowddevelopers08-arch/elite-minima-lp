"use client"

import { useEffect, useRef, useState } from "react"
import { Lock } from "lucide-react"
import { track } from "../track"
import { CIRCUMCISION_LP_LEADS_FORM, CIRCUMCISION_LP_SHEET_TAB, CIRCUMCISION_LP_SOURCE } from "@/lib/forms"
// CIRC_PHONES is still needed: it names the numbers to ring in the failure
// alert, which is the one place the form does still have to give them.
import { CIRCUMCISION_BRANCH, CIRC_PHONES, FORM_CONCERNS } from "./content"

const LEAD_ENDPOINT = "/api/leads"

/**
 * The booking form — section 01's right-hand column.
 *
 * Five fields: name, phone, email, address and concern. No preferred call
 * date/time picker — removed on request, so the team calls back without the
 * visitor having to pin a slot first.
 *
 * Fields are underlines rather than boxes — the gynecomastia treatment, kept,
 * because a boxed input would drag the page back toward `.elite`.
 *
 * Validation is the browser's (`required`, `pattern`) and submit is gated on
 * `checkValidity()`, so a malformed number never reaches the API. The hidden
 * attribution inputs are filled on mount, which is what makes a lead
 * traceable back to the ad that produced it.
 */
export default function CircForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitting, setSubmitting] = useState(false)

  // Fill the attribution fields once the URL is readable on the client.
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

    // The lead API has no dedicated concern column, so the clinical answer
    // rides the existing generic `area` field, same as the other pages.
    const payload = {
      name: raw.name,
      phone: raw.phone,
      email: raw.email,
      address: raw.address,
      area: raw.concern,
      branch: CIRCUMCISION_BRANCH,
      formName: CIRCUMCISION_LP_LEADS_FORM,
      // This page's own sheet tab — distinct from its formName, which is why
      // it has to be sent separately. See CIRCUMCISION_LP_* in lib/forms.ts.
      sheetTab: CIRCUMCISION_LP_SHEET_TAB,
      source: raw.utm_source || CIRCUMCISION_LP_SOURCE,
      medium: raw.utm_medium || "",
      campaign: raw.utm_campaign || "",
      pageUrl: raw.page_url || window.location.href,
    }

    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Request failed with ${res.status}`)

      track("lead_submit", { branch: CIRCUMCISION_BRANCH, concern: raw.concern })
      // This page's own confirmation, not the piles one — see
      // app/circumcision/thank-you/page.tsx.
      window.location.href = "/circumcision/thank-you"
    } catch {
      setSubmitting(false)
      // Both lines here: the submission has just failed, so this is the last
      // thing standing between the visitor and giving up on the clinic.
      alert(`That did not go through. Please call ${CIRC_PHONES.map((p) => p.display).join(" or ")} instead.`)
    }
  }

  return (
    // Bare fields, no card and no heading of its own: the hero's form column
    // supplies both, and a second "Book Your Consultation" inside the panel
    // would repeat the one already above it.
    //
    // @container: the field grid pairs up on the panel's own width, not the
    // viewport's — it is full-bleed on phones and pairs up again once the
    // hero's form column is wide enough at lg.
    <form ref={formRef} onSubmit={onSubmit} noValidate className="c-form @container">
      <div className="grid gap-x-8 gap-y-2.5 @min-[440px]:grid-cols-2">
        <Field label="Name" htmlFor="circ-name">
          <input id="circ-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className="c-field" />
        </Field>

        <Field label="Phone Number" htmlFor="circ-phone">
          <input
            id="circ-phone"
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            title="A 10-digit Indian mobile number, starting 6–9"
            className="c-field"
          />
        </Field>

        {/* Email and Address always sit in two columns, independent of the
            @container breakpoint above — Name/Phone and Concern still follow
            it, but these two were asked to stay side by side regardless of
            how narrow the form's own column gets. */}
        <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-2.5">
          <Field label="Email" htmlFor="circ-email">
            <input id="circ-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="c-field" />
          </Field>

          <Field label="Address" htmlFor="circ-address">
            <input
              id="circ-address"
              name="address"
              type="text"
              required
              autoComplete="street-address"
              placeholder="Area / city"
              className="c-field"
            />
          </Field>
        </div>

        <Field label="Concern" htmlFor="circ-concern" full>
          <select id="circ-concern" name="concern" required defaultValue="" className="c-field c-select">
            <option value="" disabled>
              Select your concern
            </option>
            {FORM_CONCERNS.map((c) => (
              <option key={c}>{c}</option>
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
      <input type="hidden" name="page_url" />

      <button type="submit" disabled={submitting} className="c-btn c-btn-solid mt-4 w-full">
        {submitting ? "Sending…" : "Book Your Consultation"}
      </button>

      {/* No phone number under the button. The header, the sticky bar on
          phones, the map section and the footer all carry it, and repeating
          it here gave the form a second, competing way out at the exact
          point the reader is being asked to submit. */}
      <p className="mt-2.5 flex items-start gap-2.5 text-[0.76rem] leading-snug text-[var(--c-dim)]">
        <Lock className="mt-0.5 h-3.5 w-3.5 flex-none text-[var(--c-green)]" aria-hidden />
        Your details are handled privately and confidentially.
    </p>
    </form>
  )
}

/** Label above a baseline. `full` spans both columns of the field grid. */
function Field({
  label,
  htmlFor,
  children,
  full = false,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
  full?: boolean
}) {
  return (
    <div className={`min-w-0 ${full ? "@min-[440px]:col-span-2" : ""}`}>
      <label htmlFor={htmlFor} className="c-label">
        {label}
      </label>
      {children}
    </div>
  )
}
