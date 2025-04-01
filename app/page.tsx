"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code2, Cpu, Globe, Layout, Lightbulb, Binary, 
  ArrowRight, Mail, Twitter, Rocket, CheckCircle, 
  ChevronRight, Users, Clock, MessageSquare 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FAQSection } from "@/components/faq-section";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
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

const spinAnimation = {
  animate: { 
    rotate: 360,
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity
    }
  }
};

// テキストアニメーション用のバリアント
const textAnimation = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [workflowRef, workflowInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [windowHeight, setWindowHeight] = useState(0);

  // テキストアニメーション用のステート
  const [sloganIndex, setSloganIndex] = useState(0);
  const slogans = [
    "零から始まるイノベーション",
    "零から創る未来の可能性",
    "零から紡ぐデジタル世界",
    "零からデザインする新時代",
    "零から挑戦する技術革新"
  ];

  // 定期的にテキストを切り替える
  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((current) => (current + 1) % slogans.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slogans.length]);

  // クライアントサイドでのみwindowの高さを取得
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // スクロールバーの重複を防ぐためのスタイル追加
    document.documentElement.style.overflowY = 'scroll';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Webアプリケーション開発/設計",
      description: "最新のテクノロジーを活用した、スケーラブルで高性能なWebアプリケーションを開発します。",
      features: ["React/Next.js", "Vue.js/Nuxt.js", "TypeScript", "REST API設計"]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "業務効率化ツールの開発",
      description: "お客様の業務フローを分析し、効率を最大化する独自のツールを開発します。",
      features: ["自動化ツール", "データ分析", "レポート生成", "ワークフロー最適化"]
    },
    {
      icon: <Binary className="h-8 w-8" />,
      title: "ブロックチェーン開発",
      description: "分散型台帳技術を活用した、革新的なソリューションを提供します。",
      features: ["スマートコントラクト", "DApp開発", "NFT実装", "Web3統合"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Webサイト開発",
      description: "モダンで使いやすい、高品質なWebサイトを制作します。",
      features: ["レスポンシブデザイン", "SEO対策", "パフォーマンス最適化", "CMS実装"]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "基幹システムの開発/設計",
      description: "企業の中核を支える、信頼性の高い基幹システムを構築します。",
      features: ["データベース設計", "セキュリティ対策", "システム統合", "保守運用"]
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "プロダクトローンチ支援",
      description: "商品のローンチから販売戦略まで、包括的なサポートを提供します。",
      features: ["マーケティング戦略", "販売システム構築", "アフィリエイト管理", "実績分析"]
    },
  ];

  const workflowSteps = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "1. 要件ヒアリング",
      description: "お客様の課題やビジョンをしっかりと理解し、最適な解決策を提案します。"
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "2. 設計・プロトタイピング",
      description: "使いやすさとビジネス目標を両立する設計を行い、早期にプロトタイプを提示します。"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "3. 開発・実装",
      description: "高品質なコードを迅速に開発し、定期的な進捗報告と調整を行います。"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "4. テスト・品質保証",
      description: "厳格なテストを実施し、安定した高品質な製品を提供します。"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "5. デプロイ・サポート",
      description: "円滑なリリースとその後の持続的なサポートで、安心してご利用いただけます。"
    }
  ];

  // ヒーローセクションの高さを動的に計算（ヘッダーの高さを考慮）
  // モバイル表示の場合にヘッダーとの距離を調整
  const heroHeight = windowHeight ? `calc(${windowHeight}px - 4rem)` : '100vh';

  return (
    <AnimatePresence mode="wait">
      <main className="bg-background">
        {/* Hero Section - モバイル表示の調整 */}
        <motion.section
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="relative flex items-center pt-6 sm:pt-0"
          style={{ minHeight: heroHeight }}
        >
          {/* 背景グラデーション */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/0 to-background pointer-events-none" />
          
          {/* 装飾的な丸 */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-70 animate-pulse pointer-events-none" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="order-2 lg:order-1 pt-12 sm:pt-0" // モバイルでの上部余白追加
                variants={fadeInRight}
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 tracking-tight"
                >
                  零元創匠
                </motion.h1>
                <div className="h-[40px] md:h-[48px] relative overflow-hidden mb-6">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={sloganIndex}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={textAnimation}
                      className="absolute text-xl md:text-2xl text-foreground/90 font-medium"
                    >
                      {slogans[sloganIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg mb-8 text-muted-foreground max-w-xl"
                >
                  世界はすべて「0」から始まります。私たちは、その無限の可能性から、
                  新たな価値を創造する技術集団です。
                </motion.p>
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <Button size="lg" className="text-lg group" asChild>
                    <Link href="/contact">
                      お問い合わせ
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg" asChild>
                    <Link href="/works">
                      実績を見る
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>

              {/* 修正した特徴リスト部分 */}
              <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:justify-start sm:space-x-8">
                {[
                  { icon: <CheckCircle className="h-5 w-5" />, text: "高いエンジニアリング品質" },
                  { icon: <Clock className="h-5 w-5" />, text: "迅速な開発・納品" },
                  { icon: <Users className="h-5 w-5" />, text: "伴走型のサポート" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center text-sm text-muted-foreground whitespace-nowrap"
                  >
                    <div className="mr-2 text-primary flex-shrink-0">{item.icon}</div>
                    {item.text}
                  </motion.div>
                ))}
              </div>
              </motion.div>

              {/* ヒーロー右側の装飾的要素 - PCのみ表示 */}
              <motion.div 
                variants={fadeInLeft}
                className="hidden lg:flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-md">
                  {/* 回転する装飾だけを表示 */}
                  <div className="relative aspect-square flex items-center justify-center">
                    {/* 回転する円 - 大 */}
                    <motion.div 
                      animate={spinAnimation.animate}
                      className="absolute w-64 h-64 md:w-80 md:h-80 border border-primary/20 rounded-full"
                    />
                    {/* 回転する円 - 中 */}
                    <motion.div 
                      animate={{
                        ...spinAnimation.animate,
                        transition: {
                          ...spinAnimation.animate.transition,
                          duration: 15
                        }
                      }}
                      className="absolute w-48 h-48 md:w-64 md:h-64 border border-primary/30 rounded-full"
                    />
                    {/* 回転する円 - 小 */}
                    <motion.div 
                      animate={{
                        ...spinAnimation.animate,
                        transition: {
                          ...spinAnimation.animate.transition,
                          duration: 25,
                          delay: 2
                        }
                      }}
                      className="absolute w-32 h-32 md:w-48 md:h-48 border border-primary/40 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="py-20 bg-muted/30"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              variants={fadeInUp}
            >
              <Badge variant="outline" className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">
                Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                サービス内容
              </h2>
              <p className="text-lg text-muted-foreground">
                私たちは、最新のテクノロジーとノウハウを駆使し、お客様のビジネスに最適なソリューションを提供します。
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
              variants={staggerContainer}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-5 p-3 bg-primary/10 rounded-lg w-fit text-primary">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-5">{service.description}</p>
                      
                      <div className="mt-auto">
                        <Separator className="mb-5" />
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <ChevronRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
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

        {/* Workflow Section */}
        <motion.section
          ref={workflowRef}
          initial="hidden"
          animate={workflowInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="py-20 bg-background"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              variants={fadeInUp}
            >
              <Badge variant="outline" className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">
                Workflow
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                開発フロー
              </h2>
              <p className="text-lg text-muted-foreground">
                私たちは効率的で透明性の高い開発プロセスを採用し、お客様と密に連携しながらプロジェクトを進めます。
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              {workflowSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* ステップの丸と線 */}
                  <div className="flex flex-col items-center mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary border border-primary/20 z-10">
                      {step.icon}
                    </div>
                    {index !== workflowSteps.length - 1 && (
                      <div className="w-px h-full bg-border/60 absolute top-12 bottom-0 left-6" />
                    )}
                  </div>
                  
                  {/* ステップの内容 */}
                  <div className="pt-1 flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
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
          className="py-20 bg-muted/30 relative"
        >
          {/* 装飾的な背景 */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div className="max-w-3xl mx-auto text-center" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <Badge variant="outline" className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">
                  Philosophy
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-12">企業理念</h2>
              </motion.div>
              
              <Card className="border-primary/10 bg-card/60 backdrop-blur-sm shadow-lg mb-8">
                <CardContent className="pt-6 pb-6">
                  <motion.p 
                    variants={fadeInUp}
                    className="text-lg leading-relaxed mb-6"
                  >
                    数学において「零元」は、どのような数と組み合わせても、その数の本質を変えない特別な存在です。
                    私たちはこの「零元」の精神に倣い、お客様のビジョンやアイデアの本質を損なうことなく、
                    最新のテクノロジーという新たな次元へと昇華させます。
                  </motion.p>
                  <motion.p 
                    variants={fadeInUp}
                    className="text-lg leading-relaxed"
                  >
                    「匠」の精神で、一つひとつのコードを丁寧に紡ぎ、デジタルの世界に信頼と革新をもたらします。
                    点と点が線となり、線と線が面となるように、私たちは個々の技術を組み合わせ、
                    これまでになかった価値の創造に挑戦し続けます。
                  </motion.p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "革新", description: "常に最新の技術と知見を探求し、革新的なソリューションを生み出します。" },
                  { title: "信頼", description: "高品質で安定したシステムを提供し、お客様との信頼関係を築きます。" },
                  { title: "成長", description: "お客様と共に成長し、社会に価値をもたらすことを目指します。" }
                ].map((value, index) => (
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

        {/* FAQ Section */}
        <motion.section
          id="faq"
          ref={faqRef}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="py-20 bg-background"
        >
          <FAQSection
            faqs={[
              {
                question: "零元創匠のサービス内容について教えてください",
                answer: "Webアプリケーション開発、ブロックチェーン開発、業務効率化ツールの開発などを提供しています。技術とビジネスの両面からお客様の課題解決をサポートします。"
              },
              {
                question: "開発の見積もりを依頼するにはどうすればよいですか？",
                answer: "お問い合わせページのフォームから、または直接メール（reigen.soushou@gmail.com）にてご連絡ください。詳細なヒアリングの上、最適な提案と見積もりをご提示します。"
              },
              {
                question: "納期はどのくらいかかりますか？",
                answer: "プロジェクトの規模や要件によって異なります。小規模なWebサイト制作であれば2〜4週間程度、複雑なシステム開発の場合は3〜6ヶ月程度を目安としています。詳細はお問い合わせください。"
              },
              {
                question: "保守・運用サポートはありますか？",
                answer: "はい、開発後の保守・運用サポートも承っております。月額料金でのサポートプランや、スポット対応など、お客様のニーズに合わせたサポート体制をご用意しています。"
              },
              {
                question: "どのような技術スタックを使用していますか？",
                answer: "フロントエンドはReact/Next.js、Vue.js/Nuxt.jsなど、バックエンドはNode.js、Python、PHPなど、データベースはMySQLやPostgreSQL、MongoDBなどを案件に応じて使い分けています。ブロックチェーン開発ではSolidity、Web3.jsなども活用しています。"
              }
            ]}
          />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="py-20 bg-muted/30"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-12"
              variants={fadeInUp}
            >
              <Badge variant="outline" className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">
                Contact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
              <p className="text-lg text-muted-foreground mb-8">
                ご質問やプロジェクトのご相談など、お気軽にお問い合わせください。
                24時間以内に返信いたします。
              </p>
            </motion.div>

            <motion.div 
              className="max-w-xl mx-auto text-center"
              variants={fadeInUp}
            >
              <Button size="lg" className="text-lg group" asChild>
                <Link href="/contact">
                  お問い合わせフォームへ進む
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <p className="mt-6 text-muted-foreground">
                お急ぎの場合は下記の方法でも直接ご連絡いただけます
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <motion.div
                  variants={fadeInRight}
                  whileHover={{ y: -5 }}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">メールでのお問い合わせ</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    お気軽にメールでご連絡ください。
                    24時間以内に返信させていただきます。
                  </p>
                  <Button variant="default" className="w-full" asChild>
                    <a href="mailto:reigen.soushou@gmail.com">
                      メールを送る
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  whileHover={{ y: -5 }}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                    <Twitter className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Twitter DMでのお問い合わせ</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    TwitterのDMでも気軽にご相談いただけます。
                    平日9:00-18:00で対応しております。
                  </p>
                  <Button variant="default" className="w-full" asChild>
                    <a href="https://twitter.com/reigen_soushou_" target="_blank" rel="noopener noreferrer">
                      プロフィールを見る
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </AnimatePresence>
  );
}