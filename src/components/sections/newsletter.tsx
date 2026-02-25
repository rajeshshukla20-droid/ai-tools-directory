'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-50 dark:from-primary-950 to-blue-50 dark:to-neutral-900 rounded-2xl p-8 md:p-12 border border-primary-100 dark:border-primary-900">
          <div className="flex justify-center mb-6">
            <Mail className="text-primary-600 dark:text-primary-400" size={40} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white text-center mb-4">
            Stay Updated with New AI Tools
          </h2>

          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and receive weekly updates about the newest AI tools, exclusive guides, and industry insights.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="input-field flex-1"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary px-8 py-3 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-3 text-primary-600 dark:text-primary-400">
              <CheckCircle size={24} />
              <p className="font-medium">Successfully subscribed! Check your email.</p>
            </div>
          )}

          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
