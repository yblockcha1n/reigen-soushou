"use client";

import { motion } from "framer-motion";
import { MessageSquare, Layout, Code2, CheckCircle, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/constants/animations";

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
      variants={fadeInUp}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={fadeInUp}>
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

        <motion.div variants={staggerContainer} className="max-w-4xl mx-auto">
          {WORKFLOW_STEPS.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative flex items-start mb-12 last:mb-0"
            >
              <div className="flex flex-col items-center mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary border border-primary/20 z-10">
                  {step.icon}
                </div>
                {index !== WORKFLOW_STEPS.length - 1 && (
                  <div className="w-px h-full bg-border/60 absolute top-12 bottom-0 left-6" />
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
