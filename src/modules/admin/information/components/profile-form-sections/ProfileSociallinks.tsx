'use client'

import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/modules/shared/components/ui/card'
import { Input } from '@/modules/shared/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { ProfileSchemaType } from '../../../schemas/profile-schema'
import ErrorMessage from '@/modules/shared/components/ErrorMessage'

export default function ProfileSocialLinks() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProfileSchemaType>()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Redes Sociales y Enlaces</CardTitle>
      </CardHeader>
      <CardContent className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2 text-sm">
          <span className="flex items-center gap-2">
            <FaGithub className="size-4" />
            Github
          </span>
          <Input type="url" {...register('github')} />
          <ErrorMessage message={errors.github?.message} />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="flex items-center gap-2">
            <FaLinkedinIn className="size-4" />
            Linkedin
          </span>
          <Input type="url" {...register('linkendin')} />
          <ErrorMessage message={errors.linkendin?.message} />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="flex items-center gap-2">
            <FaInstagram className="size-4" />
            Instagram
          </span>
          <Input type="url" {...register('instagram')} />
          <ErrorMessage message={errors.instagram?.message} />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="flex items-center gap-2">
            <FaFacebook className="size-4" />
            Facebook
          </span>
          <Input type="url" {...register('facebook')} />
          <ErrorMessage message={errors.facebook?.message} />
        </label>
      </CardContent>
    </Card>
  )
}
