import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BRAND_FULL, IMAGES } from "../elite-minima/config"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1e2839] bg-[#080c14]/95 text-[#f4f6fa] backdrop-blur-[10px]">
      <div className="mx-auto flex min-h-16 w-full max-w-[1320px] flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <Link href="/gynecomastias" className="flex shrink-0 items-center" aria-label={`${BRAND_FULL} home`}>
          <span className="flex items-center bg-white px-3 py-2">
            <Image
              src={IMAGES.logoLockup}
              alt={BRAND_FULL}
              width={776}
              height={180}
              priority
              className="h-7 w-auto sm:h-8"
            />
          </span>
        </Link>
        <Link
          href="/gynecomastias"
          className="inline-flex items-center gap-2 rounded-md border border-[#2c3853] px-3 py-2.5 text-xs font-semibold text-[#f4f6fa] transition-colors hover:border-[#3fbf77] hover:text-[#3fbf77] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3fbf77] sm:px-4 sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </header>
  )
}
