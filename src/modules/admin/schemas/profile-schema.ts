import z from 'zod'

export const ProfileSchema = z.object({
  email: z.email('Debe ser un correo electrónico válido'),
  number: z.string().length(11, 'El número debe tener 11 dígitos'),
  description: z
    .string()
    .min(50, 'La descripción debe tener al menos 50 caracteres')
    .max(300, 'La descripción no puede exceder los 300 caracteres'),
  github: z.url('Debe ser una Url válida de GitHub'),
  linkendin: z.url('Debe ser una URL válida de Linkendin'),
  facebook: z.url('Debe ser una URL válida de Facebook'),
  instagram: z.url('Debe ser una URL válida de Instagram'),
  openToWork: z.boolean('El valor debe ser un booleano'),
  cv: z.instanceof(File, { error: 'Debe subir un archivo de CV' }),
})

export type ProfileSchemaType = z.infer<typeof ProfileSchema>
