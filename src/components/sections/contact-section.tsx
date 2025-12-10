"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/constants/animations";

interface ContactSectionProps {
  contactRef: (node?: Element | null) => void;
  contactInView: boolean;
}

export function ContactSection({ contactRef, contactInView }: ContactSectionProps) {
  return (
    <motion.section
      id="contact"
      ref={contactRef}
      initial="hidden"
      animate={contactInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl mx-auto text-center mb-12" variants={fadeInUp}>
          <Badge
            variant="outline"
            className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm"
          >
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-lg text-muted-foreground mb-8">
            ご質問やプロジェクトのご相談など、お気軽にお問い合わせください。
            24時間以内に返信いたします。
          </p>
        </motion.div>

        <motion.div className="max-w-xl mx-auto text-center" variants={fadeInUp}>
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
                お気軽にメールでご連絡ください。 24時間以内に返信させていただきます。
              </p>
              <Button variant="default" className="w-full" asChild>
                <a href="mailto:reigen.soushou@gmail.com">メールを送る</a>
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
              <h3 className="text-xl font-semibold mb-3 text-center">
                Twitter DMでのお問い合わせ
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                TwitterのDMでも気軽にご相談いただけます。 平日9:00-18:00で対応しております。
              </p>
              <Button variant="default" className="w-full" asChild>
                <a
                  href="https://twitter.com/reigen_soushou_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  プロフィールを見る
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
