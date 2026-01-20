import { z } from 'zod'

export const ProjectSchema = z.object({
  name: z
    .string()
    .min(1, 'El nombre es obligatorio')
    .max(60, 'Máximo 60 caracteres'),

  slug: z
    .string()
    .min(1, 'El slug es obligatorio')
    .regex(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones'),

  shortDescription: z
    .string()
    .min(10, 'La descripción corta debe tener al menos 10 caracteres')
    .max(100, 'Máximo 200 caracteres'),

  longDescription: z
    .string()
    .min(100, 'La descripción larga debe tener al menos 50 caracteres'),

  technologies: z
    .array(z.string().min(1))
    .min(1, 'Debes agregar al menos una tecnología'),

  repositoryLink: z.url('Debe ser un enlace válido'),

  liveDemoLink: z.url('Debe ser un enlace válido').optional(),

  architectureDiagram: z.string().optional(),

  databaseDiagram: z.string().optional(),
  status: z.enum(
    ['DEVELOPMENT', 'PAUSED', 'COMPLETED'],
    'Debe ser un estado de proyecto válido'
  ),
  type: z.enum(['BACKEND', 'FRONTEND'], 'Debe ser un tipo de proyecto válido'),
  images: z
    .array(
      z.object({
        file: z.unknown(),
        width: z.number(),
        height: z.number(),
      })
    )
    .nonempty('Debes subir al menos una imagen'),
})

export type ProjectSchemaType = z.infer<typeof ProjectSchema>
