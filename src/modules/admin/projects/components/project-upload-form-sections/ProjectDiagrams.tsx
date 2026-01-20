'use client'

import {
  TabsList,
  TabsTrigger,
  TabsContent,
  Tabs,
} from '@/modules/shared/components/ui/tabs'
import MermaidPlayground from './MermaidPlayground'

export default function ProjectDiagrams() {
  return (
    <Tabs defaultValue="arquitecture" className="w-full h-200">
      <TabsList>
        <TabsTrigger value="arquitecture" className="cursor-pointer">
          Arquitectura
        </TabsTrigger>
        <TabsTrigger value="database" className="cursor-pointer">
          Base de Datos
        </TabsTrigger>
      </TabsList>
      <TabsContent className="h-200" value="arquitecture">
        <MermaidPlayground variant="architectureDiagram" />
      </TabsContent>
      <TabsContent className="h-200" value="database">
        <MermaidPlayground variant="databaseDiagram" />
      </TabsContent>
    </Tabs>
  )
}
