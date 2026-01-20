'use client'

import { useRef, useState } from 'react'
import { Upload, X, File } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/modules/shared/components/ui/card'
import { Button } from '@/modules/shared/components/ui/button'
import { useFormContext } from 'react-hook-form'
import { ProfileSchemaType } from '@/modules/admin/schemas/profile-schema'
import ErrorMessage from '@/modules/shared/components/ErrorMessage'

export default function ProfileCVUpload() {
  const {
    setValue,
    formState: { errors },
  } = useFormContext<ProfileSchemaType>()
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      const file = files[0]
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        setCvFile(file)
        setValue('cv', file)
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files[0]) {
      setCvFile(files[0])
      setValue('cv', files[0])
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Curriculum Vitae</CardTitle>
      </CardHeader>
      <CardContent>
        {!cvFile ? (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
              dragActive
                ? 'border-primary bg-input/20'
                : 'border-primary/30 bg-input/20 hover:border-primary/40'
            }`}
          >
            <Upload className="size-6 mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Arrastra tu CV aquí
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              O haz clic para seleccionar (PDF)
            </p>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
              id="cv-upload"
            />
          </div>
        ) : (
          <div className=" border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <File className="size-6 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">{cvFile.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(cvFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <Button
              variant={'ghost'}
              size={'icon-lg'}
              onClick={() => setCvFile(null)}
            >
              <X className="size-5" />
            </Button>
          </div>
        )}
        <ErrorMessage message={errors.cv?.message} />
      </CardContent>
    </Card>
  )
}
