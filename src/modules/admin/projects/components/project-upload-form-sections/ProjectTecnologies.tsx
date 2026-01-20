'use client'

import { useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/modules/shared/components/ui/card'
import { Button } from '@/modules/shared/components/ui/button'
import { Input } from '@/modules/shared/components/ui/input'
import { X } from 'lucide-react'
import ErrorMessage from '@/modules/shared/components/ErrorMessage'
import { ProjectSchemaType } from '../../../schemas/project-schema'
import { COMMON_TECHNOLOGIES } from '@/__mocks__/common-technologies'

export default function ProjectTechnologies() {
  const {
    control,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = useFormContext<ProjectSchemaType>()
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleAddTech = (tech: string) => {
    const trimmed = tech.trim().toUpperCase()
    if (trimmed && !suggestions.includes(trimmed)) {
      setValue('technologies', [...(getValues('technologies') || []), tech])
      setError('technologies', { type: 'manual', message: '' })
      setInputValue('')
      setSuggestions([])
    }
  }

  const handleRemoveTech = (tech: string) => {
    const updatedTechnologies = getValues('technologies').filter(
      (t: string) => t !== tech
    )
    setValue('technologies', updatedTechnologies)
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
    if (value.length > 0) {
      const filtered = COMMON_TECHNOLOGIES.filter(
        (tech) =>
          tech.toUpperCase().includes(value.toUpperCase()) &&
          !getValues('technologies')?.includes(tech.toUpperCase())
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tecnologías Utilizadas</CardTitle>
        <CardDescription>
          Agrega las tecnologías y herramientas que utilizaste en tu proyecto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <label htmlFor="techInput" className="flex flex-col gap-3 text-sm">
          Agregar Tecnología
          <Input
            id="techInput"
            placeholder="Escribe una tecnología (React, TypeScript, etc.)"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleAddTech(inputValue)
              }
            }}
          />
          {suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 p-2">
              {suggestions.map((tech) => (
                <Button
                  key={tech}
                  type="button"
                  size="sm"
                  onClick={() => handleAddTech(tech)}
                  className="text-xs"
                >
                  + {tech}
                </Button>
              ))}
            </div>
          )}
          <ErrorMessage message={errors.technologies?.message} />
        </label>

        <Controller
          name="technologies"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <>
              {field.value.length !== 0 && (
                <div className="flex flex-wrap gap-2 py-2">
                  {field.value.map((tech: string) => (
                    <div
                      key={tech}
                      className="px-3 py-2 bg-primary text-xs rounded-full text-primary-foreground flex-center gap-1"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => handleRemoveTech(tech)}
                      >
                        <X className="size-4 hover:text-red-500 cursor-pointer" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        />
      </CardContent>
    </Card>
  )
}
