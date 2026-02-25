import HeroSection from '@/components/sections/hero'
import FeaturedTools from '@/components/sections/featured-tools'
import CategoriesSection from '@/components/sections/categories'
import CTASection from '@/components/sections/cta'
import NewsletterSection from '@/components/sections/newsletter'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedTools />
      <CategoriesSection />
      <NewsletterSection />
      <CTASection />
    </>
  )
}
