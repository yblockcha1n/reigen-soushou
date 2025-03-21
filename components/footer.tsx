import Link from 'next/link';

const navigation = {
  main: [
    { name: 'ホーム', href: '/' },
    { name: 'サービス', href: '/#services' },
    { name: '企業理念', href: '/#philosophy' },
    { name: '実績', href: '/works' },
    { name: 'お問い合わせ', href: '/#contact' },
  ],
  legal: [
    { name: '特定商取引法に基づく表記', href: '/legal' },
    { name: 'プライバシーポリシー', href: '/privacy' },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com/your-handle' },
    { name: 'Email', href: 'mailto:your-email@example.com' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">メインメニュー</h3>
            <ul role="list" className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">法的情報</h3>
            <ul role="list" className="space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">お問い合わせ</h3>
            <ul role="list" className="space-y-4">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-muted-foreground/10 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; 2024 零元創匠 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}