const BANNER_URL = "baner.png"
const BANNER_URLS = "https://res.cloudinary.com/m5fcfwt7/image/upload/v1788591937/banner-2mbl.png"

export default function GynHero() {
  return (
    <section id="top" className="relative w-full overflow-hidden">
      <h1 className="sr-only">Gynecomastia Surgery in Chennai</h1>

      {/* Mobile image (hidden on lg+) */}
      <div
        className="block w-full lg:hidden"
        style={{
          backgroundImage: `url('${BANNER_URLS}')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          minHeight: "188vw",
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
