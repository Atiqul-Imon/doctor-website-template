import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { getBlogPostBySlug, getBlogPosts, getRelatedPosts } from '@/lib/blog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Dr. Sarah Johnson`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-medical-small bg-medical-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="text-white">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="bg-yellow-500 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-medical bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  {/* Featured Image */}
                  <div className="mb-8">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 bg-medical-primary-100 text-medical-primary-700 rounded-full text-sm"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div className="blog-content prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </div>

                  {/* Author Bio */}
                  <div className="bg-gray-50 rounded-2xl p-6 mt-12">
                    <div className="flex items-start space-x-4">
                      <img
                        src="/images/doctors/dr-sarah-johnson.svg"
                        alt={post.author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          About {post.author}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Board-certified internal medicine physician with over 15 years of experience in providing comprehensive medical care.
                        </p>
                        <div className="flex space-x-4">
                          <Link
                            href="/about"
                            className="text-medical-primary-600 hover:text-medical-primary-700 font-medium text-sm"
                          >
                            Learn More →
                          </Link>
                          <Link
                            href="/appointment"
                            className="text-medical-primary-600 hover:text-medical-primary-700 font-medium text-sm"
                          >
                            Book Appointment →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Share */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Article
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                        Share on Facebook
                      </button>
                      <button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                        Share on Twitter
                      </button>
                      <button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                        Share on LinkedIn
                      </button>
                    </div>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Related Articles
                      </h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <Link
                            key={relatedPost.id}
                            href={`/blog/${relatedPost.slug}`}
                            className="block group"
                          >
                            <div className="flex space-x-3">
                              <img
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                              />
                              <div>
                                <h4 className="font-medium text-gray-900 group-hover:text-medical-primary-600 transition-colors text-sm leading-tight">
                                  {relatedPost.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                  {new Date(relatedPost.publishedAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="bg-medical-gradient rounded-xl p-6 text-white text-center">
                    <h3 className="font-semibold mb-2">Need Medical Care?</h3>
                    <p className="text-sm text-white/90 mb-4">
                      Schedule an appointment with Dr. Sarah Johnson
                    </p>
                    <Link
                      href="/appointment"
                      className="inline-block bg-white text-medical-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
