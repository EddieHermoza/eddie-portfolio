import { SlideTransition } from '@/modules/shared/components/SlideTransition'
import Image from 'next/image'
import { Project } from '@/__mocks__/projects'
import ProjectHeader from './ProjectHeader'
import TechnologiesList from './TechnologiesList'
import ProjectActions from './ProjectActions'
import { getPreviewImage } from '../utils/getPreviewImage'

type ProjectHeroSectionProps = {
  project: Project
}

export default function ProjectHeroSection({
  project,
}: ProjectHeroSectionProps) {
  const isPrivate = project.visibility === 'privado'
  const primaryRepo = project.repositories[0]?.link || ''
  const previewImage = getPreviewImage(project.galleryImages)

  return (
    <section className="flex justify-center flex-col gap-20 max-lg:gap-5 relative min-h-[100svh] max-sm:pt-24">
      <ProjectHeader name={project.name} visibility={project.visibility} />

      <div className="flex gap-10 container max-lg:flex-col-reverse max-md:items-center max-lg:gap-5">
        <div className="flex flex-col gap-5 max-lg:mb-10">
          <TechnologiesList 
            technologies={project.technologies} 
            isPrivate={isPrivate} 
          />

          <p className="lg:max-w-xl text-lg max-md:text-sm text-balance max-sm:text-xs">
            {project.longDescription}
          </p>

          <ProjectActions
            primaryRepo={primaryRepo}
            liveDemoLink={project.liveDemoLink}
            isPrivate={isPrivate}
          />
        </div>

        <SlideTransition name={`project-image-${project.slug}`}>
          <Image
            src={previewImage?.src || ''}
            alt={project.name}
            width={previewImage?.width || 960}
            height={previewImage?.height || 540}
            draggable={false}
            priority
            className="rounded max-md:w-full"
          />
        </SlideTransition>
      </div>
    </section>
  )
}
