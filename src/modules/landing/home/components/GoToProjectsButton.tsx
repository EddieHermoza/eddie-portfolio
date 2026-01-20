'use client'
import { LiquidButton } from '@/modules/shared/animate-ui/components/buttons/liquid'

import { IoIosArrowRoundForward } from 'react-icons/io'

const handleScroll = (id: string) => {
  const element = document.getElementById(id)
  if (!element) return
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export default function GoToProjectsButton() {
  return (
    <LiquidButton
      onClick={() => handleScroll('projects')}
      className="flex-center gap-3 rounded-full w-64 h-10 py-3 m-auto"
    >
      <span className="text-lg max-md:text-sm">Ver mis Proyectos</span>
      <IoIosArrowRoundForward className="shrink-0 size-8 max-md:size-6" />
    </LiquidButton>
  )
}
