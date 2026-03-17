"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

const navigation = [
  { name: 'ホーム', href: '/' },
  {
    name: 'サービス ▼',
    href: '/#services',
    children: [
      { name: 'Webアプリケーション開発', href: '/#services' },
      { name: '業務効率化ツール', href: '/#services' },
      { name: 'API連携・システム統合', href: '/#services' },
      { name: 'Webサイト開発', href: '/#services' },
      { name: '基幹システム開発', href: '/#services' },
      { name: '保守・運用サポート', href: '/#services' },
    ],
  },
  { name: '私たちについて', href: '/about' },
  { name: '実績', href: '/works' },
  { name: 'お問い合わせ', href: '/contact' },
];

const legalLinks = [
  { name: '特商法', href: '/legal' },
  { name: 'プライバシー', href: '/privacy' },
];

export function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  // 外側クリックでドロップダウンを閉じる
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <header>
      {/* タイトルバー */}
      <div className="win95-titlebar">
        <span>零元創匠 - Microsoft Internet Explorer</span>
        <span>
          <span style={{ marginRight: '2px' }}>_</span>
          <span style={{ marginRight: '2px' }}>□</span>
          <span>×</span>
        </span>
      </div>

      {/* アドレスバー風 */}
      <div className="win95-raised" style={{ padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>アドレス(D):</span>
        <div className="win95-sunken" style={{ flex: 1, padding: '2px 4px', fontSize: '12px' }}>
          https://www.reigen-soushou.com{pathname}
        </div>
      </div>

      {/* ナビゲーション */}
      <nav className="win95-raised" style={{ padding: '4px 8px', display: 'flex', flexWrap: 'wrap', gap: '4px', alignItems: 'center' }} ref={dropdownRef}>
        {navigation.map((item) => (
          <div key={item.name} style={{ position: 'relative', display: 'inline-block' }}>
            {item.children ? (
              <>
                <button
                  className="win95-button"
                  style={{
                    fontWeight: isActive(item.href) ? 'bold' : 'normal',
                    backgroundColor: openDropdown === item.name ? '#d0d0d0' : '#c0c0c0',
                    border: openDropdown === item.name ? '2px inset #c0c0c0' : '2px outset #c0c0c0',
                  }}
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                >
                  {item.name}
                </button>

                {openDropdown === item.name && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    zIndex: 100,
                    minWidth: '200px',
                    border: '2px outset #c0c0c0',
                    backgroundColor: '#c0c0c0',
                    padding: '2px',
                  }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        style={{
                          display: 'block',
                          padding: '4px 8px',
                          fontSize: '12px',
                          textDecoration: 'none',
                          color: '#000000',
                          backgroundColor: '#c0c0c0',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#000080';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#c0c0c0';
                          e.currentTarget.style.color = '#000000';
                        }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="win95-button"
                style={{
                  fontWeight: isActive(item.href) ? 'bold' : 'normal',
                  backgroundColor: isActive(item.href) ? '#d0d0d0' : '#c0c0c0',
                  textDecoration: 'none',
                  color: '#000000',
                }}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#808080' }}>
          |{' '}
          {legalLinks.map((item, index) => (
            <span key={item.name}>
              <Link href={item.href} style={{ fontSize: '11px', color: '#808080' }}>{item.name}</Link>
              {index < legalLinks.length - 1 && ' | '}
            </span>
          ))}
        </span>
      </nav>
    </header>
  );
}
