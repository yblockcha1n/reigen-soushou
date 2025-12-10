"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  textAnimation,
  spinAnimation,
} from "@/constants/animations";

const SLOGANS = [
  "零から始まるイノベーション",
  "零から創る未来の可能性",
  "零から紡ぐデジタル世界",
  "零からデザインする新時代",
  "零から挑戦する技術革新",
];

const FEATURES = [
  { icon: <CheckCircle className="h-5 w-5" />, text: "高いエンジニアリング品質" },
  { icon: <Clock className="h-5 w-5" />, text: "迅速な開発・納品" },
  { icon: <Users className="h-5 w-5" />, text: "伴走型のサポート" },
];

interface HeroSectionProps {
  heroRef: (node?: Element | null) => void;
  heroInView: boolean;
}

export function HeroSection({ heroRef, heroInView }: HeroSectionProps) {
  const [windowHeight, setWindowHeight] = useState(0);
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((current) => (current + 1) % SLOGANS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    document.documentElement.style.overflowY = "scroll";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const heroHeight = windowHeight ? `calc(${windowHeight}px - 4rem)` : "100vh";

  return (
    <motion.section
      ref={heroRef}
      initial="hidden"
      animate={heroInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="relative flex items-center pt-6 sm:pt-0"
      style={{ minHeight: heroHeight }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/0 to-background pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-70 animate-pulse pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 lg:order-1 pt-12 sm:pt-0" variants={fadeInRight}>
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 tracking-tight">
              零元創匠
            </motion.h1>
            <div className="h-[40px] md:h-[48px] relative overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={sloganIndex}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={textAnimation}
                  className="absolute text-xl md:text-2xl text-foreground/90 font-medium"
                >
                  {SLOGANS[sloganIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <motion.p variants={fadeInUp} className="text-lg mb-8 text-muted-foreground max-w-xl">
              世界はすべて「0」から始まります。私たちは、その無限の可能性から、
              新たな価値を創造する技術集団です。
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="text-lg group" asChild>
                <Link href="/contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="/works">
                  実績を見る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:justify-start sm:space-x-8">
              {FEATURES.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center text-sm text-muted-foreground whitespace-nowrap"
                >
                  <div className="mr-2 text-primary flex-shrink-0">{item.icon}</div>
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInLeft} className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative aspect-square flex items-center justify-center">
                <motion.div
                  animate={spinAnimation.animate}
                  className="absolute w-64 h-64 md:w-80 md:h-80 border border-primary/20 rounded-full"
                />
                <motion.div
                  animate={{
                    ...spinAnimation.animate,
                    transition: { ...spinAnimation.animate.transition, duration: 15 },
                  }}
                  className="absolute w-48 h-48 md:w-64 md:h-64 border border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{
                    ...spinAnimation.animate,
                    transition: { ...spinAnimation.animate.transition, duration: 25, delay: 2 },
                  }}
                  className="absolute w-32 h-32 md:w-48 md:h-48 border border-primary/40 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
