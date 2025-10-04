import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Clock } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - Dr. Sarah Johnson Medical Practice',
  description: 'Terms of service and conditions for using Dr. Sarah Johnson\'s medical practice website and services.',
  robots: 'index, follow',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-medical-primary-600">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Terms of Service</span>
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
                <Scale className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Terms of Service
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Please read these terms carefully before using our medical practice website and services.
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
                    <FileText className="h-6 w-6 text-medical-primary-600 mr-3" />
                    Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Welcome to Dr. Sarah Johnson Medical Practice. These Terms of Service ("Terms") govern your 
                    use of our website and the medical services we provide. By accessing our website or using 
                    our services, you agree to be bound by these Terms.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    If you do not agree to these Terms, please do not use our website or services. We reserve 
                    the right to modify these Terms at any time, and your continued use constitutes acceptance 
                    of any changes.
                  </p>
                </div>

                {/* Medical Services */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Users className="h-6 w-6 text-medical-primary-600 mr-3" />
                    Medical Services
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Scope of Services</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Dr. Sarah Johnson provides comprehensive medical care including:
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Annual physical examinations and preventive care</li>
                        <li>• Chronic disease management</li>
                        <li>• Urgent care services</li>
                        <li>• Women's health services</li>
                        <li>• Telemedicine consultations</li>
                        <li>• Health education and counseling</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                        Medical Disclaimer
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        The information on this website is for general informational purposes only and does not 
                        constitute medical advice. Always consult with a qualified healthcare professional for 
                        diagnosis and treatment of medical conditions. In case of emergency, call 911 immediately.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Patient Responsibilities */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Responsibilities</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Accurate Information</h3>
                        <p className="text-gray-600 text-sm">Provide complete and accurate medical history and current medications</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Appointment Attendance</h3>
                        <p className="text-gray-600 text-sm">Arrive on time and provide 24-hour notice for cancellations</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Treatment Compliance</h3>
                        <p className="text-gray-600 text-sm">Follow prescribed treatments and medication instructions</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Payment Responsibility</h3>
                        <p className="text-gray-600 text-sm">Pay for services according to our billing policies</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Communication</h3>
                        <p className="text-gray-600 text-sm">Keep us informed of any changes in your health status</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Respect</h3>
                        <p className="text-gray-600 text-sm">Treat staff and other patients with respect and courtesy</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website Use */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Website Use Terms</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-medical-primary-600 pl-4">
                      <h3 className="font-semibold text-gray-900">Permitted Use</h3>
                      <p className="text-gray-600">You may use our website to:</p>
                      <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                        <li>• Learn about our medical services</li>
                        <li>• Schedule appointments</li>
                        <li>• Access health information and resources</li>
                        <li>• Contact us for medical inquiries</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold text-gray-900">Prohibited Use</h3>
                      <p className="text-gray-600">You may not use our website to:</p>
                      <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                        <li>• Violate any applicable laws or regulations</li>
                        <li>• Transmit harmful or malicious code</li>
                        <li>• Attempt unauthorized access to our systems</li>
                        <li>• Use automated systems to access our website</li>
                        <li>• Impersonate another person or entity</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    All content on this website, including text, graphics, logos, images, and software, is the 
                    property of Dr. Sarah Johnson Medical Practice and is protected by copyright and other 
                    intellectual property laws.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">You may not:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Copy, reproduce, or distribute our content without permission</li>
                      <li>• Use our content for commercial purposes</li>
                      <li>• Modify or create derivative works from our content</li>
                      <li>• Remove copyright or proprietary notices</li>
                    </ul>
                  </div>
                </div>

                {/* Privacy and Data */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your privacy is important to us. Our collection and use of personal information is governed 
                    by our Privacy Policy and applicable laws, including HIPAA.
                  </p>
                  <div className="bg-teal-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">We are committed to:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Protecting your medical information</li>
                      <li>• Using your information only for legitimate medical purposes</li>
                      <li>• Maintaining the confidentiality of your records</li>
                      <li>• Complying with all applicable privacy laws</li>
                    </ul>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                  <div className="bg-red-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                      Important Notice
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      While we strive to provide accurate and up-to-date information, Dr. Sarah Johnson Medical 
                      Practice shall not be liable for any direct, indirect, incidental, special, or consequential 
                      damages resulting from:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Use of or inability to use our website</li>
                      <li>• Any errors or omissions in our content</li>
                      <li>• Unauthorized access to or alteration of your data</li>
                      <li>• Any other matter relating to our website or services</li>
                    </ul>
                  </div>
                </div>

                {/* Appointment and Billing */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="h-6 w-6 text-medical-primary-600 mr-3" />
                    Appointments and Billing
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Scheduling</h3>
                        <p className="text-gray-600 text-sm">Appointments can be scheduled online, by phone, or in person</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Cancellation Policy</h3>
                        <p className="text-gray-600 text-sm">24-hour notice required for cancellations to avoid fees</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Payment Terms</h3>
                        <p className="text-gray-600 text-sm">Payment is due at time of service unless other arrangements are made</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900">Insurance</h3>
                        <p className="text-gray-600 text-sm">We accept most major insurance plans and will assist with claims</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Termination */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to terminate or suspend your access to our website and services at any 
                    time, without notice, for any reason, including violation of these Terms. Upon termination, 
                    your right to use our website and services will cease immediately.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the state 
                    where Dr. Sarah Johnson Medical Practice is located, without regard to conflict of law principles. 
                    Any legal action or proceeding arising under these Terms will be brought exclusively in the 
                    courts of that jurisdiction.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="bg-medical-primary-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Dr. Sarah Johnson Medical Practice</h3>
                        <p className="text-gray-600">123 Medical Center Drive</p>
                        <p className="text-gray-600">Healthcare City, HC 12345</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Contact Methods</h3>
                        <div className="space-y-2 text-gray-600">
                          <p>Phone: (555) 123-4567</p>
                          <p>Email: info@drsarahjohnson.com</p>
                          <p>Office Hours: Mon-Fri 8AM-5PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Updates */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms Updates</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update these Terms of Service from time to time. We will notify you of any material 
                    changes by posting the new Terms on this page and updating the "Last updated" date. Your 
                    continued use of our website and services after any such changes constitutes acceptance of 
                    the new Terms.
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
