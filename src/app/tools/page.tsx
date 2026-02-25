import Link from 'next/link'
import { Search, Star, ExternalLink, Share2, Bookmark } from 'lucide-react'
import { useState } from 'react'

export default function ToolsPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-50 dark:from-neutral-900 via-white dark:via-neutral-950 to-primary-50 dark:to-neutral-900 py-12 md:py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Browse AI Tools
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore our comprehensive directory of over 1000 AI tools. Filter, search, and compare to find your perfect solution.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12 md:py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Filters */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  type="text"
                  placeholder="Search tools..."
                  className="input-field pl-10 text-sm"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Categories</h3>
              <div className="space-y-3">
                {['AI Chatbots', 'Image Generation', 'Video Tools', 'Coding', 'Writing', 'Design', 'Marketing', 'Audio'].map((cat) => (
                  <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Price</h3>
              <div className="space-y-3">
                {['Free', 'Freemium', 'Paid'].map((price) => (
                  <label key={price} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="price" className="rounded" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Rating</h3>
              <div className="space-y-3">
                {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                  <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{rating}+</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Tools Grid */}
        <main className="lg:col-span-3">
          {/* Sorting */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Showing 1-12 of 1000+ tools
            </p>
            <select className="input-field py-2 text-sm">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>Most Reviewed</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="card group">
                <div className="w-full h-40 bg-gradient-to-br from-primary-200 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-neutral-500">Tool {idx + 1}</span>
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                      Tool Name {idx + 1}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">4.5 (250)</span>
                    </div>
                  </div>
                  <button className="p-2 text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <Bookmark size={20} />
                  </button>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  Description of the tool explaining what it does and its key features.
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="badge bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-xs font-medium">
                    Category
                  </span>
                  <span className="badge bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium">
                    Free
                  </span>
                </div>

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
            {[1, 2, 3, 4, 5, '...', 100].map((page, idx) => (
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
        </main>
      </div>

      {/* Ad Section */}
      <div className="container-custom my-16">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center text-neutral-500 dark:text-neutral-400 text-sm">
          <p>Advertisement (728x90 or 970x90 Banner)</p>
        </div>
      </div>
    </div>
  )
}
