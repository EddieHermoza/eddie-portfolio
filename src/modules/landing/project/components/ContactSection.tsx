import Image from 'next/image'
import ContactForm from '@/modules/landing/components/ContactForm'

export default function ContactSection() {
  return (
    <section className="bg-background flex-center flex-col relative p-10 max-lg:p-5">
      <div className="flex justify-around size-full gap-20 mb-10 max-md:mb-5 max-lg:flex-col max-lg:gap-5">
        <div className="flex flex-col justify-between max-sm:items-center max-sm:gap-5">
          <div className="flex flex-col max-lg:gap-5 max-sm:items-center">
            <span className="text-4xl max-md:text-2xl max-sm:text-xl max-sm:mx-auto">
              Envia un mensaje
            </span>
            <p className="text-lg text-muted-foreground max-md:text-base max-sm:text-xs">
              ¿Tienes alguna pregunta, propuesta o simplemente quieres saludar?
              ¡Adelante!
            </p>
          </div>
          <Image
            src={'/Logo.webp'}
            height={280}
            width={200}
            alt="logo"
            className="m-auto filter invert-100 dark:invert-0 max-lg:w-30"
          />
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
