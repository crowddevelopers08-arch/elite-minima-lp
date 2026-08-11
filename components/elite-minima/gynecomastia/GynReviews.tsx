"use client"

import { ArrowUpRight, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import CountUp from "../CountUp"
import { Reveal, Stagger, StaggerItem } from "../motion"
import { track } from "../track"
import { GOOGLE_REVIEW_FALLBACK_URL } from "../config"
import { GYN_BRANCH, REVIEWS, REVIEW_PROOF, REVIEWS_INTRO } from "./content"

/**
 * Patient experiences presented as a carousel.
 * Displays all reviews in a single row with navigation controls.
 */
export default function GynReviews() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && carouselRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const totalWidth = carouselRef.current.scrollWidth
        const maxScrollValue = totalWidth - containerWidth
        setMaxScroll(maxScrollValue)
        
        // Calculate card width based on visible cards
        const cardElement = carouselRef.current.querySelector('article')
        if (cardElement) {
          const cardWidthValue = cardElement.offsetWidth + 16 // including gap
          setCardWidth(cardWidthValue)
        }
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = cardWidth || 400
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount)
      
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      setScrollPosition(newPosition)
    }
  }

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft)
    }
  }

  const canScrollLeft = scrollPosition > 0
  const canScrollRight = scrollPosition < maxScroll - 10

  return (
    <section id="reviews" className="bg-[var(--g-bone)] text-[var(--g-ink)]">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-10 sm:px-8 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-[46ch]">
            <p className="g-eyebrow g-eyebrow--ink">Patient Reviews</p>
            <h2 className="mt-5">{REVIEWS_INTRO.title}</h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-[var(--g-ink-dim)]">{REVIEWS_INTRO.body}</p>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-none gap-10 border-[var(--g-bone-line)] sm:border-l sm:pl-8">
            {REVIEW_PROOF.map((p) => (
              <div key={p.label}>
                <p className="g-display text-[clamp(2rem,1.4rem+1.8vw,2.9rem)] leading-none text-[var(--g-ink)]">
                  <CountUp end={p.value} suffix={p.suffix} separator="," />
                </p>
                <p className="mt-2 max-w-[12ch] text-[0.76rem] uppercase tracking-[0.14em] text-[var(--g-ink-dim)]">{p.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-8 sm:mt-12">
          {/* Carousel Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full bg-[var(--g-ink)] p-2 text-[var(--g-bone)] shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-0 disabled:pointer-events-none lg:-translate-x-5 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-[var(--g-ink)] p-2 text-[var(--g-bone)] shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-0 disabled:pointer-events-none lg:translate-x-5 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Scrollable Carousel */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="scrollbar-hide flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div
              ref={carouselRef}
              className="flex gap-4 flex-nowrap"
            >
              {REVIEWS.map((r, i) => (
                <article
                  key={r.name}
                  className="relative flex flex-col min-w-[300px] max-w-[400px] flex-1 shrink-0 snap-start bg-[var(--g-bone)] border border-[var(--g-bone-line)] rounded-lg p-7 transition-colors duration-300 hover:bg-[var(--g-bone-2)] sm:p-9"
                >
                  <span
                    aria-hidden
                    className="g-numeral g-numeral--ink pointer-events-none absolute right-6 top-6 text-[3.4rem] transition-colors duration-300 group-hover:[-webkit-text-stroke-color:var(--g-accent-deep)]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-1" role="img" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-[var(--g-accent-deep)] text-[var(--g-accent-deep)]" aria-hidden />
                    ))}
                  </div>

                  <p className="mt-4 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[var(--g-ink-dim)]">{r.tag}</p>

                  <blockquote className="mt-5 flex-1 pr-10 text-[1rem] leading-relaxed text-[var(--g-ink)]">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>

                  <footer className="mt-7 flex items-baseline gap-3 border-t border-[var(--g-bone-line)] pt-5">
                    <span className="g-display text-[1.05rem] leading-none text-[var(--g-ink)]">{r.name}</span>
                    <span className="text-[0.8rem] text-[var(--g-ink-dim)]">{r.place}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        {REVIEWS.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {REVIEWS.map((_, index) => {
              const cardIndex = index
              const isActive = Math.abs(scrollPosition / (maxScroll || 1)) >= cardIndex / (REVIEWS.length - 1) - 0.1
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (containerRef.current) {
                      const targetScroll = (index / (REVIEWS.length - 1)) * maxScroll
                      containerRef.current.scrollTo({
                        left: targetScroll,
                        behavior: 'smooth'
                      })
                      setScrollPosition(targetScroll)
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'w-8 bg-[var(--g-accent-deep)]' 
                      : 'w-2 bg-[var(--g-bone-line)] hover:bg-[var(--g-ink-dim)]'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              )
            })}
          </div>
        )}

        <Reveal delay={0.05} className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[52ch] text-[0.82rem] leading-relaxed text-[var(--g-ink-dim)]">
            Individual experiences, treatment requirements, and recovery vary between patients.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={GOOGLE_REVIEW_FALLBACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("google_reviews_click", { branch: GYN_BRANCH, section: "reviews" })}
              className="g-btn g-btn-ink-line w-full sm:w-auto"
            >
              See us on Google
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#book"
              onClick={() => track("book_click", { branch: GYN_BRANCH, section: "reviews" })}
              className="g-btn g-btn-ink w-full sm:w-auto"
            >
              Book a consultation
            </a>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}