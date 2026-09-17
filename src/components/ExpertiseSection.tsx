import { motion } from "framer-motion";
import { expertise } from "../content/site";
import { revealUp, staggerContainer, viewportOnce } from "../lib/motion";
import ServiceCard from "./ServiceCard";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <motion.h2
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-5xl"
          >
            What I do
          </motion.h2>
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="font-mono-tight text-xs text-text-muted"
          >
            {expertise.length} areas of focus
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {expertise.map((item, i) => (
            <ServiceCard key={item.code} {...item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

