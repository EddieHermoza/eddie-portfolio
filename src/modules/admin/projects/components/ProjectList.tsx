'use client'

import { useState, useMemo } from 'react'
import { Input } from '@/modules/shared/components/ui/input'
import { Badge } from '@/modules/shared/components/ui/badge'
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from '@/modules/shared/components/ui/empty'
import { Search, Filter } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '@/__mocks__/projects'
import { COMMON_TECHNOLOGIES } from '@/__mocks__/common-technologies'

export default function ProjectsList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesTechs =
        selectedTechnologies.length === 0 ||
        selectedTechnologies.some((tech) => project.technologies.includes(tech))

      return matchesSearch && matchesTechs
    })
  }, [searchQuery, selectedTechnologies])

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    )
  }

  return (
    <>
      <div className="mb-8 space-y-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
          <Input
            placeholder="Buscar proyectos por nombre, descripción o tecnología..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Filter className="size-4 text-muted-foreground" />
            <span className="font-semibold">Filtrar por tecnología</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {COMMON_TECHNOLOGIES.map((tech) => (
              <Badge
                key={tech}
                variant={
                  selectedTechnologies.includes(tech) ? 'default' : 'outline'
                }
                className="cursor-pointer transition-all"
                onClick={() => toggleTechnology(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredProjects.length} proyecto
          {filteredProjects.length !== 1 ? 's' : ''} encontrado
          {filteredProjects.length !== 1 ? 's' : ''}
        </p>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <Empty className="border border-dashed border-border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Search className="size-6 text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle>No se encontraron proyectos</EmptyTitle>
            <EmptyDescription>
              Intenta con otros términos de búsqueda o diferentes filtros de
              tecnología
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </>
  )
}
