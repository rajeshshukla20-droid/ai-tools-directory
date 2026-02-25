import { TrendingUp, Plus, Eye, Edit, Trash2 } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Tools', value: '1,247', change: '+12%', icon: '🛠️' },
    { label: 'Total Categories', value: '52', change: '+2', icon: '📁' },
    { label: 'Monthly Visitors', value: '125K', change: '+18%', icon: '👥' },
    { label: 'Site Revenue', value: '$8,500', change: '+25%', icon: '💰' },
  ]

  const recentTools = [
    { id: 1, name: 'ChatGPT 4.5', category: 'AI Chatbots', status: 'Published', date: '2024-02-20' },
    { id: 2, name: 'Midjourney Pro', category: 'Image Gen', status: 'Draft', date: '2024-02-19' },
    { id: 3, name: 'GitHub Copilot X', category: 'Coding', status: 'Published', date: '2024-02-18' },
    { id: 4, name: 'Claude 3', category: 'AI Chatbots', status: 'Pending', date: '2024-02-17' },
    { id: 5, name: 'Canva AI Studio', category: 'Design', status: 'Published', date: '2024-02-16' },
  ]

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Dashboard</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Welcome back! Here's your site overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{stat.icon}</span>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Recent Tools</h2>
            <button className="flex items-center space-x-2 btn-primary text-sm py-2 px-4">
              <Plus size={18} />
              <span>Add Tool</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Tool Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentTools.map((tool) => (
                <tr key={tool.id} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  <td className="px-6 py-4 text-sm text-neutral-900 dark:text-white font-medium">{tool.name}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">{tool.category}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      tool.status === 'Published'
                        ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300'
                        : tool.status === 'Draft'
                        ? 'bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300'
                        : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                    }`}>
                      {tool.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">{tool.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors">
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
