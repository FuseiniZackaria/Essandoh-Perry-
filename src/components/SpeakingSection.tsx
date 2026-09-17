import { motion } from "framer-motion";
import { hero, speaking, whatsapp } from "../content/site";
import { revealUp, staggerContainer, staggerItem, viewportOnce } from "../lib/motion";
import WhatsAppButton from "./WhatsAppButton";

export default function SpeakingSection() {
  return (
    <section id="speaking" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="aspect-[4/5] max-w-sm overflow-hidden rounded-3xl border border-border bg-bg-secondary"
          >
            <picture>
              <source srcSet={hero.portrait.srcWebp} type="image/webp" />
              <img
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[15%]"
                style={{ objectPosition: "50% 10%" }}
              />
            </picture>
          </motion.div>
        </div>

        <div>
          <motion.h2
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-balance text-3xl font-medium leading-tight tracking-tight text-text sm:text-4xl"
          >
            {speaking.headline}
          </motion.h2>
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-5 max-w-lg text-balance leading-relaxed text-text-muted"
          >
            {speaking.intro}
          </motion.p>

          <motion.ul
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
          >
            {speaking.topics.map((topic) => (
              <motion.li
                key={topic}
                variants={staggerItem}
                className="border-t border-border py-3 text-text"
              >
                {topic}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10"
          >
            <WhatsAppButton message={whatsapp.speaking} label={speaking.cta} variant="outline" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
