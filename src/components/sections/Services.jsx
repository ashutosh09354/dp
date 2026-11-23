import { ArrowRight } from "lucide-react";
import { assistanceFeatures } from "../../data/constants";
import Button from "../ui/Button";
import { motion, Reveal, Stagger, staggerItem } from "../ui/Motion";

export default function Services() {
  return (
    <section className="expert-assistance py-12 md:py-14 lg:py-20">
      <div className="section-shell expert-assistance-grid">
        <Reveal className="expert-assistance-content">
          <p className="eyebrow hidden md:inline-flex">Expert assistance</p>
          <h2 className="section-title mt-3 tracking-[.03em]">Banking dispute <span>assistance</span></h2>
          <p className="section-copy mt-3">
            Guidance for a smoother, stress-free banking experience with expert support at every step.
          </p>
          <Stagger className="expert-feature-grid mt-8 grid gap-4 sm:grid-cols-2" delay={.08}>
            {assistanceFeatures.map(([title, text, Icon]) => (
              <motion.a variants={staggerItem} whileHover={{ y: -4 }} href="#query" key={title} className="mini-service group">
                <motion.span className="icon-circle" whileHover={{ scale: 1.06, rotate: 4 }}><Icon size={19} /></motion.span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </motion.a>
            ))}
          </Stagger>
          <Button className="mt-8">Raise a Query <ArrowRight size={17} /></Button>
        </Reveal>
      </div>
    </section>
  );
}
