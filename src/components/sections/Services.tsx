'use client'

import { motion } from 'framer-motion'
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Video,
  Check,
  ArrowRight,
  Activity,
  Brain,
  Baby,
  Phone,
  Calendar
} from 'lucide-react'
import { services } from '@/data'

const iconMap = {
  Stethoscope,
  Heart,
  Shield,
  Clock,
  Users,
  Video,
  Activity,
  Brain,
  Baby,
  Phone
}

export function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="section-medical bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-teal-200 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-blue-200 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-teal-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-200 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="h-4 w-4" />
              <span>Our Medical Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Comprehensive Healthcare{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide a full range of medical services designed to meet your health needs at every stage of life, 
              from preventive care to specialized treatments.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
            {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Heart
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group"
              >
                <div className="service-card h-full relative overflow-hidden">
                  {/* Service Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="medical-icon group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-teal-600 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Take Control of Your Health?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule your appointment today and experience personalized medical care that puts your health first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="btn-medical-primary group"
              >
                <Calendar className="h-5 w-5 mr-3" />
                Book Appointment
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="btn-medical-secondary"
              >
                <Phone className="h-5 w-5 mr-3" />
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}