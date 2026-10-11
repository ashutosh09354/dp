import { Link } from "react-router-dom";
import {
  ChevronRight,
  CreditCard,
  FileText,
  MessageCircle,
  Scale,
  Shield,
  ShieldCheck,
  UploadCloud,
  Users,
} from "lucide-react";

const categories = [
  {
    title: "Privacy & Data",
    description: "How we collect, use and protect your data.",
    icon: Shield,
    tone: "blue",
    policies: [
      ["Privacy Policy", "/legal-policies/privacy-policy"],
      ["Cookie Policy", "/legal-policies/cookie-policy"],
      ["Consent & Data Processing Notice", "/legal-policies/consent-data-processing-notice"],
      ["Data Retention and Deletion Policy", "/legal-policies/data-retention-deletion-policy"],
      ["Account Deletion & Data Rights Procedure", "/legal-policies/account-deletion-data-rights-procedure"],
    ],
  },
  {
    title: "User & Services",
    description: "Policies related to platform usage and services.",
    icon: FileText,
    tone: "orange",
    policies: [
      ["Terms & Conditions", "/legal-policies/terms-conditions"],
      ["User Acceptance and Consent Policy", "/legal-policies/user-acceptance-consent-policy"],
      ["Service Disclaimer", "/legal-policies/service-disclaimer"],
      ["Case Registration & Service Policy", "/legal-policies/case-registration-service-policy"],
      ["Legal Services & Third-Party Representation Disclosure", "/legal-policies/legal-services-third-party-representation-disclosure"],
    ],
  },
  {
    title: "Payments & Refunds",
    description: "Payment related policies.",
    icon: CreditCard,
    tone: "green",
    policies: [
      ["Payment Terms & Conditions", "/legal-policies/payment-terms-conditions"],
      ["Refund & Cancellation Policy", "/legal-policies/refund-cancellation-policy"],
    ],
  },
  {
    title: "Verification & Security",
    description: "Policies for document verification and security.",
    icon: UploadCloud,
    tone: "pink",
    policies: [
      ["Document Upload & Verification Policy", "/legal-policies/document-upload-verification-policy"],
      ["Information Security Policy", "/legal-policies/information-security-policy"],
    ],
  },
  {
    title: "Communication & Support",
    description: "How we communicate and resolve issues.",
    icon: MessageCircle,
    tone: "purple",
    policies: [
      ["Customer Communication Policy", "/legal-policies/customer-communication-policy"],
      ["Grievance Redressal Policy", "/legal-policies/grievance-redressal-policy"],
    ],
  },
  {
    title: "Partners",
    description: "Policies for retailers and partners.",
    icon: Users,
    tone: "blue",
    policies: [["Retailer & Partner Terms and Conditions", "/legal-policies/retailer-partner-terms-conditions"]],
  },
];

const toneClasses = {
  blue: {
    header: "bg-blue-50/90",
    icon: "bg-blue-100 text-blue-600",
  },
  orange: {
    header: "bg-orange-50/90",
    icon: "bg-orange-100 text-orange-500",
  },
  green: {
    header: "bg-emerald-50/90",
    icon: "bg-emerald-100 text-emerald-500",
  },
  pink: {
    header: "bg-rose-50/90",
    icon: "bg-rose-100 text-rose-500",
  },
  purple: {
    header: "bg-violet-50/90",
    icon: "bg-violet-100 text-violet-500",
  },
};

function HeroArtwork() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] items-center justify-center md:flex">
      <div className="absolute right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sky-300/30 blur-[1px] lg:right-24 lg:h-80 lg:w-80" />
      <div className="relative mr-8 flex h-52 w-72 rotate-[-5deg] items-start rounded-[1.4rem] border border-white/80 bg-white/75 p-7 shadow-[0_20px_45px_rgba(33,120,215,0.18)] backdrop-blur-sm lg:mr-20 lg:h-56 lg:w-80">
        <div className="w-full pt-1">
          <div className="mb-5 h-2.5 w-3/4 rounded-full bg-blue-300" />
          <div className="mb-3 h-2 w-full rounded-full bg-blue-200" />
          <div className="mb-3 h-2 w-[88%] rounded-full bg-blue-200" />
          <div className="mb-5 h-2 w-[72%] rounded-full bg-blue-200" />
          <div className="mb-3 h-2 w-3/4 rounded-full bg-blue-200" />
          <div className="h-2 w-1/2 rounded-full bg-blue-200" />
        </div>
        <div className="absolute -right-8 bottom-[-18px] grid h-24 w-24 place-items-center rounded-3xl border-4 border-blue-200 bg-blue-600 text-white shadow-lg lg:h-28 lg:w-28">
          <ShieldCheck size={56} strokeWidth={2.5} />
        </div>
      </div>
      <Scale className="absolute right-5 top-1/2 h-28 w-28 -translate-y-1/2 text-blue-500/40 lg:right-12 lg:h-36 lg:w-36" strokeWidth={1.4} />
    </div>
  );
}

function PolicyCard({ category }) {
  const Icon = category.icon;
  const tone = toneClasses[category.tone];

  return (
    <article className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-[0_6px_18px_rgba(20,119,232,0.09)]">
      <header className={`flex min-h-[74px] items-center gap-4 px-4 py-3 ${tone.header} sm:px-5`}>
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${tone.icon}`}>
          <Icon size={29} strokeWidth={2.5} />
        </span>
        <div className="min-w-0">
          <h2 className="text-[14px] font-extrabold tracking-tight text-brand-900">{category.title}</h2>
          <p className="mt-0.5 text-xs leading-5 text-slate-600">{category.description}</p>
        </div>
      </header>
      <ul className="px-5 pb-3">
        {category.policies.map(([label, to]) => (
          <li key={label} className="border-b border-slate-100 last:border-b-0">
            <Link
              to={to}
              className="flex min-h-9 items-center justify-between gap-3 py-2 text-[13px] font-medium leading-5 text-brand-900 transition hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              <span>{label}</span>
              <ChevronRight size={16} className="shrink-0 text-slate-400" />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function PrivacyCenter() {
  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <section className="relative isolate overflow-hidden border-b border-blue-100 bg-[linear-gradient(110deg,#e7f5ff_0%,#d7edff_48%,#a9d9ff_100%)]">
        <div aria-hidden="true" className="absolute -bottom-32 left-[30%] h-64 w-[60%] rounded-[50%] bg-white/35 blur-2xl" />
        <HeroArtwork />
        <div className="section-shell relative py-9 sm:py-10 lg:py-11">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-medium text-brand-900">
            <Link to="/" className="hover:text-brand-500">Home</Link>
            <ChevronRight size={14} className="text-slate-500" />
            <span aria-current="page">Privacy Center</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-[35px] font-extrabold tracking-[-.05em] text-[#091b54] sm:text-[47px] lg:text-[51px]">
              Privacy Center
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#405d8d] sm:text-base sm:leading-6">
              Policies, terms and important information for using Dispute Paisa.
              <span className="block">We believe in transparency. Here you can find all our policies and legal documents.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-5 sm:py-6 lg:py-7">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {categories.map((category) => (
            <PolicyCard key={category.title} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}
