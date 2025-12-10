"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Database, AlertCircle, Lock, ArrowLeft, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { fadeInUp, staggerContainer } from "@/constants/animations";

export default function PrivacyPage() {
  const privacyItems = [
    {
      title: "1. 個人情報の取り扱いについて",
      content: "零元創匠（以下「当社」）は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（個人情報保護法）に基づき、個人情報の適切な取り扱い及び保護に努めます。",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "2. 収集する個人情報の範囲",
      content: [
        "当社は、サービスの提供にあたり、以下の個人情報を取得させていただきます：",
        "・氏名",
        "・メールアドレス",
        "・電話番号（任意）",
        "・その他、サービス提供に必要な情報"
      ],
      icon: <Database className="h-5 w-5" />
    },
    {
      title: "3. 個人情報の利用目的",
      content: [
        "取得した個人情報は、以下の目的で利用いたします：",
        "・サービスの提供及び業務の遂行",
        "・お問い合わせへの対応",
        "・サービスの品質向上",
        "・重要なお知らせの通知"
      ],
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "4. 個人情報の第三者提供",
      content: [
        "当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：",
        "・お客様の同意がある場合",
        "・法令に基づく場合",
        "・人の生命、身体または財産の保護のために必要がある場合"
      ],
      icon: <AlertCircle className="h-5 w-5" />
    },
    {
      title: "5. 個人情報の安全管理",
      content: "当社は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。",
      icon: <Lock className="h-5 w-5" />
    },
    {
      title: "6. 個人情報の開示・訂正・利用停止",
      content: "お客様ご本人からの個人情報の開示、訂正、利用停止等のご要請につきましては、合理的な範囲で速やかに対応いたします。",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "7. プライバシーポリシーの変更",
      content: "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトでお知らせいたします。",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "8. お問い合わせ",
      content: [
        "個人情報の取り扱いに関するお問い合わせは、以下の連絡先までご連絡ください：",
        "",
        "零元創匠",
        "Email: reigen.soushou@gmail.com",
        "Twitter: @reigen_soushou_"
      ],
      icon: <Mail className="h-5 w-5" />
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
        {/* Schema.org WebPage マークアップを追加 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "プライバシーポリシー | 零元創匠",
              "description": "零元創匠のプライバシーポリシーをご案内します。個人情報の取り扱いについて定めています。",
              "url": "https://www.reigen-soushou.com/privacy",
              "datePublished": "2025-03-24",
              "dateModified": "2025-03-24",
              "publisher": {
                "@type": "Organization",
                "name": "零元創匠",
                "url": "https://www.reigen-soushou.com"
              }
            })
          }}
        />

        {/* パンくずリスト */}
        <BreadcrumbNav
          items={[
            { title: 'プライバシーポリシー', href: '/privacy', isCurrent: true }
          ]}
        />

        <motion.div 
          variants={fadeInUp}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            プライバシーポリシー
          </h1>
          <p className="text-lg text-muted-foreground">
            当社における個人情報の取り扱いについて定めています。
          </p>
          <Separator className="max-w-md mx-auto mt-8" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/5 shadow-lg bg-card/70 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              {privacyItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`p-6 ${index !== privacyItems.length - 1 ? 'border-b border-border/50' : ''}`}
                >
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full text-primary flex-shrink-0">
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

          <motion.div 
            variants={fadeInUp} 
            className="flex justify-between items-center mt-12"
          >
            <Button variant="outline" className="group" asChild>
              <a href="/">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                ホームに戻る
              </a>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              最終更新日: 2025年3月24日
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}