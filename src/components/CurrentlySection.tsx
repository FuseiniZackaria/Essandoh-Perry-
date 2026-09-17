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
        <span className="font-mono-tight flex items-center gap-2 text-xs text-text-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
          {currently.label}
        </span>
        <p className="text-balance text-text-muted">{currently.text}</p>
      </motion.div>
    </section>
  );
}
