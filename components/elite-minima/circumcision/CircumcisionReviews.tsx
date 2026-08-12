"use client"

import { ChevronRight } from "lucide-react"

export default function CircumcisionReviews() {
  const book = () => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  return <section id="reviews" className="c-reviews"><div className="c-wrap"><h2>What Our Patients Say</h2><p className="c-intro">Real experiences from patients who chose Elite-Minima for surgical care.</p><div className="c-review-grid">{[1, 2, 3].map(n => <article key={n}><div>★★★★★</div><p>“[Insert verified patient review]”</p></article>)}</div><p className="c-note">Patient experiences and recovery may vary.</p><button onClick={book} className="c-button">Book Your Consultation <ChevronRight /></button></div></section>
}
