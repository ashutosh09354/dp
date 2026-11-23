import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function formatPolicyText(text) {
  const formattedText = text.replace(/\[([^\]]+)\]/g, (placeholder, field) => {
    const normalizedField = field.toLowerCase();

    if (normalizedField.includes("legal") || normalizedField.includes("company")) {
      return "TELERING PROCESS PRIVATE LIMITED";
    }
    if (normalizedField.includes("address") || normalizedField.includes("office")) {
      return "3rd floor, amberhai, Plot no.3, Sector 19, Nanda Enclave, Dwarka, Delhi, 110075";
    }
    if (normalizedField.includes("email")) {
      return "support@disputepaisa.com";
    }
    if (normalizedField.includes("phone") || normalizedField.includes("contact number")) {
      return "+91 81309 09462";
    }
    return "NA";
  });

  return formattedText
    .replace(/Phone\/WhatsApp: NA/g, "Phone/WhatsApp: +91 81309 09462")
    .replace(/Phone: NA/g, "Phone: +91 81309 09462");
}

const contactSectionPattern = /contact information|contact details|contact us|contact and grievances|company and contact details/i;
const contactDetailPattern = /^(brand|company|legal entity|email|privacy email|grievance email|support email|refund email|phone|phone\/whatsapp|address|postal address|registered office|website|partner support email|privacy \/ data protection contact|grievance contact):/i;

function removeRepeatedContactDetails(sections) {
  return sections
    .filter((section) => !contactSectionPattern.test(section.title))
    .map((section) => ({
      ...section,
      paragraphs: section.paragraphs?.filter((text) => !contactDetailPattern.test(text)),
      paragraphs2: section.paragraphs2?.filter((text) => !contactDetailPattern.test(text)),
      items: section.items?.filter((text) => !contactDetailPattern.test(text)),
      orderedItems: section.orderedItems?.filter((text) => !contactDetailPattern.test(text)),
    }));
}

export default function LegalPolicyLayout({
  title,
  introduction,
  sections,
  effectiveDate = "06/10/2026",
  lastUpdated = "06/10/2026",
}) {
  const visibleSections = removeRepeatedContactDetails(sections);

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
          <h1 className="mt-3 max-w-4xl text-[29px] font-extrabold tracking-[-.05em] text-brand-900 sm:text-[35px] lg:text-[47px]">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            {formatPolicyText(introduction)}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Effective Date: {effectiveDate} <span className="mx-2">|</span> Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl space-y-5">
          {visibleSections.map((section, index) => (
            <article key={`${section.title}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-8">
              <h2 className="text-[16px] font-extrabold text-brand-900 sm:text-[18px]">{formatPolicyText(section.title)}</h2>
              {section.paragraphs?.length ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <li key={`${paragraphIndex}-${paragraph}`}>{formatPolicyText(paragraph)}</li>
                  ))}
                </ul>
              ) : null}
              {section.items?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {section.items.map((item) => (
                    <li key={item}>{formatPolicyText(item)}</li>
                  ))}
                </ul>
              ) : null}
              {section.paragraphs2?.length ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {section.paragraphs2.map((paragraph, paragraphIndex) => (
                    <li key={`${paragraphIndex}-${paragraph}`}>{formatPolicyText(paragraph)}</li>
                  ))}
                </ul>
              ) : null}
              {section.orderedItems?.length ? (
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {section.orderedItems.map((item) => (
                    <li key={item}>{formatPolicyText(item)}</li>
                  ))}
                </ol>
              ) : null}
            </article>
          ))}
          <article className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-8">
            <h2 className="text-[16px] font-extrabold text-brand-900 sm:text-[18px]">Contact Information</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
              <li>Company: TELERING PROCESS PRIVATE LIMITED</li>
              <li>Brand: DisputePaisa</li>
              <li>Email: <a href="mailto:support@disputepaisa.com" className="font-semibold text-brand-600 hover:text-brand-700">support@disputepaisa.com</a></li>
              <li>Phone/WhatsApp: <a href="tel:+918130909462" className="font-semibold text-brand-600 hover:text-brand-700">+91 81309 09462</a></li>
              <li>Address: 3rd floor, amberhai, Plot no.3, Sector 19, Nanda Enclave, Dwarka, Delhi, 110075</li>
            </ul>
          </article>
          <p className="px-1 pt-2 text-sm text-slate-500">
            Questions about this policy? Please use the Contact Information below.
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
