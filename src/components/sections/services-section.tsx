"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Lightbulb,
  Binary,
  Globe,
  Cpu,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { waFadeInUp, staggerContainer } from "@/constants/animations";
import { VerticalLabel } from "@/components/typography";

const SERVICES = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Webアプリケーション開発/設計",
    description:
      "最新のテクノロジーを活用した、スケーラブルで高性能なWebアプリケーションを開発します。",
    features: ["React/Next.js", "Vue.js/Nuxt.js", "TypeScript", "REST API設計"],
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "業務効率化ツールの開発",
    description:
      "お客様の業務フローを分析し、効率を最大化する独自のツールを開発します。",
    features: ["自動化ツール", "データ分析", "レポート生成", "ワークフロー最適化"],
  },
  {
    icon: <Binary className="h-8 w-8" />,
    title: "API連携・システム統合",
    description: "外部サービスとの連携や既存システムの統合を実現します。",
    features: ["REST/GraphQL API", "外部サービス連携", "データ移行", "マイクロサービス"],
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Webサイト開発",
    description: "モダンで使いやすい、高品質なWebサイトを制作します。",
    features: ["レスポンシブデザイン", "SEO対策", "パフォーマンス最適化", "CMS実装"],
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "基幹システムの開発/設計",
    description: "企業の中核を支える、信頼性の高い基幹システムを構築します。",
    features: ["データベース設計", "セキュリティ対策", "システム統合", "保守運用"],
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "保守・運用サポート",
    description:
      "システム導入後の安定稼働を支える、継続的なサポートを提供します。",
    features: ["24時間監視体制", "定期メンテナンス", "機能追加・改修", "ヘルプデスク対応"],
  },
];

interface ServicesSectionProps {
  servicesRef: (node?: Element | null) => void;
  servicesInView: boolean;
}

export function ServicesSection({ servicesRef, servicesInView }: ServicesSectionProps) {
  return (
    <motion.section
      id="services"
      ref={servicesRef}
      initial="hidden"
      animate={servicesInView ? "visible" : "hidden"}
      variants={waFadeInUp}
      className="section-spacing bg-muted/30 relative overflow-hidden"
    >
      {/* ドット背景 */}
      <div className="absolute inset-0 dot-background opacity-50" />

      {/* 縦書きラベル */}
      <VerticalLabel text="SERVICES" position="right" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" variants={waFadeInUp}>
          <Badge
            variant="outline"
            className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm"
          >
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">サービス内容</h2>
          <p className="text-lg text-muted-foreground">
            私たちは、最新のテクノロジーとノウハウを駆使し、お客様のビジネスに最適なソリューションを提供します。
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={waFadeInUp}
              className={`${index % 3 === 1 ? "md:mt-8" : ""}`}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm card-hover group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-5 p-3 bg-primary/10 rounded-lg w-fit text-primary transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-5">{service.description}</p>

                  <div className="mt-auto">
                    <Separator className="mb-5" />
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <ChevronRight className="h-4 w-4 mr-2 text-primary flex-shrink-0 transition-transform group-hover:translate-x-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
