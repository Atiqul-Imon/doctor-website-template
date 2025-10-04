'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and in browser
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
      return
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Log performance metrics for monitoring
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime)
        } else if (entry.entryType === 'first-input') {
          console.log('FID:', (entry as any).processingStart - entry.startTime)
        } else if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value)
        }
      })
    })

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Observer not supported
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart)
          console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.fetchStart)
        }
      }, 0)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}

// Web Vitals reporting function
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    console.log(metric)
    
    // Example: Send to Google Analytics
    // gtag('event', metric.name, {
    //   value: Math.round(metric.value),
    //   event_category: 'Web Vitals',
    //   event_label: metric.id,
    //   non_interaction: true,
    // })
  }
}
