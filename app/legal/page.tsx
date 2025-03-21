"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, Mail, MapPin, CreditCard, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      staggerChildren: 0.1
    }
  }
};

export default function LegalPage() {
  const legalItems = [
    {
      title: "事業者の名称",
      content: "零元創匠",
      icon: <Info className="h-5 w-5" />
    },
    {
      title: "代表者",
      content: "根岸 優翔",
      icon: <Info className="h-5 w-5" />
    },
    {
      title: "所在地",
      content: "※ 取引時に共有させていただきます",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      title: "お問い合わせ",
      content: [
        "Twitter: @y2_______",
        "Email: your-email@example.com",
        "対応時間: 平日 9:00-18:00"
      ],
      icon: <Mail className="h-5 w-5" />
    },
    {
      title: "料金",
      content: "案件の内容により異なります。お見積りは無料で承ります。",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      title: "支払方法",
      content: [
        "以下の支払方法に対応しております：",
        "・銀行振込",
        "・USDT(Tether)での支払い",
        "",
        "※ プロジェクトの規模により、前金と残金に分けてお支払いいただく場合があります。"
      ],
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      title: "納期",
      content: "プロジェクトの規模により異なります。契約時に納期を設定させていただきます。",
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: "返品・キャンセルについて",
      content: "受注制作のため、原則として返品・キャンセルはお受けできません。ただし、開発開始前のキャンセルについては、ご相談に応じます。",
      icon: <Info className="h-5 w-5" />
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
        <motion.div 
          variants={fadeInUp}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            特定商取引法に基づく表記
          </h1>
          <p className="text-lg text-muted-foreground">
            当社のサービス提供における取引条件を明記しております。
          </p>
          <Separator className="max-w-md mx-auto mt-8" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/5 shadow-lg bg-card/70 backdrop-blur-sm">
            <CardContent className="p-0">
              {legalItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`p-6 ${index !== legalItems.length - 1 ? 'border-b border-border/50' : ''}`}
                >
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                      {Array.isArray(item.content) ? (
                        <div className="text-muted-foreground space-y-1">
                          {item.content.map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <Button variant="outline" className="group" asChild>
              <a href="/">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                ホームに戻る
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}