"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { IMAGES } from "../config"

const points = ["Detailed clinical evaluation", "Treatment based on individual condition", "Clear explanation before the procedure", "Focus on patient privacy and comfort", "Post-procedure guidance and follow-up"]

export default function CircumcisionSpecialist() {
  const book = () => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  return <section className="c-doctor"><div className="c-wrap c-doctor-grid"><div className="c-portrait"><Image src={IMAGES.doctor} alt="Doctor Photo" fill sizes="(max-width: 800px) 100vw, 40vw" /></div><div><h2>Meet Your Circumcision Specialist</h2><h3>Dr. [Doctor Name]</h3><p className="c-role">[Qualification] | [Specialization]</p><p>Get evaluated by an experienced surgeon for concerns including phimosis, recurrent infections, painful foreskin retraction, frenulum problems and other foreskin-related conditions.</p><h4>Specialist Care From Consultation to Recovery</h4><ul className="c-check-list">{points.map(x => <li key={x}><Check className="c-tick" />{x}</li>)}</ul><button onClick={book} className="c-button">Book a Consultation With Dr. ______</button></div></div></section>
}
