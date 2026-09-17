import { motion } from "framer-motion";
import { finalCta, whatsapp } from "../content/site";
import { revealUp, viewportOnce } from "../lib/motion";
import WhatsAppButton from "./WhatsAppButton";
import SocialLinks from "./SocialLinks";

export default function CTASection() {
  return (
    <section id="contact" className="border-b border-border py-28 sm:py-36">
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-3xl px-5 text-center sm:px-8"
      >
        <h2 className="text-balance text-4xl font-medium tracking-tight text-text sm:text-5xl">{finalCta.headline}</h2>
        <p className="mx-auto mt-6 max-w-xl text-balance leading-relaxed text-text-muted">{finalCta.supporting}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton message={whatsapp.general} label={finalCta.primary} variant="solid" />
          <WhatsAppButton message={whatsapp.speaking} label={finalCta.secondary} variant="outline" />
        </div>

        <div className="mt-14 flex justify-center">
          <SocialLinks />
        </div>
      </motion.div>
    </section>
  );
}
