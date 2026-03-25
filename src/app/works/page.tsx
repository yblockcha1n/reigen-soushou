import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '開発実績',
  description: '零元創匠の受託開発実績をご紹介します。製造業向け生産管理システム、卸売業向け販売管理システム、人材派遣業向け勤怠・給与システムなど、業種を問わず業務システム開発の実績があります。',
  openGraph: {
    title: '開発実績 | 零元創匠',
    description: '零元創匠の受託開発実績をご紹介します。基幹システム開発、業務システム開発、Webアプリケーション開発の実績があります。',
    url: 'https://www.reigen-soushou.com/works',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.reigen-soushou.com/works',
  },
};

const developmentProjects = [
  {
    title: "製造業向け生産管理システム",
    description: "製造業のお客様向けに、生産計画から在庫管理、品質管理までを一元化した基幹システムを開発。業務効率の大幅な向上を実現しました。",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    features: ["リアルタイム生産状況モニタリング", "在庫の自動発注機能", "品質トレーサビリティ管理"],
  },
  {
    title: "卸売業向け販売管理システム",
    description: "複数拠点を持つ卸売業のお客様向けに、受発注から請求・入金管理までを統合した販売管理システムを構築しました。",
    technologies: ["React", "Node.js", "MySQL", "Redis", "GCP"],
    features: ["複数拠点のリアルタイム在庫連携", "取引先別与信管理", "売上分析ダッシュボード"],
  },
  {
    title: "人材派遣業向け勤怠・給与システム",
    description: "人材派遣会社のお客様向けに、派遣スタッフの勤怠管理から給与計算、請求書発行までを自動化するシステムを開発しました。",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "Azure"],
    features: ["スマホ対応の勤怠打刻", "複雑な給与計算の自動化", "派遣先別の請求書自動生成"],
  },
  {
    title: "不動産業向け物件管理システム",
    description: "不動産管理会社のお客様向けに、物件情報管理から契約管理、入居者対応までを効率化するシステムを構築しました。",
    technologies: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    features: ["物件情報の一元管理", "契約更新の自動リマインド", "入居者ポータル機能"],
  },
  {
    title: "EC事業者向け受注管理システム",
    description: "複数のECモールに出店するお客様向けに、受注の一元管理と在庫連携、出荷指示までを統合したシステムを開発しました。",
    technologies: ["React", "Node.js", "MongoDB", "AWS Lambda"],
    features: ["マルチモール受注の自動取込", "在庫のリアルタイム同期", "出荷業務の効率化"],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.reigen-soushou.com" },
    { "@type": "ListItem", "position": 2, "name": "開発実績", "item": "https://www.reigen-soushou.com/works" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "headline": "開発実績 | 零元創匠",
  "description": "零元創匠の受託開発実績をご紹介します。製造業、卸売業、人材派遣業、不動産業、EC事業者向けなど、業種を問わず業務システム開発の実績があります。",
  "url": "https://www.reigen-soushou.com/works",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": developmentProjects.length,
    "itemListElement": developmentProjects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.description,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "author": {
          "@type": "Organization",
          "@id": "https://www.reigen-soushou.com/#organization"
        }
      }
    }))
  }
};

export default function WorksPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '8px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="パンくずリスト" style={{ fontSize: '11px', marginBottom: '8px' }}>
        <Link href="/">ホーム</Link> &gt; 開発実績
      </nav>

      <table style={{ width: '100%', marginBottom: '8px' }}>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>
              <h1 style={{ fontSize: '18px', margin: 0, color: '#ffffff' }}>■ 開発実績 ■</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ textAlign: 'center', fontSize: '13px', marginBottom: '16px' }}>
        零元創匠が手がけた基幹システム・業務システムの受託開発事例をご紹介します。製造業、卸売業、人材派遣業、不動産業、EC事業者向けなど、業種を問わず業務課題を解決し、ビジネスの成長に貢献してきました。
      </p>

      <hr />

      <section aria-label="受託開発実績">
        <h2 style={{ fontSize: '16px', color: '#000080', marginBottom: '12px' }}>
          ◆ 受託開発実績
        </h2>

        {developmentProjects.map((project, index) => (
          <article key={index} style={{ marginBottom: '16px' }}>
            <div className="win95-raised" style={{ padding: '2px' }}>
              <div className="win95-titlebar">
                <span>📁 {project.title}</span>
              </div>

              <div style={{ backgroundColor: '#ffffff', border: '1px solid #808080', padding: '12px' }}>
                <p style={{ fontSize: '13px', marginBottom: '8px' }}>
                  {project.description}
                </p>

                <table style={{ width: '100%', marginBottom: '8px' }}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'top', width: '50%' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '4px' }}>
                          ✓ 主な機能:
                        </p>
                        <ul style={{ fontSize: '12px', paddingLeft: '16px', listStyle: 'disc' }}>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </td>
                      <td style={{ verticalAlign: 'top', width: '50%' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '4px' }}>
                          🔧 使用技術:
                        </p>
                        <p style={{ fontSize: '12px' }}>
                          {project.technologies.map((tech, idx) => (
                            <span key={idx}>
                              [{tech}]{idx < project.technologies.length - 1 ? ' ' : ''}
                            </span>
                          ))}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        ))}
      </section>

      <hr />

      {/* CTA */}
      <section aria-label="お問い合わせ">
        <div className="retro-card" style={{ marginBottom: '16px' }}>
          <div className="retro-card-inner" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
              御社の業務課題を解決しませんか？
            </h2>
            <p style={{ fontSize: '13px', color: '#404040', marginBottom: '12px' }}>
              業務の効率化やシステム化でお困りのことがございましたら、<br />
              お気軽にご相談ください。零元創匠が最適なソリューションをご提案します。
            </p>
            <Link href="/contact" className="win95-button" style={{ fontSize: '14px', fontWeight: 'bold' }}>
              ▶ お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      <p style={{ textAlign: 'center', marginBottom: '16px' }}>
        [<Link href="/">ホームに戻る</Link>]
      </p>
    </main>
  );
}
