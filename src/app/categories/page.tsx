import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function CategoriesPage() {
  const categories = [
    { id: '1', name: 'AI Chatbots', description: 'Conversational AI tools for various purposes', count: 150, icon: '💬' },
    { id: '2', name: 'Image Generation', description: 'AI tools for creating visual content', count: 120, icon: '🎨' },
    { id: '3', name: 'Video Tools', description: 'Video creation and editing with AI', count: 85, icon: '🎬' },
    { id: '4', name: 'Coding & Development', description: 'AI coding assistants and tools', count: 200, icon: '💻' },
    { id: '5', name: 'Writing & Copy', description: 'Content writing and copywriting AI', count: 110, icon: '✍️' },
    { id: '6', name: 'SEO & Marketing', description: 'Marketing and SEO optimization tools', count: 95, icon: '📊' },
    { id: '7', name: 'Audio & Music', description: 'Audio generation and music creation', count: 75, icon: '🎵' },
    { id: '8', name: 'Business & Productivity', description: 'Tools for business productivity', count: 130, icon: '📈' },
    { id: '9', name: 'No-Code Automation', description: 'Automation without coding required', count: 60, icon: '⚙️' },
    { id: '10', name: 'Design & Creativity', description: 'Design and creative tools', count: 105, icon: '🖼️' },
    { id: '11', name: 'Analytics & Data', description: 'Data analysis and analytics tools', count: 80, icon: '📉' },
    { id: '12', name: 'Education & Learning', description: 'Educational and learning tools', count: 70, icon: '🎓' },
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-50 dark:from-neutral-900 via-white dark:via-neutral-950 to-primary-50 dark:to-neutral-900 py-12 md:py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Browse by Category
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore AI tools organized by category to find solutions for your specific needs.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="card group p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{category.icon}</span>
                <ChevronRight
                  size={24}
                  className="text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-200 group-hover:translate-x-1"
                />
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {category.name}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {category.description}
              </p>
              <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                {category.count} tools
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
