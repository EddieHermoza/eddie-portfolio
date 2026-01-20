'use client'

import { useState, useEffect, useMemo } from 'react'
import { SlideTransition } from '@/modules/shared/components/SlideTransition'
import Link from 'next/link'
import Title from '@/modules/shared/components/Title'
import {
  IoIosArrowRoundForward,
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/modules/shared/hooks/use-mobile'
import { Project, PROJECTS } from '@/__mocks__/projects'

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const isMobile = useIsMobile()

  const projectColumns = useMemo(() => {
    const columns: Project[][] = []
    for (let i = 0; i < PROJECTS.length; i += 2) {
      columns.push(PROJECTS.slice(i, i + 2))
    }
    return columns
  }, [])

  useEffect(() => {
    const handleResize = () => {
      let newItems = 3
      if (window.innerWidth < 768) {
        newItems = 1
      } else if (window.innerWidth < 1024) {
        newItems = 2
      }
      setItemsPerPage(newItems)

      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(0, projectColumns.length - newItems))
      )
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [projectColumns.length])

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, projectColumns.length - itemsPerPage)
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section
      id="projects"
      className="h-screen bg-background flex flex-col relative pt-10 gap-10 max-sm:pt-5"
    >
      <div className="flex justify-between items-end px-10 max-md:px-5">
        <Title variant="h2" className="max-md:w-full text-5xl max-md:text-3xl">
          Proyectos
        </Title>

        <div className="flex gap-4 max-md:hidden">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-3 rounded-full border hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <IoIosArrowBack className="size-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= projectColumns.length - itemsPerPage}
            className="p-3 rounded-full border  hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <IoIosArrowForward className="size-6 text-foreground" />
          </button>
        </div>
      </div>

      <div className="w-full relative overflow-hidden pb-5">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
        >
          {projectColumns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="flex-shrink-0 flex flex-col"
              style={{
                width: `${100 / itemsPerPage}%`,
                boxSizing: 'border-box',
              }}
            >
              {column.map((project) => {
                const isActive = activeProject === project.slug
                return (
                  <article
                    key={project.id}
                    className="relative group overflow-hidden cursor-pointer border w-full aspect-video"
                    onClick={() => {
                      if (isMobile) {
                        setActiveProject(isActive ? null : project.slug)
                      }
                    }}
                  >
                    <SlideTransition
                      name={`project-image-${project.slug}`}
                      className="h-full w-full"
                    >
                      {(() => {
                        const imageSrc =
                          project.galleryImages?.find((img) => img.isPreview)
                            ?.src || project.galleryImages?.[0]?.src

                        return imageSrc ? (
                          <Image
                            src={imageSrc}
                            alt={project.name}
                            width={640}
                            draggable={false}
                            height={360}
                            priority
                            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                              isActive && 'scale-105'
                            }`}
                          />
                        ) : null
                      })()}
                    </SlideTransition>

                    <div
                      className={clsx(
                        'absolute bg-black/70 top-0 right-0 h-full w-2/3',
                        'flex justify-center items-center flex-col gap-2 p-4',
                        'transition-transform duration-300',
                        'group-hover:translate-x-0 translate-x-full',
                        'max-md:translate-x-full',
                        'max-md:group-hover:translate-x-full',
                        {
                          'max-md:!translate-x-0': isActive,
                        }
                      )}
                    >
                      <em className="text-lg text-white max-sm:text-base text-center flex items-center gap-2">
                        {project.name}
                        {project.visibility === 'privado' && (
                          <div className="bg-white/20 p-1 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                x="3"
                                y="11"
                                width="18"
                                height="11"
                                rx="2"
                                ry="2"
                              ></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                          </div>
                        )}
                      </em>
                      <p className="text-sm text-center text-white max-sm:text-xs line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <Link
                        href={`/${project.slug}`}
                        className="mt-5 px-5 py-2 rounded-full gap-2 flex justify-center items-center bg-white text-black text-sm hover:bg-white/90 duration-300 transition-colors"
                      >
                        Ver más
                        <IoIosArrowRoundForward className="shrink-0 size-6" />
                      </Link>
                    </div>
                  </article>
                )
              })}
              {column.length === 1 && (
                <div className="flex-1 w-full aspect-video"></div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex md:hidden justify-center gap-4 mt-5 pb-5">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-3 rounded-full border hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <IoIosArrowBack className="size-6 text-foreground" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex >= projectColumns.length - itemsPerPage}
          className="p-3 rounded-full border hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <IoIosArrowForward className="size-6 text-foreground" />
        </button>
      </div>
    </section>
  )
}
