/* eslint-disable @next/next/no-img-element */
'use client'
import { Card, CardContent } from '@/modules/shared/components/ui/card'
import { Badge } from '@/modules/shared/components/ui/badge'
import { Button } from '@/modules/shared/components/ui/button'
import { IoLogoGithub } from 'react-icons/io'
import { Project } from '@/__mocks__/projects'
interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="shadow-md hover:border-primary/50  transition-all duration-300 flex flex-col h-full border-border">
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        <img
          src={project.galleryImages?.[0]?.src || '/placeholder.svg'}
          alt={project.name}
          className="size-full"
        />
      </div>

      <CardContent className="pt-6 flex-1">
        <div className="mb-4 flex-1">
          <h3 className="text-lg font-bold mb-2 line-clamp-2">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex gap-2 pt-4 border-t border-border">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 gap-2 bg-transparent"
          >
            <a
              href={project.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="size-4" />
              <span className="hidden sm:inline">Repo</span>
            </a>
          </Button>
          <Button asChild size="sm" className="flex-1 gap-2">
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden sm:inline">Demo</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
