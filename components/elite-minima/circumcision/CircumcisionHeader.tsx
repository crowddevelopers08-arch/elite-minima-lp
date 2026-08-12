"use client"

import Image from "next/image"
import { BRAND_FULL, IMAGES } from "../config"

export default function CircumcisionHeader() {
  const book = () => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  return <header><a href="#top" className="c-brand" aria-label={BRAND_FULL}><Image src={IMAGES.logoLockup} alt={BRAND_FULL} width={776} height={180} priority /></a><button onClick={book}>Book a Private Consultation</button></header>
}
