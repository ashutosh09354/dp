import { ArrowRight } from "lucide-react";
import { assistanceFeatures } from "../../data/constants";
import Button from "../ui/Button";

export default function Services() {
  return (
    <section className="expert-assistance hidden py-14 md:block lg:py-20">
      <div className="section-shell expert-assistance-grid">
        <div className="expert-assistance-content">
          <p className="eyebrow hidden md:inline-flex">Expert assistance</p>
          <h2 className="section-title mt-3 tracking-[.03em]">Banking dispute <span>assistance</span></h2>
          <p className="section-copy mt-3">
            Guidance for a smoother, stress-free banking experience with expert support at every step.
          </p>
          <div className="expert-feature-grid mt-8 grid gap-4 sm:grid-cols-2">
            {assistanceFeatures.map(([title, text, Icon]) => (
              <a href="#query" key={title} className="mini-service group">
                <span className="icon-circle"><Icon size={19} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </a>
            ))}
          </div>
          <Button className="mt-8">Raise a Query <ArrowRight size={17} /></Button>
        </div>
      </div>
    </section>
  );
}
