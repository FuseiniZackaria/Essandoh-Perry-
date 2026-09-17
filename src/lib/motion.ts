import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Standard section-level reveal: fade + modest upward drift. */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/** Container used to stagger a group of children on scroll-into-view. */
export function staggerContainer(stagger = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/** Hero headline entrance. */
export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

/** Hero portrait entrance — slides in from the right, slightly delayed. */
export const heroPortrait: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease, delay: 0.15 } },
};

export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" };
