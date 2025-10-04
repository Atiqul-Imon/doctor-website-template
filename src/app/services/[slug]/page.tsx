import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Clock, Users, Shield, Heart } from 'lucide-react'
import { getServiceBySlug, getServices } from '@/lib/services'
import { doctorData } from '@/data'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const services = getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} - Dr. Sarah Johnson Medical Services`,
    description: service.description,
    keywords: service.tags?.join(', ') || '',
    openGraph: {
      title: `${service.title} - Dr. Sarah Johnson Medical Services`,
      description: service.description,
      url: `https://dr-sarah-johnson.vercel.app/services/${service.slug}`,
      images: [service.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} - Dr. Sarah Johnson Medical Services`,
      description: service.description,
      images: [service.image],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    notFound()
  }

  const relatedServices = getServices().filter(s => s.id !== service.id).slice(0, 3)

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-medical-primary-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="text-gray-500 hover:text-medical-primary-600">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-medical-gradient text-white py-16 relative overflow-hidden">
        {/* Background overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Link 
                href="/services" 
                className="inline-flex items-center text-white hover:text-white/90 transition-colors drop-shadow-md"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
              
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 shadow-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium drop-shadow-sm">Available Service</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                  {service.title}
                </h1>
                
                <p className="text-xl text-white leading-relaxed drop-shadow-md">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="bg-white text-medical-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-medical-primary-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                >
                  Ask Questions
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.detailedDescription || service.description}
                  </p>
                  
                  {service.features && service.features.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">What's Included</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-medical-primary-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Process */}
              {service.process && service.process.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-medical-primary-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Heart className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Service Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Service Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-medical-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Duration</p>
                      <p className="text-gray-600">{service.duration || '30-60 minutes'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-medical-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Appointment Type</p>
                      <p className="text-gray-600">{service.appointmentType || 'In-person or Telemedicine'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-medical-primary-600" />
                    <div>
                      <p className="font-medium text-gray-900">Insurance</p>
                      <p className="text-gray-600">Most insurance plans accepted</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/appointment"
                    className="w-full btn-medical-primary text-center block"
                  >
                    Schedule Appointment
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-medical-primary-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Have questions about this service? Contact our office for more information.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Phone:</strong> {doctorData.phone}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> {doctorData.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Services</h2>
              <p className="text-xl text-gray-600">Explore other medical services we offer</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medical-primary-200"
                >
                  <div className="space-y-4">
                    <img
                      src={relatedService.image}
                      alt={relatedService.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-medical-primary-600 transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {relatedService.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
