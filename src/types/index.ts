export interface Tool {
  id: string
  name: string
  description: string
  longDescription?: string
  category: string
  categoryId: string
  rating: number
  reviews: number
  price: 'free' | 'freemium' | 'paid' | 'enterprise'
  website: string
  affiliateLink?: string
  logo?: string
  features?: string[]
  pros?: string[]
  cons?: string[]
  status: 'published' | 'draft' | 'pending'
  createdAt: Date
  updatedAt: Date
  views?: number
}

export interface Category {
  id: string
  name: string
  icon: string
  description: string
  slug: string
  toolCount: number
  createdAt: Date
  updatedAt: Date
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  slug: string
  image?: string
  readTime: number
  status: 'published' | 'draft'
  createdAt: Date
  updatedAt: Date
  views?: number
}

export interface NewsletterSubscriber {
  id: string
  email: string
  subscribedAt: Date
  isActive: boolean
}

export interface ToolSubmission {
  id: string
  name: string
  website: string
  description: string
  category: string
  price: string
  submittedBy: string
  submittedEmail: string
  status: 'pending' | 'approved' | 'rejected'
  submittedAt: Date
  reviewedAt?: Date
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: 'new' | 'replied' | 'resolved'
  createdAt: Date
  repliedAt?: Date
}
