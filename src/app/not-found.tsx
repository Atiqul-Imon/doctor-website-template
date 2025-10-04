'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Home, 
  Search, 
  Stethoscope, 
  Calendar, 
  Phone, 
  Mail, 
  ArrowLeft, 
  AlertCircle,
  MapPin,
  Clock,
  FileText,
  Users
} from 'lucide-react'
import { doctorData } from '@/data'

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const router = useRouter()

  const commonPages = [
    { name: 'Home', href: '/', icon: Home, description: 'Return to homepage' },
    { name: 'About', href: '/about', icon: Users, description: 'Learn about Dr. Sarah Johnson' },
    { name: 'Services', href: '/services', icon: Stethoscope, description: 'Our medical services' },
    { name: 'Blog', href: '/blog', icon: FileText, description: 'Health articles and tips' },
    { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch with us' },
    { name: 'Appointment', href: '/appointment', icon: Calendar, description: 'Schedule an appointment' },
  ]

  const servicePages = [
    'Annual Physical Exams',
    'Chronic Disease Management', 
    'Preventive Care',
    'Urgent Care',
    'Women\'s Health',
    'Telemedicine Consultations'
  ]

  const blogTopics = [
    'Preventive Care',
    'Healthy Lifestyle',
    'Chronic Disease',
    'Mental Health',
    'Nutrition',
    'Exercise',
    'Medication',
    'Health Screening'
  ]

  const allSuggestions = [...servicePages, ...blogTopics]

  useEffect(() => {
    if (searchQuery.length > 2) {
      const filtered = allSuggestions.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSuggestions(filtered.slice(0, 6))
    } else {
      setSuggestions([])
    }
  }, [searchQuery])

  const handleSearch = (query: string) => {
    if (query.toLowerCase().includes('service') || servicePages.some(s => 
      query.toLowerCase().includes(s.toLowerCase())
    )) {
      router.push('/services')
    } else if (query.toLowerCase().includes('blog') || query.toLowerCase().includes('article')) {
      router.push('/blog')
    } else if (query.toLowerCase().includes('contact') || query.toLowerCase().includes('phone')) {
      router.push('/contact')
    } else if (query.toLowerCase().includes('appointment') || query.toLowerCase().includes('book')) {
      router.push('/appointment')
    } else {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSearch(suggestion)
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        
        {/* Main Error Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center mb-8">
          
          {/* Error Icon and Code */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off. Don't worry - 
              even the best doctors sometimes misplace things. Let's help you find what you need.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                placeholder="Search for services, articles, or pages..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary-500 focus:border-medical-primary-500 text-gray-900 placeholder-gray-500"
              />
              
              {/* Search Suggestions */}
              {suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 border-b border-gray-100 last:border-b-0"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleGoBack}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-medical-primary-600 text-white rounded-lg hover:bg-medical-primary-700 transition-colors font-medium"
            >
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </div>

        </div>

        {/* Quick Navigation */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Popular Pages */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 text-medical-primary-600 mr-2" />
              Popular Pages
            </h3>
            <div className="space-y-3">
              {commonPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-medical-primary-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-medical-primary-200 transition-colors">
                    <page.icon className="h-5 w-5 text-medical-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-medical-primary-600 transition-colors">
                      {page.name}
                    </div>
                    <div className="text-sm text-gray-500">{page.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Phone className="h-5 w-5 text-medical-primary-600 mr-2" />
              Need Help?
            </h3>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Phone className="h-5 w-5 text-medical-primary-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Call Us</div>
                  <a 
                    href={`tel:${doctorData.phone}`}
                    className="text-medical-primary-600 hover:text-medical-primary-700 transition-colors"
                  >
                    {doctorData.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-medical-primary-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Email Us</div>
                  <a 
                    href={`mailto:${doctorData.email}`}
                    className="text-medical-primary-600 hover:text-medical-primary-700 transition-colors"
                  >
                    {doctorData.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-medical-primary-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Visit Us</div>
                  <div className="text-gray-600 text-sm">
                    {doctorData.address.street}, {doctorData.address.city}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 text-medical-primary-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Office Hours</div>
                  <div className="text-gray-600 text-sm">
                    Mon-Fri: 8AM-5PM
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-red-800">Medical Emergency?</h3>
          </div>
          <p className="text-red-700 mb-4">
            If you're experiencing a medical emergency, please call 911 immediately or go to your nearest emergency room.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:911"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call 911
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact Office
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>
            Still can't find what you're looking for? Our team is here to help. 
            <Link href="/contact" className="text-medical-primary-600 hover:text-medical-primary-700 ml-1">
              Contact us
            </Link> for assistance.
          </p>
        </div>

      </div>
    </div>
  )
}
