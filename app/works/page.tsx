"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function WorksPage() {
  const launchProjects = [
    {
      title: "暗号通貨系ツール(バック商材)",
      sales: "約1000万",
      price: "398,000円",
      commission: "売上10%",
      type: "バック商材"
    },
    {
      title: "暗号通貨系ツール(フロント商材)",
      sales: "約500万",
      price: "298,000円",
      commission: "粗利20%",
      type: "フロント商材"
    },
    {
      title: "無在庫物販ツール",
      sales: "約1500万",
      price: "198,000円",
      commission: "粗利15%",
      type: "フロント商材"
    }
  ];

  const developmentProjects = [
    {
      title: "pump.funのクローンサイト開発",
      description: "暗号資産取引プラットフォームのクローンサイトを開発。高度なセキュリティと安定性を実現。",
      technologies: ["Next.js", "TypeScript", "Web3.js"]
    },
    {
      title: "エアドロップツールの開発",
      description: "暗号資産の自動配布システムを開発。大規模なトークン配布を効率的に実行。",
      technologies: ["Solidity", "React", "Node.js"]
    },
    {
      title: "フラッシュローンを用いたアトミックコントラの開発",
      description: "DeFiプロトコルにおける複雑な取引を単一のトランザクションで実行するスマートコントラクトを開発。",
      technologies: ["Solidity", "Hardhat", "Ethers.js"]
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen pt-24 pb-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl font-bold mb-12 text-center"
        >
          実績
        </motion.h1>

        {/* プロダクトローンチ実績 */}
        <motion.section variants={fadeInUp} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">プロダクトローンチ実績</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {launchProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      売上: {project.sales}
                    </p>
                    <p className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      単価: {project.price}
                    </p>
                    <p className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      報酬率: {project.commission}
                    </p>
                    <p className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      種別: {project.type}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 受託開発実績 */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-8">受託開発実績</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Separator className="my-4" />
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}