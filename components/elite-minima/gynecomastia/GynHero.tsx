"use client"

const BANNER_URL = "banner-3.png"
const BANNER_URLS = "banner-mbl.png"

export default function GynHero() {
  function scrollToForm() {
    const el = document.getElementById("book")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      id="top"
      onClick={scrollToForm}
      role="button"
      tabIndex={0}
      aria-label="Book a consultation"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          scrollToForm()
        }
      }}
      className="relative w-full cursor-pointer overflow-hidden"
    >
      <h1 className="sr-only">Gynecomastia Surgery in Chennai</h1>

      {/* Mobile image (hidden on lg+) */}
      <div
        className="block w-full lg:hidden"
        style={{
          backgroundImage: `url('${BANNER_URLS}')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          minHeight: "148vw",
        }}
      />

      {/* Desktop image (hidden below lg) */}
      <div
        className="hidden w-full lg:block"
        style={{
          backgroundImage: `url('${BANNER_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "420px",
          maxHeight: "620px",
          height: "45vw",
        }}
      />
    </section>
  )
}
