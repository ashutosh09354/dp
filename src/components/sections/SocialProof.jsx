import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, HelpCircle, MapPin, Quote, Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "../ui/Motion";
import { faqs } from "../../data/constants";

const testimonials = [
  {
    id: 1,
    name: "Kavya L.",
    location: "Hyderabad",
    quote:
      "I was able to submit my complaint without confusion and got regular updates. It saved time and reduced a lot of frustration.",
  },
  {
    id: 2,
    name: "Rahul M.",
    location: "Delhi",
    quote:
      "Mujhe samajh nahi aa raha tha ki banking complaint kaise raise karni hai. DisputePaisa ne poora process bahut simple aur easy bana diya.",
  },
  {
    id: 3,
    name: "Sneha R.",
    location: "Mumbai",
    quote:
      "I could finally track my complaint without repeatedly contacting the bank. The process was clear and convenient.",
  },
];

function getInitials(name) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function SocialProof() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(0); // First item open by default like reference
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const current = testimonials[activeIndex];
  const displayFaqs = faqs.slice(0, 5);

  return (
    <section id="faq" className="section-shell py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        {/* ==========================================
            LEFT — TESTIMONIALS
        ========================================== */}
        <div
          className="flex flex-col justify-between"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div>
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eef4ff] px-3.5 py-1 text-xs font-bold text-[#0066d6]">
              <Quote size={12} className="fill-current" />
              <span>Client Testimonials</span>
            </div>

            {/* Section Title */}
            <h2 className="mt-3 text-[28px] font-extrabold tracking-[-0.03em] text-slate-900 sm:text-[34px]">
              What Our Clients Say <span className="text-[#0066d6]">About Us</span>
            </h2>

            {/* Description */}
            <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-slate-500">
              Real experiences from people who used Dispute Paisa to resolve their banking concerns.
            </p>

            {/* Testimonial Bubble Card */}
            <div className="relative mt-8 max-w-lg">
              {/* Dark navy tilted 3D backdrop */}
              <div
                className="absolute inset-0 rounded-[28px] bg-[#1a3854] -rotate-2 -translate-x-3 -translate-y-2 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main blue speech bubble */}
              <div className="relative overflow-visible rounded-[28px] bg-[#0066d6] p-6 sm:p-8 text-white shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={reduced ? undefined : { opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.28 }}
                  >
                    {/* Top row: Avatar + Name/Location + Stars */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center">
                        {/* Avatar with initials */}
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[16px] font-extrabold text-[#08294f] shadow-sm">
                          {getInitials(current.name)}
                        </div>

                        {/* Vertical divider */}
                        <div className="mx-3.5 h-8 w-px bg-white/20" />

                        {/* Name & Location */}
                        <div>
                          <h4 className="text-[17px] font-extrabold leading-tight text-white">
                            {current.name}
                          </h4>
                          <p className="mt-0.5 flex items-center gap-1 text-[13px] text-white/80">
                            <MapPin size={12} className="fill-current" />
                            <span>{current.location}</span>
                          </p>
                        </div>
                      </div>

                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1 text-[#f5b82e]" aria-label="5 star rating">
                        {Array.from({ length: 5 }, (_, idx) => (
                          <Star key={idx} size={18} fill="#f5b82e" stroke="#f5b82e" />
                        ))}
                      </div>
                    </div>

                    {/* Quote content */}
                    <p className="mt-5 text-[15px] font-medium italic leading-relaxed text-white/95 sm:text-[16px]">
                      <span className="mr-1.5 text-2xl font-serif not-italic text-white/50">“</span>
                      {current.quote}
                      <span className="ml-1.5 text-2xl font-serif not-italic text-white/50">”</span>
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Speech bubble tail pointing down-right */}
                <svg
                  className="absolute -bottom-6 right-12 h-7 w-9 text-[#0066d6]"
                  viewBox="0 0 36 28"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 0 C10 0 20 12 36 28 C28 16 26 6 36 0 Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Carousel Pagination Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeIndex
                      ? "w-6 bg-[#0066d6]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ==========================================
            RIGHT — FAQ
        ========================================== */}
        <div>
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eef4ff] px-3.5 py-1 text-xs font-bold text-[#0066d6]">
            <HelpCircle size={13} />
            <span>FAQs</span>
          </div>

          {/* Section Title */}
          <h2 className="mt-3 text-[28px] font-extrabold tracking-[-0.03em] text-slate-900 sm:text-[34px]">
            Frequently <span className="text-[#0066d6]">Asked Questions</span>
          </h2>

          {/* Description */}
          <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
            Find quick answers to common queries about our services.
          </p>

          {/* Accordion Card Container */}
          <div className="mt-7 rounded-2xl border border-slate-200/80 bg-white p-2.5 sm:p-3 shadow-[0_8px_30px_rgba(8,41,79,0.06)] space-y-1.5">
            {displayFaqs.map((faq, i) => {
              const question = typeof faq === "string" ? faq : faq.question;
              const answer =
                typeof faq === "string"
                  ? "Contact our support team for more details."
                  : faq.answer;
              const isOpen = open === i;

              return (
                <div key={question} className="overflow-hidden rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className={`flex w-full items-center justify-between px-5 py-3.5 text-left font-bold text-[14px] sm:text-[14.5px] transition-all ${
                      isOpen
                        ? "bg-[#005cd6] text-white rounded-xl shadow-sm"
                        : "bg-white text-slate-800 hover:bg-slate-50 border-b border-slate-100 last:border-b-0"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{question}</span>
                    {isOpen ? (
                      <ChevronUp size={18} className="shrink-0 text-white ml-2" />
                    ) : (
                      <ChevronDown size={18} className="shrink-0 text-slate-600 ml-2" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduced ? false : { opacity: 0, height: 0 }}
                        animate={reduced ? undefined : { opacity: 1, height: "auto" }}
                        exit={reduced ? undefined : { opacity: 0, height: 0 }}
                        transition={reduced ? { duration: 0 } : { duration: 0.22 }}
                        className="bg-[#f0f5fc] rounded-b-xl px-5 py-4 text-[13.5px] leading-relaxed text-slate-600"
                      >
                        {answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
