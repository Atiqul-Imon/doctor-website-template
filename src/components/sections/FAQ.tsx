'use client'

import { motion } from 'framer-motion'
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Phone,
  Calendar,
  Mail,
  MapPin
} from 'lucide-react'
import { useState } from 'react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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

  const faqs = [
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring your insurance card, photo ID, list of current medications, medical records from previous doctors, and any relevant test results. It's also helpful to prepare a list of questions or concerns you'd like to discuss."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling our office at (555) 123-4567, using our online booking system, or sending us an email. We offer same-day appointments for urgent concerns and typically schedule routine visits within 1-2 weeks."
    },
    {
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, and many others. Please contact our office to verify your specific insurance coverage before your appointment."
    },
    {
      question: "What if I need urgent care outside office hours?",
      answer: "For urgent medical concerns outside our regular hours (Mon-Fri 8AM-6PM), we provide 24/7 emergency coverage. Call our main number and follow the prompts for urgent care. For life-threatening emergencies, please call 911 or go to your nearest emergency room."
    },
    {
      question: "How long are typical appointments?",
      answer: "New patient appointments typically last 45-60 minutes to allow time for a comprehensive medical history and physical examination. Follow-up appointments are usually 15-30 minutes depending on the complexity of your concerns."
    },
    {
      question: "Do you offer telemedicine consultations?",
      answer: "Yes, we offer secure telemedicine consultations for follow-up visits, medication management, and non-emergency concerns. These virtual visits are conducted through our HIPAA-compliant platform and are covered by most insurance plans."
    },
    {
      question: "What preventive services do you offer?",
      answer: "We provide comprehensive preventive care including annual physical exams, cancer screenings, vaccinations, health risk assessments, and lifestyle counseling. We also offer specialized programs for diabetes prevention, heart health, and weight management."
    },
    {
      question: "How do you handle prescription refills?",
      answer: "Prescription refills can be requested through our patient portal, by phone, or during your appointment. We typically process refill requests within 24-48 hours. For controlled substances, you may need to schedule an appointment for evaluation."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              <HelpCircle className="h-4 w-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Got Questions?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                We Have Answers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, appointments, insurance, 
              and healthcare practices. Don't see your question? Contact us directly.
            </p>
          </motion.div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 }
                  }
                }}
                initial="initial"
                animate="animate"
              >
                <div className="card-modern overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <div className="card-modern p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-teal-600 font-semibold">(555) 123-4567</p>
              <p className="text-sm text-gray-600 mt-1">Mon-Fri: 8AM-6PM</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="card-modern p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Book Online</h3>
              <p className="text-blue-600 font-semibold">24/7 Booking</p>
              <p className="text-sm text-gray-600 mt-1">Schedule anytime</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="card-modern p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-green-600 font-semibold">Quick Response</p>
              <p className="text-sm text-gray-600 mt-1">Within 24 hours</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="card-modern p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-purple-600 font-semibold">Downtown Location</p>
              <p className="text-sm text-gray-600 mt-1">Easy parking</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}