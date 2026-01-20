'use client'

import { ProfileSchemaType } from '@/modules/admin/schemas/profile-schema'
import ErrorMessage from '@/modules/shared/components/ErrorMessage'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/modules/shared/components/ui/card'
import { Switch } from '@/modules/shared/components/ui/switch'
import { useFormContext } from 'react-hook-form'

export default function ProfileStatus() {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<ProfileSchemaType>()

  const isTrue = watch('openToWork')
  return (
    <Card className="flex-row justify-between items-center">
      <CardHeader className='w-full'>
        <CardTitle>Estado Laboral</CardTitle>
        <CardDescription>
          Verifica si se esta disponible para trabajar
        </CardDescription>
      </CardHeader>
      <Switch
       className='mr-5'
        checked={isTrue}
        onCheckedChange={(value) => setValue('openToWork', value)}
      />
      <ErrorMessage message={errors.openToWork?.message} />
    </Card>
  )
}
