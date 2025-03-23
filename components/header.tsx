"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'サービス', href: '/#services' },
  { name: '企業理念', href: '/#philosophy' },
  { name: '実績', href: '/works' },
  { name: 'お問い合わせ', href: '/#contact' },
];

const legalLinks = [
  { name: '特定商取引法に基づく表記', href: '/legal' },
  { name: 'プライバシーポリシー', href: '/privacy' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // スクロールイベントを監視
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isHomePage = pathname === '/';
    
    if (href.startsWith('/#') && isHomePage) {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else if (href.startsWith('/#') && !isHomePage) {
      window.location.href = href;
    } else {
      window.location.href = href;
    }
    
    setIsOpen(false);
  };

  // アクティブなリンクかどうかを判定
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/' && href.includes(pathname);
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-background/40 backdrop-blur-sm'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / ブランド */}
          <Link 
            href="/" 
            className="flex items-center text-xl font-bold text-primary transition-transform hover:scale-105 duration-300"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">零元創匠</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:bg-primary/5'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
            
            {/* テーマ切り替えボタン */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">テーマを切り替える</span>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            {/* モバイル用テーマ切り替えボタン */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="mr-2"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">テーマを切り替える</span>
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-1">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">メニューを開く</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" title="零元創匠 メニュー" className="w-[280px] sm:w-[350px] pr-0">
                <nav className="flex flex-col mt-6">
                  <div className="space-y-3 mb-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className={`flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors ${
                          isActive(item.href) 
                            ? 'text-primary bg-primary/5' 
                            : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-border/40">
                    <p className="px-3 mb-3 text-xs font-semibold text-muted-foreground">法的情報</p>
                    {legalLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-md transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 opacity-70" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}