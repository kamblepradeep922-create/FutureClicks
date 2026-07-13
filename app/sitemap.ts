import type { MetadataRoute } from 'next';
import { industries } from '@/lib/industries';

const baseUrl = 'https://www.futureclicks.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
  ];

  const industryRoutes = industries.map((i) => ({
    url: `${baseUrl}/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...industryRoutes];
}
