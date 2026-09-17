import { motion } from "framer-motion";
import { about } from "../content/site";
import { revealUp, staggerContainer, staggerItem, viewportOnce } from "../lib/motion";

export default function AboutSection() {
  const [firstHalf, secondHalf] = [about.paragraphs.slice(0, 3), about.paragraphs.slice(3)];

  return (
    <section id="about" className="border-b border-border bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-mono-tight mb-10 text-xs text-text-muted"
        >
          {about.label}
        </motion.p>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-5 text-balance text-xl leading-relaxed text-text sm:text-2xl"
          >
            {firstHalf.map((p, i) => (
              <motion.p key={i} variants={staggerItem}>
                {p}
              </motion.p>
            ))}
          </motion.div>

          <div className="flex flex-col gap-10">
            <motion.blockquote
              variants={revealUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="border-l-2 border-accent py-1 pl-6"
            >
              <p className="text-balance text-2xl font-medium leading-snug text-text sm:text-3xl">
                &ldquo;{about.quote}&rdquo;
              </p>
            </motion.blockquote>

            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="space-y-5 text-balance leading-relaxed text-text-muted"
            >
              {secondHalf.map((p, i) => (
                <motion.p key={i} variants={staggerItem}>
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
