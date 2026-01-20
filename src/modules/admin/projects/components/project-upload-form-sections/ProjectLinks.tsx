'use client'

import ErrorMessage from '@/modules/shared/components/ErrorMessage'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/modules/shared/components/ui/card'
import { Input } from '@/modules/shared/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { ProjectSchemaType } from '../../../schemas/project-schema'

export default function ProjectLinks() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProjectSchemaType>()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enlaces</CardTitle>
        <CardDescription>
          Proporciona los enlaces a tu repositorio y demostración en vivo
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-5 w-full max-xl:flex-col max-xl:justify-start">
        <label htmlFor="repositoryLink" className="flex flex-col gap-2 text-sm w-full">
          Link del Repositorio *
          <Input
            id="repositoryLink"
            type="text"
            placeholder="https://github.com/usuario/proyecto"
            {...register('repositoryLink')}
          />
          <ErrorMessage message={errors.repositoryLink?.message} />
        </label>
        <label htmlFor="liveDemoLink" className="flex flex-col gap-2 text-sm w-full">
          Link de Demo en Vivo (Opcional)
          <Input
            id="liveDemoLink"
            type="text"
            placeholder="https://tu-proyecto.com o https://tu-proyecto.vercel.app"
            {...register('liveDemoLink')}
          />
          <ErrorMessage message={errors.liveDemoLink?.message} />
        </label>
      </CardContent>
    </Card>
  )
}
