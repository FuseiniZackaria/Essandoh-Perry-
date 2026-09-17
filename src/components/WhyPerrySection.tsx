import { motion } from "framer-motion";
import { whyPerry } from "../content/site";
import { revealUp, staggerContainer, staggerItem, viewportOnce } from "../lib/motion";

export default function WhyPerrySection() {
  return (
    <section className="border-b border-border bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.h2
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-14 text-balance text-3xl font-medium tracking-tight text-text sm:text-4xl"
        >
          {whyPerry.heading}
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {whyPerry.pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={staggerItem} className="border-t border-border pt-6">
              <h3 className="text-lg font-medium text-text">{pillar.title}</h3>
              <p className="mt-3 text-balance leading-relaxed text-text-muted">{pillar.statement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
