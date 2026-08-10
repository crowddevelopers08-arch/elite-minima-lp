import type React from "react"
import { Oswald } from "next/font/google"

/**
 * Display face for the gynecomastia page only.
 *
 * The root layout loads Lato for the whole site; this route adds a condensed
 * uppercase companion on top of it, exposed as --font-oswald and picked up by
 * the `.gyn` scope in globals.css. Loading it here rather than in the root
 * layout keeps the extra font off / and /general, which never reference it.
 */
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
})

export default function GynecomastiaLayout({ children }: { children: React.ReactNode }) {
  return <div className={oswald.variable}>{children}</div>
}
