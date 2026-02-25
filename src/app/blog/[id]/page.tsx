import Link from 'next/link'
import { ArrowLeft, Calendar, User, Share2, Bookmark } from 'lucide-react'
import NewsletterSection from '@/components/sections/newsletter'

interface BlogPageProps {
  params: {
    id: string
  }
}

export default function BlogArticle({ params }: BlogPageProps) {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="text-neutral-400">/</span>
            <Link href="/blog" className="text-primary-600 dark:text-primary-400 hover:underline">Blog</Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600 dark:text-neutral-400">Article</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <Link href="/blog" className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline mb-8">
          <ArrowLeft size={16} />
          <span>Back to Blog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2 prose dark:prose-invert max-w-none">
            {/* Header */}
            <div className="mb-8">
              <span className="badge bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                AI Chatbots
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                The Complete Guide to AI Chatbots in 2024
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-neutral-600 dark:text-neutral-400 mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>Feb 20, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={18} />
                  <span>John Doe</span>
                </div>
                <span>8 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl mb-8 flex items-center justify-center">
              <span className="text-neutral-500">Article Featured Image</span>
            </div>

            {/* Article Content */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Artificial intelligence chatbots have revolutionized the way businesses communicate with their customers. From customer support to content creation, these AI-powered tools are becoming increasingly essential for modern operations.
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mt-10 mb-4">
                What Are AI Chatbots?
              </h2>
              <p>
                AI chatbots are software applications powered by machine learning and natural language processing that can simulate human-like conversations. Unlike traditional rule-based chatbots, modern AI chatbots can understand context, learn from interactions, and provide more human-like responses.
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mt-10 mb-4">
                Key Benefits
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>24/7 Availability and instant responses</li>
                <li>Cost reduction through automation</li>
                <li>Improved customer satisfaction and engagement</li>
                <li>Scalability without proportional cost increases</li>
                <li>Data collection and insights from conversations</li>
              </ul>

              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mt-10 mb-4">
                Popular AI Chatbots in 2024
              </h2>
              <p>
                The landscape of AI chatbots has evolved significantly. Leading options include ChatGPT from OpenAI, Claude from Anthropic, Google Gemini, and Microsoft Copilot. Each offers unique strengths in reasoning, creativity, and specialized knowledge.
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mt-10 mb-4">
                Implementation Best Practices
              </h2>
              <p>
                When implementing an AI chatbot, consider these best practices:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Define clear use cases and goals</li>
                <li>Train your team on proper usage</li>
                <li>Monitor and refine responses regularly</li>
                <li>Maintain human escalation pathways</li>
                <li>Ensure data privacy and compliance</li>
              </ol>

              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mt-10 mb-4">
                Future of Chatbots
              </h2>
              <p>
                The future of AI chatbots looks promising with advances in multimodal capabilities, better reasoning, and more personalized interactions. We can expect to see more specialized chatbots for specific industries and use cases.
              </p>

              <p className="text-neutral-600 dark:text-neutral-400 text-base italic border-l-4 border-primary-600 pl-4 my-8">
                "AI chatbots are not about replacing humans, but augmenting human capabilities and handling tedious tasks more efficiently." - Industry Expert
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mt-10 mb-4">
                Conclusion
              </h2>
              <p>
                AI chatbots have become indispensable tools for businesses in 2024. Whether you're looking to improve customer service, automate content creation, or assist with coding, there's likely an AI chatbot perfectly suited for your needs. The key is to select the right tool for your specific use case and implement it thoughtfully.
              </p>
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Share this article:</span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Share2 size={18} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Bookmark size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((_, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="card group"
                  >
                    <div className="w-full h-40 bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4">
                    </div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Related Article {idx + 1}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      Brief description of the related article.
                    </p>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:underline">
                      Read more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <div className="card">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    'What Are AI Chatbots?',
                    'Key Benefits',
                    'Popular AI Chatbots in 2024',
                    'Implementation Best Practices',
                    'Future of Chatbots',
                    'Conclusion',
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        • {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author */}
              <div className="card">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-4">About the Author</h3>
                <div className="w-full h-24 bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4">
                </div>
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">John Doe</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  AI enthusiast and technology writer with over 5 years of experience.
                </p>
                <Link href="#" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                  View profile →
                </Link>
              </div>

              {/* Ad Space */}
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center text-neutral-500 dark:text-neutral-400 text-sm">
                <p>Advertisement (300x600)</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  )
}
