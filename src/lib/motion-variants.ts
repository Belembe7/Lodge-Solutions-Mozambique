import type { Variants, Transition } from "framer-motion";

/** EaseOutExpo — curva premium suave */
export const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const premiumTransition: Transition = {
  duration: 0.85,
  ease: premiumEase,
};

export const microTransition: Transition = {
  duration: 0.3,
  ease: premiumEase,
};

export const viewportOnce = {
  once: true,
  amount: 0.3,
} as const;

/** Container com stagger para filhos */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
      ease: premiumEase,
    },
  },
};

/** Reveal leve: fade + subida curta */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: premiumTransition,
  },
};

/** Título: fade + y + blur */
export const titleReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: premiumEase,
    },
  },
};

/** Traço decorativo sob o título */
export const titleUnderline: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.85,
      ease: premiumEase,
      delay: 0.18,
    },
  },
};

/** Card entry */
export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

/** Hover premium para cards */
export const cardHover = {
  y: -6,
  scale: 1.015,
  transition: {
    duration: 0.4,
    ease: premiumEase,
  },
};

/** Secção fade global suave */
export const sectionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: premiumEase,
    },
  },
};

/** Imagem — wipe / clip reveal */
export const imageWipe: Variants = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
    scale: 1.06,
  },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    scale: 1,
    transition: {
      duration: 1.05,
      ease: premiumEase,
    },
  },
};

export const softSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 22,
};
