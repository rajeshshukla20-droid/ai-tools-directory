'use client'

import { useState } from 'react'
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react'

export default function AdminToolsPage() {
  const [tools, setTools] = useState([
    { id: 1, name: 'ChatGPT', category: 'AI Chatbots', price: 'Freemium', rating: 4.8, status: 'Published' },
    { id: 2, name: 'Midjourney', category: 'Image Generation', price: 'Paid', rating: 4.7, status: 'Published' },
    { id: 3, name: 'GitHub Copilot', category: 'Coding', price: 'Paid', rating: 4.6, status: 'Published' },
  ])

  const [showForm, setShowForm] = useState(false)

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Manage Tools</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Add, edit, or delete AI tools from the directory.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center space-x-2 btn-primary py-3 px-6"
        >
          <Plus size={20} />
          <span>Add New Tool</span>
        </button>
      </div>

      {/* Add Tool Form */}
      {showForm && (
        <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Add New Tool</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Tool Name</label>
              <input type="text" placeholder="Tool name" className="input-field" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Category</label>
              <select className="input-field">
                <option>Select category</option>
                <option>AI Chatbots</option>
                <option>Image Generation</option>
                <option>Coding</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Website URL</label>
              <input type="url" placeholder="https://example.com" className="input-field" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Price Model</label>
              <select className="input-field">
                <option>Free</option>
                <option>Freemium</option>
                <option>Paid</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Description</label>
              <textarea placeholder="Tool description" rows={4} className="input-field resize-none" />
            </div>

            <div className="md:col-span-2 flex gap-3">
              <button type="submit" className="btn-primary px-8">Save Tool</button>
              <button type="button" onClick={() => setShowForm(false)} className="btn-secondary px-8">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Search & Filter */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
            <input type="text" placeholder="Search tools..." className="input-field pl-10" />
          </div>
          <select className="input-field px-4">
            <option>All Categories</option>
            <option>AI Chatbots</option>
            <option>Image Gen</option>
          </select>
          <select className="input-field px-4">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      {/* Tools Table */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Tool Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.id} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-neutral-900 dark:text-white font-medium">{tool.name}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">{tool.category}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">{tool.price}</td>
                  <td className="px-6 py-4 text-sm text-yellow-600 dark:text-yellow-400 font-medium">★ {tool.rating}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300">
                      {tool.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 rounded transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
