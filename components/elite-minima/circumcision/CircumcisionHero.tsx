import { Check } from "lucide-react"
import CircumcisionForm from "./CircumcisionForm"
import { concerns } from "./content"

export default function CircumcisionHero() {
  return <section className="c-hero"><div className="c-wrap c-hero-grid"><div className="c-hero-copy"><h1>Advanced <em>Circumcision</em> Treatment</h1><p className="c-lead">Modern Stapler &amp; Laser Circumcision With Private, Specialist Care</p><div className="c-video"><span>Video</span><div className="c-play" aria-hidden>▶</div><p>Doctor-led 30–45 sec video explaining the treatment, who may need it, available techniques and recovery expectations.</p></div><ul className="c-concerns">{concerns.map(x => <li key={x}><Check className="c-tick" />{x}</li>)}</ul><p className="c-assurance">Private Consultation <b>•</b> Day-Care Treatment <b>•</b> Stapler &amp; Laser Options <b>•</b> Personalized Aftercare</p></div><aside id="book" className="c-book"><CircumcisionForm /></aside></div></section>
}
