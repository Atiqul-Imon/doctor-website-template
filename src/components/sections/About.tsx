'use client'

import { motion } from 'framer-motion'
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Award, 
  CheckCircle,
  Calendar,
  Phone,
  Star,
  GraduationCap,
  ArrowRight
} from 'lucide-react'
import { doctorData, stats } from '@/data'

export function About() {
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

  const features = [
    {
      icon: Stethoscope,
      title: 'Comprehensive Care',
      description: 'Full-spectrum internal medicine services with personalized treatment plans tailored to your unique health needs.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Patient-Centered',
      description: 'Building long-term relationships based on trust, communication, and genuine care for your wellbeing.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Preventive Focus',
      description: 'Proactive healthcare approach to maintain wellness and prevent disease before it develops.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Board Certified',
      description: 'Certified by the American Board of Internal Medicine with ongoing education and training.',
      color: 'from-green-500 to-green-600'
    }
  ]

  const achievements = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Patients Served' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '5.0', label: 'Patient Rating' }
  ]

  return (
    <section className="section-medical bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
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
              <Award className="h-4 w-4" />
              <span>About Dr. Sarah Johnson</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Meet Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Trusted Physician
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dr. Sarah Johnson brings {doctorData.experience}+ years of medical expertise and compassionate care 
              to every patient interaction, ensuring you receive the highest quality healthcare.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content - Doctor Image */}
          <motion.div
            className="relative"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={doctorData.image}
                  alt={doctorData.name}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -right-6 card-modern p-6 z-20"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">5.0 Rating</div>
                    <div className="text-sm text-gray-600">Patient Reviews</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 card-modern p-6 z-20"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Board Certified</div>
                    <div className="text-sm text-gray-600">Internal Medicine</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Doctor Info */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{doctorData.name}</h3>
                <p className="text-xl text-teal-600 font-semibold mb-4">{doctorData.title}</p>
                <p className="text-lg text-gray-600 leading-relaxed">{doctorData.bio}</p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-teal-600" />
                Education & Training
              </h4>
              <div className="space-y-3">
                {doctorData.education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{edu}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specialties */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-teal-600" />
                Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctorData.specialty.split('&').map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                  >
                    {specialty.trim()}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="/appointment"
                className="btn-medical-primary group"
              >
                <Calendar className="h-5 w-5 mr-3" />
                Book Consultation
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="btn-medical-secondary"
              >
                <Phone className="h-5 w-5 mr-3" />
                Contact Doctor
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {features.map((feature, index) => (
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
              <div className="service-card h-full text-center">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}