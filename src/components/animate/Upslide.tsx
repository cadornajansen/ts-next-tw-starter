"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface InstantRevealProps {
  children: React.ReactNode;
}

const Upslide = ({ children }: InstantRevealProps) => {
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-fit relative overflow-hidden">
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Upslide;
