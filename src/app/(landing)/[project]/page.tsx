import ProjectDetailsCarousel from '@/modules/landing/project/components/ProjectDetailsCarousel'
import ProjectRepoTree from '@/modules/landing/project/components/ProjectRepoTree'
import ScrollButton from '@/modules/shared/components/ScrollButton'
import { PROJECTS } from '@/__mocks__/projects'
import { Metadata } from 'next'
import { parseGithubRepos } from '@/modules/landing/project/utils/parseGithubRepos'
import { getPreviewImage } from '@/modules/landing/project/utils/getPreviewImage'
import ProjectHeroSection from '@/modules/landing/project/components/ProjectHeroSection'
import ContactSection from '@/modules/landing/project/components/ContactSection'

type Props = {
  params: Promise<{ project: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectSlug = (await params).project
  const project = PROJECTS.find((p) => p.slug === projectSlug)

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
      description: 'El proyecto que buscas no existe',
    }
  }

  const previewImage = getPreviewImage(project.galleryImages)

  return {
    title: `${project.name} | Portfolio`,
    description: project.longDescription,
    keywords: project.technologies.join(', '),
    openGraph: {
      title: project.name,
      description: project.longDescription,
      type: 'website',
      images: previewImage
        ? [
            {
              url: previewImage.src,
              width: previewImage.width,
              height: previewImage.height,
              alt: project.name,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description: project.longDescription,
      images: previewImage ? [previewImage.src] : [],
    },
  }
}


export default async function Page({ params }: Props) {
  const projectSlug = (await params).project
  const project = PROJECTS.find((p) => p.slug === projectSlug)

  if (!project) return <div>Proyecto no encontrado</div>

  const isPrivate = project.visibility === 'privado'
  const parsedRepos = parseGithubRepos(project.repositories)

  return (
    <main className="w-[100svw]">
      <ProjectHeroSection project={project} />

      <ScrollButton
        sectionId="project-details"
        className="absolute bottom-15 left-1/2 rounded-full -translate-x-1/2 w-20 max-lg:hidden"
      />

      <ProjectDetailsCarousel project={project} />

      {!isPrivate && parsedRepos.length > 0 && (
        <ProjectRepoTree repositories={parsedRepos} />
      )}

      <ContactSection />
    </main>
  )
}
