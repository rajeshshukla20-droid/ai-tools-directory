import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aitoolsdirectory.com'

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Category pages (generate dynamically from your categories)
  const categoryPages = [
    'ai-chatbots',
    'image-generation',
    'video-tools',
    'coding-development',
    'writing-copy',
    'seo-marketing',
    'audio-music',
    'business-productivity',
    'automation',
    'design-creativity',
    'analytics-data',
    'education-learning',
  ].map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Sample tool pages (in production, fetch from your database)
  const toolPages = Array.from({ length: 10 }).map((_, i) => ({
    url: `${baseUrl}/tools/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Sample blog pages (in production, fetch from your database)
  const blogPages = Array.from({ length: 20 }).map((_, i) => ({
    url: `${baseUrl}/blog/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...mainPages, ...categoryPages, ...toolPages, ...blogPages]
}
