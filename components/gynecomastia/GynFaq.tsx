import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What causes gynecomastia?",
    answer:
      "Usually hormonal changes, and sometimes medicines, weight gain or other health factors cause gynecomastia. Often no single cause is found.",
  },
  {
    question: "Is gynecomastia surgery painful?",
    answer:
      "The surgery is done under anaesthesia. Yet you might feel some tingling and discomfort after the procedure.",
  },
  {
    question: "Will the scars be visible?",
    answer:
      "Incisions are small and placed around the areola or in natural lines, so scars are usually minimal and the visibility varies depending on the severity of the scar.",
  },
  {
    question: "Can gynecomastia be treated without surgery?",
    answer:
      "Some early or mild cases may be managed without surgery. Established gland tissue usually needs surgical removal.",
  },
  {
    question: "Will the gynecomastia come back after surgery?",
    answer:
      "Removed gland tissue does not grow back, but weight gain, certain medicines or hormonal factors can affect results.",
  },
]

export default function GynFaq() {
  return (
    <section
      id="faqs"
      aria-labelledby="gyn-faq-heading"
      className="border-t border-slate-200 bg-[var(--g-bone)] text-[var(--g-ink)]"
    >
      <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.75fr_1.5fr] lg:gap-16 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#17743c]">
            FAQs
          </p>
          <h2 id="gyn-faq-heading" className="mt-4 text-balance uppercase text-[1.5rem] font-bold leading-tight tracking-[0.16em] text-[var(--g-ink)] sm:text-[1.75rem]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="min-w-0 space-y-3">
          {faqs.map(({ question, answer }, index) => (
            <details
              key={question}
              className="group border border-slate-500 bg-[var(--g-bone)] text-[var(--g-ink)] transition-colors open:border-[#17743c]/40 open:bg-[#f7faf8]"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 rounded-xl p-5 text-left outline-offset-4 focus-visible:outline-[#17743c] marker:content-none sm:gap-4 sm:p-6 [&::-webkit-details-marker]:hidden">
                <span className="pt-0.5 text-xs font-semibold tabular-nums leading-6 text-[#17743c]" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                  {question}
                </span>
                <Plus
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-[#17743c] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  strokeWidth={1.5}
                />
              </summary>
              <p className="max-w-[75ch] px-5 pb-6 text-[0.95rem] leading-7 text-slate-600 sm:pl-14 sm:pr-6">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

