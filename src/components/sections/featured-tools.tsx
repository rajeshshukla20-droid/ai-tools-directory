import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'

interface Tool {
  id: string
  name: string
  description: string
  category: string
  rating: number
  reviews: number
  price: 'free' | 'freemium' | 'paid'
  image: string
  affiliate_link?: string
}

const featuredTools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced language model for conversations, coding, analysis, and creative tasks.',
    category: 'AI Chatbots',
    rating: 4.8,
    reviews: 2500,
    price: 'freemium',
    image: '/tools/chatgpt.png',
    affiliate_link: 'https://openai.com/chatgpt',
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI image generation tool for creating stunning visuals and artwork.',
    category: 'Image Generation',
    rating: 4.7,
    reviews: 1800,
    price: 'paid',
    image: '/tools/midjourney.png',
    affiliate_link: 'https://midjourney.com',
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster and better.',
    category: 'Coding',
    rating: 4.6,
    reviews: 1500,
    price: 'paid',
    image: '/tools/github-copilot.png',
    affiliate_link: 'https://github.com/features/copilot',
  },
  {
    id: '4',
    name: 'Notion AI',
    description: 'AI-powered assistant integrated into Notion for writing and brainstorming.',
    category: 'Productivity',
    rating: 4.5,
    reviews: 1200,
    price: 'freemium',
    image: '/tools/notion-ai.png',
    affiliate_link: 'https://notion.so',
  },
  {
    id: '5',
    name: 'Claude',
    description: 'Constitutional AI assistant for safe, accurate, and helpful responses.',
    category: 'AI Chatbots',
    rating: 4.7,
    reviews: 1600,
    price: 'freemium',
    image: '/tools/claude.png',
    affiliate_link: 'https://claude.ai',
  },
  {
    id: '6',
    name: 'Canva AI',
    description: 'AI-powered design assistant for creating professional graphics.',
    category: 'Design',
    rating: 4.4,
    reviews: 1400,
    price: 'freemium',
    image: '/tools/canva-ai.png',
    affiliate_link: 'https://canva.com',
  },
]

export default function FeaturedTools() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Top Picks
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Featured AI Tools
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Handpicked tools that are revolutionizing the way we work and create.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredTools.map((tool) => (
            <div key={tool.id} className="card group">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center text-primary-600 dark:text-primary-400">
                {tool.name}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(tool.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300 dark:text-neutral-600'}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {tool.rating} ({tool.reviews})
                </span>
              </div>

              {/* Name & Category */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                {tool.name}
              </h3>
              <span className="inline-block badge bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-xs font-medium mb-3">
                {tool.category}
              </span>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
                {tool.description}
              </p>

              {/* Price Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="badge bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium capitalize">
                  {tool.price}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <Link
                  href={`/tools/${tool.id}`}
                  className="flex-1 btn-secondary text-center text-sm"
                >
                  View Details
                </Link>
                {tool.affiliate_link && (
                  <a
                    href={tool.affiliate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center text-sm flex items-center justify-center space-x-1"
                  >
                    <span>Visit</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link href="/tools" className="btn-outline inline-flex items-center space-x-2">
            <span>View All Tools</span>
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
