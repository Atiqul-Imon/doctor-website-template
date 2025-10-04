import Link from 'next/link'
import { ArrowLeft, Map, Home, Users, Stethoscope, FileText, Mail, Calendar, User, Settings } from 'lucide-react'
import { getServices } from '@/lib/services'
import { getBlogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Sitemap - Dr. Sarah Johnson Medical Practice',
  description: 'Complete sitemap of Dr. Sarah Johnson\'s medical practice website including all pages, services, and resources.',
  robots: 'index, follow',
}

export default function SitemapPage() {
  const services = getServices()
  const blogPosts = getBlogPosts()

  const mainPages = [
    { name: 'Home', href: '/', description: 'Main homepage with hero section and overview' },
    { name: 'About', href: '/about', description: 'Learn about Dr. Sarah Johnson and her practice' },
    { name: 'Services', href: '/services', description: 'Comprehensive medical services overview' },
    { name: 'Blog', href: '/blog', description: 'Medical articles, health tips, and news' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with our medical practice' },
    { name: 'Appointment', href: '/appointment', description: 'Schedule your medical appointment' },
  ]

  const servicePages = services.map(service => ({
    name: service.title,
    href: `/services/${service.slug}`,
    description: service.description
  }))

  const blogPages = blogPosts.map(post => ({
    name: post.title,
    href: `/blog/${post.slug}`,
    description: post.excerpt
  }))

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy-policy', description: 'How we protect your privacy and medical information' },
    { name: 'Terms of Service', href: '/terms-of-service', description: 'Terms and conditions for using our services' },
    { name: 'Sitemap', href: '/sitemap', description: 'Complete site navigation map' },
  ]

  const adminPages = [
    { name: 'Admin Dashboard', href: '/admin', description: 'Blog management and content administration' },
  ]

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-medical-primary-600">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Sitemap</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-medical-gradient text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Map className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Sitemap
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Navigate our website easily with this comprehensive sitemap of all pages and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Pages */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Home className="h-6 w-6 text-medical-primary-600 mr-3" />
                Main Pages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.href}
                    className="group p-4 border border-gray-200 rounded-lg hover:border-medical-primary-300 hover:bg-medical-primary-50 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-medical-primary-600 transition-colors mb-2">
                      {page.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Medical Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Stethoscope className="h-6 w-6 text-medical-primary-600 mr-3" />
                Medical Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicePages.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-4 border border-gray-200 rounded-lg hover:border-medical-primary-300 hover:bg-medical-primary-50 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-medical-primary-600 transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog Articles */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-medical-primary-600 mr-3" />
                Blog Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPages.map((post, index) => (
                  <Link
                    key={index}
                    href={post.href}
                    className="group p-4 border border-gray-200 rounded-lg hover:border-medical-primary-300 hover:bg-medical-primary-50 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-medical-primary-600 transition-colors mb-2">
                      {post.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal & Admin Pages */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Legal Pages */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-medical-primary-600 mr-3" />
                  Legal Pages
                </h2>
                <div className="space-y-4">
                  {legalPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="group block p-4 border border-gray-200 rounded-lg hover:border-medical-primary-300 hover:bg-medical-primary-50 transition-all duration-300"
                    >
                      <h3 className="font-semibold text-gray-900 group-hover:text-medical-primary-600 transition-colors mb-2">
                        {page.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {page.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Admin Pages */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="h-6 w-6 text-medical-primary-600 mr-3" />
                  Administration
                </h2>
                <div className="space-y-4">
                  {adminPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="group block p-4 border border-gray-200 rounded-lg hover:border-medical-primary-300 hover:bg-medical-primary-50 transition-all duration-300"
                    >
                      <h3 className="font-semibold text-gray-900 group-hover:text-medical-primary-600 transition-colors mb-2">
                        {page.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {page.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Navigation */}
            <div className="mt-12 bg-medical-primary-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Quick Navigation
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="/appointment"
                  className="bg-white rounded-lg p-4 text-center hover:bg-medical-primary-100 transition-colors group"
                >
                  <Calendar className="h-8 w-8 text-medical-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900">Book Appointment</span>
                </Link>
                
                <Link
                  href="/contact"
                  className="bg-white rounded-lg p-4 text-center hover:bg-medical-primary-100 transition-colors group"
                >
                  <Mail className="h-8 w-8 text-medical-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900">Contact Us</span>
                </Link>
                
                <Link
                  href="/services"
                  className="bg-white rounded-lg p-4 text-center hover:bg-medical-primary-100 transition-colors group"
                >
                  <Stethoscope className="h-8 w-8 text-medical-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900">Our Services</span>
                </Link>
                
                <Link
                  href="/about"
                  className="bg-white rounded-lg p-4 text-center hover:bg-medical-primary-100 transition-colors group"
                >
                  <User className="h-8 w-8 text-medical-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900">About Dr. Johnson</span>
                </Link>
              </div>
            </div>

            {/* Site Statistics */}
            <div className="mt-8 bg-gray-100 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Site Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-medical-primary-600">{mainPages.length}</div>
                  <div className="text-gray-600 text-sm">Main Pages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-medical-primary-600">{servicePages.length}</div>
                  <div className="text-gray-600 text-sm">Medical Services</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-medical-primary-600">{blogPages.length}</div>
                  <div className="text-gray-600 text-sm">Blog Articles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-medical-primary-600">{legalPages.length}</div>
                  <div className="text-gray-600 text-sm">Legal Pages</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
