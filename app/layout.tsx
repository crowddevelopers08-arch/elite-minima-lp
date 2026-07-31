import type React from "react"
import type { Metadata, Viewport } from "next"
import { Lato } from "next/font/google"
import "./globals.css"

// Lato is the sole typeface for the Elite Minima site, exposed as --font-lato.
//
// Lato only ships 100/300/400/700/900 — it has no 500, 600 or 800. The design
// uses font-medium/semibold/extrabold, which the CSS font-matching algorithm
// resolves against the faces below as 500→400, 600→700, 800→900.
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
})

const TITLE = "Elite Minima — Advanced Piles Treatment | Laser & Minimally Invasive Care"
const DESCRIPTION =
  "Elite Minima — The Surgical Speciality Clinic offers advanced piles treatment in Anna Nagar, Chennai: laser and minimally invasive options with personalized, specialist-led care. Book your consultation."

// icon.png / apple-icon.png / opengraph-image.png / twitter-image.png live in
// this directory and are picked up by the App Router's file conventions.
export const metadata: Metadata = {
  // Needed so the OG/Twitter images resolve to absolute URLs. Override per
  // environment with NEXT_PUBLIC_SITE_URL.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://eliteminima.com"),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Elite Minima",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Elite Minima — The Surgical Speciality Clinic",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  generator: "Nextjs15",
}

// Brand green — tints the browser chrome on Android and the iOS status bar.
export const viewport: Viewport = {
  themeColor: "#17743C",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`antialiased ${lato.variable}`}>
      <head>

      </head>
      <body>

        {children}
      </body>
    </html>
  )
}