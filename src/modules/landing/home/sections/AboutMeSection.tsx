import Title from '@/modules/shared/components/Title'
import { TECHNOLOGIES } from '@/__mocks__/technologies'
import Image from 'next/image'
export default function AboutMeSection() {
  const frontendTechs = TECHNOLOGIES.find((tech) => tech.type === 'FRONTEND')
  const backendTechs = TECHNOLOGIES.find((tech) => tech.type === 'BACKEND')
  const stylesTechs = TECHNOLOGIES.find((tech) => tech.type === 'STYLES')
  const otherTechs = TECHNOLOGIES.find((tech) => tech.type === 'OTHERS')
  return (
    <section
      id="skills"
      className=" h-screen max-lg:h-auto bg-background flex flex-col relative p-10 gap-20 max-lg:p-5 max-lg:gap-5
      "
    >
      <Title variant="h2" className=" text-5xl max-lg:text-4xl max-md:text-3xl">
        Acerca de mi
      </Title>
      <div className="flex max-lg:flex-col-reverse max-lg:h-full">
        <div className="w-1/2 flex flex-col gap-5 max-lg:w-full">
          <AboutMeCard
            title="Frontend"
            text={frontendTechs?.items.map((tech) => tech).join(' / ')}
          />
          <AboutMeCard
            title="Styles"
            text={stylesTechs?.items.map((tech) => tech).join(' / ')}
          />
          <AboutMeCard
            title="Backend"
            text={backendTechs?.items.map((tech) => tech).join(' / ')}
          />

          <div className="flex-center sm:gap-10 gap-2">
            <p className="max-w-72 text-muted-foreground text-sm sm:text-lg text-center">
              Estas son otras tecnologías que utilizo.
            </p>
            <AboutMeCard
              title="Otros"
              text={otherTechs?.items.map((tech) => tech).join(' / ')}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around lg:w-1/2 gap-10 w-full max-lg:mb-10">
          <p className="lg:max-w-96 max-lg:text-sm text-balance text-muted-foreground w-full">
            Tengo experiencia creando aplicaciones escalables y soluciones
            eficientes orientadas a resolver problemas reales con buenas
            prácticas. Soy una persona adaptable, con mentalidad analítica y
            enfocada en el aprendizaje constante y la comunicación clara.
          </p>
          <Image
            src={'/Logo.webp'}
            alt={''}
            height={450}
            width={369}
            className="filter invert-100 dark:invert-0 max-md:max-w-50"
          />
        </div>
      </div>
    </section>
  )
}

interface AboutMeCardProps {
  title: string
  text?: string
  className?: string
}
const AboutMeCard = ({ title, text, className }: AboutMeCardProps) => {
  return (
    <div
      className={`relative border rounded-3xl p-5 w-fit max-lg:w-full h-40 max-md:h-auto hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground  duration-300 transition-colors ${className}`}
    >
      <span className="text-2xl font-light">{title}</span>
      <p className="text-sm sm:text-base mt-5">{text}</p>
    </div>
  )
}
