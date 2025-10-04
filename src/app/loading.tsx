import { Stethoscope, Heart } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 flex items-center justify-center">
      <div className="text-center">
        
        {/* Loading Animation */}
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-medical-primary-200 border-t-medical-primary-600 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Stethoscope className="h-8 w-8 text-medical-primary-600 animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Loading...
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Please wait while we prepare your medical information.
          </p>
          
          {/* Animated Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-medical-primary-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-medical-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-medical-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Medical Theme Elements */}
        <div className="mt-12 flex justify-center space-x-8 opacity-30">
          <Heart className="h-6 w-6 text-medical-primary-600 animate-pulse" />
          <Stethoscope className="h-6 w-6 text-medical-primary-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Heart className="h-6 w-6 text-medical-primary-600 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

      </div>
    </div>
  )
}
