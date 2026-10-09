import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function LegalPolicyLayout({
  title,
  introduction,
  sections,
  effectiveDate = "06/10/2026",
  lastUpdated = "06/10/2026",
}) {
  return (
    <main className="min-h-screen bg-white">
      <section className="section-soft">
        <div className="section-shell py-12 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium text-brand-900">
            <Link to="/" className="hover:text-brand-500">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <Link to="/privacy-center" className="hover:text-brand-500">Privacy Center</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span aria-current="page" className="text-slate-600">{title}</span>
          </nav>
          <p className="eyebrow">LEGAL POLICIES</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-[-.05em] text-brand-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            {introduction}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Effective Date: {effectiveDate} <span className="mx-2">|</span> Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl space-y-5">
          {sections.map((section, index) => (
            <article key={`${section.title}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-8">
              <h2 className="text-lg font-extrabold text-brand-900 sm:text-xl">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-600">{paragraph}</p>
              ))}
              {section.items?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.paragraphs2?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-600">{paragraph}</p>
              ))}
              {section.orderedItems?.length ? (
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {section.orderedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ) : null}
            </article>
          ))}
          <p className="px-1 pt-2 text-sm text-slate-500">
            Questions about this policy? Contact{" "}
            <a className="font-semibold text-brand-600 hover:underline" href="mailto:support@disputepaisa.com">
              support@disputepaisa.com
            </a>.
          </p>
          <Link to="/privacy-center" className="inline-flex items-center gap-1 pt-2 text-sm font-bold text-brand-600 hover:text-brand-700">
            <ChevronRight size={16} className="rotate-180" />
            Back to Privacy Center
          </Link>
        </div>
      </section>
    </main>
  );
}
