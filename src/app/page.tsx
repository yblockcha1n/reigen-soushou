"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FAQSection } from "@/components/faq-section";
import {
  HeroSection,
  ServicesSection,
  WorkflowSection,
  PhilosophySection,
  ContactSection,
} from "@/components/sections";
import { fadeInUp } from "@/constants/animations";

const HOME_FAQS = [
  {
    question: "零元創匠のサービス内容について教えてください",
    answer:
      "Webアプリケーション開発、ブロックチェーン開発、業務効率化ツールの開発などを提供しています。技術とビジネスの両面からお客様の課題解決をサポートします。",
  },
  {
    question: "開発の見積もりを依頼するにはどうすればよいですか？",
    answer:
      "お問い合わせページのフォームから、または直接メール（reigen.soushou@gmail.com）にてご連絡ください。詳細なヒアリングの上、最適な提案と見積もりをご提示します。",
  },
  {
    question: "納期はどのくらいかかりますか？",
    answer:
      "プロジェクトの規模や要件によって異なります。小規模なWebサイト制作であれば2〜4週間程度、複雑なシステム開発の場合は3〜6ヶ月程度を目安としています。詳細はお問い合わせください。",
  },
  {
    question: "保守・運用サポートはありますか？",
    answer:
      "はい、開発後の保守・運用サポートも承っております。月額料金でのサポートプランや、スポット対応など、お客様のニーズに合わせたサポート体制をご用意しています。",
  },
  {
    question: "どのような技術スタックを使用していますか？",
    answer:
      "フロントエンドはReact/Next.js、Vue.js/Nuxt.jsなど、バックエンドはNode.js、Python、PHPなど、データベースはMySQLやPostgreSQL、MongoDBなどを案件に応じて使い分けています。ブロックチェーン開発ではSolidity、Web3.jsなども活用しています。",
  },
];

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [workflowRef, workflowInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <AnimatePresence mode="wait">
      <main className="bg-background">
        <HeroSection heroRef={heroRef} heroInView={heroInView} />

        <ServicesSection servicesRef={servicesRef} servicesInView={servicesInView} />

        <WorkflowSection workflowRef={workflowRef} workflowInView={workflowInView} />

        <PhilosophySection philosophyRef={philosophyRef} philosophyInView={philosophyInView} />

        <motion.section
          id="faq"
          ref={faqRef}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="py-20 bg-background"
        >
          <FAQSection faqs={HOME_FAQS} />
        </motion.section>

        <ContactSection contactRef={contactRef} contactInView={contactInView} />
      </main>
    </AnimatePresence>
  );
}
