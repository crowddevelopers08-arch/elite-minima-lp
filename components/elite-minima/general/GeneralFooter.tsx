"use client"

import Image from "next/image"
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu"
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { track } from "../track"
import { ADDRESS_FULL, BRAND, BRAND_FULL, EMAIL, FACEBOOK_URL, IMAGES, INSTAGRAM_URL, WHATSAPP_URL } from "../config"
import { GENERAL_PHONE_DISPLAY, GENERAL_PHONE_TEL } from "./content"

const BRANCH = "Elite Minima Clinic — General"

const EXPLORE = [
  { label: "Home", href: "#top" },
  { label: "Treatments", href: "#treatments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Patient Reviews", href: "#reviews" },
  { label: "Clinic", href: "#clinic" },
  { label: "Location", href: "#visit" },
  { label: "Contact", href: "#book" },
]

const TREATMENTS = [
  "Piles & Proctology",
  "Circumcision",
  "Gynecomastia & Male Breast Reduction",
  "Laser & Minimally Invasive Procedures",
  "Liposuction & Chest Contouring",
]

const SOCIALS = [
  { Icon: FaInstagram, href: INSTAGRAM_URL, label: "Instagram" },
  { Icon: FaFacebookF, href: FACEBOOK_URL, label: "Facebook" },
  { Icon: FaWhatsapp, href: WHATSAPP_URL, label: "WhatsApp" },
]

export default function GeneralFooter() {
  return (
    <footer className="relative overflow-hidden bg-[var(--e-ink)] text-white/70">
      {/* Three columns, the reference's split: brand + socials · Explore · Reach */}
      <div className="relative mx-auto grid w-full max-w-[1180px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.6fr_1fr_1.3fr] lg:gap-16">
        <div className="max-w-[36ch]">
          {/* The mark is printed for white; on the dark footer it sits on its own
              paper chip rather than being knocked out. */}
          <span className="inline-flex rounded-2xl bg-white px-4 py-3">
            <Image src={IMAGES.logoLockup} alt={BRAND_FULL} width={776} height={180} className="h-9 w-auto sm:h-10" />
          </span>
          <p className="mt-4 text-[0.92rem] leading-relaxed text-white/60">
            Elite-Minima – The Surgical Speciality Clinic. Advanced surgical and minimally invasive care with a focus on safety, privacy,
            personalized treatment, and patient comfort.
          </p>
          {/* Folded in from the dropped fourth column — the specialities still
              need to be on the page, but they don't warrant a column of links. */}
          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.82rem] text-white/50">
            {TREATMENTS.map((t, i) => (
              <span key={t} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-[var(--e-purple-light)]">•</span>}
                <a href="#treatments" className="transition-colors hover:text-white">
                  {t}
                </a>
              </span>
            ))}
          </p>

          <div className="mt-6 flex gap-2.5">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-[var(--e-green)] hover:bg-[var(--e-green)] hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--e-purple-light)]">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-[0.9rem]">
            {EXPLORE.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--e-purple-light)]">Reach</h4>
          <ul className="mt-4 space-y-3.5 text-[0.9rem]">
            <li>
              <a
                href={`tel:${GENERAL_PHONE_TEL}`}
                onClick={() => track("call_click", { branch: BRANCH, section: "footer" })}
                className="flex items-center gap-3 font-semibold text-white transition-colors hover:text-[var(--e-purple-light)]"
              >
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-[var(--e-purple-light)]">
                  <LuPhone className="h-4 w-4" />
                </span>
                {GENERAL_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/70 transition-colors hover:text-[var(--e-purple-light)]">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-[var(--e-purple-light)]">
                  <LuMail className="h-4 w-4" />
                </span>
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-[var(--e-purple-light)]">
                <LuMapPin className="h-4 w-4" />
              </span>
              {ADDRESS_FULL}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-6 sm:px-8">
          <p className="max-w-[92ch] text-[0.78rem] leading-relaxed text-white/45">
            Treatment suitability, procedure choice, outcomes, and recovery vary based on the individual condition. A clinical consultation is
            required to determine the appropriate treatment approach.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-[0.78rem] text-white/50">
            <span>© 2026 {BRAND}. All rights reserved.</span>
            <a href="/privacy-policy" className="font-semibold text-white/80 transition-colors hover:text-white">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
