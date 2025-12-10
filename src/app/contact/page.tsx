"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
  FileText,
  Clock,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/constants/animations";
import type { ContactFormData, ContactApiResponse } from "@/types";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: '',
    type: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  // モバイルズーム防止のために、フォントサイズを調整
  useEffect(() => {
    // モバイルでのズーム防止のためのスタイルを追加
    const style = document.createElement('style');
    style.innerHTML = `
      @media screen and (max-width: 768px) {
        input, select, textarea {
          font-size: 16px !important; /* iOS での自動ズームを防止する最小フォントサイズ */
        }
        /* セレクトの中身も同様に */
        .radix-select-content * {
          font-size: 16px !important;
        }
      }
    `;
    document.head.appendChild(style);

    // クリーンアップ関数
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, type: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "お問い合わせの送信に失敗しました");
      }

      setSubmitStatus({
        success: true,
        message: "お問い合わせを送信しました。24時間以内にご返信いたします。",
      });

      setFormData({
        name: "",
        email: "",
        type: "",
        message: "",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "お問い合わせの送信に失敗しました。しばらく経ってからお試しください。";
      setSubmitStatus({
        success: false,
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Schema.org ContactPage マークアップを追加 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "零元創匠 お問い合わせページ",
              "description": "零元創匠へのお問い合わせはこちらから。Web開発、ブロックチェーン開発、業務効率化ツールについてのご質問・ご相談を承っております。",
              "url": "https://www.reigen-soushou.com/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "零元創匠",
                "email": "reigen.soushou@gmail.com",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "reigen.soushou@gmail.com",
                  "availableLanguage": {
                    "@type": "Language",
                    "name": "Japanese"
                  }
                }
              }
            })
          }}
        />

        {/* 装飾的な背景要素 */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        {/* パンくずリスト */}
        <BreadcrumbNav
          items={[
            { title: 'お問い合わせ', href: '/contact', isCurrent: true }
          ]}
        />
        
        <motion.div 
          variants={fadeInUp}
          className="max-w-6xl mx-auto mb-12 text-center relative z-10"
        >
          <Badge variant="outline" className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">
            Contact
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            お問い合わせ
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            弊社のサービスやプロジェクトについてのご質問・ご相談をお待ちしております。24時間以内に返信いたします。
          </p>
          <Separator className="max-w-md mx-auto mt-8" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          {/* 左側のコンタクト情報 */}
          <motion.div 
            variants={fadeInRight} 
            className="md:col-span-2"
          >
            <Card className="bg-card/80 backdrop-blur-sm border-primary/10 shadow-md h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">お問い合わせ方法</CardTitle>
                <CardDescription>
                  下記の方法でもご連絡いただけます
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Eメール</h3>
                    <p className="text-sm text-muted-foreground mb-1">お問い合わせはこちらから</p>
                    <a href="mailto:reigen.soushou@gmail.com" className="text-primary font-medium">
                      reigen.soushou@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">SNS</h3>
                    <p className="text-sm text-muted-foreground mb-1">Twitter/Xでもご連絡いただけます</p>
                    <a 
                      href="https://twitter.com/reigen_soushou_" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-medium"
                    >
                      @reigen_soushou_
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">対応時間</h3>
                    <p className="text-sm text-muted-foreground">平日: 9:00 - 18:00</p>
                    <p className="text-sm text-muted-foreground">24時間以内に返信いたします</p>
                  </div>
                </div>
                
                {/* 追加のカード - よくある質問 */}
                <Card className="border-border/50 mt-8 bg-card/50">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-base">よくある質問</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 text-sm">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 text-primary flex-shrink-0 mt-1">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>開発料金の目安を知りたい</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-primary flex-shrink-0 mt-1">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>開発期間はどのくらい必要か</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 text-primary flex-shrink-0 mt-1">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>開発実績を詳しく知りたい</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>

          {/* 右側のフォーム */}
          <motion.div 
            variants={fadeInLeft} 
            className="md:col-span-3"
          >
            <Card className="border-primary/10 shadow-lg overflow-hidden bg-card/80 backdrop-blur-sm">
              <CardHeader className="bg-muted/30">
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="h-5 w-5" />
                  <CardTitle>お問い合わせフォーム</CardTitle>
                </div>
                <CardDescription>
                  下記フォームに必要事項をご入力の上、送信してください。
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-6">
                {submitStatus && (
                  <Alert 
                    className={`mb-6 ${submitStatus.success ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-destructive/10 text-destructive'}`}
                  >
                    {submitStatus.success ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <AlertTitle>{submitStatus.success ? '送信完了' : 'エラー'}</AlertTitle>
                    <AlertDescription>{submitStatus.message}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      お名前 <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="例: 山田 太郎"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mobile-input bg-card/50 focus:bg-card/70 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      メールアドレス <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="例: example@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mobile-input bg-card/50 focus:bg-card/70 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type" className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      お問い合わせ種類 <span className="text-destructive ml-1">*</span>
                    </Label>
                    <Select 
                      value={formData.type} 
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger className="mobile-input bg-card/50 focus:bg-card/70 transition-colors">
                        <SelectValue placeholder="お問い合わせの種類を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="サービスについて">サービスについて</SelectItem>
                        <SelectItem value="お見積り依頼">お見積り依頼</SelectItem>
                        <SelectItem value="採用について">採用について</SelectItem>
                        <SelectItem value="その他のお問い合わせ">その他のお問い合わせ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      お問い合わせ内容
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="お問い合わせ内容を入力してください"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="mobile-input bg-card/50 focus:bg-card/70 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          送信中...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          送信する
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <Button variant="outline" className="group" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              ホームに戻る
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}