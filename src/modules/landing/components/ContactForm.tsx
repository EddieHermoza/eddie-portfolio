'use client'
import { LiquidButton } from '@/modules/shared/animate-ui/components/buttons/liquid'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ContactSchema } from '../schemas/contact-schema'
import ErrorMessage from '@/modules/shared/components/ErrorMessage'
import { useState } from 'react'
import { toast } from 'sonner'

const inputClassName =
  'outline-none border-b-2 border-input p-2 text-base dark:focus:border-white focus:border-primary duration-300 transition-colors'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: { message: '', name: '', email: '' },
  })

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok)
        throw new Error(result.error || 'Error al enviar el mensaje')

      toast.success(result.message || 'Mensaje enviado exitosamente')
      reset()
    } catch (error) {
      toast.error((error as Error).message || 'Error al enviar el mensaje')
    } finally {
      setIsSubmitting(false)
    }
  })
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col max-w-4xl w-full gap-10 mt-10 lg:mt-30 max-md:mb-5"
      >
        <div className="flex gap-10 w-full max-md:flex-col max-md:gap-7">
          <label
            htmlFor="name"
            className="flex flex-col gap-3 w-full max-md:gap-2"
          >
            <span>Nombre</span>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              className={inputClassName}
              {...register('name')}
            />
            <ErrorMessage message={errors.name?.message} />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col gap-3 w-full max-md:gap-2"
          >
            <span>Correo Electrónico</span>
            <input
              type="text"
              id="email"
              placeholder="Tu correo electrónico"
              className={inputClassName}
              {...register('email')}
            />
            <ErrorMessage message={errors.email?.message} />
          </label>
        </div>
        <label htmlFor="message" className="flex flex-col gap-3 max-md:gap-2">
          <span>Mensaje</span>
          <textarea
            id="message"
            placeholder="Escribe algo..."
            rows={3}
            className={inputClassName}
            {...register('message')}
          />
          <ErrorMessage message={errors.message?.message} />
        </label>

        <LiquidButton
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex-center gap-2 max-w-96 mt-10 relative text-lg mx-auto ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Contactame'}
          <IoIosArrowRoundForward className="size-8" />
        </LiquidButton>
      </form>
    </>
  )
}
