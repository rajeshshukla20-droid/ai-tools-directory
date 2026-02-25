import Link from 'next/link'
import { Star, ExternalLink, Share2, Bookmark, Globe, DollarSign, Users, ArrowLeft, Check } from 'lucide-react'
import NewsletterSection from '@/components/sections/newsletter'

interface ToolPageProps {
  params: {
    id: string
  }
}

export default function ToolPage({ params }: ToolPageProps) {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="text-neutral-400">/</span>
            <Link href="/tools" className="text-primary-600 dark:text-primary-400 hover:underline">Tools</Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600 dark:text-neutral-400">ChatGPT</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/tools" className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <ArrowLeft size={16} />
            <span>Back to Tools</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tool Info */}
            <div className="md:col-span-2">
              {/* Image */}
              <div className="w-full h-64 bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl mb-8 flex items-center justify-center">
                <span className="text-neutral-500 text-lg">ChatGPT Logo</span>
              </div>

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                    ChatGPT
                  </h1>
                  <p className="text-neutral-600 dark:text-neutral-400">By OpenAI</p>
                </div>
                <button className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                  <Bookmark size={24} />
                </button>
              </div>

              {/* Rating & Stats */}
              <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">4.8 (2,500 reviews)</p>
                </div>
                <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400">
                  <Users size={18} />
                  <span className="text-sm">100K+ users</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Overview</h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed mb-4">
                  ChatGPT is an advanced AI language model developed by OpenAI. It excels at having thoughtful conversations, providing detailed explanations, answering complex questions, and assisting with creative writing, coding, and analytical tasks.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                  With its large knowledge base and ability to understand context, ChatGPT has become one of the most popular AI tools for both professionals and casual users seeking AI assistance.
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Natural language conversations',
                    'Code generation and debugging',
                    'Content writing and editing',
                    'Summarization of complex texts',
                    'Problem-solving assistance',
                    'Creative brainstorming',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" size={20} />
                      <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Pros</h3>
                  <ul className="space-y-2">
                    {[
                      'Highly versatile and powerful',
                      'Free version available',
                      'Easy to use interface',
                      'Regular improvements',
                    ].map((pro) => (
                      <li key={pro} className="flex items-start space-x-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Cons</h3>
                  <ul className="space-y-2">
                    {[
                      'Knowledge cutoff limits',
                      'Can generate inaccurate info',
                      'No real-time internet access',
                      'Limited free tier tokens',
                    ].map((con) => (
                      <li key={con} className="flex items-start space-x-2">
                        <span className="text-red-500">✗</span>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="card sticky top-24 space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {['AI Chatbots', 'Productivity'].map((cat) => (
                      <Link
                        key={cat}
                        href={`/categories`}
                        className="badge bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-xs font-medium hover:bg-primary-200 dark:hover:bg-primary-900 transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="py-6 border-y border-neutral-200 dark:border-neutral-800">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3 flex items-center space-x-2">
                    <DollarSign size={18} />
                    <span>Pricing</span>
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium text-neutral-900 dark:text-white">Free Plan: </span>
                      <span className="text-neutral-600 dark:text-neutral-400">Basic access</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-neutral-900 dark:text-white">Plus: </span>
                      <span className="text-neutral-600 dark:text-neutral-400">$20/month</span>
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="py-6 border-b border-neutral-200 dark:border-neutral-800">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3 flex items-center space-x-2">
                    <Globe size={18} />
                    <span>Website</span>
                  </h3>
                  <a
                    href="https://openai.com/chatgpt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline text-sm break-all"
                  >
                    openai.com/chatgpt
                  </a>
                </div>

                {/* CTA Button */}
                <a
                  href="https://openai.com/chatgpt?ref=aitoolsdirectory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center flex items-center justify-center space-x-2"
                >
                  <span>Visit ChatGPT</span>
                  <ExternalLink size={18} />
                </a>

                {/* Share */}
                <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>

                {/* Ad Space */}
                <div className="mt-8 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-center text-neutral-500 dark:text-neutral-400 text-xs">
                  <p>Advertisement (300x250)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tools Section */}
      <div className="bg-neutral-50 dark:bg-neutral-900 py-12 md:py-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Related Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="card">
                <div className="w-full h-40 bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4">
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">Similar Tool {idx + 1}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Quick description of the similar tool.</p>
                <Link href="#" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                  View details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  )
}
