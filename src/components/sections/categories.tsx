import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const categories = [
  { id: '1', name: 'AI Chatbots', count: 150, icon: '💬' },
  { id: '2', name: 'Image Generation', count: 120, icon: '🎨' },
  { id: '3', name: 'Video Tools', count: 85, icon: '🎬' },
  { id: '4', name: 'Coding & Development', count: 200, icon: '💻' },
  { id: '5', name: 'Writing & Copy', count: 110, icon: '✍️' },
  { id: '6', name: 'SEO & Marketing', count: 95, icon: '📊' },
  { id: '7', name: 'Audio & Music', count: 75, icon: '🎵' },
  { id: '8', name: 'Business & Productivity', count: 130, icon: '📈' },
  { id: '9', name: 'No-Code Automation', count: 60, icon: '⚙️' },
  { id: '10', name: 'Design & Creativity', count: 105, icon: '🖼️' },
  { id: '11', name: 'Analytics & Data', count: 80, icon: '📉' },
  { id: '12', name: 'Education & Learning', count: 70, icon: '🎓' },
]

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Browse by Category
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Explore AI Tools by Category
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Find the perfect AI tool for your specific needs across different industries and use cases.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="card flex items-center justify-between group hover:border-primary-300 dark:hover:border-primary-700"
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{category.icon}</span>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {category.count} tools
                  </p>
                </div>
              </div>
              <ChevronRight
                size={20}
                className="text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-200 group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>

        {/* Ad Section */}
        <div className="mt-16 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center text-neutral-500 dark:text-neutral-400 text-sm">
          <p>Advertisement Space (300x250 or 336x280 Google AdSense)</p>
        </div>
      </div>
    </section>
  )
}
