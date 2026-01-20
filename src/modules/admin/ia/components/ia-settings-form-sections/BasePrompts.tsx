'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/modules/shared/components/ui/card'
import { Textarea } from '@/modules/shared/components/ui/textarea'

export default function BasePrompts() {
  const [prompts, setPrompts] = useState({
    system:
      'You are a helpful, harmless, and honest AI assistant. Provide accurate and thoughtful responses.',
    context: 'You have access to current information up to April 2024.',
    rules:
      '- Be concise and clear\n- Ask clarifying questions when needed\n- Acknowledge limitations',
  })

  return (
    <div className="flex gap-10 w-full max-lg:flex-col">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Base Prompts</CardTitle>
          <CardDescription>
            Define system prompts and instructions for your model
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <label htmlFor="system" className="flex flex-col gap-2 text-sm">
            Prompt General
            <Textarea
              id="system"
              value={prompts.system}
              onChange={(e) =>
                setPrompts((prev) => ({ ...prev, system: e.target.value }))
              }
              placeholder="Enter system prompt..."
            />
          </label>
          <label htmlFor="context" className="flex flex-col gap-2 text-sm">
            Contexto
            <Textarea
              id="context"
              value={prompts.context}
              onChange={(e) =>
                setPrompts((prev) => ({ ...prev, context: e.target.value }))
              }
              placeholder="Enter context information..."
            />
          </label>
          <label htmlFor="rules" className="flex flex-col gap-2 text-sm">
            Reglas
            <Textarea
              id="rules"
              value={prompts.rules}
              rows={6}
              onChange={(e) =>
                setPrompts((prev) => ({ ...prev, rules: e.target.value }))
              }
              placeholder="Enter rules..."
            />
          </label>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Prompt Completo</CardTitle>
        </CardHeader>
        <CardContent className="h-full relative">
          <div className="bg-accent rounded p-2 h-full space-y-5">
            <span className="text-foreground font-semibold">SYSTEM:</span>
            <p>{prompts.system}</p>
            <div className="text-foreground font-semibold">CONTEXT:</div>
            <p>{prompts.context}</p>
            <span className="text-foreground font-semibold">RULES:</span>
            <p>{prompts.rules}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
