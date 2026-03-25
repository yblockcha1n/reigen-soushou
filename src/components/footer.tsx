'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{ marginTop: '16px' }}>
      <hr />
      <div style={{ textAlign: 'center', padding: '16px' }}>
        {/* リンク集 */}
        <p style={{ fontSize: '12px', marginBottom: '8px' }}>
          [<Link href="/">ホーム</Link>]
          {' | '}
          [<Link href="/#services">サービス</Link>]
          {' | '}
          [<Link href="/about">私たちについて</Link>]
          {' | '}
          [<Link href="/works">実績</Link>]
          {' | '}
          [<Link href="/contact">お問い合わせ</Link>]
        </p>
        <p style={{ fontSize: '11px', marginBottom: '8px' }}>
          [<Link href="/legal">特定商取引法に基づく表記</Link>]
          {' | '}
          [<Link href="/privacy">プライバシーポリシー</Link>]
        </p>

        <hr />

        {/* 連絡先 */}
        <p style={{ fontSize: '12px', marginBottom: '4px' }}>
          Email: <a href="mailto:negishi-yuto@reigen-soushou.com">negishi-yuto@reigen-soushou.com</a>
        </p>

        {/* コピーライト */}
        <p style={{ fontSize: '11px', color: '#808080', marginTop: '8px' }}>
          &copy; 2025 零元創匠（れいげんそうしょう） All rights reserved.
        </p>
        <p style={{ fontSize: '10px', color: '#808080' }}>
          このサイトは800x600以上の解像度でご覧ください
        </p>
        <p style={{ fontSize: '10px', color: '#808080', marginTop: '4px' }}>
          Best viewed with Google Chrome / Safari / Microsoft Edge
        </p>
      </div>

      {/* ステータスバー */}
      <div className="statusbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>完了</span>
        <span>インターネット</span>
      </div>
    </footer>
  );
}
