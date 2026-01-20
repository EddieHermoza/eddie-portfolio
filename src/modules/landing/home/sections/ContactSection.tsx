import Title from '@/modules/shared/components/Title'
import ContactForm from '../../components/ContactForm'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="h-screen bg-background flex-center flex-col relative p-10 max-md:p-5"
    >
      <Title variant="h2" className="w-full text-5xl max-md:text-3xl">
        Contacto
      </Title>

      <div className="flex-center flex-col h-full w-full">
        <div className="text-center space-y-5">
          <span className="text-4xl max-md:text-2xl max-sm:text-xl">
            Envia un mensaje
          </span>
          <p className="text-lg text-muted-foreground max-md:text-base max-sm:text-xs">
            ¿Tienes alguna pregunta, propuesta o simplemente quieres saludar?
            ¡Adelante!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
