const BANNER_URL = "banner.png"

export default function GynBanner() {
  return (
    <section
      id="comparison"
      aria-label="Gynecomastia procedure comparison"
      className="w-full bg-[#f5f8f6] px-4 py-2 sm:px-8 sm:py-2 lg:py-4"
    >
      <div className="mx-auto max-w-[1320px]">
        <div
          role="region"
          aria-label="Procedure comparison image"
          aria-describedby="comparison-scroll-hint"
          tabIndex={0}
          className="overflow-x-auto rounded-xl  bg-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#16733c]"
        >
          <a
            href="#book"
            aria-label="Book a gynecomastia consultation"
            className="block min-w-[720px] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#16733c] md:min-w-0"
          >
            {/* Natural image height keeps every comparison visible. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BANNER_URL}
              alt="Comparison of conventional and minimally invasive gynecomastia approaches, including incision size, scar appearance, procedure time, recovery, blood loss, chest contouring and anaesthesia."
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
