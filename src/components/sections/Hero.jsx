import { ArrowRight, Building2, Check, FilePlus2, Play, ShieldCheck, UsersRound } from "lucide-react";
import Button from "../ui/Button";

const trustPoints = [
  [ShieldCheck, "Secure by design", "Your details stay protected"],
  [Building2, "Multi-bank support", "Across leading Indian banks"],
  [UsersRound, "Guided resolution", "Know the next step, always"],
];

export default function Hero() {
  return (
    <section id="home" className="reference-hero">
      <div className="reference-hero-art" aria-hidden="true" />
      <div className="section-shell reference-hero-shell">
        <div className="reference-hero-content">
          <p className="reference-hero-eyebrow">Banking-dispute assistance</p>
          <h1>Having a problem<br />with <span>your bank?</span></h1>
          <p className="reference-hero-copy">You don't have to navigate it alone. Tell us what happened and get a clear, guided path from complaint to resolution.</p>
          <div className="reference-hero-actions">
            <Button href="#query" className="reference-hero-primary"><FilePlus2 size={21} /> Raise a Query <ArrowRight size={20} /></Button>
            <Button variant="outline" href="/how-it-works" className="reference-hero-secondary"><span className="reference-hero-play"><Play size={13} fill="currentColor" /></span>Watch How It Works</Button>
          </div>
          <div className="reference-hero-trust">
            {trustPoints.map(([Icon, title, detail]) => (
              <div className="reference-hero-trust-item" key={title}><Icon size={32} strokeWidth={1.8} /><div><strong>{title}</strong><small>{detail}</small></div></div>
            ))}
          </div>
        </div>
        <div className="mobile-reference-hero-content relative z-10 w-full py-9">
          <div className="eyebrow">Safe banking. Stronger you.</div>
          <h1 className="mt-3 max-w-[11ch] text-[31px] font-extrabold leading-[1.1] tracking-[-0.035em] text-brand-900">
            Having a problem with your bank?
          </h1>
          <p className="mt-4 max-w-[34ch] text-[15px] leading-6 text-slate-600">
            File your banking complaint, track the status, and get expert guidance to navigate your dispute with confidence.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <Button href="#query" className="!h-[52px] !w-full !justify-center !gap-2 !rounded-2xl !px-4 !text-[13px] active:!scale-[0.98]">
              Raise a Query <ArrowRight size={14} className="shrink-0" />
            </Button>
            <Button variant="outline" href="/how-it-works" className="!h-10 !w-full !justify-center !gap-1.5 !rounded-xl !px-3 !py-2 !text-[12px] active:!scale-[0.98]">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-white"><Play size={10} fill="white" /></span>
              <span>How It Works</span>
            </Button>
          </div>
          <div className="mt-5 flex rounded-2xl border border-brand-100 bg-white/80 px-3 py-3 text-[12px] font-semibold text-slate-600 shadow-sm">
            <span className="inline-flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500 text-white"><Check size={12} /></span>Trusted &amp; Secure</span>
            <span className="ml-auto inline-flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500 text-white"><Check size={12} /></span>Guided Resolution</span>
          </div>
        </div>
      </div>
    </section>
  );
}
