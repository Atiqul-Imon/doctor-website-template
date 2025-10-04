'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Calendar } from 'lucide-react'
import { testimonials } from '@/data'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-medical bg-white relative overflow-hidden">
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
              <Heart className="h-4 w-4" />
              <span>Patient Testimonials</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Patients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our patients have to say about their experience 
              with Dr. Sarah Johnson and our medical team.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="testimonial-card relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-teal-600" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{currentTestimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-teal-100">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</h4>
                  <p className="text-teal-600 font-medium">{currentTestimonial.role}</p>
                  <p className="text-sm text-gray-500">{currentTestimonial.date}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="flex justify-center items-center space-x-4 mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-teal-100 hover:bg-teal-200 rounded-full flex items-center justify-center transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === currentIndex 
                    ? "bg-teal-600 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-teal-100 hover:bg-teal-200 rounded-full flex items-center justify-center transition-colors group"
          >
            <ChevronRight className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
              <div className={cn(
                "testimonial-card h-full",
                index === currentIndex && "ring-2 ring-teal-500 ring-opacity-50"
              )}>
                {/* Testimonial Content */}
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-teal-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-teal-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Exceptional Care?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our family of satisfied patients and discover why Dr. Sarah Johnson is the trusted choice for medical care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="btn-medical-primary group"
              >
                <Calendar className="h-5 w-5 mr-3" />
                Book Your Appointment
              </a>
              <a
                href="/about"
                className="btn-medical-secondary"
              >
                Learn About Our Care
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}