'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/modules/shared/components/ui/card'
import { Input } from '@/modules/shared/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { ProfileSchemaType } from '../../../schemas/profile-schema'
import { Textarea } from '@/modules/shared/components/ui/textarea'
import ErrorMessage from '@/modules/shared/components/ErrorMessage'

export default function ProfileBasicInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProfileSchemaType>()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información Básica</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-6 w-full max-lg:flex-col">
          <label
            htmlFor="number"
            className="text-sm flex flex-col gap-2 w-full"
          >
            Número de Contacto
            <Input id="number" {...register('number')} />
            <ErrorMessage message={errors.number?.message} />
          </label>
          <label htmlFor="email" className="text-sm flex flex-col gap-2 w-full">
            Correo Electrónico
            <Input id="email" {...register('email')} />
            <ErrorMessage message={errors.email?.message} />
          </label>
        </div>
        <label htmlFor="" className="text-sm flex flex-col gap-2">
          Acerca de mi
          <Textarea rows={4} />
          <ErrorMessage message={errors.description?.message} />
        </label>
      </CardContent>
    </Card>
  )
}
