'use client'

import { useFormContext } from 'react-hook-form'
import { Input } from '@/modules/shared/components/ui/input'
import { Textarea } from '@/modules/shared/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/modules/shared/components/ui/card'
import ErrorMessage from '@/modules/shared/components/ErrorMessage'
import { ProjectSchemaType } from '../../../schemas/project-schema'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/modules/shared/components/ui/select'

const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function ProjectBasicInfo() {
  const {
    register,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext<ProjectSchemaType>()

  const handleSlugChange = (value: string) => {
    const cleanSlug = generateSlug(value)
    if (cleanSlug.length > 0) {
      setError('slug', { type: 'manual', message: '' })
      setError('name', { type: 'manual', message: '' })
      setValue('slug', cleanSlug)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Información Básica</CardTitle>{' '}
        <CardDescription>
          Ingresa los detalles fundamentales de tu proyecto{' '}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-5 w-full max-xl:flex-col">
          <label htmlFor="name" className="flex flex-col gap-2 text-sm w-full">
            Nombre del Proyecto
            <Input
              id="name"
              placeholder="Ej: E-Commerce Platform"
              {...register('name')}
              onChange={(e) => handleSlugChange(e.target.value)}
            />
            <ErrorMessage message={errors.name?.message} />
          </label>

          <label htmlFor="slug" className="flex flex-col gap-2 text-sm w-full">
            Slug para URL (SEO)
            <div className="flex items-center gap-2">
              <span className="border py-1 px-3 h-9 text-sm text-muted-foreground">
                proyecto /
              </span>
              <Input
                id="slug"
                placeholder="mi-proyecto-increible"
                className="flex-1"
                {...register('slug')}
              />
            </div>
            <ErrorMessage message={errors.slug?.message} />
          </label>
        </div>

        <label
          htmlFor="shortDescription"
          className="flex flex-col gap-2 text-sm"
        >
          Descripción Corta
          <Input
            id="shortDescription"
            placeholder="Una línea que resuma el propósito de tu proyecto"
            {...register('shortDescription')}
          />
          <ErrorMessage message={errors.shortDescription?.message} />
        </label>

        <label
          htmlFor="longDescription"
          className="flex flex-col gap-2 text-sm"
        >
          Descripción Completa
          <Textarea
            id="longDescription"
            placeholder="Describe tu proyecto en detalle..."
            rows={8}
            className="resize-vertical"
            {...register('longDescription')}
          />
          <ErrorMessage message={errors.longDescription?.message} />
        </label>
        <div className="flex gap-5 w-full max-xl:flex-col">
          <label
            htmlFor="status"
            className="flex flex-col gap-2 text-sm w-full"
          >
            Estado del Proyecto
            <Select
              onValueChange={(value) => {
                setValue('status', value as ProjectSchemaType['status'])
                setError('status', { type: 'manual', message: '' })
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona el estado" />
              </SelectTrigger>
              <SelectContent position="item-aligned">
                <SelectItem value="DEVELOPMENT">En Desarrollo</SelectItem>
                <SelectItem value="PAUSED">En Pausa</SelectItem>
                <SelectItem value="COMPLETED">Completado</SelectItem>
              </SelectContent>
            </Select>
            <ErrorMessage message={errors.status?.message} />
          </label>
          <label htmlFor="type" className="flex flex-col gap-2 text-sm w-full">
            Tipo de Proyecto
            <Select
              onValueChange={(value) => {
                setValue('type', value as ProjectSchemaType['type'])
                setError('type', { type: 'manual', message: '' })
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona el tipo de proyecto" />
              </SelectTrigger>
              <SelectContent position="item-aligned">
                <SelectItem value="BACKEND">Backend</SelectItem>
                <SelectItem value="FRONTEND">Frontend</SelectItem>
              </SelectContent>
            </Select>
            <ErrorMessage message={errors.type?.message} />
          </label>
        </div>
      </CardContent>
    </Card>
  )
}
