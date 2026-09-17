import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { hero, whatsapp } from "../content/site";
import WhatsAppButton from "./WhatsAppButton";
import SocialLinks from "./SocialLinks";
import { IconArrowDown } from "./Icons";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60]);

  return (
    <section id="top" ref={sectionRef} className="relative min-h-screen overflow-hidden border-b border-border">
      {/* Full-bleed portrait — the dominant visual, filling the entire hero */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 scale-110">
        <picture>
          <source srcSet={hero.portrait.srcWebp} type="image/webp" />
          <img
            src={hero.portrait.src}
            alt={hero.portrait.alt}
            className="h-full w-full object-cover"
            style={{ objectPosition: "62% 20%" }}
            fetchPriority="high"
          />
        </picture>
      </motion.div>

      {/* Gradient scrim — keeps the headline legible without covering the photo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg from-10% via-bg/75 via-45% to-bg/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/5 to-transparent" />

      {/* Content — anchored to the lower-left third, cinematic poster placement */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono-tight mb-6 text-xs text-accent-glow"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="text-balance text-[2.5rem] font-medium leading-[1.08] tracking-tight text-text sm:text-6xl lg:text-[3.4rem]"
            >
              {hero.headlineLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-7 max-w-md text-balance text-lg leading-relaxed text-text-muted"
            >
              {hero.supporting}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <WhatsAppButton message={whatsapp.general} label={hero.ctaPrimary} variant="solid" />
              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-300 hover:text-text"
              >
                {hero.ctaSecondary}
                <IconArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="mt-14 border-t border-border pt-6"
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

