import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - Dr. Sarah Johnson Medical Practice',
  description: 'Learn how Dr. Sarah Johnson protects your privacy and handles your personal information in accordance with HIPAA and medical privacy standards.',
  robots: 'index, follow',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-medical-primary-600">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-medical-gradient text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Your privacy and the security of your medical information are our top priorities. 
              Learn how we protect and handle your personal data.
            </p>
            
            <div className="mt-8 text-sm text-white/80">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-medical-primary-600 mr-3" />
                    Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Dr. Sarah Johnson Medical Practice ("we," "our," or "us") is committed to protecting your privacy 
                    and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                    your information when you visit our website or use our medical services.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    As a healthcare provider, we are subject to the Health Insurance Portability and Accountability 
                    Act (HIPAA) and other applicable privacy laws. This policy supplements our HIPAA Notice of 
                    Privacy Practices.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Database className="h-6 w-6 text-medical-primary-600 mr-3" />
                    Information We Collect
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Name, date of birth, and contact information</li>
                        <li>• Medical history and health information</li>
                        <li>• Insurance information</li>
                        <li>• Emergency contact details</li>
                        <li>• Payment and billing information</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Information</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• IP address and browser information</li>
                        <li>• Pages visited and time spent on our site</li>
                        <li>• Information provided through contact forms</li>
                        <li>• Appointment booking information</li>
                        <li>• Newsletter subscription preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How We Use Information */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-teal-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical Care</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Providing medical diagnosis and treatment</li>
                        <li>• Coordinating with specialists and labs</li>
                        <li>• Managing your health records</li>
                        <li>• Prescribing medications</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Practice Operations</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Scheduling appointments</li>
                        <li>• Processing payments</li>
                        <li>• Sending appointment reminders</li>
                        <li>• Improving our services</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Information Sharing */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share 
                    your information only in the following circumstances:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-medical-primary-600 pl-4">
                      <h3 className="font-semibold text-gray-900">With Your Consent</h3>
                      <p className="text-gray-600">When you explicitly authorize us to share your information.</p>
                    </div>
                    
                    <div className="border-l-4 border-medical-primary-600 pl-4">
                      <h3 className="font-semibold text-gray-900">Medical Necessity</h3>
                      <p className="text-gray-600">To provide medical care, including referrals to specialists.</p>
                    </div>
                    
                    <div className="border-l-4 border-medical-primary-600 pl-4">
                      <h3 className="font-semibold text-gray-900">Legal Requirements</h3>
                      <p className="text-gray-600">When required by law or court order.</p>
                    </div>
                    
                    <div className="border-l-4 border-medical-primary-600 pl-4">
                      <h3 className="font-semibold text-gray-900">Business Associates</h3>
                      <p className="text-gray-600">With third parties who help us provide services (under strict confidentiality agreements).</p>
                    </div>
                  </div>
                </div>

                {/* Data Security */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Lock className="h-6 w-6 text-medical-primary-600 mr-3" />
                    Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures Include:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Encrypted data transmission and storage</li>
                      <li>• Regular security assessments and updates</li>
                      <li>• Access controls and user authentication</li>
                      <li>• Employee training on privacy and security</li>
                      <li>• Secure backup and recovery procedures</li>
                    </ul>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    You have the following rights regarding your personal information:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Access</h3>
                        <p className="text-gray-600 text-sm">Request copies of your medical records</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Amendment</h3>
                        <p className="text-gray-600 text-sm">Request corrections to your information</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Restriction</h3>
                        <p className="text-gray-600 text-sm">Request limits on information sharing</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Complaint</h3>
                        <p className="text-gray-600 text-sm">File a complaint if you believe your rights were violated</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Mail className="h-6 w-6 text-medical-primary-600 mr-3" />
                    Contact Us
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  
                  <div className="bg-medical-primary-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Privacy Officer</h3>
                        <p className="text-gray-600">Dr. Sarah Johnson Medical Practice</p>
                        <p className="text-gray-600">123 Medical Center Drive</p>
                        <p className="text-gray-600">Healthcare City, HC 12345</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Contact Methods</h3>
                        <div className="space-y-2 text-gray-600">
                          <p>Phone: (555) 123-4567</p>
                          <p>Email: privacy@drsarahjohnson.com</p>
                          <p>In Person: During office hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Updates */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material 
                    changes by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                    We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
