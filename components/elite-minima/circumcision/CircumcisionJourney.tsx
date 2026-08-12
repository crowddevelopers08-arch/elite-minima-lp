import { journey } from "./content"

export default function CircumcisionJourney() {
  return <section id="journey" className="c-journey"><div className="c-wrap"><h2>Your Circumcision Treatment Journey</h2><p className="c-intro">From your first consultation to follow-up care, our team guides you through each stage with privacy and clear communication.</p><div className="c-steps">{journey.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
}
