import { ContactSchema } from '@/modules/landing/schemas/contact-schema'
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const validatedData = ContactSchema.parse(body)
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL_TO || 'your-email@example.com',
      subject: `Nuevo mensaje de contacto de ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${validatedData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${validatedData.email}</p>
            <p style="margin: 10px 0;"><strong>Mensaje:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
        </div>
      `,
      replyTo: validatedData.email,
    })

    if (error)
      return NextResponse.json(
        { error: 'Error al enviar el mensaje' },
        { status: 500 }
      )

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente', data },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 400 }
    )
  }
}
