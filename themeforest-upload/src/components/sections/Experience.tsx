'use client'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  Users,
  Heart,
  Shield,
  CheckCircle,
  Target
} from 'lucide-react'
import { experience } from '@/data'

export function Experience() {
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

  const achievements = [
    { icon: Award, title: 'Board Certified', description: 'American Board of Internal Medicine', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, title: '500+ Patients', description: 'Successfully treated and cared for', color: 'from-blue-500 to-blue-600' },
    { icon: Heart, title: '98% Satisfaction', description: 'Patient satisfaction rating', color: 'from-red-500 to-pink-500' },
    { icon: Shield, title: '15+ Years', description: 'Medical experience and expertise', color: 'from-green-500 to-emerald-500' }
  ]

  const certifications = [
    'American Board of Internal Medicine (ABIM)',
    'American College of Physicians (FACP)',
    'National Board of Medical Examiners (NBME)',
    'Advanced Cardiac Life Support (ACLS)',
    'Basic Life Support (BLS)',
    'Medical Quality Assurance Certification'
  ]

  const specialties = [
    'Internal Medicine',
    'Preventive Medicine',
    'Chronic Disease Management',
    'Diabetes Care',
    'Hypertension Treatment',
    'Cardiovascular Health',
    'Women\'s Health',
    'Geriatric Medicine'
  ]

  return (
    <section className="section-medical bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
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
              <Briefcase className="h-4 w-4" />
              <span>Professional Experience</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Years of Dedicated{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Medical Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dr. Sarah Johnson brings extensive experience and expertise to every patient interaction, 
              with a proven track record of delivering exceptional medical care across multiple specialties.
            </p>
          </motion.div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {achievements.map((achievement, index) => (
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Professional Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  variants={{
                    initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    animate: { 
                      opacity: 1, 
                      x: 0,
                      transition: { duration: 0.6, delay: index * 0.1 }
                    }
                  }}
                  initial="initial"
                  animate="animate"
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="card-modern p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h4>
                          <p className="text-teal-600 font-semibold mb-2">{exp.company}</p>
                          <p className="text-gray-600 text-sm mb-3">{exp.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-white border-4 border-teal-500 rounded-full flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications and Specialties */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="card-modern p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Certifications & Licenses</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Specialties */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="card-modern p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Medical Specialties</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}