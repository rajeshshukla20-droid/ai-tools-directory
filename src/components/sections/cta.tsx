import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Found an Amazing AI Tool?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Help the community discover more extraordinary AI tools. Submit your favorite tool and earn rewards through our affiliate program.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/submit"
              className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Submit a Tool</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/affiliate"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Join Affiliate Program
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
