"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const HOME_FAQS = [
  {
    question: "零元創匠のサービス内容について教えてください",
    answer:
      "基幹システム開発、Webアプリケーション開発、業務効率化ツールの開発などを提供しています。お客様の業務課題を分析し、最適なシステムソリューションをご提案します。",
  },
  {
    question: "開発の見積もりを依頼するにはどうすればよいですか？",
    answer:
      "お問い合わせページのフォームから、または直接メール（negishi-yuto@reigen-soushou.com）にてご連絡ください。詳細なヒアリングの上、最適な提案と見積もりをご提示します。",
  },
  {
    question: "納期はどのくらいかかりますか？",
    answer:
      "プロジェクトの規模や要件によって異なります。小規模なWebサイト制作であれば2〜4週間程度、基幹システム開発の場合は3〜6ヶ月程度を目安としています。詳細はお問い合わせください。",
  },
  {
    question: "保守・運用サポートはありますか？",
    answer:
      "はい、開発後の保守・運用サポートも承っております。月額料金でのサポートプランや、スポット対応など、お客様のニーズに合わせたサポート体制をご用意しています。",
  },
  {
    question: "どのような技術スタックを使用していますか？",
    answer:
      "フロントエンドはReact/Next.js、Vue.js/Nuxt.jsなど、バックエンドはNode.js、Python、PHPなど、データベースはMySQLやPostgreSQL、MongoDBなどを案件に応じて使い分けています。",
  },
];

const SERVICES = [
  {
    title: "Webアプリケーション開発/設計",
    description: "最新のテクノロジーを活用した、スケーラブルで高性能なWebアプリケーションを開発します。",
    features: ["React/Next.js", "Vue.js/Nuxt.js", "TypeScript", "REST API設計"],
  },
  {
    title: "業務効率化ツールの開発",
    description: "お客様の業務フローを分析し、効率を最大化する独自のツールを開発します。",
    features: ["自動化ツール", "データ分析", "レポート生成", "ワークフロー最適化"],
  },
  {
    title: "API連携・システム統合",
    description: "外部サービスとの連携や既存システムの統合を実現します。",
    features: ["REST/GraphQL API", "外部サービス連携", "データ移行", "マイクロサービス"],
  },
  {
    title: "Webサイト開発",
    description: "モダンで使いやすい、高品質なWebサイトを制作します。",
    features: ["レスポンシブデザイン", "SEO対策", "パフォーマンス最適化", "CMS実装"],
  },
  {
    title: "基幹システムの開発/設計",
    description: "企業の中核を支える、信頼性の高い基幹システムを構築します。",
    features: ["データベース設計", "セキュリティ対策", "システム統合", "保守運用"],
  },
  {
    title: "保守・運用サポート",
    description: "システム導入後の安定稼働を支える、継続的なサポートを提供します。",
    features: ["24時間監視体制", "定期メンテナンス", "機能追加・改修", "ヘルプデスク対応"],
  },
];

const WORKFLOW_STEPS = [
  { num: "1", title: "要件ヒアリング", description: "お客様の課題やビジョンをしっかりと理解し、最適な解決策を提案します。" },
  { num: "2", title: "設計・プロトタイピング", description: "使いやすさとビジネス目標を両立する設計を行い、早期にプロトタイプを提示します。" },
  { num: "3", title: "開発・実装", description: "高品質なコードを迅速に開発し、定期的な進捗報告と調整を行います。" },
  { num: "4", title: "テスト・品質保証", description: "厳格なテストを実施し、安定した高品質な製品を提供します。" },
  { num: "5", title: "デプロイ・サポート", description: "円滑なリリースとその後の持続的なサポートで、安心してご利用いただけます。" },
];

export default function Home() {
  const [visitorCount, setVisitorCount] = useState("000000");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const count = Math.floor(Math.random() * 9999) + 10000;
    setVisitorCount(count.toString().padStart(6, "0"));
  }, []);

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '8px' }}>
      {/* ========== ヒーローセクション ========== */}
      <div className="win95-raised" style={{ padding: '8px', marginBottom: '16px' }}>
        <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#ffffff', border: '1px solid #808080' }}>
          <p style={{ fontSize: '10px', marginBottom: '4px' }}>
            <span className="star">★</span> ようこそ！ <span className="star">★</span>
          </p>
          <h1 style={{ fontSize: '32px', color: '#000080', marginBottom: '8px' }}>
            ～ 零 元 創 匠 ～
          </h1>
          <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
            <p className="marquee-text rainbow-text" style={{ fontSize: '16px' }}>
              ★☆★ 零から始まるイノベーション ～ 零から創る未来の可能性 ～ 零から紡ぐデジタル世界 ★☆★
            </p>
          </div>
          <p style={{ fontSize: '14px', marginBottom: '12px' }}>
            世界はすべて「0」から始まります。<br />
            私たちは、その無限の可能性から、新たな価値を創造する技術集団です。
          </p>
          <p style={{ marginBottom: '8px' }}>
            <span className="blink new-badge">NEW!</span>{' '}
            <span style={{ fontSize: '12px' }}>サイトをリニューアルしました！</span>
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <Link href="/contact" className="win95-button" style={{ fontSize: '14px', fontWeight: 'bold' }}>
              ▶ お問い合わせ
            </Link>
            <Link href="/works" className="win95-button" style={{ fontSize: '14px' }}>
              ▶ 実績を見る
            </Link>
          </div>

          <hr />
          <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '4px 12px', fontSize: '12px', textAlign: 'center' }}>
                  ✓ 高いエンジニアリング品質
                </td>
                <td style={{ padding: '4px 12px', fontSize: '12px', textAlign: 'center' }}>
                  ✓ 迅速な開発・納品
                </td>
                <td style={{ padding: '4px 12px', fontSize: '12px', textAlign: 'center' }}>
                  ✓ 伴走型のサポート
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== ヒットカウンター ========== */}
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '11px' }}>あなたは</span>{' '}
        <span className="hit-counter">{visitorCount}</span>{' '}
        <span style={{ fontSize: '11px' }}>人目のお客様です</span>
      </div>

      <div className="retro-separator">- * - * - * - * - * - * - * - * -</div>

      {/* ========== サービスセクション ========== */}
      <div id="services">
        <table style={{ width: '100%', marginBottom: '8px' }}>
          <tbody>
            <tr>
              <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                ■ サービス内容
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>
          私たちは、最新のテクノロジーとノウハウを駆使し、お客様のビジネスに最適なソリューションを提供します。
        </p>

        <table className="retro-table" style={{ marginBottom: '16px' }}>
          <thead>
            <tr>
              <th style={{ width: '30%' }}>サービス名</th>
              <th style={{ width: '40%' }}>概要</th>
              <th style={{ width: '30%' }}>対応技術</th>
            </tr>
          </thead>
          <tbody>
            {SERVICES.map((service, index) => (
              <tr key={index}>
                <td style={{ fontWeight: 'bold', verticalAlign: 'top' }}>
                  {service.title}
                </td>
                <td style={{ verticalAlign: 'top' }}>{service.description}</td>
                <td style={{ verticalAlign: 'top', fontSize: '12px' }}>
                  {service.features.map((f, i) => (
                    <span key={i}>・{f}<br /></span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="retro-separator">- * - * - * - * - * - * - * - * -</div>

      {/* ========== 開発フローセクション ========== */}
      <div>
        <table style={{ width: '100%', marginBottom: '8px' }}>
          <tbody>
            <tr>
              <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                ■ 開発フロー
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>
          私たちは効率的で透明性の高い開発プロセスを採用しています。
        </p>

        <table style={{ margin: '0 auto', borderCollapse: 'collapse', marginBottom: '16px' }}>
          <tbody>
            {WORKFLOW_STEPS.map((step, index) => (
              <tr key={index}>
                <td style={{ padding: '8px', textAlign: 'center', verticalAlign: 'top' }}>
                  <div className="win95-raised" style={{ display: 'inline-block', padding: '8px 12px', minWidth: '40px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#000080' }}>
                      {step.num}
                    </span>
                  </div>
                </td>
                <td style={{ padding: '8px', verticalAlign: 'top' }}>
                  <strong>{step.title}</strong>
                  <br />
                  <span style={{ fontSize: '12px', color: '#404040' }}>
                    {step.description}
                  </span>
                </td>
                <td style={{ padding: '8px', textAlign: 'center', verticalAlign: 'middle' }}>
                  {index < WORKFLOW_STEPS.length - 1 && (
                    <span style={{ fontSize: '20px', color: '#000080' }}>▼</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="retro-separator">- * - * - * - * - * - * - * - * -</div>

      {/* ========== 企業理念セクション ========== */}
      <div id="philosophy">
        <table style={{ width: '100%', marginBottom: '8px' }}>
          <tbody>
            <tr>
              <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                ■ 企業理念
              </td>
            </tr>
          </tbody>
        </table>

        <div className="retro-card">
          <div className="retro-card-inner" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>
              数学において「零元」は、どのような数と組み合わせても、<br />
              その数の本質を変えない特別な存在です。
            </p>
            <p style={{ fontSize: '13px', color: '#404040', marginBottom: '8px' }}>
              私たちはこの「零元」の精神に倣い、お客様のビジョンやアイデアの本質を損なうことなく、<br />
              最新のテクノロジーという新たな次元へと昇華させます。
            </p>
            <p style={{ fontSize: '13px', color: '#404040' }}>
              「匠」の精神で、一つひとつのコードを丁寧に紡ぎ、デジタルの世界に信頼と革新をもたらします。
            </p>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', marginBottom: '16px' }}>
          <tbody>
            <tr>
              {[
                { title: '革新', desc: '常に最新の技術と知見を探求し、革新的なソリューションを生み出します。' },
                { title: '信頼', desc: '高品質で安定したシステムを提供し、お客様との信頼関係を築きます。' },
                { title: '成長', desc: 'お客様と共に成長し、社会に価値をもたらすことを目指します。' },
              ].map((value, index) => (
                <td key={index} style={{ width: '33%', padding: '8px', verticalAlign: 'top' }}>
                  <div className="win95-raised" style={{ padding: '8px', height: '100%' }}>
                    <div style={{ backgroundColor: '#ffffff', border: '1px solid #808080', padding: '8px', textAlign: 'center' }}>
                      <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#000080', marginBottom: '4px' }}>
                        {value.title}
                      </p>
                      <p style={{ fontSize: '12px', color: '#404040' }}>
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="retro-separator">- * - * - * - * - * - * - * - * -</div>

      {/* ========== FAQセクション ========== */}
      <div id="faq">
        <table style={{ width: '100%', marginBottom: '8px' }}>
          <tbody>
            <tr>
              <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                ■ よくある質問（FAQ）
              </td>
            </tr>
          </tbody>
        </table>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": HOME_FAQS.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />

        <div style={{ marginBottom: '16px' }}>
          {HOME_FAQS.map((faq, index) => (
            <div key={index} className="win95-raised" style={{ marginBottom: '4px', padding: '2px' }}>
              <div
                style={{
                  padding: '6px 8px',
                  cursor: 'pointer',
                  backgroundColor: openFaq === index ? '#d0d0d0' : '#c0c0c0',
                  fontWeight: 'bold',
                  fontSize: '13px',
                }}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {openFaq === index ? '▼' : '▶'} Q: {faq.question}
              </div>
              {openFaq === index && (
                <div style={{
                  padding: '8px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #808080',
                  fontSize: '13px',
                }}>
                  <strong>A:</strong> {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="retro-separator">- * - * - * - * - * - * - * - * -</div>

      {/* ========== お問い合わせセクション ========== */}
      <div id="contact">
        <table style={{ width: '100%', marginBottom: '8px' }}>
          <tbody>
            <tr>
              <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                ■ お問い合わせ
              </td>
            </tr>
          </tbody>
        </table>

        <div className="retro-card">
          <div className="retro-card-inner" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              ご質問やプロジェクトのご相談など、お気軽にお問い合わせください。<br />
              24時間以内に返信いたします。
            </p>

            <div style={{ marginBottom: '12px' }}>
              <Link href="/contact" className="win95-button" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                ▶ お問い合わせフォームへ進む
              </Link>
            </div>

            <hr />

            <p style={{ fontSize: '12px', marginBottom: '8px' }}>
              お急ぎの場合は下記の方法でも直接ご連絡いただけます
            </p>

            <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '8px' }}>
                    <div className="win95-raised" style={{ padding: '8px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>✉ メール</p>
                      <p style={{ fontSize: '12px', marginBottom: '4px' }}>お気軽にメールでご連絡ください</p>
                      <a href="mailto:negishi-yuto@reigen-soushou.com" className="win95-button">
                        メールを送る
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="retro-separator">- * - * - * - * - * - * - * - * -</div>

      {/* 最終更新 */}
      <div style={{ textAlign: 'center', fontSize: '11px', color: '#808080', marginBottom: '16px' }}>
        <p>
          <span className="star">☆</span>{' '}
          Last updated: 2025/03/24{' '}
          <span className="star">☆</span>
        </p>
        <p style={{ marginTop: '4px' }}>
          <span className="star">★</span> このサイトはリンクフリーです <span className="star">★</span>
        </p>
      </div>
    </main>
  );
}
