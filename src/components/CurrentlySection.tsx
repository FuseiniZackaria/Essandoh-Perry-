import { motion } from "framer-motion";
import { currently } from "../content/site";
import { revealUp, viewportOnce } from "../lib/motion";

export default function CurrentlySection() {
  return (
    <section className="border-b border-border py-16">
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8"
      >
        <span className="font-mono-tight border-l-2 border-border-strong pl-3 text-xs text-text-muted">
          {currently.label}
        </span>
        <p className="text-balance text-text-muted">{currently.text}</p>
      </motion.div>
    </section>
  );
}
