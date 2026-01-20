/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/modules/shared/components/ui/card'
import { Input } from '@/modules/shared/components/ui/input'
import { Upload, X, ImageIcon } from 'lucide-react'
import ErrorMessage from '@/modules/shared/components/ErrorMessage'
import { ProjectSchemaType } from '../../../schemas/project-schema'

interface ImageData {
  file: File
  preview: string
  width: number
  height: number
}

const MAX_FILE_SIZE = 5 * 1024 * 1024

const validateImage = (file: File) => {
  if (!file.type.startsWith('image/')) return 'El archivo debe ser una imagen.'
  if (file.size > MAX_FILE_SIZE)
    return 'El tamaño de la imagen no puede ser mayor a 5MB.'
  return ''
}

export default function ProjectImages() {
  const {
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useFormContext<ProjectSchemaType>()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imageData, setImageData] = useState<ImageData[]>([])
  const [dragActive, setDragActive] = useState(false)

  const handleFiles = (files: File[]) => {
    const validImages: ImageData[] = []
    files.forEach((file) => {
      const error = validateImage(file)
      if (error) {
        console.error(error)
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const img = new Image()
        img.onload = () => {
          validImages.push({
            file,
            preview: reader.result as string,
            width: img.naturalWidth,
            height: img.naturalHeight,
          })
          if (validImages.length > 0) {
            setImageData((prev) => [...prev, ...validImages])
            setValue('images', [...getValues('images'), ...validImages])
            setError('images', { type: 'manual', message: '' })
          }
        }
        img.src = reader.result as string
      }
      reader.readAsDataURL(file)
    })
  }

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }
  const handleDimensionChange = (
    index: number,
    field: 'width' | 'height',
    value: string
  ) => {
    setImageData((prev) =>
      prev.map((img, i) =>
        i === index ? { ...img, [field]: value || '' } : img
      )
    )
    const prevImages = getValues('images')
    const updatedImages = prevImages.map((img, i) =>
      i === index ? { ...img, [field]: value ? Number(value) : 0 } : img
    )
    setValue('images', updatedImages)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files) handleFiles(Array.from(e.dataTransfer.files))
  }

  const handleRemoveImage = (index: number) => {
    const updatedImages = imageData.filter((_, i) => i !== index)
    setImageData(updatedImages)
    setValue('images', updatedImages)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Imágenes del Proyecto</CardTitle>
        <CardDescription>
          Sube capturas de pantalla y imágenes de tu proyecto
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ErrorMessage message={errors.images?.message?.toString()} />
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative border border-dashed rounded-lg p-8 text-center cursor-pointer transition-all mt-2 ${
            dragActive
              ? 'border-primary bg-input/20'
              : 'border-primary/30 bg-input/20 hover:border-primary/40'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={(e) =>
              e.target.files && handleFiles(Array.from(e.target.files))
            }
            className="hidden"
          />
          <div className="flex flex-col items-center gap-2">
            <Upload className="size-5 " />
            <p className="text-sm">
              Arrastra imágenes aquí o haz clic para seleccionar
            </p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG, GIF hasta 5MB cada una
            </p>
          </div>
        </div>

        {imageData.length > 0 && (
          <div className="flex flex-col gap-2">
            <span>Imágenes Cargadas ({imageData.length})</span>
            <div className="py-4 space-y-4 max-h-100 overflow-y-auto custom-scrollbar">
              {imageData.map((img, index) => (
                <div key={index} className="flex gap-5 border rounded p-4 ">
                  <div className="relative rounded-lg overflow-hidden border size-20">
                    <img
                      src={img.preview || '/placeholder.svg'}
                      alt={`Preview ${index + 1}`}
                      className="size-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <label
                        htmlFor={`width-${index}`}
                        className="text-xs flex flex-col gap-2"
                      >
                        Ancho (px)
                        <Input
                          id={`width-${index}`}
                          type="number"
                          placeholder="Ej: 1920"
                          value={img.width}
                          onChange={(e) =>
                            handleDimensionChange(
                              index,
                              'width',
                              e.target.value
                            )
                          }
                          className="h-8 text-sm"
                        />
                      </label>

                      <label
                        htmlFor={`height-${index}`}
                        className="text-xs flex flex-col gap-2"
                      >
                        Alto (px)
                        <Input
                          id={`height-${index}`}
                          type="number"
                          placeholder="Ej: 1080"
                          value={img.height}
                          onChange={(e) =>
                            handleDimensionChange(
                              index,
                              'height',
                              e.target.value
                            )
                          }
                          className="h-8 text-sm"
                        />
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className=" cursor-pointer inline-flex items-center gap-1 px-2 py-1 text-xs text-destructive hover:bg-destructive/10 rounded transition-colors"
                    >
                      <X className="size-4" />
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {imageData.length === 0 && (
          <p className="text-sm text-muted-foreground text-center p-4 bg-muted rounded-lg">
            <ImageIcon className="w-4 h-4 inline mr-2 opacity-50" />
            No hay imágenes cargadas. Agrega al menos una para mejorar la
            presentación.
          </p>
        )}
      </CardContent>
    </Card>
  )
}
