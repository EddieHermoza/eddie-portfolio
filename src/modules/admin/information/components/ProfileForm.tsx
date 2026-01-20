'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ProfileSchema } from '../../schemas/profile-schema'
import ProfileBasicInfo from './profile-form-sections/ProfileBasicInfo'
import ProfileSocialLinks from './profile-form-sections/ProfileSociallinks'
import ProfileCVUpload from './profile-form-sections/ProfileCVUpload'
import { Button } from '@/modules/shared/components/ui/button'
import ProfileStatus from './profile-form-sections/ProfileStatus'

export default function ProfileForm() {
  const methods = useForm({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      email: '',
      number: '',
      linkendin: '',
      github: '',
      instagram: '',
      description: '',
      openToWork: true,
    },
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-10">
        <div className="flex gap-10 max-lg:flex-col">
          <div className="flex flex-col gap-10 w-full">
            <ProfileBasicInfo />
            <ProfileSocialLinks />
            <ProfileStatus />
          </div>
          <ProfileCVUpload />
        </div>
        <div className="flex gap-5">
          <Button type="submit" className="flex-1 font-semibold" size={'lg'}>
            Actualizar Información
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
