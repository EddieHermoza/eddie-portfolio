import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'

export const dynamic = 'force-dynamic'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
})

export async function POST(req: Request) {
  try {
    const { diagram } = await req.json()

    if (!diagram) {
      return NextResponse.json(
        { error: 'Se requiere diagrama' },
        { status: 400 }
      )
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Eres un arquitecto de software senior. Analiza el único diagrama Mermaid y describe su arquitectura de forma técnica, clara y con algo más de profundidad en cada punto.
    
    Reglas estrictas:
    - Responde SOLO con lista de máximo 6 puntos
    - Cada punto inicia con **Negrita**, seguido de una explicación de 1-2 oraciones cortas
    - Categorías permitidas (usa solo las relevantes):
      **Tipo de arquitectura**
      **Componentes clave**
      **Flujo principal**
      **Bases de datos / Caché**
      **Escalabilidad**
      **Mantenibilidad / Testeabilidad**
      **Razón de elección / Valor principal** (explica el beneficio técnico y de negocio más importante)
      **Trade-off principal** (menciona el principal compromiso asumido)
    - Si es erDiagram → incluye **Modelo de datos** y **Relaciones clave** con breve explicación
    - Si es erDiagram → omite **Base de Datos/ Cache**.
    - Lenguaje técnico pero accesible, directo
    - Sin introducciones, sin conclusiones, sin hablar de sintaxis mermaid`,
        },
        {
          role: 'user',
          content: `Diagrama Mermaid:\n\`\`\`mermaid\n${diagram}\n\`\`\``,
        },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
      max_tokens: 900,
      stream: false,
    })
    const explanation =
      completion.choices[0]?.message?.content ||
      'No se pudo generar explicación'

    return NextResponse.json({ explanation })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Error al generar explicación', details: error.message },
      { status: 500 }
    )
  }
}
