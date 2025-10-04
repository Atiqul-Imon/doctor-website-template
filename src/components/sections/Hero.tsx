'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Calendar, 
  Heart,
  Stethoscope,
  Shield,
  ArrowRight
} from 'lucide-react'
import { doctorData } from '@/data'

export function Hero() {
  return (
    <section className="hero-medical relative">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 opacity-5 animate-pulse-slow">
          <div className="w-full h-full border-2 border-white rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 border border-white"></div>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-12 h-12 opacity-5 animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full border-2 border-white rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
        </div>

        <div className="absolute bottom-32 left-32 w-20 h-20 opacity-5 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full border-2 border-white rounded-lg flex items-center justify-center">
            <Stethoscope className="w-10 h-10" />
          </div>
        </div>

        <div className="absolute bottom-20 right-20 w-14 h-14 opacity-5 animate-pulse-slow" style={{ animationDelay: '3s' }}>
          <div className="w-full h-full border-2 border-white rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 md:py-16 lg:py-20">
          {/* Left Content */}
          <motion.div
            className="space-y-6 md:space-y-8 lg:space-y-10 text-white text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-3 py-2 md:px-4 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium">Accepting New Patients</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                Compassionate Care,{' '}
                <span className="text-yellow-300 drop-shadow-lg">
                  Exceptional Health
                </span>
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md">
                Board-certified internal medicine physician with {doctorData.experience}+ years of experience in comprehensive medical care.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link href="/appointment" className="btn-medical-primary text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                Book Appointment
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center group">
                <div className="text-3xl font-bold text-yellow-300 mb-1 group-hover:scale-110 transition-transform">{doctorData.experience}+</div>
                <div className="text-white/70 text-sm">Years</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-yellow-300 mb-1 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-white/70 text-sm">Patients</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-yellow-300 mb-1 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-white/70 text-sm">Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-yellow-300 mb-1 group-hover:scale-110 transition-transform">5.0</div>
                <div className="text-white/70 text-sm">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Doctor Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={doctorData.image}
                alt={doctorData.name}
                className="w-full h-[600px] object-cover"
              />
              {/* Subtle Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}