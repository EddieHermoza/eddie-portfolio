'use client'

import React, { useState, useEffect } from 'react'
import CustomMarkdown from './CustomMarkdown'

interface TypewriterMarkdownProps {
  content: string
  speed?: number
  className?: string
}

export default function TypewriterMarkdown({
  content,
  speed = 10,
  className,
}: TypewriterMarkdownProps) {
  const [displayedContent, setDisplayedContent] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    // Reset if content changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayedContent('')
    setCurrentIndex(0)
  }, [content])

  useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedContent((prev) => prev + content[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [content, currentIndex, speed])

  return (
    <div className={className}>
      <CustomMarkdown>{displayedContent}</CustomMarkdown>
      {currentIndex < content.length && (
        <span className="inline-block w-1 h-5 ml-1 bg-primary animate-pulse" />
      )}
    </div>
  )
}
