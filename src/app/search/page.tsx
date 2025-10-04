'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { 
  Search, 
  ArrowLeft, 
  FileText, 
  Stethoscope, 
  Calendar,
  Users,
  Mail,
  Home
} from 'lucide-react'
import { getServices } from '@/lib/services'
import { getBlogPosts } from '@/lib/blog'

interface SearchResult {
  title: string
  description: string
  href: string
  type: 'page' | 'service' | 'blog'
  icon: any
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchTerm, setSearchTerm] = useState(query)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const services = getServices()
  const blogPosts = getBlogPosts()

  const allPages: SearchResult[] = [
    { title: 'Home', description: 'Main homepage', href: '/', type: 'page', icon: Home },
    { title: 'About', description: 'Learn about Dr. Sarah Johnson', href: '/about', type: 'page', icon: Users },
    { title: 'Services', description: 'Our medical services', href: '/services', type: 'page', icon: Stethoscope },
    { title: 'Blog', description: 'Health articles and tips', href: '/blog', type: 'page', icon: FileText },
    { title: 'Contact', description: 'Get in touch with us', href: '/contact', type: 'page', icon: Mail },
    { title: 'Appointment', description: 'Schedule an appointment', href: '/appointment', type: 'page', icon: Calendar },
    ...services.map(service => ({
      title: service.title,
      description: service.description,
      href: `/services/${service.slug}`,
      type: 'service' as const,
      icon: Stethoscope
    })),
    ...blogPosts.map(post => ({
      title: post.title,
      description: post.excerpt,
      href: `/blog/${post.slug}`,
      type: 'blog' as const,
      icon: FileText
    }))
  ]

  useEffect(() => {
    if (searchTerm.trim()) {
      setIsSearching(true)
      const filtered = allPages.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setResults(filtered)
      setIsSearching(false)
    } else {
      setResults([])
    }
  }, [searchTerm])

  useEffect(() => {
    if (query) {
      setSearchTerm(query)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by useEffect
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container-custom py-6">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-500 hover:text-medical-primary-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for services, articles, or pages..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary-500 focus:border-medical-primary-500 text-gray-900 placeholder-gray-500"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container-custom py-8">
        <div className="max-w-4xl">
          
          {!searchTerm.trim() ? (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Start Searching</h2>
              <p className="text-gray-600">
                Enter a search term to find services, articles, and pages on our website.
              </p>
            </div>
          ) : isSearching ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-4 border-medical-primary-200 border-t-medical-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div>
              <div className="mb-6">
                <p className="text-gray-600">
                  Found {results.length} result{results.length !== 1 ? 's' : ''} for "{searchTerm}"
                </p>
              </div>
              
              <div className="space-y-4">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.href}
                    className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-medical-primary-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          result.type === 'service' 
                            ? 'bg-teal-100' 
                            : result.type === 'blog' 
                            ? 'bg-blue-100' 
                            : 'bg-gray-100'
                        }`}>
                          <result.icon className={`h-5 w-5 ${
                            result.type === 'service' 
                              ? 'text-teal-600' 
                              : result.type === 'blog' 
                              ? 'text-blue-600' 
                              : 'text-gray-600'
                          }`} />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-medical-primary-600 transition-colors">
                            {result.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            result.type === 'service' 
                              ? 'bg-teal-100 text-teal-700' 
                              : result.type === 'blog' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {result.type === 'service' ? 'Service' : result.type === 'blog' ? 'Article' : 'Page'}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Results Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any results for "{searchTerm}". Try different keywords or browse our main sections.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <Link
                  href="/services"
                  className="p-4 border border-gray-200 rounded-lg hover:border-medical-primary-300 hover:bg-medical-primary-50 transition-all text-center"
                >
                  <Stethoscope className="h-8 w-8 text-medical-primary-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">Medical Services</div>
                  <div className="text-sm text-gray-600">Browse our services</div>
                </Link>
                
                <Link
                  href="/blog"
                  className="p-4 border border-gray-200 rounded-lg hover:border-medical-primary-300 hover:bg-medical-primary-50 transition-all text-center"
                >
                  <FileText className="h-8 w-8 text-medical-primary-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">Health Blog</div>
                  <div className="text-sm text-gray-600">Read our articles</div>
                </Link>
                
                <Link
                  href="/contact"
                  className="p-4 border border-gray-200 rounded-lg hover:border-medical-primary-300 hover:bg-medical-primary-50 transition-all text-center"
                >
                  <Mail className="h-8 w-8 text-medical-primary-600 mx-auto mb-2" />
                  <div className="font-medium text-gray-900">Contact Us</div>
                  <div className="text-sm text-gray-600">Get in touch</div>
                </Link>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}
