"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { waFadeInUp, staggerContainer, floatAnimation } from "@/constants/animations";
import { GridBackground } from "@/components/effects";
import { VerticalText } from "@/components/typography/VerticalText";

export default function WorksPage() {
  const developmentProjects = [
    {
      title: "製造業向け生産管理システム",
      description: "製造業のお客様向けに、生産計画から在庫管理、品質管理までを一元化した基幹システムを開発。業務効率の大幅な向上を実現しました。",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      image: "/placeholder-image-1.jpg",
      features: ["リアルタイム生産状況モニタリング", "在庫の自動発注機能", "品質トレーサビリティ管理"]
    },
    {
      title: "卸売業向け販売管理システム",
      description: "複数拠点を持つ卸売業のお客様向けに、受発注から請求・入金管理までを統合した販売管理システムを構築しました。",
      technologies: ["React", "Node.js", "MySQL", "Redis", "GCP"],
      image: "/placeholder-image-2.jpg",
      features: ["複数拠点のリアルタイム在庫連携", "取引先別与信管理", "売上分析ダッシュボード"]
    },
    {
      title: "人材派遣業向け勤怠・給与システム",
      description: "人材派遣会社のお客様向けに、派遣スタッフの勤怠管理から給与計算、請求書発行までを自動化するシステムを開発しました。",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "Azure"],
      image: "/placeholder-image-3.jpg",
      features: ["スマホ対応の勤怠打刻", "複雑な給与計算の自動化", "派遣先別の請求書自動生成"]
    },
    {
      title: "不動産業向け物件管理システム",
      description: "不動産管理会社のお客様向けに、物件情報管理から契約管理、入居者対応までを効率化するシステムを構築しました。",
      technologies: ["Next.js", "TypeScript", "Supabase", "Vercel"],
      image: "/placeholder-image-4.jpg",
      features: ["物件情報の一元管理", "契約更新の自動リマインド", "入居者ポータル機能"]
    },
    {
      title: "EC事業者向け受注管理システム",
      description: "複数のECモールに出店するお客様向けに、受注の一元管理と在庫連携、出荷指示までを統合したシステムを開発しました。",
      technologies: ["React", "Node.js", "MongoDB", "AWS Lambda"],
      image: "/placeholder-image-5.jpg",
      features: ["マルチモール受注の自動取込", "在庫のリアルタイム同期", "出荷業務の効率化"]
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      {/* 背景エフェクト */}
      <GridBackground showDots={true} showLines={false} gridSize={40} className="opacity-20" />

      {/* 浮遊する装飾要素 */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70 pointer-events-none"
        animate={floatAnimation.animate}
      />
      <motion.div
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none"
        animate={{
          ...floatAnimation.animate,
          y: [5, -5, 5],
        }}
      />

      {/* 縦書きアクセント */}
      <div className="hidden xl:block absolute right-8 top-1/3 -translate-y-1/2">
        <VerticalText
          text="実績"
          className="text-8xl font-bold text-primary/[0.03]"
          charClassName="leading-none"
          staggerDelay={0.3}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* スキーママークアップ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "headline": "開発実績 | 零元創匠",
              "description": "零元創匠の開発実績をご紹介します。基幹システム開発、業務システム開発、Webアプリケーション開発の実績があります。",
              "url": "https://www.reigen-soushou.com/works",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": developmentProjects.map((project, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "SoftwareApplication",
                    "name": project.title,
                    "description": project.description,
                    "applicationCategory": "BusinessApplication",
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock"
                    }
                  }
                }))
              }
            })
          }}
        />

        {/* パンくずリスト */}
        <BreadcrumbNav
          items={[
            { title: '開発実績', href: '/works', isCurrent: true }
          ]}
        />

        <motion.div
          variants={waFadeInUp}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm"
          >
            Works
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">開発実績</h1>
          <p className="text-lg text-muted-foreground mb-8">
            私たちが手がけた基幹システム・業務システムの開発事例をご紹介します。<br />
            お客様の業務課題を解決し、ビジネスの成長に貢献してきました。
          </p>
          <Separator className="max-w-md mx-auto" />
        </motion.div>

        {/* 受託開発実績 */}
        <motion.section variants={waFadeInUp}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">受託開発実績</h2>
            <p className="text-muted-foreground mb-10">お客様の業務課題に合わせたオーダーメイドのシステム開発</p>

            <div className="space-y-16">
              {developmentProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={waFadeInUp}
                  className="group"
                >
                  <Card className="overflow-hidden border-border/30 bg-card/50 backdrop-blur-sm shadow-lg card-hover glow-hover">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-muted/30 aspect-video flex items-center justify-center p-4">
                        <div className="relative w-full h-full overflow-hidden rounded-md bg-muted">
                          <div className="w-full h-full relative">
                            <div className="absolute inset-0 flex items-center justify-center bg-muted">
                              <span className="text-sm text-muted-foreground">プロジェクト画像</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col">
                        <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                        <CardDescription className="text-base mb-6">{project.description}</CardDescription>

                        <div className="mb-6">
                          <h4 className="font-medium mb-3 flex items-center">
                            <Check className="h-5 w-5 mr-2 text-primary" />
                            主な機能
                          </h4>
                          <ul className="grid grid-cols-1 gap-2 ml-7">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground list-disc">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-auto">
                          <h4 className="font-medium mb-3">使用技術</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={waFadeInUp}
          className="mt-24 text-center"
        >
          <Card className="max-w-3xl mx-auto border-border/30 bg-card/60 backdrop-blur-sm shadow-lg glow">
            <CardContent className="pt-10 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">御社の業務課題を解決しませんか？</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                業務の効率化やシステム化でお困りのことがございましたら、お気軽にご相談ください。<br />
                お客様の課題に最適なソリューションをご提案いたします。
              </p>
              <Button size="lg" className="text-lg group glow-hover" asChild>
                <a href="/contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </motion.div>
  );
}
