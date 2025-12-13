"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { waFadeInUp, staggerContainer, floatAnimation } from "@/constants/animations";
import { RevealLines } from "@/components/typography";
import { VerticalText } from "@/components/typography/VerticalText";

const VALUES = [
  {
    title: "革新",
    kanji: "革",
    description: "常に最新の技術と知見を探求し、革新的なソリューションを生み出します。",
  },
  {
    title: "信頼",
    kanji: "信",
    description: "高品質で安定したシステムを提供し、お客様との信頼関係を築きます。",
  },
  {
    title: "成長",
    kanji: "成",
    description: "お客様と共に成長し、社会に価値をもたらすことを目指します。",
  },
];

interface PhilosophySectionProps {
  philosophyRef: (node?: Element | null) => void;
  philosophyInView: boolean;
}

export function PhilosophySection({ philosophyRef, philosophyInView }: PhilosophySectionProps) {
  return (
    <motion.section
      id="philosophy"
      ref={philosophyRef}
      initial="hidden"
      animate={philosophyInView ? "visible" : "hidden"}
      variants={waFadeInUp}
      className="section-spacing bg-muted/30 relative overflow-hidden"
    >
      {/* 背景エフェクト */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70 pointer-events-none"
        animate={floatAnimation.animate}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none"
        animate={{
          ...floatAnimation.animate,
          y: [5, -5, 5],
        }}
      />

      {/* 縦書きアクセント */}
      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2">
        <VerticalText
          text="理念"
          className="text-7xl font-bold text-primary/[0.05]"
          charClassName="leading-none"
          staggerDelay={0.2}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="max-w-4xl mx-auto" variants={staggerContainer}>
          {/* ヘッダー */}
          <motion.div variants={waFadeInUp} className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm"
            >
              Philosophy
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">企業理念</h2>
          </motion.div>

          {/* メインカード */}
          <motion.div variants={waFadeInUp}>
            <Card className="border-primary/10 bg-card/60 backdrop-blur-sm shadow-lg mb-16 glow">
              <CardContent className="py-10 px-8 md:px-12">
                <RevealLines
                  lines={[
                    "数学において「零元」は、どのような数と組み合わせても、",
                    "その数の本質を変えない特別な存在です。",
                  ]}
                  className="text-lg md:text-xl leading-relaxed mb-8 text-center"
                  lineClassName="block"
                  staggerDelay={0.2}
                />
                <motion.p
                  variants={waFadeInUp}
                  className="text-base md:text-lg leading-relaxed text-muted-foreground text-center mb-8"
                >
                  私たちはこの「零元」の精神に倣い、お客様のビジョンやアイデアの本質を損なうことなく、
                  最新のテクノロジーという新たな次元へと昇華させます。
                </motion.p>
                <motion.p
                  variants={waFadeInUp}
                  className="text-base md:text-lg leading-relaxed text-muted-foreground text-center"
                >
                  「匠」の精神で、一つひとつのコードを丁寧に紡ぎ、デジタルの世界に信頼と革新をもたらします。
                  点と点が線となり、線と線が面となるように、私たちは個々の技術を組み合わせ、
                  これまでになかった価値の創造に挑戦し続けます。
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 価値観カード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                variants={waFadeInUp}
                className="group"
              >
                <div className="relative p-6 rounded-lg bg-card/40 backdrop-blur-sm border border-border/30 card-hover overflow-hidden">
                  {/* 背景漢字 */}
                  <span className="absolute -right-4 -bottom-4 text-8xl font-bold text-primary/[0.03] select-none transition-all duration-500 group-hover:text-primary/[0.08]">
                    {value.kanji}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
