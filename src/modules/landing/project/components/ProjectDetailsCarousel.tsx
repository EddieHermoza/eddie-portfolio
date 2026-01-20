'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import useSWR from 'swr'
import { RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/modules/shared/components/ui/dialog'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import TypewriterMarkdown from '@/modules/shared/components/TypewriterMarkdown'
import { Button } from '@/modules/shared/components/ui/button'
import { Project } from '@/__mocks__/projects'
import { renderNextImage } from './ImageRender'

export default function ProjectDetailsCarousel({
  project,
}: {
  project: Project
}) {
  const Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: Ref,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${(cards.length - 1) * 110}%`]
  )

  return (
    <section
      ref={Ref}
      id="project-details"
      style={{ height: `${cards.length * 100}svh` }}
      className="bg-background"
    >
      <div className="sticky top-0 flex flex-col gap-6 lg:gap-10 h-[100svh] p-0 lg:p-10 overflow-hidden">
        <div className="flex items-center gap-4 lg:gap-10 w-full my-4 lg:mb-10 ">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extralight whitespace-nowrap">
            .. / Características del proyecto
          </h2>
          <span className="h-[2px] flex-1 bg-primary max-lg:hidden"></span>
        </div>

        <motion.div style={{ x }} className="grid grid-flow-col gap-5 h-full">
          {cards.map((card, i) => (
            <Card key={i} {...card} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const fetcher = async ([url, diagram]: [string, string]) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ diagram }),
  })
  if (!response.ok) throw new Error('Error fetching explanation')
  const data = await response.json()
  return data.explanation as string
}

interface CardProps {
  title: string
  description: string
  id: number
  project: Project
}

const Card = ({ title, description, project }: CardProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [open, setOpen] = useState(false)

  const isDiagram = title === 'Arquitectura' || title === 'Base de Datos'

  // Logic to determine which diagrams to show
  const diagrams = project.diagramImages
  const currentDiagrams =
    title === 'Arquitectura' ? diagrams?.architecture : diagrams?.database

  // Get mermaid code for auto-fetching explanation
  const mermaidCode = isDiagram ? currentDiagrams?.mermaidCode : null

  // Auto-fetch explanation from Groq API using mermaidCode
  const { data: explanation, isLoading: loading } = useSWR(
    mermaidCode ? ['/api/groq', mermaidCode] : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )



  const images = project.galleryImages || []

  return (
    <div className="relative w-[95svw] lg:w-[100vw] h-full bg-muted/40 p-4 lg:p-5 flex flex-col gap-4 lg:gap-5 overflow-auto">
      <div className="flex flex-col flex-shrink-0">
        <span className="text-xl lg:text-3xl font-semibold">{title}</span>
        <span className="text-sm lg:text-base text-muted-foreground max-lg:hidden">
          {description}
        </span>
      </div>

      {title === 'UI' ? (
        <div className="w-full flex-1 flex-center overflow-auto">
          {images.length > 0 ? (
            <>
              <div className="w-full max-md:max-w-4xl">
                <RowsPhotoAlbum
                  photos={images}
                  render={{ image: renderNextImage }}
                  onClick={({ index }) => {
                    setSelectedImage(index)
                    setOpen(true)
                  }}
                />
              </div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={selectedImage !== null ? selectedImage : 0}
                slides={images}
                on={{
                  view: ({ index }) => setSelectedImage(index),
                }}
                carousel={{
                  padding: '10%',
                }}
                controller={{ closeOnBackdropClick: true }}
                styles={{
                  container: { backgroundColor: 'rgba(0, 0, 0, .8)' },
                  root: { borderRadius: '36px', overflow: 'hidden' },
                  slide: { borderRadius: '36px', overflow: 'hidden' },
                }}
              />
            </>
          ) : (
            <p className="text-muted-foreground">
              No hay imágenes disponibles para este proyecto.
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 flex-1 overflow-auto relative">
          <div className="h-[65svh] max-lg:w-full relative flex w-1/2 border rounded overflow-hidden">
            {currentDiagrams ? (
              <div className="size-full flex justify-center items-center p-4">
                <img
                  src={currentDiagrams.light}
                  alt={`${title} Diagram Light`}
                  className="max-w-full max-h-full object-contain dark:hidden"
                />
                <img
                  src={currentDiagrams.dark}
                  alt={`${title} Diagram Dark`}
                  className="max-w-full max-h-full object-contain hidden dark:block"
                />
              </div>
            ) : (
              <div className="flex-center border rounded size-full bg-muted/20">
                <p className="text-muted-foreground text-sm">
                  Aún no se realizan los svgs
                </p>
              </div>
            )}
          </div>

          <div className="w-1/2 max-lg:hidden overflow-auto flex flex-col gap-5">
            {loading && (
              <div className="flex flex-col gap-3 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </div>
            )}

            {explanation ? (
              <TypewriterMarkdown content={explanation} />
            ) : (
              !loading && (
                <p className="text-base font-light leading-relaxed">
                  {description}
                </p>
              )
            )}
          </div>
          <div className="flex gap-2 lg:hidden">
            <Dialog>
              <Button className="flex-1" variant="outline" asChild>
                <DialogTrigger>Ver diagrama</DialogTrigger>
              </Button>
              <DialogContent className="max-w-[95vw] w-full max-h-[90vh] overflow-hidden flex flex-col p-1 lg:p-6 select-none">
                <DialogHeader className="p-4">
                  <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-auto custom-scrollbar p-2 rounded-lg flex-center">
                  {currentDiagrams ? (
                    <div className="overflow-auto w-full h-full">
                      <img
                        src={currentDiagrams.light}
                        alt={`${title} Diagram Light`}
                        className="min-w-full h-auto dark:hidden cursor-move"
                        style={{ touchAction: 'pan-x pan-y pinch-zoom' }}
                      />
                      <img
                        src={currentDiagrams.dark}
                        alt={`${title} Diagram Dark`}
                        className="min-w-full h-auto hidden dark:block cursor-move"
                        style={{ touchAction: 'pan-x pan-y pinch-zoom' }}
                      />
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      Aún no se realizan los svgs
                    </p>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <Button className="flex-1" asChild>
                <DialogTrigger>Ver explicación</DialogTrigger>
              </Button>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto custom-scrollbar">
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  {loading && (
                    <div className="flex flex-col gap-3 animate-pulse">
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-4 bg-muted rounded w-full"></div>
                      <div className="h-4 bg-muted rounded w-5/6"></div>
                    </div>
                  )}
                  {explanation ? (
                    <div className="prose prose-sm dark:prose-invert">
                      <TypewriterMarkdown content={explanation} />
                    </div>
                  ) : (
                    !loading && <p>{description}</p>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  )
}

const cards = [
  {
    title: 'UI',
    description:
      'Visualización de la estructura y componentes principales de la interfaz de usuario, mostrando la organización del diseño y su flujo de interacción dentro del proyecto.',
    id: 1,
  },
  {
    title: 'Arquitectura',
    description:
      'Representación de la arquitectura del sistema, incluyendo módulos clave, conexiones entre servicios y distribución de responsabilidades internas.',
    id: 2,
  },
  {
    title: 'Base de Datos',
    description:
      'Esquema general de la base de datos del proyecto, detallando entidades, relaciones y los elementos que definen la estructura del modelo de datos.',
    id: 3,
  },
]
