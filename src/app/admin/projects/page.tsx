import { aldrich } from '@/config/fonts'
import ProjectsList from '@/modules/admin/projects/components/ProjectList'
import Title from '@/modules/shared/components/Title'
import { Button } from '@/modules/shared/components/ui/button'
import Link from 'next/link'
import { ViewTransition } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
export default function Page() {
  return (
    <ViewTransition name="page">
      <section className="w-full flex flex-col gap-5">
        <Title
          variant="h2"
          className={`${aldrich.className} text-5xl tracking-tighter`}
        >
          Proyectos
        </Title>
        <div className="flex justify-end">
          <Button asChild>
            <Link href={'/admin/projects/create'} prefetch>
              Registrar Proyecto
              <IoIosArrowRoundForward size={26} className="shrink-0 size-6" />
            </Link>
          </Button>
        </div>
      </section>
      <ProjectsList />
    </ViewTransition>
  )
}
