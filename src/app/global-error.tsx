'use client'

import Link from 'next/link'
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Phone, 
  Mail
} from 'lucide-react'
import { doctorData } from '@/data'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            
            {/* Main Error Content */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              
              {/* Error Icon */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="h-12 w-12 text-red-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  System Error
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
                  We're experiencing a critical system error. Our technical team has been notified 
                  and is working to restore service. Please try again later.
                </p>
              </div>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                  <h3 className="font-semibold text-red-800 mb-2">Error Details (Development):</h3>
                  <p className="text-red-700 text-sm font-mono break-all">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-red-600 text-xs mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  If you need urgent medical assistance, please contact us directly.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div className="text-left">
                      <div className="text-sm text-gray-500">Phone</div>
                      <a 
                        href={`tel:${doctorData.phone}`}
                        className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {doctorData.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <div className="text-left">
                      <div className="text-sm text-gray-500">Email</div>
                      <a 
                        href={`mailto:${doctorData.email}`}
                        className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {doctorData.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  <span className="font-semibold text-red-800">Medical Emergency?</span>
                </div>
                <p className="text-red-700 text-sm">
                  For medical emergencies, call <a href="tel:911" className="font-semibold underline">911</a> immediately.
                </p>
              </div>

            </div>

            {/* Footer Note */}
            <div className="text-center mt-6 text-gray-500 text-sm">
              <p>
                We apologize for any inconvenience. Our technical team has been notified of this critical issue.
              </p>
            </div>

          </div>
        </div>
      </body>
    </html>
  )
}
