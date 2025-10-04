'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Calendar, 
  Mail, 
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Heart,
  Shield,
  CheckCircle
} from 'lucide-react'

export function ContactCTA() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us Today',
      description: 'Speak directly with our medical team',
      value: '(555) 123-4567',
      action: 'Call Now',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule your consultation online',
      value: '24/7 Online Booking',
      action: 'Book Now',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Send Message',
      description: 'Get quick answers to your questions',
      value: 'dr.sarah@medical.com',
      action: 'Email Us',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      description: 'Located in downtown medical district',
      value: '123 Medical Plaza',
      action: 'Get Directions',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const benefits = [
    'Same-day appointments available',
    'Most insurance plans accepted',
    'Telemedicine consultations',
    '24/7 emergency coverage',
    'Comprehensive preventive care',
    'Personalized treatment plans'
  ]

  return (
    <section className="section-medical bg-gradient-to-br from-teal-600 to-blue-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-white">
              <Heart className="h-4 w-4" />
              <span>Ready to Get Started?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Take the First Step{' '}
              <span className="text-yellow-300">
                Towards Better Health
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Don't wait to prioritize your health. Contact Dr. Sarah Johnson today to schedule 
              your consultation and begin your journey to optimal wellness.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 40, scale: 0.95 },
                animate: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6 }
                }
              }}
              initial="initial"
              animate="animate"
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{contact.description}</p>
                  <p className="text-white font-semibold mb-4">{contact.value}</p>
                  <button className={`w-full py-2 px-4 bg-gradient-to-r ${contact.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    {contact.action}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Dr. Sarah Johnson?</h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Office Hours */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-yellow-300" />
                <h4 className="text-lg font-bold text-white">Office Hours</h4>
              </div>
              <div className="space-y-2 text-white/90">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Schedule Your Appointment?
                </h3>
                <p className="text-gray-600">
                  Join hundreds of satisfied patients who trust Dr. Sarah Johnson with their healthcare needs.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="/appointment"
                  className="w-full btn-medical-primary group flex items-center justify-center"
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  Book Your Consultation
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Or call us directly:</p>
                  <a 
                    href="tel:5551234567" 
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>5.0 Rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>Board Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}