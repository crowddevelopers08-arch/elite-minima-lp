"use client"
import { MapPin, Phone } from "lucide-react"

export default function CircumcisionLocation() {
  const book = () => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  return <section id="visit" className="c-visit"><div className="c-wrap c-visit-grid"><div><h2>Circumcision Treatment in Anna Nagar, Chennai</h2><p>Conveniently located in Anna Nagar for patients from nearby areas including Shenoy Nagar, Kilpauk, Thirumangalam, Mogappair, Koyambedu, Arumbakkam, Padi, Kolathur and Korattur.</p><div className="c-address"><MapPin /><p>Elite-Minima – The Surgical Speciality Clinic<br /><br />Ground Floor, New No. 47/1, Old No. Z-165, MIG Flat 64 A, Block 64, 5th Avenue, Anna Nagar, Chennai, Tamil Nadu – 600040</p></div><p>Consultation Timing: 4:00 PM – 8:00 PM<br />By Appointment</p><a className="c-phone" href="tel:9894984103"><Phone />Call: 98949 84103</a><div className="c-actions"><a className="c-button" target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=Elite+Minima+Clinic%2C+Anna+Nagar%2C+Chennai">Get Directions</a><button onClick={book} className="c-button c-button-alt">Book Appointment</button></div></div><div className="c-map"><iframe title="Elite-Minima location" src="https://www.google.com/maps?q=Elite%20Minima%20Clinic%2C%20Anna%20Nagar%2C%20Chennai&output=embed" loading="lazy" /></div></div></section>
}
