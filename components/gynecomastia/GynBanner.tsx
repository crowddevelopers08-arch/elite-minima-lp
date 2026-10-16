import { CalendarCheck, Clock3, HeartPulse, Stethoscope, Syringe } from "lucide-react"

const steps = [
  {
    title: "Consultation",
    description: "Chest examination, grading, and discussion of your goals and options.",
    icon: Stethoscope,
  },
  {
    title: "Surgery",
    description:
      "Surgery is performed under anaesthesia and typically takes around a few hours, depending on the individual case.",
    icon: Syringe,
  },
  {
    title: "Aftercare",
    description: "Compression garment, dressing and medicine instructions to be followed.",
    icon: HeartPulse,
  },
  {
    title: "Follow-up",
    description: "Review of healing and chest shape.",
    icon: CalendarCheck,
  },
]

export default function GynBanner() {
  return (
    <section
      id="procedure-recovery"
      aria-labelledby="procedure-recovery-heading"
      className="bg-[var(--g-base)] text-[var(--g-text)]"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--g-accent)]">
            Procedure &amp; Recovery
          </p>
          <h2 id="procedure-recovery-heading" className="mt-4 text-balance">
            Gynecomastia Surgery Procedure and Recovery Time
          </h2>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className="h-full rounded-xl border border-[var(--g-line)] bg-[var(--g-surface)] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--g-accent)]/20 bg-[var(--g-accent)]/10 text-[var(--g-accent)]">
                  <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl font-medium tabular-nums text-[var(--g-accent)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 normal-case!">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-[var(--g-dim)]">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-col gap-4 rounded-xl border border-[var(--g-line)] border-l-4 border-l-[var(--g-accent)] bg-[var(--g-surface)] p-6 sm:flex-row sm:gap-5 sm:p-8">
          <Clock3
            className="h-7 w-7 shrink-0 text-[var(--g-accent)]"
            aria-hidden="true"
            strokeWidth={1.5}
          />
          <div>
            <h3 className="normal-case!">Recovery Time</h3>
            <p className="mt-2 max-w-4xl text-[0.95rem] leading-7 text-[var(--g-dim)]">
              Recovery varies depending on the surgical technique and your healing progress.
              Our doctors will guide you on when you can safely resume your daily activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

