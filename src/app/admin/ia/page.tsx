import { aldrich } from '@/config/fonts'
import SettingsForm from '@/modules/admin/ia/components/SettingsForm'
import Title from '@/modules/shared/components/Title'
import { ViewTransition } from 'react'
export default function Page() {
  return (
    <>
      <ViewTransition name="page">
        <section className="w-full flex flex-col gap-5">
          <Title
            variant="h2"
            className={`${aldrich.className}  text-5xl tracking-tighter max-lg:text-3xl`}
          >
            Configuración de la IA
          </Title>
        </section>
        <section className="w-full">
          <SettingsForm />
        </section>
      </ViewTransition>
    </>
  )
}
