export {} 

declare global {
  interface Window {
    webVitals?: WebVital[]
  }
}

export type WebVital = {
  id: string
  name: string
  value: number
  delta: number
  rating?: 'good' | 'needs-improvement' | 'poor'
  navigationType?: string
}
