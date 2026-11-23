import { ArrowRight, Building2, Check, FilePlus2, Play, ShieldCheck, UsersRound } from "lucide-react";
import Button from "../ui/Button";
import { motion, useReducedMotion } from "../ui/Motion";

const trustPoints = [
  [ShieldCheck, "Secure by design", "Your details stay protected"],
  [Building2, "Multi-bank support", "Across leading Indian banks"],
  [UsersRound, "Guided resolution", "Know the next step, always"],
];

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="reference-hero">
      <motion.div className="reference-hero-art" aria-hidden="true" initial={reduced ? false : { scale: 1.04, opacity: 0 }} animate={reduced ? undefined : { scale: 1, opacity: 1 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
      <div className="section-shell reference-hero-shell">
        <motion.div className="reference-hero-content" initial={reduced ? false : { opacity: 0, y: 22 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .72, delay: .12, ease: [0.22, 1, 0.36, 1] }}>
          <motion.p className="reference-hero-eyebrow" initial={reduced ? false : { opacity: 0, x: -12 }} animate={reduced ? undefined : { opacity: 1, x: 0 }} transition={{ duration: .5, delay: .2 }}>Banking-dispute assistance</motion.p>
          <h1><motion.span className="hero-line" initial={reduced ? false : { opacity: 0, y: 18 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .58, delay: .3 }}>Having a problem</motion.span><br /><motion.span className="hero-line" initial={reduced ? false : { opacity: 0, y: 18 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .58, delay: .4 }}>with <span>your bank?</span></motion.span></h1>
          <motion.p className="reference-hero-copy" initial={reduced ? false : { opacity: 0 }} animate={reduced ? undefined : { opacity: 1 }} transition={{ duration: .55, delay: .55 }}>You don't have to navigate it alone. Tell us what happened and get a clear, guided path from complaint to resolution.</motion.p>
          <motion.div className="reference-hero-actions" initial={reduced ? false : { opacity: 0, y: 10 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .5, delay: .65 }}>
            <Button href="#query" className="reference-hero-primary"><FilePlus2 size={21} /> Raise a Query <ArrowRight size={20} /></Button>
            <Button variant="outline" href="/how-it-works" className="reference-hero-secondary"><span className="reference-hero-play"><Play size={13} fill="currentColor" /></span>Watch How It Works</Button>
          </motion.div>
          <div className="reference-hero-trust">
            {trustPoints.map(([Icon, title, detail]) => (
              <div className="reference-hero-trust-item" key={title}><Icon size={32} strokeWidth={1.8} /><div><strong>{title}</strong><small>{detail}</small></div></div>
            ))}
          </div>
        </motion.div>
        <div className="mobile-reference-hero-content relative z-10 w-full py-9">
          <div className="eyebrow">Safe banking. Stronger you.</div>
          <h1 className="mt-3 max-w-[11ch] text-[37.6px] font-extrabold leading-[1.1] tracking-[-0.035em] text-brand-900">
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
