import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  FileText,
  Headphones,
  HeartHandshake,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Button from "../components/ui/Button";
const heroImage = "/assets/aboutbanner.png";
const helpLogo = "/assets/logo@523x182.png";
const storyImage = "/assets/laptop-support.png";

const trust = [
  [HeartHandshake, "Trusted Support", "Clear, customer-first guidance"],
  [ShieldCheck, "Secure Process", "Your information stays protected"],
  [Users, "Customer First", "Support built around your needs"],
];
const reasons = [
  [
    ShieldCheck,
    "Expert Guidance",
    "Practical support from experienced professionals.",
  ],
  [
    CheckCircle2,
    "Simple Process",
    "A clear, hassle-free way to raise a query.",
  ],
  [FileText, "Transparent Updates", "Use your reference ID to stay informed."],
  [
    Headphones,
    "Dedicated Support",
    "Help is available when you need direction.",
  ],
];

export default function About() {
  return (
    <main className="about-page overflow-hidden bg-white">
      <section className="about-hero">
        <div className="section-shell py-12 md:py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1350px] items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <p className="eyebrow">About Dispute Paisa</p>
              <h1 className="mt-3 max-w-[630px] text-[39px] font-extrabold leading-[1.08] tracking-[-.055em] text-brand-900 md:text-[51px]">
                Banking support{" "}
                <span className="text-brand-500">made simple</span>
              </h1>
              <p className="mt-5 max-w-[580px] text-[15px] leading-7 text-slate-600">
                We help people understand their banking concerns, raise
                structured queries, and move forward with confidence.
              </p>
              <div className="about-trust-grid mt-8">
                {trust.map(([Icon, title, copy]) => (
                  <div key={title} className="about-trust-item">
                    <span>
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-hero-image">
              <img src={heroImage} alt="Dispute Paisa banking support" />
              <span className="about-float-card">
                <ShieldCheck size={27} /> Resolve banking issues with clarity
              </span>
            </div>
          </div>
          <div className="about-stats mx-auto mt-10 grid max-w-[1350px] grid-cols-2 gap-y-5 rounded-2xl px-6 py-6 md:grid-cols-4 md:px-10">
            {[
              [FileText, "10K+", "Queries raised"],
              [ShieldCheck, "99%", "Resolution support"],
              [Users, "5000+", "Happy customers"],
              [Building2, "Major banks", "Supported"],
            ].map(([Icon, stat, label]) => (
              <div
                key={String(stat)}
                className="text-center md:border-r md:border-brand-200 last:border-0"
              >
                <Icon className="mx-auto text-brand-500" size={25} />
                <strong className="mt-2 block text-xl font-extrabold text-brand-900">
                  {stat}
                </strong>
                <span className="text-[11px] font-semibold text-slate-600">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story-section section-shell py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1350px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <img
            src={storyImage}
            alt="Dispute Paisa on laptop"
            className="about-story-image"
          />
          <div>
            <p className="eyebrow">Our purpose</p>
            <h2 className="mt-3 max-w-xl text-[35px] font-extrabold leading-[1.1] tracking-[-.045em] text-brand-900">
              A fairer way to navigate{" "}
              <span className="text-brand-500">banking concerns.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">
              Banking problems can feel frustrating and difficult to understand.
              Dispute Paisa brings clarity to the process through structured
              guidance and transparent support.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                [
                  Target,
                  "Our Mission",
                  "Make dispute support more accessible and easier to understand.",
                ],
                [
                  Eye,
                  "Our Vision",
                  "Be India’s trusted partner for fair, transparent banking support.",
                ],
              ].map(([Icon, title, copy]) => (
                <article key={title} className="about-value-card">
                  <span>
                    <Icon size={25} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-support-section section-shell py-14 lg:py-20">
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-2xl">
            <p className="eyebrow">Why choose us</p>
            <h2 className="mt-3 text-[34px] font-extrabold tracking-[-.045em] text-brand-900">
              Support that stays{" "}
              <span className="text-brand-500">clear and human.</span>
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">
              From your first question through every update, the experience is
              designed to be straightforward and reassuring.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([Icon, title, copy]) => (
              <article key={title} className="about-reason">
                <span>
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1350px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">How we help</p>
            <h2 className="mt-3 text-[37px] font-extrabold leading-[1.1] tracking-[-.05em] text-brand-900">
              Supporting you{" "}
              <span className="text-brand-500">every step of the way.</span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              From understanding your issue to getting it resolved, Dispute
              Paisa stays with you throughout the process.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Understand your concern",
                "Guide you with the right solution",
                "Coordinate with the concerned bank",
                "Keep you updated until resolution",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold text-brand-900"
                >
                  <CheckCircle2 size={20} className="text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-help-logo">
            <img src={helpLogo} alt="Dispute Paisa" />
          </div>
        </div>
      </section>

      <section className="section-shell pb-12 pt-10 lg:pb-16">
        <div className="about-cta mx-auto max-w-[1350px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">
              Ready when you are
            </p>
            <h2>
              Let’s move your banking concern <span>forward.</span>
            </h2>
            <p>Start with a query and get clear next-step guidance.</p>
          </div>
          <Button variant="white" href="/#query">
            Raise a Query <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </main>
  );
}
