import { useEffect, useState } from "react";
import { Plus, Star } from "lucide-react";

import { faqs } from "../../data/constants";

const testimonials = [
  {
    id: 1,
    quote:
      "Mera refund kai hafton se atak gaya tha. DisputePaisa ne mujhe process samjhaya aur akhir mein mera paisa mil gaya.",
    name: "Priya S.",
    location: "Bengaluru",
  },
  {
    id: 2,
    quote:
      "Mujhe samajh nahi aa raha tha ki banking complaint kaise raise karni hai. DisputePaisa ne poora process bahut simple aur easy bana diya.",
    name: "Rahul M.",
    location: "Delhi",
  },
  {
    id: 3,
    quote:
      "I could finally track my complaint without repeatedly contacting the bank. The process was clear and convenient.",
    name: "Sneha R.",
    location: "Mumbai",
  },
  {
    id: 4,
    quote:
      "The whole experience felt transparent and stress-free. I finally got clarity on my next steps and my issue was resolved on time.",
    name: "Amit K.",
    location: "Jaipur",
  },
  {
    id: 5,
    quote:
      "Mujhe ye bhi nahi pata tha ki dispute ko kaise start karna hai. DisputePaisa ne sab kuch clear kar diya aur process ko bahut kam stressful bana diya.",
    name: "Nisha P.",
    location: "Lucknow",
  },
  {
    id: 6,
    quote:
      "The support was responsive and the update tracking was really helpful. I always knew what was happening with my complaint.",
    name: "Vikas T.",
    location: "Pune",
  },
  {
    id: 7,
    quote:
      "I was able to submit my complaint without confusion and got regular updates. It saved time and reduced a lot of frustration.",
    name: "Kavya L.",
    location: "Hyderabad",
  },
  {
    id: 8,
    quote:
      "Very easy to understand, even for someone not familiar with banking procedures. The guidance was practical and helpful.",
    name: "Arjun D.",
    location: "Ahmedabad",
  },
  {
    id: 9,
    quote:
      "Their team made a stressful financial issue feel manageable. I appreciated the guidance and the clarity throughout the process.",
    name: "Meera J.",
    location: "Chennai",
  },
];

export default function SocialProof() {
  const [open, setOpen] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* ==========================================
     AUTO TESTIMONIAL ROTATION
  ========================================== */

  useEffect(() => {
    if (isPaused) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  /*
   * Always show exactly TWO testimonials
   */
  const first = testimonials[activeIndex];

  const second =
    testimonials[(activeIndex + 1) % testimonials.length];

  return (
    <section
      id="faq"
      className="section-shell pb-10 md:pb-12 lg:pb-14"
    >
      <div className="social-proof-grid">

        {/* ==========================================
            LEFT — TESTIMONIALS
        ========================================== */}

        <div
          className="testimonials-column"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <h2 className="section-title testimonial-heading">
            What our customers say
          </h2>

          <div className="testimonial-viewport">

            <div
              key={activeIndex}
              className="testimonial-stack"
            >

              {/* FIRST TESTIMONIAL */}
<TestimonialCard
  testimonial={first}
/>

{/* SECOND TESTIMONIAL — hidden only on mobile */}
<div className="testimonial-second-mobile-hidden">
  <TestimonialCard
    testimonial={second}
  />
</div>

            </div>

          </div>

        </div>


        {/* ==========================================
            RIGHT — FAQ
        ========================================== */}

        <div className="faq-column">

          <h2 className="section-title tracking-[.01em]">
            Frequently asked questions
          </h2>

          <div className="faq-card">

            {faqs.map((faq, i) => {
              const question =
                typeof faq === "string"
                  ? faq
                  : faq.question;

              const answer =
                typeof faq === "string"
                  ? "Contact our support team for more details."
                  : faq.answer;

              const isOpen = open === i;

              return (
                <div
                  key={question}
                  className="faq-item"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpen(isOpen ? -1 : i)
                    }
                    className="faq-question"
                    aria-expanded={isOpen}
                  >

                    <span>{question}</span>

                    <Plus
                      size={17}
                      className={`faq-icon ${
                        isOpen
                          ? "faq-icon-open"
                          : ""
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      {answer}
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}


/* =====================================================
   TESTIMONIAL CARD COMPONENT
===================================================== */

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">

      {/* CONTENT */}
      <div className="testimonial-content">

        {/* <div className="testimonial-quote-mark">
          “
        </div> */}

        <p className="testimonial-bubble">
          "{testimonial.quote}"
        </p>

        <div className="testimonial-author">

          <strong>
            {testimonial.name}
          </strong>

          <span>
            {testimonial.location}
          </span>

          <span
            className="testimonial-stars"
            aria-label="5 star rating"
          >
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} size={16} fill="#f5b82e" stroke="#f5b82e" aria-hidden="true" />
            ))}
          </span>

        </div>

      </div>

    </article>
  );
}
