'use client'

import type React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@/modules/shared/components/ui/button'
import ProjectBasicInfo from './project-upload-form-sections/ProjectBasicInfo'
import ProjectLinks from './project-upload-form-sections/ProjectLinks'
import ProjectTechnologies from './project-upload-form-sections/ProjectTecnologies'
import ProjectImages from './project-upload-form-sections/ProjectImages'
import ProjectDiagrams from './project-upload-form-sections/ProjectDiagrams'
import { ProjectSchema } from '../../schemas/project-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ARQUITECTURE_DEFAULT_DIAGRAM,
  DATABASE_DEFAULT_DIAGRAM,
} from '../../constants/default-diagrams'
import { useRouter } from 'next/navigation'

export default function ProjectUploadForm() {
  const { push } = useRouter()
  const methods = useForm({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      name: '',
      shortDescription: '',
      longDescription: '',
      slug: '',
      repositoryLink: '',
      liveDemoLink: '',
      technologies: [],
      images: [],
      architectureDiagram: ARQUITECTURE_DEFAULT_DIAGRAM,
      databaseDiagram: DATABASE_DEFAULT_DIAGRAM,
    },
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log('Data final:', data)
    push('/admin/projects')
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-10">
        <div className="flex w-full gap-10 max-lg:flex-col">
          <ProjectBasicInfo />
          <div className="w-full flex flex-col justify-between gap-5">
            <ProjectLinks />
            <ProjectTechnologies />
          </div>
        </div>
        <div className="flex gap-10 w-full max-lg:flex-col">
          <div className="w-[60%] max-lg:w-full">
            <ProjectDiagrams />
          </div>
          <div className="w-[40%] flex max-lg:w-full">
            <ProjectImages />
          </div>
        </div>
        <div className="flex gap-5 mb-10">
          <Button
            type="reset"
            variant="outline"
            size="lg"
            className="flex-1 font-semibold"
          >
            Limpiar Formulario
          </Button>
          <Button type="submit" size="lg" className="flex-1 font-semibold">
            Publicar Proyecto
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
