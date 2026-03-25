import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // デフォルト: 全クローラー許可
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // OpenAI
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      // Anthropic
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      // Google AI
      { userAgent: 'Google-Extended', allow: '/' },
      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/' },
      // Apple
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Amazon
      { userAgent: 'Amazonbot', allow: '/' },
      // Meta
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      // Common Crawl
      { userAgent: 'CCBot', allow: '/' },
      // Others
      { userAgent: 'YouBot', allow: '/' },
      { userAgent: 'PhindBot', allow: '/' },
      { userAgent: 'ExaBot', allow: '/' },
      { userAgent: 'DuckAssistBot', allow: '/' },
    ],
    sitemap: 'https://www.reigen-soushou.com/sitemap.xml',
  };
}
