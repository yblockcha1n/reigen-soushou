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

export default function LegalPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="min-h-screen pt-20 pb-12 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">特定商取引法に基づく表記</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">事業者の名称</h2>
            <p className="text-muted-foreground">零元創匠</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">代表者</h2>
            <p className="text-muted-foreground">根岸 優翔</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">所在地</h2>
            <p className="text-muted-foreground">※ 取引時に共有させていただきます</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">お問い合わせ</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Twitter: @y2_______</p>
              <p>Email: your-email@example.com</p>
              <p>対応時間: 平日 9:00-18:00</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">料金</h2>
            <p className="text-muted-foreground">
              案件の内容により異なります。お見積りは無料で承ります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">支払方法</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>以下の支払方法に対応しております：</p>
              <ul className="list-disc list-inside pl-4">
                <li>銀行振込</li>
                <li>USDT(Tether)での支払い</li>
              </ul>
              <p>※ プロジェクトの規模により、前金と残金に分けてお支払いいただく場合があります。</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">納期</h2>
            <p className="text-muted-foreground">
              プロジェクトの規模により異なります。契約時に納期を設定させていただきます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">返品・キャンセルについて</h2>
            <p className="text-muted-foreground">
              受注制作のため、原則として返品・キャンセルはお受けできません。
              ただし、開発開始前のキャンセルについては、ご相談に応じます。
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}