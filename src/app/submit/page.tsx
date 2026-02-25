'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function SubmitToolPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-50 dark:from-neutral-900 via-white dark:via-neutral-950 to-primary-50 dark:to-neutral-900 py-12 md:py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Submit Your AI Tool
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have an amazing AI tool? Share it with our community and reach thousands of users looking for your solution.
          </p>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Why Submit Your Tool?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    '✓ Reach over 100,000 monthly visitors',
                    '✓ Get discovered by your target audience',
                    '✓ Improve SEO and brand visibility',
                    '✓ Earn referral traffic and leads',
                    '✓ Join our growing affiliate network',
                    '✓ Get featured in our newsletter',
                  ].map((benefit) => (
                    <p key={benefit} className="text-neutral-700 dark:text-neutral-300">
                      {benefit}
                    </p>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="card space-y-6">
                {/* Tool Information */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Tool Information
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                        Tool Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., ChatGPT"
                        required
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                        Website URL *
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com"
                        required
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                        Tool Description (Max 500 characters) *
                      </label>
                      <textarea
                        placeholder="Describe what your tool does..."
                        maxLength={500}
                        required
                        rows={4}
                        className="input-field resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                          Category *
                        </label>
                        <select required className="input-field">
                          <option value="">Select a category</option>
                          <option value="chatbots">AI Chatbots</option>
                          <option value="image">Image Generation</option>
                          <option value="video">Video Tools</option>
                          <option value="coding">Coding & Development</option>
                          <option value="writing">Writing & Copy</option>
                          <option value="marketing">SEO & Marketing</option>
                          <option value="audio">Audio & Music</option>
                          <option value="productivity">Business & Productivity</option>
                          <option value="automation">No-Code Automation</option>
                          <option value="design">Design & Creativity</option>
                          <option value="analytics">Analytics & Data</option>
                          <option value="education">Education & Learning</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                          Pricing Model *
                        </label>
                        <select required className="input-field">
                          <option value="">Select pricing</option>
                          <option value="free">Free</option>
                          <option value="freemium">Freemium</option>
                          <option value="paid">Paid</option>
                          <option value="enterprise">Enterprise</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                        Logo URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com/logo.png"
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Your Information
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Full name"
                          required
                          className="input-field"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company name (optional)"
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>

                {/* Affiliate Information */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Affiliate Information
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-neutral-700 dark:text-neutral-300">
                          I want to join the affiliate program
                        </span>
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                        Affiliate Link (for partner tools)
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com/ref=aitoolsdirectory"
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms & Agreement */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input type="checkbox" required className="rounded mt-1" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      I confirm that the tool is legally compliant and I have the right to submit it. I also agree to the <a href="/terms" className="text-primary-600 dark:text-primary-400 hover:underline">terms and conditions</a>.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Submit Tool'}
                </button>
              </form>
            </div>
          ) : (
            <div className="card text-center py-12">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                Thank You for Your Submission!
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                We've received your tool submission. Our team will review it and get back to you within 3-5 business days.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-8">
                Check your email for status updates and next steps.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
              >
                Submit Another Tool
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
