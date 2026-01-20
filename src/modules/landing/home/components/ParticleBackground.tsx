'use client'

import Particles from '@/modules/shared/components/Particles'
import { useTheme } from 'next-themes'

interface Props {
  className?: string
}
export default function ParticleBackground({ className }: Props) {
  const { theme } = useTheme()
  return (
    <Particles
      particleColors={
        theme === 'dark' ? ['#fff', '#fff'] : ['#000000', '#000000']
      }
      particleCount={200}
      particleSpread={10}
      speed={0.2}
      particleBaseSize={100}
      moveParticlesOnHover={false}
      alphaParticles={false}
      disableRotation={false}
      className={className}
    />
  )
}
