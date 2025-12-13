"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  fadeInUp,
  textAnimation,
  waFadeInUp,
  staggerContainer,
} from "@/constants/animations";
import { GridBackground, NodeNetwork, MouseParallax } from "@/components/effects";
import { RevealText } from "@/components/typography";
import { VerticalText } from "@/components/typography/VerticalText";

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
      variants={waFadeInUp}
      className="relative flex items-center pt-6 sm:pt-0 overflow-hidden"
      style={{ minHeight: heroHeight }}
    >
      {/* 背景エフェクト */}
      <GridBackground showDots={true} showLines={true} gridSize={50} />
      <NodeNetwork nodeCount={40} connectionDistance={180} speed={0.2} />

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background pointer-events-none z-[2]" />

      {/* 縦書きアクセント（デスクトップのみ） */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <VerticalText
          text="零元創匠"
          className="text-6xl font-bold text-primary/[0.07]"
          charClassName="leading-none"
          staggerDelay={0.15}
          delay={0.5}
        />
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MouseParallax strength={0.015}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* テキストコンテンツ */}
            <motion.div
              className="lg:col-span-7 xl:col-span-6 xl:col-start-2 order-2 lg:order-1 pt-12 sm:pt-0"
              variants={staggerContainer}
            >
              {/* メインタイトル */}
              <motion.div variants={waFadeInUp} className="mb-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/70">
                    零元創匠
                  </span>
                </h1>
              </motion.div>

              {/* 動的スローガン */}
              <div className="h-[48px] md:h-[56px] relative overflow-hidden mb-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={sloganIndex}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={textAnimation}
                    className="absolute text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium tracking-wide"
                  >
                    {SLOGANS[sloganIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* 説明文 - RevealText */}
              <motion.div variants={waFadeInUp} className="mb-10">
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  <RevealText
                    text="世界はすべて「0」から始まります。"
                    delay={0.3}
                    staggerDelay={0.02}
                  />
                  <br />
                  <span className="text-base md:text-lg">
                    私たちは、その無限の可能性から、新たな価値を創造する技術集団です。
                  </span>
                </p>
              </motion.div>

              {/* CTAボタン */}
              <motion.div variants={waFadeInUp} className="flex flex-wrap gap-4 mb-12">
                <Button
                  size="lg"
                  className="text-lg group glow-hover transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">
                    お問い合わせ
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg group border-primary/30 hover:border-primary/50 transition-all duration-300"
                  asChild
                >
                  <Link href="/works">
                    実績を見る
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              {/* 特徴 */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:gap-8"
              >
                {FEATURES.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center text-sm text-muted-foreground whitespace-nowrap group"
                  >
                    <div className="mr-2 text-primary flex-shrink-0 transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* 右側ビジュアル */}
            <motion.div
              variants={waFadeInUp}
              className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="relative aspect-square flex items-center justify-center">
                  {/* 外側リング */}
                  <motion.div
                    className="absolute w-72 h-72 md:w-80 md:h-80 border border-primary/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                  />
                  {/* 中間リング */}
                  <motion.div
                    className="absolute w-56 h-56 md:w-64 md:h-64 border border-primary/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                  >
                    {/* ノードポイント */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full" />
                  </motion.div>
                  {/* 内側リング */}
                  <motion.div
                    className="absolute w-40 h-40 md:w-48 md:h-48 border border-primary/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                  >
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-primary/50 rounded-full" />
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-primary/50 rounded-full" />
                  </motion.div>
                  {/* 中心 */}
                  <motion.div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-2xl md:text-3xl font-bold text-primary/60">0</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </MouseParallax>
      </div>

      {/* 下部フェード */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-[3]" />
    </motion.section>
  );
}
