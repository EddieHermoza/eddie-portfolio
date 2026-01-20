'use client'
import { useEffect, useState } from 'react'
import { HOME_SECTIONS } from '@/modules/landing/home/constants/home-sections'

export default function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = HOME_SECTIONS.findIndex(
              (sec) => sec.section === entry.target.id
            )
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-40% 0px -40% 0px',
      }
    )

    HOME_SECTIONS.forEach((sec) => {
      const element = document.getElementById(sec.section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const current = HOME_SECTIONS[activeIndex].section
    history.replaceState(null, '', `#${current}`)
  }, [activeIndex])

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <aside
        className="
        relative group flex-center h-screen bg-sidebar border-r 
        w-20 hover:w-72 duration-300
        will-change-[width] max-xl:hidden
      "
      >
        <ul className="flex-col gap-4 flex pl-18 group-hover:pl-0 duration-300">
          <span
            className="
            absolute right-0 w-1 h-14 bg-primary rounded-full 
            transition-transform duration-300
            will-change-transform
          "
            style={{
              transform: `translateY(${activeIndex * 72}px)`,
            }}
          />

          {HOME_SECTIONS.map((item, i) => (
            <button
              key={i}
              onClick={() => handleScroll(item.section)}
              className="
              h-14 flex items-center gap-5
              w-32 group-hover:w-44
              p-3 rounded-full
              hover:bg-primary/10
              transition-[width,background-color,opacity,transform] 
              duration-300 will-change-[width,opacity]
            "
            >
              <item.icon size={24} className="shrink-0" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                {item.name}
              </span>
            </button>
          ))}
        </ul>
      </aside>
    </>
  )
}
