import { ArrowRight, FileText, Search, ShieldCheck } from "lucide-react";
import { motion } from "../ui/Motion";

const bannerFeatures = [
  {
    icon: FileText,
    title: "Raise a Complaint",
    subtitle: "For banking & financial issues",
  },
  {
    icon: Search,
    title: "Track Anytime",
    subtitle: "Get real-time updates",
  },
  {
    icon: ShieldCheck,
    title: "Get Resolution",
    subtitle: "With expert support",
  },
];

export default function FinalCTA() {
  return (
    <section className="section-shell pb-10 pt-4 md:pt-2">
      <motion.div
        className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#014cb8] via-[#035ecc] to-[#0873e4] px-6 py-9 shadow-2xl sm:px-10 sm:py-12 lg:px-12 lg:py-14"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left Column: Headline & Actions */}
          <div className="w-full flex-1 lg:max-w-[58%] xl:max-w-[62%]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-white">
              <span className="h-3.5 w-1 rounded-full bg-[#00d2b4]" />
              <span>YOUR BANKING RIGHTS MATTER</span>
            </div>

            {/* Headline */}
            <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white sm:text-[36px] xl:text-[42px]">
              Have a banking problem?<br />
              Start with your query
            </h2>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#query"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[14px] font-extrabold text-[#0056c6] shadow-md transition-all hover:bg-blue-50 active:scale-95"
              >
                <span>Raise a Query</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#track"
                className="inline-flex items-center justify-center rounded-xl border border-white/60 bg-transparent px-6 py-3.5 text-[14px] font-extrabold text-white transition-all hover:bg-white/10 active:scale-95"
              >
                Track Existing Query
              </a>
            </div>
          </div>

          {/* Right Column: Vertical Divider & 3 Features */}
          <div className="w-full border-t border-white/20 pt-6 sm:w-auto lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-14">
            <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap lg:flex-col">
              {bannerFeatures.map(({ icon: Icon, title, subtitle }) => (
                <div key={title} className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/20 bg-white/15 text-white backdrop-blur-sm shadow-sm">
                    <Icon size={19} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-extrabold leading-tight text-white">
                      {title}
                    </h4>
                    <p className="mt-0.5 text-[12.5px] text-blue-100">
                      {subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ambient bottom wave overlay */}
        <div
          className="pointer-events-none absolute -bottom-10 right-0 h-48 w-full bg-gradient-to-t from-blue-400/15 to-transparent blur-2xl"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}
