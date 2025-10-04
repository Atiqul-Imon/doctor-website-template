'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem('admin_auth')
      const loginTime = localStorage.getItem('admin_login_time')
      
      if (!authToken || !loginTime) {
        setIsAuthenticated(false)
        return
      }

      // Check if login is still valid (24 hours)
      const loginTimestamp = parseInt(loginTime)
      const now = Date.now()
      const hoursSinceLogin = (now - loginTimestamp) / (1000 * 60 * 60)

      if (hoursSinceLogin > 24) {
        // Token expired, clear it
        localStorage.removeItem('admin_auth')
        localStorage.removeItem('admin_login_time')
        setIsAuthenticated(false)
        return
      }

      setIsAuthenticated(true)
    }

    checkAuth()
  }, [])

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, router])

  if (isAuthenticated === null) {
    // Loading state
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medical-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  if (isAuthenticated === false) {
    return null // Will redirect to login
  }

  return <>{children}</>
}
