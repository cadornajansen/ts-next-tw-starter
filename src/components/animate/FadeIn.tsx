"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface InstantRevealProps {
  children: React.ReactNode;
}

const FadeIn = ({ children }: InstantRevealProps) => {
  const revealVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
