'use client'

import { aldrich } from '@/config/fonts'
import { CommitsChart } from '@/modules/admin/dashboard/components/CommitsChart'
import { ProjectsChart } from '@/modules/admin/dashboard/components/ProjectsChart'
import Title from '@/modules/shared/components/Title'
import { ViewTransition } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/modules/shared/components/ui/card'
import { Heatmap } from '@/modules/admin/dashboard/components/Heatmap'
import { Circle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/modules/shared/components/ui/dialog'
import { RiLoader2Fill } from 'react-icons/ri'
import { useState, useEffect } from 'react'

const projectsPerformance = [
  { name: 'API de Usuarios', status: true, responseTime: '120ms' },
  { name: 'Servicio de Pagos', status: false, responseTime: 'timeout' },
  { name: 'Gestor de Archivos', status: true, responseTime: '89ms' },
  { name: 'Backend Blog', status: true, responseTime: '150ms' },
]

export default function DashboardPage() {
  const [showInProgress, setShowInProgress] = useState(false)

  useEffect(() => {
    // Show the in-progress modal when component mounts
    setShowInProgress(true)
  }, [])

  return (
    <>
      <ViewTransition name="page">
        <Title
          variant="h2"
          className={`${aldrich.className}  text-5xl tracking-tighter max-lg:text-3xl mb-10`}
        >
          Analíticas
        </Title>
      </ViewTransition>

      <section className="flex gap-10 max-md:flex-col">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Commits Realizados por mes</CardTitle>
            <CardDescription>
              Crecimiento de commits en todo el año
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CommitsChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Proyectos por Estado</CardTitle>
            <CardDescription>
              Distribución de proyectos según su estado actual.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-center">
            <ProjectsChart />
          </CardContent>
        </Card>
      </section>
      <section className="flex gap-10 mt-5 max-md:flex-col">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Proyectos</CardTitle>
            <CardDescription>
              Monitoreo del tiempo de respuesta y salud de cada proyecto.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {projectsPerformance.map((project, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between p-3 bg-input/30"
                >
                  <span className="font-semibold text-sm">{project.name}</span>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {project.responseTime}
                    </span>

                    <Circle
                      size={12}
                      className={`animate-pulse ${
                        project.status ? ' text-green-500' : 'text-red-500'
                      }`}
                      fill={project.status ? 'currentColor' : 'currentColor'}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Actividad mensual</CardTitle>
            <CardDescription>
              Visualización de actividad diaria durante el mes actual.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Heatmap />
          </CardContent>
        </Card>
      </section>

      <Dialog open={showInProgress} onOpenChange={setShowInProgress}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <RiLoader2Fill className="animate-spin text-primary" />
              En desarrollo
            </DialogTitle>
            <DialogDescription className="pt-4">
              La sección de analíticas está actualmente en desarrollo. Los datos
              mostrados son de ejemplo y no reflejan información real del
              portafolio.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
