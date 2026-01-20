'use client'

import { FormProvider, useForm } from 'react-hook-form'
import BasePrompts from './ia-settings-form-sections/BasePrompts'
import { Button } from '@/modules/shared/components/ui/button'

export default function SettingsForm() {
  const methods = useForm()

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-10">
        <BasePrompts />
        <div className="flex gap-5">
          <Button type="submit" className="flex-1 font-semibold" size={'lg'}>
            Actualizar Configuración
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
