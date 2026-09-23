import { ArrowRight, Check, Play } from "lucide-react";
const heroImage = "/assets/image2.png";
import Button from "../ui/Button";

const trustBadges = ["Trusted & Secure", "Multi-bank support", "Guided Resolution"];

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#f7faff] lg:bg-[linear-gradient(115deg,#f8fcff_0%,#f0f8ff_48%,#eafbf7_100%)]">
      <div className="section-shell relative grid items-center gap-8 py-9 sm:gap-10 sm:py-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:py-16 xl:min-h-[620px] xl:py-0">

        {/* LEFT — content */}
        <div className="relative z-10 w-full lg:max-w-[680px]">
          <div className="eyebrow"> SAFE BANKING. STRONGER YOU.</div>
          <h1 className="mt-3 max-w-[11ch] text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-brand-900 md:mt-4 md:max-w-none md:text-[clamp(28px,7vw,54px)] md:leading-[1.07] md:tracking-[-0.04em] lg:text-[54px] xl:text-[64px]">
            Having a problem with your bank?{" "}
            {/* <span className="text-brand-500">Let's help you resolve it.</span> */}
          </h1>
          <p className="mt-4 max-w-[34ch] text-[15px] leading-6 text-slate-600 md:mt-5 md:max-w-lg md:text-[15px] md:leading-7 lg:max-w-[620px] lg:text-[18px] lg:leading-8">
            File your banking complaint, track the status, and get expert guidance to navigate your dispute with confidence.
          </p>

          {/* Buttons: forced onto one row on phone (flex-nowrap + shrunk size),
              full original size/spacing restored from sm upward. */}
          <div className="mt-6 flex flex-col gap-2 md:mt-7 md:flex-row md:flex-nowrap md:items-center md:gap-3">
            <Button
              href="#query"
              className="!h-14 !w-full !justify-center !gap-2 !rounded-2xl !px-4 !text-sm active:!scale-[0.98] md:!h-auto md:!w-auto md:!flex-none md:!gap-2 md:!rounded-lg md:!px-5 md:!py-3 md:!text-sm"
            >
              Raise a Query <ArrowRight size={14} className="shrink-0" />
            </Button>
            <Button
              variant="outline"
              href="/how-it-works"
              className="!h-11 !w-full !justify-center !gap-1.5 !rounded-xl !px-3 !py-2.5 !text-[13px] active:!scale-[0.98] md:!h-auto md:!w-auto md:!flex-none md:!gap-2 md:!rounded-lg md:!px-5 md:!py-3 md:!text-sm"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500 text-white sm:h-7 sm:w-7">
                <Play size={11} fill="white" />
              </span>
              <span className="whitespace-nowrap">
                <span className="sm:hidden">How It Works</span>
                <span className="hidden sm:inline">Watch How It Works</span>
              </span>
            </Button>
          </div>

          <div className="mt-5 flex rounded-2xl border border-brand-100 bg-white/80 px-3 py-3 text-[12px] font-semibold text-slate-600 shadow-sm md:mt-8 md:flex md:flex-wrap md:gap-x-6 md:gap-y-3 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:text-[13px] md:shadow-none">
            {trustBadges.map((label) => (
              <span
                key={label}
                className={`items-center gap-2 ${label === "Multi-bank support" ? "hidden md:inline-flex" : "inline-flex"} ${label === "Guided Resolution" ? "ml-auto md:ml-0" : ""}`}
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500 text-white">
                  <Check size={12} />
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — banner image: hidden on phone/tablet, shown from lg (desktop) up.
            Desktop layout/appearance is unchanged. */}
        <div
          aria-hidden="true"
          className="hero-visual relative hidden w-full items-center lg:flex"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

      </div>
    </section>
  );
}
