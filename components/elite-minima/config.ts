// Clinic details for Elite Minima — The Surgical Speciality Clinic.
// Sourced from eliteminima.com. Update here and every section follows.

export const BRAND = "Elite Minima"
export const BRAND_FULL = "Elite Minima — The Surgical Speciality Clinic"
export const BRANCH = "Elite Minima Clinic"

export const PHONE_DISPLAY = "+91 98949 84103"
export const PHONE_TEL = "+919894984103"

export const WHATSAPP_DISPLAY = "+91 95000 91428"
export const WHATSAPP_URL = "https://wa.me/919500091428"

export const EMAIL = "eliteminima@gmail.com"

export const ADDRESS_SHORT = "Anna Nagar, Chennai"
export const ADDRESS_FULL =
  "Ground Floor, New No. 47/1, Old No. Z-165, MIG Flat 64A, Block 64, 5th Avenue, Anna Nagar, Chennai, Tamil Nadu 600040"

/** Clinic hours. Consultations run in the evening slot, by appointment. */
export const HOURS = [
  { days: "Monday – Saturday", time: "11:00 AM – 8:00 PM" },
  { days: "Sunday", time: "By appointment" },
] as const
export const CONSULT_HOURS = "Consultations 4:00 PM – 8:00 PM, by appointment"

/** Proctology specialist for this page. */
export const DOCTOR = {
  name: "Dr. Lohit Sai K",
  title: "Consultant Surgeon & Proctology Specialist",
  subtitle: "General, Minimally Invasive & Laparoscopic Surgeon",
  qualifications: "M.B.B.S · M.S. (General Surgery) · DNB · F.MAS · D.MAS · M.MAS · FALS · FISCP · FAIS · FIAGES",
  expertise: [
    "Piles Treatment",
    "Laser Piles Treatment",
    "Fissure Treatment",
    "Fistula Treatment",
    "Minimally Invasive Procedures",
  ],
} as const

/** Google Maps embed query — the clinic's registered address. */
export const MAP_QUERY = "Elite Minima Clinic, 5th Avenue, Anna Nagar, Chennai 600040"
export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Elite Minima Clinic, 5th Avenue, Anna Nagar, Chennai 600040")

/** YouTube embed for the hero video. Replace with the clinic's final video URL when ready. */
export const HERO_YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/VIDEO_ID"
