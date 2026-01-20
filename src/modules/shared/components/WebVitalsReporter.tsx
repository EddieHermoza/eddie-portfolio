'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { useRef } from 'react'
type WebVital = {
  id: string
  name: string
  value: number
  delta: number
  rating?: 'good' | 'needs-improvement' | 'poor'
  navigationType?: string
}

export function WebVitalsReporter() {
  // evitamos estado -> usamos una ref
  const metricsRef = useRef<WebVital[]>([])

  useReportWebVitals((metric: WebVital) => {
    metricsRef.current = [metric]

    if (typeof window !== 'undefined') {
      window.webVitals = metricsRef.current
      window.dispatchEvent(
        new CustomEvent('web-vital-added', { detail: metric })
      )
    }
  })

  return null
}
