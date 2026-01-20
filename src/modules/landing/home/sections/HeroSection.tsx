import { aldrich } from '@/config/fonts'
import Title from '@/modules/shared/components/Title'

import GoToProjectsButton from '../components/GoToProjectsButton'
import { SOCIAL_NETWORKS } from '../constants/social-networks'
import { Button } from '@/modules/shared/components/ui/button'
import ParticleBackground from '../components/ParticleBackground'

export default function HeroSection() {
  return (
    <section id="home" className="h-screen flex-center flex-col relative">
      <ParticleBackground className="absolute h-screen w-full top-0 left-0" />
      <Title
        variant="h1"
        className={`z-50 absolute top-10 left-10 text-muted-foreground max-md:text-3xl`}
      >
        Eddie Hermoza
      </Title>
      <div className="container absolute bg-transparent z-50 ">
        <div className="flex items-center justify-between gap-10 max-md:flex-col">
          <span
            className={`${aldrich.className} text-9xl tracking-wider max-2xl:text-8xl max-lg:text-7xl max-sm:text-5xl`}
          >
            Full-Stack
          </span>
          <div className="max-md:hidden">
            <GoToProjectsButton />
          </div>
        </div>
        <div className="flex items-center justify-between gap-10 max-md:flex-col-reverse">
          <p
            className={`text-lg text-muted-foreground max-w-96 max-lg:text-base max-md:text-center max-sm:text-sm`}
          >
            Me apasiona desarrollar{' '}
            <em>soluciones rápidas, escalables y efectivas</em> que resuelven
            problemas reales.
          </p>
          <span
            className={`${aldrich.className} text-9xl tracking-wider  max-2xl:text-8xl max-lg:text-7xl max-sm:text-5xl`}
          >
            Developer
          </span>
        </div>
        <div className="md:hidden m-auto flex-center mt-5">
          <GoToProjectsButton />
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-12 text-lg">
          {SOCIAL_NETWORKS.map((item) => (
            <Button
              key={item.name}
              asChild
              className="px-5 py-2 rounded-full gap-3 flex-center "
            >
              <a key={item.name} href="#">
                <item.icon className="" />
                {item.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
