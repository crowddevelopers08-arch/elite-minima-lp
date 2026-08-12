"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { IMAGES } from "../config"
import { clinicPoints } from "./content"

export default function CircumcisionClinic() {
  const book = () => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  return <section id="clinic" className="c-clinic"><div className="c-wrap"><h2>Why Choose Elite-Minima?</h2><p className="c-strong">Advanced Surgical Care. Private Environment. Personalized Attention.</p><p className="c-intro">Elite-Minima – The Surgical Speciality Clinic provides modern minimally invasive surgical care in Anna Nagar, Chennai.</p><p className="c-intro">From your first consultation through treatment and recovery, our focus is on safety, hygiene, privacy and clear communication.</p><h3>What You Can Expect</h3><ul className="c-clinic-points">{clinicPoints.map(x => <li key={x}><Check className="c-tick" />{x}</li>)}</ul><div className="c-facility"><div><Image src={IMAGES.surgicalTeam} alt="Clinic Images" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div><Image src={IMAGES.hero} alt="Reception" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div><Image src={IMAGES.clinicianWithModel} alt="Consultation Room" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></div><div className="c-question"><div><h3>Have Questions Before Deciding?</h3><p>Speak privately with our team and understand the procedure, treatment options and expected recovery.</p></div><button onClick={book} className="c-button">Talk To Our Team</button></div></div></section>
}
