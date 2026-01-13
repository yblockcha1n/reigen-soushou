"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Building2, User, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { waFadeInUp, staggerContainer, floatAnimation } from "@/constants/animations";
import { GridBackground } from "@/components/effects";
import { VerticalText } from "@/components/typography/VerticalText";
import { MonochromeMap } from "@/components/MonochromeMap";
import Link from "next/link";

const LOCATION = {
  address: "宮城県仙台市若林区蒲町14-22",
  building: "ルミナーレK",
  fullAddress: "宮城県仙台市若林区蒲町14-22 ルミナーレK",
};

const COMPANY_INFO = [
  {
    icon: <Building2 className="h-5 w-5" />,
    label: "屋号",
    value: "零元創匠",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "代表者",
    value: "根岸 優翔",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "所在地",
    value: LOCATION.fullAddress,
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "メールアドレス",
    value: "reigen.soushou@gmail.com",
    isLink: true,
    href: "mailto:reigen.soushou@gmail.com",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "営業時間",
    value: "平日 9:00 - 18:00",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    label: "定休日",
    value: "土日祝日",
  },
];

export default function AboutPage() {
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
          text="会社"
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
              "@type": "LocalBusiness",
              "name": "零元創匠",
              "description": "基幹システム開発、Webアプリケーション開発、業務効率化ツールの開発を提供する技術集団です。",
              "url": "https://www.reigen-soushou.com/about",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "蒲町14-22 ルミナーレK",
                "addressLocality": "仙台市若林区",
                "addressRegion": "宮城県",
                "postalCode": "984-0037",
                "addressCountry": "JP"
              },
              "email": "reigen.soushou@gmail.com",
              "openingHours": "Mo-Fr 09:00-18:00"
            })
          }}
        />

        {/* パンくずリスト */}
        <BreadcrumbNav
          items={[
            { title: '私たちについて', href: '/about', isCurrent: true }
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
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">私たちについて</h1>
          <p className="text-lg text-muted-foreground mb-8">
            零元創匠は、「零から始まるイノベーション」をモットーに、<br />
            お客様の業務課題を解決するシステム開発を行っています。
          </p>
          <Separator className="max-w-md mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* 会社情報カード */}
          <motion.div variants={waFadeInUp}>
            <Card className="h-full border-border/30 bg-card/50 backdrop-blur-sm shadow-lg glow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  事業者情報
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {COMPANY_INFO.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-primary/10 p-2 rounded-full text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.isLink ? (
                        <a
                          href={item.href}
                          className="font-medium text-primary hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* マップカード */}
          <motion.div variants={waFadeInUp}>
            <Card className="h-full border-border/30 bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden glow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  所在地
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <MonochromeMap
                  address={LOCATION.address}
                  zoom={17}
                  className="h-[400px] w-full"
                />
                <div className="p-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-2">住所</p>
                  <p className="font-medium">{LOCATION.fullAddress}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION.fullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline mt-3"
                  >
                    Google Mapsで開く
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 理念セクション */}
        <motion.section variants={waFadeInUp} className="mt-16">
          <Card className="max-w-4xl mx-auto border-border/30 bg-card/50 backdrop-blur-sm shadow-lg glow">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">私たちの想い</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                「零」から始まる無限の可能性。<br />
                私たちは、お客様のビジネスに寄り添い、課題を深く理解し、<br />
                最適なシステムソリューションを提供することで、<br />
                お客様の成功に貢献することを使命としています。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                基幹システム開発、業務効率化ツール、Webアプリケーション開発など、<br />
                技術力とビジネス理解を兼ね備えたチームが、<br />
                お客様のビジョンを形にします。
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* CTA */}
        <motion.div variants={waFadeInUp} className="mt-12 text-center">
          <Button size="lg" className="text-lg group glow-hover" asChild>
            <Link href="/contact">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
