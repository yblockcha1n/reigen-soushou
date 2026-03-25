import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.reigen-soushou.com';

  return [
    {
      url: baseUrl,
      lastModified: '2025-03-25T00:00:00+09:00',
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2025-03-25T00:00:00+09:00',
    },
    {
      url: `${baseUrl}/works`,
      lastModified: '2025-03-25T00:00:00+09:00',
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2025-03-25T00:00:00+09:00',
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: '2025-03-24T00:00:00+09:00',
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: '2025-03-24T00:00:00+09:00',
    },
  ];
}
