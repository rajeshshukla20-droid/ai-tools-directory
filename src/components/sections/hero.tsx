'use client'

import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery) {
      window.location.href = `/tools?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 dark:from-neutral-900 via-white dark:via-neutral-950 to-primary-50 dark:to-neutral-900">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-sm font-medium">
              ✨ Discover 1000+ AI Tools
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
            Discover Your Perfect{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              AI Tool
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            Browse, compare, and find the best AI tools for your business. Get up-to-date reviews, features, and pricing information.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder="Search AI tools, features, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12 py-4 text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary py-2 px-6 text-sm"
              >
                Search
              </button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/tools" className="btn-primary flex items-center space-x-2">
              <span>Explore Tools</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/submit" className="btn-outline">
              Submit Your Tool
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">1000+</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">AI Tools Listed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">50+</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">Categories</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">100K+</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">Monthly Visitors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Section - Google AdSense Placeholder */}
      <div className="container-custom mt-16">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 text-center text-neutral-500 dark:text-neutral-400 text-sm">
          {/* Google AdSense - Horizontal Banner */}
          <p>Advertisement Space (728x90 Google AdSense Banner)</p>
        </div>
      </div>
    </section>
  )
}
