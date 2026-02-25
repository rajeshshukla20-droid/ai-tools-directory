export const SITE_NAME = 'AITools Directory'
export const SITE_DESCRIPTION = 'Discover and compare the best AI tools for your business. Browse over 1000+ AI applications.'
export const SITE_URL = 'https://aitoolsdirectory.com'
export const SUPPORT_EMAIL = 'support@aitoolsdirectory.com'
export const CONTACT_EMAIL = 'hello@aitoolsdirectory.com'

export const CATEGORIES = [
  { id: '1', name: 'AI Chatbots', icon: '💬', slug: 'ai-chatbots' },
  { id: '2', name: 'Image Generation', icon: '🎨', slug: 'image-generation' },
  { id: '3', name: 'Video Tools', icon: '🎬', slug: 'video-tools' },
  { id: '4', name: 'Coding & Development', icon: '💻', slug: 'coding-development' },
  { id: '5', name: 'Writing & Copy', icon: '✍️', slug: 'writing-copy' },
  { id: '6', name: 'SEO & Marketing', icon: '📊', slug: 'seo-marketing' },
  { id: '7', name: 'Audio & Music', icon: '🎵', slug: 'audio-music' },
  { id: '8', name: 'Business & Productivity', icon: '📈', slug: 'business-productivity' },
  { id: '9', name: 'No-Code Automation', icon: '⚙️', slug: 'automation' },
  { id: '10', name: 'Design & Creativity', icon: '🖼️', slug: 'design-creativity' },
  { id: '11', name: 'Analytics & Data', icon: '📉', slug: 'analytics-data' },
  { id: '12', name: 'Education & Learning', icon: '🎓', slug: 'education-learning' },
]

export const PRICE_MODELS = ['free', 'freemium', 'paid', 'enterprise'] as const

export const PAGINATION = {
  TOOLS_PER_PAGE: 12,
  BLOG_PER_PAGE: 6,
  CATEGORIES_PER_PAGE: 12,
}

export const MONETIZATION = {
  GOOGLE_ADSENSE_ID: 'ca-pub-xxxxxxxxxxxxxxxx',
  AFFILIATE_COMMISSION: 0.25, // 25%
  PREMIUM_LISTING: 49.99, // per month
}

export const SEO = {
  DEFAULT_TITLE: 'AITools Directory - Discover & Compare AI Tools',
  DEFAULT_DESCRIPTION: 'Browse, compare, and discover the best AI tools. Find solutions for your business needs with our comprehensive directory.',
  OG_IMAGE: 'https://aitoolsdirectory.com/og-image.png',
  TWITTER_HANDLE: '@aitoolsdir',
}

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/aitoolsdir',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  email: 'hello@aitoolsdirectory.com',
}

export const API_ENDPOINTS = {
  TOOLS: '/api/tools',
  CATEGORIES: '/api/categories',
  BLOG: '/api/blog',
  NEWSLETTER: '/api/newsletter',
  CONTACT: '/api/contact',
  SUBMIT: '/api/submit',
}
