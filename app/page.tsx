"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Cpu, Globe, Layout, Lightbulb, Binary, ArrowRight, Mail, Twitter, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Webアプリケーション開発/設計",
      description: "最新のテクノロジーを活用した、スケーラブルで高性能なWebアプリケーションを開発します。",
      features: ["React/Next.js", "Vue.js/Nuxt.js", "TypeScript", "REST API設計"]
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "業務効率化ツールの開発",
      description: "お客様の業務フローを分析し、効率を最大化する独自のツールを開発します。",
      features: ["自動化ツール", "データ分析", "レポート生成", "ワークフロー最適化"]
    },
    {
      icon: <Binary className="h-6 w-6" />,
      title: "ブロックチェーン開発",
      description: "分散型台帳技術を活用した、革新的なソリューションを提供します。",
      features: ["スマートコントラクト", "DApp開発", "NFT実装", "Web3統合"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Webサイト開発",
      description: "モダンで使いやすい、高品質なWebサイトを制作します。",
      features: ["レスポンシブデザイン", "SEO対策", "パフォーマンス最適化", "CMS実装"]
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "基幹システムの開発/設計",
      description: "企業の中核を支える、信頼性の高い基幹システムを構築します。",
      features: ["データベース設計", "セキュリティ対策", "システム統合", "保守運用"]
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "プロダクトローンチ支援",
      description: "商品のローンチから販売戦略まで、包括的なサポートを提供します。",
      features: ["マーケティング戦略", "販売システム構築", "アフィリエイト管理", "実績分析"]
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/5 pointer-events-none" />
          <motion.div 
            className="max-w-4xl mx-auto z-10"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
            >
              零元創匠
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-muted-foreground"
            >
              零から始まるイノベーション
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-muted-foreground"
            >
              世界はすべて「0」から始まります。私たちは、その無限の可能性から、
              新たな価値を創造する技術集団です。
            </motion.p>
            <motion.div variants={fadeInUp} className="space-x-4">
              <Button size="lg" className="text-lg group" asChild>
                <a href="#contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="/works">
                  実績を見る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="py-20 px-4 bg-muted/50"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              サービス内容
            </h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4 text-primary">
                      {service.icon}
                      <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Separator className="my-4" />
                    <ul className="mt-auto space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          id="philosophy"
          ref={philosophyRef}
          initial="hidden"
          animate={philosophyInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="py-20 px-4 bg-background"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">企業理念</h2>
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
            >
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-muted-foreground"
              >
                数学において「零元」は、どのような数と組み合わせても、その数の本質を変えない特別な存在です。
                私たちはこの「零元」の精神に倣い、お客様のビジョンやアイデアの本質を損なうことなく、
                最新のテクノロジーという新たな次元へと昇華させます。
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-muted-foreground"
              >
                「匠」の精神で、一つひとつのコードを丁寧に紡ぎ、デジタルの世界に信頼と革新をもたらします。
                点と点が線となり、線と線が面となるように、私たちは個々の技術を組み合わせ、
                これまでになかった価値の創造に挑戦し続けます。
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="py-20 px-4 bg-muted/50"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">お問い合わせ</h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-background rounded-lg shadow-lg"
              >
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">メールでのお問い合わせ</h3>
                <p className="text-muted-foreground mb-4">
                  お気軽にメールでご連絡ください。
                  24時間以内に返信させていただきます。
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:your-email@example.com">
                    メールを送る
                  </a>
                </Button>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-background rounded-lg shadow-lg"
              >
                <Twitter className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Twitter DMでのお問い合わせ</h3>
                <p className="text-muted-foreground mb-4">
                  TwitterのDMでも気軽にご相談いただけます。
                  平日9:00-18:00で対応しております。
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://twitter.com/messages/compose?recipient_id=y2_______" target="_blank" rel="noopener noreferrer">
                    DMを送る
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </AnimatePresence>
  );
}