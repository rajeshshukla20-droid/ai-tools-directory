import Link from 'next/link'
import { Mail, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Tools', href: '/tools' },
      { label: 'Categories', href: '/categories' },
      { label: 'Blog', href: '/blog' },
      { label: 'Pricing', href: '/pricing' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
    Resources: [
      { label: 'API Docs', href: '/api' },
      { label: 'Affiliate Program', href: '/affiliate' },
      { label: 'Submit Tool', href: '/submit' },
      { label: 'Help Center', href: '/help' },
    ],
    Social: [
      { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
      { label: 'GitHub', href: 'https://github.com', icon: Github },
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    ],
  }

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">AITools</span>
            </div>
            <p className="text-neutral-400 text-sm mb-6">
              Discover and compare the best AI tools for your business.
            </p>
            <div className="flex space-x-4">
              {footerLinks.Social.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).slice(0, 3).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-y border-neutral-800 py-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2 text-white">Stay Updated</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Get notified about new AI tools and industry insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-r-lg transition-colors duration-200 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400">
          <p>&copy; {currentYear} AITools Directory. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <a href="mailto:hello@aitoolsdirectory.com" className="hover:text-white transition-colors duration-200 flex items-center space-x-1">
              <Mail size={16} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
