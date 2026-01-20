import z from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  email: z.email('Correo electrónico inválido'),
  message: z
    .string()
    .min(1, 'El mensaje es obligatorio')
    .max(500, 'El mensaje no puede exceder los 500 caracteres'),
})

export type ContactSchemaType = z.infer<typeof ContactSchema>
