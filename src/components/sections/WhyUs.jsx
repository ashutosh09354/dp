import { Headphones, Landmark, ShieldCheck, Zap } from "lucide-react";
import { motion, Stagger, staggerItem } from "../ui/Motion";

const features = [
  {
    title: "Your Privacy Matters",
    text: "Your personal and banking information is handled securely.",
    icon: ShieldCheck,
  },
  {
    title: "Hassle-Free Process",
    text: "Submit your concern through a simple, guided process.",
    icon: Zap,
  },
  {
    title: "Guided Resolution",
    text: "Get assistance at every step of your banking dispute.",
    icon: Headphones,
  },
  {
    title: "Multi-Bank Assistance",
    text: "Get support for banking concerns across major Indian banks.",
    icon: Landmark,
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="section-shell py-12 md:py-16 lg:py-20">
      <div className="text-center">
        <p className="eyebrow">Built around your needs</p>
        <h2 className="section-title mt-2">Why choose Dispute Paisa?</h2>
        <p className="section-copy mx-auto mt-3">
          Trusted by thousands of customers across India for banking dispute assistance.
        </p>
      </div>
      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, text, icon: Icon }) => (
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -5 }}
            className="why-card group text-left"
            key={title}
          >
            <div className="flex items-center gap-3.5">
              <motion.span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#eaf2fc] text-[#1061d4] transition group-hover:bg-[#dfedfc]"
                whileHover={{ scale: 1.08, rotate: 4 }}
              >
                <Icon size={22} strokeWidth={2.2} />
              </motion.span>
              <h3 className="!mt-0 text-[16px] font-extrabold leading-snug tracking-[-0.02em] text-brand-900 sm:text-[17px]">
                {title}
              </h3>
            </div>
            <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
              {text}
            </p>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
