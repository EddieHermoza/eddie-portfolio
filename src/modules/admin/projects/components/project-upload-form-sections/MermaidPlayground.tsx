'use client'

import CodeMirror, { EditorView, Extension } from '@uiw/react-codemirror'
import { markdown } from '@codemirror/lang-markdown'
import { useState } from 'react'
import MermaidDiagram from '@/modules/shared/components/Mermaid'
import mermaid from 'mermaid'
import { useFormContext } from 'react-hook-form'
import ErrorMessage from '@/modules/shared/components/ErrorMessage'
import {
  ARQUITECTURE_DEFAULT_DIAGRAM,
  DATABASE_DEFAULT_DIAGRAM,
} from '../../../constants/default-diagrams'
import { ProjectSchemaType } from '../../../schemas/project-schema'

const mermaidTheme: Extension = EditorView.theme({
  '&': {
    backgroundColor: 'var(--card)',
    color: 'var(--foreground)',
    padding: '2px',
  },
  '.cm-content': {
    caretColor: 'var(--primary)',
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: 'var(--primary)',
  },
  '.cm-gutters': {
    backgroundColor: 'var(--card)',
    color: 'var(--muted-foreground)',
    borderRight: '1px solid var(--border)',
  },
  '&.cm-focused': {
    outline: 'none !important',

    boxShadow: '0 0 0 2px oklch(0.708 0 0 / 0.5)',
  },
  '.cm-activeLine': {
    backgroundColor: 'var(--accent)',
  },
  '.cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: 'var(--accent)',
  },
})

export type Variant = Extract<
  keyof ProjectSchemaType,
  'architectureDiagram' | 'databaseDiagram'
>

interface Props {
  variant: Variant
}

export default function MermaidPlayground({ variant }: Props) {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<ProjectSchemaType>()

  const initialCode = getValues(variant)
  const [renderedCode, setRenderedCode] = useState<string>(
    initialCode ||
      (variant === ('arquitectureDiagram' as Variant)
        ? ARQUITECTURE_DEFAULT_DIAGRAM
        : DATABASE_DEFAULT_DIAGRAM)
  )

  const [error, setError] = useState<string | null>(null)

  const handleRender = async (value: string) => {
    try {
      const validMermaid = await mermaid.parse(value)
      if (validMermaid) {
        setRenderedCode(value)
        setValue(variant, value)
        setError(null)
      }
    } catch (e: unknown) {
      setError('Errores de sintaxis')
      console.log(e)
    }
  }

  return (
    <div className="w-full flex flex-col gap-4 relative">
      <MermaidDiagram
        className="flex justify-center relative p-4 border rounded h-96 text-xs overflow-y-auto"
        chart={renderedCode}
      />
      <ErrorMessage
        message={error || (errors[variant] && errors[variant].message)}
        className="absolute top-2 left-2"
      />
      <CodeMirror
        value={renderedCode}
        height="100%"
        className="border h-96 text-xs rounded"
        theme={mermaidTheme}
        autoFocus={false}
        basicSetup={{ indentOnInput: false }}
        extensions={[markdown()]}
        onChange={(value) => handleRender(value)}
      />
    </div>
  )
}
