import { ArrowRight } from "lucide-react";
const phoneImage = "/assets/homepagebanner.png";
import { assistanceFeatures } from "../../data/constants";
import Button from "../ui/Button";

export default function Services() {
  return (
    <section className="expert-assistance section-shell py-14 lg:py-20">
      <div className="expert-assistance-grid grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
        <div className="expert-assistance-content">
          <p className="eyebrow">Expert assistance</p>
          <h2 className="section-title mt-3">Banking dispute <span>assistance</span></h2>
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

        <div className="expert-visual">
          <span className="expert-callout expert-callout-file">File Complaint<small>Quick &amp; secure</small></span>
          <span className="expert-callout expert-callout-guide">Get Expert Guidance<small>From banking experts</small></span>
          <span className="expert-callout expert-callout-track">Track Status<small>Stay updated</small></span>
          <span className="expert-callout expert-callout-banks">All Major Banks<small>Across India</small></span>
          <img
            src={phoneImage}
            alt="Dispute Paisa expert assistance"
            className="expert-phone"
          />
        </div>
      </div>
    </section>
  );
}
