'use client'

import { useState } from 'react'
import { Plus, Search, Edit, Trash2 } from 'lucide-react'

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'AI Chatbots', count: 150, icon: '💬' },
    { id: 2, name: 'Image Generation', count: 120, icon: '🎨' },
    { id: 3, name: 'Video Tools', count: 85, icon: '🎬' },
    { id: 4, name: 'Coding & Development', count: 200, icon: '💻' },
  ])

  const [showForm, setShowForm] = useState(false)

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Manage Categories</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Organize AI tools into categories.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center space-x-2 btn-primary py-3 px-6"
        >
          <Plus size={20} />
          <span>Add Category</span>
        </button>
      </div>

      {/* Add Category Form */}
      {showForm && (
        <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Add New Category</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Category Name</label>
              <input type="text" placeholder="Category name" className="input-field" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Icon/Emoji</label>
              <input type="text" placeholder="🎨" className="input-field" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Description</label>
              <textarea placeholder="Category description" rows={3} className="input-field resize-none" />
            </div>

            <div className="md:col-span-2 flex gap-3">
              <button type="submit" className="btn-primary px-8">Save Category</button>
              <button type="button" onClick={() => setShowForm(false)} className="btn-secondary px-8">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Search */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
            <input type="text" placeholder="Search categories..." className="input-field pl-10" />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl">{category.icon}</span>
              <div className="flex gap-2">
                <button className="p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors">
                  <Edit size={18} />
                </button>
                <button className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 rounded transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{category.name}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {category.count} tools in this category
            </p>
            <a href="#" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
              View all →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
