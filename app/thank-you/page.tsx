"use client"

import { useEffect } from "react"
import { CheckCircle2, Phone, ArrowLeft, PhoneCall, CalendarCheck, Stethoscope } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Header from "@/components/elite-minima/Header"
import Footer from "@/components/elite-minima/Footer"
import { HOURS, PHONES, WHATSAPP_URL } from "@/components/elite-minima/config"

/** What actually happens next, so the wait after submitting feels accounted for. */
const NEXT_STEPS = [
  { icon: PhoneCall, title: "We call you back", body: "Our care coordinator rings the number you shared, in your preferred call window." },
  { icon: CalendarCheck, title: "We confirm your slot", body: "You pick a consultation time that suits you, and we hold it for you." },
  { icon: Stethoscope, title: "You meet the specialist", body: "A private evaluation, then a treatment plan built around your case." },
] as const

export default function ThankYouPage() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: "lead_thank_you", branch: "Elite Minima Clinic" })
  }, [])

  return (
    <div className="elite flex min-h-screen flex-col">
      <Header />

      <main className="ribbon-wash relative flex flex-1 items-center justify-center overflow-hidden bg-[var(--e-canvas)] px-5 py-14 sm:py-20">
        <div className="relative z-10 w-full max-w-[680px]">
          <div className="rounded-[28px] border border-[var(--e-line)] bg-white p-6 text-center shadow-[0_30px_60px_-30px_rgba(14,22,38,0.3)] sm:p-10 md:p-12">
            {/* the tick sits in a green ring with a purple halo — both brand inks */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--e-green-soft)] ring-8 ring-[var(--e-purple-soft)] sm:h-20 sm:w-20">
              <CheckCircle2 className="h-8 w-8 text-[var(--e-green-deep)] sm:h-10 sm:w-10" />
            </div>

            <p className="kicker justify-center">Request received</p>
            <h1 className="mt-3 text-[clamp(1.7rem,6vw,2.6rem)] leading-tight">Thank you!</h1>
            <p className="mx-auto mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-[var(--e-muted)] sm:text-[1.05rem]">
              Your consultation request is with our team. We&apos;ll call you shortly on the number you shared, during your preferred call
              time, to confirm your slot.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {PHONES.map((p, i) => (
                <a key={p.tel} href={`tel:${p.tel}`} className={`btn w-full sm:w-auto ${i === 0 ? "btn-primary" : "btn-ghost"}`}>
                  <Phone className="h-4 w-4" />
                  Call {p.display}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-purple w-full sm:w-auto"
              >
                <FaWhatsapp className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-7 border-t border-[var(--e-line-soft)] pt-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[var(--e-purple-deep)]">Clinic hours</p>
              <ul className="mt-2 space-y-0.5 text-[0.88rem] text-[var(--e-muted)]">
                {HOURS.map((h) => (
                  <li key={h.days}>
                    <span className="font-semibold text-[var(--e-ink-soft)]">{h.days}</span> &nbsp;·&nbsp; {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ol className="mt-5 grid gap-3 sm:grid-cols-3">
            {NEXT_STEPS.map(({ icon: Icon, title, body }, i) => (
              <li key={title} className="card p-5 text-left">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--e-purple-soft)] text-[var(--e-purple-deep)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--e-muted)]">Step {i + 1}</span>
                </div>
                <p className="mt-3 text-[0.95rem] font-semibold text-[var(--e-ink)]">{title}</p>
                <p className="mt-1 text-[0.85rem] leading-relaxed text-[var(--e-muted)]">{body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-center">
            <a href="/" className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-[var(--e-green-deep)] hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
