import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BRAND_FULL, IMAGES } from "../config"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--e-line)] bg-white/95 text-[var(--e-ink)] backdrop-blur-[10px]">
      <div className="mx-auto flex min-h-16 w-full max-w-[1320px] flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <Link href="/circumcisions" className="flex shrink-0 items-center" aria-label={`${BRAND_FULL} home`}>
          <Image
            src={IMAGES.logoLockup}
            alt={BRAND_FULL}
            width={776}
            height={180}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>
        <Link
          href="/circumcisions"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--e-line)] px-3 py-2.5 text-xs font-semibold text-[var(--e-ink)] transition-colors hover:border-[var(--e-green)] hover:text-[var(--e-green-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--e-green)] sm:px-4 sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </header>
  )
}
