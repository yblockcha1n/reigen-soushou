"use client";

import { motion } from "framer-motion";

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

export default function PrivacyPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="min-h-screen pt-20 pb-12 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. 個人情報の取り扱いについて</h2>
            <p className="text-muted-foreground">
              零元創匠（以下「当社」）は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（個人情報保護法）に基づき、個人情報の適切な取り扱い及び保護に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. 収集する個人情報の範囲</h2>
            <p className="text-muted-foreground">
              当社は、サービスの提供にあたり、以下の個人情報を取得させていただきます：
            </p>
            <ul className="list-disc list-inside pl-4 mt-2 text-muted-foreground">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号（任意）</li>
              <li>その他、サービス提供に必要な情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. 個人情報の利用目的</h2>
            <p className="text-muted-foreground">
              取得した個人情報は、以下の目的で利用いたします：
            </p>
            <ul className="list-disc list-inside pl-4 mt-2 text-muted-foreground">
              <li>サービスの提供及び業務の遂行</li>
              <li>お問い合わせへの対応</li>
              <li>サービスの品質向上</li>
              <li>重要なお知らせの通知</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. 個人情報の第三者提供</h2>
            <p className="text-muted-foreground">
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
            </p>
            <ul className="list-disc list-inside pl-4 mt-2 text-muted-foreground">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. 個人情報の安全管理</h2>
            <p className="text-muted-foreground">
              当社は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. 個人情報の開示・訂正・利用停止</h2>
            <p className="text-muted-foreground">
              お客様ご本人からの個人情報の開示、訂正、利用停止等のご要請につきましては、合理的な範囲で速やかに対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. プライバシーポリシーの変更</h2>
            <p className="text-muted-foreground">
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトでお知らせいたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. お問い合わせ</h2>
            <p className="text-muted-foreground">
              個人情報の取り扱いに関するお問い合わせは、以下の連絡先までご連絡ください：
            </p>
            <div className="mt-2 text-muted-foreground">
              <p>零元創匠</p>
              <p>Email: your-email@example.com</p>
              <p>Twitter: @your-handle</p>
            </div>
          </section>

          <section>
            <p className="text-muted-foreground text-sm">
              最終更新日: 2024年3月1日
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}