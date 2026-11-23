import { ArrowRight } from "lucide-react";
import { issues } from "../../data/constants";
import { motion, Stagger, staggerItem } from "../ui/Motion";

export default function ProblemExplorer({ onIssue }) {
  return (
    <section className="section-shell py-10 md:py-12 lg:py-14" id="services">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Select your concern</p>
          <h2 className="section-title mt-2">Facing any of these banking problems?</h2>
        </div>
        <a
          href="#services"
          className="hidden shrink-0 text-sm font-bold text-brand-500 md:inline-flex items-center gap-1 hover:underline"
        >
          View all issues <ArrowRight size={14} />
        </a>
      </div>
      <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {issues.map(({ title, text, icon: Icon, bgGradient, iconColor, shadowColor }) => (
          <motion.button
            variants={staggerItem}
            whileHover={{ y: -5 }}
            whileTap={{ scale: .99 }}
            key={title}
            onClick={() => onIssue(title)}
            className="problem-card group flex flex-col justify-start p-4 text-left sm:p-5"
          >
            <div className="flex items-center gap-3.5">
              <motion.span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${iconColor || "text-white"}`}
                style={{
                  background: bgGradient,
                  boxShadow: shadowColor ? `0 6px 16px ${shadowColor}` : undefined,
                }}
                whileHover={{ rotate: 5, scale: 1.08 }}
                transition={{ duration: .2 }}
              >
                <Icon size={21} strokeWidth={2.4} />
              </motion.span>
              <h3 className="!mt-0 text-[14.5px] font-extrabold leading-snug text-brand-900 transition-colors group-hover:text-brand-500">
                {title}
              </h3>
            </div>
            <p className="mt-3 line-clamp-2 text-[12.5px] leading-5 text-slate-500">
              {text}
            </p>
          </motion.button>
        ))}
      </Stagger>
    </section>
  );
}
