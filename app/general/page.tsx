import type { Metadata } from "next"

import SmoothScroll from "@/components/elite-minima/SmoothScroll"
import GeneralRunningBar from "@/components/elite-minima/general/GeneralRunningBar"
import GeneralHeader from "@/components/elite-minima/general/GeneralHeader"
import GeneralHero from "@/components/elite-minima/general/GeneralHero"
import GeneralReviews from "@/components/elite-minima/general/GeneralReviews"
import GeneralTreatments from "@/components/elite-minima/general/GeneralTreatments"
import GeneralJourney from "@/components/elite-minima/general/GeneralJourney"
import GeneralDoctors from "@/components/elite-minima/general/GeneralDoctors"
import GeneralClinic from "@/components/elite-minima/general/GeneralClinic"
import GeneralLocation from "@/components/elite-minima/general/GeneralLocation"
import GeneralFinalCta from "@/components/elite-minima/general/GeneralFinalCta"
import GeneralFooter from "@/components/elite-minima/general/GeneralFooter"
import GeneralStickyCta from "@/components/elite-minima/general/GeneralStickyCta"

export const metadata: Metadata = {
  title: "Elite-Minima — Piles, Circumcision & Gynecomastia Treatment in Anna Nagar, Chennai",
  description:
    "Elite-Minima – The Surgical Speciality Clinic offers specialist-led surgical and minimally invasive care for piles, circumcision and gynecomastia in Anna Nagar, Chennai. Book a private consultation.",
}

/**
 * The general (multi-speciality) landing page.
 *
 * Distinct from `/`, which speaks only to piles: this one routes a visitor to
 * one of three treatment pathways. Its sections live in
 * components/elite-minima/general/ and share nothing with the piles page
 * beyond the brand primitives (Reveal, TitleUnderline, CountUp, config).
 */
export default function GeneralPage() {
  return (
    <div className="elite pb-[72px] lg:pb-0">
      {/* Lenis owns scroll position, so no `scroll-smooth` class here. */}
      <SmoothScroll />
      <GeneralRunningBar />
      <GeneralHeader />
      <main>
        <GeneralHero />
        <GeneralReviews />
        <GeneralTreatments />
        <GeneralJourney />
        <GeneralDoctors />
        <GeneralClinic />
        <GeneralLocation />
        <GeneralFinalCta />
      </main>
      <GeneralFooter />
      <GeneralStickyCta />
    </div>
  )
}
