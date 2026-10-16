// Copy for the gynecomastia landing page at /gynecomastia.
//
// Same split as the general page: clinic-level facts (phones, address, map,
// image URLs) stay in ../config.ts and are imported by the sections directly.
// Everything below is this page's own editorial content, kept out of the
// components so a copy edit never means touching layout.

import { cldTransform, IMAGES } from "../elite-minima/config"

/** Branch tag on every lead, analytics event and CRM row from this page, so
    gynecomastia traffic is separable from / and /general. */
export const GYN_BRANCH = "Elite Minima Clinic — Gynecomastia"

export { PHONE_DISPLAY as GYN_PHONE_DISPLAY, PHONE_TEL as GYN_PHONE_TEL } from "../elite-minima/config"

/* ── Hero ────────────────────────────────────────────────────────────────── */

export const HERO = {
  eyebrow: "Male Breast Reduction",
  /* Split so the closing run can carry the accent colour, the way the
     circumcision page's hero does. Joined they read "Gynecomastia Surgery in
     Chennai" — the page title's first half; "| Male Breast Reduction" became
     the eyebrow above instead of literal punctuation in the heading. */
  headline: "Gynecomastia Surgery",
  headlineAccent: "in Chennai",
  subtext:
    "Surgical removal of excess chest fat and gland tissue by an experienced gynecomastia surgeon at Elite Minima, the surgical speciality clinic. We provide private consultations to understand your concerns and guide you towards the right treatment.",
  primaryCta: "Book Consultation",
  secondaryCta: "Call Now",
  whatsappCta: "WhatsApp",
} as const

export interface GynHeroSlide {
  src: string
  alt: string
  /** Label in the frame's bottom-left chip while this slide is showing. */
  caption: string
}

/**
 * Hero media.
 *
 * `video` is the file the frame plays. Leave it empty and `slides` are shown
 * instead — that is the current state, since the clinic has not supplied a
 * chest-contouring film yet. Drop a URL in and the same frame becomes a real
 * player with no other change; the first slide doubles as its poster.
 *
 * Two or more slides turn the frame into a cross-fading carousel. One slide is
 * a plain still — no controls are drawn and no timer runs — so removing the
 * animation later means deleting an entry, not editing GynHero.
 */
export const HERO_MEDIA: { video: string; slides: GynHeroSlide[] } = {
  video: "",
  slides: [
    {
      src: IMAGES.chestContouring,
      alt: "Advanced male chest contouring — gynecomastia correction at Elite-Minima",
      caption: "Chest contouring",
    },
    {
      src: IMAGES.surgicalTeam,
      alt: "The Elite-Minima surgical team in theatre",
      caption: "Our surgical team",
    },
  ],
}

/** Named under the hero media, so the face on the page is the surgeon's.
 *
 *  The portrait is a 1536px studio shot and the plate draws it at 56px. Served
 *  raw it is downscaled by the browser in a single step — visibly soft — and
 *  cropped square from the top, which frames a forehead. Cloudinary does the
 *  resize instead, at 2× for retina, with the crop held on the face. */
export const HERO_SURGEON = {
  name: "Dr. Madan K",
  title: "Aesthetic, Plastic & Reconstructive Surgeon",
  photo: cldTransform(IMAGES.drMadan, "c_fill,g_face,w_224,h_224,q_auto"),
} as const

export const HERO_CONCERNS = [
  "Puffy or enlarged chest",
  "Protruding nipples",
  "Excess chest fat",
  "Firm glandular tissue",
  "Uneven chest appearance",
  "Chest tenderness or discomfort",
] as const

/* ── Patient reviews ─────────────────────────────────────────────────────── */

export const REVIEWS_INTRO = {
  title: "Real Patients. Real Experiences.",
  body: "Choosing gynecomastia treatment can be a personal decision. Hear from patients about their consultation, procedure, recovery, and overall experience at Elite-Minima.",
} as const

export interface GynReview {
  quote: string
  name: string
  place: string
  /** What they were treated for — the chip above the quote. */
  tag: string
}

export const REVIEWS: GynReview[] = [
  {
    quote:
      "I had been putting this off for years because I did not know who to ask. The consultation was private and straightforward the doctor explained what was causing it and what the procedure would involve before anything was decided.",
    name: "Pradeep M",
    place: "Mogappair",
    tag: "Liposuction + Gland Excision",
  },
  {
    quote:
      "What helped most was being told clearly which part of it was fat and which part was gland. The plan made sense after that, and the follow-up visits were properly scheduled rather than left to me to chase.",
    name: "Arun V",
    place: "Anna Nagar",
    tag: "Gland Excision",
  },
  {
    quote:
      "Recovery was explained in detail the compression garment, what I could lift and when, and when I could get back to the gym. Knowing the timeline in advance took most of the anxiety out of it.",
    name: "Sathish K",
    place: "Kilpauk",
    tag: "Liposuction",
  },
  {
    quote:
      "I went in expecting to be pushed into surgery on day one. Instead I was evaluated first and the options were laid out with what each one could and could not change. That is why I went ahead here.",
    name: "Vignesh R",
    place: "Thirumangalam",
    tag: "Specialist Consultation",
  },
]

/** Aggregate shown beside the reviews. Figures the clinic already claims on
    the other two pages — nothing new is invented here. */
export const REVIEW_PROOF = [
  { value: 4000, suffix: "+", label: "Surgeries performed" },
  { value: 12, suffix: "+", label: "Years of experience" },
] as const

/* ── Treatment journey ───────────────────────────────────────────────────── */

export interface JourneyStep {
  n: string
  title: string
  desc: string
}

export const JOURNEY: JourneyStep[] = [
  {
    n: "01",
    title: "Gynecomastia",
    desc: "Enlarged breast tissue in men that causes a rounded, puffy or \"man boob\" chest. Our doctor will assess your condition and recommend the most suitable gynecomastia treatment for you.",
  },
  {
    n: "02",
    title: "Gland-Type Gynecomastia",
    desc: "Firm gland tissue under the nipple that does not reduce with exercise or weight loss.",
  },
  {
    n: "03",
    title: "Fat-Type Chest Enlargement (Pseudo-Gynecomastia)",
    desc: "Excess chest fat without gland growth, treated with male chest liposuction.",
  },
  {
    n: "04",
    title: "Grade 1, 2 & 3 Gynecomastia",
    desc: "From mild puffiness to marked enlargement with loose or sagging skin.",
  },
  {
    n: "05",
    title: "Tenderness or Discomfort",
    desc: "Pain or sensitivity in the chest.",
  },
]

/* ── Treatment options ───────────────────────────────────────────────────── */

export interface GynImage {
  src: string
  alt: string
}

export interface GynOption {
  id: string
  name: string
  /** Two-word category above the name — must not wrap. */
  category: string
  desc: string
  /**
   * The preview panel's frame — exactly one image per option, so every option
   * is laid out identically in a single full-width still.
   */
  images: [GynImage]
}

/* Named once so a swapped file is a one-line change rather than a hunt through
   the options below. One image per option.

   The GLAND shot is from the CDN site library in config.ts, shared with
   /general — leave it alone. The /public shots are surgical-planning
   photographs rather than male chests, so their alt text describes the
   markings actually pictured instead of naming a procedure the photo does
   not show. */
const GLAND: GynImage = { src: IMAGES.glandExcision, alt: "Gland excision for gynecomastia correction" }
const LIPO_ONE: GynImage = {
  src: "https://res.cloudinary.com/xykwtyr0/image/upload/v1789818739/common-image.jpg",
  alt: "Liposuction planning markings drawn on the flank",
}
const CONTOUR_BODY: GynImage = {
  src: "https://res.cloudinary.com/xykwtyr0/image/upload/v1789818739/common-image.jpg",
  alt: "Body contouring markings drawn before surgery",
}

export const OPTIONS: GynOption[] = [
  {
    id: "liposuction",
    name: "Male Chest Liposuction",
    category: "Fat Removal",
    desc: "Removes excess chest fat through very small incisions. Suited to fat-dominant cases.",
    images: [LIPO_ONE],
  },
  {
    id: "gland-excision",
    name: "Gland Excision",
    category: "Gland Removal",
    desc: "Removes firm gland tissue through a small cut around the edge of the areola.",
    images: [GLAND],
  },
  {
    // ⚠ No dedicated photo for this combined approach yet — reusing the
    // liposuction placeholder until one is supplied.
    id: "combined",
    name: "Combined Liposuction & Gland Removal",
    category: "Combined Approach",
    desc: "The most common approach. It removes both fat and gland for a flatter, more defined male chest contour.",
    images: [LIPO_ONE],
  },
  {
    id: "skin-reduction",
    name: "Skin Reduction (Chest Lift)",
    category: "Skin Reduction",
    desc: "For higher-grade cases with loose skin, where extra skin is removed to reshape the chest.",
    images: [CONTOUR_BODY],
  },
]

export const OPTIONS_NOTE = "Our surgeon will examine you and recommend the most suitable treatment for your condition."

/* ── Outcomes, scars, recovery ───────────────────────────────────────────── */

export const IMPROVEMENTS = [
  "Flatter, more masculine chest contour",
  "Reduced chest fullness and puffiness",
  "Improved chest symmetry",
  "Reduced discomfort caused by excess tissue",
  "Better chest definition",
  "Greater comfort while wearing fitted clothing",
] as const

export const ANSWERS = [
  {
    q: "What about scars?",
    a: "Incisions are planned carefully with the goal of keeping visible scarring as limited as reasonably possible. Scar location and extent depend on the type and severity of gynecomastia and the procedure required.",
  },
  {
    q: "How long is recovery?",
    a: "Recovery varies between patients and procedures. Many patients can gradually return to routine activities within 1–2 weeks, while strenuous exercise and heavy lifting may need to be restricted for approximately 4–6 weeks, depending on the surgeon's advice.",
  },
] as const

/** Recovery milestones, drawn from the answer above — the same guidance as a
    timeline, because "1–2 weeks / 4–6 weeks" is easier to hold as a scale. */
export const RECOVERY_MARKS = [
  { when: "Day 0", what: "Procedure day" },
  { when: "1–2 weeks", what: "Gradual return to routine activities" },
  { when: "4–6 weeks", what: "Strenuous exercise and heavy lifting, as advised" },
] as const

/* ── Surgeon ─────────────────────────────────────────────────────────────── */

export const SURGEON = {
  name: "Dr. Madan K",
  title: "Aesthetic, Plastic & Reconstructive Surgeon",
  qualifications: "M.S. (General Surgery), M.Ch (Plastic Surgery), FIAGES, FIAAPS",
  body: [
    "Dr. Madan K specializes in aesthetic and reconstructive procedures, including gynecomastia correction, liposuction, and body contouring.",
    "His approach focuses on understanding each patient's anatomy and expectations before creating an individualized surgical plan designed around chest proportion, symmetry, safety, and natural-looking results.",
  ],
  reasons: [
    "Experience in gynecomastia & male chest contouring",
    "Advanced liposuction and surgical techniques",
    "Personalized treatment planning",
    "Focus on chest proportion and symmetry",
    "Pre-operative and post-operative guidance",
  ],
  photo: IMAGES.drMadan,
  cta: "Consult Dr. Madan K",
} as const

/* ── Clinic ──────────────────────────────────────────────────────────────── */

export const CLINIC = {
  title: "Expert Gynecomastia Care in Anna Nagar",
  body: [
    "At Elite-Minima, gynecomastia treatment is planned around one goal: providing the right correction for the individual patient.",
    "From your first evaluation through surgery and follow-up, the team focuses on clear communication, personalized treatment planning, patient safety, and comfortable recovery.",
  ],
  reasons: [
    "Specialist-led consultation",
    "Personalized chest assessment",
    "Modern surgical & contouring techniques",
    "Focus on minimal visible scarring",
    "Pre- and post-operative guidance",
    "Dedicated follow-up care",
  ],
} as const

export const SERVICE_AREAS = [
  "Anna Nagar",
  "Shenoy Nagar",
  "Kilpauk",
  "Thirumangalam",
  "Mogappair",
  "Koyambedu",
  "Arumbakkam",
  "Padi",
  "Kolathur",
  "Korattur",
] as const

/* ── Footer ──────────────────────────────────────────────────────────────── */

export const FOOTER_LINKS = [
  { label: "Treatment", href: "#treatment" },
  { label: "Doctor", href: "#surgeon" },
  { label: "Patient Reviews", href: "#reviews" },
  { label: "Clinic", href: "#clinic" },
  { label: "Location", href: "#visit" },
  { label: "Contact", href: "#book" },
] as const

export const FOOTER_SERVICES = [
  "Gynecomastia Treatment",
  "Male Breast Reduction",
  "Liposuction",
  "Body Contouring",
] as const
