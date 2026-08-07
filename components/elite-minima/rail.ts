"use client"

import { useEffect, useState } from "react"

/**
 * Shared bits for the snap-scrolling card rails — the treatment options and the
 * specialists. Both are the same thing at different sizes: a grid that becomes
 * a horizontal scroller under some breakpoint, advancing itself until the
 * reader takes hold of it. Both therefore need the same two answers, and having
 * them in one place keeps the two rails stepping identically.
 */

/**
 * Distance from one card to the next, gap included.
 *
 * Measured off the rendered cards rather than derived from the width classes,
 * so a change to the card width or the gap can't silently desync the stepping
 * from what is on screen. Falls back to a single card's width when there is
 * nothing to measure against, and never returns 0 — callers divide by it.
 */
export function stepOf(el: HTMLElement) {
  const kids = Array.from(el.children) as HTMLElement[]
  if (kids.length > 1) return kids[1].offsetLeft - kids[0].offsetLeft
  return kids[0]?.offsetWidth || 1
}

/**
 * True while the viewport is narrower than `px` — i.e. while the rail is a
 * scroller rather than a grid. Pass the same breakpoint the `sm:`/`lg:` classes
 * on the rail switch at.
 *
 * Starts false so the server render and the first client render agree. Nothing
 * is drawn from it: the rails only use it to decide whether to run their own
 * timer, which cannot start before mount in any case.
 */
export function useUnder(px: number) {
  const [under, setUnder] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${px - 0.02}px)`)
    const sync = () => setUnder(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [px])

  return under
}
