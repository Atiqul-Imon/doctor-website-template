'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Heart, 
  Award, 
  Clock,
  Star,
  Shield,
  CheckCircle,
  TrendingUp
} from 'lucide-react'

export function Statistics() {
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

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Patients Served',
      description: 'Successfully treated patients with comprehensive care',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Satisfaction Rate',
      description: 'Patients rate our care as excellent or very good',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'Dedicated years of medical practice and expertise',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      number: '5.0',
      label: 'Patient Rating',
      description: 'Average rating from patient reviews and feedback',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Safety Record',
      description: 'Zero medical errors and complications',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Emergency Care',
      description: 'Round-the-clock availability for urgent cases',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: CheckCircle,
      number: '95%',
      label: 'Treatment Success',
      description: 'Successful treatment outcomes for patients',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      number: '50+',
      label: 'Medical Procedures',
      description: 'Wide range of medical procedures performed',
      color: 'from-cyan-500 to-cyan-600'
    }
  ]

  return (
    <section className="section-medical bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>Our Success Metrics</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Hundreds of Patients
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is reflected in our outstanding patient outcomes, 
              satisfaction ratings, and comprehensive healthcare delivery.
            </p>
          </motion.div>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {stats.map((stat, index) => (
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
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-center mb-2">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Family of Satisfied Patients
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same high-quality care that has earned us these outstanding results. 
              Schedule your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="btn-medical-primary group"
              >
                <Star className="h-5 w-5 mr-3" />
                Book Your Appointment
              </a>
              <a
                href="/contact"
                className="btn-medical-secondary"
              >
                <Users className="h-5 w-5 mr-3" />
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}