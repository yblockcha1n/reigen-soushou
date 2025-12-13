"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useNormalizedMousePosition } from "@/hooks/useMousePosition";

interface MouseParallaxProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function MouseParallax({
  children,
  strength = 0.02,
  className = "",
}: MouseParallaxProps) {
  const { x, y } = useNormalizedMousePosition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const springConfig = { damping: 30, stiffness: 150 };

  const xSpring = useSpring(x * strength * 100, springConfig);
  const ySpring = useSpring(y * strength * 100, springConfig);

  // モバイルではエフェクト無効
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{
        x: xSpring,
        y: ySpring,
      }}
    >
      {children}
    </motion.div>
  );
}

interface MouseParallaxLayerProps {
  children: ReactNode;
  depth?: number;
  className?: string;
}

export function MouseParallaxLayer({
  children,
  depth = 1,
  className = "",
}: MouseParallaxLayerProps) {
  const { x, y } = useNormalizedMousePosition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const springConfig = { damping: 30, stiffness: 150 };
  const movement = depth * 20;

  const xSpring = useSpring(x * movement, springConfig);
  const ySpring = useSpring(y * movement, springConfig);

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{
        x: xSpring,
        y: ySpring,
      }}
    >
      {children}
    </motion.div>
  );
}
