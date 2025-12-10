"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/constants/animations";

const VALUES = [
  {
    title: "革新",
    description: "常に最新の技術と知見を探求し、革新的なソリューションを生み出します。",
  },
  {
    title: "信頼",
    description: "高品質で安定したシステムを提供し、お客様との信頼関係を築きます。",
  },
  {
    title: "成長",
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
      variants={fadeInUp}
      className="py-20 bg-muted/30 relative"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="max-w-3xl mx-auto text-center" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <Badge
              variant="outline"
              className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm"
            >
              Philosophy
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">企業理念</h2>
          </motion.div>

          <Card className="border-primary/10 bg-card/60 backdrop-blur-sm shadow-lg mb-8">
            <CardContent className="pt-6 pb-6">
              <motion.p variants={fadeInUp} className="text-lg leading-relaxed mb-6">
                数学において「零元」は、どのような数と組み合わせても、その数の本質を変えない特別な存在です。
                私たちはこの「零元」の精神に倣い、お客様のビジョンやアイデアの本質を損なうことなく、
                最新のテクノロジーという新たな次元へと昇華させます。
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg leading-relaxed">
                「匠」の精神で、一つひとつのコードを丁寧に紡ぎ、デジタルの世界に信頼と革新をもたらします。
                点と点が線となり、線と線が面となるように、私たちは個々の技術を組み合わせ、
                これまでになかった価値の創造に挑戦し続けます。
              </motion.p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-5 rounded-lg bg-card/40 backdrop-blur-sm border border-border/30"
              >
                <h3 className="text-lg font-semibold mb-2 text-primary">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
