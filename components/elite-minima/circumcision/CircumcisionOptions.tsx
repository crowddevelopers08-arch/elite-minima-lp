"use client"
import { Check } from "lucide-react"
import { options } from "./content"

export default function CircumcisionOptions() {
  const book = () => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  return <section className="c-options"><div className="c-wrap"><h2>Circumcision Options</h2><div className="c-option-grid">{options.map(([title, body, points]) => <article key={title}><h3>{title}</h3><p>{body}</p><ul>{points.map(x => <li key={x}><Check className="c-tick" />{x}</li>)}</ul></article>)}</div><div className="c-choice"><div><h3>Not Sure Which Treatment You Need?</h3><p>Your doctor will recommend an appropriate technique after examining your condition and discussing your medical history.</p></div><button onClick={book} className="c-button">Consult The Doctor</button></div></div></section>
}
