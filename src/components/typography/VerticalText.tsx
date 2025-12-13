"use client";

import { motion } from "framer-motion";
import { waEasing } from "@/constants/animations";

interface VerticalTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  animate?: boolean;
  staggerDelay?: number;
  delay?: number;
}

export function VerticalText({
  text,
  className = "",
  charClassName = "",
  animate = true,
  staggerDelay = 0.1,
  delay = 0,
}: VerticalTextProps) {
  const characters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: waEasing,
      },
    },
  };

  if (!animate) {
    return (
      <div
        className={`vertical-text ${className}`}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
        }}
      >
        {text}
      </div>
    );
  }

  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`block leading-tight ${charClassName}`}
          style={{ letterSpacing: "0.1em" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface VerticalLabelProps {
  text: string;
  className?: string;
  position?: "left" | "right";
}

export function VerticalLabel({
  text,
  className = "",
  position = "left",
}: VerticalLabelProps) {
  return (
    <div
      className={`
        absolute top-1/2 -translate-y-1/2
        ${position === "left" ? "left-4 md:left-8" : "right-4 md:right-8"}
        ${className}
      `}
    >
      <motion.div
        className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground/50 font-light"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
        initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: waEasing }}
      >
        {text}
      </motion.div>
    </div>
  );
}
