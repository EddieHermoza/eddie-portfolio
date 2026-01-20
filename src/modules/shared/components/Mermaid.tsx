'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
  className?: string
}

export default function MermaidDiagram({
  chart,
  className = '',
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && chart) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'dark',
        securityLevel: 'loose',
      })

      const renderChart = async () => {
        try {
          const { svg } = await mermaid.render(
            `mermaid-${Math.random().toString(36).substr(2, 9)}`,
            chart
          )
          if (containerRef.current) {
            containerRef.current.innerHTML = svg
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error)
          if (containerRef.current) {
            containerRef.current.innerHTML = `<p class="text-destructive">Error renderizando el diagrama</p>`
          }
        }
      }

      renderChart()
    }
  }, [chart])

  return <div ref={containerRef} className={className} />
}
