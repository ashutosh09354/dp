const variants = {
  primary: "bg-brand-500 text-white shadow-[0_8px_22px_rgba(20,119,232,.2)] hover:bg-brand-600",
  outline: "border border-brand-500/30 bg-white text-brand-700 hover:bg-brand-50",
  white: "bg-white text-brand-700 hover:bg-brand-50",
  whiteOutline: "border border-white/40 bg-transparent text-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  style,
  type,
  disabled,
  onClick,
  motionEffect = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className} ${disabled ? "cursor-not-allowed opacity-60" : ""}`;
  const motionProps = motionEffect ? { whileHover: { y: -2 }, whileTap: { scale: 0.98 }, transition: { duration: 0.2 } } : {};

  // If a type ("submit"/"button") or onClick is given, render a real <button>
  // so it works inside forms and doesn't just navigate like a link.
  if (type || onClick) {
    return (
      <motion.button type={type || "button"} className={classes} style={style} disabled={disabled} onClick={onClick} {...motionProps}>
        {children}
        </motion.button>
    );
  }

  return (
    <motion.a href={href || "#query"} className={classes} style={style} {...motionProps}>
      {children}
      </motion.a>
  );
}
import { motion } from "./Motion";

