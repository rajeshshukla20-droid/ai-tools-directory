import Link from 'next/link'
import { ArrowRight, Calendar, User, ArrowLeft } from 'lucide-react'

const blogPosts = [
  {
    id: '1',
    title: 'The Complete Guide to AI Chatbots in 2024',
    excerpt: 'Explore the latest AI chatbot technologies, their applications, and how to choose the right one for your business.',
    category: 'AI Chatbots',
    author: 'John Doe',
    date: 'Feb 20, 2024',
    readTime: '8 min read',
    image: 'AI Chatbots',
  },
  {
    id: '2',
    title: 'Image Generation AI: From Concept to Production',
    excerpt: 'Learn how to use AI image generation tools effectively for marketing, design, and creative projects.',
    category: 'Image Generation',
    author: 'Jane Smith',
    date: 'Feb 18, 2024',
    readTime: '10 min read',
    image: 'Image Gen',
  },
  {
    id: '3',
    title: 'How to Integrate GitHub Copilot into Your Workflow',
    excerpt: 'A practical guide to using AI pair programming to write better code faster and improve productivity.',
    category: 'Coding',
    author: 'Mike Johnson',
    date: 'Feb 15, 2024',
    readTime: '12 min read',
    image: 'GitHub',
  },
  {
    id: '4',
    title: 'AI Tools for Content Marketing: A Strategic Overview',
    excerpt: 'Discover how AI tools can revolutionize your content marketing strategy and boost engagement.',
    category: 'Marketing',
    author: 'Sarah Lee',
    date: 'Feb 12, 2024',
    readTime: '9 min read',
    image: 'Marketing',
  },
  {
    id: '5',
    title: 'The Future of AI: Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with insights into the emerging AI trends that will shape the industry.',
    category: 'AI Trends',
    author: 'John Doe',
    date: 'Feb 10, 2024',
    readTime: '11 min read',
    image: 'Future',
  },
  {
    id: '6',
    title: 'Comparing AI Tools: ChatGPT vs Claude vs Gemini',
    excerpt: 'An in-depth comparison of the leading AI language models and their strengths and weaknesses.',
    category: 'Comparison',
    author: 'Jane Smith',
    date: 'Feb 8, 2024',
    readTime: '15 min read',
    image: 'Comparison',
  },
]

export default function BlogPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-50 dark:from-neutral-900 via-white dark:via-neutral-950 to-primary-50 dark:to-neutral-900 py-12 md:py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Blog & Insights
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Stay updated with the latest news, guides, and insights about AI tools and technology.
          </p>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        {/* Featured Post */}
        <div className="mb-16 card overflow-hidden hover:shadow-card-lg transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-0">
            <div className="w-full h-64 md:h-full bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center md:rounded-l-lg">
              <span className="text-neutral-500 text-lg">Featured Image</span>
            </div>
            <div className="flex flex-col justify-between p-6">
              <div>
                <span className="badge bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-xs font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">
                  {blogPosts[0].excerpt}
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`} className="btn-primary inline-flex items-center space-x-2">
                  <span>Read Article</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All Posts */}
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="card flex flex-col group">
              {/* Image */}
              <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-neutral-500">{post.image}</span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <span className="badge bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-xs font-medium mb-3 self-start">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-1">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center space-x-4 text-xs text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors">
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <button className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors flex items-center space-x-1">
            <ArrowLeft size={16} />
            <span>Previous</span>
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg transition-colors ${
                page === 1
                  ? 'bg-primary-600 text-white'
                  : 'border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors flex items-center space-x-1">
            <span>Next</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
