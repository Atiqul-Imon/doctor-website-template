import Link from 'next/link'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import { getBlogPosts, getBlogCategories } from '@/lib/blog'

export const metadata = {
  title: 'Medical Blog - Dr. Sarah Johnson',
  description: 'Read Dr. Sarah Johnson\'s medical blog featuring articles on preventive care, chronic disease management, and health education.',
}

export default function BlogPage() {
  const blogPosts = getBlogPosts()
  const categories = getBlogCategories()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-medical bg-medical-gradient">
        <div className="container-custom">
          <div className="text-center space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              Medical{' '}
              <span className="text-yellow-300">Blog & Articles</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay informed with the latest medical insights, health tips, and preventive care information from Dr. Sarah Johnson.
            </p>
            <div className="flex justify-center">
              <Link
                href="/admin"
                className="btn-medical-secondary"
              >
                Manage Blog Posts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-medical bg-gray-50">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Browse by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 bg-medical-primary-100 text-medical-primary-700 rounded-full text-sm hover:bg-medical-primary-200 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-medical-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-medical-primary-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-500">+{post.tags.length - 3} more</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-medical-primary-600 hover:text-medical-primary-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No blog posts yet</h3>
              <p className="text-gray-600 mb-4">Check back soon for health tips and medical insights.</p>
              <Link
                href="/admin"
                className="btn-medical-primary"
              >
                Add Your First Post
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
