'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Twitter, Mail, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Separator } from './ui/separator';

const navigation = {
  main: [
    { name: 'ホーム', href: '/' },
    { name: 'サービス', href: '/#services' },
    { name: '企業理念', href: '/#philosophy' },
    { name: '実績', href: '/works' },
    { name: 'お問い合わせ', href: '/contact' },
  ],
  legal: [
    { name: '特定商取引法に基づく表記', href: '/legal' },
    { name: 'プライバシーポリシー', href: '/privacy' },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com/reigen_soushou_', icon: Twitter },
    { name: 'Email', href: 'mailto:reigen.soushou@gmail.com', icon: Mail },
    { name: 'GitHub', href: 'https://github.com/reigen_soushou_', icon: Github },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="inline-block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              零元創匠
            </Link>
            <p className="text-base text-muted-foreground max-w-xs">
              零から始まるイノベーション。最新のテクノロジーで、ビジネスの可能性を広げます。
            </p>
            <div className="flex space-x-3">
              {navigation.social.map((item) => (
                <Button key={item.name} size="icon" variant="outline" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                    <item.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-10 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary mb-4">メインメニュー</h3>
                <ul role="list" className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors inline-flex">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary mb-4">法的情報</h3>
                <ul role="list" className="space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors inline-flex">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary mb-4">お問い合わせ</h3>
                <address className="not-italic space-y-3 text-muted-foreground">
                  <p>対応時間: 平日 9:00-18:00</p>
                  <p className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 opacity-70" />
                    <a href="mailto:reigen.soushou@gmail.com" className="hover:text-primary transition-colors">
                    reigen.soushou@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Twitter className="h-4 w-4 mr-2 opacity-70" />
                    <a href="https://twitter.com/reigen_soushou_" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      @reigen_soushou_
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground/80">
            &copy; {currentYear} 零元創匠 All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 md:mt-0 group"
            onClick={handleScrollToTop}
          >
            トップに戻る
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}