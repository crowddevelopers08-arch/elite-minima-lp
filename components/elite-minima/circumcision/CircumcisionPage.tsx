import CircumcisionHeader from "./CircumcisionHeader"
import CircumcisionHero from "./CircumcisionHero"
import CircumcisionReviews from "./CircumcisionReviews"
import CircumcisionJourney from "./CircumcisionJourney"
import CircumcisionOptions from "./CircumcisionOptions"
import CircumcisionSpecialist from "./CircumcisionSpecialist"
import CircumcisionClinic from "./CircumcisionClinic"
import CircumcisionLocation from "./CircumcisionLocation"
import CircumcisionFooter from "./CircumcisionFooter"

/** Dedicated composition for /circumcision. Each landing-page section owns its
 * own component so its layout and copy can evolve independently. */
export default function CircumcisionPage() {
  return (
    <div id="top" className="circumcision">
      <CircumcisionHeader />
      <main>
        <CircumcisionHero />
        <CircumcisionReviews />
        <CircumcisionJourney />
        <CircumcisionOptions />
        <CircumcisionSpecialist />
        <CircumcisionClinic />
        <CircumcisionLocation />
      </main>
      <CircumcisionFooter />
    </div>
  )
}
