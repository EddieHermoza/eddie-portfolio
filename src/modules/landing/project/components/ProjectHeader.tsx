import { Badge } from '@/modules/shared/components/ui/badge'
import { Lock } from 'lucide-react'

type ProjectHeaderProps = {
  name: string
  visibility: 'publico' | 'privado'
}

export default function ProjectHeader({
  name,
  visibility,
}: ProjectHeaderProps) {
  const isPrivate = visibility === 'privado'

  return (
    <div className="container flex items-center gap-4 relative z-10">
      <h1 className="text-5xl font-extralight text-muted-foreground max-lg:text-3xl">
        {name}
      </h1>
      <Badge variant={isPrivate ? 'outline' : 'default'} className="capitalize">
        {isPrivate && <Lock size={12} className="mr-1" />}
        {visibility}
      </Badge>
    </div>
  )
}
