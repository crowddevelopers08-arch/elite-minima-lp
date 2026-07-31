"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { track } from "./track"
import { BRAND_FULL, PHONE_DISPLAY, PHONE_TEL } from "./config"

const NAV = [
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Treatments", href: "#treatments", id: "treatments" },
  { label: "Specialist", href: "#doctor", id: "doctor" },
  { label: "Clinic", href: "#clinic", id: "clinic" },
  { label: "FAQ", href: "#faq", id: "faq" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return

    // Tracking exits as well as entries lets `active` fall back to "" up in the
    // hero, where no nav section crosses the band — otherwise the last section
    // visited stays lit, and the URL would claim it too.
    const inBand = new Set<string>()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) inBand.add(e.target.id)
          else inBand.delete(e.target.id)
        })
        // NAV is in document order, so the first match is the topmost section
        setActive(NAV.find((n) => inBand.has(n.id))?.id ?? "")
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Keep the address bar in step with the section on screen. Nav clicks write
  // their own hash in SmoothScroll; this covers free scrolling, and uses
  // replaceState so a long scroll doesn't bury the Back button in history.
  useEffect(() => {
    const want = active ? `#${active}` : ""
    if (window.location.hash === want) return
    window.history.replaceState(null, "", want || window.location.pathname + window.location.search)
  }, [active])

  return (
    <div className="sticky top-0 z-50">
      <header className="px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`mx-auto flex h-14 w-full max-w-[1180px] items-center justify-between gap-4 rounded-full pl-4 pr-2 transition-all duration-300 sm:h-16 sm:pl-5 sm:pr-2.5 ${
            scrolled
              ? "border border-[var(--e-line)] bg-white/95 shadow-[0_12px_30px_-18px_rgba(14,22,38,0.35)] backdrop-blur-[12px]"
              : "border border-transparent bg-white/75 backdrop-blur-[8px]"
          }`}
        >
          {/* The lockup carries the brand name and tagline, so it is the accessible
              label — no duplicate text beside it. */}
          <a href="#top" className="flex flex-none items-center">
            <Image
              src="/logo-lockup.png"
              alt={BRAND_FULL}
              width={776}
              height={180}
              priority
              className="h-8 w-auto sm:h-10"
            />
          </a>

          <nav className="hidden items-center gap-1 rounded-full bg-[var(--e-canvas)] p-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-all duration-200 ${
                  active === n.id ? "bg-white text-[var(--e-ink)] shadow-[0_2px_8px_-2px_rgba(14,22,38,0.2)]" : "text-[var(--e-muted)] hover:text-[var(--e-ink)]"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-none items-center gap-2 sm:gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => track("call_click", { branch: "Elite Minima Clinic" })}
              className="hidden text-[0.85rem] font-semibold text-[var(--e-ink)] sm:inline-block"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="#book"
              onClick={() => track("book_click", { branch: "Elite Minima Clinic" })}
              className="inline-flex items-center justify-center rounded-full bg-[var(--e-green)] px-4 py-2.5 text-[0.82rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[var(--e-green-deep)] sm:px-6 sm:text-[0.88rem]"
            >
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book Consultation</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}
