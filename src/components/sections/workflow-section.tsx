"use client";

import { motion } from "framer-motion";
import { MessageSquare, Layout, Code2, CheckCircle, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { waFadeInUp, nodeStagger, nodeItem, lineDrawAnimation } from "@/constants/animations";

const WORKFLOW_STEPS = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "1. 要件ヒアリング",
    description:
      "お客様の課題やビジョンをしっかりと理解し、最適な解決策を提案します。",
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "2. 設計・プロトタイピング",
    description:
      "使いやすさとビジネス目標を両立する設計を行い、早期にプロトタイプを提示します。",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "3. 開発・実装",
    description:
      "高品質なコードを迅速に開発し、定期的な進捗報告と調整を行います。",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "4. テスト・品質保証",
    description: "厳格なテストを実施し、安定した高品質な製品を提供します。",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "5. デプロイ・サポート",
    description:
      "円滑なリリースとその後の持続的なサポートで、安心してご利用いただけます。",
  },
];

interface WorkflowSectionProps {
  workflowRef: (node?: Element | null) => void;
  workflowInView: boolean;
}

export function WorkflowSection({ workflowRef, workflowInView }: WorkflowSectionProps) {
  return (
    <motion.section
      ref={workflowRef}
      initial="hidden"
      animate={workflowInView ? "visible" : "hidden"}
      variants={waFadeInUp}
      className="section-spacing bg-background relative overflow-hidden"
    >
      {/* 背景グリッド */}
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={waFadeInUp}>
          <Badge
            variant="outline"
            className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm"
          >
            Workflow
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">開発フロー</h2>
          <p className="text-lg text-muted-foreground">
            私たちは効率的で透明性の高い開発プロセスを採用し、お客様と密に連携しながらプロジェクトを進めます。
          </p>
        </motion.div>

        {/* 横並びフロー（デスクトップ） */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* SVG接続ライン */}
            <svg
              className="absolute top-6 left-0 w-full h-2 overflow-visible"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="10%"
                y1="0"
                x2="90%"
                y2="0"
                stroke="currentColor"
                strokeWidth={2}
                className="text-primary/20"
                variants={lineDrawAnimation}
                initial="hidden"
                animate={workflowInView ? "visible" : "hidden"}
              />
            </svg>

            <motion.div
              variants={nodeStagger}
              className="grid grid-cols-5 gap-4"
            >
              {WORKFLOW_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  variants={nodeItem}
                  className="flex flex-col items-center text-center group"
                >
                  {/* ノード */}
                  <div className="relative mb-6">
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary/30 text-primary z-10 relative transition-all duration-300 group-hover:border-primary group-hover:scale-110"
                      whileHover={{
                        boxShadow: "0 0 20px hsl(var(--primary) / 0.3)"
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    {/* パルスエフェクト */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-primary/20"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 縦並びフロー（モバイル・タブレット） */}
        <motion.div variants={nodeStagger} className="lg:hidden max-w-2xl mx-auto">
          {WORKFLOW_STEPS.map((step, index) => (
            <motion.div
              key={index}
              variants={nodeItem}
              className="relative flex items-start mb-12 last:mb-0 group"
            >
              <div className="flex flex-col items-center mr-6">
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary/30 text-primary z-10 transition-all duration-300 group-hover:border-primary"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                {index !== WORKFLOW_STEPS.length - 1 && (
                  <motion.div
                    className="w-px bg-primary/20 absolute top-14 bottom-0 left-6"
                    initial={{ height: 0 }}
                    animate={workflowInView ? { height: "100%" } : { height: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                )}
              </div>

              <div className="pt-1 flex-1">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
