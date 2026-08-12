"use client"
import Image from "next/image"
import { BRAND_FULL, IMAGES } from "../config"

export default function CircumcisionFooter() {
  const book = () => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  return <footer><div className="c-wrap"><div><a href="#top" className="c-brand" aria-label={BRAND_FULL}><Image src={IMAGES.logoLockup} alt={BRAND_FULL} width={776} height={180} /></a><p>Elite-Minima – The Surgical Speciality Clinic</p><p>Modern surgical care with a focus on safety, privacy and patient comfort.</p></div><div><p>Call: 98949 84103<br />Email: eliteminima@gmail.com<br />Location: Anna Nagar, Chennai – 600040</p></div><div><p>Home | About Us | Services | Gallery | Contact Us</p><button onClick={book} className="c-button">Book a Private Consultation</button></div></div><p className="c-copy">© 2026 Elite-Minima. All Rights Reserved.</p></footer>
}
