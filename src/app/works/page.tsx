"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { fadeInUp, staggerContainer } from "@/constants/animations";

export default function WorksPage() {
  const launchProjects = [
    {
      title: "暗号通貨系ツール",
      sales: "約1,000万",
      price: "398,000円",
      commission: "売上10%",
      type: "BE商材",
      results: ["プレセールス段階で600件の成約", "3ヶ月でROI 250%達成", "顧客満足度95%以上"]
    },
    {
      title: "暗号通貨系ツール",
      sales: "約500万",
      price: "298,000円",
      commission: "粗利20%",
      type: "FE商材",
      results: ["初月で300件の成約", "広告費回収率180%", "リピート購入率35%"]
    },
    {
      title: "無在庫物販ツール",
      sales: "約1,500万",
      price: "198,000円",
      commission: "粗利15%",
      type: "FE商材",
      results: ["業界平均の2倍の販売効率", "自動化により運用コスト70%削減", "初心者でも1ヶ月で利益創出"]
    }
  ];

  const developmentProjects = [
    {
      title: "pump.funのクローンサイト開発",
      description: "暗号資産取引プラットフォームのクローンサイトを開発。高度なセキュリティと安定性を実現。",
      technologies: ["Next.js", "TypeScript", "Web3.js", "Smart Contract", "Firebase"],
      image: "/placeholder-image-1.jpg",
      features: ["高速トランザクション処理", "多層セキュリティ設計", "直感的なユーザーインターフェース"]
    },
    {
      title: "エアドロップツールの開発",
      description: "暗号資産の自動配布システムを開発。大規模なトークン配布を効率的に実行。",
      technologies: ["Solidity", "React", "Node.js", "ERC-20", "AWS"],
      image: "/placeholder-image-2.jpg",
      features: ["ガス最適化アルゴリズム", "不正防止機能", "マルチチェーン対応"]
    },
    {
      title: "フラッシュローンを用いたアトミックコントラの開発",
      description: "DeFiプロトコルにおける複雑な取引を単一のトランザクションで実行するスマートコントラクトを開発。",
      technologies: ["Solidity", "Hardhat", "Ethers.js", "Uniswap", "Aave"],
      image: "/placeholder-image-3.jpg",
      features: ["0.5秒以内の処理完了", "複数DEX間の最適化ルーティング", "失敗時の自動ロールバック"]
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* スキーママークアップ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "headline": "実績・開発事例 | 零元創匠",
              "description": "零元創匠の開発実績とプロジェクト事例をご紹介します。Web開発、ブロックチェーン開発、業務効率化ツールの開発実績があります。",
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
                    "applicationCategory": "DeveloperApplication",
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
            { title: '実績', href: '/works', isCurrent: true }
          ]}
        />
        
        <motion.div 
          variants={fadeInUp}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">実績</h1>
          <p className="text-lg text-muted-foreground mb-8">
            私たちが手がけたプロジェクトの一部をご紹介します。技術とビジネスの両面で、クライアントの成功に貢献してきました。
          </p>
          <Separator className="max-w-md mx-auto" />
        </motion.div>

        {/* プロダクトローンチ実績 */}
        <motion.section variants={fadeInUp} className="mb-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">プロダクトローンチ実績</h2>
            <p className="text-muted-foreground mb-10">商品企画から販売戦略までトータルでサポートした事例</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {launchProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/5 shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          {project.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-muted-foreground">売上</p>
                          <p className="font-semibold">{project.sales}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">単価</p>
                          <p className="font-semibold">{project.price}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">報酬率</p>
                          <p className="font-semibold">{project.commission}</p>
                        </div>
                      </div>
                      
                      <Separator className="mb-6" />
                      
                      <div className="mt-auto">
                        <h4 className="font-medium mb-3">成果</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex text-sm">
                              <Check className="h-5 w-5 mr-2 text-primary shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 受託開発実績 */}
        <motion.section variants={fadeInUp}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">受託開発実績</h2>
            <p className="text-muted-foreground mb-10">クライアントの要望に応じたカスタムソリューション開発</p>
            
            <div className="space-y-16">
              {developmentProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <Card className="overflow-hidden border-primary/5 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-muted/30 aspect-video flex items-center justify-center p-4">
                        <div className="relative w-full h-full overflow-hidden rounded-md bg-muted">
                          {/* ここでnext/imageを使用 */}
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
                            主な特徴
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
          variants={fadeInUp} 
          className="mt-24 text-center"
        >
          <Card className="max-w-3xl mx-auto border-primary/10 bg-primary/5 backdrop-blur-sm shadow-lg">
            <CardContent className="pt-10 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">あなたのプロジェクトも成功させませんか？</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                私たちは技術力とビジネス感覚を兼ね備えたチームが、お客様のビジョンを実現します。
                まずはお気軽にご相談ください。
              </p>
              <Button size="lg" className="text-lg group" asChild>
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