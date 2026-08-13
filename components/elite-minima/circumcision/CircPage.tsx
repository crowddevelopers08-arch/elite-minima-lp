import SmoothScroll from "../SmoothScroll"
import CircHeader from "./CircHeader"
import CircHero from "./CircHero"
import CircBooking from "./CircBooking"
import CircReviews from "./CircReviews"
import CircTreatment from "./CircTreatment"
import CircDoctor from "./CircDoctor"
import CircClinic from "./CircClinic"
import CircLocation from "./CircLocation"
import CircFooter from "./CircFooter"
import CircStickyCta from "./CircStickyCta"

/**
 * The circumcision landing page.
 *
 * Seven sections, in the order and with the copy of the approved content deck
 * (transcribed in ./content.ts):
 *
 *   01 · Hero — headline, assurances, CTAs, the surgeon's portrait
 *   01b · Booking — the concerns, the number, and the form
 *   02 · Patient reviews
 *   03 · Treatment journey + circumcision options
 *   04 · Doctor
 *   05 · Clinic
 *   06 · Map
 *   07 · Footer
 *
 * The header and the phone-only action bar are page chrome rather than deck
 * sections: nothing here is reachable without a way to navigate to it, and on
 * a phone the form ends up a long way from most of the page.
 *
 * ── The design ────────────────────────────────────────────────────────────
 * `.circ` (see globals.css), built from `.gyn` rather than from `.elite`. The
 * gynecomastia page's dark editorial treatment — ink ground cut by bone-white
 * bands, square corners, hairline rules, outlined numerals, underlined form
 * fields, uppercase headings — fits a private men's-health page far better
 * than the white SaaS paper `/` and `/piles` wear, and this is the second page
 * to want it.
 *
 * Four things are moved so the two are not mistaken for each other: the ground
 * is a plum ink mixed from the logo's purple instead of `.gyn`'s cool navy;
 * violet leads and green is reserved for actions, where `.gyn` runs green
 * throughout; the texture is diagonal hairlines instead of a square grid; and
 * every band is numbered 01–07, which makes the deck's seven sections
 * countable on the way down.
 *
 * Bands alternate ink → surface → bone → ink → surface → bone → ink → ink so
 * no two neighbours are the same weight, and no section carries its own shell
 * width — they all use SHELL from ./ui, which keeps the columns aligned.
 */
export default function CircPage() {
  return (
    // The bottom padding reserves the sticky action bar's height below lg, so
    // it never covers the end of the footer.
    <div id="top" className="circ pb-[56px] lg:pb-0">
      {/* Lenis owns scroll position, so no `scroll-smooth` class here. */}
      <SmoothScroll />
      <CircHeader />

      <main>
        <CircHero />
        <CircBooking />
        <CircReviews />
        <CircTreatment />
        <CircDoctor />
        <CircClinic />
        <CircLocation />
      </main>

      <CircFooter />
      <CircStickyCta />
    </div>
  )
}
