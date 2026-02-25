import Link from 'next/link'
import { ArrowLeft, ExternalLink, Star } from 'lucide-react'

interface CategoryPageProps {
  params: {
    id: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryInfo = {
    name: 'AI Chatbots',
    description: 'Conversational AI tools that use natural language processing to understand and respond to user queries.',
    count: 150,
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="text-neutral-400">/</span>
            <Link href="/categories" className="text-primary-600 dark:text-primary-400 hover:underline">Categories</Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600 dark:text-neutral-400">{categoryInfo.name}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        {/* Back Link */}
        <Link href="/categories" className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline mb-8">
          <ArrowLeft size={16} />
          <span>Back to Categories</span>
        </Link>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {categoryInfo.name}
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mb-6">
            {categoryInfo.description}
          </p>
          <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
            {categoryInfo.count} tools in this category
          </p>
        </div>

        {/* Filter & Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Filter by:
            </label>
            <select className="input-field py-2 text-sm">
              <option>All Prices</option>
              <option>Free Only</option>
              <option>Freemium</option>
              <option>Paid</option>
            </select>
          </div>

          <select className="input-field py-2 text-sm">
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Newest</option>
          </select>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...Array(12)].map((_, idx) => (
            <div key={idx} className="card group">
              <div className="w-full h-40 bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-neutral-500">Tool Logo</span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                {categoryInfo.name.slice(0, -1)} Tool {idx + 1}
              </h3>

              <div className="flex items-center space-x-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}
                  />
                ))}
                <span className="text-xs text-neutral-500 dark:text-neutral-400">4.5 (250)</span>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                Brief description of this AI tool and its key capabilities.
              </p>

              <span className="badge bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium mb-4">
                Free
              </span>

              <div className="flex gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <Link href="#" className="flex-1 btn-secondary text-center text-sm py-2">
                  Details
                </Link>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary text-center text-sm py-2 flex items-center justify-center space-x-1">
                  <span>Visit</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <button className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
            Previous
          </button>
          {[1, 2, 3, 4, 5, '...', 50].map((page, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-lg transition-colors ${
                page === 1
                  ? 'bg-primary-600 text-white'
                  : 'border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
