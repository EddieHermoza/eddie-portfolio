'use client'
import { Button } from './ui/button'
import { BsChevronDoubleDown } from 'react-icons/bs'
interface ScrollButtonProps {
  className?: string
  sectionId: string
}
export default function ScrollButton({
  className,
  sectionId,
}: ScrollButtonProps) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <Button
      size={'lg'}
      className={className}
      onClick={() => handleScroll(sectionId)}
    >
      <BsChevronDoubleDown size={40} strokeWidth={0.3} />
    </Button>
  )
}
