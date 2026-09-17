import { motion } from "framer-motion";
import type { ServiceItem } from "../content/site";
import { staggerItem } from "../lib/motion";

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

interface ServiceCardProps extends ServiceItem {
  index: number;
}

export default function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/20 p-8 transition-colors duration-300 hover:border-border-strong hover:bg-card/50 hover:shadow-xl hover:shadow-black/30 sm:p-10"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 select-none text-8xl font-bold leading-none text-white/[0.05] transition-colors duration-300 group-hover:text-accent-glow/10 sm:text-9xl"
      >
        {ROMAN[index] ?? index + 1}
      </span>

      <h3 className="relative text-2xl font-semibold tracking-tight text-text sm:text-[1.75rem]">{title}</h3>
      <p className="relative mt-4 max-w-sm text-balance leading-relaxed text-text-muted">{description}</p>
    </motion.article>
  );
}
