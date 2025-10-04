'use client'

import { useState, useEffect } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
}

interface ToasterProps {
  toasts?: Toast[]
  onRemove?: (id: string) => void
}

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info
}

const toastStyles = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800'
}

const iconStyles = {
  success: 'text-green-600',
  error: 'text-red-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600'
}

export function Toaster({ toasts = [], onRemove }: ToasterProps) {
  const [localToasts, setLocalToasts] = useState<Toast[]>([])

  useEffect(() => {
    if (toasts.length > 0) {
      setLocalToasts(toasts)
    }
  }, [toasts])

  const removeToast = (id: string) => {
    setLocalToasts(prev => prev.filter(toast => toast.id !== id))
    onRemove?.(id)
  }

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    setLocalToasts(prev => [...prev, newToast])

    // Auto remove after duration
    const duration = toast.duration || 5000
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  // Expose addToast function globally for easy use
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ;(window as any).addToast = addToast
    }
  }, [addToast])

  if (localToasts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm w-full">
      {localToasts.map((toast) => {
        const IconComponent = toastIcons[toast.type]
        
        return (
          <div
            key={toast.id}
            className={cn(
              'relative p-4 rounded-lg border shadow-medium animate-fade-in-up',
              toastStyles[toast.type]
            )}
          >
            <div className="flex items-start space-x-3">
              <IconComponent className={cn('h-5 w-5 mt-0.5 flex-shrink-0', iconStyles[toast.type])} />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm">{toast.title}</h4>
                {toast.message && (
                  <p className="text-sm mt-1 opacity-90">{toast.message}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Helper functions for easy toast creation
export const toast = {
  success: (title: string, message?: string, duration?: number) => {
    if (typeof window !== 'undefined' && (window as any).addToast) {
      ;(window as any).addToast({ type: 'success', title, message, duration })
    }
  },
  error: (title: string, message?: string, duration?: number) => {
    if (typeof window !== 'undefined' && (window as any).addToast) {
      ;(window as any).addToast({ type: 'error', title, message, duration })
    }
  },
  warning: (title: string, message?: string, duration?: number) => {
    if (typeof window !== 'undefined' && (window as any).addToast) {
      ;(window as any).addToast({ type: 'warning', title, message, duration })
    }
  },
  info: (title: string, message?: string, duration?: number) => {
    if (typeof window !== 'undefined' && (window as any).addToast) {
      ;(window as any).addToast({ type: 'info', title, message, duration })
    }
  }
}
