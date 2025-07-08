"use client"; // Required for Framer Motion animations in Next.js 13+

import { motion } from "framer-motion";

const transitionVariants = {
  // Horizontal movements
  leftToRight: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  rightToLeft: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },

  // Vertical movements
  bottomToTop: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  topToBottom: {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },

  // Fade effects
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },

  // Special effects
  rotateIn: {
    hidden: { opacity: 0, rotate: -15 },
    visible: { opacity: 1, rotate: 0 },
  },
  bounceIn: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4 },
    },
  },
};

const ContentTransition = ({
  children,
  type = "fadeIn",
  duration = 0.6,
  delay = 0,
  stagger,
  className = "",
  viewport = { once: true, margin: "0px" },
  ...props
}) => {
  // Handle single child case
  if (!Array.isArray(children)) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{
          duration,
          delay,
          ease: type === "bounceIn" ? undefined : [0.25, 0.1, 0.25, 1],
        }}
        variants={transitionVariants[type]}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // Handle multiple children case
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: type === "bounceIn" ? undefined : [0.25, 0.1, 0.25, 1],
      }}
      variants={stagger ? undefined : transitionVariants[type]}
      className={className}
      {...props}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={transitionVariants[type]}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ContentTransition;
