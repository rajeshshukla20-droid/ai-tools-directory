'use client'

import { useState } from 'react'
import { Mail, MessageSquare, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error:', error)
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
            Contact Us
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">Email</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">For general inquiries</p>
                </div>
              </div>
              <a href="mailto:hello@aitoolsdirectory.com" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                hello@aitoolsdirectory.com
              </a>
            </div>

            {/* Support */}
            <div className="card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">Support</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">For technical help</p>
                </div>
              </div>
              <a href="mailto:support@aitoolsdirectory.com" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                support@aitoolsdirectory.com
              </a>
            </div>

            {/* Response Time */}
            <div className="card bg-primary-50 dark:bg-primary-950 border-primary-200 dark:border-primary-900">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                <span className="font-semibold">Average Response Time:</span> 24-48 hours
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                We review every message and will get back to you as soon as possible.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="tool-request">Tool Submission/Request</option>
                      <option value="advertise">Advertising Inquiry</option>
                      <option value="affiliate">Affiliate Program</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="bug-report">Bug Report</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                      rows={6}
                      className="input-field resize-none"
                    //
                    />
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" required className="rounded" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        I agree to the <a href="/privacy" target="_blank" className="text-primary-600 dark:text-primary-400 hover:underline">privacy policy</a>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                q: 'How long does it take to get a response?',
                a: 'We typically respond within 24-48 business hours. Urgent support inquiries may be prioritized.',
              },
              {
                q: 'How do I submit a tool to the directory?',
                a: 'You can submit a tool through our submit page or email us directly with tool information.',
              },
              {
                q: 'Do you accept advertising?',
                a: 'Yes! We offer various advertising opportunities. Email our advertising team for details.',
              },
              {
                q: 'How can I become an affiliate?',
                a: 'Visit our affiliate program page to learn about commissions and sign up as an affiliate partner.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="card">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
