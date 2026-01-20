import { aldrich } from '@/config/fonts'
import ProjectUploadForm from '@/modules/admin/projects/components/ProjectUploadForm'
import Title from '@/modules/shared/components/Title'
import { Button } from '@/modules/shared/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { ViewTransition } from 'react'
export default function Page() {
  return (
    <ViewTransition name="page">
      <section className="w-full flex items-center gap-5">
        <Button size={'icon-lg'} variant={'ghost'} asChild>
          <Link href={'/admin/projects'}>
            <ChevronLeft className="size-6" />
          </Link>
        </Button>
        <Title
          variant="h2"
          className={`${aldrich.className} text-5xl tracking-tighter max-lg:text-3xl`}
        >
          Registrar un Proyecto
        </Title>
      </section>
      <section className="w-full">
        <ProjectUploadForm />
      </section>
    </ViewTransition>
  )
}
