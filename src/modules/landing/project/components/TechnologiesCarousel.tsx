'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function TechnologiesCarousel({
  technologies,
}: {
  technologies: string[]
}) {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [technologies])

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden w-full md:hidden"
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-3 w-max"
      >
        {technologies.map((tec, i) => (
          <span
            key={i}
            className={`text-xs border border-primary px-5 py-2 rounded-full lg:text-xs select-none`}
          >
            {tec}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
